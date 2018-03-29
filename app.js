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

//when you submit a blogpost it will populate below the search bar (i think creating a new <p> tag in the DOM?)
//what I want to accomplish is...
//1. removing the text in the entry form after the submit button is pressed
//2. only show a couple past entries in the entry form
//3. I also need to make sure the blog entries and stored in the localStorage so when you refresh the page it remembers what people said


