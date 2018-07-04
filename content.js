var reukeRunScript = function(scriptName, callOnLoad, isAsync) {
    // Reuke made this. Thanks.
	try {
		var e =  document.createElement('script');
		e.src = chrome.extension.getURL(scriptName);
		e.async = !!isAsync;
		(document.head || document.documentElement).appendChild(e);
		e.onload = function() {
			if(callOnLoad)
				callOnLoad.call(this);
		};
	} catch (e) {alert(e)}
};
var go = reukeRunScript;

reukeRunScript("hacks/hack-hub.js");