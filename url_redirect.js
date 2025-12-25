let ref = Document.referrer; // the old url
if (ref === undefined || ref.length === 0)
{ // if there's no referrer, we use the current page's url as a backup
	ref = window.location.href;
}
if (ref.endsWith("index.html"))
{ // we remove the index.html at the end (if present) to normalize the url
	ref = ref.slice(ref.size, -10);
}

var page = ""; // the page to redirect to

// matching old page urls to new urls
switch(ref)
{
	case "https://nongmotrash.github.io/writing": page = "https://nongmotrash.net/writing"; break;
	case "https://nongmotrash.github.io/blog": page = "https://nongmotrash.net/writing"; break;
	case "https://nongmotrash.github.io/writing/1": page = "https://nongmotrash.net/writing/game-design/1"; break;
	case "https://nongmotrash.github.io/blog/1": page = "https://nongmotrash.net/writing/game-design/1"; break;
	case "https://nongmotrash.github.io/writing/2": page = "https://nongmotrash.net/writing/internet/1"; break;
	case "https://nongmotrash.github.io/blog/2": page = "https://nongmotrash.net/writing/internet/1"; break;
	case "https://nongmotrash.github.io/writing/3": page = "https://nongmotrash.net/game-design/2"; break;
	case "https://nongmotrash.github.io/blog/3": page = "https://nongmotrash.net/writing/internet/3"; break;
	case "https://nongmotrash.github.io/writing/4": page = "https://nongmotrash.net/introspective/1"; break;
	case "https://nongmotrash.github.io/writing/5": page = "https://nongmotrash.net/game-design/3"; break;
	case "https://nongmotrash.github.io/writing/6": page = "https://nongmotrash.net/fiction/1"; break;
	case "https://nongmotrash.github.io/writing/7": page = "https://nongmotrash.net/fiction/introspective/2"; break;
	case "https://nongmotrash.github.io/teralite": page = "https://nongmotrash.net/games/teralite"; break;
	case "https://nongmotrash.github.io/contact": page = "https://nongmotrash.net/about#contact"; break;
	case "https://nongmotrash.github.io/fav-media/books": page = "https://nongmotrash.net/about/favs/books"; break;
	case "https://nongmotrash.github.io/fav-media/books": page = "https://nongmotrash.net/about/favs/books"; break;
	case "https://nongmotrash.github.io/fav-media/movies": page = "https://nongmotrash.net/about/favs/movies"; break;
	case "https://nongmotrash.github.io/fav-media/music": page = "https://nongmotrash.net/about/favs/music"; break;
	case "https://nongmotrash.github.io/fav-media/shows": page = "https://nongmotrash.net/about/favs/shows"; break;
	default:
		page = "https://nongmotrash.net" + ref.slice(29);
		document.getElementById("warning").style.display = "block";
}

console.log("using ref: " + ref);
console.log("selected page: " + page);

document.getElementById("link").href = page;

