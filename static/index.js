const hamburger= document.querySelector(".hamburger");
const menu= document.querySelector(".menu")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");  

    menu.classList.toggle("active");
})

document.querySelectorAll(".links").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}));

const search= document.getElementById('btnsearch');
search.addEventListener("click", ()=>{
    alert("Sorry!! We are still working on search. Please go backwards.")
}) 


// const loginid= document.getElementById('btnloginpug');
// loginid.addEventListener("click", ()=>{
//     alert("Your details have been registered. You can login using your credential soon and enjoy free content.")
// }) 

// const applyform= document.getElementById('myform');
// applyform.addEventListener("click", ()=>{
//     alert("Thanks for sharing you details. We will email you soon about this.")
// }) 


