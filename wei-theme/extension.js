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
      showSetupPicker('✨ Wei Glass 推荐设置引导');
    })
  );

  // ── 命令：打开壁纸设置提示 ──
  context.subscriptions.push(
    vscode.commands.registerCommand('weiGlass.showWallpaperTip', () => {
      showWallpaperTip();
    })
  );

  // ── 首次安装提示 + 推荐配置 ──
  const showTip = vscode.workspace.getConfiguration('weiGlass').get('showWallpaperTip');
  if (showTip) {
    showSetupPicker('✨ Wei Glass 已激活！是否应用推荐设置？');
    vscode.workspace.getConfiguration('weiGlass').update('showWallpaperTip', false, vscode.ConfigurationTarget.Global);
  }
}

/** 居中拾取面板：选择要执行的操作 */
async function showSetupPicker(title) {
  const choice = await vscode.window.showQuickPick(
    [
      { label: '✅ 应用推荐设置', description: '写入 27 项配置（主题/字体/光标/终端/美化）' },
      { label: '🖼️ 查看壁纸', description: '了解玻璃拟态壁纸安装方式' },
      { label: '🔄 切换主题', description: '深色/浅色一键切换' },
    ],
    {
      title: title,
      placeHolder: '选择要执行的操作…',
      ignoreFocusOut: false,
    }
  );
  if (!choice) return;

  if (choice.label.includes('应用推荐设置')) {
    await applyRecommendedSettings();
  } else if (choice.label.includes('壁纸')) {
    showWallpaperTip();
  } else if (choice.label.includes('切换主题')) {
    vscode.commands.executeCommand('weiGlass.toggleTheme');
  }
}

/** 显示壁纸说明 */
async function showWallpaperTip() {
  const choice = await vscode.window.showQuickPick(
    [
      { label: '🌐 了解详情', description: '在浏览器中打开壁纸说明页面' },
    ],
    {
      title: 'Wei Glass 自带玻璃拟态壁纸 (background.webp)，建议设为桌面背景以获得完整沉浸体验。',
      placeHolder: '选择操作…',
      ignoreFocusOut: false,
    }
  );
  if (choice?.label.includes('了解详情')) {
    vscode.env.openExternal(vscode.Uri.parse(
      'https://github.com/phoenixlucky/VScodeThemes/tree/main/wei-theme'
    ));
  }
}

/** 应用 Wei Glass 推荐 VS Code 设置（首次安装时用户主动选择后执行） */
async function applyRecommendedSettings() {
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

  try {
    for (const [key, value] of Object.entries(settings)) {
      await config.update(key, value, target);
    }
    await vscode.window.showQuickPick(
      [{ label: '✅ 已应用！重载窗口后生效', description: '按 Ctrl+R 或 Cmd+R 重载以查看完整效果' }],
      { title: 'Wei Glass 推荐设置已写入 27 项配置', placeHolder: '已就绪，重载后生效', ignoreFocusOut: true }
    );
  } catch (err) {
    vscode.window.showErrorMessage('❌ 部分设置写入失败，请查看控制台日志。');
    console.error('[Wei Glass] applyRecommendedSettings 错误:', err);
  }
}

function deactivate() {}

module.exports = { activate, deactivate };
