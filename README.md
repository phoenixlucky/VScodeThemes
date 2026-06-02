# VS Code 主题集

> 深色琉璃 · 浅色宣纸 · 两套精心打磨的 VS Code 主题

本仓库收录了两套风格迥异的 VS Code 主题，均由个人手调配色、逐项打磨。当前推荐使用 **Wei Glass**——一款玻璃拟态（Glassmorphism）风格主题，灵感源自中国传统色彩美学。

---

## 主题一览

| 主题 | 类型 | 风格关键词 | 当前状态 |
|------|------|-----------|---------|
| **Wei Glass** | 深色 / 浅色 | 玻璃拟态 · 胭脂 · 玉 · 金 · 紫 · 中式典雅 | ⭐ 当前使用 |
| **Aurora** | 深色 / 浅色 | 极光 · 深邃夜空 · 青绿 · 紫罗兰 · 玫瑰 | 同仓库 |

---

## 🥇 Wei Glass — 当前主题

一款**玻璃拟态** VS Code 主题。背景半透明磨砂质感，搭配古典中国色：

- **胭脂红** `#E04A7C` — 关键词、标签、徽章，点睛之色
- **青玉** `#6BCB9E` — 函数名、git 新增，温润如玉
- **琉璃蓝** `#7EC8E3` — 类型、内置、游标，通透如冰
- **紫磨金** `#9B7FCF` — 常量、按钮、选中，贵气内敛
- **琥珀黄** `#D4A853` — 参数、字符串、警告，暖色平衡
- **墨灰** `#5C5D7A` — 注释，退居幕后

自带壁纸 `wei-theme/background.webp`，配合玻璃透明面板营造沉浸感。

### 调色板

#### Wei Glass (深色)

| Token | 色值 | 预览 |
|-------|------|------|
| 背景 | `#1A1B2EF2` | 深靛蓝半透明 |
| 侧边栏 | `#1E1F35D9` | 磨砂紫灰 |
| 标题栏 | `#16172CE6` | 更深邃的磨砂 |
| 前景 | `#EFEFF0` | 冷白 |
| 注释 | `#5C5D7A` | 墨灰 |
| 关键词 | `#E04A7C` | 胭脂红 |
| 函数 | `#6BCB9E` | 青玉 |
| 类型 / 类 | `#7EC8E3` | 琉璃蓝 |
| 常量 | `#9B7FCF` | 紫磨金 |
| 字符串 / 参数 | `#D4A853` | 琥珀黄 |
| 错误 | `#E05A5A` | 朱砂 |

#### Wei Glass Light (浅色)

| Token | 色值 | 预览 |
|-------|------|------|
| 背景 | `#F7F5F0F2` | 宣纸白半透明 |
| 侧边栏 | `#F0EEE8D9` | 米色磨砂 |
| 标题栏 | `#EDEBE4E6` | 暖白磨砂 |
| 前景 | `#2C2D3E` | 深灰 |
| 注释 | `#A8A9BD` | 暖灰 |
| 关键词 | `#E04A7C` | 胭脂红 |
| 函数 | `#6BCB9E` | 青玉 |
| 类型 / 类 | `#7EC8E3` | 琉璃蓝 |
| 常量 | `#9B7FCF` | 紫磨金 |
| 字符串 / 参数 | `#D4A853` | 琥珀黄 |
| 错误 | `#D6406A` | 朱砂 |

---

## 🌌 Aurora — 另一主题

极光灵感主题，深邃夜空背景配以鲜明的青绿、紫罗兰与玫瑰色点缀。

### 调色板

#### Aurora Dark

| Token | 色值 | 预览 |
|-------|------|------|
| 背景 | `#1a1b26` | 深邃夜空 |
| 前景 | `#c0caf5` | 冷白 |
| 注释 | `#565f89` | 暗灰板岩 |
| 关键词 | `#bb9af7` | 紫罗兰 |
| 字符串 | `#9ece6a` | 极光绿 |
| 数字 | `#ff9e64` | 暖橙 |
| 函数 | `#7dcfff` | 极光青 |
| 类型 | `#e0af68` | 金色 |
| HTML 标签 | `#f7768e` | 玫瑰 |

#### Aurora Light

| Token | 色值 | 预览 |
|-------|------|------|
| 背景 | `#f6f6fa` | 柔白纸 |
| 前景 | `#1a1b26` | 墨色 |
| 注释 | `#8a8fa3` | 暖灰 |
| 关键词 | `#7c3aed` | 紫罗兰 |
| 字符串 | `#4a7a1f` | 森林绿 |
| 数字 | `#c2540a` | 焦橙 |
| 函数 | `#0c7ea4` | 深青 |
| 类型 | `#9a6f00` | 琥珀 |
| HTML 标签 | `#c93b58` | 玫瑰 |

---

## 📦 项目结构

```
VScodeThemes/
├── wei-theme/          # Wei Glass 主题
│   ├── package.json
│   ├── README.md
│   ├── icon.png
│   ├── background.webp        # 玻璃拟态壁纸
│   └── themes/
│       ├── wei-glass-dark.json
│       └── wei-glass-light.json
├── aurora-theme/       # Aurora 主题
│   ├── package.json
│   ├── README.md
│   └── themes/
│       ├── aurora-dark.json
│       └── aurora-light.json
├── setting.json               # 当前 VS Code 配置
├── image.png
├── 豆蔻少女版260529.webp
└── README.md                  # ← 本文件
```

---

## 🚀 安装与使用

### 本地安装 (推荐)

1. 在 VS Code 中打开本项目文件夹
2. 按 `F5` 启动**扩展开发主机**窗口
3. 在新窗口中按 `Ctrl+K Ctrl+T` → 选择你喜欢的主题

### 手动安装

将主题文件夹复制到 VS Code 扩展目录：

| 系统 | 路径 |
|------|------|
| Windows | `%USERPROFILE%\.vscode\extensions\` |
| macOS / Linux | `~/.vscode/extensions/` |

然后重载 VS Code (`Ctrl+R` / `Cmd+R`)。

### 打包成 VSIX

```bash
npm install -g @vscode/vsce
cd wei-theme   # 或 aurora-theme
vsce package
code --install-extension *.vsix
```

---

## 🎨 自定义

编辑对应主题的 JSON 文件中的色值，保存后重载窗口即可预览。参考 [VS Code Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) 查看所有可用 UI 键名。

---

## 📎 推荐设置

当前 `setting.json` 中的关键配置（与你当前主题配合最佳）：

```json
{
  "workbench.colorTheme": "Wei Glass",
  "editor.fontFamily": "'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace",
  "editor.fontLigatures": true,
  "editor.lineHeight": 1.7,
  "editor.cursorBlinking": "expand",
  "editor.cursorSmoothCaretAnimation": "on",
  "window.titleBarStyle": "custom",
  "window.commandCenter": true
}
```

---

## 📄 许可

个人作品，自由使用与修改。
