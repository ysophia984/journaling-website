// ============================================
// Color Palettes Data - Sophie手帐
// 扩展版配色系统
// ============================================

// 预设风格配色库（扩充版）
var presetPalettes = [
    // 温柔系
    {
        name: "ins风",
        nameEn: "Instagram Style",
        nameTw: "ins風",
        category: "温柔",
        categoryEn: "Soft",
        categoryTw: "溫柔",
        description: "温柔清新，适合日常记录",
        descriptionEn: "Soft and fresh, perfect for daily recording",
        descriptionTw: "溫柔清新，適合日常記錄",
        colors: [
            { hex: "#F5F0E8", name: "米白", nameEn: "Cream White", nameTw: "米白" },
            { hex: "#E8D4C4", name: "浅奶茶", nameEn: "Light Milk Tea", nameTw: "淺奶茶" },
            { hex: "#D4A574", name: "焦糖", nameEn: "Caramel", nameTw: "焦糖" },
            { hex: "#7C6A9A", name: "薰衣草紫", nameEn: "Lavender Purple", nameTw: "薰衣草紫" }
        ]
    },
    {
        name: "奶茶色",
        nameEn: "Milk Tea",
        nameTw: "奶茶色",
        category: "温柔",
        categoryEn: "Soft",
        categoryTw: "溫柔",
        description: "温暖治愈，适合心情记录",
        descriptionEn: "Warm and healing, perfect for mood recording",
        descriptionTw: "溫暖治癒，適合心情記錄",
        colors: [
            { hex: "#FDF6E3", name: "奶白", nameEn: "Cream White", nameTw: "奶白" },
            { hex: "#D4C4B0", name: "奶茶", nameEn: "Milk Tea", nameTw: "奶茶" },
            { hex: "#B8A08A", name: "深奶茶", nameEn: "Dark Milk Tea", nameTw: "深奶茶" },
            { hex: "#9A8570", name: "咖啡棕", nameEn: "Coffee Brown", nameTw: "咖啡棕" }
        ]
    },
    {
        name: "奶油风",
        nameEn: "Cream Style",
        nameTw: "奶油風",
        category: "温柔",
        categoryEn: "Soft",
        categoryTw: "溫柔",
        description: "柔软温暖，适合慢生活记录",
        descriptionEn: "Soft and warm, perfect for slow life recording",
        descriptionTw: "柔軟溫暖，適合慢生活記錄",
        colors: [
            { hex: "#FFF8F0", name: "奶油白", nameEn: "Cream White", nameTw: "奶油白" },
            { hex: "#FFE4D6", name: "奶油粉", nameEn: "Cream Pink", nameTw: "奶油粉" },
            { hex: "#FFDAB9", name: "桃子奶油", nameEn: "Peach Cream", nameTw: "桃子奶油" },
            { hex: "#E8D4C4", name: "暖奶油", nameEn: "Warm Cream", nameTw: "暖奶油" }
        ]
    },

    // 复古系
    {
        name: "复古风",
        nameEn: "Vintage Style",
        nameTw: "復古風",
        category: "复古",
        categoryEn: "Vintage",
        categoryTw: "復古",
        description: "温暖怀旧，适合回忆记录",
        descriptionEn: "Warm and nostalgic, perfect for memory recording",
        descriptionTw: "溫暖懷舊，適合回憶記錄",
        colors: [
            { hex: "#8B4513", name: "深棕", nameEn: "Dark Brown", nameTw: "深棕" },
            { hex: "#CD5C5C", name: "印度红", nameEn: "Indian Red", nameTw: "印度紅" },
            { hex: "#F5DEB3", name: "小麦色", nameEn: "Wheat", nameTw: "小麥色" },
            { hex: "#556B2F", name: "橄榄绿", nameEn: "Olive Green", nameTw: "橄欖綠" }
        ]
    },
    {
        name: "老照片风",
        nameEn: "Sepia Style",
        nameTw: "老照片風",
        category: "复古",
        categoryEn: "Vintage",
        categoryTw: "復古",
        description: "泛黄怀旧，适合记忆回顾",
        descriptionEn: "Sepia nostalgic, perfect for memory review",
        descriptionTw: "泛黃懷舊，適合記憶回顧",
        colors: [
            { hex: "#704214", name: "深褐", nameEn: "Dark Sepia", nameTw: "深褐" },
            { hex: "#A0522D", name: "赭石", nameEn: "Ochre", nameTw: "赭石" },
            { hex: "#D2B48C", name: "棕褐", nameEn: "Tan", nameTw: "棕褐" },
            { hex: "#F4E4BC", name: "泛黄白", nameEn: "Sepia White", nameTw: "泛黃白" }
        ]
    },
    {
        name: "胶片风",
        nameEn: "Film Style",
        nameTw: "膠片風",
        category: "复古",
        categoryEn: "Vintage",
        categoryTw: "復古",
        description: "胶片质感，适合生活记录",
        descriptionEn: "Film texture, perfect for life recording",
        descriptionTw: "膠片質感，適合生活記錄",
        colors: [
            { hex: "#2D4A3E", name: "胶片绿", nameEn: "Film Green", nameTw: "膠片綠" },
            { hex: "#8B7355", name: "胶片棕", nameEn: "Film Brown", nameTw: "膠片棕" },
            { hex: "#C9A66B", name: "胶片金", nameEn: "Film Gold", nameTw: "膠片金" },
            { hex: "#E8D4A8", name: "胶片米", nameEn: "Film Beige", nameTw: "膠片米" }
        ]
    },

    // 清新系
    {
        name: "清新风",
        nameEn: "Fresh Style",
        nameTw: "清新風",
        category: "清新",
        categoryEn: "Fresh",
        categoryTw: "清新",
        description: "明亮活力，适合计划规划",
        descriptionEn: "Bright and lively, perfect for planning",
        descriptionTw: "明亮活力，適合計劃規劃",
        colors: [
            { hex: "#E8F5E9", name: "薄荷绿", nameEn: "Mint Green", nameTw: "薄荷綠" },
            { hex: "#B2DFDB", name: "浅青", nameEn: "Light Cyan", nameTw: "淺青" },
            { hex: "#80CBC4", name: "青绿", nameEn: "Cyan Green", nameTw: "青綠" },
            { hex: "#4DB6AC", name: "深青", nameEn: "Dark Cyan", nameTw: "深青" }
        ]
    },
    {
        name: "薄荷风",
        nameEn: "Mint Style",
        nameTw: "薄荷風",
        category: "清新",
        categoryEn: "Fresh",
        categoryTw: "清新",
        description: "清凉舒爽，适合夏天记录",
        descriptionEn: "Cool and refreshing, perfect for summer recording",
        descriptionTw: "清涼舒爽，適合夏天記錄",
        colors: [
            { hex: "#E0F7FA", name: "薄荷白", nameEn: "Mint White", nameTw: "薄荷白" },
            { hex: "#B2EBF2", name: "薄荷浅蓝", nameEn: "Mint Light Blue", nameTw: "薄荷淺藍" },
            { hex: "#80DEEA", name: "薄荷蓝", nameEn: "Mint Blue", nameTw: "薄荷藍" },
            { hex: "#4DD0E1", name: "薄荷深蓝", nameEn: "Mint Dark Blue", nameTw: "薄荷深藍" }
        ]
    },
    {
        name: "柠檬风",
        nameEn: "Lemon Style",
        nameTw: "柠檬風",
        category: "清新",
        categoryEn: "Fresh",
        categoryTw: "清新",
        description: "明亮活泼，适合心情记录",
        descriptionEn: "Bright and lively, perfect for mood recording",
        descriptionTw: "明亮活潑，適合心情記錄",
        colors: [
            { hex: "#FFF9C4", name: "柠檬黄白", nameEn: "Lemon White", nameTw: "檸檬黃白" },
            { hex: "#FFF176", name: "柠檬黄", nameEn: "Lemon Yellow", nameTw: "檸檬黃" },
            { hex: "#FFEE58", name: "亮黄", nameEn: "Bright Yellow", nameTw: "亮黃" },
            { hex: "#FDD835", name: "金黄", nameEn: "Golden Yellow", nameTw: "金黃" }
        ]
    },

    // 自然系
    {
        name: "森林风",
        nameEn: "Forest Style",
        nameTw: "森林風",
        category: "自然",
        categoryEn: "Nature",
        categoryTw: "自然",
        description: "自然沉稳，适合读书笔记",
        descriptionEn: "Natural and steady, perfect for reading notes",
        descriptionTw: "自然穩重，適合讀書筆記",
        colors: [
            { hex: "#E8F5E9", name: "浅绿", nameEn: "Light Green", nameTw: "淺綠" },
            { hex: "#81C784", name: "草绿", nameEn: "Grass Green", nameTw: "草綠" },
            { hex: "#4CAF50", name: "绿色", nameEn: "Green", nameTw: "綠色" },
            { hex: "#2E7D32", name: "深绿", nameEn: "Dark Green", nameTw: "深綠" }
        ]
    },
    {
        name: "海洋风",
        nameEn: "Ocean Style",
        nameTw: "海洋風",
        category: "自然",
        categoryEn: "Nature",
        categoryTw: "自然",
        description: "平静舒缓，适合冥想记录",
        descriptionEn: "Calm and soothing, perfect for meditation recording",
        descriptionTw: "平靜舒緩，適合冥想記錄",
        colors: [
            { hex: "#E3F2FD", name: "浅蓝", nameEn: "Light Blue", nameTw: "淺藍" },
            { hex: "#90CAF9", name: "天蓝", nameEn: "Sky Blue", nameTw: "天藍" },
            { hex: "#42A5F5", name: "蓝色", nameEn: "Blue", nameTw: "藍色" },
            { hex: "#1E88E5", name: "深蓝", nameEn: "Dark Blue", nameTw: "深藍" }
        ]
    },
    {
        name: "大地风",
        nameEn: "Earth Style",
        nameTw: "大地風",
        category: "自然",
        categoryEn: "Nature",
        categoryTw: "自然",
        description: "稳重踏实，适合目标追踪",
        descriptionEn: "Steady and grounded, perfect for goal tracking",
        descriptionTw: "穩重踏實，適合目標追蹤",
        colors: [
            { hex: "#D7CCC8", name: "浅土", nameEn: "Light Earth", nameTw: "淺土" },
            { hex: "#A1887F", name: "土色", nameEn: "Earth", nameTw: "土色" },
            { hex: "#795548", name: "棕色", nameEn: "Brown", nameTw: "棕色" },
            { hex: "#5D4037", name: "深棕", nameEn: "Dark Brown", nameTw: "深棕" }
        ]
    },
    {
        name: "沙漠风",
        nameEn: "Desert Style",
        nameTw: "沙漠風",
        category: "自然",
        categoryEn: "Nature",
        categoryTw: "自然",
        description: "温暖干燥，适合旅行记录",
        descriptionEn: "Warm and dry, perfect for travel recording",
        descriptionTw: "溫暖乾燥，適合旅行記錄",
        colors: [
            { hex: "#F5DEB3", name: "沙色", nameEn: "Sand", nameTw: "沙色" },
            { hex: "#D2B48C", name: "棕褐", nameEn: "Tan", nameTw: "棕褐" },
            { hex: "#C4A35A", name: "沙漠金", nameEn: "Desert Gold", nameTw: "沙漠金" },
            { hex: "#8B7355", name: "岩石棕", nameEn: "Rock Brown", nameTw: "岩石棕" }
        ]
    },

    // 优雅系
    {
        name: "莫兰迪色",
        nameEn: "Morandi Style",
        nameTw: "莫蘭迪色",
        category: "优雅",
        categoryEn: "Elegant",
        categoryTw: "優雅",
        description: "高级灰调，适合艺术记录",
        descriptionEn: "High-end gray tones, perfect for art recording",
        descriptionTw: "高級灰調，適合藝術記錄",
        colors: [
            { hex: "#C4B7A6", name: "灰米", nameEn: "Gray Beige", nameTw: "灰米" },
            { hex: "#B5A99A", name: "灰棕", nameEn: "Gray Brown", nameTw: "灰棕" },
            { hex: "#A8C4B8", name: "灰绿", nameEn: "Gray Green", nameTw: "灰綠" },
            { hex: "#9A8E7C", name: "灰土", nameEn: "Gray Earth", nameTw: "灰土" }
        ]
    },
    {
        name: "紫色系",
        nameEn: "Purple Series",
        nameTw: "紫色系",
        category: "优雅",
        categoryEn: "Elegant",
        categoryTw: "優雅",
        description: "神秘优雅，适合创意灵感",
        descriptionEn: "Mysterious and elegant, perfect for creative inspiration",
        descriptionTw: "神秘優雅，適合創意靈感",
        colors: [
            { hex: "#E1BEE7", name: "浅紫", nameEn: "Light Purple", nameTw: "淺紫" },
            { hex: "#CE93D8", name: "丁香紫", nameEn: "Lilac", nameTw: "丁香紫" },
            { hex: "#9C27B0", name: "紫色", nameEn: "Purple", nameTw: "紫色" },
            { hex: "#6A1B9A", name: "深紫", nameEn: "Dark Purple", nameTw: "深紫" }
        ]
    },
    {
        name: "粉色系",
        nameEn: "Pink Series",
        nameTw: "粉色系",
        category: "优雅",
        categoryEn: "Elegant",
        categoryTw: "優雅",
        description: "甜美可爱，适合少女风",
        descriptionEn: "Sweet and cute, perfect for girly style",
        descriptionTw: "甜美可愛，適合少女風",
        colors: [
            { hex: "#FCE4EC", name: "浅粉", nameEn: "Light Pink", nameTw: "淺粉" },
            { hex: "#F8BBD0", name: "粉红", nameEn: "Pink", nameTw: "粉紅" },
            { hex: "#F48FB1", name: "玫瑰粉", nameEn: "Rose Pink", nameTw: "玫瑰粉" },
            { hex: "#EC407A", name: "深粉", nameEn: "Dark Pink", nameTw: "深粉" }
        ]
    },

    // 艺术系
    {
        name: "印象派",
        nameEn: "Impressionist",
        nameTw: "印象派",
        category: "艺术",
        categoryEn: "Art",
        categoryTw: "藝術",
        description: "莫奈风格，柔和自然",
        descriptionEn: "Monet style, soft and natural",
        descriptionTw: "莫奈風格，柔和自然",
        colors: [
            { hex: "#4A90A4", name: "印象蓝", nameEn: "Impression Blue", nameTw: "印象藍" },
            { hex: "#F5DEB3", name: "印象米", nameEn: "Impression Beige", nameTw: "印象米" },
            { hex: "#C9A66B", name: "印象金", nameEn: "Impression Gold", nameTw: "印象金" },
            { hex: "#7B8D6E", name: "印象绿", nameEn: "Impression Green", nameTw: "印象綠" }
        ]
    },
    {
        name: "巴洛克",
        nameEn: "Baroque",
        nameTw: "巴洛克",
        category: "艺术",
        categoryEn: "Art",
        categoryTw: "藝術",
        description: "华丽深沉，宫廷风格",
        descriptionEn: "Gorgeous and deep, palace style",
        descriptionTw: "華麗深沉，宮廷風格",
        colors: [
            { hex: "#8B4513", name: "巴洛克棕", nameEn: "Baroque Brown", nameTw: "巴洛克棕" },
            { hex: "#DAA520", name: "巴洛克金", nameEn: "Baroque Gold", nameTw: "巴洛克金" },
            { hex: "#4A3728", name: "巴洛克深", nameEn: "Baroque Dark", nameTw: "巴洛克深" },
            { hex: "#800020", name: "巴洛克红", nameEn: "Baroque Red", nameTw: "巴洛克紅" }
        ]
    },
    {
        name: "水彩风",
        nameEn: "Watercolor Style",
        nameTw: "水彩風",
        category: "艺术",
        categoryEn: "Art",
        categoryTw: "藝術",
        description: "淡雅通透，适合手绘风格",
        descriptionEn: "Elegant and transparent, perfect for hand-drawn style",
        descriptionTw: "淡雅通透，適合手繪風格",
        colors: [
            { hex: "#E8F4F8", name: "水彩蓝白", nameEn: "Watercolor White", nameTw: "水彩藍白" },
            { hex: "#D4E8F2", name: "水彩浅蓝", nameEn: "Watercolor Light Blue", nameTw: "水彩淺藍" },
            { hex: "#B8D4E8", name: "水彩蓝", nameEn: "Watercolor Blue", nameTw: "水彩藍" },
            { hex: "#E8D4F0", name: "水彩紫", nameEn: "Watercolor Purple", nameTw: "水彩紫" }
        ]
    },
    {
        name: "油画风",
        nameEn: "Oil Painting Style",
        nameTw: "油畫風",
        category: "艺术",
        categoryEn: "Art",
        categoryTw: "藝術",
        description: "浓郁厚重，适合艺术创作",
        descriptionEn: "Rich and thick, perfect for artistic creation",
        descriptionTw: "濃郁厚重，適合藝術創作",
        colors: [
            { hex: "#C41E3A", name: "油画红", nameEn: "Oil Painting Red", nameTw: "油畫紅" },
            { hex: "#2E4A62", name: "油画蓝", nameEn: "Oil Painting Blue", nameTw: "油畫藍" },
            { hex: "#8B7355", name: "油画棕", nameEn: "Oil Painting Brown", nameTw: "油畫棕" },
            { hex: "#D4A574", name: "油画金", nameEn: "Oil Painting Gold", nameTw: "油畫金" }
        ]
    },

    // 东方系
    {
        name: "日式和风",
        nameEn: "Japanese Style",
        nameTw: "日式和風",
        category: "东方",
        categoryEn: "Eastern",
        categoryTw: "東方",
        description: "淡雅禅意，适合日式手帐",
        descriptionEn: "Elegant and zen, perfect for Japanese journal",
        descriptionTw: "淡雅禪意，適合日式手帳",
        colors: [
            { hex: "#E8D4C4", name: "和风米", nameEn: "Japanese Beige", nameTw: "和風米" },
            { hex: "#D4AF37", name: "和风金", nameEn: "Japanese Gold", nameTw: "和風金" },
            { hex: "#8FBC8F", name: "和风绿", nameEn: "Japanese Green", nameTw: "和風綠" },
            { hex: "#2F4F4F", name: "和风深", nameEn: "Japanese Dark", nameTw: "和風深" }
        ]
    },
    {
        name: "中国风",
        nameEn: "Chinese Style",
        nameTw: "中國風",
        category: "东方",
        categoryEn: "Eastern",
        categoryTw: "東方",
        description: "传统典雅，适合古风记录",
        descriptionEn: "Traditional and elegant, perfect for classical recording",
        descriptionTw: "傳統典雅，適合古風記錄",
        colors: [
            { hex: "#C41E3A", name: "中国红", nameEn: "Chinese Red", nameTw: "中國紅" },
            { hex: "#DAA520", name: "金色", nameEn: "Gold", nameTw: "金色" },
            { hex: "#2F4F4F", name: "墨绿", nameEn: "Ink Green", nameTw: "墨綠" },
            { hex: "#704214", name: "檀木棕", nameEn: "Sandalwood Brown", nameTw: "檀木棕" }
        ]
    },
    {
        name: "水墨风",
        nameEn: "Ink Wash Style",
        nameTw: "水墨風",
        category: "东方",
        categoryEn: "Eastern",
        categoryTw: "東方",
        description: "黑白雅致，适合书法风格",
        descriptionEn: "Black and white elegant, perfect for calligraphy style",
        descriptionTw: "黑白雅致，適合書法風格",
        colors: [
            { hex: "#F5F5F5", name: "宣纸白", nameEn: "Paper White", nameTw: "宣紙白" },
            { hex: "#D4D4D4", name: "浅墨", nameEn: "Light Ink", nameTw: "淺墨" },
            { hex: "#808080", name: "中墨", nameEn: "Medium Ink", nameTw: "中墨" },
            { hex: "#2D2D2D", name: "浓墨", nameEn: "Dark Ink", nameTw: "濃墨" }
        ]
    },

    // 活力系
    {
        name: "温暖风",
        nameEn: "Warm Style",
        nameTw: "溫暖風",
        category: "活力",
        categoryEn: "Vibrant",
        categoryTw: "活力",
        description: "阳光活力，适合心情记录",
        descriptionEn: "Sunshine and energy, perfect for mood recording",
        descriptionTw: "陽光活力，適合心情記錄",
        colors: [
            { hex: "#FFCC80", name: "浅橙", nameEn: "Light Orange", nameTw: "淺橙" },
            { hex: "#FF9800", name: "橙色", nameEn: "Orange", nameTw: "橙色" },
            { hex: "#F57C00", name: "深橙", nameEn: "Dark Orange", nameTw: "深橙" },
            { hex: "#E65100", name: "橙红", nameEn: "Orange Red", nameTw: "橙紅" }
        ]
    },
    {
        name: "日落风",
        nameEn: "Sunset Style",
        nameTw: "日落風",
        category: "活力",
        categoryEn: "Vibrant",
        categoryTw: "活力",
        description: "渐变暖色，适合傍晚记录",
        descriptionEn: "Gradient warm colors, perfect for evening recording",
        descriptionTw: "漸變暖色，適合傍晚記錄",
        colors: [
            { hex: "#FFD54F", name: "日落黄", nameEn: "Sunset Yellow", nameTw: "日落黃" },
            { hex: "#FF8A65", name: "日落橙", nameEn: "Sunset Orange", nameTw: "日落橙" },
            { hex: "#FF7043", name: "日落红橙", nameEn: "Sunset Red Orange", nameTw: "日落紅橙" },
            { hex: "#E57373", name: "日落红", nameEn: "Sunset Red", nameTw: "日落紅" }
        ]
    },
    {
        name: "彩虹风",
        nameEn: "Rainbow Style",
        nameTw: "彩虹風",
        category: "活力",
        categoryEn: "Vibrant",
        categoryTw: "活力",
        description: "多彩活泼，适合创意手帐",
        descriptionEn: "Colorful and lively, perfect for creative journals",
        descriptionTw: "多彩活潑，適合創意手帳",
        colors: [
            { hex: "#E57373", name: "彩虹红", nameEn: "Rainbow Red", nameTw: "彩虹紅" },
            { hex: "#FFB74D", name: "彩虹橙", nameEn: "Rainbow Orange", nameTw: "彩虹橙" },
            { hex: "#81C784", name: "彩虹绿", nameEn: "Rainbow Green", nameTw: "彩虹綠" },
            { hex: "#64B5F6", name: "彩虹蓝", nameEn: "Rainbow Blue", nameTw: "彩虹藍" }
        ]
    },

    // 极简系
    {
        name: "极简风",
        nameEn: "Minimalist Style",
        nameTw: "極簡風",
        category: "极简",
        categoryEn: "Minimal",
        categoryTw: "極簡",
        description: "简洁干净，适合高效规划",
        descriptionEn: "Simple and clean, perfect for efficient planning",
        descriptionTw: "簡潔乾淨，適合高效規劃",
        colors: [
            { hex: "#FFFFFF", name: "白", nameEn: "White", nameTw: "白" },
            { hex: "#F5F5F5", name: "浅灰", nameEn: "Light Gray", nameTw: "淺灰" },
            { hex: "#E0E0E0", name: "灰色", nameEn: "Gray", nameTw: "灰色" },
            { hex: "#9E9E9E", name: "深灰", nameEn: "Dark Gray", nameTw: "深灰" }
        ]
    },
    {
        name: "黑白风",
        nameEn: "Black & White",
        nameTw: "黑白風",
        category: "极简",
        categoryEn: "Minimal",
        categoryTw: "極簡",
        description: "经典配色，适合专业记录",
        descriptionEn: "Classic colors, perfect for professional recording",
        descriptionTw: "經典配色，適合專業記錄",
        colors: [
            { hex: "#FFFFFF", name: "纯白", nameEn: "Pure White", nameTw: "純白" },
            { hex: "#F0F0F0", name: "浅灰白", nameEn: "Light Gray White", nameTw: "淺灰白" },
            { hex: "#333333", name: "深灰", nameEn: "Dark Gray", nameTw: "深灰" },
            { hex: "#000000", name: "黑", nameEn: "Black", nameTw: "黑" }
        ]
    },
    {
        name: "暗黑风",
        nameEn: "Dark Style",
        nameTw: "暗黑風",
        category: "极简",
        categoryEn: "Minimal",
        categoryTw: "極簡",
        description: "神秘优雅，适合夜间记录",
        descriptionEn: "Mysterious and elegant, perfect for night recording",
        descriptionTw: "神秘優雅，適合夜間記錄",
        colors: [
            { hex: "#2C2C2C", name: "深灰", nameEn: "Dark Gray", nameTw: "深灰" },
            { hex: "#1A1A1A", name: "黑", nameEn: "Black", nameTw: "黑" },
            { hex: "#C0C0C0", name: "银色", nameEn: "Silver", nameTw: "銀色" },
            { hex: "#8B8B8B", name: "灰色", nameEn: "Gray", nameTw: "灰色" }
        ]
    },

    // 现代系
    {
        name: "赛博朋克",
        nameEn: "Cyberpunk",
        nameTw: "赛博朋克",
        category: "现代",
        categoryEn: "Modern",
        categoryTw: "現代",
        description: "霓虹科技，适合科技感手帐",
        descriptionEn: "Neon tech, perfect for tech-style journals",
        descriptionTw: "霓虹科技，適合科技感手帳",
        colors: [
            { hex: "#FF00FF", name: "霓虹紫", nameEn: "Neon Purple", nameTw: "霓虹紫" },
            { hex: "#00FFFF", name: "霓虹蓝", nameEn: "Neon Blue", nameTw: "霓虹藍" },
            { hex: "#FF0080", name: "霓虹粉", nameEn: "Neon Pink", nameTw: "霓虹粉" },
            { hex: "#001020", name: "赛博黑", nameEn: "Cyber Black", nameTw: "赛博黑" }
        ]
    },
    {
        name: "渐变风",
        nameEn: "Gradient Style",
        nameTw: "漸變風",
        category: "现代",
        categoryEn: "Modern",
        categoryTw: "現代",
        description: "流行渐变，适合现代风格",
        descriptionEn: "Popular gradient, perfect for modern style",
        descriptionTw: "流行漸變，適合現代風格",
        colors: [
            { hex: "#667eea", name: "渐变紫蓝", nameEn: "Gradient Purple Blue", nameTw: "漸變紫藍" },
            { hex: "#764ba2", name: "渐变紫", nameEn: "Gradient Purple", nameTw: "漸變紫" },
            { hex: "#f093fb", name: "渐变粉紫", nameEn: "Gradient Pink Purple", nameTw: "漸變粉紫" },
            { hex: "#f5576c", name: "渐变红粉", nameEn: "Gradient Red Pink", nameTw: "漸變紅粉" }
        ]
    },
    {
        name: "玻璃风",
        nameEn: "Glass Style",
        nameTw: "玻璃風",
        category: "现代",
        categoryEn: "Modern",
        categoryTw: "現代",
        description: "透明质感，适合现代UI风格",
        descriptionEn: "Transparent texture, perfect for modern UI style",
        descriptionTw: "透明質感，適合現代UI風格",
        colors: [
            { hex: "#FFFFFF", name: "玻璃白", nameEn: "Glass White", nameTw: "玻璃白" },
            { hex: "#E8F4FD", name: "玻璃蓝", nameEn: "Glass Blue", nameTw: "玻璃藍" },
            { hex: "#F0F8FF", name: "玻璃浅蓝", nameEn: "Glass Light Blue", nameTw: "玻璃淺藍" },
            { hex: "#D4E8F8", name: "玻璃深蓝", nameEn: "Glass Dark Blue", nameTw: "玻璃深藍" }
        ]
    }
];

