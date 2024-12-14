// - to check if it's a valid GitHub repository page
function isGitHubRepoPage() {
  return (
    window.location.hostname === "github.com" &&
    window.location.pathname.split("/").length >= 3 &&
    window.location.pathname.split("/")[1] &&
    window.location.pathname.split("/")[2]
  );
}

// - generate VSCode link
function getVSCodeLink() {
  const repoOwner = window.location.pathname.split("/")[1];
  const repoName = window.location.pathname.split("/")[2];
  return `vscode://vscode.git/clone?url=https://github.com/${repoOwner}/${repoName}.git`;
}

function injectOpenInVSCodeButton() {
  try {
    if (isGitHubRepoPage()) {
      const vscodeLink = getVSCodeLink();

      // - Avoid duplicate button injection
      if (!document.getElementById("open-in-vscode-button")) {
        const button = document.createElement("a");
        button.id = "open-in-vscode-button";
        button.title = "Open in VSCode";
        button.innerHTML = `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;filter:url(#Adobe_OpacityMaskFilter);} .st1{mask:url(#mask0_1_);} .st2{fill:#0065A9;} .st3{fill:#007ACC;} .st4{fill:#1F9CF0;} .st5{opacity:0.25;} .st6{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_);}</style><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-0.16" y="0.66" width="256.16" height="254.68"><feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-0.16" y="0.66" width="256.16" height="254.68" id="mask0_1_"><path class="st0" d="M181.53,254.25c4.03,1.57,8.63,1.47,12.7-0.49l52.71-25.36c5.54-2.66,9.06-8.27,9.06-14.42V42.02 c0-6.15-3.52-11.75-9.06-14.42L194.23,2.24c-5.34-2.57-11.59-1.94-16.28,1.47c-0.67,0.49-1.31,1.03-1.91,1.63L75.15,97.39 L31.2,64.02c-4.09-3.11-9.81-2.85-13.61,0.61L3.49,77.45c-4.65,4.23-4.65,11.54-0.01,15.77L41.59,128L3.48,162.77 c-4.64,4.24-4.64,11.55,0.01,15.78l14.1,12.82c3.8,3.46,9.52,3.71,13.61,0.61l43.95-33.36l100.9,92.05 C177.65,252.26,179.52,253.47,181.53,254.25z M192.04,69.89L115.48,128l76.56,58.12V69.89z"/></mask><g class="st1"><path class="st2" d="M246.94,27.64l-52.75-25.4c-6.1-2.94-13.4-1.7-18.19,3.09L3.32,162.77c-4.64,4.24-4.64,11.55,0.01,15.78 l14.1,12.82c3.8,3.46,9.53,3.71,13.62,0.61L239,34.23c6.98-5.29,17-0.32,17,8.44v-0.61C256,35.91,252.48,30.3,246.94,27.64z"/><g><path class="st3" d="M246.94,228.36l-52.75,25.4c-6.1,2.94-13.4,1.7-18.19-3.09L3.32,93.23c-4.64-4.23-4.64-11.55,0.01-15.77 l14.1-12.82c3.8-3.46,9.53-3.71,13.62-0.61L239,221.77c6.98,5.29,17,0.32,17-8.44v0.61C256,220.09,252.48,225.7,246.94,228.36z"/></g><g><path class="st4" d="M194.2,253.76c-6.11,2.94-13.4,1.7-18.2-3.1c5.9,5.9,16,1.72,16-6.63V11.96c0-8.35-10.1-12.53-16-6.63 c4.79-4.79,12.09-6.03,18.2-3.1l52.74,25.36c5.54,2.67,9.07,8.27,9.07,14.42v171.97c0,6.15-3.52,11.75-9.07,14.42L194.2,253.76z"/></g><g class="st5"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="127.8439" y1="257.34" x2="127.8439" y2="2.6598" gradientTransform="matrix(1 0 0 -1 0 258)"><stop offset="0" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient><path class="st6" d="M181.38,254.25c4.03,1.57,8.63,1.47,12.7-0.49l52.71-25.36c5.54-2.66,9.06-8.27,9.06-14.42V42.02 c0-6.15-3.52-11.75-9.06-14.42L194.08,2.24c-5.34-2.57-11.59-1.94-16.28,1.47c-0.67,0.49-1.31,1.03-1.91,1.63L74.99,97.39 L31.04,64.02c-4.09-3.11-9.81-2.85-13.61,0.61L3.33,77.45c-4.65,4.23-4.65,11.54-0.01,15.78L41.44,128L3.32,162.77 c-4.64,4.24-4.64,11.55,0.01,15.78l14.1,12.82c3.8,3.46,9.52,3.71,13.61,0.61l43.95-33.36l100.9,92.05 C177.49,252.26,179.36,253.47,181.38,254.25z M191.88,69.89L115.32,128l76.56,58.12V69.89z"/></g></g></svg> <p>Open</p>`;
        button.href = vscodeLink;
        button.classList.add("btn", "btn-sm", "btn-primary");
        button.style.cursor = "pointer";

        // -
        const actionContainer = document.querySelector("ul.pagehead-actions");
        if (actionContainer) {
          const li = document.createElement("li");
          li.appendChild(button);
          actionContainer.appendChild(li);
        } else {
          console.error("Could not find the container to inject the button.");
        }
      }
    }
  } catch (error) {
    console.error("Error injecting Open in VSCode button:", error);
  }
}

// - Inject on page load
window.addEventListener("load", injectOpenInVSCodeButton);

// - Re-inject if GitHub uses PJAX for navigation
document.addEventListener("pjax:end", injectOpenInVSCodeButton);