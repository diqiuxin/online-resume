(function(){
  // let view = document.getElementById('topNav');
  let view = View('#topNav');
  
  let controller = {
    view: null,
    pageInit: function(){
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
    },
    init: function(){
      this.view = view;
      this.pageInit();
      
      // nav 滚动动画
      let topnav = this.view;
      window.onscroll = () =>{
        // nav-welt
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
    
        // minIndex 是当前的查看元素
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
        
    },
    initAnimation: function(){
      
    },
  }
  controller.init(view);
}).call();