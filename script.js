// ============================================
// Sophie手帐 - JavaScript
// ============================================

var currentLang = 'zh';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    initMobileNav();
    initSmoothScroll();
    initLearnModal();
    initNavLearnBtn();
    initPlannerWizard();
    initImageUpload();
    initContactForm();
    initCatHelper();
    initQA();
    initHelpForm();
    initMBTITest();
    initCalendar();
    initTrackingAutoCheck();
    initColorWheel();
    initResources();
});

// ============================================
// Language Switcher (Fixed)
// ============================================
function initLanguageSwitcher() {
    var langSelector = document.querySelector('.lang-selector');
    var langBtn = document.querySelector('.lang-btn');
    var langOptions = document.querySelectorAll('.lang-option');
    var langCurrent = document.querySelector('.lang-current');

    if (!langSelector) return;

    var savedLang = localStorage.getItem('sophieLang') || 'zh';
    currentLang = savedLang;
    switchLanguage(savedLang);
    langCurrent.textContent = savedLang === 'zh' ? 'CN' : (savedLang === 'tw' ? 'TW' : 'EN');

    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        langSelector.classList.toggle('open');
    });

    document.addEventListener('click', function() {
        langSelector.classList.remove('open');
    });

    langOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            var lang = this.dataset.lang;
            currentLang = lang;
            localStorage.setItem('sophieLang', lang);
            switchLanguage(lang);
            langCurrent.textContent = lang === 'zh' ? 'CN' : (lang === 'tw' ? 'TW' : 'EN');
            langSelector.classList.remove('open');

            langOptions.forEach(function(opt) { opt.classList.remove('selected'); });
            this.classList.add('selected');

            // Re-render dynamic content
            reRenderDynamicContent();
        });
    });
}

function reRenderDynamicContent() {
    // Re-render test question if test is in progress
    var mbtiQuestions = document.getElementById('mbtiQuestions');
    var mbtiResult = document.getElementById('mbtiResult');
    if (mbtiQuestions && mbtiResult && mbtiResult.style.display === 'none' && mbtiCurrentQuestion >= 0) {
        renderMBTIQuestion(mbtiQuestions, mbtiCurrentQuestion);
    }

    // Re-render Q&A
    var qaCollapsible = document.getElementById('qaCollapsible');
    if (qaCollapsible) {
        renderQACollapsible(qaCollapsible);
    }

    // Re-render color palettes (both versions)
    var presetGrid = document.getElementById('presetPaletteGrid');
    var paletteCategories = document.querySelector('.palette-categories');
    if (presetGrid) {
        if (presetPalettes) {
            renderPresetPalettes(presetGrid);
        }
        renderPresetPaletteMiniCards(currentPaletteCategory || 'all');
    }

    // Re-render category tabs
    if (paletteCategories) {
        renderCategoryTabs(paletteCategories);
    }

    // Re-init preset palettes filter buttons
    var paletteFilter = document.getElementById('paletteFilter');
    if (paletteFilter) {
        initPresetPalettes();
    }

    // Re-render user tips list
    renderUserTipsList();

    // Re-init default tips with new language
    defaultTipsInitialized = false;
    defaultTips = [];
    initDefaultTips();
}

function switchLanguage(lang) {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
        var key = el.dataset.i18n;
        var text = translations[lang] && translations[lang][key];
        if (text) {
            if (text.indexOf('<') > -1) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });
}

// ============================================
// Mobile Navigation
// ============================================
function initMobileNav() {
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    var navOverlay = document.getElementById('navOverlay');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        if (navOverlay) navOverlay.classList.toggle('active');
    });

    if (navOverlay) {
        navOverlay.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    }

    navMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
        });
    });
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                // On mobile, account for top navbar height
                var offset = 20;
                if (window.innerWidth <= 768) {
                    offset = 52 + 20;
                }
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Learn Modal
// ============================================
function initLearnModal() {
    var learnBtn = document.getElementById('learnMoreBtn');
    var modal = document.getElementById('learnModal');

    if (!learnBtn || !modal) return;

    learnBtn.addEventListener('click', function() {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    var tabs = modal.querySelectorAll('.modal-tab');
    var panels = modal.querySelectorAll('.modal-panel');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var tabId = this.dataset.tab;
            tabs.forEach(function(t) { t.classList.remove('active'); });
            panels.forEach(function(p) { p.classList.remove('active'); });
            this.classList.add('active');
            document.getElementById('panel-' + tabId).classList.add('active');
        });
    });
}

// ============================================
// Planner Wizard - Enhanced with more variables
// ============================================
var wizardData = {
    background: null,      // 学生/上班族/宝妈/自由职业
    mbtiPJ: null,          // J还是P
    adhdLevel: null,       // 无/轻微/明显
    goals: [],             // 目标（可多选）
    medium: null,          // 纸质/数字
    flexibility: null,     // 灵活性程度
    layout: null,          // 排版紧凑程度
    multiRecord: null      // 同时记录几件事
};
var currentStep = 1;
var totalSteps = 8;

// ============================================
// Extended Type Database with Variants
// ============================================
var typeDatabase = {
    // Timeline及其变体
    timeline: {
        id: 'timeline',
        icon: '⏰',
        nameKey: 'type.timeline.name',
        descKey: 'type.timeline.desc',
        variants: {
            daily: {
                nameKey: 'type.timeline.daily',
                descKey: 'type.timeline.dailyDesc',
                matches: { aesthetic: 'both', layout: 'spacious', multiRecord: 'many', medium: 'paper' }
            },
            weekly: {
                nameKey: 'type.timeline.weekly',
                descKey: 'type.timeline.weeklyDesc',
                matches: { aesthetic: 'practical', layout: 'compact', multiRecord: 'few', medium: 'paper' }
            }
        },
        baseMatches: { pj: 'P', adhd: 'yes', goals: ['time', 'tasks'] }
    },

    // To-do及其变体
    todo: {
        id: 'todo',
        icon: '✅',
        nameKey: 'type.todo.name',
        descKey: 'type.todo.desc',
        noteKey: 'type.todo.note',
        variants: {
            weekly1: {
                nameKey: 'type.todo.weekly1',
                descKey: 'type.todo.weekly1Desc',
                matches: { layout: 'spacious', multiRecord: 'one' }
            },
            weekly2: {
                nameKey: 'type.todo.weekly2',
                descKey: 'type.todo.weekly2Desc',
                matches: { layout: 'compact', multiRecord: 'few' }
            }
        },
        baseMatches: { goals: ['tasks'] }
    },

    // 月历及其变体
    monthly: {
        id: 'monthly',
        icon: '📊',
        nameKey: 'type.monthly.name',
        descKey: 'type.monthly.desc',
        variants: {
            full: {
                nameKey: 'type.monthly.full',
                descKey: 'type.monthly.fullDesc',
                matches: { layout: 'spacious', medium: 'paper' }
            },
            strip: {
                nameKey: 'type.monthly.strip',
                descKey: 'type.monthly.stripDesc',
                matches: { layout: 'compact', medium: 'paper' }
            },
            block: {
                nameKey: 'type.monthly.block',
                descKey: 'type.monthly.blockDesc',
                matches: { layout: 'compact', medium: 'paper' }
            }
        },
        baseMatches: { goals: ['habits', 'reading'], pj: 'J' }
    },

    // 五年日记
    fiveyear: {
        id: 'fiveyear',
        icon: '📔',
        nameKey: 'type.fiveyear.name',
        descKey: 'type.fiveyear.desc',
        variants: null,
        baseMatches: { pj: 'J', adhd: 'no', flexibility: 'low' }
    },

    // 活页本
    looseleaf: {
        id: 'looseleaf',
        icon: '📒',
        nameKey: 'type.looseleaf.name',
        descKey: 'type.looseleaf.desc',
        variants: null,
        baseMatches: { flexibility: 'very-high', medium: 'paper' }
    },

    // 手机App
    app: {
        id: 'app',
        icon: '📱',
        nameKey: 'type.app.name',
        descKey: 'type.app.desc',
        tipKey: 'type.app.tip',
        variants: {
            calendar: { nameKey: 'type.app.calendar' },
            todo: { nameKey: 'type.app.todo' },
            note: { nameKey: 'type.app.note' }
        },
        baseMatches: { flexibility: 'high', medium: 'digital' }
    }
};

// ============================================
// Matching Logic
// ============================================
function calculateMatchScore(type, data) {
    var score = 0;
    var reasons = [];
    var t = translations[currentLang] || translations.en;

    // Base matches
    var base = type.baseMatches || {};

    // MBTI P/J matching
    if (base.pj === data.mbtiPJ) {
        score += 3;
        reasons.push(data.mbtiPJ === 'P' ? t['match.pType'] : t['match.jType']);
    }

    // ADHD matching
    if (base.adhd === 'yes' && (data.adhdLevel === 'mild' || data.adhdLevel === 'significant')) {
        score += 3;
        reasons.push(t['match.adhdFriendly']);
    }
    if (base.adhd === 'no' && data.adhdLevel === 'none') {
        score += 2;
    }

    // Flexibility matching
    if (base.flexibility === 'very-high' && data.flexibility === 'very-frequent') {
        score += 4;
        reasons.push(t['match.highFlex']);
    }
    if (base.flexibility === 'high' && (data.flexibility === 'frequent' || data.flexibility === 'very-frequent')) {
        score += 3;
        reasons.push(t['match.flexFriendly']);
    }
    if (base.flexibility === 'low' && data.flexibility === 'never') {
        score += 2;
    }

    // Medium matching
    if (base.medium === data.medium) {
        score += 2;
        reasons.push(data.medium === 'paper' ? t['match.paperType'] : t['match.digitalType']);
    }

    // Goals matching
    if (base.goals) {
        base.goals.forEach(function(goal) {
            if (data.goals.indexOf(goal) > -1) {
                score += 2;
                reasons.push(t['match.goal_' + goal] || goal);
            }
        });
    }

    // Find best variant
    var bestVariant = null;
    var variantScore = 0;

    if (type.variants) {
        Object.keys(type.variants).forEach(function(vKey) {
            var v = type.variants[vKey];
            var vMatches = v.matches || {};
            var vS = 0;

            // Layout matching (compact/spacious)
            if (vMatches.layout === data.layout) vS += 2;
            // Multi-record matching (one/few/many)
            if (vMatches.multiRecord === data.multiRecord) vS += 1;
            // Medium matching (paper/digital)
            if (vMatches.medium === data.medium) vS += 1;

            if (vS > variantScore) {
                variantScore = vS;
                bestVariant = vKey;
            }
        });
    }

    return {
        score: score + variantScore,
        reasons: reasons,
        variant: bestVariant
    };
}

