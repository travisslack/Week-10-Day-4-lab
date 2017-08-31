var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.details = function(){
  var details = "";
  details += ("Artist: " + this.artist + ", ");
  details += ("Title: " + this.title + ", ");
  details += ("Genre: " + this.genre + ", ");
  details += ("Price: " + this.price);
  return details;
}


module.exports = Record;