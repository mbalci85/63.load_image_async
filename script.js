const createImage = (imgPath) => {
	return new Promise((resolve, reject) => {
		let newImg = document.createElement('img');
		newImg.src = imgPath;
		document.querySelector('.images').appendChild(newImg);
		newImg.addEventListener('load', () => {
			console.log('Image Loaded');
			resolve(newImg);
		});
		newImg.addEventListener('error', () => {
			reject('Image was not loaded');
		});
	});
};

createImage('./images/img-1.jpeg').then((response) => console.log(response));
