# Wei Glass Theme

> 玻璃拟态 · 中式古典 — 半透明磨砂面板 + 胭脂/玉/金/紫配色

一款 **Glassmorphism（玻璃拟态）** 风格的 VS Code 双色主题。背景采用半透明磨砂质感，让代码仿佛悬浮于毛玻璃之上。配色灵感源自中国传统色彩：胭脂红、青玉、琉璃蓝、紫磨金、琥珀黄。

自带配套壁纸 `background.webp`，配合玻璃面板营造完整沉浸感。

---

## 🎨 调色板

### Wei Glass (深色)

| Token | 色值 | 色名 |
|-------|------|------|
| 背景 | `#1A1B2EF2` | 深靛蓝半透明 |
| 侧边栏 | `#1E1F35D9` | 磨砂紫灰 |
| 标题栏 | `#16172CE6` | 更深邃磨砂 |
| 前景 | `#EFEFF0` | 冷白 |
| 注释 | `#5C5D7A` | 墨灰 |
| **关键词** | `#E04A7C` | **胭脂红** |
| **函数** | `#6BCB9E` | **青玉** |
| **类型 / 类** | `#7EC8E3` | **琉璃蓝** |
| **常量 / 布尔 / 数字** | `#9B7FCF` | **紫磨金** |
| **字符串 / 参数** | `#D4A853` | **琥珀黄** |
| 变量 | `#EFEFF0` | 冷白 |
| HTML 标签 | `#E04A7C` | 胭脂红 |
| CSS 属性名 | `#7EC8E3` | 琉璃蓝 |
| CSS 选择器 (class/id) | `#6BCB9E` | 青玉 |
| 错误 | `#E05A5A` | 朱砂 |

### Wei Glass Light (浅色)

| Token | 色值 | 色名 |
|-------|------|------|
| 背景 | `#F7F5F0F2` | 宣纸白半透明 |
| 侧边栏 | `#F0EEE8D9` | 米色磨砂 |
| 标题栏 | `#EDEBE4E6` | 暖白磨砂 |
| 前景 | `#2C2D3E` | 深灰 |
| 注释 | `#A8A9BD` | 暖灰 |
| **关键词** | `#E04A7C` | **胭脂红** |
| **函数** | `#6BCB9E` | **青玉** |
| **类型 / 类** | `#7EC8E3` | **琉璃蓝** |
| **常量 / 布尔 / 数字** | `#9B7FCF` | **紫磨金** |
| **字符串 / 参数** | `#D4A853` | **琥珀黄** |
| 变量 | `#2C2D3E` | 深灰 |
| HTML 标签 | `#E04A7C` | 胭脂红 |
| 错误 | `#D6406A` | 朱砂 |

### 终端 ANSI (深色)

| 色 | 普通 | 亮色 |
|---|------|------|
| 黑 | `#1E1F35` | `#5C5D7A` |
| 红 | `#E05A5A` | `#E07070` |
| 绿 | `#6BCB9E` | `#7FDBAE` |
| 黄 | `#D4A853` | `#DFB866` |
| 蓝 | `#7EC8E3` | `#8ED4EF` |
| 品红 | `#E04A7C` | `#E8668E` |
| 青 | `#6BCB9E` | `#7FDBAE` |
| 白 | `#EFEFF0` | `#FFFFFF` |

---

## 🖼️ 预览

主题自带玻璃拟态壁纸，渲染效果：

```
┌────────────────────────────────────────────┐
│  ﹒  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  │
│      ▓▓▓▓▓  sidebar        ▓▓▓▓▓▓▓▓▓▓     │
│      ▓ code  ▓              ▓  editor  ▓    │
│      ▓ ▓     ▓  ▓▓▓▓▓▓▓    ▓          ▓    │
│      ▓ ▓     ▓  ▓ output ▓  ▓          ▓    │
│      ▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓     │
│  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  ·     │
└────────────────────────────────────────────┘
        玻璃磨砂背景 + 半透明面板
```

---

## 📦 项目结构

```
wei-theme/
├── package.json            # 扩展元信息（含 5 个命令注册）
├── extension.js            # 扩展入口（切换命令 + 首次安装推荐配置）
├── LICENSE                 # GPL-3.0 开源协议
├── README.md               # ← 本文件
├── icon.png                # 扩展图标
├── background.webp         # 玻璃拟态壁纸（建议设为桌面背景）
├── defaultSettings.jsonc   # VS Code 默认配置快照（仅参考对照）
├── wei-glass-mpe.css       # MPE 预览自定义 CSS（深色/浅色双模式）
└── themes/
    ├── wei-glass-dark.json     # 深色主题定义
    └── wei-glass-light.json    # 浅色主题定义
```

---

## 🚀 安装

### 本地开发安装（推荐）

1. 在 VS Code 中打开本项目根目录（`VScodeThemes/`）
2. 按 `F5` 启动 **Extension Development Host** 窗口
3. 在新窗口中按 `Ctrl+K Ctrl+T` → 选择 **Wei Glass** 或 **Wei Glass Light**

### 手动安装

将 `wei-theme` 文件夹复制到 VS Code 扩展目录：

| 系统 | 路径 |
|------|------|
| Windows | `%USERPROFILE%\.vscode\extensions\wei-theme` |
| macOS / Linux | `~/.vscode/extensions/wei-theme` |

然后重载 VS Code（`Ctrl+R` / `Cmd+R`）。

### 打包 VSIX

```bash
npm install -g @vscode/vsce
cd wei-theme
vsce package
code --install-extension wei-glass-theme-1.4.0.vsix
```

---

---

## 💡 扩展功能详解

本主题附带一个 VS Code 扩展入口（`extension.js`），激活后提供以下功能。

