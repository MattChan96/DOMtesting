(function () {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = "function" == typeof require && require;
					if (!f && c) return c(i, !0);
					if (u) return u(i, !0);
					var a = new Error("Cannot find module '" + i + "'");
					throw ((a.code = "MODULE_NOT_FOUND"), a);
				}
				var p = (n[i] = { exports: {} });
				e[i][0].call(
					p.exports,
					function (r) {
						var n = e[i][1][r];
						return o(n || r);
					},
					p,
					p.exports,
					r,
					e,
					n,
					t
				);
			}
			return n[i].exports;
		}
		for (
			var u = "function" == typeof require && require, i = 0;
			i < t.length;
			i++
		)
			o(t[i]);
		return o;
	}
	return r;
})()(
	{
		1: [
			function (require, module, exports) {
				function hello() {
					console.log("hello");
				}

				module.exports = hello;
			},
			{},
		],
		2: [
			function (require, module, exports) {
				const hello = require("./hello");

				hello();
				console.log("We love LOTR");

				const heading = document.querySelector("h1");
				console.log(heading);

				const para = document.querySelectorAll("p");
				para.forEach((para) => (para.style.color = "green"));

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
						title.textContent = "greetings";
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
			},
			{ "./hello": 1 },
		],
	},
	{},
	[2]
);
