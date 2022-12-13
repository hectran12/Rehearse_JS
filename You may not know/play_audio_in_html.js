var sound = document.createElement('audio');
var srcAudio = document.createElement('source');
srcAudio.src = '../sound/notification.mp3';
srcAudio.type = 'audio/mpeg';
sound.appendChild(srcAudio);
sound.play();