function initPlannerWizard() {
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var restartBtn = document.getElementById('restartWizard');

    if (!prevBtn || !nextBtn) return;

    // Option click handlers
    document.querySelectorAll('.wizard-option').forEach(function(option) {
        option.addEventListener('click', function() {
            var isMulti = this.closest('.multi-select');

            if (isMulti) {
                this.classList.toggle('selected');
                updateGoals();
            } else {
                var siblings = this.parentElement.querySelectorAll('.wizard-option');
                siblings.forEach(function(s) { s.classList.remove('selected'); });
                this.classList.add('selected');
                updateWizardData();
            }
        });
    });

    prevBtn.addEventListener('click', prevStep);
    nextBtn.addEventListener('click', nextStep);
    if (restartBtn) {
        restartBtn.addEventListener('click', restart);
    }
}

function updateGoals() {
    wizardData.goals = [];
    document.querySelectorAll('#step-4 .wizard-option.selected').forEach(function(el) {
        wizardData.goals.push(el.dataset.value);
    });
}

function updateWizardData() {
    if (currentStep === 1) wizardData.background = getSelectedValue('step-1');
    if (currentStep === 2) wizardData.mbtiPJ = getSelectedValue('step-2');
    if (currentStep === 3) wizardData.adhdLevel = getSelectedValue('step-3');
    if (currentStep === 5) wizardData.medium = getSelectedValue('step-5');
    if (currentStep === 6) wizardData.flexibility = getSelectedValue('step-6');
    if (currentStep === 7) wizardData.layout = getSelectedValue('step-7');
    if (currentStep === 8) wizardData.multiRecord = getSelectedValue('step-8');
}

function getSelectedValue(stepId) {
    var selected = document.querySelector('#' + stepId + ' .wizard-option.selected');
    return selected ? selected.dataset.value : null;
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateView();
    }
}

function nextStep() {
    var valid = validateStep(currentStep);
    if (!valid) {
        showNotification(currentLang === 'en' ? 'Please complete this step' : (currentLang === 'tw' ? '請完成這一步' : '请完成这一步'));
        return;
    }

    if (currentStep >= totalSteps) {
        showResult();
    } else {
        currentStep++;
        updateView();
    }
}

function validateStep(step) {
    switch (step) {
        case 1: return wizardData.background !== null;
        case 2: return wizardData.mbtiPJ !== null;
        case 3: return wizardData.adhdLevel !== null;
        case 4: return wizardData.goals.length > 0;
        case 5: return wizardData.medium !== null;
        case 6: return wizardData.flexibility !== null;
        case 7: return wizardData.layout !== null;
        case 8: return wizardData.multiRecord !== null;
        default: return true;
    }
}

function updateView() {
    document.querySelectorAll('.wizard-step').forEach(function(s) { s.classList.remove('active'); });
    var current = document.getElementById('step-' + currentStep);
    if (current) current.classList.add('active');

    var fill = document.getElementById('progressFill');
    if (fill) fill.style.width = (currentStep / totalSteps * 100) + '%';

    document.querySelectorAll('.progress-step').forEach(function(s, i) {
        s.classList.toggle('active', i < currentStep);
    });

    var prevBtn = document.getElementById('prevBtn');
    if (prevBtn) prevBtn.disabled = currentStep === 1;
}

function showResult() {
    document.querySelectorAll('.wizard-step').forEach(function(s) { s.classList.remove('active'); });
    document.getElementById('step-result').classList.add('active');

    var fill = document.getElementById('progressFill');
    if (fill) fill.style.width = '100%';
    document.querySelectorAll('.progress-step').forEach(function(s) { s.classList.add('active'); });

    document.querySelector('.wizard-nav').style.display = 'none';

    generateTailoredResult();
}

function generateTailoredResult() {
    var container = document.getElementById('resultTypes');
    if (!container) return;

    var t = translations[currentLang] || translations.en;

    // Calculate matches for all types
    var allMatches = [];
    Object.keys(typeDatabase).forEach(function(typeKey) {
        var type = typeDatabase[typeKey];
        var match = calculateMatchScore(type, wizardData);
        if (match.score > 0) {
            allMatches.push({
                type: type,
                typeKey: typeKey,
                score: match.score,
                reasons: match.reasons,
                variant: match.variant
            });
        }
    });

    // Sort and get top matches
    allMatches.sort(function(a, b) { return b.score - a.score; });
    var topMatches = allMatches.slice(0, 4);

    // Build result HTML - more tailored
    var html = '<div class="result-summary-card">';
    html += '<h4>' + (t['planner.yourProfile'] || '你的特点') + '</h4>';
    html += '<div class="profile-tags">';
    html += '<span class="profile-tag">' + (wizardData.mbtiPJ === 'J' ? 'J型' : 'P型') + '</span>';
    if (wizardData.adhdLevel !== 'none') {
        html += '<span class="profile-tag">' + (wizardData.adhdLevel === 'significant' ? '明显ADHD倾向' : '轻微ADHD倾向') + '</span>';
    }
    html += '<span class="profile-tag">' + (wizardData.medium === 'paper' ? '纸质偏好' : '数字偏好') + '</span>';
    var flexLabel = '计划较稳定';
    if (wizardData.flexibility === 'very-frequent') flexLabel = '计划经常大变';
    else if (wizardData.flexibility === 'frequent') flexLabel = '计划常有小变';
    else if (wizardData.flexibility === 'occasional') flexLabel = '计划偶尔小变';
    html += '<span class="profile-tag">' + flexLabel + '</span>';
    html += '</div>';
    html += '</div>';

    html += '<div class="recommended-types">';
    html += '<h4>' + (t['planner.recommendedTypes'] || '推荐类型') + '</h4>';

    topMatches.forEach(function(match, index) {
        var type = match.type;
        var typeName = t[type.nameKey] || type.id;
        var typeDesc = t[type.descKey] || '';

        html += '<div class="type-card tailored">';
        html += '<div class="type-header">';
        html += '<span class="type-icon">' + type.icon + '</span>';
        html += '<span class="type-name">' + typeName + '</span>';
        html += '</div>';

        // Show variant if available
        if (match.variant && type.variants && type.variants[match.variant]) {
            var v = type.variants[match.variant];
            var vName = t[v.nameKey] || match.variant;
            html += '<div class="type-variant">';
            html += '<span class="variant-label">' + (t['planner.variant'] || '推荐变体') + '</span>';
            html += '<span class="variant-name">' + vName + '</span>';
            html += '</div>';
        }

        // Show why this matches
        if (match.reasons.length > 0) {
            html += '<div class="type-reasons">';
            match.reasons.forEach(function(reason) {
                html += '<span class="reason-tag">' + reason + '</span>';
            });
            html += '</div>';
        }

        // Special note for Timeline as first result
        if (index === 0 && match.typeKey === 'timeline') {
            html += '<div class="type-special-note">🎉 恭喜你和作者一样！Timeline是最适合记录时间流动的方式~</div>';
        }

        // Show special notes
        if (type.noteKey) {
            html += '<div class="type-note">' + (t[type.noteKey] || '') + '</div>';
        }
        if (type.tipKey) {
            html += '<div class="type-tip">' + (t[type.tipKey] || '') + '</div>';
        }

        html += '</div>';
    });

    html += '</div>';

    // Combination suggestions
    html += '<div class="combination-suggestions">';
    html += '<h4>' + (t['planner.combinations'] || '组合建议') + '</h4>';

    // Smart combination logic
    if (wizardData.goals.length > 2) {
        html += '<p>' + (t['planner.multiGoalTip'] || '你的目标较多，可以组合使用') + '</p>';
    }

    if (wizardData.mbtiPJ === 'P' && wizardData.adhdLevel !== 'none') {
        html += '<p class="special-tip">💡 ' + (t['planner.pAdhdTip'] || 'P型+ADHD：建议以记录为主，计划为辅。先用Timeline观察时间，再慢慢加入To-do') + '</p>';
    }

    if (wizardData.flexibility === 'very-frequent') {
        html += '<p class="special-tip">💡 ' + (t['planner.highFlexTip'] || '计划变化很频繁：推荐活页本或手机App，方便随时调整') + '</p>';
    }

    if (wizardData.medium === 'paper' && wizardData.flexibility === 'very-frequent') {
        html += '<p class="special-tip">⚠️ ' + (t['planner.paperFlexConflict'] || '纸质偏好但计划变化频繁：考虑活页本，或纸质+手机App组合') + '</p>';
    }

    html += '</div>';

    container.innerHTML = html;
}

function restart() {
    wizardData = {
        background: null,
        mbtiPJ: null,
        adhdLevel: null,
        goals: [],
        medium: null,
        flexibility: null,
        layout: null,
        multiRecord: null
    };
    currentStep = 1;

    document.querySelectorAll('.wizard-option').forEach(function(o) { o.classList.remove('selected'); });
    updateView();
    document.querySelector('.wizard-nav').style.display = '';
}

// ============================================
// Image Upload
// ============================================
function initImageUpload() {
    var uploadArea = document.getElementById('uploadArea');
    var input = document.getElementById('imageUpload');
    var container = document.getElementById('uploadedImages');

    if (!uploadArea || !input) return;

    uploadArea.addEventListener('click', function() { input.click(); });

    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });

    input.addEventListener('change', function(e) {
        handleFiles(e.target.files);
    });

    function handleFiles(files) {
        if (!container) return;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (file.type.startsWith('image/')) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var div = document.createElement('div');
                    div.className = 'uploaded-image';
                    div.innerHTML = '<img src="' + e.target.result + '"><button class="remove-btn">×</button>';
                    div.querySelector('.remove-btn').addEventListener('click', function() { div.remove(); });
                    container.appendChild(div);
                };
                reader.readAsDataURL(file);
            }
        }
    }
}

// ============================================
// Contact Form
// ============================================
function initContactForm() {
    var form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        btn.textContent = '...';
        btn.disabled = true;

        setTimeout(function() {
            showNotification(currentLang === 'en' ? 'Sent successfully!' : (currentLang === 'tw' ? '發送成功！' : '发送成功！'));
            form.reset();
            btn.textContent = currentLang === 'zh' ? '发送' : 'Send';
            btn.disabled = false;
        }, 1000);
    });
}

// ============================================
// Notification
// ============================================
function showNotification(msg) {
    var existing = document.querySelector('.notification');
    if (existing) existing.remove();

    var div = document.createElement('div');
    div.className = 'notification';
    div.textContent = msg;
    div.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#7a6b8a;color:white;padding:12px 20px;border-radius:8px;z-index:9999;';

    document.body.appendChild(div);
    setTimeout(function() { if (div.parentNode) div.remove(); }, 3000);
}

// ============================================
// Cat Helper System (猫咪提示系统) - Enhanced
// ============================================
var catMessages = [];
var catEnabled = true;
var catTimeout = null;
var catPosition = { x: 0, y: 0 };
var catTarget = { x: 0, y: 0 };
var catIsMoving = false;
var catIsGrabbed = false;
var catMoveInterval = null;
var catRoamingInterval = null;
var catVisibility = 'private';

