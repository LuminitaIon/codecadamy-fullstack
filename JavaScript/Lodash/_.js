let _ = {
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange(number, start, end) {
      if(end == null) {
        end = start;
        start = 0;
      }
      if(start > end) {
        let temp = end;
        end = start;
        start = temp;
      }
      let isInRange;
      if((start <= number) && (end > number)){
        isInRange = true;
      } else {
        isInRange = false;
      }
      return isInRange;
    },
  
    words(string)  {
      let words = string.split(' ');
      return words;
    },
  
    pad(string, length) {
      if(string.length >= length) {
        return string;
      }
      let startPaddingLength = Math.floor((length - string.length) / 2);
      let endPaddingLength = length - string.length - startPaddingLength;
      let paddedString  = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;
    },
  
    has(object, key) {
      let hasValue = object.hasOwnProperty(key)
      return hasValue
    },
  
    invert(object) {
      let invertedObject = {}
      for(let key in object) {
        let originalValue = object[key]
        invertedObject[originalValue] = key
      }
      return invertedObject;
    },
  
    findKey(object, predicate) {
      for(let key in object) {
        let value = object[key]
        let predicateReturnValue = predicate(value)
        if(predicateReturnValue) {
          return key
        }
      }
      return undefined
    },
  
    drop(array, n) {
      if(n == null) {
        n = 1;
      }
      let droppedArray = array.slice(n, array.length);
      return droppedArray; 
    },
  
    dropWhile(array, predicate) {
      let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
      let droppedArray = this.drop(array,dropNumber);
      return droppedArray;
    },
  
    chunk(array, size) {
      if(size == null) {
        size = 1;
      }
      let arrayChuncks = [];
      for(let i = 0; i < array.length; i+size) {
        let arrayChunk = array.slice(i, i+size);
        arrayChuncks.push(arrayChunk);
      }
      return arrayChunks;
    }
  }
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;