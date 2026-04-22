// ============================================
// Q&A Data - Sophie手帐
// ============================================

var qaCategories = [
    {
        id: "tools",
        name: "工具推荐",
        nameEn: "Tool Recommendations",
        nameTw: "工具推薦",
        icon: "🎨"
    },
    {
        id: "beginner",
        name: "新手入门",
        nameEn: "Beginner Guide",
        nameTw: "新手入門",
        icon: "🌱"
    },
    {
        id: "types",
        name: "手帐类型",
        nameEn: "Planner Types",
        nameTw: "手帳類型",
        icon: "📔"
    },
    {
        id: "habit",
        name: "习惯养成",
        nameEn: "Habit Building",
        nameTw: "習慣養成",
        icon: "💪"
    }
];

var qaData = [
    // 工具推荐
    {
        category: "tools",
        question: "新手应该买什么样的手帐本？",
        questionEn: "What kind of journal should beginners buy?",
        questionTw: "新手應該買什麼樣的手帳本？",
        answer: "推荐从活页本开始！活页本可以随意调整页面顺序，写错了可以换纸，非常适合新手。尺寸建议A5或B5，不会太大也不会太小。如果想尝试固定页数的，可以试试TN（Traveler's Notebook）或定页手帐本。",
        answerEn: "Start with a loose-leaf journal! Loose-leaf journals allow you to rearrange pages freely, and if you make a mistake you can replace the paper. Perfect for beginners. Size recommendation: A5 or B5 - not too big or too small. If you want to try a fixed-page journal, consider TN (Traveler's Notebook) or a bound planner.",
        answerTw: "推薦從活頁本開始！活頁本可以隨意調整頁面順序，寫錯了可以換紙，非常适合新手。尺寸建議A5或B5，不会太大也不会太小。如果想嘗試固定頁數的，可以試試TN（Traveler's Notebook）或定頁手帳本。"
    },
    {
        category: "tools",
        question: "用什么笔写字最好看？",
        questionEn: "What pens give the best handwriting?",
        questionTw: "用什麼筆寫字最好看？",
        answer: "推荐几款常用的笔：<br><strong>• 水笔类</strong>：Pilot百乐果汁笔（颜色多、出水顺）、斑马Zebra Mildliner荧光笔（颜色温柔不刺眼）<br><strong>• 钢笔类</strong>：百乐78G入门钢笔（价格亲民）、凌美Lamy Safari（设计好看）<br><strong>• 彩色笔</strong>：一支黑色主笔 + 1-2支彩色笔点缀就够了，不用买太多！",
        answerEn: "Recommended pens:<br><strong>• Gel pens</strong>: Pilot Juice (many colors, smooth flow), Zebra Mildliner highlighters (soft colors, not harsh)<br><strong>• Fountain pens</strong>: Pilot 78G entry-level (affordable), Lamy Safari (great design)<br><strong>• Colored pens</strong>: One black main pen + 1-2 colored pens for accents is enough - don't buy too many!",
        answerTw: "推薦幾款常用的筆：<br><strong>• 水筆類</strong>：Pilot百樂果汁筆（顏色多、出水順）、斑馬Zebra Mildliner螢光筆（顏色溫柔不刺眼）<br><strong>• 鋼筆類</strong>：百樂78G入門鋼筆（價格親民）、凌美Lamy Safari（設計好看）<br><strong>• 彩色筆</strong>：一支黑色主筆 + 1-2支彩色筆點綴就夠了，不用買太多！"
    },
    {
        category: "tools",
        question: "和纸胶带、贴纸怎么选？",
        questionEn: "How to choose washi tape and stickers?",
        questionTw: "和紙膠帶、貼紙怎麼選？",
        answer: "和纸胶带（MT类）可以反复粘贴不留痕迹，非常适合手帐新手。<br><strong>推荐入门款</strong>：基础款纯色胶带（白、灰、米色）、简单图案款（小圆点、细条纹）。<br>贴纸可以从拼多多、淘宝买便宜的装饰贴纸，也可以用打印的图片当贴纸。<br><strong>省钱技巧</strong>：一张胶带可以剪成多段使用，贴纸也可以只贴一半！",
        answerEn: "Washi tape (MT type) can be repositioned without leaving marks - perfect for journal beginners.<br><strong>Entry recommendations</strong>: Basic solid colors (white, gray, beige), simple patterns (dots, stripes).<br>Stickers can be bought cheaply online, or use printed images as stickers.<br><strong>Budget tip</strong>: Cut one tape into multiple pieces, stickers can be partially applied!",
        answerTw: "和紙膠帶（MT類）可以反覆貼不留痕跡，非常適合手帳新手。<br><strong>推薦入門款</strong>：基礎款純色膠帶（白、灰、米色）、簡單圖案款（小圓點、細條紋）。<br>貼紙可以從拼多多、淘寶買便宜的裝飾貼紙，也可以用打印的圖片當貼紙。<br><strong>省錢技巧</strong>：一張膠帶可以剪成多段使用，貼紙也可以只貼一半！"
    },
    {
        category: "tools",
        question: "手帐需要买很多工具吗？",
        questionEn: "Do I need to buy many tools for journaling?",
        questionTw: "手帳需要買很多工具嗎？",
        answer: "不需要！手帐的核心是<strong>记录</strong>，不是装饰。<br>最基础的工具：一本手帐本 + 一支笔 = 开始写。<br>其他都是加分项：胶带、贴纸、彩色笔...可以慢慢添置。<br>很多好看的手帐其实只用了很少的工具，关键是<strong>排版和配色</strong>。",
        answerEn: "No! The core of journaling is <strong>recording</strong>, not decorating.<br>Basic tools: One journal + One pen = Start writing.<br>Everything else is optional: tape, stickers, colored pens... add them gradually.<br>Many beautiful journals use very few tools - the key is <strong>layout and color scheme</strong>.",
        answerTw: "不需要！手帳的核心是<strong>記錄</strong>，不是裝飾。<br>最基礎的工具：一本手帳本 + 一支筆 = 開始寫。<br>其他都是加分項：膠帶、貼紙、彩色筆...可以慢慢添置。<br>很多好看的手帳其实只用了很少的工具，關鍵是<strong>排版和配色</strong>。"
    },

    // 新手入门
    {
        category: "beginner",
        question: "我从没写过手帐，该怎么开始？",
        questionEn: "I've never journaled before, how do I start?",
        questionTw: "我從沒寫過手帳，該怎麼開始？",
        answer: "<strong>第一步</strong>：买一本本子 + 一支笔（就够！）<br><strong>第二步</strong>：从最简单的开始，比如每天写三件事：<br>1. 今天做了什么<br>2. 今天吃了什么<br>3. 今天心情怎样<br><strong>第三步</strong>：坚持一周，观察自己喜欢什么样的记录方式<br><strong>第四步</strong>：慢慢加入你需要的元素（待办、时间记录、习惯追踪等）<br><strong>重要</strong>：不要一开始就模仿复杂的排版，从简单开始！",
        answerEn: "<strong>Step 1</strong>: Buy a notebook + One pen (that's enough!)<br><strong>Step 2</strong>: Start simple, write 3 things daily:<br>1. What I did today<br>2. What I ate today<br>3. How I feel today<br><strong>Step 3</strong>: Stick with it for a week, observe what recording style you like<br><strong>Step 4</strong>: Gradually add elements you need (to-do, time tracking, habit tracking, etc.)<br><strong>Important</strong>: Don't start by copying complex layouts - start simple!",
        answerTw: "<strong>第一步</strong>：買一本本子 + 一支筆（就夠！）<br><strong>第二步</strong>：從最簡單的開始，比如每天寫三件事：<br>1. 今天做了什麼<br>2. 今天吃了什麼<br>3. 今天心情怎樣<br><strong>第三步</strong>：堅持一週，觀察自己喜歡什麼樣的記錄方式<br><strong>第四步</strong>：慢慢加入你需要的元素（待辦、時間記錄、習慣追蹤等）<br><strong>重要</strong>：不要一開始就模仿複雜的排版，從簡單開始！"
    },
    {
        category: "beginner",
        question: "手帐到底要写什么内容？",
        questionEn: "What should I write in my journal?",
        questionTw: "手帳到底要寫什麼內容？",
        answer: "手帐内容取决于你的<strong>目的</strong>：<br><strong>• 记录型</strong>：记录每天做了什么、吃了什么、去了哪里（适合ADHD/P人）<br><strong>• 计划型</strong>：写下明天的待办事项，按计划执行（适合J人）<br><strong>• 感受型</strong>：写下心情、想法、感悟（适合喜欢反思的人）<br><strong>• 混合型</strong>：以上都有（最常见）<br>你可以先试试记录型，因为最容易坚持！",
        answerEn: "Journal content depends on your <strong>purpose</strong>:<br><strong>• Recording type</strong>: What you did, ate, visited each day (good for ADHD/P-types)<br><strong>• Planning type</strong>: Tomorrow's to-do list, follow the plan (good for J-types)<br><strong>• Reflection type</strong>: Moods, thoughts, insights (good for reflective people)<br><strong>• Mixed type</strong>: All of the above (most common)<br>Try the recording type first - it's easiest to stick with!",
        answerTw: "手帳內容取決於你的<strong>目的</strong>：<br><strong>• 記錄型</strong>：記錄每天做了什麼、吃了什麼、去了哪裡（適合ADHD/P人）<br><strong>• 計劃型</strong>：寫下明天的待辦事项，按計劃執行（適合J人）<br><strong>• 感受型</strong>：寫下心情、想法、感悟（適合喜歡反思的人）<br><strong>• 混合型</strong>：以上都有（最常見）<br>你可以先試試記錄型，因為最容易堅持！"
    },
    {
        category: "beginner",
        question: "我的手帐写得很丑，怎么办？",
        questionEn: "My journal looks ugly, what should I do?",
        questionTw: "我的手帳寫得很醜，怎麼辦？",
        answer: "1. <strong>接受不完美</strong>：手帐是记录生活的，不是艺术品<br>2. <strong>字不好看</strong>：可以用打印的文字、贴纸标题代替<br>3. <strong>排版不好</strong>：多用留白，减少装饰元素，简洁反而好看<br>4. <strong>颜色搭配不好</strong>：一页只用2-3种颜色，参考我们的配色工具<br>5. <strong>不会画画</strong>：用贴纸、胶带、打印图片代替！<br>很多\"好看\"的手帐博主其实也不会画画，全靠贴纸和排版！",
        answerEn: "1. <strong>Accept imperfection</strong>: Journaling is about recording life, not making art<br>2. <strong>Bad handwriting</strong>: Use printed text, sticker titles instead<br>3. <strong>Bad layout</strong>: Use more whitespace, fewer decorations - simple is beautiful<br>4. <strong>Bad colors</strong>: Use only 2-3 colors per page, refer to our color tool<br>5. <strong>Can't draw</strong>: Use stickers, tape, printed images instead!<br>Many \"beautiful\" journal bloggers can't draw either - it's all stickers and layout!",
        answerTw: "1. <strong>接受不完美</strong>：手帳是記錄生活的，不是藝術品<br>2. <strong>字不好看</strong>：可以用打印的文字、貼紙標題代替<br>3. <strong>排版不好</strong>：多用留白，減少裝飾元素，簡潔反而好看<br>4. <strong>顏色搭配不好</strong>：一頁只用2-3種顏色，參考我們的配色工具<br>5. <strong>不會畫畫</strong>：用貼紙、膠帶、打印圖片代替！<br>很多\"好看\"的手帳博主其实也不會畫畫，全靠貼紙和排版！"
    },
    {
        category: "beginner",
        question: "多久写一次手帐合适？",
        questionEn: "How often should I journal?",
        questionTw: "多久寫一次手帳合適？",
        answer: "<strong>推荐频率</strong>：每天10-15分钟<br>但这不是硬性规定！<br><strong>如果你很忙</strong>：每天只写一句话也够了（\"今天很累，但吃了好吃的蛋糕\"）<br><strong>如果你很懒</strong>：每周写一次总结也可以<br><strong>如果你忘写</strong>：想起来再写，不要强迫自己补全遗漏的日期<br>手帐是<strong>记录生活</strong>的工具，不是任务清单。能坚持写就很好了！",
        answerEn: "<strong>Recommended frequency</strong>: 10-15 minutes daily<br>But this isn't a hard rule!<br><strong>If busy</strong>: One sentence daily is enough (\"Tired today, but had delicious cake\")<br><strong>If lazy</strong>: Weekly summary works too<br><strong>If forgotten</strong>: Write when you remember, don't force yourself to fill in missing dates<br>Journaling is a tool for <strong>recording life</strong>, not a task list. Keeping at it is already great!",
        answerTw: "<strong>推薦頻率</strong>：每天10-15分鐘<br>但這不是硬性規定！<br><strong>如果你很忙</strong>：每天只寫一句話也夠了（\"今天很累，但吃了好吃的蛋糕\"）<br><strong>如果你很懶</strong>：每週寫一次總結也可以<br><strong>如果你忘寫</strong>：想起來再寫，不要強迫自己補全遺漏的日期<br>手帳是<strong>記錄生活</strong>的工具，不是任務清單。能堅持寫就很好了！"
    },

    // 手帐类型
    {
        category: "types",
        question: "Timeline、To-do、月历有什么区别？",
        questionEn: "What's the difference between Timeline, To-do, and Monthly?",
        questionTw: "Timeline、To-do、月曆有什麼區別？",
        answer: "<strong>Timeline（时间轴）</strong>：<br>按时间顺序记录一天做了什么，适合<strong>记录型</strong>人。能清楚看到时间是怎么过的。<br><br><strong>To-do（待办清单）</strong>：<br>列出要做的事，适合<strong>任务管理</strong>。可以记录完成情况+感受。<br><br><strong>月历</strong>：<br>一页显示一个月，适合<strong>习惯追踪</strong>、读书记录、重要日期标注。<br><br><strong>建议</strong>：新手可以先试Timeline，因为它能帮你了解自己的时间使用习惯。",
        answerEn: "<strong>Timeline</strong>:<br>Record what you did in chronological order, good for <strong>recording-type</strong> people. Clearly see how time was spent.<br><br><strong>To-do</strong>:<br>List tasks to complete, good for <strong>task management</strong>. Can track completion + feelings.<br><br><strong>Monthly</strong>:<br>One page shows a month, good for <strong>habit tracking</strong>, reading logs, marking important dates.<br><br><strong>Tip</strong>: Beginners can start with Timeline to understand their time usage habits.",
        answerTw: "<strong>Timeline（時間軸）</strong>：<br>按時間順序記錄一天做了什麼，適合<strong>記錄型</strong>人。能清楚看到時間是怎麼過的。<br><br><strong>To-do（待辦清單）</strong>：<br>列出要做的事，適合<strong>任務管理</strong>。可以記錄完成情況+感受。<br><br><strong>月曆</strong>：<br>一頁顯示一個月，適合<strong>習慣追蹤</strong>、讀書記錄、重要日期標註。<br><br><strong>建議</strong>：新手可以先試Timeline，因為它能幫你了解自己的時間使用習慣。"
    },
    {
        category: "types",
        question: "我该用纸质手帐还是手机App？",
        questionEn: "Should I use a paper journal or phone app?",
        questionTw: "我該用紙質手帳還是手機App？",
        answer: "<strong>纸质手帐优点</strong>：<br>• 手写有触感，更容易记住<br>• 可以自由装饰，更个性化<br>• 不受电子设备干扰<br><br><strong>手机App优点</strong>：<br>• 随时记录，不会忘记<br>• 方便修改，不怕写错<br>• 可以多设备同步<br><br><strong>建议</strong>：如果你经常忘记写手帐，可以先用手机App记录，每周整理到纸质手帐。或者两者结合使用！",
        answerEn: "<strong>Paper journal advantages</strong>:<br>• Handwriting has tactile feel, easier to remember<br>• Free decoration, more personalized<br>• No electronic device distractions<br><br><strong>Phone app advantages</strong>:<br>• Record anytime, won't forget<br>• Easy to modify, no fear of mistakes<br>• Multi-device sync<br><br><strong>Tip</strong>: If you often forget to journal, start with phone app, organize to paper journal weekly. Or combine both!",
        answerTw: "<strong>紙質手帳優點</strong>：<br>• 手寫有觸感，更容易記住<br>• 可以自由裝飾，更個性化<br>• 不受電子設備干擾<br><br><strong>手機App優點</strong>：<br>• 隨時記錄，不會忘記<br>• 方便修改，不怕寫錯<br>• 可以多設備同步<br><br><strong>建議</strong>：如果你經常忘記寫手帳，可以先用手機App記錄，每週整理到紙質手帳。或者兩者結合使用！"
    },
    {
        category: "types",
        question: "五年日记是什么？适合谁？",
        questionEn: "What is a 5-year diary? Who is it for?",
        questionTw: "五年日記是什麼？適合誰？",
        answer: "五年日记是一种<strong>固定格式</strong>的手帐：<br>每一页有5个格子，对应同一天5年的记录。<br>比如1月1日，每年都在同一页写。<br><br><strong>适合</strong>：<br>• J型人格（喜欢规律）<br>• 想看到自己5年变化的人<br>• 不喜欢自己排版的人<br><br><strong>不适合</strong>：<br>• ADHD/ADD（很难每天固定写）<br>• P型人格（会觉得受束缚）<br>• 想灵活记录的人",
        answerEn: "A 5-year diary is a <strong>fixed format</strong> journal:<br>Each page has 5 slots for the same day across 5 years.<br>For example, January 1st is written on the same page every year.<br><br><strong>Suitable for</strong>:<br>• J-type personality (likes routine)<br>• People who want to see 5-year changes<br>• People who don't like designing layouts<br><br><strong>Not suitable for</strong>:<br>• ADHD/ADD (hard to write daily at fixed time)<br>• P-type personality (feels constrained)<br>• People who want flexible recording",
        answerTw: "五年日記是一種<strong>固定格式</strong>的手帳：<br>每一頁有5個格子，對應同一天5年的記錄。<br>比如1月1日，每年都在同一頁寫。<br><br><strong>適合</strong>：<br>• J型人格（喜歡規律）<br>• 想看到自己5年變化的人<br>• 不喜歡自己排版的人<br><br><strong>不適合</strong>：<br>• ADHD/ADD（很難每天固定寫）<br>• P型人格（會覺得受束縛）<br>• 想靈活記錄的人"
    },
    {
        category: "types",
        question: "活页本和定页本怎么选？",
        questionEn: "How to choose between loose-leaf and bound journals?",
        questionTw: "活頁本和定頁本怎麼選？",
        answer: "<strong>活页本</strong>：<br>• 可以调整页面顺序<br>• 写错了可以换纸<br>• 可以随时增加页面<br>• 适合<strong>灵活型</strong>人<br><br><strong>定页本</strong>：<br>• 页面固定，有\"时间流动感\"<br>• 看着厚厚一本很有成就感<br>• 不能调整，但也不怕页掉落<br>• 适合<strong>计划型</strong>人<br><br><strong>新手建议</strong>：先试活页本，更自由！",
        answerEn: "<strong>Loose-leaf</strong>:<br>• Can rearrange pages<br>• Can replace paper if mistakes<br>• Can add pages anytime<br>• Good for <strong>flexible-type</strong> people<br><br><strong>Bound journal</strong>:<br>• Fixed pages, \"sense of time flow\"<br>• Thick book gives satisfaction<br>• Can't adjust, but pages won't fall out<br>• Good for <strong>planning-type</strong> people<br><br><strong>Beginner tip</strong>: Try loose-leaf first for more freedom!",
        answerTw: "<strong>活頁本</strong>：<br>• 可以調整頁面順序<br>• 寫錯了可以換紙<br>• 可以隨時增加頁面<br>• 適合<strong>靈活型</strong>人<br><br><strong>定頁本</strong>：<br>• 頁面固定，有\"時間流動感\"<br>• 看著厚厚一本很有成就感<br>• 不能調整，但也不怕頁掉落<br>• 適合<strong>計劃型</strong>人<br><br><strong>新手建議</strong>：先試活頁本，更自由！"
    },

    // 习惯养成
    {
        category: "habit",
        question: "我总是忘记写手帐，怎么办？",
        questionEn: "I always forget to journal, what should I do?",
        questionTw: "我總是忘記寫手帳，怎麼辦？",
        answer: "<strong>方法1：固定时间</strong><br>每天同一时间写（睡前、起床后、午休），更容易形成习惯。<br><br><strong>方法2：提醒自己</strong><br>手机设置提醒，或把本子放在显眼的位置。<br><br><strong>方法3：降低门槛</strong><br>每天只写一句话！\"今天开心\" \"今天很累\"就够了。<br><br><strong>方法4：接受遗忘</strong><br>忘记写没关系，想起来再写就好。不要强迫自己补全。<br><br><strong>记住</strong>：手帐是帮助你生活的工具，不是增加压力的任务！",
        answerEn: "<strong>Method 1: Fixed time</strong><br>Write at the same time daily (before bed, after waking, lunch break), easier to form habit.<br><br><strong>Method 2: Remind yourself</strong><br>Set phone reminders, or place notebook in visible spot.<br><br><strong>Method 3: Lower the bar</strong><br>Just one sentence daily! \"Happy today\" \"Tired today\" is enough.<br><br><strong>Method 4: Accept forgetting</strong><br>It's okay to forget, write when you remember. Don't force yourself to fill in.<br><br><strong>Remember</strong>: Journaling is a tool to help your life, not a pressure-inducing task!",
        answerTw: "<strong>方法1：固定時間</strong><br>每天同一時間寫（睡前、起床後、午休），更容易形成習慣。<br><br><strong>方法2：提醒自己</strong><br>手機設置提醒，或把本子放在顯眼的位置。<br><br><strong>方法3：降低門檻</strong><br>每天只寫一句話！\"今天開心\" \"今天很累\"就夠了。<br><br><strong>方法4：接受遺忘</strong><br>忘記寫沒關係，想起來再寫就好。不要強迫自己補全。<br><br><strong>記住</strong>：手帳是幫助你生活的工具，不是增加壓力的任務！"
    },
    {
        category: "habit",
        question: "坚持写手帐多久能看到效果？",
        questionEn: "How long until I see results from journaling?",
        questionTw: "堅持寫手帳多久能看到效果？",
        answer: "<strong>21天</strong>：初步形成习惯<br><strong>3个月</strong>：开始能看到自己的生活模式<br><strong>半年</strong>：清楚自己的时间使用习惯，知道怎么改进<br><strong>1年</strong>：翻看一年前的记录，会惊讶于自己的成长<br><br><strong>效果类型</strong>：<br>• ADHD/ADD：时间感变清晰，不再那么模糊<br>• 记录型：看到自己真正做了什么，不再焦虑<br>• 规划型：效率提升，任务完成率提高<br><br><strong>重要</strong>：效果是慢慢显现的，不要期待立竿见影！",
        answerEn: "<strong>21 days</strong>: Habit starts forming<br><strong>3 months</strong>: Begin seeing your life patterns<br><strong>6 months</strong>: Clear understanding of time usage habits, know how to improve<br><strong>1 year</strong>: Looking back at records, surprised by your growth<br><br><strong>Effect types</strong>:<br>• ADHD/ADD: Time sense becomes clearer, less fuzzy<br>• Recording type: See what you actually did, less anxiety<br>• Planning type: Efficiency improves, task completion rate increases<br><br><strong>Important</strong>: Effects appear gradually, don't expect instant results!",
        answerTw: "<strong>21天</strong>：初步形成習慣<br><strong>3個月</strong>：開始能看到自己的生活模式<br><strong>半年</strong>：清楚自己的時間使用習慣，知道怎麼改進<br><strong>1年</strong>：翻看一年前的記錄，會驚訝於自己的成長<br><br><strong>效果類型</strong>：<br>• ADHD/ADD：時間感變清晰，不再那麼模糊<br>• 記錄型：看到自己真正做了什麼，不再焦慮<br>• 規劃型：效率提升，任務完成率提高<br><br><strong>重要</strong>：效果是慢慢顯現的，不要期待立竿見影！"
    },
    {
        category: "habit",
        question: "写手帐会不会浪费时间？",
        questionEn: "Does journaling waste time?",
        questionTw: "寫手帳會不會浪費時間？",
        answer: "<strong>不会！</strong>写手帐其实是<strong>节省时间</strong>：<br><br>• ADHD/ADD：写手帐让时间感变清晰，减少\"不知道今天干了什么\"的焦虑<br>• 忘性大的人：记录下来就不会忘记，减少重复确认的时间<br>• 任务多的人：写待办清单，做事更有条理<br><br><strong>时间成本</strong>：每天10-15分钟<br><strong>收益</strong>：清晰的时间感、更少的焦虑、更好的规划<br><br><strong>对比</strong>：刷短视频10分钟 vs 写手帐10分钟，哪个对生活更有帮助？",
        answerEn: "<strong>No!</strong> Journaling actually <strong>saves time</strong>:<br><br>• ADHD/ADD: Makes time sense clearer, reduces anxiety of \"don't know what I did today\"<br>• Forgetful people: Recording means not forgetting, reduces repeated checking time<br>• Busy people: To-do lists make work more organized<br><br><strong>Time cost</strong>: 10-15 minutes daily<br><strong>Benefits</strong>: Clear time sense, less anxiety, better planning<br><br><strong>Compare</strong>: 10 minutes scrolling short videos vs 10 minutes journaling - which helps life more?",
        answerTw: "<strong>不會！</strong>寫手帳其实是<strong>節省時間</strong>：<br><br>• ADHD/ADD：寫手帳讓時間感變清晰，減少\"不知道今天幹了什麼\"的焦慮<br>• 忘性大的人：記錄下來就不會忘記，減少重複確認的時間<br>• 任務多的人：寫待辦清單，做事更有條理<br><br><strong>時間成本</strong>：每天10-15分鐘<br><strong>收益</strong>：清晰的時間感、更少的焦慮、更好的規劃<br><br><strong>對比</strong>：刷短视频10分鐘 vs 寫手帳10分鐘，哪個對生活更有幫助？"
    },
    {
        category: "habit",
        question: "手帐写一段时间就放弃了，怎么坚持下去？",
        questionEn: "I give up journaling after a while, how to keep going?",
        questionTw: "手帳寫一段時間就放棄了，怎麼堅持下去？",
        answer: "<strong>放弃的原因通常是</strong>：<br>1. 设定太高的标准（每天要写很多）<br>2. 过于追求美观（装饰太花时间）<br>3. 觉得\"没意义\"（没看到效果）<br><br><strong>解决方法</strong>：<br>1. <strong>降低标准</strong>：每天一句话就够了<br>2. <strong>先记录后美化</strong>：记录是核心，有空再装饰<br>3. <strong>给自己3个月</strong>：坚持下去才能看到效果<br>4. <strong>换个方式</strong>：纸质写不下去，可以试手机App<br>5. <strong>接受休息</strong>：偶尔停几天没关系，继续写就好<br><br><strong>记住</strong>：手帐不是任务，是帮你生活的工具！",
        answerEn: "<strong>Common reasons for quitting</strong>:<br>1. Setting too high standards (writing too much daily)<br>2. Pursuing beauty too much (decorating takes too long)<br>3. Feeling \"meaningless\" (not seeing results)<br><br><strong>Solutions</strong>:<br>1. <strong>Lower standards</strong>: One sentence daily is enough<br>2. <strong>Record first, beautify later</strong>: Recording is core, decorate when free<br>3. <strong>Give yourself 3 months</strong>: Stick with it to see results<br>4. <strong>Try different approach</strong>: If paper doesn't work, try phone app<br>5. <strong>Accept breaks</strong>: Skipping a few days is okay, just continue<br><br><strong>Remember</strong>: Journaling isn't a task, it's a tool to help your life!",
        answerTw: "<strong>放棄的原因通常是</strong>：<br>1. 設定太高的標準（每天要寫很多）<br>2. 过於追求美觀（裝飾太花時間）<br>3. 覺得\"沒意義\"（沒看到效果）<br><br><strong>解決方法</strong>：<br>1. <strong>降低標準</strong>：每天一句話就夠了<br>2. <strong>先記錄後美化</strong>：記錄是核心，有空再裝飾<br>3. <strong>給自己3個月</strong>：堅持下去才能看到效果<br>4. <strong>換個方式</strong>：紙質寫不下去，可以試手機App<br>5. <strong>接受休息</strong>：偶爾停幾天沒關係，繼續寫就好<br><br><strong>記住</strong>：手帳不是任務，是幫你生活的工具！"
    }
];