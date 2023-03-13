const header = document.querySelector('#header');

const stickHeader = () => {
	const scroll = window.scrollY;
	console.log(scroll);

	if (scroll > 0) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
};

window.addEventListener('scroll', stickHeader);

const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.btn-scroll');

menuLinks.forEach((link) =>
	link.addEventListener('click', (event) => {
		event.preventDefault();

		const key = event.target.dataset.key;

		const section =
			document.querySelector(`#${key}`).getBoundingClientRect().top +
			window.pageYOffset -
			110;

		menu.classList.remove('active');
		burgerBtn.classList.remove('active');

		window.scrollTo({ top: section, behavior: 'smooth' });
	})
);
