var nameArray = [];
var logoArray = [];
var streamNameArray = [];
var urlArray =[];
var message = " is live!";

var opt={
  type: 'basic',
  title: 'Live!',
  message: '',
  priority: 1,
  iconUrl: 'icon.png'
};

var bg = chrome.extension.getBackgroundPage();

function start(){
	var following = "https://api.twitch.tv/kraken/users/ederyairr/follows/channels?callback=?"

	$.getJSON(following)
	 	.done(function(data){
	 		for(var i = 0; i<data.follows.length; i++){
	 			var nameData = data.follows[i].channel.display_name;
	 			var live = "https://api.twitch.tv/kraken/streams/" + nameData + "?callback=?";

	 			$.getJSON(live)

	 			.done(function(data){
	 				var stream = data.stream
	 				if(stream!= null){
	 					var nameStreamer = stream.channel.display_name
	 					var StreamName = stream.channel.status;
	 					var logoStreamer = stream.channel.logo;
	 					var linkStreamer = stream.channel.url;
	 									
	 					
	 					if(nameArray.indexOf(nameStreamer)<0){
	 						nameArray.push(nameStreamer);
	 					}
	 					if(logoArray.indexOf(logoStreamer)<0){
	 						logoArray.push(logoStreamer);
	 					}
	 					if(streamNameArray.indexOf(StreamName)<0){
	 						streamNameArray.push(StreamName);
	 					}
	 					if(urlArray.indexOf(linkStreamer)<0){
	 						urlArray.push(linkStreamer);
	 					}
	 					for(var j=0; j<nameArray.length; j++){
	  					opt['message'] = nameArray[j] + message;
	  						chrome.notifications.create(nameArray[j], opt, function(){});
						} 
	 				}
	 				
	 					
	 			})
	 		}
	 	});
}
setInterval(start,1000)



