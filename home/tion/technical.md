<ul class="breadcrumb">
	<li><a href="/tion">Home</a> <span class="divider">/</span></li>
	<li><a href="development.md">Development</a> <span class="divider">/</span></li>
	<li id="blogActive" class="active">Technical Details</li>
</ul>

Technical Details
=================

The core of the technique used by this service is the [HTML5 Geolocation API][1]. 
The main method is in the Javascript below

<pre>
	function doGeolocation() {		
		if (navigator.geolocation) {			
			navigator.geolocation.getCurrentPosition(
				positionSuccess, 
				positionError,
				{timeout:10000, enableHighAccuracy:true});		
		} else {			
			positionError(-1);		
		}	
	}	
</pre>

This technique is so simple, almost anyone can do it. 

##Accuracy
Quoting from the specification:

<blockquote>
	
	The accuracy attribute denotes the accuracy level of the latitude and longitude coordinates. It is specified in meters and must be supported by all implementations. 
	The value of the accuracy attribute must be a non-negative real number.<br/>
	The accuracy ... values returned by an implementation should correspond to a 95% confidence level.
</blockquote>

Each time the page is re-loaded the API will request a new, non cached "lock", or location. If the GPS is on, most systems will activate it to get the location. 

##Details
There are ways to get a location other than a GPS. Google, for instance, has an enormous database of the unique identifiers of residential and commercial wireless access points. If a mobile phone or laptop is within range of one of the WAPs in the database, the Chrome implementation of the HTML5 Geolocation API appears to use this in determining the location. This works quite well for laptops that do not have GPS, and mobile phones with GPS turned off.

[1]: http://dev.w3.org/geo/api/spec-source.html