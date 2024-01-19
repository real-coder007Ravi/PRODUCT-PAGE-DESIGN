const button = document.getElementsByClassName("btn");
const image = document.getElementById("image");

button[0].onclick = function () {
	image.src = "assets/images/image1.png";
	for (bt of button) {
		bt.classList.remove("active");
	}
	this.classList.add("active");
};
button[1].onclick = function () {
	image.src = "assets/images/image2.png";
	for (bt of button) {
		bt.classList.remove("active");
	}
	this.classList.add("active");
};
button[2].onclick = function () {
	image.src = "assets/images/image3.png";
	for (bt of button) {
		bt.classList.remove("active");
	}
	this.classList.add("active");
};