// 风格分类
var styleCategories = [
    { name: "温柔", nameEn: "Soft", nameTw: "溫柔", icon: "🌸" },
    { name: "复古", nameEn: "Vintage", nameTw: "復古", icon: "📜" },
    { name: "清新", nameEn: "Fresh", nameTw: "清新", icon: "🌿" },
    { name: "自然", nameEn: "Nature", nameTw: "自然", icon: "🍃" },
    { name: "优雅", nameEn: "Elegant", nameTw: "優雅", icon: "✨" },
    { name: "艺术", nameEn: "Art", nameTw: "藝術", icon: "🎨" },
    { name: "东方", nameEn: "Eastern", nameTw: "東方", icon: "🏯" },
    { name: "活力", nameEn: "Vibrant", nameTw: "活力", icon: "🔥" },
    { name: "极简", nameEn: "Minimal", nameTw: "極簡", icon: "◯" },
    { name: "现代", nameEn: "Modern", nameTw: "現代", icon: "💡" }
];

// 颜色情感/性格对应
var colorPersonality = {
    "温暖": { personality: "热情开朗", personalityEn: "Warm and outgoing", personalityTw: "熱情開朗", keywords: ["活力", "阳光", "积极"], keywordsEn: ["vibrant", "sunshine", "positive"], keywordsTw: ["活力", "陽光", "積極"] },
    "清新": { personality: "轻松自在", personalityEn: "Relaxed and free", personalityTw: "輕鬆自在", keywords: ["自然", "纯净", "简单"], keywordsEn: ["natural", "pure", "simple"], keywordsTw: ["自然", "純净", "簡單"] },
    "优雅": { personality: "内敛精致", personalityEn: "Reserved and refined", personalityTw: "內敛精緻", keywords: ["高级", "细腻", "品味"], keywordsEn: ["high-end", "delicate", "taste"], keywordsTw: ["高級", "細膩", "品味"] },
    "复古": { personality: "怀旧深情", personalityEn: "Nostalgic and deep", personalityTw: "懷舊深情", keywords: ["记忆", "故事", "时间"], keywordsEn: ["memory", "story", "time"], keywordsTw: ["記憶", "故事", "時間"] },
    "自然": { personality: "稳重平和", personalityEn: "Steady and peaceful", personalityTw: "穩重平和", keywords: ["踏实", "安静", "可靠"], keywordsEn: ["grounded", "quiet", "reliable"], keywordsTw: ["踏實", "安靜", "可靠"] },
    "东方": { personality: "禅意淡雅", personalityEn: "Zen and elegant", personalityTw: "禪意淡雅", keywords: ["宁静", "传统", "雅致"], keywordsEn: ["peaceful", "traditional", "elegant"], keywordsTw: ["宁静", "傳統", "雅致"] },
    "极简": { personality: "理性简洁", personalityEn: "Rational and simple", personalityTw: "理性簡潔", keywords: ["效率", "干净", "专注"], keywordsEn: ["efficient", "clean", "focused"], keywordsTw: ["效率", "乾淨", "專注"] },
    "艺术": { personality: "创意自由", personalityEn: "Creative and free", personalityTw: "創意自由", keywords: ["灵感", "美学", "个性"], keywordsEn: ["inspiration", "aesthetic", "individual"], keywordsTw: ["靈感", "美學", "個性"] },
    "活力": { personality: "活泼外向", personalityEn: "Lively and outgoing", personalityTw: "活潑外向", keywords: ["社交", "快乐", "分享"], keywordsEn: ["social", "happy", "sharing"], keywordsTw: ["社交", "快樂", "分享"] },
    "现代": { personality: "前卫探索", personalityEn: "Avant-garde explorer", personalityTw: "前衛探索", keywords: ["科技", "创新", "未来"], keywordsEn: ["tech", "innovation", "future"], keywordsTw: ["科技", "創新", "未來"] }
};

