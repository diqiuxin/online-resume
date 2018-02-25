
// View 
/*
  let view = View('.message-ol > li');
*/
window.View = function(selector){
  let dom = document.querySelectorAll(selector);
  if(dom.length === 0){ console.warn(`"${selector}"选择器未筛选到任何元素，可能是此时该元素位置为空，也可能是选择器出错了.`); }
  return (dom.length === 1)? dom[0] : dom ;
}

// Model
/* 
  let model = Model({
    resource: "Message"
  });
*/
window.Model = function(options){
  let resourceName = options.resourceName;
  return {
    init: function(){
      let APP_ID = '1pTDb3g24mArVqVI6tJ70j4W-gzGzoHsz';
      let APP_KEY = 'JbsyRzmBq0xU03hUkJWSlLSG';
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    save: function(object){
      let ResourceRep = AV.Object.extend(resourceName);
      let resourceRep = new ResourceRep();
      return resourceRep.save(object);  //返回一个 Promise 对象
    },
    get: function(){  //返回一个 Promise 对象
      let query = new AV.Query(resourceName);
      return query.find();
    },
  };
}

// Controller
/*
  let controller = Controller({
    xxx: "",
    init: function(){
      this.view;
      this.model;
      this.xxx;
      this.yyy();
    },
    yyy: function(){},
  });
  controller.init(view,model);
*/
window.Controller = function(options){
  let init = options.init;
  let object = {
    view: null,
    model: null,
    init: function(view,model){
      this.view = view;
      this.model = model;
      this.model.init();
      init.call(this,view,model);
    },
  }
  for(let key in options){
    if(key !== 'init'){
      object[key] = options[key];
    }
  }
  return object;
}
