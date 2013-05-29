<ul class="breadcrumb">
	<li><a href="/tion">Home</a> <span class="divider">/</span></li>
	<li><a href="documentation.md">Documentation</a> <span class="divider">/</span></li>
	<li id="blogActive" class="active">Limitations</li>
</ul>

<!--
<div class="container-fluid">
  <div class="row-fluid">
    <div class="span2">
		<ul class="nav nav-list">
		  <li class="nav-header">Limitations</li>
		  <li class="active"><a href="#internet">Access to the internet</a></li>
		  <li><a href="#javascript">Javascript Support</a></li>
		  <li><a href="#permission">User's Permission</a></li>
		  <li><a href="#GPS">GPS Signal</a></li>
		  <li><a href="#mobile">Mobile Signal</a></li>
		  <li><a href="#battery">Battery Life</a></li>
		  <li><a href="#desktop">Desktop</a></li>
		</ul>
    </div>
    <div class="span10">
-->

<h1>Limitations</h1>
<p>
The techniques used to determine someone's location using this service have some
limitations.
</p>

<a id="internet"><h3>Access to the internet</h3></a>
<p>
Someone using this service via the web needs access to the internet to load the 
web page. Of course, pror to loading the web page, the subject of a search will
need to be able to receive the initial URL via text or email. 
</p>

<a id="internet"><h3>Javascript Support</h3></a>
<p>
This service makes extensive use of Javascript and HTML5. If the browser on the 
user's device does not have good javascript support, which is the case for some 
older Blackbetrry phones for instance, this service will not work.
</p>
<p>
In general, if the user does not have a "smart" phone, the service will probably
not work.
</p>

<a id="permission"><h3>User's Permission</h3></a>
<p>
This service attempts to access the position sensor, or GPS device, on a user's
device. The first time a user loads a page that tries to access the sensor, the
browser will prompt them to allow the page to access their position. Some users 
may see this as a security warning, and deny the page access. If the user does 
not allow the service to access the sensor, this service will not work.
</p>
<p>
For the service to work it is imperative that the subject of the search allow
the software to access the GPS device.
</p>

<a id="GPS"><h3>GPS Signal</h3></a>
<p>
This service relies partly on the GPS signal, which can be affected by many 
factors including weather, topography, and the user's view of the sky. This means 
that subjects who are inside will get results that are very poor compared to those
that are outside.
Additionally, a user may have turned the GPS on their device off.
</p>
<p>
For the service to work, the subject of the search *must* have the GPS on, 
and have a relatively clear view of the sky. 
</p>

<a id="mobile"><h3>Mobile Signal</h3></a>
<p>
This service also makes use of the mobile signal to determine the network 
location. If the user has a marginal connection beccause of remote location or 
other factors, this will affect this service's ability to determine their 
location.
</p>

<a id="battery"><h3>Battery Life</h3></a>
<p>
A user in marginal conditions can easily run down the battery life of their unit.
The single biggest draw of battery life on mobile devices is the back light on 
the screen. Using this service should not take very long, but it will require 
some screen time, and interaction with the web site. A low battery could affect 
the performance of the service.
</p>
<a id="desktop"><h3>Desktop (non-mobile)</h3></a>
<p>
Users accessing the service from a desktop or laptop device will have varying
results depending on whether they are using the Chome browser and if they are
connected to the network via WiFi. 
</p>
<p>
When Google gathered the StreetView data, they also enumerated WiFi Access Points
(WAP) and recorded their positions. Each WAP has a unique idetifier. A device
with a wireless connection can"see" the ID of the WAP it is connected to and
others in the vicinity, as well as their relative strenghts. This information 
can be used to assist in the determination of the position of a device.
</p>
<p>
If the device is not connected via WiFi, the IP address is used to determine 
position, often to a very coarse and unusable (for the purposes of this software)
level.
</p>



