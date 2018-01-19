var circle = document.querySelector(".circle");
// console.log(circle);

circle.addEventListener("mouseover", function(){
    circle.className = "circle circle_mouseon";
})

circle.addEventListener("click", function(){
    circle.className = "circle circle_click";
})

circle.addEventListener("mouseout", function(){
    circle.className = "circle circle_mouseout"
})