// 颜色生成工具函数
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    var a = s * Math.min(l, 1 - l);
    var f = function(n) {
        var k = (n + h / 30) % 12;
        var color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return "#" + f(0) + f(8) + f(4);
}

// 根据主色生成配色方案
function generatePaletteFromBase(baseHex, schemeType) {
    var rgb = hexToRgb(baseHex);
    if (!rgb) return null;

    var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    var h = hsl.h, s = hsl.s, l = hsl.l;
    var colors = [];

    switch (schemeType) {
        case "monochromatic":
            // 同色系：同一色相的不同明度
            colors.push({ hex: baseHex, name: "主色", nameEn: "Primary", nameTw: "主色" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 25, 95)), name: "浅色", nameEn: "Light", nameTw: "淺色" });
            colors.push({ hex: hslToHex(h, s, Math.max(l - 25, 10)), name: "深色", nameEn: "Dark", nameTw: "深色" });
            colors.push({ hex: hslToHex(h, Math.max(s - 30, 5), l), name: "灰调", nameEn: "Gray Tone", nameTw: "灰調" });
            break;

        case "complementary":
            // 互补色：色相对立
            colors.push({ hex: baseHex, name: "主色", nameEn: "Primary", nameTw: "主色" });
            colors.push({ hex: hslToHex((h + 180) % 360, s, l), name: "互补色", nameEn: "Complementary", nameTw: "互補色" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 20, 90)), name: "主浅色", nameEn: "Primary Light", nameTw: "主淺色" });
            colors.push({ hex: hslToHex((h + 180) % 360, s, Math.min(l + 20, 90)), name: "补浅色", nameEn: "Complementary Light", nameTw: "補淺色" });
            break;

        case "analogous":
            // 邻近色：色相相邻
            colors.push({ hex: baseHex, name: "主色", nameEn: "Primary", nameTw: "主色" });
            colors.push({ hex: hslToHex((h - 30 + 360) % 360, s, l), name: "邻近色1", nameEn: "Adjacent 1", nameTw: "鄰近色1" });
            colors.push({ hex: hslToHex((h + 30) % 360, s, l), name: "邻近色2", nameEn: "Adjacent 2", nameTw: "鄰近色2" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 15, 90)), name: "浅主色", nameEn: "Primary Light", nameTw: "淺主色" });
            break;

        case "triadic":
            // 三角色：色相三等分
            colors.push({ hex: baseHex, name: "主色", nameEn: "Primary", nameTw: "主色" });
            colors.push({ hex: hslToHex((h + 120) % 360, s, l), name: "三角1", nameEn: "Triadic 1", nameTw: "三角1" });
            colors.push({ hex: hslToHex((h + 240) % 360, s, l), name: "三角2", nameEn: "Triadic 2", nameTw: "三角2" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 20, 90)), name: "浅主色", nameEn: "Primary Light", nameTw: "淺主色" });
            break;

        case "splitComplementary":
            // 分裂互补：主色+互补色两侧
            colors.push({ hex: baseHex, name: "主色", nameEn: "Primary", nameTw: "主色" });
            colors.push({ hex: hslToHex((h + 150) % 360, s, l), name: "分裂1", nameEn: "Split 1", nameTw: "分裂1" });
            colors.push({ hex: hslToHex((h + 210) % 360, s, l), name: "分裂2", nameEn: "Split 2", nameTw: "分裂2" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 20, 90)), name: "浅主色", nameEn: "Primary Light", nameTw: "淺主色" });
            break;

        case "tetradic":
            // 四角色：色相四等分
            colors.push({ hex: baseHex, name: "主色", nameEn: "Primary", nameTw: "主色" });
            colors.push({ hex: hslToHex((h + 90) % 360, s, l), name: "四方1", nameEn: "Tetradic 1", nameTw: "四方1" });
            colors.push({ hex: hslToHex((h + 180) % 360, s, l), name: "四方2", nameEn: "Tetradic 2", nameTw: "四方2" });
            colors.push({ hex: hslToHex((h + 270) % 360, s, l), name: "四方3", nameEn: "Tetradic 3", nameTw: "四方3" });
            break;

        case "warm":
            // 暖色调
            colors.push({ hex: baseHex, name: "主色", nameEn: "Primary", nameTw: "主色" });
            colors.push({ hex: hslToHex(Math.min(h + 15, 60), Math.min(s + 10, 100), l), name: "暖色1", nameEn: "Warm 1", nameTw: "暖色1" });
            colors.push({ hex: hslToHex(Math.min(h + 30, 60), Math.min(s + 15, 100), Math.min(l + 10, 90)), name: "暖色2", nameEn: "Warm 2", nameTw: "暖色2" });
            colors.push({ hex: hslToHex(Math.min(h - 15 + 360, 60) % 360, s, Math.max(l - 10, 20)), name: "暖深色", nameEn: "Warm Dark", nameTw: "暖深色" });
            break;

        case "cool":
            // 冷色调
            colors.push({ hex: baseHex, name: "主色", nameEn: "Primary", nameTw: "主色" });
            colors.push({ hex: hslToHex(Math.max(h - 15, 180), s, l), name: "冷色1", nameEn: "Cool 1", nameTw: "冷色1" });
            colors.push({ hex: hslToHex(Math.max(h - 30, 180), Math.max(s - 5, 20), Math.min(l + 10, 90)), name: "冷色2", nameEn: "Cool 2", nameTw: "冷色2" });
            colors.push({ hex: hslToHex(Math.min(h + 15, 270), Math.max(s - 10, 30), l), name: "冷浅色", nameEn: "Cool Light", nameTw: "冷淺色" });
            break;

        case "pastel":
            // 粉彩：低饱和度高明度
            colors.push({ hex: hslToHex(h, Math.max(s - 40, 10), Math.min(l + 30, 95)), name: "粉彩主色", nameEn: "Pastel Primary", nameTw: "粉彩主色" });
            colors.push({ hex: hslToHex((h + 30) % 360, 20, 90), name: "粉彩1", nameEn: "Pastel 1", nameTw: "粉彩1" });
            colors.push({ hex: hslToHex((h + 60) % 360, 15, 85), name: "粉彩2", nameEn: "Pastel 2", nameTw: "粉彩2" });
            colors.push({ hex: hslToHex((h - 30 + 360) % 360, 25, 92), name: "粉彩3", nameEn: "Pastel 3", nameTw: "粉彩3" });
            break;

        default:
            // 默认：综合方案
            colors.push({ hex: baseHex, name: "主色", nameEn: "Primary", nameTw: "主色" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 20, 90)), name: "浅色", nameEn: "Light", nameTw: "淺色" });
            colors.push({ hex: hslToHex(h, s, Math.max(l - 20, 10)), name: "深色", nameEn: "Dark", nameTw: "深色" });
            colors.push({ hex: hslToHex((h + 180) % 360, Math.max(s - 20, 30), l), name: "互补灰", nameEn: "Complementary Gray", nameTw: "互補灰" });
    }

    return colors;
}

