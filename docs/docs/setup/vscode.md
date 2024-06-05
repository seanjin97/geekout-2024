---
sidebar_position: 2
---

# Visual Studio Code

Visual Studio Code (VS Code) is a popular and powerful code editor that provides a great development experience for various programming languages. In this guide, we'll walk you through the steps to install VS Code on macOS and Windows.

## Installing VS Code on macOS

1. Visit the official Visual Studio Code website: [https://code.visualstudio.com](https://code.visualstudio.com)
2. Click on the "Download for Mac" button.
3. Once the download is complete, open the ZIP file.
4. Drag the Visual Studio Code application to your Applications folder.
5. Open VS Code from the Applications folder or use Spotlight search to launch it.

## Installing VS Code on Windows

1. Visit the official Visual Studio Code website: [https://code.visualstudio.com](https://code.visualstudio.com)
2. Click on the "Download for Windows" button.
3. Once the download is complete, run the installer.
4. Follow the installation wizard, accepting the default options or customizing as desired.
5. I personally tick everything
   
   ![img.png](images/wizard.png)
6. After the installation is finished, VS Code will launch automatically.

## Configuring VS Code (Everything below is optional)

After installing VS Code, you can customize it to suit your preferences and development needs. Here are a few common configurations:

Nice looking coding tools = nice code it makes sense.
### Installing Extensions

VS Code has a vast marketplace of extensions that enhance its functionality. To install an extension:

1. Click on the Extensions icon in the Activity Bar on the left side of the VS Code window.
2. Search for the desired extension in the search bar.
3. Click on the "Install" button next to the extension you want to install.
4. Restart VS Code if prompted.

Some popular extensions include:

- Prettier - Code formatter
- ESLint - JavaScript linter
- GitLens - Git supercharged
- Live Server - Launch a local development server

### Changing the Theme

VS Code comes with a default light theme, but you can switch to a dark theme or install custom themes from the marketplace. To change the theme:

1. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (macOS).
2. Type "Preferences: Color Theme" and select it from the list.
3. Choose your desired theme from the options.

### Configuring Settings

VS Code allows you to customize various settings to match your preferences. To modify the settings:

1. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (macOS).
2. Type "Preferences: Open Settings (JSON)" and select it from the list.
3. Modify the desired settings in the `settings.json` file.

Some common settings include:

```json
{
 "editor.fontSize": 14,
 "editor.tabSize": 2,
 "editor.formatOnSave": true,
 "files.autoSave": "onFocusChange"
}
