
function Human(options){
  this.name = options.name;
  this.city = options.city;
} // 构造函数结束

// 1. prototype 的原始写法
Human.prototype = {
constructor: Human,  // 覆盖时，修正指针指向
species: function(){},
walk: function(){}, 
useTools: function(){}, 
}

// 2. 常用的普通方式
Human.prototype.species = function(){} 
Human.prototype.walk = function(){} 
Human.prototype.useTools = function(){} 

// Human.prototype.constructor = Human;   
// 直接重新覆盖 Human.prototype 时，需要手动修正 Human.prototype.constructor 的指针指向
// 当只是在 Human.prototype 上添加属性时（未覆盖原有内容），不需要修正 Human.prototype.constructor 的指针指向

// 3. 另一种使用遍历的方式
rep = {
species: function(){},
walk: function(){}, 
useTools: function(){}, 
}
for(key in rep){
Human.prototype[key] = rep[key];
}

let human = new Human({name:'Frank', city: 'Hangzhou'})
let human2 = new Human({name:'Jack', city: 'Hangzhou'})

