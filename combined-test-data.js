// ============================================
// Combined Journal Test Data - Sophie手帐
// 合并版手帐人格测试 - 保留原有MBTI + Planner Wizard
// ============================================

// 测试维度说明
var testDimensions = {
    RP: { name: "记录 vs 规划", nameEn: "Record vs Plan", description: "你更倾向于记录已发生的事，还是规划未来的事？" },
    PD: { name: "纸质 vs 数字", nameEn: "Paper vs Digital", description: "你更喜欢手写记录，还是电子设备？" },
    SB: { name: "实用 vs 美观", nameEn: "Simple vs Beautiful", description: "你更在意效率实用，还是视觉美观？" },
    FS: { name: "灵活 vs 结构", nameEn: "Flexible vs Structured", description: "你喜欢随心所欲，还是按固定格式？" },
    IS: { name: "独立 vs 社交", nameEn: "Individual vs Social", description: "你喜欢自己写，还是分享给别人看？" },
    AT: { name: "注意力特点", nameEn: "Attention Style", description: "你的注意力稳定还是容易分散？" },
    HB: { name: "习惯坚持", nameEn: "Habit Persistence", description: "你能坚持做一件事吗？" },
    CS: { name: "颜色风格", nameEn: "Color Style", description: "你的颜色和风格偏好（加分项）", isPlus: true }
};

