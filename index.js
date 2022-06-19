let win = document.querySelectorAll('.modal_wind'),
 	outside = document.querySelectorAll('.lets_talk'),
 	sub = document.querySelectorAll('.submit'),
 	menu = document.querySelectorAll('.menu');

win.forEach(function(item){
	item.addEventListener('click',function(){
		document.body.classList.toggle('active');
	})
})
sub.forEach(function(item){
	item.addEventListener('click',function(){
		document.body.classList.remove('active');
	})
})
outside.forEach(function(item){
	item.addEventListener('click',function(){
		document.body.classList.remove('active');
	})
})
menu.forEach(function(item){
	item.addEventListener('click',function(){
		document.body.classList.toggle('menu_open');
	})
})

let form = document.querySelector('.message_bg'),
	forminputs = document.querySelectorAll('.js-input'),
	inputname = document.querySelector('.js-name'),
	inputmail = document.querySelector('.js-mail'),
	inputmsg = document.querySelector('.js-msg');
	


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.onsubmit = function(){

	let emailVal = inputmail.value,
	emptyinputs = Array.from(forminputs).filter(input => input.value === "");

	forminputs.forEach(function(input){

		if (input.value === "") {
			input.classList.add("error");
		}else{
			input.classList.remove("error");
		}
	})

	if (emptyinputs.length !== 0){
		return false;
		console.log("2")
	}

	if(!validateEmail(emailVal)){
		inputmail.classList.add("error");
		return false;
	}else{
		inputmail.classList.remove("error");
	}
}