let img=document.querySelector(".img-big-active");
function imges(chosen){
  img.src=chosen
}
// ----------------------------------------------------
let button=document.querySelector(".buttcart");
let add=document.querySelector(".add");
let sup=document.querySelector("sup");
let check =document.querySelector(".check")
let imge=document.querySelector(" .add img")
let price=document.querySelector(".price").innerHTML
let ans=+price.replace(/[^0-9]/ig,"").slice(0,3)
let minus=document.querySelector(".minus")
let plus=document.querySelector(".plus")
let change=document.querySelector(".change")
let box=document.querySelector(".box")
let shopping=document.querySelector(".shopping")
let deleteitems = document.querySelector(".delete")
// console.log(ans)
// box inverse in 
function addToCard(){
  button.onclick=function(){
    let addLength=document.querySelectorAll(" .box div p");
    add.innerHTML +=`<p>Fall Limited Edition Sneakers $125*${addLength.length+1}= $ ${ans*(addLength.length+1)}</p>`
    // console.log(addLength.length)
     check.style.display="block"
     sup.style.display="block"
     sup.innerHTML=addLength.length+1;
     change.innerHTML=addLength.length+1
  }
}
addToCard()

// plus icon
plus.onclick=function(){
    let addLength=document.querySelectorAll(" .box div p");
    add.innerHTML +=`<p>Fall Limited Edition Sneakers $125*${addLength.length+1}= $ ${ans*(addLength.length+1)}</p>`
    change.innerHTML=addLength.length+1;
    sup.innerHTML=addLength.length+1
}
// minus icon
minus.onclick=function(){
  // console.log(add.children);
  // console.log(add.lastChild)
  add.lastChild.remove()
  change.innerHTML--
  sup.innerHTML--
}
// cart icon click
shopping.onclick=function(){
  if(box.style.display=="none"){
    box.style.display = "block"
  }else{
    box.style.display = "none"
  }
}
// remove all items by delete icon
deleteitems.onclick=function(){
  add.remove()
  sup.remove()
  change.innerHTML=0
  box.style.display="none"
}

