document.addEventListener("DOMContentLoaded", changeMode)
document.getElementById("mode").addEventListener("click", changeMode)
var darkmode = false
function changeMode() {
    const body = document.getElementById("body")
    const modeButton = document.getElementById("change-mode-btn")
    const buttonCirc = document.getElementById("btn-circ")
    const header = document.getElementById("header")
    const date = document.getElementsByClassName("date")
    const gitIcon = document.getElementsByClassName("github-icon")
    const linkedinIcon = document.getElementsByClassName("linkedin-icon")

    if (darkmode) {
        body.style.backgroundColor = "#121212"
        body.style.color = "rgb(255, 255, 255)"
        header.style.borderColor = "rgb(207, 207, 207)"
        modeButton.style.borderColor = "rgb(255, 255, 255)"
        buttonCirc.style.right = "26px"
        buttonCirc.style.transform = "translateX(25px)"
        buttonCirc.style.filter = "invert(1)"
        linkedinIcon[0].style.filter = "invert(1)"
        
        for (i = 0; i < date.length; i++) {
            date[i].style.borderColor = "rgb(150, 150, 150)"
        }
        for (i = 0; i < gitIcon.length; i++) {
            gitIcon[i].style.filter = "invert(1)"
        }

        darkmode = false
    }
    else {
        body.style.backgroundColor = "rgb(255, 255, 255)"
        body.style.color = "rgb(0, 0, 0)"
        modeButton.style.borderColor = "rgb(0, 0, 0)"
        header.style.borderColor = "rgb(12, 12, 12)"
        buttonCirc.style.right = "61px"
        buttonCirc.style.transform = "translateX(0px)"
        buttonCirc.style.filter = "invert(0)"
        linkedinIcon[0].style.filter = "invert(0)"

        for (i = 0; i < date.length; i++) {
            date[i].style.borderColor = "rgb(90, 90, 90)"
        }
        for (i = 0; i < gitIcon.length; i++) {
            gitIcon[i].style.filter = "invert(0)"
        }

        darkmode = true
    }
}