// 测试问题 - 合并版本，每题3个选项
var testQuestions = [
    // 第一部分：RP维度 (记录 vs 规划) - 4题
    {
        id: 1,
        dimension: "RP",
        question: "当你打开手帐本时，你更想做什么？",
        questionEn: "When you open your journal, what do you want to do?",
        options: [
            { value: 3, text: "写下今天发生的事，回顾这一天", textEn: "Write about what happened today" },
            { value: 2, text: "两者都写，先记录再简单规划", textEn: "Both - record then briefly plan" },
            { value: 1, text: "写下明天要做的事，规划未来", textEn: "Write tasks for tomorrow, plan ahead" }
        ]
    },
    {
        id: 2,
        dimension: "RP",
        question: "如果一天结束时发现计划没完成，你会怎么想？",
        questionEn: "If your plans aren't completed by end of day?",
        options: [
            { value: 3, text: "没关系，记录一下实际做了什么就好", textEn: "It's okay, just record what I actually did" },
            { value: 2, text: "有点在意，但不会太焦虑", textEn: "A bit concerned but not too anxious" },
            { value: 1, text: "很焦虑，想调整计划确保下次完成", textEn: "Very anxious, want to adjust plans" }
        ]
    },
    {
        id: 3,
        dimension: "RP",
        question: "你写手帐的主要目的是什么？",
        questionEn: "What's your main purpose for journaling?",
        options: [
            { value: 3, text: "记录生活，留住记忆", textEn: "Record life, keep memories" },
            { value: 2, text: "两者兼顾，记录和规划都有", textEn: "Both - recording and planning" },
            { value: 1, text: "提高效率，完成任务", textEn: "Improve efficiency, complete tasks" }
        ]
    },
    {
        id: 4,
        dimension: "RP",
        question: "看到过去的记录，你会？",
        questionEn: "When seeing past records?",
        options: [
            { value: 3, text: "很开心，喜欢回顾过去的自己", textEn: "Happy, enjoy reviewing past self" },
            { value: 2, text: "偶尔会看，感觉挺有意思", textEn: "Sometimes look, quite interesting" },
            { value: 1, text: "不太看，更关心未来的计划", textEn: "Rarely look, care more about future plans" }
        ]
    },

    // 第二部分：PD维度 (纸质 vs 数字) - 4题
    {
        id: 5,
        dimension: "PD",
        question: "如果要记一件重要的事，你会选择？",
        questionEn: "To record something important, you choose?",
        options: [
            { value: 3, text: "拿笔写在纸上", textEn: "Write with pen on paper" },
            { value: 2, text: "都可以，看情况", textEn: "Either works, depends on situation" },
            { value: 1, text: "用手机/电脑记录", textEn: "Use phone/computer to record" }
        ]
    },
    {
        id: 6,
        dimension: "PD",
        question: "你更喜欢什么样的记录体验？",
        questionEn: "What recording experience do you prefer?",
        options: [
            { value: 3, text: "手写的触感，可以自由装饰", textEn: "Handwriting feel, can decorate freely" },
            { value: 2, text: "两种体验都挺喜欢", textEn: "Like both experiences" },
            { value: 1, text: "随时修改，方便搜索和同步", textEn: "Edit anytime, easy to search and sync" }
        ]
    },
    {
        id: 7,
        dimension: "PD",
        question: "如果出门忘记带手帐工具，你会？",
        questionEn: "If you forgot your journal tools?",
        options: [
            { value: 3, text: "等回家再写在纸上", textEn: "Wait to write on paper when home" },
            { value: 2, text: "先用手机记，回家再整理", textEn: "Note on phone first,整理 at home" },
            { value: 1, text: "用手机记就好，不需要纸质", textEn: "Phone works fine, don't need paper" }
        ]
    },
    {
        id: 8,
        dimension: "PD",
        question: "你更喜欢在哪里写手帐？",
        questionEn: "Where do you prefer to journal?",
        options: [
            { value: 3, text: "安静的角落，摊开本子慢慢写", textEn: "Quiet corner, spread out the notebook" },
            { value: 2, text: "都可以，随时随地", textEn: "Either, anytime anywhere" },
            { value: 1, text: "任何地方，用手机就行", textEn: "Anywhere, phone works" }
        ]
    },

    // 第三部分：SB维度 (实用 vs 美观) - 4题
    {
        id: 9,
        dimension: "SB",
        question: "写手帐时，你更在意什么？",
        questionEn: "When journaling, what matters more?",
        options: [
            { value: 3, text: "好看美观，有创意", textEn: "Beautiful and creative" },
            { value: 2, text: "既想好看也想实用", textEn: "Want both beautiful and practical" },
            { value: 1, text: "快速记录，简单实用", textEn: "Quick recording, simple and practical" }
        ]
    },
    {
        id: 10,
        dimension: "SB",
        question: "你会花多少时间装饰手帐？",
        questionEn: "How much time do you spend decorating?",
        options: [
            { value: 3, text: "比较多，装饰是重要部分", textEn: "Quite a lot, decoration is important" },
            { value: 2, text: "适中，有空就装饰一下", textEn: "Moderate, decorate when free" },
            { value: 1, text: "很少，主要用来记录内容", textEn: "Very little, mainly for content" }
        ]
    },
    {
        id: 11,
        dimension: "SB",
        question: "看到别人的精美手帐，你会？",
        questionEn: "When seeing others' beautiful journals?",
        options: [
            { value: 3, text: "很想学习，也想做出好看的手帐", textEn: "Want to learn and make beautiful ones" },
            { value: 2, text: "羡慕，但觉得要花很多时间", textEn: "Admire but think it takes time" },
            { value: 1, text: "欣赏就好，不适合我的风格", textEn: "Just admire, not my style" }
        ]
    },
    {
        id: 12,
        dimension: "SB",
        question: "你的手帐页面通常是？",
        questionEn: "Your journal pages usually are?",
        options: [
            { value: 3, text: "精心排版，有很多装饰", textEn: "Carefully laid out, lots of decoration" },
            { value: 2, text: "简单排版，偶尔贴贴纸", textEn: "Simple layout, occasional stickers" },
            { value: 1, text: "纯文字，没有任何装饰", textEn: "Pure text, no decoration" }
        ]
    },

    // 第四部分：FS维度 (灵活 vs 结构) - 4题
    {
        id: 13,
        dimension: "FS",
        question: "你更喜欢什么样的手帐格式？",
        questionEn: "What journal format do you prefer?",
        options: [
            { value: 3, text: "自由灵活，每天可以不一样", textEn: "Flexible, can be different each day" },
            { value: 2, text: "有基本框架，但可以自由调整", textEn: "Basic frame with flexibility" },
            { value: 1, text: "固定模板，有规律更安心", textEn: "Fixed template, routine feels secure" }
        ]
    },
    {
        id: 14,
        dimension: "FS",
        question: "如果手帐写了一周就放弃了固定格式，你会？",
        questionEn: "If you abandon the format after a week?",
        options: [
            { value: 3, text: "没问题，按心情写就好", textEn: "No problem, write as I feel" },
            { value: 2, text: "有点在意，但也能接受", textEn: "A bit concerned but can accept" },
            { value: 1, text: "有点困扰，想找回规律", textEn: "A bit troubled, want to find routine" }
        ]
    },
    {
        id: 15,
        dimension: "FS",
        question: "你做手帐的风格是？",
        questionEn: "Your journaling style is?",
        options: [
            { value: 3, text: "随性而写，想到什么写什么", textEn: "Spontaneous, write what comes to mind" },
            { value: 2, text: "有大致方向，但不会太严格", textEn: "Rough direction, not too strict" },
            { value: 1, text: "有章法，按计划步骤来", textEn: "Methodical, follow planned steps" }
        ]
    },
    {
        id: 16,
        dimension: "FS",
        question: "你喜欢什么样的页面布局？",
        questionEn: "What page layout do you like?",
        options: [
            { value: 3, text: "宽松型，留白多可以自由发挥", textEn: "Spacious, lots of whitespace to create" },
            { value: 2, text: "适中，有空白也有内容区域", textEn: "Moderate, whitespace and content areas" },
            { value: 1, text: "紧凑型，一页多内容信息密集", textEn: "Compact, dense content per page" }
        ]
    },

    // 第五部分：IS维度 (独立 vs 社交) - 3题
    {
        id: 17,
        dimension: "IS",
        question: "你的手帐主要是给谁看的？",
        questionEn: "Who is your journal mainly for?",
        options: [
            { value: 3, text: "自己，私人记录不分享", textEn: "Myself, private record no sharing" },
            { value: 2, text: "主要是自己，偶尔分享", textEn: "Mainly myself, occasionally share" },
            { value: 1, text: "也想分享给别人看", textEn: "Also want to share with others" }
        ]
    },
    {
        id: 18,
        dimension: "IS",
        question: "写完好看的手帐页面，你会？",
        questionEn: "After making a beautiful page?",
        options: [
            { value: 3, text: "自己欣赏就好", textEn: "Just admire it myself" },
            { value: 2, text: "可能会拍照发给朋友", textEn: "Maybe share with friends" },
            { value: 1, text: "想拍照发社交媒体", textEn: "Want to post on social media" }
        ]
    },
    {
        id: 19,
        dimension: "IS",
        question: "你会关注其他手帐博主吗？",
        questionEn: "Do you follow other journal bloggers?",
        options: [
            { value: 3, text: "偶尔，主要是自己写自己的", textEn: "Occasionally, mainly write my own" },
            { value: 2, text: "有时会看，学习一些技巧", textEn: "Sometimes watch, learn techniques" },
            { value: 1, text: "经常，想融入手帐圈子", textEn: "Often, want to join the community" }
        ]
    },

    // 第六部分：AT维度 (注意力特点) - ADHD倾向检测 - 3题
    {
        id: 20,
        dimension: "AT",
        question: "你的注意力容易分散吗？",
        questionEn: "Is your attention easily distracted?",
        options: [
            { value: 3, text: "是的，经常注意力跳跃", textEn: "Yes, attention jumps often" },
            { value: 2, text: "有时候，看情况", textEn: "Sometimes, depends" },
            { value: 1, text: "不太会，能专注做事", textEn: "Not really, can focus well" }
        ]
    },
    {
        id: 21,
        dimension: "AT",
        question: "你对时间的感知是？",
        questionEn: "How do you perceive time?",
        options: [
            { value: 3, text: "时间感模糊，经常不知道几点了", textEn: "Fuzzy, often don't know the time" },
            { value: 2, text: "有时候清晰有时候模糊", textEn: "Sometimes clear, sometimes fuzzy" },
            { value: 1, text: "时间感清晰，知道时间流逝", textEn: "Clear sense of time passing" }
        ]
    },
    {
        id: 22,
        dimension: "AT",
        question: "你能长时间专注做一件事吗？",
        questionEn: "Can you focus on one thing for long?",
        options: [
            { value: 3, text: "很难，经常中途转向其他事", textEn: "Hard, often switch to other things" },
            { value: 2, text: "还行，感兴趣的事能专注", textEn: "Okay, can focus on interesting things" },
            { value: 1, text: "可以，能按计划专注完成", textEn: "Yes, can focus as planned" }
        ]
    },

    // 第七部分：HB维度 (习惯坚持) - 2题
    {
        id: 23,
        dimension: "HB",
        question: "你之前尝试过手帐吗？结果如何？",
        questionEn: "Have you tried journaling before?",
        options: [
            { value: 3, text: "写过但经常放弃，坚持不下来", textEn: "Started but often quit" },
            { value: 2, text: "写过，断断续续", textEn: "Started, on and off" },
            { value: 1, text: "能坚持，习惯稳定", textEn: "Can stick to it consistently" }
        ]
    },
    {
        id: 24,
        dimension: "HB",
        question: "你对自己坚持做一件事的信心？",
        questionEn: "Confidence in sticking to something?",
        options: [
            { value: 3, text: "不太有信心，容易放弃", textEn: "Not confident, easily give up" },
            { value: 2, text: "还行，看情况", textEn: "Okay, depends" },
            { value: 1, text: "有信心，能坚持到底", textEn: "Confident, can stick to it" }
        ]
    },

    // ===== Plus维度：颜色风格偏好 =====
    {
        id: 25,
        dimension: "CS",
        isPlus: true,
        question: "你更喜欢什么样的颜色感觉？",
        questionEn: "What color feeling do you prefer?",
        options: [
            { value: "温柔", text: "温柔淡雅，像奶茶色、奶油色", textEn: "Soft and gentle, like milk tea or cream" },
            { value: "活力", text: "明亮活泼，像彩虹色、日落色", textEn: "Bright and lively, like rainbow or sunset" },
            { value: "复古", text: "怀旧深沉，像老照片、胶片色", textEn: "Vintage and deep, like sepia or film" }
        ]
    },
    {
        id: 26,
        dimension: "CS",
        isPlus: true,
        question: "你的手帐风格理想是？",
        questionEn: "Your ideal journal style?",
        options: [
            { value: "极简", text: "简洁干净，黑白灰", textEn: "Minimalist, clean black white grey" },
            { value: "艺术", text: "创意自由，像水彩、油画", textEn: "Artistic freedom, like watercolor or oil painting" },
            { value: "自然", text: "自然沉稳，像森林、海洋", textEn: "Natural and calm, like forest or ocean" }
        ]
    },
    {
        id: 27,
        dimension: "CS",
        isPlus: true,
        question: "如果选一个代表你的「人格底色」？",
        questionEn: "If you choose a 'base color' representing you?",
        options: [
            { value: "优雅", text: "优雅内敛，莫兰迪色系", textEn: "Elegant and restrained, Morandi colors" },
            { value: "东方", text: "东方韵味，水墨和风", textEn: "Eastern charm, ink wash or Japanese style" },
            { value: "现代", text: "现代前卫，赛博渐变", textEn: "Modern and avant-garde, cyber or gradient" }
        ]
    }
];

