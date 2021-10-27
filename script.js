var newY = 0;
function onscrollFunction(){
    newY = parseInt(window.scrollY / 20);
    document.querySelector("#yyy").innerText = newY;
    document.body.style.setProperty("--coral_l_epip", newY * 0.5);
    document.body.style.setProperty("--blur", newY);
    var winH = window.innerHeight;
    if(newY < 200){
        canvas.dataset.scene = 'epip';
    }if(newY >= 200){
        canvas.dataset.scene = 'meso';
    }if(newY >= 1000){
        canvas.dataset.scene = 'bath';
    }if(newY >= 4000){
        canvas.dataset.scene = 'aby';
    }
}
function onmove() {
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
        elem.style.backgroundPosition = x;
    }
    var popup = document.getElementById("mypopup");
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
        else{
            popup.style.display = "flex";
        }
}
    
    };

function btnClick() {
    document.getElementById("mypopup").style.visibility = "visible";
    document.getElementById('mypopup').style.animation = "fadepopup1 1s forwards";
}


function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)



function test(){
    console.log("test");
}