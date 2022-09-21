const hello = require("./hello");

hello();
console.log("We love LOTR");

const para = document.querySelectorAll("p");
para.forEach((para) => (para.style.color = "green"));

document.querySelector("#num1").textContent = "Gimli";

document.getElementById("num3").style.color = "yellow";

// const rando = document.getElementsByClassName('rando');
// console.log(rando);

// document.getElementsByTagName('li').style.textDecoration = "underline"

const buttonAdd = document.getElementById("addCharacter");
console.log(buttonAdd);

buttonAdd.addEventListener("click", () => {
	const ol = document.querySelector("ol");
	const li = document.createElement("li");
	li.textContent = "Gandalf";
	ol.appendChild(li);
});

const ol = document.querySelector("ol");
ol.addEventListener("mouseover", () => {
	console.log(ol);
	ol.style.color = "red";
});

const olblack = document.querySelector("ol");
ol.addEventListener("mouseleave", () => {
	console.log(ol);
	ol.style.color = "black";
});

const buttonUpdate = document.querySelector("#updateButton");

buttonUpdate.addEventListener("click", () => {
	document.querySelector("h1").textContent = "you hit me";
});

// h2

const h2 = document.querySelectorAll("h2");
h2.forEach((title) =>
	title.addEventListener("mouseover", () => {
		title.textContent = "Hello There!";
	})
);

// Exercise 2

const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", () => {
	h1.style.backgroundColor = "red";
	console.log("say hi");
});
h1.addEventListener("mouseout", () => {
	h1.style.backgroundColor = "white";
});

const nav1 = document.querySelector("#nav1");
const nav2 = document.querySelector("#nav2");
const nav3 = document.querySelector("#nav3");

nav1.addEventListener("click", () => {
	const para1 = document.querySelector("#para1");
	if (para1.style.fontSize === "30px") {
		para1.style.fontWeight = "400";
		para1.style.fontSize = "16px";
	} else {
		para1.style.fontWeight = "800";
		para1.style.fontSize = "30px";
	}
});

nav2.addEventListener("click", () => {
	const para2 = document.querySelector("#para2");
	if (para2.style.fontSize === "30px") {
		para2.style.fontWeight = "400";
		para2.style.fontSize = "16px";
	} else {
		para2.style.fontWeight = "800";
		para2.style.fontSize = "30px";
	}
});

nav3.addEventListener("click", () => {
	const para3 = document.querySelector("#para3");
	if (para3.style.fontSize === "30px") {
		para3.style.fontWeight = "400";
		para3.style.fontSize = "16px";
	} else {
		para3.style.fontWeight = "800";
		para3.style.fontSize = "30px";
	}
});

addEventListener("keypress", (e) => {
	const paraEdit = document.querySelector(".editThis");
	if (paraEdit) {
		paraEdit.textContent += e.key;
	} else {
		const newPara = document.createElement("p");
		newPara.classList.add("editThis");
		newPara.textContent = e.key;
		document.body.appendChild(newPara);
	}
});
