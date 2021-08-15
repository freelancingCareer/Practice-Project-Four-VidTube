// for Menu icon area

var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var sideBarVideo = document.querySelector(".sidebar-video");
var container = document.querySelector(".container");

menuIcon.onclick = function () {
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
	sideBarVideo.classList.toggle("sidebar-video-active");

}


// page scroll
const head = document.querySelector('.header');
let preScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
	let currentScroll = window.pageYOffset;
	
	if (preScroll < currentScroll) {
		head.classList.add('hide');
	}
	
	else {
		head.classList.remove('hide');
	}
	
	preScroll = currentScroll;
});


// Page loader

var loader = document.getElementById('preloader');

function myload() {
	
	setTimeout(function() {
		loader.style.display = "none";
	}, 1500);
	
	
}