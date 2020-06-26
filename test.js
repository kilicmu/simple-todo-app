function validPalindrome(s) {
    var i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i++] !== s[j--]) {
            return isValidPalindrome(s, i, j - 1) || isValidPalindrome(s, i + 1, j);
        }
    }
    return true;
}
;
function isValidPalindrome(s, start, end) {
    while (start < end) {
        if (s[start++] !== s[end--]) {
            return false;
        }
    }
    return true;
}
var str = "abc";
// console.log(reverseVowels(str)) 
