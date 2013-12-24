(function(){

	function ArrayFactoryException(message){
		this.message = message;
		this.toString = function(){
			return 'ArrayFactoryException: ' + message;
		};
	}

	/**
	 * Returns the array with its unique elements.
	 * 
	 * @return {Array}
	 */
	if (typeof Array.prototype.unique !== 'function') {
		Array.prototype.unique = function() {
			uniqueArray = [];
			this.forEach(function(value){
				if (uniqueArray.indexOf(value) == -1) {
					uniqueArray.push(value);
				}
			});

			return uniqueArray;
		}
	}

	/**
	 * Returns a dict with pairs of the unique values along with their frequencies.
	 * 
	 * @return {Array}
	 */
	if (typeof Array.prototype.freq !== 'function') {
		Array.prototype.freq = function() {
			var frequencyArray = {};
			
			this.forEach(function(value) {
				frequencyArray[value] = 0;
			});

			this.forEach(function(value) {
				frequencyArray[value]++;
			});
			
			return frequencyArray;
		}
	}

	/**
	 * Returns the array shuffled.
	 *
	 * @return {Array}
	 */
	if (typeof Array.prototype.shuffle !== 'function') {
		Array.prototype.shuffle = function() {
			for (var i = 0; i < this.length; i++) {
				rand = getRandomInt(0, this.length - 1);

				// swap the current item with the random one
				temp = this[i];
				this[i] = this[rand];
				this[rand] = temp;
			}
			return this;
		}
	}

	/**
	 * Zips an array with another given as argument. The new array starts with the first element of the original array
	 * @param {Array} array - The with which the original array will be zipped
	 * @return {Array}  
	 */
	if (typeof Array.prototype.zip !== 'function') {
		Array.prototype.zip = function(array) {
			if (!(array instanceof Array)) {
				throw new ArrayFactoryException('Function zip get only arrays as arguments.');
			}
			else {
				if (array.length == 0) {
					return this;
				}
				if (this.length == 0) {
					return array 
				}

				var zipped = new Array(),
					pair = this.length >= array.length ?
						   length = this.length:
						   length = array.length;

				;
				for (var i = 0; i < length; i++) {
					if (this[i]) {
						zipped.push(this[i])
					}
					if (array[i]) {
						zipped.push(array[i]);	
					}
				}
				return zipped//.concat(pair.second.slice(pair.first.length));
			}
		}
	}


	/**
	 * Sets all the elements of the array equal to [value] 
	 * 
	 * @param {} value - The value that will replace all elements of the array.
	 * @return {Array} 
	 *  
	 */
	if (typeof Array.prototype.set !== 'function') {
		Array.prototype.set = function(start, end, value) {
			if (arguments.length != 3) {
				throw new ArrayFactoryException('Function set needs 3 argument [start], [end], [value]');				
			}

			if (typeof start !== 'number' || typeof end !== 'number') {
				throw new ArrayFactoryException('Arguments must be numbers.');		
			}

			if (typeof start < 0 || typeof end > this.length - 1 || typeof end < 0 || typeof start > this.length - 1) {
				throw new ArrayFactoryException('Thresholds must be betweet array limits: 0 - array.length');		
			}

			if (start > end) {
				throw new ArrayFactoryException('start must be lower that end');	
			}
			for (var i = start; i <= end; i++) {
				this[i] = value;
			}

			return this;
		}
	}


	/**
	 * Sets all the elements of the array equal to [value] 
	 * 
	 * @param {} value - The value that will replace all elements of the array.
	 * @return {Array} 
	 */
	if (typeof Array.prototype.setAll !== 'function') {
		Array.prototype.setAll = function(value) {
			if (value == null) {
				throw new ArrayFactoryException('Function setAll needs an argument [value]');				
			}
			for (var i = 0; i < this.length; i++) {
				this[i] = value;
			}

			return this;
		}
	}

	/**
	 * Rotates the elements of the array [offset] positions left-wise or right-wise depending on the sign of offset.
	 * 
	 * @param {Number} offset - The offset of the rotate. 
	 *                          Negative offset means rotate left-wise and positive offset means shif right-wise. 
	 *                          Floats will be converted into integers.
	 * @return {Array} 
	 *                           
	 */
	if (typeof Array.prototype.rotate !== 'function') {
		Array.prototype.rotate = function(offset) {
			if (arguments.length != 1) {
				throw new ArrayFactoryException('Function rotate: needs an argument [offset]');			
			}
			if (typeof offset !== 'number') {
				throw new ArrayFactoryException('Function rotate: [offset] should be a number');				
			}

			// help function for moving 
			var float = function(array, positions) {
				for(var i = 0; i < positions; i++) {
					var first = array.shift();
					array.push(first);
				}

				return array;
			}

			if(Math.abs(offset) == this.length) {
				return this;
			}

			offset = Math.floor(offset); // convert it into integer anyway
			offset = offset % this.length // normalise offset larger that the array's length
			var temp = this;

			if (offset > 0) {
				temp = float(temp.reverse(), offset);
				temp = temp.reverse();
			} else {
				temp = float(temp, Math.abs(offset));
			}
			
			return temp;
		}
	}



	//------------------------------------Auxiliary functions----------------------------------------

	/**
	 * Returns a random number between two given numbers 
	 * @param  {Number} min The lower limit
	 * @param  {Number} max The upper limit
	 * @return {Number}
	 */
	function getRandomInt (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

})();