### 命令面板

安装后可在 `Ctrl+Shift+P` 中搜索以下命令：

| 命令 | 快捷键建议 | 说明 |
|------|-----------|------|
| `Wei Glass: 切换到深色主题` | — | 切换到 Wei Glass 深色变体 |
| `Wei Glass: 切换到浅色主题` | — | 切换到 Wei Glass 浅色变体 |
| `Wei Glass: 深色/浅色一键切换` | 可设快捷键 | 在深色/浅色之间循环切换 |
| **`Wei Glass: 推荐设置引导`** | — | **手动弹出设置引导弹窗** |
| `Wei Glass: 查看壁纸说明` | — | 查看壁纸安装指引 |

> 💡 **一键切换**可以自定义快捷键：`Ctrl+K Ctrl+S` → 搜索 `weiGlass.toggleTheme` → 绑定你喜欢的键（如 `Ctrl+Shift+T`）。

### 首次安装自动引导

通过 **VS Code Marketplace** 安装此扩展后，首次重启 VS Code 会自动弹出引导弹窗：

```
┌─────────────────────────────────────────────────┐
│  ✨ Wei Glass 已激活！是否应用推荐设置？         │
│  （主题、字体、行高、光标等）                    │
│                                                 │
│     [应用推荐设置]   [查看壁纸]   [切换主题]     │
└─────────────────────────────────────────────────┘
```

点击 **「应用推荐设置」** 即可一键写入以下 **27 项配置**：

| 类别 | 配置项 |
|------|--------|
| 🎨 **主题** | 颜色主题、图标主题、产品图标主题 |
| 🔤 **字体** | Fira Code / JetBrains Mono / Cascadia Code、字号 15、字重 450、连字、行高 1.4、字距 0.5 |
| 🖱️ **光标 & 动画** | 光标扩展动画、平滑插入动画、光标宽度 2、编辑器平滑滚动、列表平滑滚动 |
| 🪟 **窗口** | 自定义标题栏、命令中心 |
| ⬅️ **括号 & 缩进** | 括号配对着色 + 独立颜色池、缩进指引 + 活跃高亮 |
| 📉 **缩略图** | 禁用（节省空间） |
| ✨ **编辑器美化** | Whitespace 边界渲染、行高亮全部、粘性滚动（最多 3 行）、**上下留白 16px**（玻璃拟态呼吸感）、**圆角选中**、鼠标滚轮缩放 |
| 💻 **终端** | Fira Code 字体、字号 14、行高 1.3、光标闪烁、光标样式 line |

弹窗只出现一次（选择后自动静音）。之后想重新触发有两种方式：

#### 方式一：命令面板手动触发

`Ctrl+Shift+P` → 输入 `Wei Glass: 推荐设置引导` → 回车，弹窗再次出现。

#### 方式二：修改配置后重启

在 `settings.json` 中添加：
```json
"weiGlass.showWallpaperTip": true
```
保存后 `Ctrl+R` 重载 VS Code，启动时自动弹出。

### 首次引导防重复机制

```
┌─────────────────────────────┐
│  扩展激活                    │
│  ↓                           │
│  读取 weiGlass.showWallpaperTip    │
│  ↓                           │
│  true? ──→ 弹出引导弹窗          │
│  │          ↓                 │
│  │     设为 false (永不再弹)     │
│  │          ↓                 │
│  │     用户点击「应用推荐设置」    │
│  │     → applyRecommendedSettings() │
│  │          ↓                 │
│  │     27 项写入全局配置        │
│  │          ↓                 │
│  │     ✅ 显示成功消息          │
│  │          ↓                 │
│  │     提示重载窗口后生效       │
│  │                            │
│  false → 跳过，不再打扰        │
└─────────────────────────────┘
```

> 即使跳过首次引导，也随时可以通过 `weiGlass.applySetupGuide` 命令重新打开同一弹窗。

---

---

## 🎨 自定义

编辑 `themes/wei-glass-dark.json` 或 `themes/wei-glass-light.json` 中的任意色值，保存后重载窗口即刻预览。

参考：
- [VS Code Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) — UI 元素色键
- [VS Code TextMate Scopes](https://code.visualstudio.com/api/extension-guides/color-theme#syntax-colors) — 语法高亮作用域

---

## 📝 Markdown Preview Enhanced 完全兼容

Wei Glass 的半透明玻璃背景在 MPE 预览中可能导致渲染异常。解决方案如下：

### 方案一：使用内置预览（推荐）

VS Code 自带的 Markdown 预览已完美支持 Wei Glass（已内置 `textLink`、`textBlockQuote`、`textCodeBlock` 等预览色键），直接点击编辑器右上角的预览图标即可。

### 方案二：MPE 加载自定义 CSS

如果使用 [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) 扩展：

1. 在 VS Code 设置中添加：

```json
"markdown-preview-enhanced.customCss": [
  "E:\\home\\VScodeThemes\\wei-theme\\wei-glass-mpe.css"
]
```

2. 或者创建 `.vscode/settings.json`（项目级），填入：

```json
{
  "markdown-preview-enhanced.customCss": [
    "${workspaceRoot}/wei-theme/wei-glass-mpe.css"
  ]
}
```

3. 重载 MPE 预览窗口（`Ctrl+Shift+V` 打开即可自动生效）。

CSS 文件位于 `wei-theme/wei-glass-mpe.css`，包含深色/浅色双模式适配。

> 💡 该 CSS 使用 Wei Glass 完整配色（胭脂红、青玉、琉璃蓝、紫磨金、琥珀黄），但采用**实色背景**以避免透明穿透。编辑器内的玻璃效果不受影响。

---

## 📄 许可

个人作品，自由使用与修改。
