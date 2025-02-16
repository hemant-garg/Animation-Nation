let cards = [
  {
    artName: "wake up, neo...",
    pageLink: "./Art/samirjouni/TributeToTheMatrix.html",
    imageLink: "./Art/samirjouni/sample.gif",
    author: "Samir Jouni",
    githubLink: "https://github.com/samirjouni"
  },
  {
    artName: "Planet",
    pageLink: "./Art/ArthurDoom/planet.html",
    imageLink: "./Art/ArthurDoom/planet.gif",
    author: "ArthurDoom",
    githubLink: "https://github.com/ArthurDoom"
  },
	{
		artName: "SquarPy",
		pageLink: "./Art/Utkarsh/index.html",
		imageLink: "./Art/Utkarsh/hack.gif",
		author: "utkarsh",
		githubLink: "https://github.com/Utkarsh2604"
	},
	{
		artName: "Circle",
    pageLink: "./Art/Oliver/Circle.html",
		imageLink: "./Art/Oliver/circle.gif",
		author: "Oliver",
		githubLink: "https://github.com/oliver-gomes"
	},
	{
		artName: "Ellipse Loader",
		pageLink: "./Art/VaibhavKhulbe/EllipseLoader.html",
		imageLink: "./Art/VaibhavKhulbe/ellipseLoader.gif",
		author: "Vaibhav Khulbe",
		githubLink: "https://github.com/Kvaibhav01"
	},
	{
		artName: "Triangle",
		pageLink: "./Art/Joy/triangle.html",
		imageLink: "./Art/Joy/triangle.gif",
		author: "Joy",
		githubLink: "https://github.com/royranger"
	}
];

// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+

// Creates cards from the array above
// You don't need to modify this
let contents = [];
Shuffle(cards).forEach(c => {
	contents.push([
		`<li class="card">` +
			`<a href='${c.pageLink}'>` +
			`<img class="art-image" src='${c.imageLink}' alt='${c.artName}' />` +
			`</a>` +
			`<div class="flex-content">` +
			`<a href='${c.pageLink}'><h3 class="art-title">${c.artName}</h3></a>` +
			`<p class='author'><a href="${c.githubLink}" target="_blank"><i class="fab fa-github"></i> ${c.author}</a> </p>` +
			`</div>` +
			`</li>`
	]);
});

document.getElementById("cards").innerHTML = contents;

function Shuffle(o) {
	for (
		var j, x, i = o.length;
		i;
		j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
	);
	return o;
}
