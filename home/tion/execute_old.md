
<small>	
	<a href="execute_docs.md">Documentation</a> |
	<a href="limitations.md">Limitations</a> |
	<a href="interpreting.md">Interpreting results</a>
</small>

<div id="location">	
	<div class="alert" id="statusMessage">Loading...</div>	
	<div class="row">
		<div class="span1">Location:</div>
		<div class="span2"><code><span id="LatitudeDisplay"></span> <span id="LongitudeDisplay"></span></code></div>	
	</div>
	<div class="row">
		<div class="span1">UTM: </div>
		<div class="span2"><code><span id="zone"></span> <span id="xPos"></span> <span id="yPos"></span></code></div>	
	</div>
	<div class="row">
		<div class="span1">Accuracy:</div>
		<div class="span2"><code><span id="AccuracyDisplay"></span> meters</code></div>	
	</div>
	<span id="AgentDisplay" style="display:none" ></span>
</div>
<br/>
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>
<form class="form-inline"
	method="post" action="https://script.google.com/macros/s/AKfycbz11NN8ls7rMUWIYS3qCkNskHQL4IoEtDw7fH-5BjHl6tBIUQo/exec" name="theForm" id="theForm" target="hidden_iframe" id="GoogleForm">  
	<input type="hidden" name="Latitude" id="Latitude" />  
	<input type="hidden" name="Longitude" id="Longitude"/>  
	<input type="hidden" name="UTM" id="UTM"/>  
	<input type="hidden" name="Accuracy" id="Accuracy"/>  
	<input type="hidden" name="Agent" id="Agent"/>  
	<input type="hidden" name="IPAddress" id="IPAddress"/>  
	<input type="hidden" name="Version" id="Version"/>  
	<input type="text" name="Email" id="Email" placeholder="Email" />  
	<input type="text" name="Comment" id="Comment" placeholder="Comment" />  
	<br/>
	<br/>
		<input type="button" value="Submit" class="submit btn" onclick="checkBeforeSubmit();" />	
		<input type="button" value="Reload" class="other btn" onclick="reload();" />	
		<span id="success"></span>  
</form>

<p> 
	<a id="mapsLink" title="Show on map" href="#">Map this</a> | 	
	<a id="emailLink" title="Email this" href="#">Email</a> |	
	<a id="facebookLink" title="Share on Facebook" href="#">Facebook</a> |	
	<a id="tweetLink" title="Share on Twitter" href="#">Tweet</a> |	
	<a id="plusLink" title="Share on Google+" href="#">Google+</a>
</p>

<script type="text/javascript" src="http://www.google.com/jsapi"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
<script type="text/javascript" src="js/geometa.js"></script>
<script type="text/javascript" src="js/geog.js"></script>
<script>
	var VERSION=2.1;	
	$(document).ready(function () {		
		$('#emailLink').click(function(){ EmailPosition(); return false; });		
		$('#mapsLink').click(function(){ ShowLocation(); return false; });		
		$('#facebookLink').click(function(){ FacebookLocation(); return false; });		
		$('#tweetLink').click(function(){ TweetLocation(); return false; });	
		$('#plusLink').click(function(){ PlusLocation(); return false; });		
		$("#AgentDisplay").text(navigator.userAgent);		
		$("#Agent").val(navigator.userAgent);
		
		//$("#statusMessage").toggle();
		
		$("#VersionDisplay").text(VERSION);		
		$("#Version").val(VERSION);
		if (window['google'] && google.loader.ClientLocation) {			
			$("#LatitudeDisplay").text(google.loader.ClientLocation.latitude);			
			$("#LongitudeDisplay").text(google.loader.ClientLocation.longitude);		}
			
		reload();	
	});	
	
	function reload()	{
		$("#success").text("");		
		$("#statusMessage").text("Loading...");
		//$("#statusMessage").removeClass("alert-error");
		//$("#statusMessage").removeClass("alert-success");
		prepareGeolocation();		
		doGeolocation();	}	
		
	function doGeolocation() {		
		if (navigator.geolocation) {			
			navigator.geolocation.getCurrentPosition(positionSuccess, positionError);		
		} else {			
			positionError(-1);		
		}	
	}	

	function positionError(err) {		
		var msg;		
		switch(err.code) {
			case err.UNKNOWN_ERROR: msg = "Unable to find your location"; break;			
			case err.PERMISSION_DENINED: msg = "Permission denied in finding your location"; break;
			case err.POSITION_UNAVAILABLE: msg = "Your location is currently unknown"; break;			
			case err.BREAK: msg = "Attempt to find location took too long"; break;			
			default: msg = "Location detection not supported in browser";		
			}		
		$("#statusMessage").text(msg);		
		$("#statusMessage").addClass("alert-error");
		$("#Message").val("The position could not be determined.\nThe message was" + "\"" + msg + "\"");	
	}	
	
	function positionSuccess(position) {
		var coords = position.coords || position.coordinate || position;		
		$("#LatitudeDisplay").text(coords.latitude.toFixed(5));		
		$("#LongitudeDisplay").text(coords.longitude.toFixed(5));		
		$("#AccuracyDisplay").text(coords.accuracy);		
		$("#Latitude").val(coords.latitude);		
		$("#Longitude").val(coords.longitude);		
		$("#Accuracy").val(coords.accuracy);				
		convertToUTM(coords.latitude,coords.longitude);		
		$("#statusMessage").text("Location found on " + new Date());	
		$("#statusMessage").addClass("alert-success");
	}	
	
	function EmailPosition() {		
		window.location = 			
			"mailto:michael.f.coyle@gmail.com"			
			+ "?subject=My Location"			
			+ "&body="			
			+ $("#location").text() 			
			+ " <a href='"			
			+ GetShowLocationUrl()			
			+ "' >Show.YourLo.ca/tion</a>";	
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
		
	function ShowLocation() {		
		window.open(GetShowLocationUrl() ,'_blank')	
	}	
	
	function FacebookLocation()	{		
		var href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(GetShowLocationUrl());		
		window.open(href ,'_blank')	}	

	function TweetLocation()	{		
		var href = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(GetShowLocationUrl());		
		window.open(href ,'_blank')	}	

	function PlusLocation()	{			
		var href = "https://plus.google.com/share?url=" + encodeURIComponent(GetShowLocationUrl());		
		window.open(href ,'_blank')	}	
	
	function checkBeforeSubmit(){		
		document.getElementById('theForm').submit();		
		document.getElementById('success').innerHTML='Submitted';		
		alert("Your location has been submitted");	}			
		
	function convertToUTM(lat, lon)	{		
		var xy = new Array(2);		
		// Compute the UTM zone.		
		var zone = Math.floor ((lon + 180.0) / 6) + 1;		
		zone = LatLonToUTMXY (DegToRad (lat), DegToRad (lon), zone, xy);		
		$("#zone").text(zone);		
		$("#xPos").text(xy[0].toFixed(0));		
		$("#yPos").text(xy[1].toFixed(0));				
		$("#UTM").val(zone 			
			+ " " 			
			+ xy[0].toFixed(0) 			
			+ " " 			
			+ xy[1].toFixed(0));	
	}
</script>