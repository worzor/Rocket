var newY = 0;
var chack_meso = true; var check_bath = true; var check_aby = true;
function onscrollFunction(){
    newY = parseInt(window.scrollY / 20);
    document.querySelector("#yyy").innerText = newY;
    document.body.style.setProperty("--coral_l_epip", newY * 0.5);
    document.body.style.setProperty("--r_to_l", newY * 0.3);
    document.body.style.setProperty("--r_to_l2", (newY * 2) - 200);
    document.body.style.setProperty("--r_to_l3", (newY * 2) - 1000);
    document.body.style.setProperty("--blur", newY);
    document.body.style.setProperty("--blur2", newY-200);
    document.body.style.setProperty("--blur3", newY-1000);
    var winH = window.innerHeight;
    if(newY < 200){
        document.querySelector("#name-inner").innerText = 'Epipelagic';
        canvas.dataset.scene = 'epip';
    }if(newY >= 200){
        document.querySelector("#header-panel").innerText = 'Mesopelagic';
        document.querySelector("#para-panel").innerText = 'ยินดีที่ได้รู้จัก';
        document.querySelector("#name-inner").innerText = 'Mesopelagic';
        canvas.dataset.scene = 'meso';
        if(chack_meso == true){
            chack_meso = false;
            open_panel();
        }
    }if(newY >= 1000){
        document.querySelector("#name-inner").innerText = 'Bathypelagic';
        canvas.dataset.scene = 'bath';
    }if(newY >= 4000){
        document.querySelector("#name-inner").innerText = 'Abyssopelagic';
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

function open_panel(){
    var All_text = document.querySelectorAll("#textArea");
        for(el in All_text){
            All_text[el].classList.add("active");
        }
}

function close_panel(){
    var All_text = document.querySelectorAll("#textArea");
    for(el in All_text){
        All_text[el].classList.remove("active");
    }
}

function fish_info(fish){
    if(fish == 1){
        document.querySelector("#fish_header").innerText = "ปลาการ์ตูน";
        document.querySelector("#fish_para").innerText = "ข้อมูลทั่วไปของปลาการ์ตูน";
    }
}
var check_FL = 0
function flashlight(){
    if(check_FL == 0){
        document.getElementById("flashlightTurn").classList.add("active");
        document.getElementById("flashlightBtn").classList.add("active");
        check_FL = 1;
    } else if(check_FL == 1){
        document.getElementById("flashlightTurn").classList.remove("active");
        document.getElementById("flashlightBtn").classList.remove("active");
        check_FL = 0;
    }
}