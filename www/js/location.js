var LOCATION_VERSION="2.4m";	

/* a component of guid generation */
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
};

/*
 generate a GUID 
 http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
*/
function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
         s4() + '-' + s4() + s4() + s4();
}

function GetShowLocationUrl() {			
	return "http://show.yourlo.ca/tion?lat="				
		+ $("#LatitudeDisplay").text()				
		+ "&lon=" 				
		+ $("#LongitudeDisplay").text() 				
		+ "&z=16"				
		+ "&e="				
		+ $("#AccuracyDisplay").text();	
}				

/* Email message to address */
function EmailLocation(address) {		

	var baseMailTo="";
	
	if(address)
		baseMailTo="mailto:"+address+"?subject=YourLo.ca/tion&body=";
	else 
		baseMailTo="mailto:?subject=YourLo.ca/tion&body=";
		
	var href = baseMailTo + encodeURIComponent(
			"My Location: \n" + $("#statusMessage").text() + "\n"			
			+ "Location: " + $("#LatitudeDisplay").text() + " " + $("#LongitudeDisplay").text() + "\n"
			+ "UTM:      " + $("#zone").text() + " " + $("#xPos").text() + " " + $("#yPos").text() + "\n"
			+ "Accuracy: " + $("#AccuracyDisplay").text() + " meters\n\n"
			+ " <a href='"			
			+ GetShowLocationUrl()			
			+ "' >Show.YourLo.ca/tion</a>");	
	window.open(href ,'_blank');
}	
		
