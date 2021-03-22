// 'use strict';
//constructor //method for rendering each object // let myobj = `<div><h2>${this.title}</h2></div>` then append
$(document).ready( function (){
  const ajaxSettings={method:'get', dataType:'json'};
  
  $.ajax('./data/page-1.json', ajaxSettings)
    .then(data=> {
      let noRepeat =[];
      data.forEach(element => {
        let title=element.title;
        let path=element.image_url;
        let description=element.description;
        let keyword = element.keyword;
        let image = new Image (title, path, description);
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
function Image ( title, path, description) {
  this.title= title;
  this.path=path;
  this.description=description;
}

Image.prototype.renderImage = function (){
  let myObj = `<div><h4>${this.title}</h4><img class='img' src='${this.path}'><p>${this.description}</p></div>`;
  $('main').append(myObj);
};

// $('option').click(function(){

// });