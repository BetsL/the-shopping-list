//var button = document.getElementsByTagName('button')[0];

//button.addEventListener('click', function(){
//	console.log('CLICK!!!');
//})


// cache the relevant queries
var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

// how can I refactor this to make it extensible? DRY

//button.addEventListener('click', function() {
//	if (input.value.length > 0) {
//	var li = document.createElement('li');
//	li.appendChild(document.createTextNode(input.value));
//	ul.appendChild(li);
//	input.value = '';
//	}
//})

//input.addEventListener('keypress', function() {
//	if (input.value.length > 0 && event.keyCode === 13) {
//	var li = document.createElement('li');
//	li.appendChild(document.createTextNode(input.value));
//	ul.appendChild(li);
//	input.value = '';
//	}
//})

// pull out the logic, create some functions 
function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = '';
}

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);











