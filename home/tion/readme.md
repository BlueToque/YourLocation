The entire project took between 10 and 14 hours to build from concept to what you see now.

I wrote my version based on this, and that prototype was tested by about 50 people last week.
http://gmaps-samples-v3.googlecode.com/svn/trunk/geolocate/geolocate.html

Basically the first version was an entirely client-side application written in 100% JavaScript and HTML and didn't even have a CSS file, and relied on the user emailing the location with a mailto: link (still visible as a back-up if the other code doesn't work).

The current implementation is completely HTML5 and Javascript with a tiny bit of Google Apps script thrown in. It can be hosted in any HTTP server. For example, here it is hosted in Google Drive
https://googledrive.com/host/0B7B8VqhMDpQlY1FiRmsxdWNUblU/index.html

It can also be embedded in any web site in about 100 lines of JavaScript, the only trick was getting the email to work without resorting to any server-side code. You can do that using examples through Google's Apps Script infrastructure. 

The framework is the Twitter Bootstrap responsive template using Markdown which builds on another open source project of mine https://github.com/BlueToque/initializr-pagedown-template
The rest of the work included wrapping it up in a web site using the above mentioned framework, documenting the limitations of the process, how to interpret results, and all of the other instructions, release notes, roadmap, etc. That was finished on Sunday night.

