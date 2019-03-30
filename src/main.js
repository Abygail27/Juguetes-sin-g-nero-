const dataImages = { 
    "imgCardsHome": {
				"primaria": "https://images.unsplash.com/photo-1457805552964-d90a8f9a578f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80",
				"preadolescentes": "https://images.unsplash.com/photo-1473663065522-33361623fa27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
			},
    "imgCardsProducts": {
			"fabricacion": "https://st3.depositphotos.com/7755898/19034/v/600/depositphotos_190346522-stock-video-colorful-cartoon-gears.jpg",
			"construccion": "https://i.ytimg.com/vi/mFOm2PNRB0M/maxresdefault.jpg",
			"ciencia": "http://www.mialegria.com.mx/JPGs/cat-cientifico.png",
			"robotica": "http://www.mialegria.com.mx/JPGs/cat-robotica.png",
		},
    "imgToys": [], //todos los juguetes
}

const initElements = function () {
	let sidenav = document.querySelectorAll('.sidenav');
	let carousel = document.querySelectorAll('.carousel');
	
	M.Sidenav.init(sidenav);
	M.Carousel.init(carousel);
}

document.addEventListener('DOMContentLoaded', function() {
	initElements();	
});



  