// Default tips - loaded from journalTips data
var defaultTips = [];
var defaultTipsInitialized = false;

function initDefaultTips() {
    if (defaultTipsInitialized || !journalTips) return;
    var isEn = currentLang === 'en';
    var isTw = currentLang === 'tw';

    journalTips.forEach(function(tip) {
        var content = isEn ? (tip.contentEn || tip.content) : (isTw ? (tip.contentTw || tip.content) : tip.content);
        defaultTips.push({ type: 'tip', content: content, source: 'default' });
    });

    // Add some reminders
    var reminderText = isEn ? 'Don\'t forget to check in today~' : (isTw ? '别忘了今日打卡哦~' : '别忘了今日打卡哦~');
    defaultTips.push({ type: 'reminder', content: reminderText, source: 'default' });

    defaultTipsInitialized = true;
}

function initCatHelper() {
    var catHelper = document.getElementById('catHelper');
    var catToggle = document.getElementById('catToggleBtn');
    var ideaBoxBtn = document.getElementById('ideaBoxBtn');

    if (!catHelper || !catToggle) return;

    // Load saved preference
    var saved = localStorage.getItem('catEnabled');
    catEnabled = saved === null ? true : saved === 'true';

    // Load user tips
    loadUserTips();

    // Set initial position (bottom-right)
    catPosition = {
        x: window.innerWidth - 100,
        y: window.innerHeight - 150
    };
    updateCatPosition();

    if (catEnabled) {
        catToggle.classList.add('active');
        catHelper.classList.add('visible');
        startCatRoaming();
    }

    // Toggle button - click handler
    catToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        catEnabled = !catEnabled;
        localStorage.setItem('catEnabled', catEnabled);

        if (catEnabled) {
            catToggle.classList.add('active');
            catHelper.classList.add('visible');
            startCatRoaming();
        } else {
            catToggle.classList.remove('active');
            catHelper.classList.remove('visible');
            stopCatRoaming();
        }
    });

    // Idea box button
    if (ideaBoxBtn) {
        ideaBoxBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openIdeaBox();
        });
    }

    // Drag functionality
    initCatDrag();

    // Initialize idea box
    initIdeaBox();
}

function getRandomPosition() {
    var padding = 100;
    var maxX = window.innerWidth - padding;
    var maxY = window.innerHeight - padding - 100; // Account for navbar and sign

    return {
        x: padding + Math.random() * (maxX - padding),
        y: padding + Math.random() * (maxY - padding)
    };
}

function updateCatPosition() {
    var catHelper = document.getElementById('catHelper');
    if (!catHelper) return;

    // Use right/bottom positioning instead of left/top for more natural positioning
    if (catPosition.x && catPosition.y) {
        catHelper.style.right = 'auto';
        catHelper.style.bottom = 'auto';
        catHelper.style.left = catPosition.x + 'px';
        catHelper.style.top = catPosition.y + 'px';
    }
}

function startCatRoaming() {
    if (!catEnabled) return;

    var catHelper = document.getElementById('catHelper');
    if (!catHelper) return;

    catHelper.classList.add('visible');
    showRandomMessage();

    // Clear any existing intervals
    if (catRoamingInterval) clearInterval(catRoamingInterval);

    // Move every 5-8 seconds
    catRoamingInterval = setInterval(function() {
        if (!catIsGrabbed && catEnabled) {
            catTarget = getRandomPosition();
            moveCatToTarget();
        }
    }, 5000 + Math.random() * 3000);

    // Show message periodically
    setInterval(function() {
        if (!catIsGrabbed && catEnabled) {
            showRandomMessage();
        }
    }, 30000 + Math.random() * 15000); // 30-45秒换一个tips
}

function stopCatRoaming() {
    if (catRoamingInterval) clearInterval(catRoamingInterval);
    if (catMoveInterval) clearInterval(catMoveInterval);
    catIsMoving = false;
}

function moveCatToTarget() {
    if (catIsGrabbed) return;

    catIsMoving = true;

    var dx = catTarget.x - catPosition.x;
    var dy = catTarget.y - catPosition.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 5) {
        catIsMoving = false;
        return;
    }

    var speed = 3;
    var steps = Math.ceil(distance / speed);

    var stepX = dx / steps;
    var stepY = dy / steps;

    var step = 0;

    catMoveInterval = setInterval(function() {
        if (catIsGrabbed || step >= steps) {
            clearInterval(catMoveInterval);
            catIsMoving = false;
            return;
        }

        catPosition.x += stepX;
        catPosition.y += stepY;
        updateCatPosition();
        step++;
    }, 30);
}

function showRandomMessage() {
    var catMessage = document.getElementById('catMessage');
    if (!catMessage) return;

    // Initialize default tips if needed
    initDefaultTips();

    // Combine default tips with user tips
    var allTips = defaultTips.concat(catMessages.filter(function(t) {
        return t.visibility === 'public' || t.source === 'user-private';
    }));

    if (allTips.length === 0) allTips = defaultTips;

    var msg = allTips[Math.floor(Math.random() * allTips.length)];
    catMessage.textContent = msg.content;
}

function initCatDrag() {
    var catHelper = document.getElementById('catHelper');
    var catEmoji = document.getElementById('catEmoji');
    var catSign = document.getElementById('catSign');

    if (!catHelper) return;

    var offsetX, offsetY;

    catHelper.addEventListener('mousedown', function(e) {
        if (!catEnabled) return;
        e.preventDefault();

        catIsGrabbed = true;
        stopCatRoaming();
        catHelper.classList.add('grabbing');

        // Switch to lying cat emoji
        if (catEmoji) {
            catEmoji.textContent = '🐈‍⬛';
            catEmoji.classList.add('lying');
        }
        if (catSign) catSign.style.display = 'none';

        var rect = catHelper.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    // Touch support for mobile
    catHelper.addEventListener('touchstart', function(e) {
        if (!catEnabled) return;
        e.preventDefault();

        catIsGrabbed = true;
        stopCatRoaming();
        catHelper.classList.add('grabbing');

        if (catEmoji) {
            catEmoji.textContent = '🐈‍⬛';
            catEmoji.classList.add('lying');
        }
        if (catSign) catSign.style.display = 'none';

        var touch = e.touches[0];
        var rect = catHelper.getBoundingClientRect();
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;

        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
    });

    function onMouseMove(e) {
        if (!catIsGrabbed) return;

        catPosition.x = e.clientX - offsetX;
        catPosition.y = e.clientY - offsetY;

        // Keep within bounds
        catPosition.x = Math.max(0, Math.min(window.innerWidth - 60, catPosition.x));
        catPosition.y = Math.max(50, Math.min(window.innerHeight - 60, catPosition.y));

        updateCatPosition();
    }

    function onMouseUp() {
        if (!catIsGrabbed) return;

        catIsGrabbed = false;
        catHelper.classList.remove('grabbing');
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        stopCatRoaming();

        // Switch back to walking cat
        setTimeout(function() {
            if (catEmoji) {
                catEmoji.textContent = '🐱';
                catEmoji.classList.remove('lying');
            }
            if (catSign) catSign.style.display = 'block';
        }, 300);

        // Continue showing tips periodically but don't move
        setInterval(function() {
            if (!catIsGrabbed && catEnabled) {
                showRandomMessage();
            }
        }, 30000 + Math.random() * 15000);
    }

    function onTouchMove(e) {
        if (!catIsGrabbed) return;
        e.preventDefault();

        var touch = e.touches[0];
        catPosition.x = touch.clientX - offsetX;
        catPosition.y = touch.clientY - offsetY;

        // Keep within bounds
        catPosition.x = Math.max(0, Math.min(window.innerWidth - 80, catPosition.x));
        catPosition.y = Math.max(50, Math.min(window.innerHeight - 80, catPosition.y));

        updateCatPosition();
    }

    function onTouchEnd() {
        if (!catIsGrabbed) return;

        catIsGrabbed = false;
        catHelper.classList.remove('grabbing');
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);

        stopCatRoaming();

        setTimeout(function() {
            if (catEmoji) {
                catEmoji.textContent = '🐱';
                catEmoji.classList.remove('lying');
            }
            if (catSign) catSign.style.display = 'block';
        }, 300);
    }
}

function escapeToNearestEdge() {
    var catHelper = document.getElementById('catHelper');
    if (!catHelper) return;

    catHelper.classList.add('escaping');

    var distances = {
        left: catPosition.x,
        right: window.innerWidth - catPosition.x,
        top: catPosition.y - 50,
        bottom: window.innerHeight - catPosition.y
    };

    var nearestEdge = 'left';
    var minDist = distances.left;

    Object.keys(distances).forEach(function(edge) {
        if (distances[edge] < minDist) {
            minDist = distances[edge];
            nearestEdge = edge;
        }
    });

    // Set target position at edge
    var padding = 20;
    switch (nearestEdge) {
        case 'left':
            catPosition.x = -padding;
            break;
        case 'right':
            catPosition.x = window.innerWidth - padding;
            break;
        case 'top':
            catPosition.y = 50 + padding;
            break;
        case 'bottom':
            catPosition.y = window.innerHeight - padding;
            break;
    }

    updateCatPosition();

    setTimeout(function() {
        catHelper.classList.remove('escaping');
        // Get new random position
        catPosition = getRandomPosition();
        updateCatPosition();
    }, 500);
}

// ============================================
// Tips Idea Box (灵感收集箱)
// ============================================
function initIdeaBox() {
    var ideaBoxModal = document.getElementById('ideaBoxModal');
    var ideaBoxClose = document.getElementById('ideaBoxClose');
    var ideaSubmitBtn = document.getElementById('ideaSubmitBtn');
    var ideaInput = document.getElementById('ideaInput');

    if (!ideaBoxModal) return;

    // Close modal
    if (ideaBoxClose) {
        ideaBoxClose.addEventListener('click', closeIdeaBox);
    }

    ideaBoxModal.addEventListener('click', function(e) {
        if (e.target === ideaBoxModal) {
            closeIdeaBox();
        }
    });

    // Submit tip
    if (ideaSubmitBtn) {
        ideaSubmitBtn.addEventListener('click', submitTip);
    }
}

function openIdeaBox() {
    var ideaBoxModal = document.getElementById('ideaBoxModal');
    if (!ideaBoxModal) return;

    ideaBoxModal.classList.add('open');
    renderUserTipsList();
}

function closeIdeaBox() {
    var ideaBoxModal = document.getElementById('ideaBoxModal');
    if (!ideaBoxModal) return;

    ideaBoxModal.classList.remove('open');
}

function selectVisibility(element) {
    var options = document.querySelectorAll('.visibility-option');
    options.forEach(function(opt) { opt.classList.remove('selected'); });
    element.classList.add('selected');
    catVisibility = element.dataset.visibility;
}

// Make it global for onclick
window.selectVisibility = selectVisibility;

function submitTip() {
    var ideaInput = document.getElementById('ideaInput');
    if (!ideaInput) return;

    var content = ideaInput.value.trim();
    if (!content) {
        showNotification(currentLang === 'en' ? 'Please enter content' : (currentLang === 'tw' ? '請輸入內容' : '请输入内容'));
        return;
    }

    var newTip = {
        content: content,
        visibility: catVisibility,
        source: catVisibility === 'private' ? 'user-private' : 'user-public',
        timestamp: Date.now()
    };

    // Save to localStorage
    var savedTips = localStorage.getItem('userTips');
    var tips = savedTips ? JSON.parse(savedTips) : [];
    tips.push(newTip);
    localStorage.setItem('userTips', JSON.stringify(tips));

    // Add to current messages
    catMessages.push(newTip);

    // Clear input and show success
    ideaInput.value = '';
    showNotification(currentLang === 'en' ? 'Tip added!' : (currentLang === 'tw' ? '靈感已添加！' : '灵感已添加！'));

    // Update list
    renderUserTipsList();

    // Close modal
    setTimeout(closeIdeaBox, 500);
}

function loadUserTips() {
    var savedTips = localStorage.getItem('userTips');
    if (savedTips) {
        catMessages = JSON.parse(savedTips);
    }
}

function renderUserTipsList() {
    var container = document.getElementById('userTipsList');
    if (!container) return;

    var isEn = currentLang === 'en';
    var isTw = currentLang === 'tw';

    var savedTips = localStorage.getItem('userTips');
    var tips = savedTips ? JSON.parse(savedTips) : [];

    var titleText = isEn ? 'Your inspirations:' : (isTw ? '你的靈感：' : '你的灵感：');
    var emptyText = isEn ? 'No inspirations yet, come add some~' : (isTw ? '還沒有靈感，快來添加吧~' : '还没有灵感，快来添加吧~');

    if (tips.length === 0) {
        container.innerHTML = '<p class="user-tips-title">' + titleText + '</p><p style="color:var(--color-text-muted);font-size:0.8rem;">' + emptyText + '</p>';
        return;
    }

    var html = '<p class="user-tips-title">' + titleText + '</p>';
    tips.forEach(function(tip, index) {
        var icon = tip.visibility === 'private' ? '🔒' : '🌍';
        html += '<div class="user-tip-item">';
        html += '<span class="user-tip-icon">' + icon + '</span>';
        html += '<span class="user-tip-text">' + tip.content + '</span>';
        html += '<button class="user-tip-delete" onclick="deleteTip(' + index + ')">×</button>';
        html += '</div>';
    });

    container.innerHTML = html;
}

function deleteTip(index) {
    var savedTips = localStorage.getItem('userTips');
    var tips = savedTips ? JSON.parse(savedTips) : [];

    tips.splice(index, 1);
    localStorage.setItem('userTips', JSON.stringify(tips));
    catMessages = tips;

    renderUserTipsList();
    var deleteText = currentLang === 'en' ? 'Deleted' : (currentLang === 'tw' ? '已刪除' : '已删除');
    showNotification(deleteText);
}

// Make it global for onclick
window.deleteTip = deleteTip;

// ============================================
// Nav Learn Button
// ============================================
function initNavLearnBtn() {
    var navLearnBtn = document.getElementById('navLearnBtn');
    var learnModal = document.getElementById('learnModal');

    if (!navLearnBtn || !learnModal) return;

    navLearnBtn.addEventListener('click', function(e) {
        e.preventDefault();
        learnModal.classList.add('open');
    });
}

// ============================================
// Tracking Auto-Check
// ============================================
function initTrackingAutoCheck() {
    var trackingBtn = document.getElementById('trackingBtn');

    if (!trackingBtn) return;

    trackingBtn.addEventListener('click', function() {
        // Auto-check today
        var today = new Date();
        var key = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        if (!checkedDays[key]) {
            checkedDays[key] = true;
            localStorage.setItem('journalCalendar', JSON.stringify(checkedDays));
        }

        // Scroll to track section
        var trackSection = document.getElementById('track');
        if (trackSection) {
            trackSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Update calendar display
        var calendarGrid = document.getElementById('calendarGrid');
        if (calendarGrid) {
            renderCalendar(calendarGrid, document.getElementById('calendarMonth'));
        }
    });
}

// ============================================
// Color Quiz
// ============================================
function initColorQuiz() {
    var quizOptions = document.querySelectorAll('.quiz-option');
    var quizResult = document.getElementById('colorQuizResult');

    if (!quizOptions.length) return;

    quizOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Remove selected from all
            quizOptions.forEach(function(o) { o.classList.remove('selected'); });
            this.classList.add('selected');

            // Show result
            var style = this.dataset.style;
            showColorQuizResult(style, quizResult);
        });
    });
}

