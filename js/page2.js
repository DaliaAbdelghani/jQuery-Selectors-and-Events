// 'use strict';
//constructor //method for rendering each object // let myobj = `<div><h2>${this.title}</h2></div>` then append
$(document).ready( function (){
  const ajaxSettings={method:'get', dataType:'json'};
  $.ajax('./data/page-2.json', ajaxSettings)
    .then(data=> {
      let noRepeat =[];
      data.forEach(element => {
        let title=element.title;
        let path=element.image_url;
        let description=element.description;
        let keyword = element.keyword;
        let image = new Image (title, path, description, keyword);
        image.renderImage();

        if (!noRepeat.includes(keyword)) {
          noRepeat.push(keyword);
        }

      });
      noRepeat.forEach(element=>{
        let myOpt =`<option>${element}</option>`;
        $('select').append(myOpt);
      });

    });
});
function Image ( title, path, description, keyword) {
  this.title= title;
  this.path=path;
  this.description=description;
  this.keyword=keyword;
}

Image.prototype.renderImage = function (){
  let myObj = `<div name ='port' class='${this.keyword}'><h3>${this.title}</h3><img class='img' src='${this.path}'><p>${this.description}</p></div>`;
  $('main').append(myObj);

};


$('select').on('click', function (event){
  let selection = event.target.value;
  if(selection !== 'default'){
    $('div[name="port"]').not(`.${selection}`).hide(); // not method: all <div> elements that have name port and do not have the class name =selection:
    $(`div[name="port"].${selection}`).show();
  }

});





