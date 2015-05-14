var nameArray = [];
var message = " is live!";

var opt={
  type: 'basic',
  title: 'Live!',
  message: '',
  priority: 1,
  iconUrl: 'icon.png'
};
function start(){
	var name = localStorage.getItem('name')
	var following = "https://api.twitch.tv/kraken/users/"+name+"/follows/channels?callback=?"
	if(name==null){
		return false;
	}
	console.log(name)
	$.getJSON(following)
	 	.done(function(name){
	 		for(var i = 0; i<name.follows.length; i++){
	 			var nameData = name.follows[i].channel.display_name;
	 			var live = "https://api.twitch.tv/kraken/streams/" + nameData + "?callback=?";

	 			$.getJSON(live)

	 			.done(function(data){
	 				var stream = data.stream
	 				if(stream!= null){
	 					var nameStreamer = stream.channel.display_name
	 						 					
	 					if(nameArray.indexOf(nameStreamer)<0){
	 						nameArray.push(nameStreamer);
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



