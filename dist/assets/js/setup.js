import { select } from './lib/select.js'

let scrolledSections = 0
function scrollToNextSection() {
    ++scrolledSections
    select("body").style.marginTop = `-${scrolledSections * 100}vh`
}

select("#start").addEventListener("click", ev => scrollToNextSection())

select("#welcome button").addEventListener("click", ev => scrollToNextSection())

select("#connect").addEventListener("click", ev => scrollToNextSection())

select("#accept-device").addEventListener("click", ev => scrollToNextSection())
select("#decline-device").addEventListener("click", ev => {
    scrolledSections -= 2
    scrollToNextSection()
})

select("#device-added button").addEventListener("click", ev => document.location.href = "/dashboard/index.html")