function showColorQuizResult(style, container) {
    if (!container) return;

    var results = {
        impressionist: { name: '印象派风格', colors: ['#4A90A4', '#F5DEB3', '#C9A66B', '#7B8D6E'], desc: '柔和自然的色调，如同莫奈的画作' },
        baroque: { name: '巴洛克风格', colors: ['#8B4513', '#DAA520', '#4A3728', '#800020'], desc: '深沉华丽的金棕色调' },
        minimalist: { name: '极简主义', colors: ['#FFFFFF', '#F5F5F5', '#333333', '#CCCCCC'], desc: '黑白灰的纯粹配色' },
        japanese: { name: '日式和风', colors: ['#E8D4C4', '#D4AF37', '#8FBC8F', '#2F4F4F'], desc: '淡雅禅意的自然色系' },
        vintage: { name: '复古风格', colors: ['#CD853F', '#DEB887', '#8B0000', '#704214'], desc: '怀旧温暖的复古色调' }
    };

    var result = results[style];
    if (!result) return;

    var html = '<p style="font-weight:600;color:var(--color-primary);">' + result.name + '</p>';
    html += '<div style="display:flex;gap:8px;margin:8px 0;">';
    result.colors.forEach(function(c) {
        html += '<div style="width:30px;height:30px;background:' + c + ';border-radius:4px;"></div>';
    });
    html += '</div>';
    html += '<p style="font-size:0.85rem;color:var(--color-text-muted);">' + result.desc + '</p>';

    container.innerHTML = html;
}

// ============================================
// Art Styles Display
// ============================================
// ============================================
// Color Palette Tool (Expanded)
// ============================================
var currentPaletteCategory = 'all';
var currentScheme = 'complementary';

function initArtStyles() {
    initPaletteTool();
}

function initPaletteTool() {
    // Check if elements exist
    var categoryTabsContainer = document.getElementById('paletteCategoryTabs');
    var presetGrid = document.getElementById('presetPaletteGrid');
    var baseColorPicker = document.getElementById('baseColorPicker');
    var baseColorHex = document.getElementById('baseColorHex');
    var schemeOptionsContainer = document.getElementById('schemeOptions');
    var generatedPaletteContainer = document.getElementById('generatedPalette');

    if (!presetGrid || !presetPalettes) return;

    // Initialize category tabs
    if (categoryTabsContainer) {
        renderCategoryTabs(categoryTabsContainer);
    }

    // Render preset palettes
    renderPresetPalettes(presetGrid);

    // Initialize color picker
    if (baseColorPicker && baseColorHex) {
        baseColorPicker.addEventListener('input', function() {
            baseColorHex.textContent = this.value.toUpperCase();
            updateGeneratedPalette();
        });
    }

    // Initialize scheme options
    if (schemeOptionsContainer) {
        renderSchemeOptions(schemeOptionsContainer);
    }

    // Initial generated palette
    updateGeneratedPalette();
}

function renderCategoryTabs(container) {
    var isEn = currentLang === 'en';
    var isTw = currentLang === 'tw';
    var allText = isEn ? 'All' : (isTw ? '全部' : '全部');

    var html = '<button class="palette-category-tab active" data-category="all">' + allText + '</button>';
    styleCategories.forEach(function(cat) {
        html += '<button class="palette-category-tab" data-category="' + cat.name + '">' + cat.icon + ' ' + (isEn ? (cat.nameEn || cat.name) : (isTw ? (cat.nameTw || cat.name) : cat.name)) + '</button>';
    });
    container.innerHTML = html;

    // Add click handlers
    container.querySelectorAll('.palette-category-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            currentPaletteCategory = this.dataset.category;
            container.querySelectorAll('.palette-category-tab').forEach(function(t) { t.classList.remove('active'); });
            this.classList.add('active');
            renderPresetPalettes(document.getElementById('presetPaletteGrid'));
        });
    });
}

function renderPresetPalettes(container) {
    if (!container) return;
    var isEn = currentLang === 'en';
    var isTw = currentLang === 'tw';

    var filteredPalettes = presetPalettes;
    if (currentPaletteCategory !== 'all') {
        filteredPalettes = presetPalettes.filter(function(p) {
            return p.category === currentPaletteCategory;
        });
    }

    var html = '';
    filteredPalettes.forEach(function(palette) {
        html += '<div class="palette-card">';
        html += '<div class="palette-card-name">' + (isEn ? (palette.nameEn || palette.name) : (isTw ? (palette.nameTw || palette.name) : palette.name)) + '</div>';
        html += '<div class="palette-card-desc">' + (isEn ? (palette.descriptionEn || palette.description) : (isTw ? (palette.descriptionTw || palette.description) : palette.description)) + '</div>';
        html += '<div class="palette-colors-display">';
        palette.colors.forEach(function(color) {
            html += '<div class="palette-color-block" style="background-color: ' + color.hex + '" data-hex="' + color.hex + '" data-name="' + (isEn ? (color.nameEn || color.name) : (isTw ? (color.nameTw || color.name) : color.name)) + '"></div>';
        });
        html += '</div>';
        html += '</div>';
    });
    container.innerHTML = html;

    // Add click handlers to copy colors
    container.querySelectorAll('.palette-color-block').forEach(function(block) {
        block.addEventListener('click', function() {
            var hex = this.dataset.hex;
            var name = this.dataset.name;
            copyColor(hex, name);
        });
    });
}

function renderSchemeOptions(container) {
    var schemes = [
        { id: 'monochromatic', name: '同色系' },
        { id: 'complementary', name: '互补色' },
        { id: 'analogous', name: '邻近色' },
        { id: 'triadic', name: '三角色' },
        { id: 'splitComplementary', name: '分裂互补' },
        { id: 'tetradic', name: '四角色' },
        { id: 'warm', name: '暖色调' },
        { id: 'cool', name: '冷色调' },
        { id: 'pastel', name: '粉彩色' }
    ];

    var html = '';
    schemes.forEach(function(scheme) {
        var activeClass = scheme.id === currentScheme ? ' active' : '';
        html += '<button class="scheme-option' + activeClass + '" data-scheme="' + scheme.id + '">' + scheme.name + '</button>';
    });
    container.innerHTML = html;

    // Add click handlers
    container.querySelectorAll('.scheme-option').forEach(function(option) {
        option.addEventListener('click', function() {
            currentScheme = this.dataset.scheme;
            container.querySelectorAll('.scheme-option').forEach(function(o) { o.classList.remove('active'); });
            this.classList.add('active');
            updateGeneratedPalette();
        });
    });
}

