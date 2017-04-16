// require fs
var fs = require("fs");



// constructor for Basiccard
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
   }
//methods

   BasicCard.prototype.front = function() {

    console.log(this.front);
}

BasicCard.prototype.back = function() {

    console.log(this.back);
}


module.exports = BasicCard;