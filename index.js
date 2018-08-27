module.exports = Phrase;

// Adds reverse to all strings
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

//Defines a Phrase object
function Phrase(content){
	this.content = content;
	
	// returns content processed for palindrome testing
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}
	
	//Returns the letters in the content, eg Hello, World! == helloWorld
	this.letters = function letters() {
		let theLetters = [];
		for(let i = 0; i < this.content.length; i++){
			if(this.content.charAt(i).match(/[a-zA-Z]/)) {
				theLetters.push(this.content.charAt(i));
			}
		}
		return theLetters.join("");
	}
	
	// returns true for a palindrome, false otherwise
  this.palindrome = function palindrome(){
	  return this.processedContent() === this.processedContent().reverse();
  }
}