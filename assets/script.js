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

let currentSlide = 0;

const img = document.querySelector(".banner-img");
const tagline = document.querySelector("#banner > p");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

function updateSlide(index) {
	img.src = "assets/images/slideshow/" + slides[index].image;
	tagline.innerHTML = slides[index].tagLine;
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[index].classList.add("dot_selected");
}

nextBtn.addEventListener("click", function () {
	currentSlide = (currentSlide + 1) % slides.length;
	updateSlide(currentSlide);
});

prevBtn.addEventListener("click", function () {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	updateSlide(currentSlide);
});

updateSlide(currentSlide);
