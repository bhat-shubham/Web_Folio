// gsap.registerPlugin(TextPlugin)
// const texts = ["Web Developer.", "Designer.", "Creator."];
// gsap.to("#w1",{
//     text:"Web Developer.",
//     ease:"power2.out",
//     // text:"Employee",
//     delay:2,
//     duration:3,
//     repeat:-1,
// })
let modebtn = document.querySelector(".mode-btn_dark");
// var below_but=document.querySelector(".document.body");
const resume=document.querySelector("#resume");
var top_div=document.querySelector("#main_contentss");
let currmode = "light";
const pfpimg=document.getElementById("pfp_img");
var morebtn=document.querySelector(".more_button");
var cursor=document.querySelector("#cursor_bg");
const line = document.querySelector(".str_holder");// GSAP
gsap.from("li", { duration: 1, y: "-40%", opacity: 0, ease: "back", stagger: 0.5,delay:0.3 });
gsap.from("#top_name",{duration:1,y:"-40%",opacity:0,delay:0.5});
gsap.from(".intro_text",{duration:1.5,x:"5%",delay:0.5, opacity:0});
gsap.from("#pfp",{duration:2,x:"-10%",opacity:0,delay:0.5,ease:"back"});
gsap.to("#pfp",{
    scale:0.7,
    scrollTrigger:{
        trigger:"#pfp img",
        scroller:"body",
        // markers:true,
        start:"top 10%",
        scrub:2,
        // ease:power
    }
})
gsap.from(resume,{
    opacity:0,
    x:50,
    delay:0.2,
    duration:1,
    
    
    // ease:"power2.out",
})
gsap.to(resume,{
    border:"solid",
    borderwidth:20,
    // opacity:1,
    
})
const down_but=document.querySelector("#down_button");
gsap.from(down_but, { 
    duration: 1, 
    x: "-40%", 
    opacity: 0, 
    ease: "back",
    delay:0.3 });

document.addEventListener("DOMContentLoaded", function () {
    const smlinks = document.querySelectorAll("#sm_logo");
    smlinks.forEach(sm_logo => { 
        sm_logo.addEventListener("mouseenter", function () {
            gsap.to(this, { 
                y: -10,
                duration: 0.2,
                // backgroundColor: "rgba(0,0,0,0.5)",
                // border: "solid",
                boxShadow: "0 0 15px 5px rgba(188, 9, 188, 0.7)",
                // ease: "elastic.out(1, 0.4)",
            });
        });

        sm_logo.addEventListener("mouseleave", function () {
            gsap.to(this, {
                boxShadow: "0 0 0px 0px rgba(0, 0, 0, 0.7)",
                y: 0,
                duration: 0.5,
                ease: "power2.out",
            });
        });
    });
});
var tl=gsap.timeline()
tl.to(".menu_list",{
    // display: flex,
    right:0,
    duration:0.3,
    // opacity:1
})
tl.from(".menu_list h1",{
    y:50,
    duration:0.2,
    stagger:0.1,
    opacity:0,
    // opacity:0

})
tl.pause()
var menu_but=document.querySelector("#navbar i")
var close_but=document.querySelector(".menu_list i")
menu_but.addEventListener("click",function(){
    gsap.to(menu_but,{
        
        opacity:0,
        duration:0.2,
    })
    tl.play()
})
close_but.addEventListener("click",function(){
    gsap.to(menu_but,{
        opacity:1,
        duration:1,
    })
    tl.reverse()
})
morebtn.addEventListener("mouseenter",function(){
    morebtn.style.overflow="hidden";
    // console.log("hey")
    gsap.to(cursor,{
        // scale:5,
        backgroundColor:"rgba(0,0,0,0.5)",

    })
})
morebtn.addEventListener("mouseleave",function(){
    // console.log("hey")

    gsap.to(cursor,{
       backgroundColor:"rgba(0,0,0,0)",

    })
})
pfpimg.addEventListener("mouseenter",function(){
    gsap.to(pfpimg,{
        duration:0.2,
        boxShadow:"0 0 150px var(--clr)"

    })
})
pfpimg.addEventListener("mouseleave",function(){
    gsap.to(pfpimg,{
        duration:0.3,
        boxShadow:"0 0 0px var(--clr)"

    })
})
var init_path='M 0 0 L 0 715 Q 595 485 1530 378 L 1530 0 Z'
const svgPath = document.querySelector(".str_holder svg:first-child path");
const initPath = svgPath.getAttribute("d");
line.addEventListener("mousemove",function(dets){
    // console.log(dets)
    const updatedPath = `M 0 0 L 0 715 Q ${dets.x} ${dets.y} 1530 378 L 1530 0 Z`;
    gsap.to(svgPath, {
        attr: { d: updatedPath },
    });
});
line.addEventListener("mouseleave", function () {
    // Reset the path on mouse leave
    gsap.to(svgPath, {
        attr: { d: initPath },
        ease: "elastic.out(1, 0.5)",
        duration: 2,
    });
});

