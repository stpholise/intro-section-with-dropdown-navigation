// VARIABLE SELLECTOR
const features = document.querySelectorAll(".extra")
const menuBtn = document.getElementById("menu-btn")
const hidden = document.querySelectorAll(".hide")
const img = document.querySelectorAll(".arrow")
const feature = document.getElementById("features")
const featureMenu = document.getElementById("features-menu")
const mainMenu = document.getElementById("nav-login")

const company = document.getElementById("company")
const companyMenu = document.getElementById("company-menu")


const atvimg = "images/icon-arrow-up.svg"



feature.addEventListener("click", (e) => {
 
 e.preventDefault()
 
      if(featureMenu.classList.contains("show") ){
        e.currentTarget.lastElementChild.src =  "images/icon-arrow-down.svg" 
        featureMenu.classList.remove("show")
      }else{
        featureMenu.classList.add("show")
        e.currentTarget.lastElementChild.src = atvimg
      }

  
} )


company.addEventListener("click", (e) => {


      if(companyMenu.classList.contains("show") ){
        companyMenu.classList.remove("show")
        e.currentTarget.lastElementChild.src =  "images/icon-arrow-down.svg"
      }else{
      
        companyMenu.classList.add("show")
        e.currentTarget.lastElementChild.src =   atvimg
      }
 
    
} )


// MENU BUTTON
const menuImg = menuBtn.src   //SAVES THE CURRENT MENU BUTTON SRC VALUE

menuBtn.addEventListener("click", (e) => {
  e.preventDefault( )
  console.log(menuImg)
  if(menuBtn.src === menuImg){
    menuBtn.src = "./images/icon-close-menu.svg"
    mainMenu.classList.add("show")
  }
  else{
    menuBtn.src = menuImg
    mainMenu.classList.remove("show")
  }
})

// I WANTED TO USE THE BELLOW SOLUTION BUT I SOULD NOT MAKE IT WORK PROPERLY... IF YOU CAN HELP ME FIX THE CODE BELLOW SO IT CAN CLOSE WHEN YOU CLICK THE SAME DROP MENU TWICE I WILL BE VERY GREATFUL

// REMOVE OR RESET FUNCTIONALITY OF BUTTON BACK TO ITS PREVIOUS STATE
// function removeShow(){
//   hidden.forEach((a)=>{
//       a.classList.remove("show")
//       img.forEach((image)=>{
//         image.src = "images/icon-arrow-up.svg"
//       })
      
//     })
// }



// // TO SHOW HIDDEN SUB MENUS WHEN CLICKED
// features.forEach((feature)=>{
//   feature.addEventListener("click",(e)=>{
//     e.preventDefault()
//   removeShow()
//   const crntEvent = e.currentTarget
//   let toggleItem = document.querySelector(`.${e.currentTarget.id}-menu`)
//   toggleItem.classList.add("show")
//   e.currentTarget.lastElementChild.src =  "images/icon-arrow-down.svg"
  
//   })
// })   I DONT NOW HOW TO CLOSE THIS WITHOUT LAGGS PLEASE IF YOU HAVE A SOLOUTION UPDATE THIS 





// btns.forEach((btn)=>{
//   btn.addEventListener("click",(e)=>{
//       removeAtv() //resets the active state of the button removing arrow
//       removeShow()  // resets show be4 the use of the button
//       const crntEvent = e.currentTarget
//       const btnClass = e.currentTarget.classList
//       btnClass.add("atv")
//       crntEvent.nextElementSibling.classList.add("show")
//       crntEvent.addEventListener("click",(e)=>{
  
//           if( btnClass.contains("atv") ){
//               removeAtv()
//               removeShow()  //reset show
//           }else{
//               btnClass.add("atv")
//               crntEvent.nextElementSibling.classList.add("show")  //instead of changing the picture this rotates the arrow in opposite dirrection
//           }
//       })
      
//   })
    
//   }) THIS WORKS FOR MY FAQ SOLUTION BUT DOESNT WORK HERE 
