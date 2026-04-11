// ============================================
// Journal MBTI Test Data - Sophie手帐
// ============================================

// 测试维度说明
var mbtiDimensions = {
    RP: { name: "记录 vs 规划", nameEn: "Record vs Plan", description: "你更倾向于记录已发生的事，还是规划未来的事？" },
    PD: { name: "纸质 vs 数字", nameEn: "Paper vs Digital", description: "你更喜欢手写记录，还是电子设备？" },
    SB: { name: "实用 vs 美观", nameEn: "Simple vs Beautiful", description: "你更在意效率实用，还是视觉美观？" },
    FS: { name: "灵活 vs 结构", nameEn: "Flexible vs Structured", description: "你喜欢随心所欲，还是按固定格式？" },
    IS: { name: "独立 vs 社交", nameEn: "Individual vs Social", description: "你喜欢自己写，还是分享给别人看？" }
};

// 测试问题
var mbtiQuestions = [
    // RP维度 (记录 vs 规划)
    {
        dimension: "RP",
        question: "当你打开手帐本时，你更想做什么？",
        questionEn: "When you open your journal, what do you want to do?",
        optionA: { value: "R", text: "写下今天发生的事，回顾这一天", textEn: "Write about what happened today" },
        optionB: { value: "P", text: "写下明天要做的事，规划未来", textEn: "Write tasks for tomorrow" }
    },
    {
        dimension: "RP",
        question: "如果一天结束时发现计划没完成，你会怎么想？",
        questionEn: "If your plans aren't completed by end of day?",
        optionA: { value: "R", text: "没关系，记录一下实际做了什么就好", textEn: "It's okay, just record what I actually did" },
        optionB: { value: "P", text: "有点焦虑，想调整计划确保下次完成", textEn: "A bit anxious, want to adjust plans" }
    },
    {
        dimension: "RP",
        question: "你写手帐的主要目的是什么？",
        questionEn: "What's your main purpose for journaling?",
        optionA: { value: "R", text: "记录生活，留住记忆", textEn: "Record life, keep memories" },
        optionB: { value: "P", text: "提高效率，完成任务", textEn: "Improve efficiency, complete tasks" }
    },

    // PD维度 (纸质 vs 数字)
    {
        dimension: "PD",
        question: "如果要记一件重要的事，你会选择？",
        questionEn: "To record something important, you choose?",
        optionA: { value: "P", text: "拿笔写在纸上", textEn: "Write with pen on paper" },
        optionB: { value: "D", text: "用手机/电脑记录", textEn: "Use phone/computer to record" }
    },
    {
        dimension: "PD",
        question: "你更喜欢什么样的记录体验？",
        questionEn: "What recording experience do you prefer?",
        optionA: { value: "P", text: "手写的触感，可以自由装饰", textEn: "Handwriting feel, can decorate freely" },
        optionB: { value: "D", text: "随时修改，方便搜索和同步", textEn: "Edit anytime, easy to search and sync" }
    },
    {
        dimension: "PD",
        question: "如果出门忘记带手帐工具，你会？",
        questionEn: "If you forgot your journal tools?",
        optionA: { value: "P", text: "等回家再写在纸上", textEn: "Wait to write on paper when home" },
        optionB: { value: "D", text: "用手机先记下来", textEn: "Record on phone first" }
    },

    // SB维度 (实用 vs 美观)
    {
        dimension: "SB",
        question: "写手帐时，你更在意什么？",
        questionEn: "When journaling, what matters more?",
        optionA: { value: "S", text: "快速记录，简单实用", textEn: "Quick recording, simple and practical" },
        optionB: { value: "B", text: "好看美观，有创意", textEn: "Beautiful and creative" }
    },
    {
        dimension: "SB",
        question: "你会花多少时间装饰手帐？",
        questionEn: "How much time do you spend decorating?",
        optionA: { value: "S", text: "很少，主要用来记录内容", textEn: "Very little, mainly for content" },
        optionB: { value: "B", text: "比较多，装饰是重要部分", textEn: "Quite a lot, decoration is important" }
    },
    {
        dimension: "SB",
        question: "看到别人的精美手帐，你会？",
        questionEn: "When seeing others' beautiful journals?",
        optionA: { value: "S", text: "羡慕但觉得太花时间，不适合我", textEn: "Admire but think it's too time-consuming" },
        optionB: { value: "B", text: "很想学习，也想做出好看的手帐", textEn: "Want to learn and make beautiful ones" }
    },

    // FS维度 (灵活 vs 结构)
    {
        dimension: "FS",
        question: "你更喜欢什么样的手帐格式？",
        questionEn: "What journal format do you prefer?",
        optionA: { value: "F", text: "自由灵活，每天可以不一样", textEn: "Flexible, can be different each day" },
        optionB: { value: "S", text: "固定模板，有规律更安心", textEn: "Fixed template, routine feels secure" }
    },
    {
        dimension: "FS",
        question: "如果手帐写了一周就放弃了固定格式，你会？",
        questionEn: "If you abandon the format after a week?",
        optionA: { value: "F", text: "没问题，按心情写就好", textEn: "No problem, write as I feel" },
        optionB: { value: "S", text: "有点困扰，想找回规律", textEn: "A bit troubled, want to find routine" }
    },
    {
        dimension: "FS",
        question: "你做手帐的风格是？",
        questionEn: "Your journaling style is?",
        optionA: { value: "F", text: "随性而写，想到什么写什么", textEn: "Spontaneous, write what comes to mind" },
        optionB: { value: "S", text: "有章法，按计划步骤来", textEn: "Methodical, follow planned steps" }
    },

    // IS维度 (独立 vs 社交)
    {
        dimension: "IS",
        question: "你的手帐主要是给谁看的？",
        questionEn: "Who is your journal mainly for?",
        optionA: { value: "I", text: "自己，私人记录", textEn: "Myself, private record" },
        optionB: { value: "S", text: "也想分享给别人看", textEn: "Also want to share with others" }
    },
    {
        dimension: "IS",
        question: "写完好看的手帐页面，你会？",
        questionEn: "After making a beautiful page?",
        optionA: { value: "I", text: "自己欣赏就好", textEn: "Just admire it myself" },
        optionB: { value: "S", text: "想拍照发社交媒体", textEn: "Want to post on social media" }
    },
    {
        dimension: "IS",
        question: "你会关注其他手帐博主吗？",
        questionEn: "Do you follow other journal bloggers?",
        optionA: { value: "I", text: "偶尔，主要是自己写自己的", textEn: "Occasionally, mainly write my own" },
        optionB: { value: "S", text: "经常，想融入手帐圈子", textEn: "Often, want to join the community" }
    }
];

