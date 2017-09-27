var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
  var link = links[i];
  link.addEventListener("mouseover", function() {
    //this.getElementsByTagName("a")[0].style.color = "#8080ff";
    console.log('hover yall')
  });
  link.addEventListener("dragover", function() {
    //this.getElementsByTagName("a")[0].style.color = "#8080ff";
    console.log('draggg yall')
  });
}



// var elements = document.getElementsByTagName('a');
// for(var i = 0, len = elements.length; i < len; i++) {
//     elements[i].onclick = function () {
//         // stuff
//     }
// }


// document.addEventListener("mouseover", myFunction);
// document.addEventListener("click", someOtherFunction);
// document.addEventListener("mouseout", someOtherFunction);


//ondrag