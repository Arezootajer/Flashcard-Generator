// require fs
var fs = require("fs");



// constructor for ClozeFlashcard
function ClozeCard(text, cloze) {
	if (text.includes(cloze)){
    this.fulltext = text;
    this.cloze = cloze;
    this.partial = this.text.replace(this.cloze, '....');
   }
   else {
   	console.log(cloze +"doesn't appear in"+ text);
   }

}
// methods
ClozeCard.prototype.cloze = function() {

    console.log(this.cloze);
}

ClozeCard.prototype.fullText = function() {

    console.log(this.fulltext);
}

ClozeCard.prototype.partial = function() {

    console.log(this.partial);
}


ClozeCard.prototype.partial = function() {

    console.log(this.partial);
}


module.exports = ClozeCard;