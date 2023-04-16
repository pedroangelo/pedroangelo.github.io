// include component html code in target html element
async function includeComponent(target, path) {
    // fetch html component from its path
    const response = await fetch(path);
    // get html code from fetch response
    const html = await response.text();
    // insert component html code into target
    document.querySelector(target).insertAdjacentHTML("afterbegin", html);
}

// add header from file
async function includeHeader() {
    await includeComponent("header", "/resources/components/header.html");
    initializeTheme();
};
