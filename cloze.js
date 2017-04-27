// require fs
// doesn't seem like this is necessary anymore..
// var fs = require("fs");



// constructor for ClozeFlashcard
function ClozeCard(text, cloze) {
	if (text.includes(cloze)){
    this.fulltext = text;
    this.cloze = cloze;
    this.partial = this.fulltext.replace(this.cloze, '....');
   }
   else {
   	console.log(cloze +"doesn't appear in"+ text);
   }

}

// Nice job sticking these methods on the prototype
// methods
ClozeCard.prototype.printCloze = function() {

    console.log(this.cloze);
}

ClozeCard.prototype.printFullText = function() {

    console.log(this.fulltext);
}

ClozeCard.prototype.printPartial = function() {

    console.log(this.partial);
}





module.exports = ClozeCard;