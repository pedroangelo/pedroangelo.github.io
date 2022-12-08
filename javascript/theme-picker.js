// define all possible themes
let themeList = ["default", "light", "dark"];

// get icon code corresponding to theme
function getIconCode(theme) {
    switch (theme) {
    case "default" :
	return "brightness_6";
	break;
    case "light" :
	return "brightness_high";
	break;
    case "dark" :
	return "brightness_4";
	break;
    }
}

// switch to theme
function switchToTheme(theme) {
    // change local storage entry
    localStorage.setItem("current-theme", theme + "-theme");
    
    // remove theme class in body
    for (let i = 0; i < themeList.length; i++) {
	document.body.classList.remove(themeList[i] + "-theme");
    }
    // add correct theme class
    document.body.classList.add(theme + "-theme");

    // get theme-picker div element
    let themePicker = document.querySelector("div#theme-picker");
    // get theme icon element inside theme button
    let themeButtonIcon = themePicker.querySelector("button.theme-button span.theme-icon");
    // change theme button icon
    themeButtonIcon.innerHTML = getIconCode(theme);
    // remove class active from all pic-theme button
    let pickThemeButtons = themePicker.querySelectorAll("div.theme-options button.pick-theme");
    for (let i = 0; i < pickThemeButtons.length; i++) {
	pickThemeButtons[i].classList.remove("active");
    }
    // add class active to pick-theme button
    themePicker.querySelector("div.theme-options button.pick-" + theme).classList.add("active");
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
