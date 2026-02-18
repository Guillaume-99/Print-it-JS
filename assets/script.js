
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")


const dots = document.querySelector(".dots")

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


function createDot() {
	// Creation des dots
	//parcourir les images dans le tableau sliders

	//pour chaque élément du tableau, créer un dot
	//inserer les dots dans le DOM

	for (let i = 0; i < slides.length; i++) {

		const dot = document.createElement("div")
		dot.classList.add("dot")

		if (i === 0) {
			dot.classList.add("dot_selected")
		}

		dots.appendChild(dot)
	}
}

/************************************** Carrousel Image Banner ***************************/



function back() {

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
	}

	)
}

function next() {

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
	}
	)
}

function navCarousel() {

	back()
	next()
}


// Logique a executer apres chargement de la page

function init() {
	createDot()
	navCarousel()
}
init()
const dotElements = document.querySelectorAll(".dot")