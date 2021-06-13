var pics=[
"fonts/1.jpg",
"fonts/2.jpg",
"fonts/3.jpg",
"fonts/4.jpg",
"fonts/5.jpg","fonts/6.jpg","fonts/7.jpg","fonts/8.jpg","fonts/9.jpg","fonts/10.jpg","fonts/11.jpg","fonts/12.jpg",
"fonts/13.jpg","fonts/14.jpg","fonts/15.jpg","fonts/16.jpg","fonts/17.jpg","fonts/18.jpg","fonts/19.jpg","fonts/20.jpg",
"fonts/21.jpg","fonts/22.jpeg","fonts/23.jpg","fonts/24.jpg","fonts/25.jpg","fonts/26.jpg","fonts/27.jpg","fonts/28.jpg",
"fonts/29.jpg"
];
var call = document.querySelector("img");
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click",function(){
  if(counter===29){
    counter=0
  }

  img.src = pics[counter]
  counter = counter + 1;


});
var call = document.querySelector("img");
var btn = document.querySelector("img");
var img = document.querySelector("img");
//var counter = 1;
btn.addEventListener("click",function(){
  if(counter===29){
    counter=0
  }

  img.src = pics[counter]
  counter = counter + 1;


});

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
