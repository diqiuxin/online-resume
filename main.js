// loading page animation-js 
setTimeout(function(){
  document.getElementById('loading-page').className = 'active';
},1000);

// 滚动前的动画
animationUpInit();

function animationUpInit(){
  let data = document.querySelectorAll("[data-x]");
  let _top = window.scrollY; 
  let  minIndex = 0;
  for(let i=1;i<data.length;i++){
    data[i].classList.add("animation-up-null");
    if( Math.abs(_top - data[minIndex].offsetTop) > Math.abs(_top - data[i].offsetTop)){
      minIndex = i;
    }
  }
  data[minIndex].classList.remove("animation-up-null");
  data[minIndex].classList.add("animation-up");
}

// nav 滚动动画
let topnav = document.getElementById('topNav');
window.onscroll = function(){
  if(window.scrollY > 0){
    topNav.classList.add('sticky');
  }else{
    topNav.classList.remove('sticky');
  }

  //nav_li 同步跟进动画
  let data = document.querySelectorAll("[data-x]");
  let _top = window.scrollY; 
  let  minIndex = 0;
  for(let i=1;i<data.length;i++){
    if( Math.abs(_top - data[minIndex].offsetTop) > Math.abs(_top - data[i].offsetTop)){
      minIndex = i;
    }
  }

  // if minIndex=1 启动kills进度条动画
  let temp = true;
  if(minIndex == 1 && temp){
    temp = false;
    data[minIndex].classList.add("onset");
  }

  let id = data[minIndex].id;
  let a = document.querySelector('a[href="#' + id + '"]');
  let li = a.parentElement;
  let liList = li.parentElement.children; 
  for(let i =0; i<liList.length;i++){
    liList[i].classList.remove("active-li");
  }
  li.classList.add("active-li");

  //minIndex 是当前的查看元素
  data[minIndex].classList.remove("animation-up-null");
  data[minIndex].classList.add("animation-up");
}

// nav submenu hover 动画
let submenu = document.getElementsByClassName('submenu');
for(let i=0; i < submenu.length;i++){
  let submenuParent = submenu[i].parentElement;
  submenuParent.onmouseenter = function(event){
    event.target.classList.add("active-sub");
  }
  submenuParent.onmouseleave = function(event){
    event.target.classList.remove("active-sub");
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