// 根据关键词推荐配色
function getPaletteByKeywords(keywords) {
    var matched = [];

    presetPalettes.forEach(function(palette) {
        var category = palette.category;
        if (colorPersonality[category]) {
            var personalityData = colorPersonality[category];
            var matchScore = 0;

            keywords.forEach(function(keyword) {
                if (personalityData.keywords.indexOf(keyword) > -1) {
                    matchScore += 2;
                }
                if (palette.description.indexOf(keyword) > -1) {
                    matchScore += 1;
                }
            });

            if (matchScore > 0) {
                matched.push({ palette: palette, score: matchScore });
            }
        }
    });

    matched.sort(function(a, b) { return b.score - a.score; });
    return matched.slice(0, 3);
}

// 根据人格类型推荐配色
function getPaletteByPersonality(personalityType) {
    var recommendations = {
        "记录型": ["温柔", "自然", "复古"],
        "规划型": ["极简", "清新", "现代"],
        "美学型": ["艺术", "优雅", "东方"],
        "自由型": ["活力", "艺术", "现代"],
        "结构型": ["极简", "自然", "东方"],
        "社交型": ["活力", "温暖", "清新"],
        "ADHD友好": ["清新", "极简", "温柔"],
        "坚持困难": ["活力", "温暖", "清新"]
    };

    var categories = recommendations[personalityType] || ["温柔", "清新"];
    var matched = presetPalettes.filter(function(p) {
        return categories.indexOf(p.category) > -1;
    });

    return matched.slice(0, 4);
}