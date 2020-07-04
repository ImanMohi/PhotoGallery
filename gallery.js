/*Name this external file gallery.js*/

function upDate(previewPic){	
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
  }
  
  function unDo(){ 
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "hover over an image to display here! "
  }