function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callback(collection[key]);
      }
    }
    return collection;
  }

function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      return collection.map(callback);
    } else {
      const result = {};
      Object.entries(collection).forEach(([key, value]) => {
        result[key] = callback(value);
      });
      return result;
    }
  }
function myReduce(collection, callback, initialAcc) {
    let acc = initialAcc !== undefined ? initialAcc : collection[0];
    let startIndex = initialAcc !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    
    return acc;
  }
  const testArr = [1, 2, 3, 4];
    const testObj = {one: 1, two: 2, three: 3, four: 4};

    const sumCallback = (acc, val) => acc + val;
    const productCallback = (acc, val) => acc * val;
    const tripleSumCallback = (acc, val) => acc + (val * 3);
    console.log(myReduce(testArr, sumCallback)); // returns 10
    console.log(myReduce(testArr, productCallback)); // returns 24
    console.log(myReduce(testArr, tripleSumCallback, 10)); // returns 40

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
  }
  
  function findCBGenerator(target) {
    return (function(currEl) { return target === currEl })
  }
  
  const intArr = [-1, 4, 0, 1, 3, 2, 3, 4, 5, 6]
  const strArr = ["maru", "choux", "doge", "coco", "waychillgoldeneye", "trance"]
  const objB = {b: 'b'}
  const objArr = [{a: 'a'}, objB]
  
  console.log(myFind(intArr, findCBGenerator(4))) // expected output: 4
  console.log(myFind(strArr, findCBGenerator("waychillgoldeneye"))) // expected output: "waychillgoldeneye"
  console.log(myFind(objArr, findCBGenerator(objB))) // expected output: {b: 'b'}
  
function myFilter(collection, callback) {
    const result = []
    for (const item of collection) {
      if (callback(item)) {
        result.push(item)
      }
    }
    return result
  }
    // Define a test array and callback
    const testAr = [6, 11, 5, 12, 17, 100, 9, 1, -8];
    function excluder(currEl) {
    return (currEl > 10);
    }

    // Test the function with the test array and callback
    const greaterThan10 = myFilter(testAr, excluder);
    console.log(greaterThan10); // Expected output: [11, 12, 17, 100]

function mySize(collection) {
        if (Array.isArray(collection)) {
          return collection.length;
        } else if (typeof collection === 'object' && collection !== null) {
          return Object.keys(collection).length;
        } else {
          return 0;
        }
      }
      const tstArr = [1, 2, 3, 4, 5]
      const tstObj = { a: 1, b: 2, c: 3 }
      
      console.log(mySize(tstArr)) // expected output: 5
      console.log(mySize(tstObj)) // expected output: 3
          
function myFirst(collection, n = 1) {
    if (Array.isArray(collection)) {
    return collection.slice(0, n);
    } else if (typeof collection === 'object') {
    const keys = Object.keys(collection);
        return keys.slice(0, n).reduce((acc, key) => {
        acc[key] = collection[key];
            return acc;
        }, {});
        } else {
          return undefined;
        }
      }
      
      const testArr1 = [1, 2, 3, 4, 5];
      console.log(myFirst(testArr1)); // output: 1
      console.log(myFirst(testArr1, 3)); // output: [1, 2, 3]
      
      const testObj1 = { one: 1, two: 2, three: 3, four: 4, five: 5 };
      console.log(myFirst(testObj1)); // output: { one: 1 }
      console.log(myFirst(testObj1, 3)); // output: { one: 1, two: 2, three: 3 }
      console.log(myFirst('not a collection')); // output: undefined
function myLast(collection, n) {
    if (!n) return collection[collection.length - 1];
    return collection.slice(-n);
    }
    const testArr2 = [1, 2, 3, 4];

    console.log(myLast(testArr2)); // Output: 4
    console.log(myLast(testArr2, 3)); // Output: [2, 3, 4]
    console.log(myLast(testArr2, 5)); // Output: [1, 2, 3, 4]
    console.log(myLast(testArr2, 0)); // Output: []
    console.log(myLast("hello", 2)); // Output: "lo"
    
function myKeys(obj) {
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
        result.push(key);
        }
    }
    return result;
    }
    const myObj = { a: 1, b: 2, c: 3 };
    console.log(myKeys(myObj)); // should output ["a", "b", "c"]
       
function myValues(obj) {
    return Object.keys(obj).map(key => obj[key]);
    }
    
        