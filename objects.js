var playlist = {Blink182: "All the Small Things"};
function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}
function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
}
