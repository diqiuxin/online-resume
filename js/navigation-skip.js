(function(){
  // navigation-skip
  let view = document.querySelectorAll("nav > ul")[0];
  let controller = {
    view: null,
    init: function(view){
      this.view = view;
      this.buttonEvent();
    },
    buttonEvent: function(){
      let nav_a = view.querySelectorAll("li > a"); 
      nav_a.forEach( (element) => {
        element.onclick = (event) => {
          event.preventDefault(); //阻止默认操作
          this.skip(event);
        }
      });
    },
    skip: function(event){
      let href = event.target.getAttribute("href");
      console.log(href);
      // console.log(a.href);   //直接获取的 是浏览器处理过的
      // console.log(a.getAttribute("href"));   //获取的是程序写的内容
      let ele = document.querySelector(href);
      let top = ele.offsetTop - 70;   // 目标top坐标
      let _top = window.scrollY;      // 起始top坐标
      this.tweenAnimation_Y(_top,top);
    },
    tweenAnimation_Y: function(start_top,end_top){
      // 引入 Tween.js  url：https://github.com/tweenjs/tween.js/
      // 缓动函数库 url: http://easings.net/zh-cn
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
      
      let coords = { y: start_top}   //起始参数
      let tween = new TWEEN.Tween(coords)
        .to({y: end_top }, 1000)    //终止参数、时间
        .easing(TWEEN.Easing.Bounce.Out)  //可查缓动函数表
        .onUpdate(function() { 
          window.scrollTo(0 , coords.y);  //缓动执行参数
        })
        .start();
    },
  }
  
  controller.init(view);
}).call();