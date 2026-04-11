// ============================================
// Q&A Data - Sophie手帐
// ============================================

var qaCategories = [
    {
        id: "tools",
        name: "工具推荐",
        nameEn: "Tool Recommendations",
        icon: "🎨"
    },
    {
        id: "beginner",
        name: "新手入门",
        nameEn: "Beginner Guide",
        icon: "🌱"
    },
    {
        id: "types",
        name: "手帐类型",
        nameEn: "Planner Types",
        icon: "📔"
    },
    {
        id: "habit",
        name: "习惯养成",
        nameEn: "Habit Building",
        icon: "💪"
    }
];

var qaData = [
    // 工具推荐
    {
        category: "tools",
        question: "新手应该买什么样的手帐本？",
        answer: "推荐从活页本开始！活页本可以随意调整页面顺序，写错了可以换纸，非常适合新手。尺寸建议A5或B5，不会太大也不会太小。如果想尝试固定页数的，可以试试TN（Traveler's Notebook）或定页手帐本。"
    },
    {
        category: "tools",
        question: "用什么笔写字最好看？",
        answer: "推荐几款常用的笔：<br><strong>• 水笔类</strong>：Pilot百乐果汁笔（颜色多、出水顺）、斑马Zebra Mildliner荧光笔（颜色温柔不刺眼）<br><strong>• 钢笔类</strong>：百乐78G入门钢笔（价格亲民）、凌美Lamy Safari（设计好看）<br><strong>• 彩色笔</strong>：一支黑色主笔 + 1-2支彩色笔点缀就够了，不用买太多！"
    },
    {
        category: "tools",
        question: "和纸胶带、贴纸怎么选？",
        answer: "和纸胶带（MT类）可以反复粘贴不留痕迹，非常适合手帐新手。<br><strong>推荐入门款</strong>：基础款纯色胶带（白、灰、米色）、简单图案款（小圆点、细条纹）。<br>贴纸可以从拼多多、淘宝买便宜的装饰贴纸，也可以用打印的图片当贴纸。<br><strong>省钱技巧</strong>：一张胶带可以剪成多段使用，贴纸也可以只贴一半！"
    },
    {
        category: "tools",
        question: "手帐需要买很多工具吗？",
        answer: "不需要！手帐的核心是<strong>记录</strong>，不是装饰。<br>最基础的工具：一本手帐本 + 一支笔 = 开始写。<br>其他都是加分项：胶带、贴纸、彩色笔...可以慢慢添置。<br>很多好看的手帐其实只用了很少的工具，关键是<strong>排版和配色</strong>。"
    },

    // 新手入门
    {
        category: "beginner",
        question: "我从没写过手帐，该怎么开始？",
        answer: "<strong>第一步</strong>：买一本本子 + 一支笔（就够！）<br><strong>第二步</strong>：从最简单的开始，比如每天写三件事：<br>1. 今天做了什么<br>2. 今天吃了什么<br>3. 今天心情怎样<br><strong>第三步</strong>：坚持一周，观察自己喜欢什么样的记录方式<br><strong>第四步</strong>：慢慢加入你需要的元素（待办、时间记录、习惯追踪等）<br><strong>重要</strong>：不要一开始就模仿复杂的排版，从简单开始！"
    },
    {
        category: "beginner",
        question: "手帐到底要写什么内容？",
        answer: "手帐内容取决于你的<strong>目的</strong>：<br><strong>• 记录型</strong>：记录每天做了什么、吃了什么、去了哪里（适合ADHD/P人）<br><strong>• 计划型</strong>：写下明天的待办事项，按计划执行（适合J人）<br><strong>• 感受型</strong>：写下心情、想法、感悟（适合喜欢反思的人）<br><strong>• 混合型</strong>：以上都有（最常见）<br>你可以先试试记录型，因为最容易坚持！"
    },
    {
        category: "beginner",
        question: "我的手帐写得很丑，怎么办？",
        answer: "1. <strong>接受不完美</strong>：手帐是记录生活的，不是艺术品<br>2. <strong>字不好看</strong>：可以用打印的文字、贴纸标题代替<br>3. <strong>排版不好</strong>：多用留白，减少装饰元素，简洁反而好看<br>4. <strong>颜色搭配不好</strong>：一页只用2-3种颜色，参考我们的配色工具<br>5. <strong>不会画画</strong>：用贴纸、胶带、打印图片代替！<br>很多\"好看\"的手帐博主其实也不会画画，全靠贴纸和排版！"
    },
    {
        category: "beginner",
        question: "多久写一次手帐合适？",
        answer: "<strong>推荐频率</strong>：每天10-15分钟<br>但这不是硬性规定！<br><strong>如果你很忙</strong>：每天只写一句话也够了（\"今天很累，但吃了好吃的蛋糕\"）<br><strong>如果你很懒</strong>：每周写一次总结也可以<br><strong>如果你忘写</strong>：想起来再写，不要强迫自己补全遗漏的日期<br>手帐是<strong>记录生活</strong>的工具，不是任务清单。能坚持写就很好了！"
    },

    // 手帐类型
    {
        category: "types",
        question: "Timeline、To-do、月历有什么区别？",
        answer: "<strong>Timeline（时间轴）</strong>：<br>按时间顺序记录一天做了什么，适合<strong>记录型</strong>人。能清楚看到时间是怎么过的。<br><br><strong>To-do（待办清单）</strong>：<br>列出要做的事，适合<strong>任务管理</strong>。可以记录完成情况+感受。<br><br><strong>月历</strong>：<br>一页显示一个月，适合<strong>习惯追踪</strong>、读书记录、重要日期标注。<br><br><strong>建议</strong>：新手可以先试Timeline，因为它能帮你了解自己的时间使用习惯。"
    },
    {
        category: "types",
        question: "我该用纸质手帐还是手机App？",
        answer: "<strong>纸质手帐优点</strong>：<br>• 手写有触感，更容易记住<br>• 可以自由装饰，更个性化<br>• 不受电子设备干扰<br><br><strong>手机App优点</strong>：<br>• 随时记录，不会忘记<br>• 方便修改，不怕写错<br>• 可以多设备同步<br><br><strong>建议</strong>：如果你经常忘记写手帐，可以先用手机App记录，每周整理到纸质手帐。或者两者结合使用！"
    },
    {
        category: "types",
        question: "五年日记是什么？适合谁？",
        answer: "五年日记是一种<strong>固定格式</strong>的手帐：<br>每一页有5个格子，对应同一天5年的记录。<br>比如1月1日，每年都在同一页写。<br><br><strong>适合</strong>：<br>• J型人格（喜欢规律）<br>• 想看到自己5年变化的人<br>• 不喜欢自己排版的人<br><br><strong>不适合</strong>：<br>• ADHD/ADD（很难每天固定写）<br>• P型人格（会觉得受束缚）<br>• 想灵活记录的人"
    },
    {
        category: "types",
        question: "活页本和定页本怎么选？",
        answer: "<strong>活页本</strong>：<br>• 可以调整页面顺序<br>• 写错了可以换纸<br>• 可以随时增加页面<br>• 适合<strong>灵活型</strong>人<br><br><strong>定页本</strong>：<br>• 页面固定，有\"时间流动感\"<br>• 看着厚厚一本很有成就感<br>• 不能调整，但也不怕页掉落<br>• 适合<strong>计划型</strong>人<br><br><strong>新手建议</strong>：先试活页本，更自由！"
    },

    // 习惯养成
    {
        category: "habit",
        question: "我总是忘记写手帐，怎么办？",
        answer: "<strong>方法1：固定时间</strong><br>每天同一时间写（睡前、起床后、午休），更容易形成习惯。<br><br><strong>方法2：提醒自己</strong><br>手机设置提醒，或把本子放在显眼的位置。<br><br><strong>方法3：降低门槛</strong><br>每天只写一句话！\"今天开心\" \"今天很累\"就够了。<br><br><strong>方法4：接受遗忘</strong><br>忘记写没关系，想起来再写就好。不要强迫自己补全。<br><br><strong>记住</strong>：手帐是帮助你生活的工具，不是增加压力的任务！"
    },
    {
        category: "habit",
        question: "坚持写手帐多久能看到效果？",
        answer: "<strong>21天</strong>：初步形成习惯<br><strong>3个月</strong>：开始能看到自己的生活模式<br><strong>半年</strong>：清楚自己的时间使用习惯，知道怎么改进<br><strong>1年</strong>：翻看一年前的记录，会惊讶于自己的成长<br><br><strong>效果类型</strong>：<br>• ADHD/ADD：时间感变清晰，不再那么模糊<br>• 记录型：看到自己真正做了什么，不再焦虑<br>• 规划型：效率提升，任务完成率提高<br><br><strong>重要</strong>：效果是慢慢显现的，不要期待立竿见影！"
    },
    {
        category: "habit",
        question: "写手帐会不会浪费时间？",
        answer: "<strong>不会！</strong>写手帐其实是<strong>节省时间</strong>：<br><br>• ADHD/ADD：写手帐让时间感变清晰，减少\"不知道今天干了什么\"的焦虑<br>• 忘性大的人：记录下来就不会忘记，减少重复确认的时间<br>• 任务多的人：写待办清单，做事更有条理<br><br><strong>时间成本</strong>：每天10-15分钟<br><strong>收益</strong>：清晰的时间感、更少的焦虑、更好的规划<br><br><strong>对比</strong>：刷短视频10分钟 vs 写手帐10分钟，哪个对生活更有帮助？"
    },
    {
        category: "habit",
        question: "手帐写一段时间就放弃了，怎么坚持下去？",
        answer: "<strong>放弃的原因通常是</strong>：<br>1. 设定太高的标准（每天要写很多）<br>2. 过于追求美观（装饰太花时间）<br>3. 觉得\"没意义\"（没看到效果）<br><br><strong>解决方法</strong>：<br>1. <strong>降低标准</strong>：每天一句话就够了<br>2. <strong>先记录后美化</strong>：记录是核心，有空再装饰<br>3. <strong>给自己3个月</strong>：坚持下去才能看到效果<br>4. <strong>换个方式</strong>：纸质写不下去，可以试手机App<br>5. <strong>接受休息</strong>：偶尔停几天没关系，继续写就好<br><br><strong>记住</strong>：手帐不是任务，是帮你生活的工具！"
    }
];