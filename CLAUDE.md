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
├── wei-theme/                  # Wei Glass 主题
│   ├── package.json            # 扩展元信息
│   ├── extension.js            # 扩展入口（切换命令 + 首次安装推荐配置）
│   ├── LICENSE                 # GPL-3.0 开源协议
│   ├── icon.png                # 扩展图标
│   ├── background.webp         # 玻璃拟态壁纸
│   ├── defaultSettings.jsonc   # VS Code 默认配置快照
│   └── themes/
│       ├── wei-glass-dark.json
│       └── wei-glass-light.json
├── aurora-theme/       # Aurora 主题
│   ├── package.json
│   ├── LICENSE          # GPL-3.0 开源协议
│   └── themes/
│       ├── aurora-dark.json
│       └── aurora-light.json
├── setting.json         # 用户 VS Code 配置
├── AGENTS.md            # 智能体行为边界
├── CLAUDE.md            # ← 本文件
└── README.md
```

## 扩展入口 (extension.js)

`wei-theme/extension.js` 提供了四个 VS Code 命令和一个首次安装推荐设置流程：

| 命令 | 功能 |
|------|------|
| `weiGlass.switchDark` | 切换到 Wei Glass 深色 |
| `weiGlass.switchLight` | 切换到 Wei Glass 浅色 |
| `weiGlass.toggleTheme` | 深色/浅色循环切换 |
| `weiGlass.showWallpaperTip` | 查看壁纸说明 |

### applyRecommendedSettings()

首次安装时弹出提示，用户点击「应用推荐设置」后写入 **27 项配置** 到全局 settings.json：

- 主题、图标主题、产品图标主题
- 字体（Fira Code 等）、字号 15、字重 450、连字、行高 1.4、字距 0.5
- 光标扩展动画、平滑插入动画、光标宽度 2、编辑器/列表平滑滚动
- 自定义标题栏、命令中心
- 括号配对着色（独立颜色池）、缩进指引（活跃高亮）
- 缩略图禁用
- Whitespace 边界渲染、行高亮全部、粘性滚动（最多 3 行）
- 编辑器上下留白 16px（玻璃拟态呼吸感）、圆角选中、鼠标滚轮缩放
- 终端字体/字号/行高/光标闪烁/光标样式

## 发布记录

| 版本 | 仓库提交 | 市场链接 |
|------|---------|---------|
| v1.4.0 | `0eb82c0` | [EthanWilkins.wei-glass-theme](https://marketplace.visualstudio.com/items?itemName=EthanWilkins.wei-glass-theme) |

通过 `vsce publish` 发布至 VS Code Marketplace，publisher 为 `EthanWilkins`。

## 相关文件

| 文件 | 说明 |
|------|------|
| `AGENTS.md` | 智能体行为边界与文件归属规则 |
| `setting.json` | 用户当前使用的 VS Code 配置（手写，非自动生成） |
| `defaultSettings.jsonc` | VS Code 默认配置快照，仅作参考对照 |

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
