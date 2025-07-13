function init() {
	var planet = document.getElementById("greenplanet");
	planet.innerHTML = "Red Alert: hit by phaser fire!";
	planet.setAttribute("class", "redtext");
}

window.onload = init;	//вызов функции, только после того, 
						//как окно загрузилось полностью.
						//и браузер получил все HTML теги и айди.