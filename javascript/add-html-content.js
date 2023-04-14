// add html content to target
async function addHTMLContent(target, content) {
    const response = await fetch(content);
    const html = await response.text();
    document.querySelector(target).insertAdjacentHTML("afterbegin", html);
}

// add header from file
async function addHeader() {
    await addHTMLContent("header", "./resources/components/header.html");
    initializeTheme();
};
