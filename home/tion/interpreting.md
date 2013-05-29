<ul class="breadcrumb">
	<li><a href="/tion">Home</a> <span class="divider">/</span></li>
	<li><a href="documentation.md">Documentation</a> <span class="divider">/</span></li>
	<li id="blogActive" class="active">Interpreting Results/li>
</ul>

Interpreting Results
====================

YourLo.ca/tion attempts to determine the location of a person depending on the 
device they use to load the web page.

There are two possible results

##No Location

Determining the location can fail for several reasons (see [limitations](limitations.md). If
it fails, the service will indicate that it failed, or produce a page that
has no coordinates printed on it.

##Success

Success means that a location was determines, but that doesn't mean that the 
location is exact. 

###Position

The device's location is printed in two coordinate systems; Geographic coordinates 
(latitude and longitude), and Universal Transverse Mercator (UTM).

###Accuracy

The device's location also comes with an estimate of the accuracy of the position.
**Be extremely observant of the accuracy!** The accuracy attempts to express a 
confidence interval around the location coordinates. The device can be anywhere 
within a circle with a radius equal to the accuracy measure.

Any accuracy of 200m and above can be considered bad, and not very trustworthy.

Experimental evidence has shown that accuracy estimates of 1000 meters and above
are extremely poor, and cannot be trusted for navigation of any sort.