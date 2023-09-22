let nav = document.querySelector(".navbar");
let btnnav = document.querySelector(".btnnav");
let wel = document.querySelector(".welcomeing");
let tab = document.querySelector(".tab");
let sp2 = document.querySelector(".sp2");
let contable = document.querySelector(".contable");
let  USD= document.querySelector(".USD");
let  EUR= document.querySelector(".EUR");
let  GBP= document.querySelector(".GBP");
let  CAD= document.querySelector(".CAD");
let  CHF= document.querySelector(".CHF");
let  INR= document.querySelector(".INR");
let  CNY= document.querySelector(".CNY");
let  RUB= document.querySelector(".RUB");
let  KRW= document.querySelector(".KRW");
let  BRL= document.querySelector(".BRL");
let  MXN= document.querySelector(".MXN");
let  SAR= document.querySelector(".SAR");
let  ZAR= document.querySelector(".ZAR");
let  TRY= document.querySelector(".TRY");
let  SEK= document.querySelector(".SEK");
let  AED= document.querySelector(".AED");
let  SGD= document.querySelector(".SGD");
let  NZD= document.querySelector(".NZD");
let  btnT= document.querySelector(".btnT");
let  select= document.querySelector(".select");
window.addEventListener("scroll", function (){
    if(window.scrollY > 200){
        nav.classList.remove("bg-body-tertiary");
        nav.classList.add("bg-warning");
        btnnav.classList.remove("btn-outline-success")
        btnnav.classList.add("btn-outline-light");
        // tab.style.transform = "translate(0,140px)";
        // tab.style.transition = "1s";
    }else{
        nav.classList.add("bg-body-tertiary");
        nav.classList.remove("bg-warning");
        btnnav.classList.add("btn-outline-success");
        btnnav.classList.remove("btn-outline-light");
    }
})
let sp1 = document.querySelector(".sp1");
let sp11 = "Welcome";
let index1=1;
function welcomeing(){
    sp1.textContent = `${sp11.slice(0,index1)}|`
    index1++
}
setInterval (welcomeing,80)
let inp = document.querySelector(".input-group1");
let for2 = document.querySelector(".for2");
let inum = document.querySelector(".inum");
let itext = document.querySelector(".itext");
let result = 0;
for2.onsubmit = function(){
    result = select.value * inum.value;
    itext.setAttribute("Value",result)
    return false;
}