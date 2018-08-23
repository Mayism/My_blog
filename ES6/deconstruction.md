# 解构的含义：  
允许按照一定的模式，从数组和对象中提取值，对变量进行赋值

## 1.数组的解构
比如：
第一种：完全解构

```
let [a,b,c] = [1,2,3] //a=1,b=2,c=3
```
第二种：不完全解构

```
let [x,y] = [1,2,3] //x=1,y=2

```

Tip:解构赋值一般是允许指定默认值的，如

```
let [x='a', b] = ['b']
```

## 2.对象的解构
对象的解构可以这样：

```
let { foo,bar } = { foo:"aaa", bar:"bbb" }//
```
但如果对象的属性没有次序，则应该这样进行解构

```
let { foo: baz} = { foo:"aaa",bar:"bbb" } //baz = "aaa"
```

## 3.字符串的解构赋值

```
const [a,b,c,d,e] = 'hello' //a ='h',...
```

## 4.数值和布尔值的解构赋值
```
let {toString : s} = 123;
s === Number.prototype.toString
```

## 5.函数参数的解构赋值

```
function add([x,y]){
    return x+y
}

add([1,2]); //3
```

函数参数的解构也支持默认值

```
function move({x=0,y=0}={}){
    return [x,y];
}

move({x:3});
```

## 说一下解构的用途：
(1).交换变量的值(不涉及第三个变量):
    
```
let x = 1;
let y = 2;

[x,y] = [y,x]
```
(2).从函数中返回多个值:函数要返回多个值，创建实例的时候，使用函数解构接收

```
function example(){
    return [1,2,3];
}
let [a,b,c] = example()
```
(3).函数参数的定义: 将一组参数与变量名对应起来,和用途(2)类似

```
function f([x,y,z]){...}
f([1,2,3])
```

[更多用途]:(http://es6.ruanyifeng.com/#docs/destructuring)
















