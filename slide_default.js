var image = document.getElementById('slide_default_image_link');

function changeImage(url) {
	image.innerHTML = '<img src="./slide_default/' + url + '" class="slide-default-image">';
}