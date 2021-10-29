var newY = 0;
var chack_meso = true; var check_bath = true; var check_aby = true;
function onscrollFunction(){
    newY = parseInt(window.scrollY / 20);
    document.querySelector("#yyy").innerText = newY;
    document.body.style.setProperty("--coral_l_epip", newY * 0.5);
    document.body.style.setProperty("--r_to_l", newY * 0.3);
    document.body.style.setProperty("--r_to_l2", (newY * 2) - 200);
    document.body.style.setProperty("--r_to_l3", (newY * 2) - 1000);
    document.body.style.setProperty("--r_to_l4", (newY * 2) - 2000);
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
            document.querySelector("#para-panel").innerText = 'เริ่มต้นที่ด้านล่างของ mesopelagic และทอดยาวไปถึง 4,000 ม. โซนนี้มีขนาดใหญ่กว่า Mesopelagic มากและมีขนาดใหญ่กว่า Epipelagic ถึง 15 เท่า เป็นระบบนิเวศที่ใหญ่ที่สุดในโลก โซนนี้จะขาดแสงแดดอย่างสมบูรณ์ สิ่งมีชีวิตในท้องทะเลจะอาศัยอยู่ในความมืดสนิทตลอด 24 ชั่วโมงต่อวัน แต่ก็ยังแสงที่เกิดจากตัวสิ่งมีชีวิตเอง สิ่งนี้เรียกว่าการเรืองแสงทางชีวภาพเพื่อดึงดูดเหยื่อหรือหาคู่ครอง และสัตว์ในโซนนี้บางชนิดก็สูญเสียความสามารถในการมองเห็น';
            document.querySelector("#name-inner").innerText = 'Bathypelagic';
            check_bath = false;
            open_panel();
        }
        
    }if(newY >= 4000){
        canvas.dataset.scene = 'aby';
        if(check_aby == true){
            document.querySelector("#header-panel").innerText = 'Abyssopelagic';
            document.querySelector("#para-panel").innerText = 'เป็นโซนก้นบึ้ง ลึกตั้งแต่ 4,000 เมตร ไปถึงก้นทะเล โซนนี้มีลักษณะเป็นญาติขาดชีวิต มีความมืดที่สุดของมหาสมุทรปกคลุมไปด้วยความมืดแบบนี้ไปตลอด และมีอุณหภูมิน้ำที่เย็นใกล้จุดเยือกแข็ง มันคือขุมนรกจริงๆ แต่ก็ยังมีสิ่งมีชีวิตที่มีวิวัฒนาการเพื่ออาศัยอยู่ในสภาพแวดล้อมนี้';
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
    else if(fish == 8){
        document.querySelector("#fish_header").innerText = "ปลาแลนเซต";
        document.querySelector("#fish_para").innerText = "ปลาแลนเซต เชื่อกันว่าเป็นปลาที่มีอายุรุ่นราวคราวเดียวกันกับไดโนเสาร์ มีครีบหลังขนาดใหญ่และเขี้ยวที่แหลมคม สามารถโตเต็มที่ได้ขึ้นถึง 2 เมตร น้อยมากที่จะมีใครรู้เกี่ยวกับวงจรชีวิตของพวกมันแม้ว่าพวกมันจะกระจายกันอย่างแพร่หลายในมหาสมุทรทั่วโลก ยกเว้นทะเลขั้วโลก อาศัยทะเลลึกถึง 1,000 เมตร ในเขตร้อน หากินในตอนกลางคืนโดยกินปลา กุ้ง หมึกเป็นอาหาร";
    }
    else if(fish == 9){
        document.querySelector("#fish_header").innerText = "ปลาไวเปอร์";
        document.querySelector("#fish_para").innerText = "มีลำตัวยาวส่วนมากสีของมันจะดำสนิทมันมีฟันเหมือนเข็มยาวและคมมากมีขากรรไกรเหมือนบานพับ เป็นนักล่าขนาดเล็กเนื่องจากมันมีขนาดยาวประมาณ 30-60 เซนติเมตร สามารถพบได้ในบริเวณน้ำที่ลึก 1,000 ถึง 4,000 เมตรโดยจะมีอุณหภูมิเฉลี่ยอยู่ที่ 4 องศาเซลเซียส มีอายุโดยเฉลี่ย 15-30 ปีในตอนกลางวันพวกมันจะอยู่บริเวณน้ำลึกในเวลากลางคืนส่วนใหญ่อยู่ในเขตน่านน้ำเขตร้อน";
    }
    else if(fish == 10){
        document.querySelector("#fish_header").innerText = "ปลาคิเมียรา";
        document.querySelector("#fish_para").innerText = " เป็นปลากระดูกอ่อน ในปัจจุบันนี้สามารถพบได้ตามทะเลลึก ปลาคิเมียราอาศัยอยู่ในทะเลลึกโดยอยู่ที่ระดับความลึกประมาณ 2,600 เมตร มีลำตัวยาวและมีหัวขนาดใหญ่และมีช่องปิดเหงือกช่องเดียวเมื่อโตเต็มวัยอาจมีความยาวถึง 150 ซ.ม. พวกมันเป็นปลากระดูกอ่อนมีผิวหนังที่เรียบเนียนมีสีน้ำตาลถึงเทาและมีครีบหลังเป็นกระดูกอ่อน ถึงจะมีลักษณะคล้ายปลาฉลามแต่มันมีสิ่งทีแตกต่างและแปลงออกไปคือปลาคิเมียราเพศผู้นั้นจะมีอวัยวะสืบพันธุ์ที่สามารถยืดหดได้อยู่บนหน้าผาก และมีครีบเอว";
    }
    else if(fish == 11){
        document.querySelector("#fish_header").innerText = "ปลาแบล็คสวอลโล";
        document.querySelector("#fish_para").innerText = "เป็นปลาทะเลลึกที่มีความสามารถกลืนปลาที่มีขนาดใหญ่กว่าตัวเองได้ อาศัยอยู่ในเขตทะเลน้ำร้อน และ เขตหุบเขาใต้ทะเลลึกภูเขาใต้ทะเลที่มีความลึก 700-2,745 เมตร มีความยาวสูงสุด 25 ซม. ไม่มีเกล็ด ลำตัวมีสีน้ำตาล - ดำสม่ำเสมอ ศีรษะยาวมีปากแหลม มีปากที่ใหญ่ ขากรรไกรล่างยื่นออกมาทางด้านบน กระดูกสันหลังมีขนาดเล็ก";
    }
    else if(fish == 12){
        document.querySelector("#fish_header").innerText = "นาร์วาฬ";
        document.querySelector("#fish_para").innerText = "เป็นวาฬมีฟันขนาดกลาง ซึ่งใช้ชีวิตตลอดทั้งปีที่บริเวณอาร์กติก นาร์วาลเพศผู้มีลักษณะที่โดดเด่นคือ มีงาที่ยาว ตรง เป็นเกลียวที่ยื่นมาจากกรามบนด้านซ้ายของพวกมัน แท้ที่จริงแล้วคือ ฟันเพียงซี่เดียวของพวกมัน อาจยาวได้ถึง 3 เมตร นาร์วาลส่วนใหญ่พบในบริเวณอาร์กติกของแคนาดาและเขตทะเลของกรีนแลนด์ นาร์วาลเป็นนักล่าที่มีเอกลักษณ์เฉพาะตัวในเขตอาร์กติก มันกินเหยื่อบริเวณพื้นใต้น้ำเป็นอาหาร พบได้ในระดับความลึกถึง 1,500 เมตร";
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
    else if(carcass == 5){
        document.querySelector("#header-panel").innerText = "เรือไททานิค";
        document.querySelector("#para-panel").innerText = "เรือโดยสารซึ่งจมลงสู่ก้นมหาสมุทรแอตแลนติกเมื่อวันที่ 15 เมษายน ค.ศ. 1912 หลังชนภูเขาน้ำแข็งระหว่างการเดินทางเที่ยวแรกจากเซาท์แทมป์ตัน สหราชอาณาจักร ไปนครนิวยอร์ก สหรัฐอเมริกา";
        open_panel();
    }
}