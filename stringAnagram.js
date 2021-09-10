//string anagram
// if the length & letters are same of two string it is called Anagram
//'hello' -> 'hlleo'
//condition
//length check for both string
//string "hello"
//{h:1,e:1,l:2,o:1}

function isAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  let counter = {};
  for (let letter of string1) {
    //putting letter into counter in 1st part & in 2nd part count the number for each letter
    //using || to if undefined then make it 0 & + 1 to count letter
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
  }
  //console.log(counter); -> count letter for string1
  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}
const check = isAnagram("hello", "llheo");
console.log(check);

// Linear time complexity o(n)
