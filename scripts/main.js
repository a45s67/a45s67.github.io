let myhead = document.querySelector('h1');

var count=1;


document.querySelector('img').onclick = 
function(){
    alert(
`Welcome to the Japari Park!!
Su~~Go~~e!!`);
    if(count===1){
        myhead.textContent="My gaming project";
    }
    else{
        let name = localStorage.getItem('name');
        if (name!=='null'&&name!==''){
            myhead.innerHTML = 'Hello '+name;
//            alert(name);
        }
        else{
            setname();
        }
//        myhead.innerHTML = "Okay!";
    }
    count+=1;
    count%=2;
     
}
function setname(){
    let name = prompt("Please enter your name.");
    localStorage.setItem("name",name);
    
}

document.querySelector("button").onclick = setname;