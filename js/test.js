
// let button = document.querySelectorAll("button");
// let ptags = document.querySelectorAll("p");



// for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", function(){
//         for (let a = 0; a < button.length; a++) {
//             button[a].classList.remove('btncolor');
//             ptags[a].classList.remove("active");
//         }
//         this.classList.add("btncolor");

//             ptags[i].classList.add('active');
//     })

// }

// const bars = document.querySelector("#bars");
// const menu = document.querySelector('.drop-topmenu');
// let libars = document.querySelectorAll(".limenu")
// let dropmenu = document.querySelector(".dropmenu");

// bars = bars.addEventListener("click", function(){
//     bars.classList.toggle("active");
//     menu.classList.toggle("active-menu");

//     for (let i = 0; i < libars.length; i++) {
//     libars[i].addEventListener("click", function(){
//         dropmenu.classList.toggle("active-drop")
//     })

//     }
// })

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = "Mende Seni Sevirem :)"
})

noBtn.addEventListener("mouseover", ()=>{
    const i = Math.floor(Math.random()*(wrapperRect.width - noBtnRect.width)) + 1;

    const j = Math.floor(Math.random()*(wrapperRect.height - noBtnRect.height)) + 1; 


    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';

})

