## 笔试中看到了哈夫曼树(Huffman Tree)的最短带权路径长度(Weighted Path Length)，上网学习了一波，特来记录一下  

例：给定一组权值w= {9,1,3,5,6}，构造具有最小带权外部路径长度的扩充二叉树，并求出它的带权外部路径长度。  
* 1. 将权值从小到大进行排列后，为{1,3,5,6,9}，为有序序列  
* 2.每次提取最小的两个节点作为子叶节点的左右分支，本例中为1和4，值小的作为子叶节点，大的为右叶节点  
* 3.将新节点放入到有序序列中去，保持从小到大排序：{4,5,6,9}  
* 4.重复第二步的操作，此时有序序列为：{6,9,9}
* 5.此时序列的前两个值小于上次操作的子叶和，需要另外创建子树
* 6.重复步骤2，即可得到哈夫曼树

[!哈夫曼树](https://github.com/Mayism/My_blog/blob/master/JPG/huffman.jpg)

最短带权路径长度的计算：   
根节点到节点9的路径长度为2，节点9的带权路径长度为9*2;  
根节点到节点6的路径长度为2，节点6的带权路径长度为6*2；  
依次类推……  
哈夫曼树的带权路径长度WPL为  
9*2+6*2+5*2+3*3+1*3=52;  

顺便说一下哈夫曼编码：  
规定哈夫曼编码的左分支代表0，右分支代表1;  
从根节点到节点9，共经历两次右分支，节点9的编码就是11;  
从根节点到节点6，先经历右分，再经历左分支，节点6的编码就是10;  
依次类推…  
可得到所有的节点的哈夫曼编码为：  
权值9:11  
权值6:10  
权值5:01  
权值3:001  
权值1:000  
