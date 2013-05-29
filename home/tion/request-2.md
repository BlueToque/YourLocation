##Request a location
<small>
	<a href="request_docs.md">Documentation</a> | 
	<a href="limitations.md">Limitations</a> | 
	<a href="interpreting.md">Interpreting results</a>
</small>

Filling in this form will generate a link that you can send to someone via email, text or social media.
 
When they click on the link the page will attempt to find their location, and email it to the address you enter here.

<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>
<form 
	class="form-horizontal"
	method="post" action="https://script.google.com/macros/s/AKfycbz8TSVsrCsN6of3UUPNM42wwwkrLaDsJt0CIKiO3U-lWFTO0so/exec" name="theForm" id="theForm" target="hidden_iframe" id="GoogleForm">
  <div class="control-group">
	<label class="control-label" for="Name">Your Name:</label>
	<div class="controls"><input type="text" name="Name" id="Name" placeholder="person or agency requesting"/></div>
  </div>	
  <div class="control-group">
	<label class="control-label" for="Email">Your Email:</label>
	<div class="controls"><input type="email" name="Email" id="Email" placeholder="where to send location" /></div>
  </div>	
  <div class="control-group">
	<label class="control-label" for="Message">Message:<br/><small class="muted">for recipient</small></label> 
	<div class="controls">
		<textarea name="Message" maxlength="260" id="Message" rows="4" cols="50" placeholder="max 260 characters"></textarea>
	</div>
  </div>	
  <input type="hidden" name="ShortURL" id="ShortURL"/>
  <input type="hidden" name="Agent" id="Agent"/>
  <input type="hidden" name="IPAddress" id="IPAddress"/>
  <input type="hidden" name="Version" id="Version"/>
  <div class="control-group">
	<div class="controls">
	<input type="button" value="Submit" class="btn submit" onclick="checkBeforeSubmit();" />
	<span id="success"></span>
	</div>
  </div>
</form>

<!--
<div class="alert alert-success" id="Results">
	Generated URL (click to test): <span id="TestShortURL">
</div>
-->

<div id="myModal" class="modal hide fade">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h3>Location Request URL</h3>
  </div>
  <div class="modal-body">
    <p>Send this URL (click to test): <span id="TestShortURL"></span></p>
  </div>
  <div class="modal-footer">
    <a class="btn" data-dismiss="modal">Close</a>
    <a id="emailLink" class="btn btn-primary">Send via Email</a>
  </div>
</div>

<script type="text/javascript" src="js/location.js"></script>
<script>

	$(document).ready(function () {
		$("#Version").val(LOCATION_VERSION);
		maxLength(document.getElementById("Message"));
		$('#emailLink').click(function(){ LocalEmailLocation(); return false; });		
	});

	function maxLength(el) {    
		if (!('maxLength' in el)) {
			var max = el.attributes.maxLength.value;
			el.onkeypress = function () {
				if (this.value.length >= max) return false;
			};
		}
	}

	function LocalEmailLocation() {		

		var baseMailTo = "mailto:?subject=YourLo.ca/tion&body=";
			
		var href = baseMailTo + encodeURIComponent(
			$("#Name").val()
			+ " is requesting your location and has the following message:\n\n"
			+ $("#Message").val() 
			+ "\n\nClicking on the following link will take you to a web page that will attempt to determine your location, and automatically send it to "
			+ $("#Name").val()
			+"\n\n"
			+$("#ShortURL").val()
			+"\n\n");	
		window.open(href ,'_blank');
	}	

	function checkBeforeSubmit(){
		var login    = "o_2rnet2c4";
		var api_key  = "R_e1eabf324c48983d594bcb6792315343";
		var root_url = "http://find.yourlo.ca/tion/";

		// make the url
		var long_url = root_url
			+ "?from="
			+ encodeURIComponent($("#Name").val())
			+ "&email="
			+ encodeURIComponent($("#Email").val())
			+ "&message="
			+ encodeURIComponent($("#Message").val());

/*
			// set the value of the short url
			$("#ShortURL").val(long_url);
			// show the value to test the short url
			$("#TestShortURL").html("<a href='" + long_url + "' target='_blank'>" + long_url + "</a>");

			$("#Results").toggle();

			// submit the form
			$("#theForm").submit();
			$("#success").innerHTML='Submitted';
*/
			
		get_short_url(long_url, login, api_key, function(short_url) {
			// set the value of the short url
			$("#ShortURL").val(short_url);
			// show the value to test the short url
			$("#TestShortURL").html("<a href='" + short_url + "' target='_blank'>"+short_url+"</a>");
			$('#myModal').modal({keyboard: true});

			// submit the form
			$("#theForm").submit();
			$("#success").innerHTML='Submitted';
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
</script>

