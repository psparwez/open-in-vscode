<div align="center">

<img src="./assets/VSCode-icon.jpg" width="60">
<h1> Open in VSCode - GitHub Button Extension </h1>

A simple JavaScript script/extension that adds an **"Open in VSCode"** button <br> to GitHub repository pages. This allows users to open and clone the repository directly <br> into their **Visual Studio Code** editor with a single click.
</div>

---

## 📸 Demo Screenshots

![Demo of Open in VSCode button](https://github.com/user-attachments/assets/efd5c725-27c9-41ed-8888-0aaec7b0e206)

---

## 🚀 Features

- Automatically injects an **"Open in VSCode"** button into **GitHub repository pages**.
- Allows users to open and clone the selected repository directly in **Visual Studio Code**.
- **Works seamlessly** with GitHub's dynamic page loading (PJAX navigation).
- **Lightweight** and easy to integrate into any browser as an extension or directly as a user script.
- **Supports GitHub's standard repo pages** and **private repositories** (as long as the user is authenticated).

---



## 🛠️ Installation

### Option 1: Browser Extension

The easiest way to install this functionality is by using the browser extension. You can install the extension directly into Chrome or other Chromium-based browsers.

#### Steps to Install:
1. **Clone this repository:**
```base
git clone https://github.com/psparwez/open-in-vsode.git
```


2. **Load the extension into your browser:**
- Open Chrome (or any Chromium-based browser like Edge).
- Go to `chrome://extensions/` in the address bar.
- Enable **Developer Mode** in the top right.
- Click on **Load unpacked** and select the directory of the cloned repo.

3. **Verify the installation:**
- Navigate to any GitHub repository page (e.g., `https://github.com/{username}/{repo-name}`).
- You should now see the **"Open in VSCode"** button appear on the repository page.
- Click the button to open the repository directly in **Visual Studio Code**.

#### Notes:
- This extension works only if **Visual Studio Code** is installed on your system.
- Ensure you have authentication set up in VS Code for private repositories.

---

### Option 2: Using the Script Directly (No Extension)

If you prefer not to install the browser extension, you can use this script directly with a userscript manager like **Tampermonkey** or **Greasemonkey**.

#### Steps to Install:
1. **Install a userscript manager:**
- [Tampermonkey for Chrome](https://www.tampermonkey.net/)
- [Greasemonkey for Firefox](https://www.greasespot.net/)

2. **Create a new userscript:**
- Open the userscript manager and create a new script.
- Copy and paste the `content.js` code from this repository into the script editor.

3. **Save and Activate the Script:**
- Save the script and refresh any GitHub repository page.
- The **"Open in VSCode"** button should appear on the page.



---

## 🤝 Contributing

Feel free to fork this repository, improve the script, or add new features. Pull requests are welcome! 🚀

To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please follow the style and formatting of the existing code. If you're adding a new feature, make sure to update the documentation.

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](https://github.com/psparwez/open-in-vsode/tree/main?tab=MIT-1-ov-file) file for details.

---

## 💬 Feedback

If you encounter any issues, bugs, or have suggestions for improvements, please open an **issue** on GitHub. We value your feedback and will try to address it as soon as possible.

---


