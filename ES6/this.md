# 梳理一下JS中this的指向问题，共分为以下几种情况：

## 全局作用域或者普通函数中this指向全局对象window。
-1.全局作用域直接打印

```
console.log(this)//
```
![全局作用域](https://github.com/Mayism/My_blog/blob/master/JPG/this.jpg)

-2.普通函数调用

```
function bar(){
    console.log(this)
}
bar()
```
![普通函数](https://github.com/Mayism/My_blog/blob/master/JPG/%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0.jpg)

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
![对象方法调用](https://github.com/Mayism/My_blog/blob/master/JPG/%E5%AF%B9%E8%B1%A1%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8.jpg)

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




