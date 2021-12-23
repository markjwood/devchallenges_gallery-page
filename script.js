const gallery = document.getElementById('gallery');
const galleryImages = gallery.querySelectorAll('img');
const modalOverlay = document.getElementById('modal-overlay');
const modalImageDiv = document.getElementById('modal-img');
const scrollingDiv = document.getElementById('scrolling-buttons');
const scrollingButtons = scrollingDiv.querySelectorAll('button');
const modalCloseBtn = document.getElementById('modal-close');

let prevImg = '';
let nextImg = '';

// scrolling buttons
scrollingButtons.forEach(button => {
	button.addEventListener('click', () => {
		const action = button.name;

		scrollImg(action);
	});
});

// enlarge image on click
galleryImages.forEach(image => {
	image.addEventListener('click', () => {
		modalOverlay.classList.remove('hidden');
		displayLargeImage(image);
	});
});

// close modal
modalOverlay.addEventListener('click', e => {
	if (e.target === modalOverlay || e.target === modalCloseBtn) {
		modalOverlay.classList.add('hidden');
	}
});

// display large image function
function displayLargeImage(image) {
	// remove previously displayed img from DOM
	if (modalImageDiv.firstElementChild.tagName === 'IMG') {
		modalImageDiv.firstElementChild.remove();
	}

	prevImg = image.previousElementSibling || '';
	nextImg = image.nextElementSibling || '';

	const imgSrc = image.getAttribute('src');
	const imgAlt = image.getAttribute('alt') + '(enlarged)';

	const largeImage = document.createElement('img');
	largeImage.setAttribute('src', imgSrc);
	largeImage.setAttribute('alt', imgAlt);

	modalImageDiv.insertBefore(largeImage, scrollingDiv);
}

// scrolling function
function scrollImg(action) {
	const toDisplay = action === 'next' ? nextImg : prevImg;

	if (toDisplay) displayLargeImage(toDisplay);
}
