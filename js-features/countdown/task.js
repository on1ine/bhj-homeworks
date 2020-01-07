'use strict';

const output = document.getElementById('timer');

const timerValue = function() {
	output.textContent -= 1;

	if (output.textContent <= 0) {
		alert('Сейчас начнется скачивание файла');
		window.location = 'https://rutracker.org/forum/dl.php?t=5761018';
		clearInterval(interval);
	}
}

const interval = setInterval(timerValue, 1000);

