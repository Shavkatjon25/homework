const Kpl=document.getElementById("Kp");
const Kmn=document.getElementById("Km");
const Kg=document.getElementById("K");
Kpl.addEventListener("click", function(){
    Kg.textContent=+Kg.textContent+1
})
Kmn.addEventListener("click", function(){
    if(Kg.textContent>0){
        Kg.textContent=+Kg.textContent-1
    }
})


const Ppl=document.getElementById("Pp");
const Pmn=document.getElementById("Pm");
const Pg=document.getElementById("P");
Ppl.addEventListener("click", function(){
    Pg.textContent=+Pg.textContent+1
})
Pmn.addEventListener("click", function(){
    if(Pg.textContent>0){
        Pg.textContent=+Pg.textContent-1
    }
})


const Gpl=document.getElementById("Gp");
const Gmn=document.getElementById("Gm");
const Gg=document.getElementById("G");
Gpl.addEventListener("click", function(){
    Gg.textContent=+Gg.textContent+1
})
Gmn.addEventListener("click", function(){
    if(Gg.textContent>0){
        Gg.textContent=+Gg.textContent-1
    }
})

const Papl=document.getElementById("Pap");
const Pamn=document.getElementById("Pam");
const Pag=document.getElementById("Pa");
Papl.addEventListener("click", function(){
    Pag.textContent=+Pag.textContent+1
})
Pamn.addEventListener("click", function(){
    if(Pag.textContent>0){
        Pag.textContent=+Pag.textContent-1
    }
})

const Bpl=document.getElementById("Bp");
const Bmn=document.getElementById("Bm");
const Bg=document.getElementById("B");
Bpl.addEventListener("click", function(){
    Bg.textContent=+Bg.textContent+1
})
Bmn.addEventListener("click", function(){
    if(Bg.textContent>0){
        Bg.textContent=+Bg.textContent-1
    }
})

const Spl=document.getElementById("Sp");
const Smn=document.getElementById("Sm");
const Sg=document.getElementById("S");
Spl.addEventListener("click", function(){
    Sg.textContent=+Sg.textContent+1
})
Smn.addEventListener("click", function(){
    if(Sg.textContent>0){
        Sg.textContent=+Sg.textContent-1
    }
})
const boshlash=document.getElementById("bosh");
boshlash.addEventListener("click", function(){
    let umuy=document.getElementById("sm").value;
    let kn=document.getElementById("narxK").value;
    let pn=document.getElementById("narxP").value;
    let sn=document.getElementById("narxS").value;
    let gn=document.getElementById("narxG").value;
    let pan=document.getElementById("narxPa").value;
    let bn=document.getElementById("narxB").value;
    let royhat=document.getElementById("royhat");
    let xisob=(kn*Kg.textContent+pn*Pg.textContent+sn*Sg.textContent+gn*Gg.textContent+pan*Pag.textContent+bn*Bg.textContent);
    if(umuy-xisob>=0){
        boshlash.textContent=xisob
        royhat.textContent="Ro'yhat: "
        if(kn*Kg.textContent!=0){royhat.textContent=royhat.textContent+Kg.textContent+" kg  katrtoshka; "}

        if(pn*Pg.textContent!=0){royhat.textContent=royhat.textContent+Pg.textContent+" kg  piyoz; "}

        if(sn*Sg.textContent!=0){royhat.textContent=royhat.textContent+Sg.textContent+" kg sabzi; "}

        if(gn*Gg.textContent!=0){royhat.textContent=royhat.textContent+Gg.textContent+" kg guruch;  "}

        if(pan*Pag.textContent!=0){royhat.textContent=royhat.textContent+Pag.textContent+" kg pamidor;  "}

        if(bn*Bg.textContent!=0){royhat.textContent=royhat.textContent+Bg.textContent+" kg bodring;  "}
        
    }else{boshlash.textContent="Yetarli mablag' mavjud emas"}
})
