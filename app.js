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
