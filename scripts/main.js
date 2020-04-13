let myhead = document.querySelector('h1');
myhead.textcontent = "Hi!!><";
// alert("Say Hi !!");

var myimg = document.querySelector('img');
myimg.onclick = function () {
	let path = myimg.getAttribute('src');
	if(path==="images/firefox-icon.png"){
		myimg.setAttribute('src',"images/123.PNG");
	}
	else{
		myimg.setAttribute('src',"images/firefox-icon.png");
	}

// body...
}


function mult(a,b){
	let c = a*b;
	return c;
}
document.querySelector('html').onclick = function(){ alert("Don't poke me...")};