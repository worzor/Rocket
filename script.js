(function () {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.005}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
function btnClick() {
    document.getElementById('proj').style.animation = "fadeUp 1s forwards";
    document.getElementById("mypopup").style.visibility = "visible";
    document.getElementById('mypopup').style.animation = "fadepopup1 1s forwards";
}

var items = document.querySelectorAll(".animal");
var items2 = document.querySelectorAll(".envi");
var items3 = document.querySelectorAll(".sub");
var items4 = document.querySelectorAll(".sand");
const textarea = document.querySelector('textarea');
const log = document.getElementById('log');
var r = document.querySelector(':root');
textarea.onscroll = logScroll;
function logScroll(e) {
    r.style.setProperty('--l', `${49 - (e.target.scrollTop) / 370}%`);
    r.style.setProperty('--size', `${(e.target.scrollTop - 300)/3}px`)
    r.style.setProperty('--sizeT', `${(e.target.scrollTop - 240)/3}px`)
    r.style.setProperty('--sizeRs', `${(e.target.scrollTop - 280)/3}px`)
    r.style.setProperty('--sizeTi', `${(e.target.scrollTop - 120)/3}px`)
    r.style.setProperty('--sizeTo', `${(e.target.scrollTop - 120)/3}px`)
    for (var i = 0; i < items.length; i++){
    if (e.target.scrollTop>370) {
        if(!items[i].classList.contains("in-view")){
          items[i].classList.add("in-view");
         
        }
      } else if(e.target.scrollTop<=370) {
          items[i].classList.remove("in-view");
      } if(e.target.scrollTop>=3700) {
        items[i].classList.remove("in-view");
    } }
    for (var i = 0; i < items2.length; i++){
        if (e.target.scrollTop>120) {
            if(!items2[i].classList.contains("in-view")){
              items2[i].classList.add("in-view");
              items3[0].classList.add("in-view");
              items3[1].classList.add("in-view");
              items3[2].classList.add("in-view");
              items3[3].classList.add("in-view");
              items3[4].classList.add("in-view");
              items4[0].classList.add("in-view");
            }
          } else if(e.target.scrollTop<=120) {
              items2[i].classList.remove("in-view");
          } if(e.target.scrollTop>=5800) {
            items2[i].classList.remove("in-view");
        } 
    }
    
    if(e.target.scrollTop>9800){
        document.getElementById('mybtn4').style.setProperty('visibility', 'visible');
    }if(e.target.scrollTop<9800){
        document.getElementById('mybtn4').style.setProperty('visibility', 'hidden');
    }
    console.log(e.target.scrollTop);
}
function showDiv() {
    var elmntToView = document.getElementById("first");
    elmntToView.scrollIntoView(); 
 }
 function showDiv2() {
    var elmntToView = document.getElementById("parallax");
    elmntToView.scrollIntoView(); 
    document.getElementById("mypopup").style.visibility = "hidden";
    for (var i = 0; i < items.length; i++){
        items[i].classList.remove("in-view");
    }
    for (var i = 0; i < items2.length; i++){
        items2[i].classList.remove("in-view");
    }
    for (var i = 0; i < items3.length; i++){
        items3[i].classList.remove("in-view");
    }
    for (var i = 0; i < items4.length; i++){
        items4[i].classList.remove("in-view");
    }
 }


function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)




