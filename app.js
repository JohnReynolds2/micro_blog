const form = document.getElementById("blogForm");


form.addEventListener("submit", function() {
	event.preventDefault();

	const inputValue = document.getElementById("blogInput").value;

	//creating a new p tag
	let newBlogPostElement = document.createElement("p");
	//add input value to the <p> tag
	newBlogPostElement.innerHTML = inputValue;
	//appending to the web page
	document.body.appendChild(newBlogPostElement);
	//delete the value of the inputform
	document.getElementById("blogInput").value='';


});



