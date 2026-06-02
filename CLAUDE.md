# VScodeThemes — 项目说明

## 项目概览

本仓库维护着两套 VS Code 主题，均为个人手调配色、逐项打磨：

| 主题 | 目录 | 风格 |
|------|------|------|
| **Wei Glass** ⭐ | `wei-theme/` | 玻璃拟态 · 中式古典（胭脂/玉/金/紫） |
| **Aurora** | `aurora-theme/` | 极光灵感 · 深邃夜空（青绿/紫罗兰/玫瑰） |

每个主题均包含 **深色** 与 **浅色** 两个变体。

## 当前活跃主题

`workbench.colorTheme: "Wei Glass"` — 这是用户日常使用的主题。

### Wei Glass 核心色值

| 色名 | 色值 | 用途 |
|------|------|------|
| 胭脂红 | `#E04A7C` | 关键词、标签、徽章、storage、操作符 |
| 青玉 | `#6BCB9E` | 函数名、git 新增、CSS 选择器 |
| 琉璃蓝 | `#7EC8E3` | 类型/类、内置函数、游标、CSS 属性 |
| 紫磨金 | `#9B7FCF` | 常量、布尔、数字、按钮、选中态 |
| 琥珀黄 | `#D4A853` | 字符串、参数、警告、正则 |
| 墨灰 | `#5C5D7A` | 注释 |
| 背景 | `#1A1B2EF2` | 深色编辑器背景（半透明磨砂） |
| 前景 | `#EFEFF0` | 深色前景文字 |

## 目录结构

```
VScodeThemes/
├── wei-theme/          # Wei Glass 主题
│   ├── package.json           # 扩展元信息
│   ├── icon.png               # 扩展图标
│   ├── background.webp        # 玻璃拟态壁纸
│   └── themes/
│       ├── wei-glass-dark.json
│       └── wei-glass-light.json
├── aurora-theme/       # Aurora 主题
│   ├── package.json
│   └── themes/
│       ├── aurora-dark.json
│       └── aurora-light.json
├── setting.json               # 用户 VS Code 配置
├── CLAUDE.md                  # ← 本文件
└── README.md
```

## 主题 JSON 结构要点

- 使用 `$schema: "vscode://schemas/color-theme"` 格式
- `semanticHighlighting: true` — 开启语义高亮
- UI 颜色在 `"colors"` 块中定义（RGBA 或 HEX）
- 语法高亮在 `"tokenColors"` 块中定义（TextMate scope 规则）
- 遵循 VS Code Theme Color Reference 的键名规范

## 开发准则

- 修改色值后需重载窗口才能预览（`Ctrl+R` 或 `F5` 重启扩展开发主机）
- 保持两个变体（dark / light）之间的对比度一致性
- 颜色命名尽量使用中文传统色名（胭脂、青玉、琉璃、紫磨金、琥珀等）
- 半透明色值（带 alpha 通道）用于磨砂玻璃效果，保持 `E6`/`D9`/`F2`/`CC` 等透明度层级一致性
