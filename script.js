// let modebtn=document.querySelector(".mode-btn");
// let currmode="light";
// modebtn.addEventListener("click",() => {
//     if(currmode==="light"){
//         document.querySelector(".home").style.backgroundImage="url('assests/img/dark.jpg')";
//         currmode="dark";

        
//     }else{
//         currmode="light";
//         document.querySelector(".home").style.backgroundImage="url('assests/img/vackground-com-6XNIVSDzA2g-unsplash.jpg')";
//     }
// });
let modebtn = document.querySelector(".mode-btn_dark");
let currmode = "light";
// modebtn.classList.add("mode-btn_dark")

modebtn.addEventListener("click", () => {
  const home = document.querySelector(".home");

  if (currmode === "light") {
    // Switch to dark mode
    // modebtn.classList.replace("mode-btn_dark", "mode-btn_light");    
    // modebtn.classList.add("mode-btn_light");
    home.style.backgroundImage = "url('assests/img/dark.jpg')";
    currmode = "dark";
  } else {
    // Switch to light mode
    modebtn.classList.add("mode-btn_dark");
    // modebtn.classList.remove("mode_btn");
    // modebtn.classList.replace("mode-btn_light", "mode-btn_dark");
    home.style.backgroundImage = "url('assests/img/vackground-com-6XNIVSDzA2g-unsplash.jpg')";
    currmode = "light";
  }
});
