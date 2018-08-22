导语：组件不应该直接获取或保存数据，它们不应该了解是否在展示假数据。 它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。  
# 服务
1.创建一个服务(以hero service为例)    
`ng generate hero service`    
2.服务的使用:  
服务必须通过Angular的**依赖注入**机制注入到组件的构造函数中，用于在多个“互不知道”的类之间共享信息。  

关于依赖注入机制：  
默认情况下，Angular CLI命令`ng generate service`会通过给`@Injectable`装饰器添加元数据的形式，为该服务把提供商注册到根注入器上。  
`@Injectable({`
  `providedIn: 'root',`
`})`
