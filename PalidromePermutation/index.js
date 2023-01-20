const sequence = "pop";
const sequence1 = "kayak";
const sequence2 = "yo banana boy";
const sequence3 = "this is the truth";
const sequence4 = "abab";

const isPalindrome = seq => {
    // Write your solution here.
    let arr = seq.split(" ").join("").split("");
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        let elem = arr[i];
        if(obj[elem] === undefined){
            obj[elem] = 1;
        } else{
            obj[elem] += 1;
        }
    }
    let count = 0;
    let value = Object.values(obj);
    for(let j = 0; j < value.length; j++){
        let input = value[j];
        if(input % 2 !== 0){
            count += 1;
        }
    }
    if(count > 1){
        return false;
    } else{
        return true;
    }
}

console.log(isPalindrome(sequence));             // true;
console.log(isPalindrome(sequence1));            // true
console.log(isPalindrome(sequence2));            // true
console.log(isPalindrome(sequence3));            // false
console.log(isPalindrome(sequence4));            // true
// because "abab" can be rearranged into a palindrome, "abba"
