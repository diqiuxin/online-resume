(function(){
  // loading page animation-js 
  let view = document.getElementById('loading-page');
  let controller = {
    view: null,
    init: function(view){
      this.view = view;
      this.timeout();
    },
    timeout: function(){
      setTimeout(() => {
        this.view.className = 'active';
      },1000);
    }
  }
  controller.init(view);
}).call();
