if (window.location.href.startsWith("https://github.com/")) {
  const repoName = window.location.pathname.split("/").slice(1, 3).join("/");

  const liElement = document.createElement("li");

  const button = document.createElement("button");
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize">
      <path d="M8 3H5a2 2 0 0 0-2 2v3"/>
      <path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
      <path d="M3 16v3a2 2 0 0 0 2 2h3"/>
      <path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
    </svg>
  `;
  button.setAttribute("title", "Open in Editor");
  button.classList.add("expand-btn");

  button.addEventListener("click", () => {
    const editorURL = `https://github1s.com/${repoName}`;

    const iFrame = document.createElement("iframe");
    iFrame.src = editorURL;
    iFrame.classList.add("editor-iframe");

    const closeButton = document.createElement("button");

    closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
    closeButton.classList.add("close-editor-btn");

    document.body.appendChild(iFrame);
    document.body.appendChild(closeButton);

    closeButton.addEventListener("click", () => {
      document.body.removeChild(iFrame);
      document.body.removeChild(closeButton);
    });
  });

  liElement.appendChild(button);

  const actionsContainer = document.querySelector(".pagehead-actions");

  if (actionsContainer) {
    actionsContainer.appendChild(liElement);
  }
}
