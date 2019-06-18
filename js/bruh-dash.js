var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
    return array[0];
  },

  // returns the last element of an array
  last: function (array) {
    let end = array.length;
    return array[end-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, val) {
    for(i=0; i<arr.length; i++){
      if(arr[i] === val){
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, val) {
    for(i=arr.length; i>0; i--){
      if(arr[i] === val){
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    let answer = arr;
    arr.pop();
    return answer;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    let answer = [];
    for(i=0; i<arr.length; i++){
      if(arr[i]){
        answer.push(arr[i]);
      }
    }
    return answer;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, val1, val2) {
    return array.slice(val1,val2);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, number){
    if(number === 0){
      return array;
    }else if(number === undefined){
      array.shift();
      return array;
    }else{
      for(i=0; i<number; i++){
        array.shift();
      }
      return array;
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, number) {
    if(number === 0){
      return array;
    }else if(number === undefined){
      array.pop();
      return array;
    }else{
      for(i=0; i<number; i++){
        array.pop();
      }
      return array;
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, number) {
    if(number === 0){
      let emptyArr = [];
      return emptyArr;
    }else if(number > array.length){
      return array;
    }else if(number === undefined){
      let tempArr = [];
      tempArr.push(array[0]);
      return tempArr;
    }else{
      return array.slice(0, number);
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (array, number) {
    if(number === 0){
      let emptyArr = [];
      return emptyArr;
    }else if(number > array.length){
      return array;
    }else if(number === undefined){
      let tempArr = [];
      tempArr.push(array[array.length-1]);
      return tempArr;
    }else{
      return array.slice(array.length-number, array.length);
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, start, end) {  
    if(start && end){
      for(let i=start; i<end; i++){
        arr[i] = val;
      }
    }else{
      for (let i=0; i<arr.length; i++){
        arr[i] = val;
      }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (array, val1, val2) {
    let answer = [];
    for(i=0; i<array.length; i++){
      if(array[i] !== val1 && array[i] !== val2){
        answer.push(array[i]);
      }
    }
    return answer;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array, arrIndices) {
    let answer = [];
    let tempIndex = 0;
    for(i=0; i<array.length; i++){
      if(i === arrIndices[tempIndex]){
        answer.push(array[i]);
        tempIndex++;
      }
    }
    return answer;
  },

  // creates an array excluding all the specified values
  without: function(array, val1, val2) {
    let answer = [];
    for(i=0; i<array.length; i++){
      if(array[i] !== val1 && array[i] !== val2){
        answer.push(array[i]);
      }
    }
    return answer;
  },

  // returns an array with specified values excluded
  difference: function(array1, array2) {
    let answer = [];
    for(i=0; i<array1.length; i++){
      if(array1[i] !== array2[i]){
        answer.push(array1[i]);
      }
    }
    return answer;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (array1, array2) {
    let answer = [];
    for(i=0; i<array1.length; i++){
      let tempArr = [];
      tempArr.push(array1[i]);
      tempArr.push(array2[i]);
      answer.push(tempArr);
    }
    return answer;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (array) {
    let answer = [];
    let tempArr1 = [];
    let tempArr2 = [];
    for(i=0; i<array.length; i++){
      tempArr1.push(array[i][0]);
      tempArr2.push(array[i][1]);
    }
    answer.push(tempArr1);
    answer.push(tempArr2);
    return answer;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(array, val){ // IM STUCK
    let emptyArr = [];
    if(val === 0){
      return emptyArr;
    }else if(val === array.length || val >= array.length){
      emptyArr.push(array);
      return emptyArr;
    }else if(array && val){
      
    }else{
      return emptyArr;
    }
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, func) { // collection covers arrays and objects
    for(let key in collection){ // for each key in that collection
      func(collection[key]); // invoke that function for each key in that collection
    }

    // answer for cycling function through array elements
    /*
    for(let i=0; i<arr.length; i++){
      func(arr[i]);
    }
    */
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
