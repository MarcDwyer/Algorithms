class Node {
  constructor(public char: string | null) {}
  isEnd = false;
  children: Record<string, Node> = {};
}

const depthLimit = 10;

export class Trie {
  root = new Node(null);

  insert(word: string) {
    let current = this.root;

    for (const char of word) {
      if (!(char in current.children)) {
        current.children[char] = new Node(char);
      }
      current = current.children[char];
    }
    current.isEnd = true;
  }
  search(word: string) {
    let lastNode = this.root;
    let lastWord = "";
    for (const char of word) {
      if (!(char in lastNode.children)) {
        break;
      }
      lastWord += char;
      lastNode = lastNode.children[char];
    }
    const list = lastNode.isEnd ? [lastWord] : [];
    return this.getResults(lastNode, list, 0, lastWord, true);
  }
  getResults(
    node: Node,
    list: string[],
    limit: number,
    word: string,
    isStarting: boolean
  ) {
    if (!isStarting) {
      word += node.char;
    }
    if (!isStarting && node.isEnd) {
      list.push(word);
      return list;
    }
    if (limit >= depthLimit) return list;
    limit++;
    for (const childNode of Object.values(node.children)) {
      this.getResults(childNode, list, limit, word, false);
    }
    return list;
  }
}

const trie = new Trie();

trie.insert("roystang");
trie.insert("roystang123");
trie.insert("roystangxxx1233353");
trie.insert("roy123");
console.log(trie.search("roystang"));