// 手帐人格类型
var testResultTypes = {
    // ===== 记录型 (R为主) =====
    "R_P_S": {
        emoji: "⏰",
        name: "时间记录者",
        nameEn: "Time Recorder",
        personality: "你喜欢记录真实发生的事，追求简单实用",
        personalityEn: "You prefer recording real events, simple and practical",
        desc: "Timeline时间轴最适合你，每天写下做了什么，时间感变清晰。",
        descEn: "Timeline suits you best, write what you did each day.",
        recommendations: ["timeline", "simple_diary", "daily_log"],
        tips: "不需要追求美观，记录才是你的核心。一天结束时花10分钟回顾写下就好。",
        starter: {
            tools: ["一本空白或横线本", "一支笔（可以是彩色笔，也可以是普通黑色）"],
            firstWeek: "每天睡前10分钟，写下今天做了3-5件事",
            dontDo: ["不要追求完美排版", "不要一开始就买太多装饰素材", "不要强迫自己每分钟都记录"]
        }
    },
    "R_P_B": {
        emoji: "📸",
        name: "生活收藏家",
        nameEn: "Life Collector",
        personality: "你喜欢记录生活，也注重美观",
        personalityEn: "You love recording life and making it beautiful",
        desc: "Timeline + 简单装饰，边记录边美化。",
        descEn: "Timeline with simple decoration, record and beautify.",
        recommendations: ["timeline_beauty", "photo_wall", "sticker_decor"],
        tips: "可以在Timeline旁边贴照片、小贴纸，让记录更生动。",
        starter: {
            tools: ["一本空白本（方格或空白页）", "和纸胶带2-3卷", "简单贴纸", "一支笔"],
            firstWeek: "每天写完Timeline后，花5分钟贴一个小装饰",
            dontDo: ["不要花太多时间装饰导致没时间记录", "不要买太多素材堆着不用"]
        }
    },
    "R_D_S": {
        emoji: "📱📝",
        name: "数字记录者",
        nameEn: "Digital Recorder",
        personality: "你喜欢记录但偏好电子设备",
        personalityEn: "You prefer recording digitally",
        desc: "手机App随时随地记录，多设备同步。",
        descEn: "Phone app lets you record anytime, sync across devices.",
        recommendations: ["notion", "notes_app", "calendar_app"],
        tips: "用Notion建立自己的手帐模板，或者直接用手机备忘录。",
        starter: {
            tools: ["手机备忘录App 或 Notion", "不需要买本子"],
            firstWeek: "每天想到什么就记，睡前整理一下",
            dontDo: ["不要纠结模板设计太久", "不要同时用太多App"]
        }
    },
    "R_D_B": {
        emoji: "💻✨",
        name: "数字美学派",
        nameEn: "Digital Aesthetic",
        personality: "你想用电子设备但也想美观",
        personalityEn: "You want digital but also beautiful",
        desc: "iPad + GoodNotes可以做很好看的数字手帐。",
        descEn: "iPad + GoodNotes makes beautiful digital journals.",
        recommendations: ["goodnotes", "digital_template", "notion_pretty"],
        tips: "多找好看的模板，数字手帐可以随时修改排版。",
        starter: {
            tools: ["iPad + Apple Pencil（或平板+触控笔）", "GoodNotes或类似App", "下载一些好看的模板"],
            firstWeek: "先找一个喜欢的模板，每天填写就好",
            dontDo: ["不要花太多时间找模板", "不要一开始就设计自己的模板"]
        }
    },

    // ===== 规划型 (P为主) =====
    "P_S_S": {
        emoji: "✅",
        name: "任务执行者",
        nameEn: "Task Executor",
        personality: "你以规划为主，追求效率实用",
        personalityEn: "You focus on planning and efficiency",
        desc: "To-do清单是你的核心工具，写下待办逐一完成。",
        descEn: "To-do list is your core tool, write and complete tasks.",
        recommendations: ["todo_simple", "weekly_plan", "monthly"],
        tips: "每天早上花5分钟列出今日待办，完成一个勾掉一个。",
        starter: {
            tools: ["一本空白或横线本", "一支笔（可以准备红色/荧光笔标重点）"],
            firstWeek: "每天早上写下5条待办，按重要性排序",
            dontDo: ["不要列太多任务（超过10条会压力太大）", "不要把所有想法都写进去"]
        }
    },
    "P_S_B": {
        emoji: "📋✨",
        name: "规划美学派",
        nameEn: "Planning Aesthetic",
        personality: "你既想规划又想美观",
        personalityEn: "You want both planning and beauty",
        desc: "结构化模板 + 装饰，让计划也好看。",
        descEn: "Structured templates with decoration, make plans beautiful.",
        recommendations: ["weekly_beauty", "monthly_decor", "goal_tracker"],
        tips: "买一些好看的周计划模板，或自己设计固定格式。",
        starter: {
            tools: ["定页周计划本或打印模板", "彩色笔/荧光笔", "和纸胶带"],
            firstWeek: "每周日开始填本周计划，每天更新",
            dontDo: ["不要每页都重新设计格式", "不要花太多时间装饰"]
        }
    },
    "P_F_S": {
        emoji: "🎯",
        name: "灵活规划者",
        nameEn: "Flexible Planner",
        personality: "你有规划意识但需要灵活性",
        personalityEn: "You plan but need flexibility",
        desc: "活页本或手机App让你随时调整计划。",
        descEn: "Loose-leaf or phone app lets you adjust plans.",
        recommendations: ["looseleaf_todo", "app_combo", "flexible_diary"],
        tips: "不用强迫自己每天固定写，有大致方向就好。",
        starter: {
            tools: ["活页本 + To-do内页", "或者手机日历+待办App"],
            firstWeek: "写下本周重要事项，每天灵活调整",
            dontDo: ["不要给自己定太严格的规则", "不要因为没完成就焦虑"]
        }
    },
    "P_F_B": {
        emoji: "🎨🎯",
        name: "创意规划者",
        nameEn: "Creative Planner",
        personality: "你想规划但不想被固定格式束缚",
        personalityEn: "You plan but don't want fixed format",
        desc: "活页本最适合，可以自由设计每次的排版。",
        descEn: "Loose-leaf binder lets you design layout freely.",
        recommendations: ["looseleaf_free", "bullet_journal", "custom_layout"],
        tips: "每周开始时简单规划，然后随心情调整和装饰。",
        starter: {
            tools: ["活页本 + 空白内页", "彩色笔", "贴纸/胶带"],
            firstWeek: "尝试不同的排版方式，找到喜欢的",
            dontDo: ["不要买定页本", "不要强迫自己每周排版都一样"]
        }
    },

    // ===== 灵活型 (F为主) =====
    "F_P_S": {
        emoji: "🌊",
        name: "随性记录者",
        nameEn: "Free-flow Recorder",
        personality: "你喜欢记录但不喜欢固定格式",
        personalityEn: "You like recording but dislike fixed format",
        desc: "活页本最适合你，想写什么写什么。",
        descEn: "Loose-leaf binder suits you, write whatever you want.",
        recommendations: ["looseleaf_free", "free_diary", "bullet_simple"],
        tips: "不用强迫自己每天写，想到了就写。",
        starter: {
            tools: ["活页本 + 各种内页（空白/方格/横线）", "一支笔"],
            firstWeek: "想写什么就写，不设固定时间",
            dontDo: ["不要强迫自己每天固定时间写", "不要纠结排版"]
        }
    },
    "F_P_B": {
        emoji: "🌸🌊",
        name: "美学自由派",
        nameEn: "Aesthetic Free-flow",
        personality: "你喜欢自由记录也想美观",
        personalityEn: "You like free recording and beauty",
        desc: "活页本 + 装饰素材，每次都可以不同风格。",
        descEn: "Loose-leaf with decoration, different style each time.",
        recommendations: ["looseleaf_decor", "washi_tape", "sticker_set"],
        tips: "准备一些装饰素材，写的时候随心情添加。",
        starter: {
            tools: ["活页本", "和纸胶带3-5卷", "贴纸", "彩色笔"],
            firstWeek: "每天尝试不同风格，开心就好",
            dontDo: ["不要强迫自己每次都装饰", "不要买太多素材堆着"]
        }
    },
    "F_D_S": {
        emoji: "📱🌊",
        name: "数字自由派",
        nameEn: "Digital Free-flow",
        personality: "你喜欢自由灵活的数字记录",
        personalityEn: "You prefer flexible digital recording",
        desc: "手机App随时随地自由记录。",
        descEn: "Phone app lets you record anytime freely.",
        recommendations: ["notes_free", "diary_app", "notion_free"],
        tips: "用最简单的App，想写就写。",
        starter: {
            tools: ["手机备忘录 或 日记App"],
            firstWeek: "想记就记，不设规则",
            dontDo: ["不要花时间设计模板", "不要强迫自己整理"]
        }
    },

    // ===== 结构型 (S为主) =====
    "S_P_S": {
        emoji: "📅",
        name: "规律记录者",
        nameEn: "Routine Recorder",
        personality: "你喜欢记录且喜欢有规律",
        personalityEn: "You like recording with routine",
        desc: "五年日记很适合你，每天固定写几句。",
        descEn: "5-year journal suits you, write a few lines daily.",
        recommendations: ["five_year", "monthly_check", "fixed_diary"],
        tips: "每天睡前固定时间写，形成习惯。",
        starter: {
            tools: ["五年日记本 或 定页日记本"],
            firstWeek: "每天睡前写3-5句，固定时间固定地点",
            dontDo: ["不要跳过日期", "不要写太多导致累"]
        }
    },
    "S_P_B": {
        emoji: "📔✨",
        name: "精致规律者",
        nameEn: "Beautiful Routine",
        personality: "你喜欢规律也想美观",
        personalityEn: "You like routine and beauty",
        desc: "定页手帐 + 固定装饰模板。",
        descEn: "Fixed notebook + decoration template.",
        recommendations: ["fixed_beauty", "template_decor", "monthly_sticker"],
        tips: "设计一个固定的装饰模板，每次复制就好。",
        starter: {
            tools: ["定页本（空白或方格）", "和纸胶带", "贴纸", "彩色笔"],
            firstWeek: "设计一个喜欢的模板，每天复制填写",
            dontDo: ["不要每天重新设计排版", "不要花太多时间装饰"]
        }
    },

    // ===== 社交型 =====
    "SHARE": {
        emoji: "📤",
        name: "分享记录者",
        nameEn: "Sharing Recorder",
        personality: "你记录也想分享给别人看",
        personalityEn: "You record and want to share",
        desc: "做成Ins风手帐，拍照分享。",
        descEn: "Make Instagram-style journal, share photos.",
        recommendations: ["instagram_style", "timeline_beauty", "photo_wall"],
        tips: "写的时候想着「这个会不会好看」，会更注重美观。",
        starter: {
            tools: ["好看的本子", "和纸胶带", "贴纸", "彩色笔", "拍立得或手机拍照"],
            firstWeek: "每页写完拍一张照片，整理发社交媒体",
            dontDo: ["不要为了拍照而写", "不要过度追求完美"]
        }
    },

    // ===== 特殊类型 =====
    "ADHD_FRIENDLY": {
        emoji: "💫",
        name: "ADHD友好型",
        nameEn: "ADHD Friendly",
        personality: "你注意力容易分散，时间感模糊",
        personalityEn: "Your attention easily distracted, fuzzy time sense",
        desc: "传统计划会失败，推荐以记录为主。",
        descEn: "Traditional plans fail, focus on recording.",
        recommendations: ["timeline", "todo_simple", "app_reminder"],
        tips: "不要给自己定太高的要求。每天写几句就好，记录让你看到时间是怎么过的。",
        starter: {
            tools: ["手机备忘录 或 最简单的本子", "不需要买太多工具"],
            firstWeek: "每天只写3件事，不强求时间精确",
            dontDo: ["不要给自己定严格计划", "不要追求完美", "不要买太多本子堆着"]
        }
    },
    "PERSISTENCE": {
        emoji: "💪",
        name: "坚持困难型",
        nameEn: "Persistence Challenge",
        personality: "你容易放弃，难以坚持",
        personalityEn: "You easily give up, hard to persist",
        desc: "推荐最简单的方式，降低门槛。",
        descEn: "Recommend simplest way, lower barrier.",
        recommendations: ["one_sentence", "app_check", "mini_diary"],
        tips: "从每天一句话开始，不要给自己设太多规则。坚持一周再慢慢增加。",
        starter: {
            tools: ["手机备忘录 或 一句话日记本"],
            firstWeek: "每天只写一句话，任何时间都可以",
            dontDo: ["不要定固定时间", "不要写太长", "不要买贵本子"]
        }
    },
    "BALANCED": {
        emoji: "⚖️",
        name: "均衡综合型",
        nameEn: "Balanced",
        personality: "你在各方面都比较均衡",
        personalityEn: "You're balanced in all aspects",
        desc: "可以尝试不同类型，找到最适合你的。",
        descEn: "Try different types to find what fits you.",
        recommendations: ["timeline", "todo_simple", "free_diary"],
        tips: "不用强迫自己固定一种方式，可以组合使用。",
        starter: {
            tools: ["活页本（可以换不同内页）"],
            firstWeek: "尝试Timeline一周，试试To-do一周，找感觉",
            dontDo: ["不要急着决定一种方式", "不要买太多工具"]
        }
    }
};