function updateGeneratedPalette() {
    var baseColorPicker = document.getElementById('baseColorPicker');
    var generatedPaletteContainer = document.getElementById('generatedPalette');

    if (!baseColorPicker || !generatedPaletteContainer) return;

    var baseHex = baseColorPicker.value;
    var colors = generatePaletteFromBase(baseHex, currentScheme);

    if (!colors) return;

    var html = '';
    colors.forEach(function(color) {
        html += '<div class="generated-color">';
        html += '<div class="generated-color-block" style="background-color: ' + color.hex + '" data-hex="' + color.hex + '"></div>';
        html += '<span class="generated-color-name">' + color.name + '</span>';
        html += '<span class="generated-color-hex">' + color.hex + '</span>';
        html += '</div>';
    });
    generatedPaletteContainer.innerHTML = html;

    // Add click handlers
    generatedPaletteContainer.querySelectorAll('.generated-color-block').forEach(function(block) {
        block.addEventListener('click', function() {
            var hex = this.dataset.hex;
            copyColor(hex, hex);
        });
    });
}

function copyColor(hex, name) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(hex).then(function() {
            showCopyTooltip('已复制: ' + hex);
        });
    } else {
        var textarea = document.createElement('textarea');
        textarea.value = hex;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showCopyTooltip('已复制: ' + hex);
    }
}

function showCopyTooltip(message) {
    var tooltip = document.querySelector('.copy-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        document.body.appendChild(tooltip);
    }
    tooltip.textContent = message;
    tooltip.classList.add('show');
    setTimeout(function() {
        tooltip.classList.remove('show');
    }, 1500);
}

// ============================================
// Q&A Section
// ============================================
var currentQaCategory = 'all';

function initQA() {
    var qaCollapsible = document.getElementById('qaCollapsible');

    if (!qaCollapsible || !qaData) return;

    // Render all Q&A initially as collapsible cards
    renderQACollapsible(qaCollapsible);
}

function renderQACollapsible(container) {
    var isEn = currentLang === 'en';
    var isTw = currentLang === 'tw';
    var html = '';
    qaData.forEach(function(qa, index) {
        html += '<div class="qa-card-collapsible">';
        html += '<div class="qa-question" onclick="this.parentElement.classList.toggle(\'open\')">';
        html += '<span class="qa-q-icon">Q</span>';
        html += '<span class="qa-q-text">' + (isEn ? (qa.questionEn || qa.question) : (isTw ? (qa.questionTw || qa.question) : qa.question)) + '</span>';
        html += '<span class="qa-toggle">▼</span>';
        html += '</div>';
        html += '<div class="qa-answer">';
        html += '<div class="qa-answer-content">' + (isEn ? (qa.answerEn || qa.answer) : (isTw ? (qa.answerTw || qa.answer) : qa.answer)) + '</div>';
        html += '</div>';
        html += '</div>';
    });

    container.innerHTML = html;
}

// ============================================
// Help Request Form
// ============================================
function initHelpForm() {
    var uploadArea = document.getElementById('helpUploadArea');
    var input = document.getElementById('helpImageUpload');
    var container = document.getElementById('helpUploadedImages');
    var form = document.getElementById('helpForm');

    if (!uploadArea || !input) return;

    // Upload handling
    uploadArea.addEventListener('click', function() { input.click(); });

    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        handleHelpFiles(e.dataTransfer.files, container);
    });

    input.addEventListener('change', function(e) {
        handleHelpFiles(e.target.files, container);
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var btn = form.querySelector('button[type="submit"]');
            btn.textContent = '...';
            btn.disabled = true;

            // Here you would normally send to a server or email service
            // For now, we'll just show a success message and reset
            setTimeout(function() {
                showNotification(currentLang === 'en' ? 'Submitted! I will reply soon.' : (currentLang === 'tw' ? '提交成功！我會盡快回覆你。' : '提交成功！我会尽快回复你。'));
                form.reset();
                if (container) container.innerHTML = '';
                btn.textContent = currentLang === 'zh' ? '提交求助' : 'Submit';
                btn.disabled = false;
            }, 1000);
        });
    }
}

function handleHelpFiles(files, container) {
    if (!container) return;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var div = document.createElement('div');
                div.className = 'help-uploaded-image';
                div.innerHTML = '<img src="' + e.target.result + '"><button class="remove-btn">×</button>';
                div.querySelector('.remove-btn').addEventListener('click', function() { div.remove(); });
                container.appendChild(div);
            };
            reader.readAsDataURL(file);
        }
    }
}

// ============================================
// Journal MBTI Test (Combined)
// ============================================
var mbtiAnswers = [];
var mbtiCurrentQuestion = 0;
var mbtiTotalQuestions = 27;

function initMBTITest() {
    var container = document.getElementById('mbtiQuestions');
    var prevBtn = document.getElementById('mbtiPrevBtn');
    var nextBtn = document.getElementById('mbtiNextBtn');

    if (!container || !testQuestions) return;

    // Render first question
    renderMBTIQuestion(container, 0);

    // Previous button
    prevBtn.addEventListener('click', function() {
        if (mbtiCurrentQuestion > 0) {
            mbtiCurrentQuestion--;
            renderMBTIQuestion(container, mbtiCurrentQuestion);
            updateMBTIProgress();
        }
    });

    // Next button
    nextBtn.addEventListener('click', function() {
        // Check if current question is answered
        if (mbtiAnswers[mbtiCurrentQuestion] === undefined) {
            showNotification(currentLang === 'en' ? 'Please select an answer first' : (currentLang === 'tw' ? '請先選擇一個答案' : '请先选择一个答案'));
            return;
        }

        if (mbtiCurrentQuestion >= mbtiTotalQuestions - 1) {
            // Show result
            showMBTIResult();
        } else {
            mbtiCurrentQuestion++;
            renderMBTIQuestion(container, mbtiCurrentQuestion);
            updateMBTIProgress();
        }
    });
}

function renderMBTIQuestion(container, index) {
    var q = testQuestions[index];
    var isEn = currentLang === 'en';
    var isTw = currentLang === 'tw';

    var html = '<div class="mbti-question-card active">';

    // Add plus indicator for color style questions
    if (q.isPlus) {
        var plusText = isEn ? '✨ Bonus' : (isTw ? '✨ 加分項' : '✨ 加分项');
        html += '<span class="mbti-plus-badge">' + plusText + '</span>';
    }

    // Select question text based on language
    var questionText = isEn ? (q.questionEn || q.question) : (isTw ? (q.questionTw || q.question) : q.question);
    html += '<p class="mbti-question-text">' + questionText + '</p>';
    html += '<div class="mbti-options">';

    // Render 3 options
    q.options.forEach(function(opt, i) {
        html += '<div class="mbti-option" data-value="' + opt.value + '" data-dimension="' + q.dimension + '" data-is-plus="' + (q.isPlus ? 'true' : 'false') + '">';
        var optText = isEn ? (opt.textEn || opt.text) : (isTw ? (opt.textTw || opt.text) : opt.text);
        html += '<span>' + optText + '</span>';
        html += '</div>';
    });

    html += '</div>';
    html += '</div>';

    container.innerHTML = html;

    // Update question number
    document.getElementById('mbtiQuestionNum').textContent = index + 1;

    // Update buttons
    var prevBtn = document.getElementById('mbtiPrevBtn');
    prevBtn.disabled = index === 0;
    var prevText = isEn ? '← Previous' : (isTw ? '← 上一題' : '← 上一题');
    prevBtn.textContent = prevText;

    var nextBtn = document.getElementById('mbtiNextBtn');
    if (isEn) {
        nextBtn.textContent = index === mbtiTotalQuestions - 1 ? 'See Result' : 'Next →';
    } else if (isTw) {
        nextBtn.textContent = index === mbtiTotalQuestions - 1 ? '查看結果' : '下一題 →';
    } else {
        nextBtn.textContent = index === mbtiTotalQuestions - 1 ? '查看结果' : '下一题 →';
    }

    // Mark previously selected answer
    if (mbtiAnswers[index] !== undefined) {
        var options = container.querySelectorAll('.mbti-option');
        var storedAnswer = mbtiAnswers[index];
        options.forEach(function(opt) {
            var optValue = opt.dataset.isPlus === 'true' ? opt.dataset.value : parseInt(opt.dataset.value);
            if (optValue === storedAnswer.value) {
                opt.classList.add('selected');
            }
        });
    }

    // Add click handlers
    container.querySelectorAll('.mbti-option').forEach(function(opt) {
        opt.addEventListener('click', function() {
            // Remove selected from siblings
            container.querySelectorAll('.mbti-option').forEach(function(o) {
                o.classList.remove('selected');
            });
            this.classList.add('selected');

            // Store answer - handle both numeric and string values
            var isPlus = this.dataset.isPlus === 'true';
            var value = isPlus ? this.dataset.value : parseInt(this.dataset.value);

            mbtiAnswers[index] = {
                questionId: q.id,
                dimension: this.dataset.dimension,
                value: value,
                isPlus: isPlus
            };

            // Auto-advance to next question after selection (with delay for visual feedback)
            if (mbtiCurrentQuestion < mbtiTotalQuestions - 1) {
                setTimeout(function() {
                    mbtiCurrentQuestion++;
                    renderMBTIQuestion(container, mbtiCurrentQuestion);
                    updateMBTIProgress();
                }, 300);
            }
        });
    });
}

function updateMBTIProgress() {
    var fill = document.getElementById('mbtiProgressFill');
    if (fill) {
        fill.style.width = ((mbtiCurrentQuestion + 1) / mbtiTotalQuestions * 100) + '%';
    }
}

