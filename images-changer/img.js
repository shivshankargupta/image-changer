var myimage = document.querySelector("img");
myimage.onclick = function() {
  var mysrc = myimage.getAttribute("src");
  if (mysrc === "images/image-7.jpeg") {
    myimage.setAttribute("src", "images/image-2.jpg");
  } else {
    myimage.setAttribute("src", "images/image-7.jpeg");
  }
};


