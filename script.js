//your JS code here. If required.
let element = document.getElementById("output");

let promise = new Promise ((resolve) => {
	setTimeout(() => {
		resolve("Hello, world!")
	},1000);
});

promise.then((data) =>{
	element.innerText = data;
});