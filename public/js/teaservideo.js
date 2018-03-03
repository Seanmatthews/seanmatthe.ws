var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   var player = [];
   var videos = '{{ .Params.media }}'.split(',');

   var playerVars = {
		modestbranding: '1',
       controls: '0',
       autoplay: '1',          
       disablekb: '1',
       rel: '0',
       loop: '1',
       autohide: '1',
       fs: '0'
   	};
      
   function onYouTubeIframeAPIReady() {
   		for (var i=0; i<3; ++i) {
   			playerVars['playlist'] = videos[i];
       	player[i] = new YT.Player('media'+i, {
       	height: '224',
         width: '300',
         	playerVars: playerVars,
          videoId: videos[i],
          events: {
            	'onReady': onPlayerReady
          }
        });
		} 
	}

   function onPlayerReady(event) {
   		event.target.mute();
      event.target.playVideo();
   }
