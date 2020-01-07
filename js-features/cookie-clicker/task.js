'use strict';

const cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');

cookie.onclick = function() {
  cookie.width = cookie.width === 200 ? 250 : 200;
	cookie.height = cookie.height === 128 ? 178 : 128;
	clickerCounter.textContent++;
};