function showMBTIResult() {
    var nav = document.getElementById('mbtiNav');
    var questionsContainer = document.getElementById('mbtiQuestions');
    var resultContainer = document.getElementById('mbtiResult');

    if (!resultContainer) return;

    // Hide navigation and questions
    nav.style.display = 'none';
    questionsContainer.style.display = 'none';

    // Calculate result
    var result = calculateTestResult(mbtiAnswers);

    // Fill progress to 100%
    var fill = document.getElementById('mbtiProgressFill');
    if (fill) fill.style.width = '100%';

    var isEn = currentLang === 'en';
    var isZhOrTw = currentLang === 'zh' || currentLang === 'tw';
    var type = result.type;
    var tendencies = result.tendencies;
    var animal = type.animal;
    var html = '';

    // ===== 动物形象卡片 ===== (NEW - 最先展示)
    if (animal) {
        html += '<div class="animal-avatar-card" style="background: linear-gradient(135deg, ' + animal.color + '22 0%, ' + animal.color + '44 100%);">';
        html += '<div class="animal-avatar-wrapper">';
        html += '<div class="animal-emoji-large">' + animal.emoji + '</div>';
        html += '<div class="animal-glow" style="background: ' + animal.color + ';"></div>';
        html += '</div>';
        html += '<div class="animal-info">';
        html += '<h3 class="animal-name">' + (isEn ? animal.nameEn : (animal.nameTw || animal.name)) + '</h3>';
        html += '<p class="animal-desc">' + (isEn ? animal.descEn : (animal.descTw || animal.desc)) + '</p>';
        html += '<div class="animal-traits">';
        var traits = isEn ? (animal.traitsEn || animal.traits) : (isTw ? (animal.traitsTw || animal.traits) : animal.traits);
        traits.forEach(function(trait) {
            html += '<span class="animal-trait-tag" style="background: ' + animal.color + '33; border-color: ' + animal.color + ';">' + trait + '</span>';
        });
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }

    // ===== 结果头部 =====
    html += '<div class="mbti-result-header">';
    html += '<span class="mbti-type-emoji">' + type.emoji + '</span>';
    html += '<h3 class="mbti-type-name">' + (isEn ? type.nameEn : (type.nameTw || type.name)) + '</h3>';
    html += '</div>';

    // ===== 人格描述 =====
    html += '<div class="mbti-personality-box">';
    html += '<h4>' + (isEn ? 'Your Journal Personality' : '你的手帐人格') + '</h4>';
    html += '<p>' + (isEn ? type.personalityEn : (type.personalityTw || type.personality)) + '</p>';
    html += '<p class="mbti-desc">' + (isEn ? type.descEn : (type.descTw || type.desc)) + '</p>';
    html += '</div>';

    // ===== 维度分析可视化 =====
    html += '<div class="mbti-dimensions-box">';
    html += '<h4>' + (isEn ? 'Dimension Analysis' : '维度分析') + '</h4>';
    html += '<div class="dimension-bars">';

    var dimLabelsZh = {
        RP: '记录倾向',
        PD: '纸质偏好',
        SB: '美观追求',
        FS: '灵活程度',
        AT: '注意力',
        HB: '坚持力'
    };
    var dimLabelsEn = {
        RP: 'Record Tendency',
        PD: 'Paper Preference',
        SB: 'Beauty Focus',
        FS: 'Flexibility',
        AT: 'Attention',
        HB: 'Persistence'
    };
    var dimDescZh = {
        RP: { high: '偏向记录', low: '偏向规划' },
        PD: { high: '偏好纸质', low: '偏好数字' },
        SB: { high: '追求美观', low: '注重实用' },
        FS: { high: '灵活自由', low: '固定结构' },
        AT: { high: '容易分散', low: '较为稳定' },
        HB: { high: '难以坚持', low: '容易坚持' }
    };
    var dimDescEn = {
        RP: { high: 'Record-focused', low: 'Plan-focused' },
        PD: { high: 'Paper preference', low: 'Digital preference' },
        SB: { high: 'Beauty-focused', low: 'Practical-focused' },
        FS: { high: 'Flexible', low: 'Structured' },
        AT: { high: 'Easily distracted', low: 'Stable' },
        HB: { high: 'Hard to persist', low: 'Easy to persist' }
    };

    Object.keys(tendencies).forEach(function(dim) {
        if (dimLabelsZh[dim]) {
            var pct = tendencies[dim];
            var label = isEn ? dimLabelsEn[dim] : dimLabelsZh[dim];
            var desc = pct > 50
                ? (isEn ? dimDescEn[dim].high : dimDescZh[dim].high)
                : (isEn ? dimDescEn[dim].low : dimDescZh[dim].low);

            html += '<div class="dimension-item">';
            html += '<div class="dim-info">';
            html += '<span class="dim-label">' + label + '</span>';
            html += '<span class="dim-desc">' + desc + '</span>';
            html += '</div>';
            html += '<div class="dim-bar">';
            html += '<div class="dim-fill" style="width:' + pct + '%"></div>';
            html += '</div>';
            html += '<span class="dim-value">' + pct + '%</span>';
            html += '</div>';
        }
    });

    html += '</div></div>';

    // ===== 行动步骤 =====
    if (type.starter) {
        html += '<div class="mbti-starter-box">';
        html += '<h4>' + (isEn ? 'How to Start' : '如何开始') + '</h4>';

        // 工具准备
        html += '<div class="starter-section">';
        html += '<span class="starter-icon">🛠️</span>';
        html += '<div class="starter-content">';
        html += '<span class="starter-title">' + (isEn ? 'Tools to Prepare' : '准备工具') + '</span>';
        var tools = type.starter.tools;
        tools.forEach(function(tool) {
            html += '<p class="starter-item">• ' + tool + '</p>';
        });
        html += '</div></div>';

        // 第一周
        html += '<div class="starter-section">';
        html += '<span class="starter-icon">📅</span>';
        html += '<div class="starter-content">';
        html += '<span class="starter-title">' + (isEn ? 'First Week' : '第一周尝试') + '</span>';
        html += '<p class="starter-item">' + (isEn ? (type.starter.firstWeekEn || type.starter.firstWeek) : type.starter.firstWeek) + '</p>';
        html += '</div></div>';

        // 不要做的事
        html += '<div class="starter-section starter-dont">';
        html += '<span class="starter-icon">⚠️</span>';
        html += '<div class="starter-content">';
        html += '<span class="starter-title">' + (isEn ? 'Avoid' : '避免') + '</span>';
        var donts = type.starter.dontDo;
        donts.forEach(function(dont) {
            html += '<p class="starter-item">• ' + dont + '</p>';
        });
        html += '</div></div>';

        html += '</div>';
    }

    // ===== 详细推荐 =====
    var detailedRecs = getDetailedRecommendations(type, tendencies);
    if (detailedRecs.length > 0) {
        html += '<div class="mbti-detailed-rec">';
        html += '<h4>' + (isEn ? 'Recommended Types' : '推荐手帐类型') + '</h4>';

        detailedRecs.forEach(function(rec) {
            html += '<div class="rec-card">';
            html += '<span class="rec-icon">' + rec.icon + '</span>';
            html += '<div class="rec-info">';
            html += '<span class="rec-name">' + (isEn ? rec.nameEn : (rec.nameTw || rec.name)) + '</span>';
            html += '<p class="rec-desc">' + (isEn ? rec.descEn : (rec.descTw || rec.desc)) + '</p>';

            // 使用方式选项
            if (rec.usageOptions && rec.usageOptions.length > 0) {
                html += '<div class="usage-options">';
                html += '<span class="usage-label">' + (isEn ? 'Usage: ' : '使用方式：') + '</span>';
                rec.usageOptions.forEach(function(opt) {
                    html += '<div class="usage-option">';
                    html += '<span class="usage-name">' + (isEn ? (opt.nameEn || opt.name) : (opt.nameTw || opt.name)) + '</span>';
                    html += '<span class="usage-desc">' + (isEn ? (opt.descEn || opt.desc) : (opt.descTw || opt.desc)) + '</span>';
                    if (opt.detail) {
                        html += '<span class="usage-detail">' + opt.detail + '</span>';
                    }
                    html += '</div>';
                });
                html += '</div>';
            }

            // 一周模板
            if (rec.weeklyTemplate) {
                html += '<div class="weekly-template">';
                html += '<span class="weekly-label">' + (isEn ? rec.weeklyTemplate.titleEn : rec.weeklyTemplate.title) + '</span>';
                var days = rec.weeklyTemplate.days;
                days.forEach(function(day) {
                    html += '<div class="weekly-day">';
                    html += '<span class="day-name">' + (isEn ? (day.dayEn || day.day) : day.day) + '</span>';
                    html += '<span class="day-task">' + (isEn ? (day.taskEn || day.task) : day.task) + '</span>';
                    html += '</div>';
                });
                if (rec.weeklyTemplate.tips) {
                    html += '<p class="weekly-tips">💡 ' + rec.weeklyTemplate.tips + '</p>';
                }
                html += '</div>';
            }

            html += '</div></div>';
        });

        html += '</div>';
    }

    // ===== Tips =====
    html += '<div class="mbti-tip-box">';
    html += '<span class="tip-icon">💡</span>';
    html += '<p>' + (isEn ? (type.tipsEn || type.tips) : (type.tipsTw || type.tips)) + '</p>';
    html += '</div>';

    // ===== 人格底色推荐 (Plus维度) =====
    var colorRecommendation = getColorRecommendation(mbtiAnswers);
    if (colorRecommendation) {
        html += '<div class="mbti-color-box">';
        html += '<h4>' + (isEn ? '✨ Your Personality Color' : '✨ 你的人格底色') + '</h4>';
        html += '<p class="color-reason">' + (isEn ? colorRecommendation.reasonEn : colorRecommendation.reason) + '</p>';
        html += '<div class="color-palette-preview">';
        colorRecommendation.palette.colors.forEach(function(color) {
            html += '<div class="color-preview-block" style="background-color: ' + color.hex + '" title="' + color.name + '">';
            html += '<span class="color-hex-label">' + color.hex + '</span>';
            html += '</div>';
        });
        html += '</div>';
        html += '<p class="color-palette-name">' + (isEn ? (colorRecommendation.palette.nameEn || colorRecommendation.palette.name) : colorRecommendation.palette.name) + '</p>';
        html += '<p class="color-tip">' + (isEn ? 'Click palette tool to copy color codes' : '点击调色盘工具可以复制颜色代码') + '</p>';
        html += '</div>';
    }

    // ===== 重新测试 =====
    html += '<div class="mbti-result-actions">';
    html += '<button class="btn btn-secondary" onclick="restartMBTITest()">' + (isEn ? 'Restart' : '重新测试') + '</button>';
    html += '</div>';

    resultContainer.innerHTML = html;
    resultContainer.style.display = 'block';
}

function restartMBTITest() {
    mbtiAnswers = [];
    mbtiCurrentQuestion = 0;

    var nav = document.getElementById('mbtiNav');
    var questionsContainer = document.getElementById('mbtiQuestions');
    var resultContainer = document.getElementById('mbtiResult');

    nav.style.display = 'flex';
    questionsContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    renderMBTIQuestion(questionsContainer, 0);
    updateMBTIProgress();
}

// 获取颜色推荐（基于Plus维度的答案）
// ============================================
// Color Wheel Tool
// ============================================
var currentWheelScheme = 'complementary';
var wheelBaseColor = '#7a6b8a';

