let myhead = document.querySelector('h1');
var mybut = document.querySelector('button');

myhead.textContent = "Hi!!><";
// alert("Say Hi !!");

var myimg = document.querySelector('img');
function set_user_name() {
	let myname = prompt("Enter your name");
	if (!myname||name===null){
		set_user_name();
	}
	else{
		localStorage.setItem("name",myname);
		myhead.innerHTML = 'Mozilla is cool-'+myname;
	}
}

mybut.onclick = function(){
	set_user_name();
}


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