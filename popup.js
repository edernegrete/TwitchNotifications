
var bg = chrome.extension.getBackgroundPage();



var template = document.querySelector('#myTemplate');
for(var i = 0; i<bg.nameArray.length; i++){
	template.content.querySelector('img').src = bg.logoArray[i];
	template.content.querySelector('#streamerName').textContent = bg.nameArray[i];
	template.content.querySelector('#streamName').textContent = bg.streamNameArray[i];
	template.content.querySelector('#channelLink').href=bg.urlArray[i];
	
	var clone = document.importNode(template.content, true);
	document.body.appendChild(clone);
}



