let hoverE;
let cursorItem;
let circle;
let x=0, y = 0;
let mx=0, my = 0;

window.onload = function(){
    hoverE = document.querySelectorAll(".hoverE");

    cursorItem = document.querySelector(".cursorItem");
    circle = cursorItem.querySelector(".circle");    

    for (let i = 0; i < hoverE.length; i++) {
        hoverE[i].addEventListener('mouseover', smallCircleScale);
        hoverE[i].addEventListener('mouseout', originalScale);

    }

  function smallCircleScale() {
    circle.style.transform = "scale(.3)";
  }
  function originalScale() {
    circle.style.transform = "scale(1)";
  }

    window.addEventListener("mousemove", function(e){
        x = e.clientX;
        y = e.clientY;
        cursorItem.style.transform = "translate("+ x +"px, "+ y + "px )";
    });
    
    loop();
}

function loop(){
    mx += (x - mx ) * .09;
    my += (y - my ) * .09; 
    cursorItem.style.transform = "translate("+ mx +"px, "+ my + "px )";

    requestAnimationFrame(loop);
}