// 手帐人格类型
var journalTypes = {
    // RP组合为主
    "RPSB": {
        code: "RPSB",
        name: "时间记录者",
        nameEn: "Time Recorder",
        emoji: "⏰",
        description: "你喜欢记录真实发生的事，追求简单实用。Timeline时间轴最适合你，每天写下做了什么，时间感变清晰。",
        descriptionEn: "You prefer recording real events, simple and practical. Timeline suits you best.",
        recommendations: ["Timeline时间轴", "日历打卡"],
        tips: "不需要追求美观，记录才是你的核心。一天结束时花10分钟回顾写下就好。"
    },
    "RPBB": {
        code: "RPBB",
        name: "生活收藏家",
        nameEn: "Life Collector",
        emoji: "📸",
        description: "你喜欢记录生活，也注重美观。可以用Timeline + 简单装饰，边记录边美化。",
        descriptionEn: "You love recording life and making it beautiful. Timeline with simple decoration works.",
        recommendations: ["Timeline（美观版）", "照片墙"],
        tips: "可以在Timeline旁边贴照片、小贴纸，让记录更生动。"
    },
    "PPSB": {
        code: "PPSB",
        name: "任务执行者",
        nameEn: "Task Executor",
        emoji: "✅",
        description: "你以规划为主，追求效率。To-do清单是你的核心工具，写下待办，逐一完成。",
        descriptionEn: "You focus on planning and efficiency. To-do list is your core tool.",
        recommendations: ["To-do清单", "周计划"],
        tips: "每天早上花5分钟列出今日待办，完成一个勾掉一个，成就感满满。"
    },
    "PPBB": {
        code: "PPBB",
        name: "规划美学派",
        nameEn: "Planning Aesthetic",
        emoji: "📋✨",
        description: "你既想规划又想美观。可以用结构化模板 + 装饰，让计划也好看。",
        descriptionEn: "You want both planning and beauty. Use structured templates with decoration.",
        recommendations: ["周计划（美观版）", "月历"],
        tips: "买一些好看的周计划模板，或自己设计固定格式，每次填写就好。"
    },

    // FS维度影响
    "RFSB": {
        code: "RFSB",
        name: "随性记录者",
        nameEn: "Spontaneous Recorder",
        emoji: "🌊",
        description: "你喜欢记录但不喜欢固定格式。活页本最适合你，想写什么写什么，随意组合。",
        descriptionEn: "You like recording but dislike fixed formats. Loose-leaf binder suits you.",
        recommendations: ["活页本", "自由日记"],
        tips: "不用强迫自己每天写，想到了就写，活页本可以随时调整顺序。"
    },
    "RSBB": {
        code: "RSBB",
        name: "规律记录者",
        nameEn: "Routine Recorder",
        emoji: "📅",
        description: "你喜欢记录且喜欢有规律。五年日记很适合你，每天固定写几句。",
        descriptionEn: "You like recording with routine. 5-year journal suits you well.",
        recommendations: ["五年日记", "月历打卡"],
        tips: "每天睡前固定时间写，形成习惯后会很有成就感。"
    },
    "PFSB": {
        code: "PFSB",
        name: "灵活规划者",
        nameEn: "Flexible Planner",
        emoji: "🎯",
        description: "你有规划意识但需要灵活性。手机App更适合你，随时调整计划。",
        descriptionEn: "You plan but need flexibility. Phone App is better for you.",
        recommendations: ["手机App组合", "活页To-do"],
        tips: "用手机日历+待办App，每天睡前整理一下明天的计划。"
    },
    "PSBB": {
        code: "PSBB",
        name: "结构规划者",
        nameEn: "Structured Planner",
        emoji: "📌",
        description: "你喜欢规划且喜欢固定结构。定页周计划最适合，每周同样的格式。",
        descriptionEn: "You like planning with structure. Fixed weekly planner suits you.",
        recommendations: ["定页周计划", "月历"],
        tips: "选一本喜欢的定页手帐，每周开始时填好本周规划。"
    },

    // IS维度影响
    "RPISB": {
        code: "RPISB",
        name: "私密记录者",
        nameEn: "Private Recorder",
        emoji: "🔒",
        description: "你记录是为自己，追求实用。不需要装饰，简单记录就好。",
        descriptionEn: "You record for yourself, practical. No decoration needed.",
        recommendations: ["简单日记", "Bullet Journal"],
        tips: "用最简单的格式，子弹笔记法很适合你：快速记录要点。"
    },
    "RPSSB": {
        code: "RPSSB",
        name: "分享记录者",
        nameEn: "Sharing Recorder",
        emoji: "📤",
        description: "你记录也想分享给别人看。可以在社交媒体上发手帐照片。",
        descriptionEn: "You record and want to share. Post journal photos on social media.",
        recommendations: ["Timeline（美观版）", "Ins风手帐"],
        tips: "写的时候想着\"这个会不会好看\"，自然会更注重美观。"
    },

    // 数字偏好
    "DPSB": {
        code: "DPSB",
        name: "数字记录者",
        nameEn: "Digital Recorder",
        emoji: "📱",
        description: "你更喜欢用电子设备。手机App组合可以满足你的所有需求。",
        descriptionEn: "You prefer electronic devices. Phone App combo meets all needs.",
        recommendations: ["Notion/备忘录", "日历App"],
        tips: "用Notion或备忘录App，随时记录，多设备同步。"
    },
    "DPBB": {
        code: "DPBB",
        name: "数字美学派",
        nameEn: "Digital Aesthetic",
        emoji: "💻✨",
        description: "你想用电子设备但也想美观。可以用数字手帐App或好看的模板。",
        descriptionEn: "You want digital but also beautiful. Use digital journal apps.",
        recommendations: ["GoodNotes", "数字手帐模板"],
        tips: "iPad + GoodNotes可以做很好看的数字手帐。"
    },

    // ADHD/P型特殊类型
    "ADHD_FRIENDLY": {
        code: "ADHD_FRIENDLY",
        name: "ADHD友好型",
        nameEn: "ADHD Friendly",
        emoji: "💫",
        description: "你注意力容易分散，传统计划会失败。以记录为主，不要强迫自己计划。",
        descriptionEn: "You get distracted easily. Focus on recording, not planning.",
        recommendations: ["Timeline", "简单To-do", "手机App"],
        tips: "不要给自己定太高的要求。每天写几句就好，记录让你看到时间是怎么过的。"
    }
};

