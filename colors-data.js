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
        category: "温柔",
        description: "温柔清新，适合日常记录",
        colors: [
            { hex: "#F5F0E8", name: "米白" },
            { hex: "#E8D4C4", name: "浅奶茶" },
            { hex: "#D4A574", name: "焦糖" },
            { hex: "#7C6A9A", name: "薰衣草紫" }
        ]
    },
    {
        name: "奶茶色",
        nameEn: "Milk Tea",
        category: "温柔",
        description: "温暖治愈，适合心情记录",
        colors: [
            { hex: "#FDF6E3", name: "奶白" },
            { hex: "#D4C4B0", name: "奶茶" },
            { hex: "#B8A08A", name: "深奶茶" },
            { hex: "#9A8570", name: "咖啡棕" }
        ]
    },
    {
        name: "奶油风",
        nameEn: "Cream Style",
        category: "温柔",
        description: "柔软温暖，适合慢生活记录",
        colors: [
            { hex: "#FFF8F0", name: "奶油白" },
            { hex: "#FFE4D6", name: "奶油粉" },
            { hex: "#FFDAB9", name: "桃子奶油" },
            { hex: "#E8D4C4", name: "暖奶油" }
        ]
    },

    // 复古系
    {
        name: "复古风",
        nameEn: "Vintage Style",
        category: "复古",
        description: "温暖怀旧，适合回忆记录",
        colors: [
            { hex: "#8B4513", name: "深棕" },
            { hex: "#CD5C5C", name: "印度红" },
            { hex: "#F5DEB3", name: "小麦色" },
            { hex: "#556B2F", name: "橄榄绿" }
        ]
    },
    {
        name: "老照片风",
        nameEn: "Sepia Style",
        category: "复古",
        description: "泛黄怀旧，适合记忆回顾",
        colors: [
            { hex: "#704214", name: "深褐" },
            { hex: "#A0522D", name: "赭石" },
            { hex: "#D2B48C", name: "棕褐" },
            { hex: "#F4E4BC", name: "泛黄白" }
        ]
    },
    {
        name: "胶片风",
        nameEn: "Film Style",
        category: "复古",
        description: "胶片质感，适合生活记录",
        colors: [
            { hex: "#2D4A3E", name: "胶片绿" },
            { hex: "#8B7355", name: "胶片棕" },
            { hex: "#C9A66B", name: "胶片金" },
            { hex: "#E8D4A8", name: "胶片米" }
        ]
    },

    // 清新系
    {
        name: "清新风",
        nameEn: "Fresh Style",
        category: "清新",
        description: "明亮活力，适合计划规划",
        colors: [
            { hex: "#E8F5E9", name: "薄荷绿" },
            { hex: "#B2DFDB", name: "浅青" },
            { hex: "#80CBC4", name: "青绿" },
            { hex: "#4DB6AC", name: "深青" }
        ]
    },
    {
        name: "薄荷风",
        nameEn: "Mint Style",
        category: "清新",
        description: "清凉舒爽，适合夏天记录",
        colors: [
            { hex: "#E0F7FA", name: "薄荷白" },
            { hex: "#B2EBF2", name: "薄荷浅蓝" },
            { hex: "#80DEEA", name: "薄荷蓝" },
            { hex: "#4DD0E1", name: "薄荷深蓝" }
        ]
    },
    {
        name: "柠檬风",
        nameEn: "Lemon Style",
        category: "清新",
        description: "明亮活泼，适合心情记录",
        colors: [
            { hex: "#FFF9C4", name: "柠檬黄白" },
            { hex: "#FFF176", name: "柠檬黄" },
            { hex: "#FFEE58", name: "亮黄" },
            { hex: "#FDD835", name: "金黄" }
        ]
    },

    // 自然系
    {
        name: "森林风",
        nameEn: "Forest Style",
        category: "自然",
        description: "自然沉稳，适合读书笔记",
        colors: [
            { hex: "#E8F5E9", name: "浅绿" },
            { hex: "#81C784", name: "草绿" },
            { hex: "#4CAF50", name: "绿色" },
            { hex: "#2E7D32", name: "深绿" }
        ]
    },
    {
        name: "海洋风",
        nameEn: "Ocean Style",
        category: "自然",
        description: "平静舒缓，适合冥想记录",
        colors: [
            { hex: "#E3F2FD", name: "浅蓝" },
            { hex: "#90CAF9", name: "天蓝" },
            { hex: "#42A5F5", name: "蓝色" },
            { hex: "#1E88E5", name: "深蓝" }
        ]
    },
    {
        name: "大地风",
        nameEn: "Earth Style",
        category: "自然",
        description: "稳重踏实，适合目标追踪",
        colors: [
            { hex: "#D7CCC8", name: "浅土" },
            { hex: "#A1887F", name: "土色" },
            { hex: "#795548", name: "棕色" },
            { hex: "#5D4037", name: "深棕" }
        ]
    },
    {
        name: "沙漠风",
        nameEn: "Desert Style",
        category: "自然",
        description: "温暖干燥，适合旅行记录",
        colors: [
            { hex: "#F5DEB3", name: "沙色" },
            { hex: "#D2B48C", name: "棕褐" },
            { hex: "#C4A35A", name: "沙漠金" },
            { hex: "#8B7355", name: "岩石棕" }
        ]
    },

    // 优雅系
    {
        name: "莫兰迪色",
        nameEn: "Morandi Style",
        category: "优雅",
        description: "高级灰调，适合艺术记录",
        colors: [
            { hex: "#C4B7A6", name: "灰米" },
            { hex: "#B5A99A", name: "灰棕" },
            { hex: "#A8C4B8", name: "灰绿" },
            { hex: "#9A8E7C", name: "灰土" }
        ]
    },
    {
        name: "紫色系",
        nameEn: "Purple Series",
        category: "优雅",
        description: "神秘优雅，适合创意灵感",
        colors: [
            { hex: "#E1BEE7", name: "浅紫" },
            { hex: "#CE93D8", name: "丁香紫" },
            { hex: "#9C27B0", name: "紫色" },
            { hex: "#6A1B9A", name: "深紫" }
        ]
    },
    {
        name: "粉色系",
        nameEn: "Pink Series",
        category: "优雅",
        description: "甜美可爱，适合少女风",
        colors: [
            { hex: "#FCE4EC", name: "浅粉" },
            { hex: "#F8BBD0", name: "粉红" },
            { hex: "#F48FB1", name: "玫瑰粉" },
            { hex: "#EC407A", name: "深粉" }
        ]
    },

    // 艺术系
    {
        name: "印象派",
        nameEn: "Impressionist",
        category: "艺术",
        description: "莫奈风格，柔和自然",
        colors: [
            { hex: "#4A90A4", name: "印象蓝" },
            { hex: "#F5DEB3", name: "印象米" },
            { hex: "#C9A66B", name: "印象金" },
            { hex: "#7B8D6E", name: "印象绿" }
        ]
    },
    {
        name: "巴洛克",
        nameEn: "Baroque",
        category: "艺术",
        description: "华丽深沉，宫廷风格",
        colors: [
            { hex: "#8B4513", name: "巴洛克棕" },
            { hex: "#DAA520", name: "巴洛克金" },
            { hex: "#4A3728", name: "巴洛克深" },
            { hex: "#800020", name: "巴洛克红" }
        ]
    },
    {
        name: "水彩风",
        nameEn: "Watercolor Style",
        category: "艺术",
        description: "淡雅通透，适合手绘风格",
        colors: [
            { hex: "#E8F4F8", name: "水彩蓝白" },
            { hex: "#D4E8F2", name: "水彩浅蓝" },
            { hex: "#B8D4E8", name: "水彩蓝" },
            { hex: "#E8D4F0", name: "水彩紫" }
        ]
    },
    {
        name: "油画风",
        nameEn: "Oil Painting Style",
        category: "艺术",
        description: "浓郁厚重，适合艺术创作",
        colors: [
            { hex: "#C41E3A", name: "油画红" },
            { hex: "#2E4A62", name: "油画蓝" },
            { hex: "#8B7355", name: "油画棕" },
            { hex: "#D4A574", name: "油画金" }
        ]
    },

    // 东方系
    {
        name: "日式和风",
        nameEn: "Japanese Style",
        category: "东方",
        description: "淡雅禅意，适合日式手帐",
        colors: [
            { hex: "#E8D4C4", name: "和风米" },
            { hex: "#D4AF37", name: "和风金" },
            { hex: "#8FBC8F", name: "和风绿" },
            { hex: "#2F4F4F", name: "和风深" }
        ]
    },
    {
        name: "中国风",
        nameEn: "Chinese Style",
        category: "东方",
        description: "传统典雅，适合古风记录",
        colors: [
            { hex: "#C41E3A", name: "中国红" },
            { hex: "#DAA520", name: "金色" },
            { hex: "#2F4F4F", name: "墨绿" },
            { hex: "#704214", name: "檀木棕" }
        ]
    },
    {
        name: "水墨风",
        nameEn: "Ink Wash Style",
        category: "东方",
        description: "黑白雅致，适合书法风格",
        colors: [
            { hex: "#F5F5F5", name: "宣纸白" },
            { hex: "#D4D4D4", name: "浅墨" },
            { hex: "#808080", name: "中墨" },
            { hex: "#2D2D2D", name: "浓墨" }
        ]
    },

    // 活力系
    {
        name: "温暖风",
        nameEn: "Warm Style",
        category: "活力",
        description: "阳光活力，适合心情记录",
        colors: [
            { hex: "#FFCC80", name: "浅橙" },
            { hex: "#FF9800", name: "橙色" },
            { hex: "#F57C00", name: "深橙" },
            { hex: "#E65100", name: "橙红" }
        ]
    },
    {
        name: "日落风",
        nameEn: "Sunset Style",
        category: "活力",
        description: "渐变暖色，适合傍晚记录",
        colors: [
            { hex: "#FFD54F", name: "日落黄" },
            { hex: "#FF8A65", name: "日落橙" },
            { hex: "#FF7043", name: "日落红橙" },
            { hex: "#E57373", name: "日落红" }
        ]
    },
    {
        name: "彩虹风",
        nameEn: "Rainbow Style",
        category: "活力",
        description: "多彩活泼，适合创意手帐",
        colors: [
            { hex: "#E57373", name: "彩虹红" },
            { hex: "#FFB74D", name: "彩虹橙" },
            { hex: "#81C784", name: "彩虹绿" },
            { hex: "#64B5F6", name: "彩虹蓝" }
        ]
    },

    // 极简系
    {
        name: "极简风",
        nameEn: "Minimalist Style",
        category: "极简",
        description: "简洁干净，适合高效规划",
        colors: [
            { hex: "#FFFFFF", name: "白" },
            { hex: "#F5F5F5", name: "浅灰" },
            { hex: "#E0E0E0", name: "灰色" },
            { hex: "#9E9E9E", name: "深灰" }
        ]
    },
    {
        name: "黑白风",
        nameEn: "Black & White",
        category: "极简",
        description: "经典配色，适合专业记录",
        colors: [
            { hex: "#FFFFFF", name: "纯白" },
            { hex: "#F0F0F0", name: "浅灰白" },
            { hex: "#333333", name: "深灰" },
            { hex: "#000000", name: "黑" }
        ]
    },
    {
        name: "暗黑风",
        nameEn: "Dark Style",
        category: "极简",
        description: "神秘优雅，适合夜间记录",
        colors: [
            { hex: "#2C2C2C", name: "深灰" },
            { hex: "#1A1A1A", name: "黑" },
            { hex: "#C0C0C0", name: "银色" },
            { hex: "#8B8B8B", name: "灰色" }
        ]
    },

    // 现代系
    {
        name: "赛博朋克",
        nameEn: "Cyberpunk",
        category: "现代",
        description: "霓虹科技，适合科技感手帐",
        colors: [
            { hex: "#FF00FF", name: "霓虹紫" },
            { hex: "#00FFFF", name: "霓虹蓝" },
            { hex: "#FF0080", name: "霓虹粉" },
            { hex: "#001020", name: "赛博黑" }
        ]
    },
    {
        name: "渐变风",
        nameEn: "Gradient Style",
        category: "现代",
        description: "流行渐变，适合现代风格",
        colors: [
            { hex: "#667eea", name: "渐变紫蓝" },
            { hex: "#764ba2", name: "渐变紫" },
            { hex: "#f093fb", name: "渐变粉紫" },
            { hex: "#f5576c", name: "渐变红粉" }
        ]
    },
    {
        name: "玻璃风",
        nameEn: "Glass Style",
        category: "现代",
        description: "透明质感，适合现代UI风格",
        colors: [
            { hex: "#FFFFFF", name: "玻璃白" },
            { hex: "#E8F4FD", name: "玻璃蓝" },
            { hex: "#F0F8FF", name: "玻璃浅蓝" },
            { hex: "#D4E8F8", name: "玻璃深蓝" }
        ]
    }
];

