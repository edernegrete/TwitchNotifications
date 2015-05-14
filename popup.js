var name;
function passData () {
	name = $('#Input').val()
	localStorage.setItem('name', name)
	chrome.runtime.sendMessage({type: "name", name:name});
}
if(name==''){
	$('#Message').text('')
	$('#Name').text('Write your username!')
}else{
	$('#Name').text(name)	
}
$('#Form').on('submit', passData)


