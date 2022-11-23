/* switch to default theme */
function switchToDefaultTheme() {
    /* change local storage entry */
    localStorage.setItem("current-theme", "default-theme");
    /* change theme indication */
    document.getElementById("toggle-theme").innerHTML = "default";
    /* change body's class */
    document.body.classList.add("default-theme");
    document.body.classList.remove("light-theme", "dark-theme");
}

/* switch to light theme */
function switchToLightTheme() {
    /* change local storage entry */
    localStorage.setItem("current-theme", "light-theme");
    /* change theme indication */
    document.getElementById("toggle-theme").innerHTML = "light";
    /* change body's class */
    document.body.classList.add("light-theme");
    document.body.classList.remove("default-theme", "dark-theme");
}

/* switch to dark theme */
function switchToDarkTheme() {
    /* change local storage entry */
    localStorage.setItem("current-theme", "dark-theme");
    /* change theme indication */
    document.getElementById("toggle-theme").innerHTML = "dark";
    /* change body's class */
    document.body.classList.add("dark-theme");
    document.body.classList.remove("default-theme", "light-theme");
}

/* toggle between themes */
function toggleTheme() {
    switch (localStorage.getItem("current-theme")) {
    case "default-theme" :
	switchToLightTheme();
	break;
    case "light-theme" :
	switchToDarkTheme();
	break;
    case "dark-theme" :
	switchToDefaultTheme();
	break;
    }
}

/* initialize theme by remembering preferences */
function initializeTheme() {
    /* check local storage for theme preferences */
    if (localStorage.getItem("current-theme") === null) {
	switchToDefaultTheme();
    } else {
	switch (localStorage.getItem("current-theme")) {
	case "default-theme" :
	    switchToDefaultTheme();
	    break;
	case "light-theme" :
	    switchToLightTheme();
	    break;
	case "dark-theme" :
	    switchToDarkTheme();
	    break;
	}
    }
}
