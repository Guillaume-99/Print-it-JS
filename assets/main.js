/************************************** Carrousel Image Banner ***************************/

for (let i = 0; i < slides.length; i++) {

    const dot = document.createElement("div")
    dot.classList.add("dot")

    if (i === 0) {
        dot.classList.add("dot_selected")
    }

    dots.appendChild(dot)
}

const dotElements = document.querySelectorAll(".dot")



arrowLeft.addEventListener("click", () => {

    dotElements[i].classList.remove("dot_selected")

    if (i === 0) {
        i = slides.length - 1
    } else {
        i = i - 1
    }

    dotElements[i].classList.add("dot_selected")

    banner.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)

    tagLine.innerHTML = slides[i].tagLine

})



arrowRight.addEventListener("click", () => {

    dotElements[i].classList.remove("dot_selected")

    if (i === slides.length - 1) {
        i = 0
    } else {
        i = i + 1
    }

    dotElements[i].classList.add("dot_selected")


    banner.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)

    tagLine.innerHTML = slides[i].tagLine
})