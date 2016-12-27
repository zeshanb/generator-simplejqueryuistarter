//App Name version
//Author Name year
//
//other info

$(function(){
        
	//set global variables
	var myapp = {};
	myapp.welcome = "Welcome to simple jQuery UI starter";
	
	function welcome(){
		
		$("#welcome").html("<h1>" +  myapp.welcome +  "</h1>");
		
	}
	
	//start bubble machine
	welcome();
	
}); 
