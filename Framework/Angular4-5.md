#显示英雄列表
1.*ngFor的用法  
ngFor是Angular中的一个复写器指令，可以为列表中的每项数据复写它的宿主  
`<li *ngFor='let hero of heroes'>`  
(```)
`heroes: Hero[] = [`  
  `{ id: 11, name: 'Mr. Nice' },`  
  `{ id: 12, name: 'Narco' },`  
  `{ id: 13, name: 'Bombasto' },`  
  `{ id: 14, name: 'Celeritas' },`  
  `{ id: 15, name: 'Magneta' },`  
  `{ id: 16, name: 'RubberMan' },`  
  `{ id: 17, name: 'Dynama' },`  
  `{ id: 18, name: 'Dr IQ' },`  
  `{ id: 19, name: 'Magma' },`  
  `{ id: 20, name: 'Tornado' }`  
`];`  
(```)

2.Angular中的click事件:  
`<li *ngFor="let hero of heroes" (click)="onSelect(hero)">`  

3.Angular中的ngIf的含义：当调用Angular中的某个方法或者属性时，模板详情才会生效的语法。  
用法：将显示详情的<html>包裹在一个<div>标签包裹的部分里，添加属性ngIf,并将其值赋为调用的函数或者方法  
  (```)
  `<div *ngIf='selectHero'>`  
   ` ...`  
  `</div>`  
  (```)
  
4.为所选元素自定义样式 :[class.some-css-class]='some-condition' 
`[class.selected] = 'selectHero===hero'`  
当前行的英雄和selectHero相同的时候，就添加选中的样式。


  
