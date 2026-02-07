document.addEventListener('DOMContentLoaded', function () {
	const input = document.querySelector('.input');
	const items = Array.from(document.querySelectorAll('.carousel .item'));

	input.addEventListener('input', function (e) {
		const q = e.target.value.trim().toLowerCase();

		if (q === '') {
			items.forEach(item => (item.style.display = ''));
			return;
		}

		items.forEach(item => {
			const nameEl = item.querySelector('.name');
			const name = nameEl ? nameEl.textContent.toLowerCase() : '';
			const match = name.includes(q);
			item.style.display = match ? '' : 'none';
		});
	});
});

