/**
 * jsWritr
 *
 * 2018 Lukasz Formela
 *
 * lukaszformela.com
 */

( function jsWritr() {
	
	"use strict";
	
	/**
	 * Array of phrases to display
	 */
	var phrases = [
		"I enjoy coding.",
		"I'm a minimalist.",
		"I'm a regular guy."
	];
	
	
	/**
	 * Blinking character
	 */
	var character = "|";
	
	
	/**
	 * Sentence iterator
	 */
	var i = 0; 
	
	
	/**
	 * Character iterator
	 */
	var j = 0;
	
	
	/**
	 * Pause iterator
	 */
	var k = 0;
	
	
	/**
	 * Blink iterator
	 */
	var l = 0;
	
	/**
	 * Length of phrases array
	 */
	var phrasesLength = phrases.length;
	
	
	/**
	 * Phrase div class
	 */
	var phraseDiv = document.getElementById('phrase-span');
	phraseDiv.textContent = ""; // empty string
	
	
	/**
	 * Blinking char div class
	 */
	var blinkingDiv = document.getElementById('blink-span');
	
	
	/**
	 * Blinking character function
	 */
	( function blink() {
		
		if ( l == 0 ) {
			
			setTimeout( function() {
			
				blinkingDiv.textContent = character;
				l++;
				blink();
				
			}, 500 );
			
		} else {
			
			setTimeout( function() {
			
				blinkingDiv.textContent = blinkingDiv.textContent.slice(0, -1);
				l = 0;
				blink();
				
			}, 500 );
			
		}
		
	}());
	
	
	/**
	 * Writing/erasing function
	 */
	( function write(i, j) {
		
		if ( i < phrasesLength ) {
			
			// Select from range between 0 and 20 seconds
			var timeout = Math.floor( Math.random() * 250 );
			
			
			// If iterator is smaller than the length of a sentence, proceed
			if ( j < phrases[i].length ) {
				
				setTimeout( function() {
					
					// Add new char to the div
					phraseDiv.innerHTML = phraseDiv.innerHTML + phrases[i].charAt(j);
					
					// Increase iterator
					j++;
					
					// Run function recursively
					write(i, j);
					
				}, timeout );
			
			
			// If iterator has reached the length of sentence, 
			// repeat the loop until there are characters of sentence left
			} else if ( phraseDiv.innerHTML.length > 0 ) {
				
				if ( k == 0 ) {
					
					( function() {
						
						// Just a pause before erasing the content
						setTimeout( function() { 
						
							k = 1;
							
							// Run function recursively
							write(i, j);
						
						}, 3000 );
						
					}());
					
				} else {
					
					setTimeout( function() {
					
						// Remove last character
						phraseDiv.textContent = phraseDiv.textContent.slice(0, -1);
						
						// Run function recursively
						write(i, j);
						
					}, 20 );
					
				}
				
			} else {
				
				if ( i < phrasesLength ) {
					
					// Increase sentece iterator
					i++;
					
					// Reset character iterator
					j = 0;
					
					// Reset pause iterator
					k = 0;
					
					setTimeout( function() {
						
						write(i, j);
						
					}, 1000 );
					
				}
			
			}
			
		} else {
			
			// Now we can either start over
			i = 0;
			j = 0;
			write(i, j);
			
			// Or quit
			// return;
			
		}
		
	}());
	
})();
