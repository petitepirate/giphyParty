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

async function getGif(searchTerm) {
	const result = await axios.get(
		`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YVF7ehhL3VvlGDr4BMp6ZJXtfe92l39x`
	);
	console.log(result);
}

getGif();
