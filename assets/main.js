/************************************** Carrousel Image Banner ***************************/


arrowLeft.addEventListener("click", () => {

    dots[i].classList.remove("dot_selected")

    if (i === 0) {
        i = dots.length - 1
    } else {
        i = i - 1
    }

    dots[i].classList.add("dot_selected")

    banner.setAttribute("src", "../assets/images/slideshow/" + slides[i].image)
    tagLine.innerHTML = slides[i].tagLine

})



arrowRight.addEventListener("click", () => {

    dots[i].classList.remove("dot_selected")

    if (i === 3) {
        i = 0
    } else {
        i = i + 1
    }

    dots[i].classList.add("dot_selected")

    banner.setAttribute("src", "../assets/images/slideshow/" + slides[i].image)
    tagLine.innerHTML = slides[i].tagLine
})