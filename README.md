# QuitBlock 🛡️

**QuitBlock** is a lightweight VS Code extension designed to prevent accidental application exits. It intercepts the "Quit" command (e.g., `Cmd+Q` on macOS) and prompts you with a confirmation menu, giving you a chance to save your flow.

## ✨ Features

- **Accidental Exit Prevention**: Never lose your unsaved work or window state by accidentally hitting the quit shortcut.
- **Smart Options**:
  - **Quit**: Confirms and exits the entire application.
  - **Close current window**: Closes only the active VS Code window while keeping others open.
  - **Cancel**: Dismisses the prompt and returns to your code.
- **System Integration**: Replaces the default `Cmd+Q` behavior seamlessly on macOS.

## 🚀 How to Use

Simply use your usual quit shortcut (`Cmd+Q` on Mac) or window/editor close shortcuts (`Cmd+Shift+W`, `Cmd+W` on Mac), or run the command **"QuitBlock: Quit"** from the Command Palette (`Cmd+Shift+P`).



## 🛠️ Configuration

You can customize the keybinding in VS Code's **Keyboard Shortcuts** by searching for `quitblock.quit`.

## 📦 Installation

1. Open **VS Code**.
2. Go to the **Extensions** view (`Cmd+Shift+X`).
3. Search for **QuitBlock**.
4. Click **Install**.

---

Developed with ❤️ by [brunobrise](https://github.com/brunobrise)
