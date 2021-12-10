

const container = document.querySelector('.about');


gsap.from(container,{
    duration:4, 
    autoAlpha :0 ,
    scale:0.5 ,
    y:-100,
   
    
    scrollTrigger: {
        trigger:".about",
        start:"top 80%",
        end:"bottom 50%",
      
        scrub:0.5,
    }
})

ScrollTrigger.create({
    trigger:".about",

    end:"bottom 50%"
});

const footer =document.querySelector(".footer");

gsap.from(footer,{
    duration:4, 
    autoAlpha :0 ,
    scale:0.5 ,
    y:-100,
   
    
    scrollTrigger: {
        trigger:".footer",
        start:"top 80%",
        end:"bottom 50%",
        
        scrub:0.5,
    }
})

ScrollTrigger.create({
    trigger:".footer",

    end:"bottom 50%"
});


const h3 =document.querySelector(".gsap");

gsap.from(h3 , {
    y:-100,
    duration:4,
    autoAlpha :0 ,
    scale:0.5,
    scrollTrigger: {
        trigger:".gsap ",
        start:"top 80%",
        end:"bottom 50%",
        scrub:0.5,
    }
});

const res =document.querySelector(".full-res");

gsap.from(res , {
    y:-100,
    duration:4,
    autoAlpha :0 ,
    scale:0.5,
    scrollTrigger: {
        trigger:".full-res",
        start:"top 80%",
        end:"bottom 50%",
        scrub:0.5,
    }
})




