# Aurora Theme

A Dracula-inspired VS Code theme. Deep purple-black canvas with vivid pink keywords, green functions, cyan types, and purple constants. Includes **Aurora** (dark) and **Aurora Light** variants.

## Palette

| Token         | Aurora (Dark)   | Aurora Light   |
| ------------- | --------------- | -------------- |
| Background    | `#282A36`       | `#FBFAF5`      |
| Sidebar       | `#21222C`       | `#EFEDE5`      |
| Title bar     | `#191A21`       | `#E8E5DC`      |
| Foreground    | `#F8F8F2`       | `#282A36`      |
| Comment       | `#6272A4`       | `#9094A0`      |
| Keyword       | `#FF79C6`       | `#D03A88`      |
| Function      | `#50FA7B`       | `#0E9A56`      |
| Type / Class  | `#8BE9FD`       | `#0097B5`      |
| String        | `#F1FA8C`       | `#A07200`      |
| Constant      | `#BD93F9`       | `#7C45D9`      |
| Parameter     | `#FFB86C`       | `#D67822`      |
| Error         | `#FF5555`       | `#D62A4D`      |

## Install (local)

1. Open the folder in VS Code and press `F5` to launch an Extension Development Host.
2. In the new window press `Ctrl+K Ctrl+T` → pick **Aurora** or **Aurora Light**.

## Install (manual)

Copy the folder into your VS Code extensions directory:

- Windows: `%USERPROFILE%\.vscode\extensions\aurora-theme-1.1.0`
- macOS / Linux: `~/.vscode/extensions/aurora-theme-1.1.0`

Then reload VS Code (`Ctrl+R`).

## Package

```bash
npm install -g @vscode/vsce
vsce package
code --install-extension aurora-theme-1.1.0.vsix
```

## Layout

```
VScodeThemes/
├── package.json
├── README.md
└── themes/
    ├── aurora-dark.json
    └── aurora-light.json
```

## Customize

Edit any hex value in `themes/aurora-dark.json` (or `aurora-light.json`) and reload the window. See the [Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) for the full list of UI keys.
