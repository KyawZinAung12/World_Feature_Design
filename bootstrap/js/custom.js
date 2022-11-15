$(document).ready(function(){
	var prevScrollpos = window.pageYOffset;
	
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		
			if(prevScrollpos > currentScrollPos) {
				document.getElementById("nav_bar").style.top = "0";
				document.getElementById("nav_bar").style.transitionDuration = "0.4s";
				
			}else {
				document.getElementById("nav_bar").style.top = "-120px";
				
			}
			prevScrollpos = currentScrollPos;
	}

	
})