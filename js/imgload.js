
// Set image to background of the DIV. Calculate the height of the image and set it to DIV.
function changeImage(imgPath) {
	document.getElementById('mockup').style.backgroundImage = 'url(' + imgPath + ')';
	var img = new Image();
	img.src = imgPath;
	img.onload = function() {
		document.getElementById('mockup').style.height = img.height;
	};
}

// Change images according to media queries set in array.
function screenSize(imagesData) {
	for (var i = imagesData.length - 1; i >= 0; i--) {
		if (window.matchMedia(imagesData[i][0]).matches) {
			changeImage(imagesData[i][1]);
		}
	};
};

window.onload = function() {
	screenSize(imagesData);
};
window.onresize = function() {
	screenSize(imagesData);
};