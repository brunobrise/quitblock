import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('quitblock.quit', async () => {
    const selection = await vscode.window.showQuickPick(
      ['Quit', 'Close current window', 'Close current editor', 'Cancel'],
      { placeHolder: 'What would you like to do?' }
    );

    if (selection === 'Quit') {
      await vscode.commands.executeCommand('workbench.action.quit');
    } else if (selection === 'Close current window') {
      await vscode.commands.executeCommand('workbench.action.closeWindow');
    } else if (selection === 'Close current editor') {
      await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
    }
    // 'Cancel' explicitly does nothing
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
