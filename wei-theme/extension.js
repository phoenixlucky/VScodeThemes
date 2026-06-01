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
            'https://github.com/phoenixlucky/VScodeThemes/tree/main/wei-theme-1.1.0'
          ));
        }
      });
    })
  );

  // ── 首次安装提示 ──
  const showTip = vscode.workspace.getConfiguration('weiGlass').get('showWallpaperTip');
  if (showTip) {
    vscode.window.showInformationMessage(
      '✨ Wei Glass 已激活！试试 命令面板 → Wei Glass 查看所有功能。',
      '查看壁纸', '切换主题'
    ).then(selection => {
      if (selection === '查看壁纸') {
        vscode.commands.executeCommand('weiGlass.showWallpaperTip');
      } else if (selection === '切换主题') {
        vscode.commands.executeCommand('weiGlass.toggleTheme');
      }
    });
    vscode.workspace.getConfiguration('weiGlass').update('showWallpaperTip', false, vscode.ConfigurationTarget.Global);
  }
}

function deactivate() {}

module.exports = { activate, deactivate };
