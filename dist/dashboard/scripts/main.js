import initDarkode from './darkmode.js'

initDarkode()

const main = document.querySelector("main")
const backButton = document.querySelector("#back-button")
const header = document.querySelector("header")

document.querySelector("#manage-devices-button").addEventListener('click', ev => {
    main.style.marginLeft = 0
    backButton.style.top = 0
    header.textContent = "Manage Devices"
})

document.querySelector("#all-settings-button").addEventListener('click', ev => {
    main.style.marginLeft = "-200vw"
    backButton.style.top = 0
    header.textContent = "Settings"
})

backButton.addEventListener('click', ev => {
    main.style.marginLeft = "-100vw"
    backButton.style.top = "10vh"
    header.textContent = "LibreCast Dev (Plc.Hldr.)"
})
