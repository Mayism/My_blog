导语：组件不应该直接获取或保存数据，它们不应该了解是否在展示假数据。 它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。  
# 服务
## 为什么需要服务
1.创建一个服务(以hero service为例)    
`ng generate hero service`    
2.服务的使用:  
服务必须通过Angular的**依赖注入**机制注入到组件的构造函数中，用于在多个“互不知道”的类之间共享信息。  

关于依赖注入机制：  
默认情况下，Angular CLI命令`ng generate service`会通过给`@Injectable`装饰器添加元数据的形式，为该服务把提供商注册到根注入器上。  
`@Injectable({`  
  `providedIn: 'root',`  
`})`  
3.如何注入一个服务？注入后如何调用？    
注入：私有化heroService服务，在注入组件创建的时候，会将其设置为HeroService的单例对象  
`constructor(private heroService: HeroService) { }`  
调用：  
`ngOnInit() {`  
  `this.getHeroes();`  
`}`  
4.使用RxJS的of()函数来模拟从服务器返回数据。  
`import { Observable, of } from 'rxjs';`  
`getHeroes(): Observable<Hero[]> {`  
  `return of(HEROES);`
`}`  
5.使用subscribe()来决定Observable什么时候发出，发出什么，避免异步情况下要求立即返回数据的情况  
`getHeroes(): void {`    
  `this.heroService.getHeroes()`    
      `.subscribe(heroes => this.heroes = heroes);`    
`}`  

## 显示消息
显示消息其实就是将原来heroDetail的内容通过服务的方式注入到heroComponent中去。    
1.创建服务    
`ng generate service message`    
2.定义服务内容-注入Service服务-通过Service服务发送-从Service服务显示-将显示内容绑定到messageService  
[显示消息]:(https://www.angular.cn/tutorial/toh-pt4)

# 路由
1.创建路由：使用CLI生成`APPRoutingModule`路由模块类  
`ng generate module app-routing --flat --module=app`    
2.如何添加路由定义？  
在`app-routering.module.js`:    
`import { HeroesComponent } from './heroes/heroes.component';`    
    `const routes: Routes = [`  
      `{ path: 'heroes', component: HeroesComponent }`  
`];`  

3.如何添加路由出口？
以'app-component.html'为例：    
`<h1>{{title}}</h1>`  
    `<router-outlet></router-outlet>`  
`<app-messages></app-messages>`  

在使用的时候，使用routerLink选择：  
`<nav>`  
    `<a routerLink='heroes'>Heroes</a>`  
`</nav>`  

