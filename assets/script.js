const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

const dotSelected = document.querySelector(".dot_selected")
const dots = document.querySelectorAll(".dot")
let currentIndex = 0
let i = currentIndex


const back = arrowLeft.addEventListener("click", () => {

	dots[i].classList.remove("dot_selected")

	i = (i - 1 + dots.length) % dots.length

	dots[i].classList.add("dot_selected")

})



arrowRight.addEventListener("click", (event) => {


	dots[i].classList.remove("dot_selected")

	i = (i + 1) % dots.length

	dots[i].classList.add("dot_selected")
})

const banner = document.querySelector(".banner-img")
const slides2 = document.querySelector(".slides2")
const slides3 = document.querySelector(".slides3")
const slides4 = document.querySelector(".slides4")


// const slides2Img = ` <img src = "./images/slideshow/slide2.jpg" alt = "tirage HD grand format"> `
// slides2.innerHTML = slides2Img



function dotSlide() {
	if (next) {

	}
}


function slides() {
	if (next) {
		for (i = 1; i < 4; i++) {
			let slideIMG = ` <img src = "./images/slideshow/slide2.jpg" alt = "tirage HD grand format"> `
			banner = slideIMG
			slideImg
			i++
		}
	}
}





// const slides = [
// 	{
// 		"image": "slide1.jpg",
// 		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image": "slide2.jpg",
// 		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image": "slide3.jpg",
// 		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image": "slide4.png",
// 		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]
