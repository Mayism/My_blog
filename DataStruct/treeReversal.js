//二叉树的前序、中序和后序遍历

//# 递归法实现
function treeNode(){
  this.val = val 
  this.left = this.right = null
}

//前序遍历
function pre_traversal(root){
    if(root){
      console.log(root)
      pre_traversal(root.left)
      pre_traversal(root.right)
    }
}

//中序遍历
function mid_traversal(root){
    mid_traversal(root.left)
    console.log(root)
    mid_traversal(root.right)
}

//后序遍历
function fin_traversal(root){
    fin_traversal(root.left)
    fin_traversal(root.right)
    console.log(root)
}

//非递归法
//前序遍历
function pre_reaversal(root){
    if(root){
    let stack = []
    //先将root push进栈
    stack.push(root)
    
    while(stack.length){
        root = stack.pop()
        
        console.log(root)
        //前序遍历的顺序是先左后右，而栈的特点是先进后出，参考push方法的用法
        if(root.right){
          satck.push(root.right)
        }
        
        if(root.left){
          stack.push(root.left)
        }
    }
    }
}

//中序遍历
function mid_traversal(root){
  if(root){
  let stack = []
   // 中序遍历是先左再根最后右
   // 所以首先应该先把最左边节点遍历到底依次 push 进栈
   // 当左边没有节点时，就打印栈顶元素，然后寻找右节点
   // 对于最左边的叶节点来说，可以把它看成是两个 null 节点的父节点
   // 左边打印不出东西就把父节点拿出来打印，然后再看右节点
   while(stack.length || root){
      if(root){
        stack.push(root)
        root = root.left
      }else{
        root = stack.pop()
        console.log(root)
        root = root.right
      }
   }
  }
}

//后序遍历
function pos(root) {
  if (root) {
    let stack1 = [];
    let stack2 = [];
    // 后序遍历是先左再右最后根
	// 所以对于一个栈来说，应该先 push 根节点
    // 然后 push 右节点，最后 push 左节点
    stack1.push(root);
    while (stack1.length > 0) {
      root = stack1.pop();
      stack2.push(root);
      if (root.left) {
        stack1.push(root.left);
      }
      if (root.right) {
        stack1.push(root.right);
      }
    }
    while (stack2.length > 0) {
      console.log(s2.pop());
    }
  }
}
