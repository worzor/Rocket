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
        canvas.dataset.scene = 'meso';
        if(chack_meso == true){
            document.querySelector("#header-panel").innerText = 'Mesopelagic';
            document.querySelector("#para-panel").innerText = 'มาถึงชั้นที่ลึกลงมาอีกระดับแล้วนะ ชั้นนี้เปรียบได้เป็น twilight zone ที่มีแสงสว่างเพียงแค่ 1% เท่านั้น!!';
            document.querySelector("#name-inner").innerText = 'Mesopelagic';
            chack_meso = false;
            open_panel();
        }
    }if(newY >= 1000){
        canvas.dataset.scene = 'bath';
        if(check_bath == true){
            document.querySelector("#header-panel").innerText = 'Bathypelagic';
            document.querySelector("#para-panel").innerText = 'ยินดีที่ได้รู้จัก';
            document.querySelector("#name-inner").innerText = 'Bathypelagic';
            check_bath = false;
            open_panel();
        }
        
    }if(newY >= 4000){
        canvas.dataset.scene = 'aby';
        if(check_aby == true){
            document.querySelector("#header-panel").innerText = 'Abyssopelagic';
            document.querySelector("#para-panel").innerText = 'ยินดีที่ได้รู้จัก';
            document.querySelector("#name-inner").innerText = 'Abyssopelagic';
            check_aby = false;
            open_panel();
        }
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
/*Function ของปลา เเละ สิ่งก่อสร้าง*/

function fish_info(fish){
    if(fish == 1){
        document.querySelector("#fish_header").innerText = "ปลาการ์ตูน";
        document.querySelector("#fish_para").innerText = "ปลาการ์ตูนแสนน่ารักนั้นกินแพลงก์ตอนเป็นอาหาร ซึ่งพวกมันจะมีเขตที่อยู่ของตนเองและอาศัยอยู่ในดอกไม้ทะเลที่มีเข็มพิษแต่ไม่เป็นอันตรายต่อปลาการ์ตูนเพื่อให้พวกมันปลอดภัยจากศัตรู";
    }
    else if(fish == 2){
        document.querySelector("#fish_header").innerText = "ปลาฉลามครีบดำ";
        document.querySelector("#fish_para").innerText = "ปลาฉลามครีบดำหรือที่รู้จักกันในชื่อปลาฉลามหูดำ พวกมันกินปลาและสัว์น้ำขนาดเล็กเป็นอาหาร นิสัยไม่ดุร้ายโดยจะชอบหลบซ่อนตัวอยู่ในแนวปะการังในตอนกลางวันและออกหากินในเวลากลางคืน ";
    }
    else if(fish == 3){
        document.querySelector("#fish_header").innerText = "ปลาทูน่าครีบเหลือง";
        document.querySelector("#fish_para").innerText = "ปลาทูน่าครีบเหลืองสีสดใส พวกมันกินปลาหมึกปูและกุ้งเป็นอาหาร ส่วนมากจะพบในทะเลเขตร้อน แถบเมดิเตอเรเนียน นิสัยของพวกมันนั้นจะอพยพถิ่นฐานอย่ตอดเวลาและอยู่รวมกับปลาโลมา";
    }
    else if(fish == 4){
        document.querySelector("#fish_header").innerText = "ปลาออร์";
        document.querySelector("#fish_para").innerText = "ปลาออร์หรือที่เรารู้จักกันในชื่อปลาริบบิ้น พวกมันกินแพลงก์ตอนเป็นอาหาร อาศัยในฝั่งทะเลด้านตะวันตกของออสเตรเลียไปจนถึงนอกชายฝั่งเม็กซิโกและแถบหมู่เกาะเบอร์มิวดา";
    }
    else if(fish == 5){
        document.querySelector("#fish_header").innerText = "ปลาแสงอาทิตย์";
        document.querySelector("#fish_para").innerText = "ปลาแสงอาทิตย์ พวกมันกินแมงกระพรุนเป็นอาหารหลัก!!! อาศัยอยู่ในทะเลเขตร้อนและอบอุ่นทั่วทั้งโลก";
    }
    else if(fish == 6){
        document.querySelector("#fish_header").innerText = "ฉลามวาฬ";
        document.querySelector("#fish_para").innerText = "ฉลามวาฬ กินแพลงตอนเป็นอาหาร พวกมันคือสัตว์น้ำที่มีขนาดใหญ่ที่สุด!!! อาศัยอยู่ในทะเลเขตรอนและอบอุ่นใกล้ปากแม่น้ำ";
    }
    else if(fish == 7){
        document.querySelector("#fish_header").innerText = "ปลาฉลามกรีนแลนด์";
        document.querySelector("#fish_para").innerText = "ปลาฉลามกรีนแลนด์ พวกมันคือปลาฉลามที่กินเนื้อเป็นอาหาร อาศัยอยู่ในซีกโลกตอนเหนือสุด และขยายพันธุ์อยู่ในแถบน้ำที่หนาวเย็นถึง -6 องศาเซลเซียสเลยทีเดียว";
    }

}

function carcass_info(carcass){
    if(carcass == 1){
        document.querySelector("#header-panel").innerText = "Museo Subacuatico de Arte";
        document.querySelector("#para-panel").innerText = "Museo Subacuatico de Arte เป็นพิพิธภัณฑ์ใต้น้ำที่เกิดจากฝีมือมนุษย์ อยู่ที่เมือง Cancun ประเทศ Mexico ถูกสร้างขึ้นเมื่อปี 2009 ประกอบด้วยระกอบด้วยหุ่นรูปปั้นขนาดเท่าคนจริงมากกว่า 500 ชิ้นใต้ทะเล มีจุดประสงค์เพื่อให้เป็นแหล่งท่องเที่ยวทางเลือก และเป็นที่อยู่อาศัยของสัตว์ทะเลต่างๆ";
        open_panel();
    }
    else if(carcass == 2){
        document.querySelector("#header-panel").innerText = "เมืองโบราณใต้น้ำ ณ อ่าวCambay";
        document.querySelector("#para-panel").innerText = "เมืองโบราณที่ถูกค้นพบปีคริสต์ศักราชที่ 2002 มีอายุประมาณ 4,000-5,000 ปีเลยทีเดียว โดยเมืองนี้จัดว่าเป็นเมืองที่มีอารยธรรมก้าวหน้ามากๆ ในยุคสมัยนั้น เพราะมีการสร้างระบบชลประทาน ท่าเรือ ถนน ฯลฯ";
        open_panel();
    }
    else if(carcass == 3){
        document.querySelector("#header-panel").innerText = "เรือนิรนาม";
        document.querySelector("#para-panel").innerText = "ซากเรือโบราณนิรนามใต้ทะเลบอลติก อายุประมาณ 500 ปี ห่างจากชายฝั่งสวีเดนประมาณ 24 ไมล์ทะเล เป็นซากเรือที่สภาพสมบูรณ์มาก ซึ่งคาดว่าถูกสร้างขึ้นในศตวรรษที่ 15-16 สมัยเรเนสซองซ์";
        open_panel();
    }
    else if(carcass == 4){
        document.querySelector("#header-panel").innerText = "เรือดำน้ำ KRI Nanggala 402";
        document.querySelector("#para-panel").innerText = "เรือดำน้ำที่สูญหายบริเวณนอกชายฝั่งเกาะบาหลีพร้อมลูกเรือ 53 คน ระหว่างการฝึกซ้อมทางทหาร และสาเหตุการสูญหายยังเป็นปริศนาต่อไป";
        open_panel();
    }
}