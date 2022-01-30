var toggleBtn = document.getElementById('toggle')
var navbar = document.getElementById('navbar')
var moreDiv = document.getElementById('more')
var header =document.getElementById('header')
toggleBtn.addEventListener('click', ()=>{
    console.log("Clicked")
    toggleBtn.classList.toggle('toggle--active') 
       
})
navbar.addEventListener('click', () => {
    toggleBtn.classList.remove('toggle--active')
})
//amount
var plusBtn = document.getElementById('plus')
var minusBtn = document.getElementById('minus')
var sumInput = document.getElementById('sum')
sumInput.value = 0;
plusBtn.addEventListener("click", ()=> {
    var a = ++sumInput.value
    sumInput.textContent = a
})
minusBtn.addEventListener("click", ()=> {
    var b = --sumInput.value
    sumInput.textContent = b

    if(b<0){
        sumInput.value = 0
    }
})
var girl1 = document.getElementById('girl1')
var girl2 = document.getElementById('girl2')
var girl3 = document.getElementById('girl3')
var girl4 = document.getElementById('girl4')
var yellowBoy = document.getElementById('yellowBoy')
var picturesDiv = document.getElementById('pictures')

yellowBoy.addEventListener("click", ()=> {
   picturesDiv.style.backgroundImage = "url('/img/yellowBoy.png')";
   picturesDiv.style.backgroundRepeat = "no-repeat";
   picturesDiv.style.backgroundSize="100% 100%";
})
girl1.addEventListener("click", ()=> {
    picturesDiv.style.backgroundImage = "url('/img/girl1.png')";
    picturesDiv.style.backgroundRepeat = "no-repeat";
    picturesDiv.style.backgroundSize="100% 100%";
 })
girl2.addEventListener("click", ()=> {
    picturesDiv.style.backgroundImage = "url('/img/girl2.png')";
    picturesDiv.style.backgroundRepeat = "no-repeat";
    picturesDiv.style.backgroundSize="100% 100%";
    
})
girl3.addEventListener("click", ()=> {
    picturesDiv.style.backgroundImage = "url('/img/girl3.png')";
    picturesDiv.style.backgroundRepeat = "no-repeat";
    picturesDiv.style.backgroundSize="100% 100%";
    
})
girl4.addEventListener("click", ()=> {
    picturesDiv.style.backgroundImage = "url('/img/girl4.png')";
    picturesDiv.style.backgroundRepeat = "no-repeat";
    picturesDiv.style.backgroundSize="100% 100%";
    
})

var orderAddBtn = document.getElementById('orderAddBtn')
orderAddBtn.addEventListener('click', ()=>{
    alert(`${sumInput.value} ware added to the cart `)
})

var fovoritBtn = document.getElementById('fovorit')
fovoritBtn.addEventListener('click', ()=>{
    alert("Joined fovorites")
})

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-350px";
  }
  prevScrollpos = currentScrollPos;
}
