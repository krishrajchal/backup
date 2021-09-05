document.getElementById("button").onclick = function() {changeText()};
$("#allCode").hide();
$("#email").hide();
$.backstretch("codePic.png");
$(document).ready(function(){
	$("#showCode").click(function(){
		$("#allCode").fadeToggle("slow", "linear");
	});
});

var i = 0;
var o = 0;
var start = document.getElementById("text").innerHTML;
var code = false;

function t2b(str) {
    return str.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

function triggerColor(ele){
	if(localStorage.getItem("color") == null){
		localStorage.setItem("color", "purple");
	}
	else{	
		ele.style.color = localStorage.getItem("color");
	}
}

email = document.getElementById("info");

email.addEventListener("click", function (){
	if(email.innerHTML == "Contact"){
		email.innerHTML = "krishrajchal@gmail.com";
		if(localStorage.color){
			triggerColor(email);
		}
	}
	else{
		email.innerHTML = "Contact";
	}
})
function reverse(str){
	return str.split("").reverse().join("");
}

function changeText(){
	switch(i){
		case 0:
			document.getElementById("text").innerHTML = t2b(start+'');
			document.getElementById("heading").innerHTML = t2b("A short description:") + "<br>";
			i++;
			break;
			
		case 1:
			document.getElementById("text").innerHTML = reverse(start.toString());
			document.getElementById("heading").innerHTML = reverse("A short description:") + "<br>";
			i++;
			break;
			
		case 2:
			if(o == 1){
				document.getElementById("text").innerHTML = "Reeeeally, you thought AGAIN that I would trick you.";
				document.getElementById("heading").innerHTML = "Don't do that again. That was predictable.<br>";
				i++;
				o++;
				break;
			}
			
			else if(o >= 1){
				document.getElementById("text").innerHTML = "I am disapointed in you (I mean that in a funny way).";
				document.getElementById("heading").innerHTML = "I am disapointed in you.<br>";
				i++;
				break;
			}
			document.getElementById("text").innerHTML = "Ha ha ha! I tricked you! You thought you would see: <br>" + start + "!!!";
			document.getElementById("heading").innerHTML = "Ha ha ha!!!<br>";
			i++;
			if(o == 0){
				o++
			}
			break;
			
		case 3:
			document.getElementById("text").innerHTML = start;
			document.getElementById("heading").innerHTML = "A short description:<br>";
			i = 0;
			break;
		
	}
}