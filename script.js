const createImage = (imgPath) => {
	return new Promise((resolve, reject) => {
		let newImg = document.createElement('img');
		newImg.src = imgPath;
		console.log(newImg);
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

const waitFor = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms);
	});
};

let currentImg;

// createImage('./images/img-1.jpg')
// 	.then((resolvedImg) => {
// 		currentImg = resolvedImg;
// 		return waitFor(2000);
// 	})
// 	.then(() => {
// 		currentImg.style.display = 'none';
// 		return createImage('./images/img-2.jpg');
// 	})
// 	.then((resolvedImg) => {
// 		currentImg = resolvedImg;
// 		return waitFor(2000);
// 	})
// 	.then(() => {
// 		currentImg.style.display = 'none';
// 		return createImage('./images/img-3.jpg');
// 	})
// 	.then((resolvedImg) => {
// 		currentImg = resolvedImg;
// 		return waitFor(2000);
// 	})
// 	.then(() => {
// 		currentImg.style.display = 'none';
// 		document.body.innerHTML =
// 			'<h1>Refresh the Page to See the Pictures Again</h1>';
// 	});

// const loadNPause = async () => {
// 	try {
// 		const resolvedImage1 = await createImage('./images/img-1.jpg');
// 		await waitFor(2000);
// 		resolvedImage1.style.display = 'none';
// 		const resolvedImage2 = await createImage('./images/img-2.jpg');
// 		await waitFor(2000);
// 		resolvedImage2.style.display = 'none';
// 		const resolvedImage3 = await createImage('./images/img-3.jpg');
// 		await waitFor(2000);
// 		resolvedImage3.style.display = 'none';
// 		document.body.innerHTML =
// 			'<h1>Refresh the Page to See the Pictures Again</h1>';
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

// loadNPause();

const loadAllProm = async () => {
	try {
		const resolvedArray = await Promise.all([
			createImage('./images/img-1.jpg'),
			createImage('./images/img-2.jpg'),
			createImage('./images/img-3.jpg'),
		]);

		for (let i = 0; i < resolvedArray.length; i++) {
			currentImg = await resolvedArray[i];
			await waitFor(3000);
			currentImg.style.display = 'none';
		}
		document.body.innerHTML =
			'<h1>Refresh the Page to See the Pictures Again</h1>';
	} catch (err) {
		console.log(err);
	}
};

loadAllProm();
