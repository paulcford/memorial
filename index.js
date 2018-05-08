
var num = 12;

var load = 0;
 
window.onload = function(){
	var slideshows = document.querySelector('.image__wrapper');
	if (slideshows) {
		createFlickity();
	}
};

function createFlickity(){
	var elem = ".slideshow-" + load;
	var children = document.querySelector(elem).children;
	var childrenArray = [...children];
	childrenArray.forEach(function(slide){
		slide.setAttribute('src', slide.dataset.src);
	});
	imagesLoaded(document.querySelector(elem), function(){
		document.querySelector(elem).style.display = "block";
		var test = new Flickity ( elem, {
			cellSelector: ".slide",
			wrapAround: true,
			cellAlign: "center",
			fullscreen: true,
			autoPlay: 3500,
			pageDots: false,
			lazyLoad: 2,
			imagesLoaded: true,
			on: {
				ready: function() {
					console.log("Flickity ready: " + load);
					if (load < num) {
						load++;
						createFlickity()
					}else{
						document.querySelector('.loading').style.display = 'none';
					}
				}
			}
		});
	});
}