/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

class Node1 {
  val: number;
  neighbors: Node[] | undefined;
  constructor(val?: number, neighbors?: Node1[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(root: Node1 | null): Node1 | null {
  const nodes = new Map();

  function setNodes(node: Node1 | null) {
    if (!node || !node.neighbors) return;
    nodes.set(node, new Node1(node.val));
    for (const neighbor of node.neighbors ?? []) {
      setNodes(neighbor);
    }
  }

  setNodes(root);

  function deepClone(oldNode: Node1 | null) {
    const clonedNode = nodes.get(oldNode);
    while (oldNode.neighbors) {
      for (const neighbor of oldNode.neighbors) {
        clonedNode.neighbors.push(deepClone(neighbor));
      }
    }
    return clonedNode;
  }

  return deepClone(root);
}
