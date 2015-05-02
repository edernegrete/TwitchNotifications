var bg = chrome.extension.getBackgroundPage();

var template = document.querySelector('#myTemplate');
for(var i = 0; i<bg.nameArray.length; i++){
	template.content.querySelector('img').src = bg.logoArray[i];
	template.content.querySelector('#streamerName').textContent = bg.nameArray[i];
	template.content.querySelector('#gameName').textContent = bg.gameArray[i];
	var clone = document.importNode(template.content, true);
	document.body.appendChild(clone);		
}

