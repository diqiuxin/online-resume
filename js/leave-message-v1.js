!function(){
  let view = View(".message-ol > li");
  let model = Model({
    resourceName: "Message",
  });
  let controller = Controller({
    messageOl: document.querySelector(".message-ol"),
    myForm: document.querySelector(".message-form"),
    nameEle: document.querySelector(".message-form input[name='name']"),
    contentEle: document.querySelector(".message-form input[name='content']"),
    init: function(view,model){
      this.initMessagePage();
      this.submitEvent();
    },
    initMessagePage: function(){
      this.model.get().then( (arr) => {
        arr.forEach( index => {
          let li = this.createMessageLi(index.attributes);
          this.messageOl.appendChild(li);
        });
      });
    },
    createMessageLi: function({name , content , date}){
      let li = document.createElement('li');
      li.innerHTML = `
        <ol>
          <li class="li-name"><h3>${name}</h3></li>
          <li class="li-content"><p>${content}</p></li>
          <li class="li-date"><i>${date}</i></li>
        </ol>
      `;
      return li;
    },
    submitEvent: function(){
      let myForm = this.myForm;
      myForm.addEventListener("submit",(event) => {
        event.preventDefault();
        let user = {
          name: this.nameEle.value,
          content: this.contentEle.value,
          date: this.myNewDate(),
        }
        this.model.save(user);
        this.addMessage(user);
        this.initInput();
      });
    },
    addMessage: function(user){
      let li = this.createMessageLi(user);
      this.messageOl.appendChild(li);
    },
    initInput: function(){
      this.nameEle.value = "";
      this.contentEle.value = "";
    },
    myNewDate: function(){
      let date = new Date();//获取当前时间
      let dateObj = {
        Y: date.getFullYear(),
        M: (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
        D: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
        h: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        m: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
        s: date.getSeconds(),
      }
      let dateString = ({Y,M,D,h,m,s}) => {return `${Y}/${M}/${D}  ${h}:${m}:${s}`;}
      return dateString(dateObj);
    },
  });
  controller.init(view,model);
}.call();




