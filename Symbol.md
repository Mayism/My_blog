# Symbol：
ES6中新增的数据类型：Symbol
含义：表示独一无二的值，其最大的作用是用来定义对象的唯一属性名

## 基本属性：
1. Symbol是通过Symbol函数生成的，不带new
   
```
var symbol1= Symbol()
var symbol2= Symbol('Alice')
console.log(symbol1,symbol2)
```
2. 可以使用typeof检测Symbol，返回为symbol
3. 由于Symbol不是对象，故不存在属性

```
var symbol = Symbol()
symbol.name = 'Alice' //return false
```
4. Symbol可以转成字符串，也可以转化成布尔值，但是不能转换为数字
    
```
var symbol = Symbol('Alice')
console.log(symbol.toString());
console.log(Boolean(symbol))
if(symbol){
    console.log('Yes')
}

```

## 作为属性名
由于每个Symbol值都是不相等的，这意味着Symbol值可以用于对象的属性名，保证不会重名。

```
var name =Symbol()
var obj = {
    [name]:"Alice"
};
```
## 作为函数名

```
var func = Symbol();
var obj = {
	func: function() {
		console.log("YES");
	}
};
obj.func(); // 输出：YES

```
## 获取只包含Symbol类型的属性名的数组的方法：Object.getOwnPropertySymbols()方法
    
```
var obj = {};
var age = Symbol("age");
var job = Symbol("job");
obj[age] = "Alice";
obj[job] = "student";
obj.age = 23;
var symbols = Object.getOwnPropertySymbols(obj);
var names = Object.getOwnPropertyNames(obj);
console.log(symbols.length); // 输出：2
console.log(symbols); // 输出：[Symbol(age), Symbol(job)]
console.log(obj[symbols[0]]); // 输出：Alice
console.log(names.length); // 输出：1
console.log(obj[names[0]]); // 输出：23

```





