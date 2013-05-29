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
	method="post" action="https://script.google.com/macros/s/AKfycbz8TSVsrCsN6of3UUPNM42wwwkrLaDsJt0CIKiO3U-lWFTO0so/exec" 
	name="RequestForm" 
	id="RequestForm" 
	target="hidden_iframe" 
	id="GoogleForm">
  <div class="control-group">
	<label class="control-label" for="Name">Your Name:</label>
	<div class="controls"><input type="text" name="Name" id="RequestName" placeholder="person or agency requesting"/></div>
	<label class="control-label" for="Email">Your Email:</label>
	<div class="controls"><input type="email" name="Email" id="RequestEmail" placeholder="where to send location" /></div>
	<label class="control-label" for="ID">Request ID:</label>
	<div class="controls"><input type="text" name="RequestID" id="RequestID" placeholder="unique tag for this request" maxlength="16"/></div>
  </div>	
  <div class="control-group">
	<label class="control-label" for="Message">Message:<br/><small class="muted">for recipient</small></label> 
	<div class="controls">
		<textarea name="Message" maxlength="260" id="RequestMessage" rows="4" cols="50" placeholder="max 260 characters"></textarea>
	</div>
  </div>	
  <input type="hidden" name="ID" id="UserID" placeholder="unique tag for this request" maxlength="16"/></div>
  <input type="hidden" name="ShortURL" id="ShortURL"/>
  <input type="hidden" name="Agent" id="Agent"/>
  <input type="hidden" name="IPAddress" id="IPAddress"/>
  <input type="hidden" name="Version" id="Version"/>
  <div class="control-group">
	<div class="controls">
	<input type="button" value="Submit" class="btn submit" onclick="SubmitRequest();" />
	<span id="RequestSuccess"></span>
	</div>
  </div>
</form>

<!--
<div class="alert alert-success" id="Results">
	Generated URL (click to test): <span id="TestShortURL">
</div>
-->

<div id="RequestModal" class="modal hide fade">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h3>Location Request URL</h3>
  </div>
  <div class="modal-body">
    <p>Send this URL (click to test): <span id="TestShortURL"></span></p>
  </div>
  <div class="modal-footer">
    <a class="btn" data-dismiss="modal">Close</a>
    <a id="emailLink" class="btn btn-primary">Email</a>
    <a id="textLink" class="btn btn-primary">Text/SMS</a>
  </div>
</div>

<script>

	$(document).ready(function () {
		$("#Version").val(LOCATION_VERSION);
		maxLength(document.getElementById("RequestMessage"));
		$('#emailLink').click(function(){ LocalEmailLocation(); return false; });		
		//$('#textLink').hide();
		//if((navigator.userAgent.match(/iPhone/i)) 
			$('#textLink').click(function(){ TextLocation(); return false; });		

		setRequestCookie();
	});

	
	function maxLength(el) {    
		if (!('maxLength' in el)) {
			var max = el.attributes.maxLength.value;
			el.onkeypress = function () {
				if (this.value.length >= max) return false;
			};
		}
	}

	function TextLocation()
	{
		var baseMailTo = "sms:?body=";
		var href = baseMailTo + encodeURIComponent(
			$("#RequestName").val()
			+ " requesting location with message: "
			+ $("#RequestMessage").val() 
			+ " "
			+ $("#ShortURL").val()
		);
		window.open(href ,'_blank');
	}
	
	function LocalEmailLocation() {		

		var baseMailTo = "mailto:?subject=YourLo.ca/tion&body=";
			
		var href = baseMailTo + encodeURIComponent(
			$("#RequestName").val()
			+ " is requesting your location and has the following message:\n\n"
			+ $("#RequestMessage").val() 
			+ "\n\nClicking on the following link will take you to a web page that will attempt to determine your location, and automatically send it to "
			+ $("#RequestName").val()
			+"\n\n"
			+$("#ShortURL").val()
			+"\n\n");	
		window.open(href ,'_blank');
	}	

</script>