function initColorWheel() {
    var baseColorInput = document.getElementById('wheelBaseColor');
    var hexDisplay = document.getElementById('wheelHexDisplay');
    var schemeTabs = document.getElementById('schemeTabs');
    var presetGrid = document.getElementById('presetPaletteGrid');
    var paletteFilter = document.getElementById('paletteFilter');

    if (!baseColorInput) return;

    // Initialize
    updateColorWheel();

    // Color picker change
    baseColorInput.addEventListener('input', function() {
        wheelBaseColor = this.value;
        hexDisplay.textContent = wheelBaseColor.toUpperCase();
        updateColorWheel();
    });

    // Scheme tabs
    if (schemeTabs) {
        schemeTabs.querySelectorAll('.scheme-tab').forEach(function(tab) {
            tab.addEventListener('click', function() {
                currentWheelScheme = this.dataset.scheme;
                schemeTabs.querySelectorAll('.scheme-tab').forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');
                updateColorWheel();
            });
        });
    }

    // Initialize preset palettes
    initPresetPalettes();
}

function updateColorWheel() {
    var wheelCenter = document.getElementById('wheelCenter');
    var wheelRing = document.getElementById('wheelRing');
    var schemeInfo = document.getElementById('schemeInfo');

    if (!wheelCenter || !wheelRing) return;

    // Set center color
    wheelCenter.style.backgroundColor = wheelBaseColor;
    wheelCenter.setAttribute('data-hex', wheelBaseColor.toUpperCase());

    // Get colors based on scheme
    var colors = generatePaletteFromBase(wheelBaseColor, getSchemeType());
    var schemeDescriptions = getSchemeDescriptions();

    // Clear existing dots
    wheelRing.innerHTML = '';

    // Calculate positions for each color
    colors.forEach(function(color, index) {
        if (index === 0) return; // Skip base color (it's in center)

        var angle = getColorAngle(index, colors.length, currentWheelScheme);
        var radius = 115; // Distance from center
        var dotSize = 50;

        // Calculate position (center of wheel is 140px from edge)
        var x = 140 + radius * Math.cos(angle * Math.PI / 180) - dotSize / 2;
        var y = 140 + radius * Math.sin(angle * Math.PI / 180) - dotSize / 2;

        var dot = document.createElement('div');
        dot.className = 'wheel-color-dot';
        dot.style.backgroundColor = color.hex;
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        dot.setAttribute('data-hex', color.hex.toUpperCase());
        dot.setAttribute('title', color.name);

        dot.addEventListener('click', function() {
            copyColorToClipboard(color.hex);
        });

        wheelRing.appendChild(dot);
    });

    // Center click handler
    wheelCenter.addEventListener('click', function() {
        copyColorToClipboard(wheelBaseColor);
    });

    // Update scheme info
    if (schemeInfo) {
        var info = schemeDescriptions[currentWheelScheme];
        schemeInfo.querySelector('.scheme-name').textContent = info.name;
        schemeInfo.querySelector('.scheme-desc').textContent = info.desc;
    }
}

function getSchemeType() {
    var schemeMap = {
        'complementary': 'complementary',
        'analogous': 'analogous',
        'triadic': 'triadic',
        'split': 'splitComplementary',
        'tetradic': 'tetradic',
        'mono': 'monochromatic'
    };
    return schemeMap[currentWheelScheme] || 'complementary';
}

function getSchemeDescriptions() {
    return {
        'complementary': { name: '互补色方案', desc: '色相相对180°，对比强烈，视觉冲击' },
        'analogous': { name: '邻近色方案', desc: '色相相邻±30°，和谐自然，过渡柔和' },
        'triadic': { name: '三角色方案', desc: '色相三等分120°，平衡丰富，活力感' },
        'split': { name: '分裂互补方案', desc: '互补色两侧±30°，对比柔和，更易搭配' },
        'tetradic': { name: '四角色方案', desc: '色相四等分90°，变化丰富，需注意平衡' },
        'mono': { name: '同色系方案', desc: '同一色相不同明度，简洁统一，层次分明' }
    };
}

function getColorAngle(index, total, scheme) {
    // Base color is at angle 0 (but we skip it)
    // Other colors positioned based on scheme type
    switch (scheme) {
        case 'complementary':
            return 180;
        case 'analogous':
            if (index === 1) return -30;
            if (index === 2) return 30;
            if (index === 3) return 0; // Light version
            return 0;
        case 'triadic':
            if (index === 1) return 120;
            if (index === 2) return 240;
            if (index === 3) return 0;
            return index * 120;
        case 'split':
            if (index === 1) return 150;
            if (index === 2) return 210;
            if (index === 3) return 0;
            return 150 + (index - 1) * 60;
        case 'tetradic':
            return index * 90;
        case 'mono':
            // Arrange in a small arc
            return -30 + index * 20;
        default:
            return index * 60;
    }
}

function copyColorToClipboard(hex) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(hex).then(function() {
            showCopyTooltip('已复制 ' + hex);
        });
    } else {
        var textarea = document.createElement('textarea');
        textarea.value = hex;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showCopyTooltip('已复制 ' + hex);
    }
}

function showCopyTooltip(message) {
    var tooltip = document.querySelector('.copy-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        document.body.appendChild(tooltip);
    }
    tooltip.textContent = message;
    tooltip.classList.add('show');
    setTimeout(function() {
        tooltip.classList.remove('show');
    }, 1500);
}

function initPresetPalettes() {
    var presetGrid = document.getElementById('presetPaletteGrid');
    var paletteFilter = document.getElementById('paletteFilter');

    if (!presetGrid || !presetPalettes) return;

    var isEn = currentLang === 'en';
    var isTw = currentLang === 'tw';
    var allText = isEn ? 'All' : (isTw ? '全部' : '全部');

    // Build filter buttons
    var filterHtml = '<button class="filter-btn active" data-category="all">' + allText + '</button>';
    styleCategories.forEach(function(cat) {
        filterHtml += '<button class="filter-btn" data-category="' + cat.name + '">' + cat.icon + ' ' + (isEn ? (cat.nameEn || cat.name) : (isTw ? (cat.nameTw || cat.name) : cat.name)) + '</button>';
    });
    paletteFilter.innerHTML = filterHtml;

    // Filter click handlers
    paletteFilter.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            paletteFilter.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            renderPresetPaletteMiniCards(this.dataset.category);
        });
    });

    // Initial render
    renderPresetPaletteMiniCards('all');
}

function renderPresetPaletteMiniCards(category) {
    var presetGrid = document.getElementById('presetPaletteGrid');
    if (!presetGrid) return;

    var isEn = currentLang === 'en';
    var isTw = currentLang === 'tw';

    var filtered = presetPalettes;
    if (category !== 'all') {
        filtered = presetPalettes.filter(function(p) { return p.category === category; });
    }

    var html = '';
    filtered.forEach(function(palette) {
        html += '<div class="palette-mini-card" data-palette="' + palette.name + '">';
        html += '<div class="palette-mini-name">' + (isEn ? (palette.nameEn || palette.name) : (isTw ? (palette.nameTw || palette.name) : palette.name)) + '</div>';
        html += '<div class="palette-mini-colors">';
        palette.colors.forEach(function(color) {
            html += '<div class="palette-mini-color" style="background-color: ' + color.hex + '" data-hex="' + color.hex + '"></div>';
        });
        html += '</div>';
        html += '</div>';
    });
    presetGrid.innerHTML = html;

    // Click to copy
    presetGrid.querySelectorAll('.palette-mini-color').forEach(function(colorDot) {
        colorDot.addEventListener('click', function(e) {
            e.stopPropagation();
            copyColorToClipboard(this.dataset.hex);
        });
    });

    // Click card to set as base color
    presetGrid.querySelectorAll('.palette-mini-card').forEach(function(card) {
        card.addEventListener('click', function() {
            var paletteName = this.dataset.palette;
            var palette = presetPalettes.find(function(p) { return p.name === paletteName; });
            if (palette && palette.colors[0]) {
                wheelBaseColor = palette.colors[0].hex;
                document.getElementById('wheelBaseColor').value = wheelBaseColor;
                document.getElementById('wheelHexDisplay').textContent = wheelBaseColor.toUpperCase();
                updateColorWheel();
            }
        });
    });
}

function getColorRecommendation(answers) {
    // 只分析Plus维度的问题（id: 25, 26, 27）
    var colorAnswers = answers.filter(function(a) {
        return a.questionId >= 25 && a.questionId <= 27;
    });

    if (colorAnswers.length === 0) return null;

    // 收集颜色风格偏好
    var preferences = [];
    colorAnswers.forEach(function(a) {
        if (typeof a.value === 'string') {
            preferences.push(a.value);
        }
    });

    // 根据偏好匹配调色盘
    var matchedPalettes = [];
    preferences.forEach(function(pref) {
        presetPalettes.forEach(function(palette) {
            if (palette.category === pref) {
                matchedPalettes.push(palette);
            }
        });
    });

    // 如果没有匹配，根据人格类型推荐默认调色盘
    if (matchedPalettes.length === 0) {
        // 使用第一个偏好或默认温柔系
        var defaultCategory = preferences[0] || '温柔';
        matchedPalettes = presetPalettes.filter(function(p) {
            return p.category === defaultCategory;
        });
    }

    // 选择第一个匹配的调色盘
    var selectedPalette = matchedPalettes[0] || presetPalettes[0];

    // 构建推荐理由
    var reasonText = '根据你对「' + preferences.join('、') + '」风格的偏好';
    var reasonTextEn = 'Based on your preference for "' + preferences.join(', ') + '" style';

    return {
        palette: selectedPalette,
        preferences: preferences,
        reason: reasonText,
        reasonEn: reasonTextEn
    };
}

// ============================================
// Calendar Tracking
// ============================================
var calendarDate = new Date();
var checkedDays = {};

function initCalendar() {
    var container = document.getElementById('calendarGrid');
    var monthDisplay = document.getElementById('calendarMonth');
    var prevBtn = document.getElementById('calendarPrev');
    var nextBtn = document.getElementById('calendarNext');

    if (!container) return;

    // Load saved data
    var saved = localStorage.getItem('journalCalendar');
    if (saved) checkedDays = JSON.parse(saved);

    renderCalendar(container, monthDisplay);

    prevBtn.addEventListener('click', function() {
        calendarDate.setMonth(calendarDate.getMonth() - 1);
        renderCalendar(container, monthDisplay);
    });

    nextBtn.addEventListener('click', function() {
        calendarDate.setMonth(calendarDate.getMonth() + 1);
        renderCalendar(container, monthDisplay);
    });
}

function renderCalendar(container, monthDisplay) {
    var year = calendarDate.getFullYear();
    var month = calendarDate.getMonth();

    monthDisplay.textContent = year + '年' + (month + 1) + '月';

    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var startDay = firstDay.getDay();
    var totalDays = lastDay.getDate();

    var today = new Date();

    var html = '';

    // Day headers
    var days = ['日', '一', '二', '三', '四', '五', '六'];
    days.forEach(function(d) {
        html += '<div class="calendar-day-header">' + d + '</div>';
    });

    // Empty cells before first day
    for (var i = 0; i < startDay; i++) {
        html += '<div class="calendar-day empty"></div>';
    }

    // Days
    for (var d = 1; d <= totalDays; d++) {
        var key = year + '-' + (month + 1) + '-' + d;
        var isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === d;
        var isChecked = checkedDays[key];

        html += '<div class="calendar-day' + (isChecked ? ' checked' : '') + (isToday ? ' today' : '') + '" data-date="' + key + '">' + d + '</div>';
    }

    container.innerHTML = html;

    // Add click handlers
    container.querySelectorAll('.calendar-day:not(.empty)').forEach(function(day) {
        day.addEventListener('click', function() {
            var key = this.dataset.date;
            if (checkedDays[key]) {
                delete checkedDays[key];
                this.classList.remove('checked');
            } else {
                checkedDays[key] = true;
                this.classList.add('checked');
            }
            localStorage.setItem('journalCalendar', JSON.stringify(checkedDays));
            updateCalendarStats();
        });
    });

    updateCalendarStats();
}

