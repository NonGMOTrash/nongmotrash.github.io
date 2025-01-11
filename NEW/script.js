// scroll indicator

var hasScrolled = false;

window.onscroll = function()
{
	hasScrolled = true;
	document.getElementById('scroll-indicator').style.display = "none";
}

setTimeout(
	function()
	{
		if (!hasScrolled)
		{
			document.getElementById('scroll-indicator').style.display = "block";
		}
	},
	10000
);

// chattable

var chattableCSS = `

:root {
	--notification-sfx: url("https://files.catbox.moe/fswekd.wav");
}

@font-face {
	font-family: caskaydiaCove;
	src: url("https://files.catbox.moe/crddlv.woff2");
}

body {
	font-family: caskaydiaCove;
	font-size: 16px;
	background: black;
	color: white;
}

.allMessages {
	border: solid 1px gray;
	border-left, border-right: solid 2px gray;
	/*border-bottom: 0;*/
}

#top_banner {
	background: orange;
	font-family: caskaydiaCove;
}

#timestamp {
	height: 1em;
	width: 30%;
	margin: 0;
	margin-left: auto;
	border: 1px solid gray;
}

#input {
	border: 3px solid gray;
	border-radius: 0;
	background: black;
	color: white;
}

#input:empty::before {
	color: gray;
	content: "meow";
}


`

window.addEventListener("load", function() {
	document.getElementById("chattable").contentWindow.postMessage(chattableCSS, "*");
});
