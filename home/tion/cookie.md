This is a test page

<div id="test">This is a test</div>
<a id="clearCookies" title="Show on map" href="#">Clear</a> 

<script src="js/vendor/jquery.cookie.js"></script>

<script>
	$(document).ready(function () {		
		$('#clearCookies').click(function(){ ClearCookies(); return false; });		

		if($.cookie('user'))
		{
			$('#test').text($.cookie('user'));
		}
		else
		{
			var g=guid();
			$.cookie('user', g, { expires: 7, path: '/' });	
		}

	});

	function ClearCookies(){
		$.removeCookie('user', { path: '/' });
	}

</script>