

const bottom =document.querySelector(".scroll-to-top");
const toggele= document.querySelector(".menu");
const refreshButtonVisibility = () => {

    if(document.documentElement.scrollTop <= 400){
        bottom.style.display = "none";
    }
    else{
        bottom.style.display = "block";  
    }
};

refreshButtonVisibility();

bottom.addEventListener("click",()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0
});

document.addEventListener("scroll",()=>{
    refreshButtonVisibility();
})


const refrechToggle = () => {
    if(document.documentElement.scrollTop <=550){
        toggele.style.display = "block";
    }
    else{
        toggele.style.display = "none";
    }
};

refrechToggle();

document.addEventListener("scroll",()=>{
    refrechToggle();
})

console.log("hello");



//====================================gsap==============================//




