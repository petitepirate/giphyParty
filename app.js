// const gifOutput = document.querySelector('#giphyContainer');
// const form = document.querySelector('#searchform');
// const input = document.querySelector('#search');

// function makeDiv() {
// 	const gifDiv = document.createElement('div');
// 	const gifImg = document.createElement('img');
// 	gifDiv.setAttribute('id', 'gifDiv');
// 	gifImg.setAttribute('src', gifImg.value);
// 	gifDiv.appendChild(gifImg);
// 	return gifDiv;
// }

// form.addEventListener('submit', async function(event) {
// 	event.preventDefault();

// 	let searchTerm = input.value;
// 	const result = await axios.get('https://api.giphy.com/v1/gifs/search', {
// 		params: { q: searchTerm, api_key: 'YVF7ehhL3VvlGDr4BMp6ZJXtfe92l39x' }
// 	});
// 	const newGif = makeDiv(result);
// 	gifOutput.appendChild(newGif);
// 	form.reset();
// });

/*async function getGif(searchTerm) {
	const result = await axios.get(
		`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YVF7ehhL3VvlGDr4BMp6ZJXtfe92l39x`
	);
	console.log(result);
}

getGif();
*/
function getSearchTerm(evt) {
	evt.preventDefault();

	const input = document.querySelector('#searchTerm');
	const searchTerm = input.value;
	getGiphy(searchTerm);
	input.value = '';
}

async function getGiphy(query) {
	let res = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params: {
			api_key: 'YVF7ehhL3VvlGDr4BMp6ZJXtfe92l39x',
			q: query,
			limit: 1,
			offset: Math.floor(Math.random() * 100) // returns a random picture within the search terms
		}
	});
	displayGiphy(res.data.data[0].images.fixed_height.url);
}

function displayGiphy(imgLink) {
	const outputDiv = document.querySelector('#gifContainer');
	let gif = document.createElement('img');
	gif.setAttribute('src', imgLink);
	outputDiv.append(gif);
}

function removeGifs(evt) {
	evt.preventDefault();

	const gifs = Array.from(document.querySelector('#gifContainer').children);
	for (let gif of gifs) {
		gif.remove();
	}
}

document.querySelector('#searchBtn').addEventListener('click', (evt) => {
	getSearchTerm(evt);
});

document.querySelector('#removeBtn').addEventListener('click', (evt) => {
	removeGifs(evt);
});
