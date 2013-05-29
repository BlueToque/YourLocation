Developers
==========

The developers of YourLo.ca/tion are two Search and Rescue volunteers from 
British Columbia Canada

* Michael Coyle, SAR Volunteer, <a href="http://www.BlueToque.ca" target="_blank">software developer</a> and <a href="http://blog.Oplopanax.ca" target="_blank">SAR Blogger</a>
* Tom Zajac, <a href="http://www.Coquitlam-SAR.bc.ca" target="_blank">SAR Volunteer</a>, and <a href="http://http://www.bcas.ca/" target="_blank">BCAS Paramedic</a>

<!--
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>
<form method="post" action="https://script.google.com/macros/s/AKfycbxgrRkbQ8X6UIPkpKjp7FOpy4enYKYwWmsaD_wrnwSMgTxBcMyc/exec" name="theForm" id="theForm" target="hidden_iframe" id="GoogleForm">
<fieldset>
<legend>Contact us:</legend>
	  <label>Name:</label><input type="text" name="Name" id="Name" /><br/>
	  <label>Email Address:</label><input type="text" name="Email" id="Longitude"/><br/>
	  <label>Subject:</label><input type="text" name="Subject" id="Subject"/><br/>
	  <label>Message</label>
	  <textarea rows="4" cols="50" name="Message" id="Message">
	  </textarea><br/>
	  <input type="hidden" name="IPAddress" id="IPAddress"/>
	  <input type="button" value="Submit" class="submit" onclick="checkBeforeSubmit();" />
	  <span id="success"></span>
	  </div>
</fieldset>
</form>
-->
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>
<div class="row">
	<div class="span6">
		<form method="post" action="https://script.google.com/macros/s/AKfycbxgrRkbQ8X6UIPkpKjp7FOpy4enYKYwWmsaD_wrnwSMgTxBcMyc/exec" name="theForm" id="theForm" target="hidden_iframe" id="GoogleForm">
		<fieldset>
		<legend>Contact us:</legend>
		  <div class="controls controls-row">
			  <input id="Name" name="Name" type="text" class="span3" placeholder="Name"> 
			  <input id="Email" name="Email" type="email" class="span3" placeholder="Email address">
			  <!--<input id="Subject" name="Subject" type="text" class="span3" placeholder="Subject">-->
		  </div>
		  <div class="controls">
			  <textarea id="Message" name="Message" class="span6" placeholder="Your Message" rows="5"></textarea>
		  </div>
		  
		  <div class="controls">
	  <span id="success"></span>
			  <button id="contact-submit" type="submit" class="btn btn-primary input-medium pull-right" onclick="checkBeforeSubmit();">Send</button>
		  </div>
		</fieldset>
	  </form>
	</div>
</div>
<script>
	function checkBeforeSubmit(){
		document.getElementById('theForm').submit();
		document.getElementById('success').innerHTML='Submitted';
	}	
</script>