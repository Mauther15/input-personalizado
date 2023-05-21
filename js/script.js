const btn = document.querySelector("#btn")
const crosshair = document.querySelector(".input")

function chamarAlert() {
    if (crosshair.checked == true) {
        alert('teste')
    } else {
        crosshair.checked == false
    }
}

btn.addEventListener('click', chamarAlert)