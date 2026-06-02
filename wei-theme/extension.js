const vscode = require('vscode');

/**
 * Wei Glass Theme — 扩展激活入口
 * 提供深色/浅色主题快速切换命令 + 首次安装提示
 */
function activate(context) {
  // ── 命令：切换到深色主题 ──
  context.subscriptions.push(
    vscode.commands.registerCommand('weiGlass.switchDark', () => {
      vscode.commands.executeCommand('workbench.action.selectTheme', 'Wei Glass');
    })
  );

  // ── 命令：切换到浅色主题 ──
  context.subscriptions.push(
    vscode.commands.registerCommand('weiGlass.switchLight', () => {
      vscode.commands.executeCommand('workbench.action.selectTheme', 'Wei Glass Light');
    })
  );

  // ── 命令：切换主题（深色/浅色循环） ──
  context.subscriptions.push(
    vscode.commands.registerCommand('weiGlass.toggleTheme', () => {
      const current = vscode.workspace.getConfiguration('workbench').get('colorTheme');
      const next = current === 'Wei Glass' ? 'Wei Glass Light' : 'Wei Glass';
      vscode.commands.executeCommand('workbench.action.selectTheme', next);
    })
  );

  // ── 命令：手动触发推荐设置引导 ──
  context.subscriptions.push(
    vscode.commands.registerCommand('weiGlass.applySetupGuide', () => {
      vscode.window.showInformationMessage(
        '✨ Wei Glass 推荐设置引导',
        '应用推荐设置', '查看壁纸', '切换主题'
      ).then(selection => {
        if (selection === '应用推荐设置') {
          applyRecommendedSettings();
        } else if (selection === '查看壁纸') {
          vscode.commands.executeCommand('weiGlass.showWallpaperTip');
        } else if (selection === '切换主题') {
          vscode.commands.executeCommand('weiGlass.toggleTheme');
        }
      });
    })
  );

  // ── 命令：打开壁纸设置提示 ──
  context.subscriptions.push(
    vscode.commands.registerCommand('weiGlass.showWallpaperTip', () => {
      vscode.window.showInformationMessage(
        'Wei Glass 主题自带玻璃拟态壁纸 (background.webp)，' +
        '建议设为桌面背景以获得完整沉浸体验。',
        '了解详情'
      ).then(selection => {
        if (selection === '了解详情') {
          vscode.env.openExternal(vscode.Uri.parse(
            'https://github.com/phoenixlucky/VScodeThemes/tree/main/wei-theme'
          ));
        }
      });
    })
  );

  // ── 首次安装提示 + 推荐配置 ──
  const showTip = vscode.workspace.getConfiguration('weiGlass').get('showWallpaperTip');
  if (showTip) {
    vscode.window.showInformationMessage(
      '✨ Wei Glass 已激活！是否应用推荐设置？（主题、字体、行高、光标等）',
      '应用推荐设置', '查看壁纸', '切换主题'
    ).then(selection => {
      if (selection === '应用推荐设置') {
        applyRecommendedSettings();
      } else if (selection === '查看壁纸') {
        vscode.commands.executeCommand('weiGlass.showWallpaperTip');
      } else if (selection === '切换主题') {
        vscode.commands.executeCommand('weiGlass.toggleTheme');
      }
    });
    vscode.workspace.getConfiguration('weiGlass').update('showWallpaperTip', false, vscode.ConfigurationTarget.Global);
  }
}

/** 应用 Wei Glass 推荐 VS Code 设置（首次安装时用户主动选择后执行） */
function applyRecommendedSettings() {
  const target = vscode.ConfigurationTarget.Global;
  const config = vscode.workspace.getConfiguration();

  const settings = {
    // ═══ 主题 ═══
    'workbench.colorTheme': 'Wei Glass',
    'workbench.iconTheme': 'material-icon-theme',
    'workbench.productIconTheme': 'material-product-icons',

    // ═══ 排版 ═══
    'editor.fontFamily': "'Fira Code', 'JetBrains Mono', 'Cascadia Code', monospace",
    'editor.fontSize': 15,
    'editor.fontWeight': '450',
    'editor.fontLigatures': true,
    'editor.lineHeight': 1.4,
    'editor.letterSpacing': 0.5,

    // ═══ 光标 & 动画 ═══
    'editor.cursorBlinking': 'expand',
    'editor.cursorSmoothCaretAnimation': 'on',
    'editor.cursorWidth': 2,
    'editor.smoothScrolling': true,
    'workbench.list.smoothScrolling': true,

    // ═══ 窗口 ═══
    'window.titleBarStyle': 'custom',
    'window.commandCenter': true,

    // ═══ 括号 & 缩进指引 ═══
    'editor.guides.bracketPairs': true,
    'editor.guides.indentation': true,
    'editor.guides.highlightActiveIndentation': true,
    'editor.bracketPairColorization.enabled': true,
    'editor.bracketPairColorization.independentColorPoolPerBracketType': true,

    // ═══ 缩略图 ═══
    'editor.minimap.enabled': false,
    'editor.minimap.renderCharacters': false,

    // ═══ 编辑器辅助 ═══
    'editor.renderWhitespace': 'boundary',
    'editor.renderLineHighlight': 'all',
    'editor.stickyScroll.enabled': true,
    'editor.stickyScroll.maxLineCount': 3,

    // ═══ 美化增强（玻璃拟态气质） ═══
    'editor.padding.top': 16,           // 顶部留白，增加呼吸感
    'editor.padding.bottom': 16,        // 底部留白
    'editor.roundedSelection': true,    // 选中区域圆角，更贴合磨砂玻璃风格
    'editor.mouseWheelZoom': true,      // 按住 Ctrl 滚轮缩放

    // ═══ 终端 ═══
    'terminal.integrated.fontFamily': "'Fira Code', 'JetBrains Mono', monospace",
    'terminal.integrated.fontSize': 14,
    'terminal.integrated.lineHeight': 1.3,
    'terminal.integrated.cursorBlinking': true,
    'terminal.integrated.cursorStyle': 'line',
  };

  for (const [key, value] of Object.entries(settings)) {
    config.update(key, value, target);
  }

  vscode.window.showInformationMessage('✅ Wei Glass 推荐设置已应用！重载窗口后生效。');
}

function deactivate() {}

module.exports = { activate, deactivate };
