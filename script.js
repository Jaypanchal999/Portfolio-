const welcome  = document.querySelector(".page1 h1");
const coords = { x: 0, y: 0 };
var timeout;
const circles = document.querySelectorAll(".circle");
const maincircle = document.querySelector(".circles");
const main = document.querySelector(".main");
const colors = [
    
];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

main.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  maincircle.style.display = "block";

  circles.forEach(function(){
    gsap.to(circles,{
      scale : '1',
    })
  })


 function mouseStop(){
  circles.forEach(function(){
    gsap.to(circles,{
      scale : '0',
    })
  })
 }

 clearTimeout(timeout)
 timeout = setTimeout(mouseStop,2000);
 
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = ( 10+ index ) / circles.length ;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;


  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

document.addEventListener("mouseout",function(){

  circles.forEach(function(){
    gsap.to(circles,{
      scale : '0',
    })
  })

})



gsap.to(".page1 h5",{
  y:60,
  opacity:0,
  repeat :-1,
  duration:2,
})



welcome.addEventListener("mouseenter",function(){


  gsap.to(circles,{
    backgroundColor: 'white',
    height:'140px',
    width:'140px',
    scale:1,
    // x:-35,
    // y:-35,
  })

});



welcome.addEventListener("mouseleave",function(){
  gsap.to(circles,{
    backgroundColor:'white',
    height:'30px',
    width:'30px',
    scale:0,
    x:0,
    y:0,
  })

});











