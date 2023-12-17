function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length).fill(false);

  for (const word of wordDict) {
    let tmp = "";
    if (!s.length) break;
    for (let i = 0; i < s.length; i++) {
      if (tmp === word) {
        tmp = "";
        dp[i] = true;
        break;
      } else {
        tmp += s[i];
      }
    }
  }
  return s.length === 0;
}

// console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
