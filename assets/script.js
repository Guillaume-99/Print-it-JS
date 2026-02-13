
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")


const dotSelected = document.querySelector(".dot_selected")
const dots = document.querySelectorAll(".dot")
let i = 0

const banner = document.querySelector(".banner-img")
const tagLine = document.querySelector("#banner p")




/********************************************** Tableaux Slides Des Images + Tags *******************************/


const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/************************************** Carrousel Image Banner ***************************/


arrowLeft.addEventListener("click", () => {

	dots[i].classList.remove("dot_selected")

	i = (i - 1 + dots.length) % dots.length

	dots[i].classList.add("dot_selected")

	banner.setAttribute("src", "../assets/images/slideshow/" + slides[i].image)
	tagLine.innerHTML = slides[i].tagLine
})



arrowRight.addEventListener("click", () => {


	dots[i].classList.remove("dot_selected")

	i = (i + 1) % dots.length

	dots[i].classList.add("dot_selected")

	banner.setAttribute("src", "../assets/images/slideshow/" + slides[i].image)
	tagLine.innerHTML = slides[i].tagLine
})




