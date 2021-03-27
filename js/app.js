'use strict';
//constructor //method for rendering each object // let myobj = `<div><h2>${this.title}</h2></div>` then append
let myData = [];
$(document).ready( function (){
  const ajaxSettings={method:'get', dataType:'json'};
  $.ajax('./data/page-1.json', ajaxSettings)
    .then(data=> {
      let noRepeat =[];
      data.forEach(element => {
        // let title=element.title;
        // let path=element.image_url;
        // let description=element.description;
        let keyword = element.keyword;
        myData.push(element);
        // let image = new Image (title, path, description, keyword);
        // image.renderImage();
        if (!noRepeat.includes(keyword)) {
          noRepeat.push(keyword);
        }
      });
      render(myData);
      noRepeat.forEach(element=>{
        let myOpt =`<option>${element}</option>`;
        $('select').append(myOpt);
      });
    });
});
// function Image ( title, path, description, keyword) {
//   this.title= title;
//   this.path=path;
//   this.description=description;
//   this.keyword=keyword;
//}
// Image.prototype.renderImage = function (){
//  let myObj = `<div name="port" class='${this.keyword}'><h3>${this.title}</h3><img class='img' src='${this.path}'><p>${this.description}</p></div>`;
//  $('main').append(myObj);

    //Mustache:
  // const template =  $('#myTemplate').html();
  // let content = Mustache.render (template , {title:this.title, image_url:this.image_url, description:this.description});
  // $('main').append(content);

// };

function render (arr){
  for ( let i=0; i< arr.length; i++){
    let myObj = `<div name ='port' class='${arr[i].keyword}'><h3>${arr[i].title}</h3><img class='img' src='${arr[i].image_url}'><p>${arr[i].description}</p></div>`;
    $('main').append(myObj);
  }
}



$('select').on('click', function (event){
  let selection = event.target.value;
  if(selection !== 'default'){
    $('div[name="port"]').not(`.${selection}`).hide(); // not method: all <div> elements that have name port and do not have the class name =selection:
    $(`div[name="port"].${selection}`).show();
  }

});

$('button').click(function() {
  myData.sort(function(a, b) {
    return (a.horns - b.horns);
  });
  $('div[name="port"]').remove();
  render(myData);
});
