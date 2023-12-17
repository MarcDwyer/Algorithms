function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    let leastCoins = dp[i];
    for (const coin of coins) {
      if (coin <= i) {
        const diff = i - coin;
        leastCoins = Math.min(dp[diff] + 1, leastCoins);
      }
    }
    dp[i] = leastCoins;
  }
  const last = dp[dp.length - 1];
  return last === Infinity ? -1 : last;
}
