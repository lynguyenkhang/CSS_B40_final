var name_artist = document.getElementById('name_artist');
var link_image = document.getElementById('link_image');


// mouseover artist-image will change singer's picture and name
function changeSingerName(name,image) {
	name_artist.innerHTML = name;
	link_image.innerHTML = '<img class="trend-artist-image" src="./trend_artist_image/' + image + '">'
}