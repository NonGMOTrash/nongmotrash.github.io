var categoryBlocks;

document.addEventListener("DOMContentLoaded", function(){
	categoryBlocks = document.getElementsByClassName("category-block");
	ShowCategory("adhd");
});


function ShowCategory(category)
{
	for (let i = 0; i < categoryBlocks.length; i++)
	{
		categoryBlocks.item(i).style.display = "none";
	}

	document.getElementById(category).style.display = "block";
}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '300',
		width: '300',
		videoId: '',
		playerVars: {
			'playsinline': 1
		}/*,
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}*/
	});
}

// function onPlayerReady(event) {
// 	event.target.playVideo();
// }

// function onPlayerStateChange(event) {
// 	console.log(player.getVideoUrl());
// }

function playSong(ID) {
	document.getElementById("player-holder").style.opacity = 100;
	player.loadVideoById(ID, 0);
	player.playVideo();
}

// bg scorlling

var o = 0;
setInterval(function() {
	o += 4;
	document.body.style.backgroundPosition = o + "px " + o + "px";
}, 2000/60);