// 风格分类
var styleCategories = [
    { name: "温柔", nameEn: "Soft", icon: "🌸" },
    { name: "复古", nameEn: "Vintage", icon: "📜" },
    { name: "清新", nameEn: "Fresh", icon: "🌿" },
    { name: "自然", nameEn: "Nature", icon: "🍃" },
    { name: "优雅", nameEn: "Elegant", icon: "✨" },
    { name: "艺术", nameEn: "Art", icon: "🎨" },
    { name: "东方", nameEn: "Eastern", icon: "🏯" },
    { name: "活力", nameEn: "Vibrant", icon: "🔥" },
    { name: "极简", nameEn: "Minimal", icon: "◯" },
    { name: "现代", nameEn: "Modern", icon: "💡" }
];

// 颜色情感/性格对应
var colorPersonality = {
    "温暖": { personality: "热情开朗", keywords: ["活力", "阳光", "积极"] },
    "清新": { personality: "轻松自在", keywords: ["自然", "纯净", "简单"] },
    "优雅": { personality: "内敛精致", keywords: ["高级", "细腻", "品味"] },
    "复古": { personality: "怀旧深情", keywords: ["记忆", "故事", "时间"] },
    "自然": { personality: "稳重平和", keywords: ["踏实", "安静", "可靠"] },
    "东方": { personality: "禅意淡雅", keywords: ["宁静", "传统", "雅致"] },
    "极简": { personality: "理性简洁", keywords: ["效率", "干净", "专注"] },
    "艺术": { personality: "创意自由", keywords: ["灵感", "美学", "个性"] },
    "活力": { personality: "活泼外向", keywords: ["社交", "快乐", "分享"] },
    "现代": { personality: "前卫探索", keywords: ["科技", "创新", "未来"] }
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
            colors.push({ hex: baseHex, name: "主色" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 25, 95)), name: "浅色" });
            colors.push({ hex: hslToHex(h, s, Math.max(l - 25, 10)), name: "深色" });
            colors.push({ hex: hslToHex(h, Math.max(s - 30, 5), l), name: "灰调" });
            break;

        case "complementary":
            // 互补色：色相对立
            colors.push({ hex: baseHex, name: "主色" });
            colors.push({ hex: hslToHex((h + 180) % 360, s, l), name: "互补色" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 20, 90)), name: "主浅色" });
            colors.push({ hex: hslToHex((h + 180) % 360, s, Math.min(l + 20, 90)), name: "补浅色" });
            break;

        case "analogous":
            // 邻近色：色相相邻
            colors.push({ hex: baseHex, name: "主色" });
            colors.push({ hex: hslToHex((h - 30 + 360) % 360, s, l), name: "邻近色1" });
            colors.push({ hex: hslToHex((h + 30) % 360, s, l), name: "邻近色2" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 15, 90)), name: "浅主色" });
            break;

        case "triadic":
            // 三角色：色相三等分
            colors.push({ hex: baseHex, name: "主色" });
            colors.push({ hex: hslToHex((h + 120) % 360, s, l), name: "三角1" });
            colors.push({ hex: hslToHex((h + 240) % 360, s, l), name: "三角2" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 20, 90)), name: "浅主色" });
            break;

        case "splitComplementary":
            // 分裂互补：主色+互补色两侧
            colors.push({ hex: baseHex, name: "主色" });
            colors.push({ hex: hslToHex((h + 150) % 360, s, l), name: "分裂1" });
            colors.push({ hex: hslToHex((h + 210) % 360, s, l), name: "分裂2" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 20, 90)), name: "浅主色" });
            break;

        case "tetradic":
            // 四角色：色相四等分
            colors.push({ hex: baseHex, name: "主色" });
            colors.push({ hex: hslToHex((h + 90) % 360, s, l), name: "四方1" });
            colors.push({ hex: hslToHex((h + 180) % 360, s, l), name: "四方2" });
            colors.push({ hex: hslToHex((h + 270) % 360, s, l), name: "四方3" });
            break;

        case "warm":
            // 暖色调
            colors.push({ hex: baseHex, name: "主色" });
            colors.push({ hex: hslToHex(Math.min(h + 15, 60), Math.min(s + 10, 100), l), name: "暖色1" });
            colors.push({ hex: hslToHex(Math.min(h + 30, 60), Math.min(s + 15, 100), Math.min(l + 10, 90)), name: "暖色2" });
            colors.push({ hex: hslToHex(Math.min(h - 15 + 360, 60) % 360, s, Math.max(l - 10, 20)), name: "暖深色" });
            break;

        case "cool":
            // 冷色调
            colors.push({ hex: baseHex, name: "主色" });
            colors.push({ hex: hslToHex(Math.max(h - 15, 180), s, l), name: "冷色1" });
            colors.push({ hex: hslToHex(Math.max(h - 30, 180), Math.max(s - 5, 20), Math.min(l + 10, 90)), name: "冷色2" });
            colors.push({ hex: hslToHex(Math.min(h + 15, 270), Math.max(s - 10, 30), l), name: "冷浅色" });
            break;

        case "pastel":
            // 粉彩：低饱和度高明度
            colors.push({ hex: hslToHex(h, Math.max(s - 40, 10), Math.min(l + 30, 95)), name: "粉彩主色" });
            colors.push({ hex: hslToHex((h + 30) % 360, 20, 90), name: "粉彩1" });
            colors.push({ hex: hslToHex((h + 60) % 360, 15, 85), name: "粉彩2" });
            colors.push({ hex: hslToHex((h - 30 + 360) % 360, 25, 92), name: "粉彩3" });
            break;

        default:
            // 默认：综合方案
            colors.push({ hex: baseHex, name: "主色" });
            colors.push({ hex: hslToHex(h, s, Math.min(l + 20, 90)), name: "浅色" });
            colors.push({ hex: hslToHex(h, s, Math.max(l - 20, 10)), name: "深色" });
            colors.push({ hex: hslToHex((h + 180) % 360, Math.max(s - 20, 30), l), name: "互补灰" });
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