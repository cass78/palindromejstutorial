module.exports = Phrase;

// Adds reverse to all strings
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

//Defines a Phrase object
function Phrase(content){
	this.content = content;
	
	// exercise define a processor method
  this.processor = function(string) {
		return string.toLowerCase();
	}
	
	// returns content processed for palindrome testing
	this.processedContent = function processedContent() {
		return this.processor(this.content);
	}
	
	// returns true for a palindrome, false otherwise
  this.palindrome = function palindrome(){
	  return this.processedContent() === this.processedContent().reverse();
  }
}