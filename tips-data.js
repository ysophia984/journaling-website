// ============================================
// Journaling Tips Data - Sophie手帐
// ============================================

var journalTips = [
    {
        id: 1,
        title: "尺子防晕墨",
        titleEn: "Ruler Anti-smudge",
        titleTw: "尺子防晕墨",
        content: "使用尺子和荧光笔时会晕开？试试把尺子反过来用，光滑的一面不会吸墨！",
        contentEn: "When using rulers with highlighters, ink smudges? Try using the ruler upside down - the smooth side doesn't absorb ink!",
        contentTw: "使用尺子和螢光筆時會晕開？試試把尺子反過來用，光滑的一面不會吸墨！",
        category: "技巧",
        categoryEn: "Tips",
        categoryTw: "技巧"
    },
    {
        id: 2,
        title: "防止透墨",
        titleEn: "Prevent Ink Bleed",
        titleTw: "防止透墨",
        content: "手帐纸质比较薄会透到下一页？写字时多垫几张纸，或者选用 thicker 的笔。",
        contentEn: "Paper too thin and ink bleeds through? Place extra paper underneath, or use thicker pens.",
        contentTw: "手帳紙質比較薄會透到下一頁？寫字時多墊幾張紙，或者選用較粗的筆。",
        category: "技巧",
        categoryEn: "Tips",
        categoryTw: "技巧"
    },
    {
        id: 3,
        title: "铅笔打底",
        titleEn: "Pencil Sketch First",
        titleTw: "鉛筆打底",
        content: "不确定怎么写？先用铅笔轻轻打底，满意后用水笔描边，再擦掉铅笔痕迹。",
        contentEn: "Not sure how to write? Sketch lightly with pencil first, trace with pen when satisfied, then erase pencil marks.",
        contentTw: "不確定怎麼寫？先用鉛筆輕輕打底，滿意後用水筆描邊，再擦掉鉛筆痕跡。",
        category: "技巧",
        categoryEn: "Tips",
        categoryTw: "技巧"
    },
    {
        id: 4,
        title: "贴纸妙用",
        titleEn: "Sticker Tricks",
        titleTw: "貼紙妙用",
        content: "贴纸可以剪成小块重复使用！一个大贴纸可以分成标题装饰、边框元素等多个用途。",
        contentEn: "Stickers can be cut into smaller pieces! One large sticker can be used for title decoration, borders, etc.",
        contentTw: "貼紙可以剪成小塊重複使用！一個大貼紙可以分成標題裝飾、邊框元素等多個用途。",
        category: "省钱",
        categoryEn: "Budget",
        categoryTw: "省錢"
    },
    {
        id: 5,
        title: "写错了没关系",
        titleEn: "Mistakes Are Okay",
        titleTw: "寫錯了沒關係",
        content: "日期写错了？划掉重新写就好！手帐是记录生活的，不需要完美无缺。",
        contentEn: "Wrong date? Just cross it out and rewrite! Journals record life, they don't need to be perfect.",
        contentTw: "日期寫錯了？劃掉重新寫就好！手帳是記錄生活的，不需要完美無缺。",
        category: "心态",
        categoryEn: "Mindset",
        categoryTw: "心態"
    },
    {
        id: 6,
        title: "留白的艺术",
        titleEn: "The Art of Whitespace",
        titleTw: "留白的藝術",
        content: "留白也是排版的一部分！不要填满每一寸空间，让页面有呼吸感。",
        contentEn: "Whitespace is part of layout! Don't fill every inch, let the page breathe.",
        contentTw: "留白也是排版的一部分！不要填滿每一寸空間，讓頁面有呼吸感。",
        category: "排版",
        categoryEn: "Layout",
        categoryTw: "排版"
    },
    {
        id: 7,
        title: "颜色不超过3种",
        titleEn: "Max 3 Colors",
        titleTw: "顏色不超過3種",
        content: "一页手帐的颜色最好不要超过3种，太多颜色会让页面显得杂乱。",
        contentEn: "Best to use no more than 3 colors per page. Too many colors make it look messy.",
        contentTw: "一頁手帳的顏色最好不要超過3種，太多顏色會讓頁面顯得雜亂。",
        category: "配色",
        categoryEn: "Colors",
        categoryTw: "配色"
    },
    {
        id: 8,
        title: "标题要醒目",
        titleEn: "Make Titles Stand Out",
        titleTw: "標題要醒目",
        content: "标题可以用大写字母、粗体或不同颜色来突出，让人一眼就能找到重点。",
        contentEn: "Titles can use uppercase, bold, or different colors to stand out. Easy to find key points.",
        contentTw: "標題可以用大寫字母、粗體或不同顏色來突出，讓人一眼就能找到重點。",
        category: "排版",
        categoryEn: "Layout",
        categoryTw: "排版"
    },
    {
        id: 9,
        title: "固定元素增加整体感",
        titleEn: "Repeating Elements Add Unity",
        titleTw: "固定元素增加整體感",
        content: "用相同的装饰元素（如小星星、圆点）作为标记，能让整本手帐更有整体感。",
        contentEn: "Using the same decorative elements (stars, dots) as markers gives the journal a unified feel.",
        contentTw: "用相同的裝飾元素（如小星星、圓點）作為標記，能让整本手帳更有整體感。",
        category: "排版",
        categoryEn: "Layout",
        categoryTw: "排版"
    },
    {
        id: 10,
        title: "先记录再美化",
        titleEn: "Record First, Beautify Later",
        titleTw: "先記錄再美化",
        content: "不要为了美化而忘了记录！先写下内容，有空了再慢慢装饰。",
        contentEn: "Don't forget to record while decorating! Write content first, decorate when free.",
        contentTw: "不要為了美化而忘了記錄！先寫下內容，有空了再慢慢裝飾。",
        category: "心态",
        categoryEn: "Mindset",
        categoryTw: "心態"
    },
    {
        id: 11,
        title: "文件夹收集灵感",
        titleEn: "Collect Inspiration in Folder",
        titleTw: "文件夾收集靈感",
        content: "看到喜欢的排版或配色？截图存到专门的文件夹，下次手帐时可以参考。",
        contentEn: "See a layout or color scheme you like? Save screenshots in a folder for reference next time.",
        contentTw: "看到喜歡的排版或配色？截圖存到專門的文件夾，下次手帳時可以參考。",
        category: "灵感",
        categoryEn: "Inspiration",
        categoryTw: "靈感"
    },
    {
        id: 12,
        title: "周末集中装饰",
        titleEn: "Decorate on Weekends",
        titleTw: "週末集中裝飾",
        content: "平时没时间美化？可以周末集中装饰，把一周的内容一起美化。",
        contentEn: "No time to beautify during the week? Decorate on weekends, beautify the whole week together.",
        contentTw: "平時沒時間美化？可以週末集中裝飾，把一週的內容一起美化。",
        category: "时间管理",
        categoryEn: "Time Management",
        categoryTw: "時間管理"
    },
    {
        id: 13,
        title: "和纸胶带要贴平",
        titleEn: "Apply Washi Tape Flat",
        titleTw: "和紙膠帶要貼平",
        content: "和纸胶带贴之前先确定位置，贴的时候要慢，避免皱褶。不满意可以撕掉重来！",
        contentEn: "Determine position before applying washi tape. Apply slowly to avoid wrinkles. Can remove and redo!",
        contentTw: "和紙膠帶貼之前先確定位置，貼的時候要慢，避免皺褶。不滿意可以撕掉重來！",
        category: "技巧",
        categoryEn: "Tips",
        categoryTw: "技巧"
    },
    {
        id: 14,
        title: "月历可以先写重要日期",
        titleEn: "Mark Important Dates First",
        titleTw: "月曆可以先寫重要日期",
        content: "每月开始时，先把重要日期（生日、考试、会议）写在月历上，方便规划。",
        contentEn: "At the start of each month, mark important dates (birthdays, exams, meetings) on the calendar for easy planning.",
        contentTw: "每月開始時，先把重要日期（生日、考試、會議）寫在月曆上，方便規劃。",
        category: "规划",
        categoryEn: "Planning",
        categoryTw: "規劃"
    },
    {
        id: 15,
        title: "不会画画也没关系",
        titleEn: "Can't Draw? No Problem!",
        titleTw: "不會畫畫也没關係",
        content: "不会画画？用贴纸、胶带、印章、打印的图片一样可以做出好看的手帐！",
        contentEn: "Can't draw? Use stickers, tape, stamps, printed images to make beautiful journals too!",
        contentTw: "不會畫畫？用貼紙、膠帶、印章、打印的圖片一樣可以做出好看的手帳！",
        category: "心态",
        categoryEn: "Mindset",
        categoryTw: "心態"
    }
];