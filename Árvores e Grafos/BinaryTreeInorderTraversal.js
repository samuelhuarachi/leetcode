const { randomUUID } = require("crypto");


function TreeNode(val, left = null, right = null) {
    this.id = randomUUID();
    this.val = val;
    this.left = left;
    this.right = right;
}


function inorderTraversal(root) {
  const result = [];

  function inorder(node) {
    if (!node) return;

    inorder(node.left);        // 1. esquerda
    result.push(node.val);     // 2. nó
    inorder(node.right);       // 3. direita
  }

  inorder(root);
  return result;
}

function print_stack(stack) {
    const b =[];
    for (const s of stack) {
        b.push(s.val);
    }

    console.log(b);
}

function inorderTraversal2(root) {
  const result = [];
  const stack = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {         // vai até o mais à esquerda
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();    // pega o último da pilha
    result.push(curr.val); // visita o nó
    curr = curr.right;     // agora vai para a direita

  }

  return result;
}

const node_f = new TreeNode("F");
const node_g = new TreeNode("G");


const node_d = new TreeNode("D");
const node_e = new TreeNode("E", node_f, node_g);

const node_c = new TreeNode("C", node_d, node_e);
const node_b = new TreeNode("B", node_c);
const node_a = new TreeNode("A", null, node_b);



// console.log(inorderTraversal(root));
console.log(inorderTraversal2(node_a));

