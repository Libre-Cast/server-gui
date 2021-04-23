const root = document.documentElement
const darkThemeSwitch = document.querySelector("#dark-theme")

function setDarkmode(condition) {
    if (condition) {
        root.style.setProperty('--surface', "#222222")
        root.style.setProperty('--shadow', "#111111b2")
        root.style.setProperty('--text', "#ddd")

        localStorage.setItem("theme", "dark")
        darkThemeSwitch.checked = true
    } else {
        root.style.setProperty('--surface', "#fafafa")
        root.style.setProperty('--shadow', "#4F9CEF35")
        root.style.setProperty('--text', "#4d4d4d")

        localStorage.setItem("theme", "light")
        darkThemeSwitch.checked = false
    }
}

setDarkmode(localStorage.getItem("theme") === "dark")

export default function initDarkmode() {
    darkThemeSwitch.addEventListener("change", ev => setDarkmode(darkThemeSwitch.checked))
}