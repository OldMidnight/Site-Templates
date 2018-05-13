function scrollResize(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("top-nav-logo-alt-id").style.top = "0";
	} else {
		if (screen.width <= 560) {
			document.getElementById("top-nav-logo-alt-id").style.top = "-150px";
		} else {
			document.getElementById("top-nav-logo-alt-id").style.top = "-100px";
		}
	}
}

/*$(document).ready(function(){
	
});*/