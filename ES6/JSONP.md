## JSONP的原理：由于<script>标签没有跨域限制的漏洞，我们可以通过<script>标签指向需要访问的地址并提供一个回调函数来接收需要的数据。JSONP由两部分组成：回调函数和数据。回调函数是当响应到来时应该在页面中调用的函数。回调函数的名字一般是在请求中指定的。而数据就是传入回调函数中的JSON数据。下面是一个典型的JSONP请求。

## 简单原理

```
<script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
<script>
    function jsonp(data){
        console.log(data)
    }
</script>
```

## 手写封装的源码:

```
function jsonp(url,jsonpCallback,success){
    let script = document.createElement("script")
    script.src = url;
    script.async = true;
    script.type = "text/javascript";
    window[jsonpCallback] = function(data){
        success & success(data);
    }
    document.body.appendChild(script)
}

//下面是远程数据
jsonp(
    "http://xxx",
    "callback",
    function(value) {
    console.log(value);
  }
)//jsonp格式的数据
```
### 下面来看一个简单的例子来帮助理解：

```
function handleRsponse(response){
    alert("您乘坐的航班为,"+ response.flightNmuber + "目的地为"+response.city)
}

let script = document.createElement("script")
script.url = "http://freegeoip.net/json/?callback=handleResponse"//jsonp请求

document.body.appendChild(script)

handleResponse(
{
    flightNumber:A10002,
    city: Hawaii
}
)
```


