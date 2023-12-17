function accountsMerge(accounts: string[][]): string[][] {
  const graph = new Map();
  const owner = new Map();

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!graph.has(email)) graph.set(email, new Set());
      graph.get(email).add(emails[0]);
      graph.get(emails[0]).add(email);
    }
    owner.set(emails[0], name);
  }

  const visited = new Set();
  const result: any[] = [];

  for (const email of graph.keys()) {
    const acc: string[] = [];

    function search(key: string) {
      if (visited.has(key)) return;
      visited.add(key);
      acc.push(key);
      graph.get(key).forEach(search);
    }
    search(email);
    if (acc.length) {
      result.push([owner.get(email), ...acc.sort()]);
    }
  }

  return result;
}
const accounts = [
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"],
];

console.log(accountsMerge(accounts));
