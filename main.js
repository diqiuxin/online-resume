// loading page animation-js 

// console.log('onload');
// window.onload= function(){
//   console.log('active');
//   let loading = document.getElementById('loading-page');
//   loading.className = 'active';
// }
setTimeout(function(){
  document.getElementById('loading-page').className = 'active';
},1500);

// nav 滚动动画
let topnav = document.getElementById('topNav');
window.onscroll = function(){
  if(window.scrollY > 0){
    topNav.classList.add('sticky');
  }else{
    topNav.classList.remove('sticky');
  }
}

// nav hover动画
let submenu = document.getElementsByClassName('submenu');
for(let i=0; i < submenu.length;i++){
  let submenuParent = submenu[i].parentElement;
  submenuParent.onmouseenter = function(event){
    event.target.classList.add("active");

  }
  submenuParent.onmouseleave = function(event){
    event.target.classList.remove("active");
  }
}

// nav a 标签跳转
let nav_a = document.querySelectorAll("nav > ul > li > a");
for(let i=0;i<nav_a.length;i++){
  nav_a[i].onclick = function(event){
    event.preventDefault(); //阻止默认操作
    let href = event.target.getAttribute("href");
    console.log(href);
    // console.log(a.href);   //直接获取的 是浏览器处理过的
    // console.log(a.getAttribute("href"));   //获取的是程序写的内容
    let ele = document.querySelector(href);
    let top = ele.offsetTop - 70;
    let _top = window.scrollY;

    // let interval = setInterval(() =>{
    //   if(_top > top){
    //     _top -= 10;
    //     window.scrollTo(0 , _top);
    //     if(_top < top )window.clearInterval(interval);  //动画停止方式
    //   }else{
    //     _top += 10;
    //     window.scrollTo(0 , _top);
    //     if(_top > top )window.clearInterval(interval);
    //   }
    // },10);

    // 引入 Tween.js  url：https://github.com/tweenjs/tween.js/
    // 缓动函数库 url: http://easings.net/zh-cn
    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    let coords = { y: _top };   //起始参数
    let tween = new TWEEN.Tween(coords)
      .to({y: top }, 1000)    //终止参数、时间
      .easing(TWEEN.Easing.Bounce.Out)  //可查缓动函数表
      .onUpdate(function() { 
        window.scrollTo(0 , coords.y);  //缓动执行参数
      })
      .start(); 
  }
} 