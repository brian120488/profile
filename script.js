let about = document.getElementById("about");

about.addEventListener("click", whenClicked);

let x = 0;

function whenClicked() {
	if(x == 0) {
		let newHeading = document.createElement("h1");
		newHeading.innerHTML = "NEW HEADING";
		about.appendChild(newHeading);
		newHeading.style.color = "blue";
		newHeading.style.fontSize = "0.75em";
		x++;
	}
}
