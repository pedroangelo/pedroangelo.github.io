function toggleDarkMode() {
if (document.body.classList.contains("light-mode")) {
    document.getElementById("toggle-dark-mode").innerHTML = "light";
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
} else {
    document.getElementById("toggle-dark-mode").innerHTML = "dark";
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode"); }
}
