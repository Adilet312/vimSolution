import './styles.css';

/*
fetch data and do debounce
to do list
clock project
*/
/*
------Find missing number
------Find duplicate number
------Remove similar words
------Find longest palindrome
------Count palindromic substrings
------Find longest substring
------Flattern nested array
------LongestWord
------Union , Intersection, Differences, and Simmetric Differences
*/
const createArray = (elementArray, indexArray) => {
  const target = []
  for( let idx = 0; idx < elementArray.length; idx++){
    target.splice(indexArray[idx], 0 , elementArray[idx])
  }
  return target;
}
console.log(createArray([0,1,2,3,4],[0,1,2,2,1]));
