$(document).ready(function() {
    console.log("DOM READY!");
	browser.runtime.onMessage.addListener(function (message) {
		const { direction } = message;
        //alert('hi' + direction);
		
		if(direction === 'left'){
			window.wrappedJSObject.nav_adoc('P');
		} else {
			window.wrappedJSObject.nav_adoc('N');
		}		
    });	 
});