function updateCalendarStats() {
    var count = Object.keys(checkedDays).length;

    // Calculate streak
    var streak = 0;
    var today = new Date();
    for (var i = 0; i < 365; i++) {  // 扩大到一年
        var key = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        if (checkedDays[key]) {
            streak++;
            today.setDate(today.getDate() - 1);
        } else {
            break;
        }
    }

    // Calculate this week
    var weekCount = 0;
    var now = new Date();
    var dayOfWeek = now.getDay();
    var startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - dayOfWeek);  // 周日开始

    for (var i = 0; i < 7; i++) {
        var d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        var key = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        if (checkedDays[key]) {
            weekCount++;
        }
    }

    // Calculate this month
    var monthCount = 0;
    var currentMonth = new Date().getMonth() + 1;
    var currentYear = new Date().getFullYear();

    Object.keys(checkedDays).forEach(function(key) {
        var parts = key.split('-');
        if (parseInt(parts[0]) === currentYear && parseInt(parts[1]) === currentMonth) {
            monthCount++;
        }
    });

    // Update UI
    document.getElementById('calendarCount').textContent = count;
    document.getElementById('calendarStreak').textContent = streak;
    document.getElementById('weekCount').textContent = weekCount;
    document.getElementById('monthCount').textContent = monthCount;
}

// ============================================
// Tracking Popup (Mini Calendar)
// ============================================
function initTrackingPopup() {
    var trackingBtn = document.getElementById('trackingBtn');
    var trackingPopup = document.getElementById('trackingPopup');
    var trackingClose = document.getElementById('trackingClose');

    if (!trackingBtn || !trackingPopup) return;

    trackingBtn.addEventListener('click', function() {
        trackingPopup.classList.add('open');
        renderMiniCalendar();
    });

    trackingClose.addEventListener('click', function() {
        trackingPopup.classList.remove('open');
    });

    trackingPopup.addEventListener('click', function(e) {
        if (e.target === trackingPopup) {
            trackingPopup.classList.remove('open');
        }
    });
}

function renderMiniCalendar() {
    var container = document.getElementById('trackingMiniCalendar');
    if (!container) return;

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();

    // Day headers
    var days = ['日', '一', '二', '三', '四', '五', '六'];
    var html = '';
    days.forEach(function(d) {
        html += '<div class="day-label">' + d + '</div>';
    });

    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var startDay = firstDay.getDay();
    var totalDays = lastDay.getDate();

    // Empty cells before first day
    for (var i = 0; i < startDay; i++) {
        html += '<div class="day-cell empty"></div>';
    }

    // Days
    for (var d = 1; d <= totalDays; d++) {
        var key = year + '-' + (month + 1) + '-' + d;
        var isToday = d === today.getDate();
        var isChecked = checkedDays[key];

        html += '<div class="day-cell' + (isChecked ? ' checked' : '') + (isToday ? ' today' : '') + '" data-date="' + key + '">' + d + '</div>';
    }

    container.innerHTML = html;

    // Add click handlers
    container.querySelectorAll('.day-cell:not(.empty)').forEach(function(day) {
        day.addEventListener('click', function() {
            var key = this.dataset.date;
            if (checkedDays[key]) {
                delete checkedDays[key];
                this.classList.remove('checked');
            } else {
                checkedDays[key] = true;
                this.classList.add('checked');
            }
            localStorage.setItem('journalCalendar', JSON.stringify(checkedDays));
            updateMiniCalendarStats();
            // Also update main calendar if it exists
            var mainCalendar = document.getElementById('calendarGrid');
            if (mainCalendar) {
                renderCalendar(mainCalendar, document.getElementById('calendarMonth'));
            }
        });
    });

    updateMiniCalendarStats();
}

function updateMiniCalendarStats() {
    var count = Object.keys(checkedDays).length;

    // Calculate streak
    var streak = 0;
    var today = new Date();
    for (var i = 0; i < 30; i++) {
        var key = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        if (checkedDays[key]) {
            streak++;
            today.setDate(today.getDate() - 1);
        } else {
            break;
        }
    }

    var countMini = document.getElementById('trackingCountMini');
    var streakMini = document.getElementById('trackingStreakMini');
    if (countMini) countMini.textContent = count;
    if (streakMini) streakMini.textContent = streak;
}

// ============================================
// Resources Section
// ============================================
var quotesData = [
    { text: "记录让时间看得见", author: "Sophie" },
    { text: "不需要完美，只需要真实", author: "" },
    { text: "每一页都是生活的小脚印", author: "" },
    { text: "手帐是和自己对话的安静时光", author: "" },
    { text: "写下就等于记住", author: "" },
    { text: "慢慢来，比较快", author: "" },
    { text: "今天值得被记住", author: "" },
    { text: "记录本身就是意义", author: "" },
    { text: "不完美的手帐也是好手帐", author: "" },
    { text: "留白也是一种美", author: "" }
];

var elementsData = ['⭐', '🌟', '✨', '💫', '⬜', '🔲', '◯', '●', '◇', '◆', '→', '←', '✓', '✗', '♡', '❤'];

function initResources() {
    var tabs = document.querySelectorAll('.resource-tab');
    var panels = document.querySelectorAll('.resource-panel');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var tabId = this.dataset.tab;
            tabs.forEach(function(t) { t.classList.remove('active'); });
            panels.forEach(function(p) { p.classList.remove('active'); });
            this.classList.add('active');
            document.getElementById('panel-' + tabId).classList.add('active');
        });
    });

    // Render quotes
    renderQuotes();

    // Render elements
    renderElements();

    // Random quote button
    var randomBtn = document.getElementById('randomQuoteBtn');
    if (randomBtn) {
        randomBtn.addEventListener('click', renderQuotes);
    }
}

function renderQuotes() {
    var container = document.getElementById('quotesGrid');
    if (!container) return;

    // Shuffle quotes
    var shuffled = quotesData.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 6);

    var html = '';
    shuffled.forEach(function(q) {
        html += '<div class="quote-item">';
        html += '<p class="quote-text">' + q.text + '</p>';
        if (q.author) html += '<span class="quote-author">— ' + q.author + '</span>';
        html += '</div>';
    });

    container.innerHTML = html;
}

function renderElements() {
    var container = document.getElementById('elementsGrid');
    if (!container) return;

    var html = '';
    elementsData.forEach(function(e) {
        html += '<div class="element-item">' + e + '</div>';
    });

    container.innerHTML = html;

    // Click to copy
    container.querySelectorAll('.element-item').forEach(function(item) {
        item.addEventListener('click', function() {
            copyToClipboard(this.textContent);
            showNotification(currentLang === 'en' ? 'Copied!' : (currentLang === 'tw' ? '已複製!' : '已复制!'));
        });
    });
}

// ============================================
// Download Templates
// ============================================
function downloadTemplate(type) {
    // Template URLs - you can replace these with actual PDF URLs
    var templates = {
        monthly: 'templates/monthly-template.pdf',
        weekly: 'templates/weekly-template.pdf',
        habit: 'templates/habit-tracker.pdf',
        timeline: 'templates/timeline-template.pdf'
    };

    var url = templates[type];

    // For now, show a message since actual files don't exist
    // In production, replace with actual download logic
    showNotification(currentLang === 'en' ? 'Template download coming soon!' : (currentLang === 'tw' ? '模板下載功能即將上線！' : '模板下载功能即将上线！'));

    // Uncomment below when actual PDF files are available:
    // var link = document.createElement('a');
    // link.href = url;
    // link.download = type + '-template.pdf';
    // link.click();
}

// Make it global for onclick
window.downloadTemplate = downloadTemplate;

// ============================================
// Gallery Section
// ============================================
function initGallery() {
    var uploadBtn = document.getElementById('galleryUploadBtn');
    var container = document.getElementById('galleryGrid');

    if (!uploadBtn) return;

    uploadBtn.addEventListener('click', function() {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;

        input.onchange = function(e) {
            handleGalleryFiles(e.target.files, container);
        };

        input.click();
    });

    // Load saved images
    var saved = localStorage.getItem('galleryImages');
    if (saved && container) {
        var images = JSON.parse(saved);
        if (images.length > 0) {
            container.innerHTML = '';
            images.forEach(function(src, index) {
                addGalleryItem(container, src, index);
            });
        }
    }
}

function handleGalleryFiles(files, container) {
    var saved = localStorage.getItem('galleryImages');
    var images = saved ? JSON.parse(saved) : [];

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = function(e) {
                images.push(e.target.result);
                localStorage.setItem('galleryImages', JSON.stringify(images));

                // Remove placeholder if exists
                var placeholder = container.querySelector('.gallery-placeholder');
                if (placeholder) placeholder.remove();

                addGalleryItem(container, e.target.result, images.length - 1);
            };
            reader.readAsDataURL(file);
        }
    }
}

function addGalleryItem(container, src, index) {
    var div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = '<img src="' + src + '"><button class="remove-btn">×</button>';

    div.querySelector('.remove-btn').addEventListener('click', function() {
        var saved = localStorage.getItem('galleryImages');
        var images = saved ? JSON.parse(saved) : [];
        images.splice(index, 1);
        localStorage.setItem('galleryImages', JSON.stringify(images));
        div.remove();

        if (images.length === 0) {
            container.innerHTML = '<div class="gallery-placeholder"><span class="placeholder-icon">📸</span><p>还没有作品，快来上传吧！</p></div>';
        }
    });

    container.appendChild(div);
}

// ============================================
// Collapsible Cards
// ============================================
function toggleCollapsible(header) {
    var card = header.closest('.collapsible-card');
    card.classList.toggle('open');
}

// Global function for onclick
window.toggleCollapsible = toggleCollapsible;

// ============================================
// Animal Selection
// ============================================
function selectAnimal(type) {
    var mainCard = document.getElementById('mainAnimalCard');
    var altCard = document.getElementById('altAnimalCard');

    if (type === 'main') {
        if (mainCard) mainCard.classList.add('selected');
        if (altCard) altCard.classList.remove('selected');
    } else {
        if (mainCard) mainCard.classList.remove('selected');
        if (altCard) altCard.classList.add('selected');
    }
}
window.selectAnimal = selectAnimal;