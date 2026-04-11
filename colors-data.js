// ============================================
// Color Palettes Data - Sophie手帐
// ============================================

var presetPalettes = [
    {
        name: "ins风",
        nameEn: "Instagram Style",
        description: "温柔清新，适合日常记录",
        colors: [
            { hex: "#F5F0E8", name: "米白" },
            { hex: "#E8D4C4", name: "浅奶茶" },
            { hex: "#D4A574", name: "焦糖" },
            { hex: "#7C6A9A", name: "薰衣草紫" }
        ]
    },
    {
        name: "复古风",
        nameEn: "Vintage Style",
        description: "温暖怀旧，适合回忆记录",
        colors: [
            { hex: "#8B4513", name: "深棕" },
            { hex: "#CD5C5C", name: "印度红" },
            { hex: "#F5DEB3", name: "小麦色" },
            { hex: "#556B2F", name: "橄榄绿" }
        ]
    },
    {
        name: "清新风",
        nameEn: "Fresh Style",
        description: "明亮活力，适合计划规划",
        colors: [
            { hex: "#E8F5E9", name: "薄荷绿" },
            { hex: "#B2DFDB", name: "浅青" },
            { hex: "#80CBC4", name: "青绿" },
            { hex: "#4DB6AC", name: "深青" }
        ]
    },
    {
        name: "暗黑风",
        nameEn: "Dark Style",
        description: "神秘优雅，适合夜间记录",
        colors: [
            { hex: "#2C2C2C", name: "深灰" },
            { hex: "#1A1A1A", name: "黑" },
            { hex: "#C0C0C0", name: "银色" },
            { hex: "#8B8B8B", name: "灰色" }
        ]
    },
    {
        name: "温暖风",
        nameEn: "Warm Style",
        description: "阳光活力，适合心情记录",
        colors: [
            { hex: "#FFCC80", name: "浅橙" },
            { hex: "#FF9800", name: "橙色" },
            { hex: "#F57C00", name: "深橙" },
            { hex: "#E65100", name: "橙红" }
        ]
    },
    {
        name: "海洋风",
        nameEn: "Ocean Style",
        description: "平静舒缓，适合冥想记录",
        colors: [
            { hex: "#E3F2FD", name: "浅蓝" },
            { hex: "#90CAF9", name: "天蓝" },
            { hex: "#42A5F5", name: "蓝色" },
            { hex: "#1E88E5", name: "深蓝" }
        ]
    },
    {
        name: "粉色系",
        nameEn: "Pink Series",
        description: "甜美可爱，适合少女风",
        colors: [
            { hex: "#FCE4EC", name: "浅粉" },
            { hex: "#F8BBD0", name: "粉红" },
            { hex: "#F48FB1", name: "玫瑰粉" },
            { hex: "#EC407A", name: "深粉" }
        ]
    },
    {
        name: "森林风",
        nameEn: "Forest Style",
        description: "自然沉稳，适合读书笔记",
        colors: [
            { hex: "#E8F5E9", name: "浅绿" },
            { hex: "#81C784", name: "草绿" },
            { hex: "#4CAF50", name: "绿色" },
            { hex: "#2E7D32", name: "深绿" }
        ]
    },
    {
        name: "紫色系",
        nameEn: "Purple Series",
        description: "神秘优雅，适合创意灵感",
        colors: [
            { hex: "#E1BEE7", name: "浅紫" },
            { hex: "#CE93D8", name: "丁香紫" },
            { hex: "#9C27B0", name: "紫色" },
            { hex: "#6A1B9A", name: "深紫" }
        ]
    },
    {
        name: "极简风",
        nameEn: "Minimalist Style",
        description: "简洁干净，适合高效规划",
        colors: [
            { hex: "#FFFFFF", name: "白" },
            { hex: "#F5F5F5", name: "浅灰" },
            { hex: "#E0E0E0", name: "灰色" },
            { hex: "#9E9E9E", name: "深灰" }
        ]
    }
];

// Color generation helper functions
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

function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    var a = s * Math.min(l, 1 - l);
    var f = function(n) {
        var k = (n + h / 30) % 12;
        var color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return "#" + f(0) + f(8) + f(4);
}

// Generate complementary colors from a base color
function generatePalette(baseHex) {
    var rgb = hexToRgb(baseHex);
    if (!rgb) return null;

    // Calculate HSL from RGB
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var l = (max + min) / 2;
    var h, s;

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

    h = h * 360;
    s = s * 100;
    l = l * 100;

    // Generate variations
    var colors = [];

    // Base color
    colors.push({ hex: baseHex, name: "主色" });

    // Lighter version
    colors.push({ hex: hslToHex(h, Math.max(s - 10, 0), Math.min(l + 20, 90)), name: "浅色" });

    // Darker version
    colors.push({ hex: hslToHex(h, s, Math.max(l - 20, 10)), name: "深色" });

    // Complementary color (opposite on color wheel)
    colors.push({ hex: hslToHex((h + 180) % 360, s, l), name: "互补色" });

    // Analogous color (adjacent)
    colors.push({ hex: hslToHex((h + 30) % 360, Math.max(s - 5, 0), l), name: "邻近色" });

    return colors;
}