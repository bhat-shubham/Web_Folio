let modebtn = document.querySelector(".mode-btn_dark");
// var below_but=document.querySelector(".document.body");
var top_div=document.querySelector("#main_contentss");
let currmode = "light";
const pfpimg=document.getElementById("pfp_img");
var morebtn=document.querySelector(".more_button");
var cursor=document.querySelector("#cursor_bg");
// GSAP
gsap.from("li", { duration: 1, y: "-40%", opacity: 0, ease: "back", stagger: 0.5,delay:0.3 });
gsap.from("#top_name",{duration:1,y:"-40%",opacity:0,delay:0.5});
gsap.from(".intro_text",{duration:1.5,x:"5%",delay:0.5, opacity:0});
gsap.from("#pfp",{duration:2,x:"-10%",opacity:0,delay:0.5,ease:"back"});
gsap.to("#pfp",{
    scale:0.8,
    scrollTrigger:{
        trigger:"#pfp img",
        scroller:"body",
        // markers:true,
        start:"top 10%",
        scrub:3,
        // ease:power
    }
})
document.body.addEventListener("mousemove",function(dets){
    // console.log(dets)
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
        ease:"power2"
        // scale:1.5
    })
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
        duration:0.3,
        boxShadow:"0 0 150px var(--clr)"

    })
})
pfpimg.addEventListener("mouseleave",function(){
    gsap.to(pfpimg,{
        duration:0.3,
        boxShadow:"0 0 0px var(--clr)"

    })
})
// mainjs
 
// modebtn.classList.add("mode-btn_dark")

modebtn.addEventListener("click", () => {
  const home = document.querySelector(".home");

  if (currmode === "light") {
    gsap.to(modebtn,{
        duration:1.2,
        
    })
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
        background:"linear-gradient(to bottom, #434343,rgb(17, 11, 11))",           
    })
    gsap.to(home,{
        // backgroundImage:"url('assests/img/dark.jpg')",
        backdropFilter:"grayscale(1) brightness(0.4)",
        duration:1.5,
    })
    morebtn.style.backgroundColor = "#52515f";
    currmode = "dark";
  } else {
    gsap.to(pfpimg,{
        duration:1.2,
        background:"linear-gradient(to bottom, #fc00ff, #00dbde)"
    })
    gsap.to(home,{
        backdropFilter:"grayscale(0) brightness(1)",

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
