function toggleDarkMode() {
if (document.body.classList.contains("light-mode")) {
    document.getElementById("change").innerHTML = "light mode";
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
} else {
    document.getElementById("change").innerHTML = "dark mode";
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode"); }
}
