let about = document.getElementById("about");

let about2 = document.getElementById("about2");
let exp2 = document.getElementById("exp2");
let proj2 = document.getElementById("proj2");
let contact2 = document.getElementById("contact2");

document.addEventListener("click", whenClicked);

about2.addEventListener("mouseover", whenHovering);
exp2.addEventListener("mouseover", whenHovering);
proj2.addEventListener("mouseover", whenHovering);
contact2.addEventListener("mouseover", whenHovering);

about2.addEventListener("mouseout", whenNotHovering);
exp2.addEventListener("mouseout", whenNotHovering);
proj2.addEventListener("mouseout", whenNotHovering);
contact2.addEventListener("mouseout", whenNotHovering);

let x = 0;

function whenClicked() {
	if(x == 0) {
		let newHeading = document.createElement("h1");
		newHeading.innerHTML = "NEW HEADING";
		newHeading.style.color = "blue";
		newHeading.style.fontSize = "0.75em";
		about.appendChild(newHeading);
		x++;
	}
}

function whenHovering() {
	this.style.border = "medium solid gray";
	//about.style.border = "green";
}

function whenNotHovering() {
	this.style.border = "none";
}