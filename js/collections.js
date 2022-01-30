var collect1 = document.getElementById('collect1')
var collect2 = document.getElementById('collect2')
var collect3 = document.getElementById('collect3')
var collect4 = document.getElementById('collect4')
var collect5 = document.getElementById('collect5')
var fullBtn2 = document.getElementById('fullBtn2')
var fullBtn4 = document.getElementById('fullBtn4')
var fullBtn5 = document.getElementById('fullBtn5')
var fullBtn3 = document.getElementById('fullBtn3')
var fullBtn1 = document.getElementById('fullBtn1')
var mainImageDiv = document.getElementById('mainImageDiv')


fullBtn2.addEventListener("click", ()=> {
    collect1.src = "./img/collect2.png";
    collect2.src = "./img/collect1.png";    
})
 
fullBtn3.addEventListener("click", ()=> {
    collect1.src = "./img/collect3.png";
    collect3.src = "./img/collect1.png";    
})
fullBtn4.addEventListener("click", ()=> {
    collect1.src = "./img/collect4.png";
    collect4.src = "./img/collect1.png";    
})
fullBtn5.addEventListener("click", ()=> {
    collect1.src = "./img/collect5.png";
    collect5.src = "./img/collect1.png";    
})