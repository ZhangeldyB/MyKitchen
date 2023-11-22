const carousel = document.querySelector(".slide"),
firstImage = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let firstImgWidth = firstImage.clientWidth + 30;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideButtons = () =>{
	arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
	arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon =>{
	icon.addEventListener("click", () =>{
		carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
		setTimeout(() => showHideButtons(), 60);
	});
});