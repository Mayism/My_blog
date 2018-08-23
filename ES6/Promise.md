# ES6 Promise：  
Promise是一个对象，它可以获取异步操作的结果，接收一个函数为参数，同时这个函数接收两个参数：resolve和reject。  
resolve函数的作用是将Promise的状态从“未完成”转换为“成功”    
reject函数的作用是将Promise的状态从“未完成”转换为“失败”    

## 特点：
      (1).对象的状态不受外界影响。Promise对象的状态有三种：pending,resolve,reject三种。只有异步操作的结果能够决定状态，  
          其他操作都是做不到的。  
      (2).一旦状态改变，就不会再变，任何时候都会得到这个结果。Promise的状态只有两种：pending变成resolve或者pending变成  
          reject。  

关于then函数：then函数指定了对应Promise两种状态变化发生时的回调函数，自然地，我们可以知道then函数接收的两个参数为resolve和reject.  

## 用例：  
1.使用setTimeout模拟异步操作，100ms以后进入resolve状态，控制台打印value  
```
function timeout(ms){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,ms,'done')
    })
}

timeout(100).then((value)=>{
    console.log(value)
})
```

2. Ajax中Promise的应用：getJSON是对XMLHttpRequest对象的封装，用于发出一个针对HTTP请求，并且返回一个Promise对象  
```
const getJSON = function(url){
const promise = new Promise(function(resolve,reject){
    const handler = function (){
        if(this.readyState !== 4){
            return ;
        }else if(this.readyState == 200){
            resolve(this.response)
        }else{
            reject(new Error(this.stateText))
        }
    }
    const client = new XMLHttpRequest();
    client.open("GET",url);
    client.onreadystatechange = handler;
    client.responType = 'json'
    client.setRequestHeader('Accept',"application/json")
    client.send();
})
return promise;
}

getJSON("/posts.json").then(json)=>{
    console.log('Contents:' + json)
},function(error){
    console.log('出错了',error)
}

```

