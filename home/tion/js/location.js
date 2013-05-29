var LOCATION_VERSION = "2.3.1";	

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

/* Set te cookie for the request.md
*/
function setRequestCookie()
{
	try
	{
		if(!$.cookie('userID'))
		{
			var g = guid();
			$.cookie('userID', g, { expires: 365, path: '/' });	
		}

		$('#UserID').val($.cookie('userID'));
		
		if($.cookie('RequestName'))
			$("#RequestName").val($.cookie('RequestName'));
		if($.cookie('RequestEmail'))
			$("#RequestEmail").val($.cookie('RequestEmail'));
		if($.cookie('RequestMessage'))
			$("#RequestMessage").val($.cookie('RequestMessage'));
	}
	catch(error)
	{
		console.log(error);
	}
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
		
/* 
  Submit the form on the request.md page
*/
function SubmitRequest(){
	var login    = "o_2rnet2c4";
	var api_key  = "R_e1eabf324c48983d594bcb6792315343";
	var root_url = "http://find.yourlo.ca/tion/";

	// save the cookie
	$.cookie('RequestName', $("#RequestName").val(), { expires: 365, path: '/' });	
	$.cookie('RequestEmail', $("#RequestEmail").val(), { expires: 365, path: '/' });	
	$.cookie('RequestMessage', $("#RequestMessage").val(), { expires: 365, path: '/' });	

	// make the url
	var long_url = root_url
		+ "?ID="
		+ encodeURIComponent($("#RequestID").val())
		+ "&from="
		+ encodeURIComponent($("#RequestName").val())
		+ "&email="
		+ encodeURIComponent($("#RequestEmail").val())
		+ "&message="
		+ encodeURIComponent($("#RequestMessage").val());

		
	get_short_url(long_url, login, api_key, function(short_url) {
		// set the value of the short url
		$("#ShortURL").val(short_url);
		// show the value to test the short url
		$("#TestShortURL").html("<a href='" + short_url + "' target='_blank'>"+short_url+"</a>");
		$('#RequestModal').modal({keyboard: true});

		// submit the form
		$("#RequestForm").submit();
		$("#RequestSuccess").innerHTML = 'Submitted';
	});

}				

function get_short_url(long_url, login, api_key, func) {

	$.getJSON( "https://api-ssl.bitly.com/v3/shorten?callback=?", { 
			"format": "json",
			"apiKey": api_key,
			"login": login,
			"longUrl": long_url
		},
		function(response){
			func(response.data.url);
		});
}
		
