# Aurora Theme

A modern VS Code theme inspired by the aurora borealis — deep night background paired with vibrant teal, violet and pink accents. Includes both **Aurora Dark** and **Aurora Light** variants.

## Preview

| Element      | Dark                                  | Light                                  |
| ------------ | ------------------------------------- | -------------------------------------- |
| Background   | `#1a1b26` (deep night)                | `#f6f6fa` (soft paper)                 |
| Foreground   | `#c0caf5` (cool white)                | `#1a1b26` (ink)                        |
| Comment      | `#565f89` (muted slate)               | `#8a8fa3` (warm gray)                  |
| Keyword      | `#bb9af7` (violet)                    | `#7c3aed` (violet)                     |
| String       | `#9ece6a` (aurora green)              | `#4a7a1f` (forest)                     |
| Number       | `#ff9e64` (warm orange)               | `#c2540a` (burnt orange)               |
| Function     | `#7dcfff` (aurora cyan)               | `#0c7ea4` (deep cyan)                  |
| Type / Class | `#e0af68` (gold)                      | `#9a6f00` (amber)                      |
| Tag (HTML)   | `#f7768e` (rose)                      | `#c93b58` (rose)                       |

## Install (local)

1. Open this folder in VS Code:
   ```bash
   code D:\home\VScodeThemes
   ```
2. Press `F5` to launch an **Extension Development Host** with the theme loaded.
3. In the new window, press `Ctrl+K Ctrl+T` → pick **Aurora Dark** or **Aurora Light**.

## Install (manual)

Copy the folder into your VS Code extensions directory:

- Windows: `%USERPROFILE%\.vscode\extensions\aurora-theme-1.1.0`
- macOS:   `~/.vscode/extensions/aurora-theme-1.1.0`
- Linux:   `~/.vscode/extensions/aurora-theme-1.1.0`

Then reload VS Code (`Ctrl+R`).

## Package for marketplace

```bash
npm install -g @vscode/vsce
vsce package
```

This produces `aurora-theme-1.1.0.vsix`. Install with:

```bash
code --install-extension aurora-theme-1.1.0.vsix
```

## Project layout

```
VScodeThemes/
├── package.json
├── themes/
│   ├── aurora-dark.json
│   └── aurora-light.json
└── README.md
```

## Customize

Open `themes/aurora-dark.json` (or `aurora-light.json`) and tweak any hex value. Reload the window to preview changes. See [VS Code Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) for available UI keys.
