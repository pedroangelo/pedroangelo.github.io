// define all possible themes
let themeList = ["default", "light", "dark"];

// switch to theme
function switchToTheme(theme) {
    // change local storage entry
    localStorage.setItem("current-theme", theme + "-theme");
    // get theme-picker div element
    let themePicker = document.querySelector("div#theme-picker");
    // get toggle-theme button element
    let toggleThemeButton = themePicker.querySelector("button.toggle-theme");
    // get theme-options div element
    let themeOptions = themePicker.querySelector("div.theme-options");
    // change body's class
    for (let i = 0; i < themeList.length; i++) {
	document.body.classList.remove(themeList[i] + "-theme");
    }
    document.body.classList.add(theme + "-theme");
}

// toggle between themes
function toggleTheme() {
    switch (localStorage.getItem("current-theme")) {
    case "default-theme" :
	switchToTheme("light");
	break;
    case "light-theme" :
	switchToTheme("dark");
	break;
    case "dark-theme" :
	switchToTheme("default");
	break;
    }
}

// initialize theme by remembering preferences
function initializeTheme() {
    // check local storage for theme preferences
    if (localStorage.getItem("current-theme") === null) {
	switchToTheme("default");
    } else {
	switch (localStorage.getItem("current-theme")) {
	case "default-theme" :
	    switchToTheme("default");
	    break;
	case "light-theme" :
	    switchToTheme("light");
	    break;
	case "dark-theme" :
	    switchToTheme("dark");
	    break;
	}
    }
}


// NOT USED

// add theme-options buttons
function addThemeOptionsButtons() {
    // get theme-picker div element
    let themePicker = document.querySelector("div#theme-picker");
    // get theme-options div element
    let themeOptions = themePicker.querySelector("div.theme-options");
    // change theme options
    let themeOptionsHTML = "";
    // add HTML code for a button for each theme
    for (let i = 0; i < themeList.length; i++) {
	    themeOptionsHTML = themeOptionsHTML + "<button class=\"pick-theme\" onclick=\"switchToTheme(\'" + themeList[i] + "\')\">" + themeList[i] + "</button>";
    }
    // add code to theme-options
    themeOptions.innerHTML = themeOptionsHTML;
}
