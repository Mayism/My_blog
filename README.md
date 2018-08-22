# My_blog
learning notebook

#Angular文档学习之要点梳理：
## 第一节：应用的“外壳”
1.安装Angular CLI命令行工具：  
    `npm install -g @angular/cli`  
2.创建新应用(创建的项目名称为angular-tour-of-heros)：  
    `ng new angular-tour-of-heroes`  
3.启动应用：<br>
    `cd angular-tour-of-heroes`  
    `ng serve --open`  
这样一来我们就创建了最简单的Angular项目了，可以开始玩耍啦  
    
注： 在1，2步的时候npm在安装模块时会有遗漏，出错的话亲测改用yarn install会比较好使  
     angular的插值绑定语法，`<h1>{{title}}</h1>`, 意为把组件的 title 属性的值绑定到 HTML 中的 h1 标记中   
     
## 第二节：英雄编辑器
1.创建新的组件      
    `ng generate component heroes`
注：那么该如何使用？    
使用元素选择器在父组件的模板中匹配 HTML 元素的名称，以识别出该组件，即:    
    `slector:'app-xxx'`  
在AppComponent模板文件中引入，即app-component.html中  
    `<app-xxx></app-xxx>`  
2.如需绑定属性:使用上节提到的插值绑定的方法  
    `<h1>{{xxx}}</h1>`  
  如需绑定对象  
  -自定义ts文件xxx.ts   
    `export class xx{`  
    `}`  
  -在组件的类文件中import并且进行实例化   
   `import {xxx} from ''`    
   `import xxx from ''`    
差异在于前者可以实现按需加载，可以优化组件的加载效率，而后者却做不到   
3.Angular的语法糖：`{{xxx.name | uppercase}}`--即字符串大写  
  Angular管道的概念:可以格式化字符串、金额、日期和其它显示数据  
4.双向绑定：实现数据流从组件类流出到屏幕，并且从屏幕流回到组件类类似的数据自动化流动  
    `<input [(ng-model)] = "xxx.name">`  
  其使用依赖于模块FormsModule，必须在app.module.ts中导入并且进行声明  
      `import {Formsmodule} from '@angular/forms'`
      `import:[`  
          `Formmodule`  
      `]`  
  
