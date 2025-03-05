// Longest palindromic substring: Given a string, find the longest substring which is palindrome.

// Check if a string is a palindrome
const isPalindrome = (s) => {
  return s == s.split('').reverse().join('');
}

const longestPalindromicSubstring = (s) => {
  let longest = "";
  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
    // Iterate through the string starting from the next character
    for (let j = i + 1; j <= s.length; j++) {
      // Get the substring
      let substring = s.slice(i, j);
      // Check if the substring is palindrome and if it is longer than the previous palindrome
      if (isPalindrome(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }
  return longest;
}

module.exports = longestPalindromicSubstring;
