/* switch to dark theme */
function switchToDarkTheme() {
    /* change local storage entry */
    localStorage.setItem("current-theme", "dark-theme");
    /* change theme indication */
    document.getElementById("toggle-theme").innerHTML = "dark";
    /* change body's class */
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
}

function switchToLightTheme() {
    /* change local storage entry */
    localStorage.setItem("current-theme", "light-theme");
    /* change theme indication */
    document.getElementById("toggle-theme").innerHTML = "light";
    /* change body's class */
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
}

/* toggle between themes */
function toggleTheme() {
    switch (localStorage.getItem("current-theme")) {
    case "light-theme" :
	switchToDarkTheme();
	break;
    case "dark-theme" :
	switchToLightTheme();
	break;
    }
}

/* initialize theme by remembering preferences */
function initializeTheme() {
    /* check local storage for theme preferences */
    if (localStorage.getItem("current-theme") === null) {
	switchToLightTheme();
    } else {
	switch (localStorage.getItem("current-theme")) {
	case "light-theme" :
	    switchToLightTheme();
	    break;
	case "dark-theme" :
	    switchToDarkTheme();
	    break;
	}
    }
}