// mainjs+GSAP
const gradient1 = document.querySelector("#brighterGradient");
const stop1 = gradient1.querySelector("stop:nth-child(1)");
const stop2 = gradient1.querySelector("stop:nth-child(2)");
const stop3 = gradient1.querySelector("stop:nth-child(3)");


modebtn.addEventListener("click", () => {
  const home = document.querySelector(".home");

  if (currmode === "light") {
    gsap.to(stop1, {
        stopColor: "#2C2C2C", 
        duration: 1.5,
        ease: "power1.out"
    });

    gsap.to(stop2, {
        stopColor: "#171717", 
        duration: 1.5,
        ease: "power1.out"
    });

    gsap.to(stop3, {
        stopColor: "#2F2F2F", 
        duration: 1.5,
        ease: "power1.out"
    });
    modebtn.style.setProperty('--c-color-1', '#C768FA');
    modebtn.style.setProperty('--c-color-2', '#CB67FD');
    modebtn.style.setProperty('--c-color-3', '#EBA6A9');
    modebtn.style.setProperty('--c-color-4', '#d31e94');
    modebtn.style.setProperty('--c-radial-inner', '#a515ff');
    modebtn.style.setProperty('--c-radial-outer', '#b872ff');
    document.querySelector("#Home").style.color = "#ffffff";
    document.querySelector("#About").style.color = "#ffffff";
    document.querySelector("#Resume").style.color = "#ffffff";
    document.querySelector("#Projects").style.color = "#ffffff";
    gsap.to(pfpimg,{
        duration:1.2,
        background:"linear-gradient(to left, #434343,rgb(17, 11, 11))",           
    })
    gsap.to(home,{
        // backgroundImage:"url('assests/img/dark.jpg')",
        backdropFilter:"grayscale(0.95) brightness(0.4)",
        duration:1.5,
    })
    morebtn.style.backgroundColor = "#52515f";
    currmode = "dark";
  } else {
    gsap.to(stop1, {
        stopColor: "#A73CFF", // Darker color
        duration: 1.5,
        ease: "power1.out"
    });

    gsap.to(stop2, {
        stopColor: "#9828FF", // Darker middle color
        duration: 1.5,
        ease: "power1.out"
    });

    gsap.to(stop3, {
        stopColor: "#9D2CFF", // Darkest color
        duration: 1.5,
        ease: "power1.out"
    });
    gsap.to(pfpimg,{
        duration:1.2,
        background:"linear-gradient(to bottom, #fc00ff, #00dbde)"
    })
    gsap.to(home,{
        backdropFilter:"grayscale(0) brightness(1)",
        duration:1.5

    })
    document.querySelector("#Home").style.color = "#000000";
    document.querySelector("#About").style.color = "#000000";
    document.querySelector("#Resume").style.color = "#000000";
    document.querySelector("#Projects").style.color = "#000000";
    modebtn.style.setProperty('--c-color-1', '#06030a');
    modebtn.style.setProperty('--c-color-2', '#000000');
    modebtn.style.setProperty('--c-color-3', '#f0f8ff');
    modebtn.style.setProperty('--c-color-4', '#e4dfe2');
    modebtn.style.setProperty('--c-radial-inner', '#a515ff');
    modebtn.style.setProperty('--c-radial-outer', '#b872ff');
    morebtn.style.backgroundColor = "#8B80E0";
    // home.style.backgroundImage = "url('assests/img/vackground-com-6XNIVSDzA2g-unsplash.jpg')";
    currmode = "light";
  }
});