// 手帐类型详细推荐
var plannerRecommendations = {
    // Timeline系列
    "timeline": {
        id: "timeline",
        icon: "⏰",
        name: "Timeline时间轴",
        nameEn: "Timeline",
        desc: "按时间顺序记录每天做的事，让时间看得见",
        descEn: "Record what you do by time, make time visible",
        suitable: "适合注意力容易分散、时间感模糊的人",
        suitableEn: "Suitable for distracted people, fuzzy time sense",
        usageOptions: [
            {
                name: "即时记录法",
                nameEn: "Record as you go",
                desc: "做完一件事就写一条，不用等晚上",
                descEn: "Write after completing each task, don't wait for evening",
                detail: "适合经常忘记自己做了什么的人。随身带本子或用手机。"
            },
            {
                name: "晚间复盘法",
                nameEn: "Evening review",
                desc: "每天睡前10分钟，回顾今天做的事",
                descEn: "10 minutes before sleep, review today's activities",
                detail: "适合不想频繁记录的人。睡前静静回想，写下3-5件事。"
            }
        ],
        weeklyTemplate: {
            title: "Timeline一周使用建议",
            titleEn: "Timeline Weekly Template",
            days: [
                { day: "周一", dayEn: "Mon", task: "开始新的一周，写下本周想完成的重要事项（3-5条）", taskEn: "Start new week, write 3-5 important items" },
                { day: "周二-周五", dayEn: "Tue-Fri", task: "每天记录做了什么，时间标注大致时段即可（如\"上午\"\"下午\"）", taskEn: "Record daily activities, mark approximate time" },
                { day: "周六", dayEn: "Sat", task: "回顾本周：完成了什么？没完成什么？下周怎么调整？", taskEn: "Review week: completed? not completed? adjust?" },
                { day: "周日", dayEn: "Sun", task: "休息日，简单记录今天做的事，或者休息不写也可以", taskEn: "Rest day, simple record or rest" }
            ],
            tips: "时间标注不必精确到分钟，\"上午\"\"下午\"\"睡前\"即可。每条记录1句话足够。"
        },
        exampleImage: null // 可以后续添加图片路径
    },
    "timeline_beauty": {
        id: "timeline_beauty",
        icon: "⏰✨",
        name: "Timeline（美观版）",
        nameEn: "Timeline (Beautiful)",
        desc: "Timeline + 简单装饰，边记录边美化",
        descEn: "Timeline with simple decoration",
        suitable: "适合想记录也想美观的人",
        suitableEn: "Suitable for those who want both recording and beauty",
        usageOptions: [
            {
                name: "贴纸点缀法",
                desc: "Timeline旁边贴1-2个小贴纸/和纸胶带"
            },
            {
                name: "彩色标注法",
                desc: "用不同颜色的笔标注不同类型的事"
            }
        ],
        weeklyTemplate: null,
        exampleImage: null
    },

    // To-do系列
    "todo_simple": {
        id: "todo_simple",
        icon: "✅",
        name: "To-do清单",
        nameEn: "To-do List",
        desc: "写下待办事项，逐一完成勾掉",
        descEn: "Write tasks, complete and check off",
        suitable: "适合喜欢规划、追求效率的人",
        suitableEn: "Suitable for planners, efficiency seekers",
        usageOptions: [
            {
                name: "每日清单法",
                desc: "每天早上写下今天的5条待办，完成打勾",
                detail: "建议每天不超过10条，重要的事放前面。没完成的可以移到明天。"
            },
            {
                name: "每周清单法",
                desc: "每周开始写下本周待办，每天挑几条做",
                detail: "周日或周一写下本周要做的事，每天从中挑选今天的任务。"
            },
            {
                name: "想到就写法",
                desc: "想到什么待办就写下来，不固定时间",
                detail: "适合不想每天固定写的人。随时添加，完成就勾掉。"
            }
        ],
        weeklyTemplate: {
            title: "To-do一周使用建议",
            days: [
                { day: "周一", task: "写下本周待办（10-15条），按重要性排序" },
                { day: "周二-周五", task: "每天早上挑出今天的5条待办，完成打勾" },
                { day: "周六", task: "检查本周完成情况，没完成的移到下周" },
                { day: "周日", task: "下周规划：写下下周重要事项" }
            ],
            tips: "重要的事可以用红色/荧光笔标注。完成打勾后可以写完成时间。"
        },
        exampleImage: null
    },

    // 周计划
    "weekly_plan": {
        id: "weekly_plan",
        icon: "📅",
        name: "周计划",
        nameEn: "Weekly Planner",
        desc: "每周开始时规划本周重要事项",
        descEn: "Plan important items at start of week",
        suitable: "适合喜欢规律、有固定节奏的人",
        suitableEn: "Suitable for routine lovers",
        usageOptions: [
            {
                name: "格子周计划",
                desc: "周一到周日各一个格子，每天写当天计划"
            },
            {
                name: "列表周计划",
                desc: "本周目标 + 每日任务列表"
            }
        ],
        weeklyTemplate: null,
        exampleImage: null
    },
    "weekly_beauty": {
        id: "weekly_beauty",
        icon: "📅✨",
        name: "周计划（美观版）",
        nameEn: "Weekly Planner (Beautiful)",
        desc: "周计划模板 + 装饰",
        descEn: "Weekly template with decoration",
        suitable: "适合想规划也想美观的人",
        suitableEn: "Suitable for planning + beauty lovers",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },

    // 月历
    "monthly": {
        id: "monthly",
        icon: "📊",
        name: "月历",
        nameEn: "Monthly Calendar",
        desc: "一览整月安排，追踪长期目标",
        descEn: "Overview of month, track long-term goals",
        suitable: "适合追踪习惯、记录重要日期",
        suitableEn: "Suitable for habit tracking, important dates",
        usageOptions: [
            {
                name: "打卡月历",
                desc: "每天完成的习惯在对应日期打勾/涂色"
            },
            {
                name: "事件月历",
                desc: "重要日期、预约、活动写在对应格子"
            }
        ],
        weeklyTemplate: null,
        exampleImage: null
    },

    // 五年日记
    "five_year": {
        id: "five_year",
        icon: "📔",
        name: "五年日记",
        nameEn: "5-Year Journal",
        desc: "每天固定写几句，五年后看同一天的自己",
        descEn: "Write a few lines daily, see yourself after 5 years",
        suitable: "适合喜欢长期坚持、有规律的人",
        suitableEn: "Suitable for long-term persistence lovers",
        usageOptions: [
            {
                name: "固定问题法",
                desc: "每天回答同样的几个问题（如：今天开心吗？做了什么？）"
            },
            {
                name: "自由写作法",
                desc: "每天自由写3-5句话，不固定问题"
            }
        ],
        weeklyTemplate: null,
        exampleImage: null
    },

    // 活页本
    "looseleaf_todo": {
        id: "looseleaf_todo",
        icon: "📒",
        name: "活页To-do",
        nameEn: "Loose-leaf To-do",
        desc: "灵活调整，随时增删待办页",
        descEn: "Flexible, add/remove to-do pages anytime",
        suitable: "适合计划经常变化的人",
        suitableEn: "Suitable for flexible planners",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "looseleaf_free": {
        id: "looseleaf_free",
        icon: "📒",
        name: "活页自由本",
        nameEn: "Loose-leaf Free",
        desc: "想写什么写什么，随意组合内页",
        descEn: "Write whatever, combine pages freely",
        suitable: "适合不喜欢固定格式的人",
        suitableEn: "Suitable for free-style lovers",
        usageOptions: [
            {
                name: "混合内页",
                desc: "空白页、方格页、横线页混合使用"
            },
            {
                name: "随意顺序",
                desc: "写完的页可以随时调整顺序"
            }
        ],
        weeklyTemplate: null,
        exampleImage: null
    },
    "looseleaf_decor": {
        id: "looseleaf_decor",
        icon: "📒✨",
        name: "活页装饰本",
        nameEn: "Loose-leaf Decorated",
        desc: "每页都可以不同风格装饰",
        descEn: "Each page can have different decoration style",
        suitable: "适合想自由又想美观的人",
        suitableEn: "Suitable for free + beauty lovers",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },

    // 数字App
    "notion": {
        id: "notion",
        icon: "📱",
        name: "Notion手帐",
        nameEn: "Notion Journal",
        desc: "多设备同步，自由设计模板",
        descEn: "Sync across devices, design templates freely",
        suitable: "适合数字偏好、想自定义的人",
        suitableEn: "Suitable for digital lovers",
        usageOptions: [
            {
                name: "每日页面",
                desc: "每天一个页面，记录+待办+感想"
            },
            {
                name: "数据库法",
                desc: "用数据库管理待办、习惯打卡等"
            }
        ],
        weeklyTemplate: null,
        exampleImage: null
    },
    "notes_app": {
        id: "notes_app",
        icon: "📝",
        name: "手机备忘录",
        nameEn: "Phone Notes",
        desc: "最简单，随时随地记录",
        descEn: "Simplest, record anytime anywhere",
        suitable: "适合不想花时间设计的人",
        suitableEn: "Suitable for simple lovers",
        usageOptions: [
            {
                name: "一条笔记法",
                desc: "每天一条笔记，写完就追加"
            },
            {
                name: "多条笔记法",
                desc: "每件事一条笔记，时间戳自动记录"
            }
        ],
        weeklyTemplate: null,
        exampleImage: null
    },
    "goodnotes": {
        id: "goodnotes",
        icon: "💻",
        name: "GoodNotes数字手帐",
        nameEn: "GoodNotes Digital Journal",
        desc: "iPad上做美观的数字手帐",
        descEn: "Beautiful digital journal on iPad",
        suitable: "适合iPad用户、想美观",
        suitableEn: "Suitable for iPad users",
        usageOptions: [
            {
                name: "下载模板",
                desc: "网上找好看的PDF模板导入"
            },
            {
                name: "自己设计",
                desc: "用GoodNotes的页面模板自己设计"
            }
        ],
        weeklyTemplate: null,
        exampleImage: null
    },

    // 简单日记
    "simple_diary": {
        id: "simple_diary",
        icon: "📖",
        name: "简单日记",
        nameEn: "Simple Diary",
        desc: "纯文字记录，不装饰",
        descEn: "Pure text, no decoration",
        suitable: "适合追求效率、不想装饰的人",
        suitableEn: "Suitable for efficiency seekers",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "free_diary": {
        id: "free_diary",
        icon: "📖",
        name: "自由日记",
        nameEn: "Free Diary",
        desc: "想写什么写什么，不固定格式",
        descEn: "Write whatever, no fixed format",
        suitable: "适合自由灵活的人",
        suitableEn: "Suitable for free-style lovers",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "fixed_diary": {
        id: "fixed_diary",
        icon: "📖",
        name: "定页日记",
        nameEn: "Fixed Diary",
        desc: "每天一页，固定格式",
        descEn: "One page per day, fixed format",
        suitable: "适合喜欢规律的人",
        suitableEn: "Suitable for routine lovers",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },

    // 装饰相关
    "photo_wall": {
        id: "photo_wall",
        icon: "📸",
        name: "照片墙",
        nameEn: "Photo Wall",
        desc: "贴照片记录生活",
        descEn: "Paste photos to record life",
        suitable: "适合喜欢拍照的人",
        suitableEn: "Suitable for photo lovers",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "sticker_decor": {
        id: "sticker_decor",
        icon: "🎀",
        name: "贴纸装饰",
        nameEn: "Sticker Decoration",
        desc: "用贴纸美化页面",
        descEn: "Use stickers to beautify pages",
        suitable: "适合想快速装饰的人",
        suitableEn: "Suitable for quick decoration",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "washi_tape": {
        id: "washi_tape",
        icon: "🎀",
        name: "和纸胶带",
        nameEn: "Washi Tape",
        desc: "用胶带做边框分隔",
        descEn: "Use tape for borders and separation",
        suitable: "适合简单装饰",
        suitableEn: "Suitable for simple decoration",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },

    // 子弹笔记
    "bullet_simple": {
        id: "bullet_simple",
        icon: "•",
        name: "子弹笔记（简化版）",
        nameEn: "Bullet Journal (Simple)",
        desc: "快速记录要点，高效简洁",
        descEn: "Quick bullet points, efficient",
        suitable: "适合追求效率的人",
        suitableEn: "Suitable for efficiency seekers",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "bullet_journal": {
        id: "bullet_journal",
        icon: "•",
        name: "子弹笔记",
        nameEn: "Bullet Journal",
        desc: "完整的子弹笔记系统",
        descEn: "Full bullet journal system",
        suitable: "适合想系统化管理的人",
        suitableEn: "Suitable for systematic management",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },

    // 一句话日记
    "one_sentence": {
        id: "one_sentence",
        icon: "💬",
        name: "一句话日记",
        nameEn: "One Sentence Diary",
        desc: "每天只写一句话，最低门槛",
        descEn: "Just one sentence daily, lowest barrier",
        suitable: "适合难以坚持的人",
        suitableEn: "Suitable for those who can't persist",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },

    // 其他
    "monthly_check": {
        id: "monthly_check",
        icon: "📊",
        name: "月历打卡",
        nameEn: "Monthly Check",
        desc: "每月一页，每天打卡",
        descEn: "One page per month, daily check",
        suitable: "适合追踪习惯",
        suitableEn: "Suitable for habit tracking",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "goal_tracker": {
        id: "goal_tracker",
        icon: "🎯",
        name: "目标追踪",
        nameEn: "Goal Tracker",
        desc: "追踪长期目标进度",
        descEn: "Track long-term goal progress",
        suitable: "适合有长期目标的人",
        suitableEn: "Suitable for long-term goal setters",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "instagram_style": {
        id: "instagram_style",
        icon: "📤",
        name: "Ins风手帐",
        nameEn: "Instagram Style",
        desc: "适合拍照分享的排版风格",
        descEn: "Layout style suitable for photo sharing",
        suitable: "适合想分享的人",
        suitableEn: "Suitable for sharers",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "app_combo": {
        id: "app_combo",
        icon: "📱",
        name: "手机App组合",
        nameEn: "App Combo",
        desc: "日历+待办+备忘录组合使用",
        descEn: "Calendar + To-do + Notes combo",
        suitable: "适合数字偏好",
        suitableEn: "Suitable for digital lovers",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "app_reminder": {
        id: "app_reminder",
        icon: "🔔",
        name: "提醒App",
        nameEn: "Reminder App",
        desc: "用提醒功能帮助记住写手帐",
        descEn: "Use reminder to help remember journaling",
        suitable: "适合容易忘记的人",
        suitableEn: "Suitable for forgetful people",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "daily_log": {
        id: "daily_log",
        icon: "📝",
        name: "每日日志",
        nameEn: "Daily Log",
        desc: "每天一页记录",
        descEn: "One page per day",
        suitable: "适合详细记录",
        suitableEn: "Suitable for detailed recording",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "notes_free": {
        id: "notes_free",
        icon: "📝",
        name: "备忘录自由记",
        nameEn: "Free Notes",
        desc: "想写就写",
        descEn: "Write whenever",
        suitable: "适合最简单",
        suitableEn: "Suitable for simplest",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "diary_app": {
        id: "diary_app",
        icon: "📱",
        name: "日记App",
        nameEn: "Diary App",
        desc: "专门的日记应用",
        descEn: "Dedicated diary app",
        suitable: "适合想简单记录",
        suitableEn: "Suitable for simple recording",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "notion_free": {
        id: "notion_free",
        icon: "📱",
        name: "Notion自由模板",
        nameEn: "Notion Free Template",
        desc: "自由设计页面",
        descEn: "Design pages freely",
        suitable: "适合自定义",
        suitableEn: "Suitable for customization",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "notion_pretty": {
        id: "notion_pretty",
        icon: "✨",
        name: "Notion美化模板",
        nameEn: "Notion Pretty Template",
        desc: "好看的Notion模板",
        descEn: "Beautiful Notion template",
        suitable: "适合数字美学",
        suitableEn: "Suitable for digital aesthetic",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "digital_template": {
        id: "digital_template",
        icon: "💻",
        name: "数字手帐模板",
        nameEn: "Digital Template",
        desc: "下载好看的PDF模板",
        descEn: "Download beautiful PDF template",
        suitable: "适合数字手帐",
        suitableEn: "Suitable for digital journal",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "calendar_app": {
        id: "calendar_app",
        icon: "📅",
        name: "日历App",
        nameEn: "Calendar App",
        desc: "用日历记录事件",
        descEn: "Use calendar for events",
        suitable: "适合记录重要日期",
        suitableEn: "Suitable for important dates",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "app_check": {
        id: "app_check",
        icon: "✅",
        name: "打卡App",
        nameEn: "Check-in App",
        desc: "简单的打卡应用",
        descEn: "Simple check-in app",
        suitable: "适合追踪习惯",
        suitableEn: "Suitable for habit tracking",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "mini_diary": {
        id: "mini_diary",
        icon: "📝",
        name: "迷你日记",
        nameEn: "Mini Diary",
        desc: "每天只写很少",
        descEn: "Write very little daily",
        suitable: "适合难以坚持",
        suitableEn: "Suitable for persistence challenge",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "sticker_set": {
        id: "sticker_set",
        icon: "🎀",
        name: "贴纸套装",
        nameEn: "Sticker Set",
        desc: "一套贴纸素材",
        descEn: "A set of stickers",
        suitable: "适合装饰",
        suitableEn: "Suitable for decoration",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "fixed_beauty": {
        id: "fixed_beauty",
        icon: "📔✨",
        name: "定页美观本",
        nameEn: "Fixed Beautiful Notebook",
        desc: "定页本 + 美观排版",
        descEn: "Fixed notebook + beautiful layout",
        suitable: "适合规律 + 美观",
        suitableEn: "Suitable for routine + beauty",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "template_decor": {
        id: "template_decor",
        icon: "📋",
        name: "模板装饰",
        nameEn: "Template Decoration",
        desc: "固定模板每次填写",
        descEn: "Fixed template, fill each time",
        suitable: "适合不想每次设计",
        suitableEn: "Suitable for no design each time",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "monthly_sticker": {
        id: "monthly_sticker",
        icon: "📊✨",
        name: "月历贴纸",
        nameEn: "Monthly Sticker",
        desc: "月历 + 贴纸装饰",
        descEn: "Monthly calendar + sticker decoration",
        suitable: "适合美观月历",
        suitableEn: "Suitable for beautiful monthly",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "monthly_decor": {
        id: "monthly_decor",
        icon: "📊✨",
        name: "月历（装饰版）",
        nameEn: "Monthly (Decorated)",
        desc: "月历 + 美观设计",
        descEn: "Monthly calendar + beautiful design",
        suitable: "适合美观月历",
        suitableEn: "Suitable for beautiful monthly",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    },
    "custom_layout": {
        id: "custom_layout",
        icon: "🎨",
        name: "自定义排版",
        nameEn: "Custom Layout",
        desc: "每次自己设计排版",
        descEn: "Design layout each time",
        suitable: "适合创意型",
        suitableEn: "Suitable for creative type",
        usageOptions: null,
        weeklyTemplate: null,
        exampleImage: null
    }
};

// 计算测试结果
function calculateTestResult(answers) {
    // 初始化各维度得分 (高分偏向第一个选项)
    var scores = {
        RP: 0,      // 高分=记录，低分=规划
        PD: 0,      // 高分=纸质，低分=数字
        SB: 0,      // 高分=美观，低分=实用
        FS: 0,      // 高分=灵活，低分=结构
        IS: 0,      // 高分=独立，低分=社交
        AT: 0,      // 高分=分散，低分=专注
        HB: 0       // 高分=难以坚持，低分=能坚持
    };

    // 统计每个维度的问题数量
    var dimensionCounts = {
        RP: 4, PD: 4, SB: 4, FS: 4, IS: 3, AT: 3, HB: 2
    };

    // 累加答案
    answers.forEach(function(answer) {
        if (scores.hasOwnProperty(answer.dimension)) {
            scores[answer.dimension] += answer.value;
        }
    });

    // 计算百分比倾向 (0-100)
    var tendencies = {};
    Object.keys(scores).forEach(function(dim) {
        var maxScore = dimensionCounts[dim] * 3;
        var minScore = dimensionCounts[dim] * 1;
        tendencies[dim] = Math.round((scores[dim] - minScore) / (maxScore - minScore) * 100);
    });

    // 根据得分判断类型代码
    var resultType = null;

    // 特殊类型优先检测
    if (tendencies.AT > 70) {
        resultType = testResultTypes["ADHD_FRIENDLY"];
    } else if (tendencies.HB > 70) {
        resultType = testResultTypes["PERSISTENCE"];
    } else if (tendencies.IS < 30) {
        resultType = testResultTypes["SHARE"];
    } else if (Object.keys(tendencies).every(function(dim) {
        return tendencies[dim] >= 40 && tendencies[dim] <= 60;
    })) {
        resultType = testResultTypes["BALANCED"];
    } else {
        // 组合主要特征
        var rpChar = tendencies.RP > 50 ? "R" : "P";
        var pdChar = tendencies.PD > 50 ? "P" : "D";
        var sbChar = tendencies.SB > 50 ? "B" : "S";
        var fsChar = tendencies.FS > 50 ? "F" : "S";

        var typeCode = rpChar + "_" + pdChar + "_" + sbChar;

        if (testResultTypes[typeCode]) {
            resultType = testResultTypes[typeCode];
        } else {
            // 用灵活/结构维度辅助
            if (fsChar === "F") {
                if (rpChar === "R") {
                    resultType = tendencies.SB > 50 ? testResultTypes["F_P_B"] : testResultTypes["F_P_S"];
                } else {
                    resultType = tendencies.SB > 50 ? testResultTypes["P_F_B"] : testResultTypes["P_F_S"];
                }
            } else {
                if (rpChar === "R") {
                    resultType = tendencies.SB > 50 ? testResultTypes["S_P_B"] : testResultTypes["S_P_S"];
                } else {
                    resultType = tendencies.SB > 50 ? testResultTypes["P_S_B"] : testResultTypes["P_S_S"];
                }
            }
        }
    }

    if (!resultType) {
        resultType = testResultTypes["BALANCED"];
    }

    return {
        scores: scores,
        tendencies: tendencies,
        type: resultType
    };
}

// 获取详细推荐
function getDetailedRecommendations(resultType, tendencies) {
    var detailed = [];

    resultType.recommendations.forEach(function(recKey) {
        if (plannerRecommendations[recKey]) {
            detailed.push(plannerRecommendations[recKey]);
        }
    });

    return detailed;
}