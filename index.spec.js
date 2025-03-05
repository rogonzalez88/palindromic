const longestPalindromicSubstring = require("./index");

describe("longestPalindromicSubstring", () => {
  const examples = [
    {
      s: "abac",
      output: "aba",
    },
    {
      s: "tacag",
      output: "aca",
    },
    {
      s: "wegeeksskeegyuwe",
      output: "geeksskeeg",
    },
  ];
  it("should return the longest palindromic substring", () => {
    examples.forEach(({ s, output }) => {
      expect(longestPalindromicSubstring(s)).toEqual(output);
    });
  });
});
