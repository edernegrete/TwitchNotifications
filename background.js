var following = "https://api.twitch.tv/kraken/users/ederyairr/follows/channels?callback=?"
var nameArray = [];
var logoArray = [];
var gameArray = [];
var urlArray =[];

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
 					var gameStream = stream.channel.game;
 					var logoStreamer = stream.channel.logo;
 					var linkStreamer = stream.channel.link;
 					var message = " is live!"
 					var opt={
				      type: 'basic',
				      title: 'Live!',
				      message: '',
				      priority: 1,
				      iconUrl: 'icon.png'
				    };
				    
				   
 					nameArray.push(nameStreamer);
 					gameArray.push(gameStream);
 					logoArray.push(logoStreamer);
 					urlArray.push(linkStreamer);
  		
 					for(var i = 0; i<nameArray.length; i++){
 						console.log(nameArray.length)
	  					opt['message'] = nameArray[i] + message;
	  					chrome.notifications.create('id', opt, function(id){})
	  					
 					}
 				}
 				
 			})
 		}
 	});
