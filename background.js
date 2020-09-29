OneSignal.init(
	{
		appId: "2cc64057-bf43-4c12-af4c-86f6152b7f0e",
		googleProjectNumber: "665446091734"
	}
);
var xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.twitch.tv/kraken/streams/platiscript?client_id=6pl33h0zhi8yysfgy14bfk4si64w0g", true)
xhr.onreadystatechange = function(channel) {
  if(xhr.readyState == 4) {
    var data = JSON.parse(xhr.responseText)
	var elm  = document.getElementById("info")  
	if(data["stream"] == null){
      //Stream Eteint
    }else{
      //Stream Actif    
	}
}
  }
xhr.send();