// 计算MBTI结果
function calculateJournalMBTI(answers) {
    var scores = { RP: 0, PD: 0, SB: 0, FS: 0, IS: 0 };

    answers.forEach(function(answer) {
        if (scores.hasOwnProperty(answer.dimension)) {
            if (answer.value === answer.dimension.charAt(0)) {
                scores[answer.dimension] += 1;
            } else {
                scores[answer.dimension] -= 1;
            }
        }
    });

    // 生成类型代码
    var typeCode = "";
    typeCode += scores.RP > 0 ? "R" : "P";
    typeCode += scores.FS > 0 ? "F" : "S";
    typeCode += scores.SB > 0 ? "S" : "B";

    // 查找匹配类型
    var matchedType = null;

    // 先检查是否有ADHD倾向（从wizardData获取）
    if (typeof wizardData !== 'undefined' && wizardData.adhdLevel === 'significant') {
        matchedType = journalTypes["ADHD_FRIENDLY"];
    }

    // 如果没有ADHD标记，根据得分匹配
    if (!matchedType) {
        // 优先匹配完整代码
        Object.keys(journalTypes).forEach(function(key) {
            if (key !== "ADHD_FRIENDLY" && typeCode === key.substring(0, 3)) {
                matchedType = journalTypes[key];
            }
        });

        // 如果没找到，找最接近的
        if (!matchedType) {
            var closestMatch = null;
            var bestScore = -Infinity;

            Object.keys(journalTypes).forEach(function(key) {
                if (key === "ADHD_FRIENDLY") return;
                var type = journalTypes[key];
                var matchScore = 0;

                if (type.code.charAt(0) === typeCode.charAt(0)) matchScore += 3;
                if (type.code.charAt(1) === typeCode.charAt(1)) matchScore += 2;
                if (type.code.charAt(2) === typeCode.charAt(2)) matchScore += 2;

                if (matchScore > bestScore) {
                    bestScore = matchScore;
                    closestMatch = type;
                }
            });

            matchedType = closestMatch;
        }
    }

    return {
        typeCode: typeCode,
        scores: scores,
        type: matchedType
    };
}