var playlist = {Blink182: "All the Small Things"};
function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return delete playlist.artistName
}
