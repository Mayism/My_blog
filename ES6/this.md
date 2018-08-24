# 梳理一下JS中this的指向问题，共分为以下几种情况：

## 全局作用域或者普通函数中this指向全局对象window。
-1.全局作用域直接打印

```
console.log(this)//
```
![全局作用域](My_blog/JPG/this.jpg)

-2.普通函数调用

```
function bar(){
    console.log(this)
}
bar()
```
![普通函数](1523D4A01BF14A78B5B48317DFA5434A)

## 方法调用中谁调用this就指向谁
-1.对象方法调用

```
var person = {
    run: function (){
        console.log(this)
    }
}
person.run()
```
![对象方法调用](31F2DCEF724541788F6EF1EF848C7936)

-2.监听函数

```
var btn = document.querySelector("button")
    btn.addEventListener('click',function(){
        console.log(this)
})
```

## 在构造函数或者构造函数原型对象中this指向构造函数的实例
-1.使用new创建构造函数(注意与不实例化的区别，不实例化仍指向window)

```
function Person(name){
    this.name = name
    console.log(this)
    self = this
}
var people = new Person('iwen')
console.log(self === people)
```




