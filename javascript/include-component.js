// include component html code in target html element
async function includeComponent(target, path) {
    // fetch html component from its path
    const response = await fetch(path);
    // get html code from fetch response
    const html = await response.text();
    // insert component html code into target
    document.querySelector(target).insertAdjacentHTML("afterbegin", html);
}

function activateNavbarButton() {
    // get page url
    var pageUrl = window.location.href;
    // get path from root to pages
    var pageUrlComponents = pageUrl.split('/');
    pageUrlComponents.pop();
    // remove elements until pages
    pageUrlComponents.splice(0, pageUrlComponents.indexOf("pages"));
    var activeUrl = ["/"].concat(pageUrlComponents.join('/')).join('');
    // change class to active
    document.querySelector("header nav.navbar").querySelector("a[href='" + activeUrl + "']").classList.add("active");
}

// add header from file
async function includeHeader() {
    await includeComponent("header", "/resources/components/header.html");
    activateNavbarButton();
    initializeTheme();
};
