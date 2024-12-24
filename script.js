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
const pfpimg=document.getElementById("pfp_img");

// modebtn.classList.add("mode-btn_dark")

modebtn.addEventListener("click", () => {
  const home = document.querySelector(".home");

  if (currmode === "light") {
    modebtn.style.setProperty('transition', 'color 0.5s ease, color 0.5s ease;');
    modebtn.style.setProperty('--c-color-1', '#C768FA');
    modebtn.style.setProperty('--c-color-2', '#CB67FD');
    modebtn.style.setProperty('--c-color-3', '#e21bda');
    modebtn.style.setProperty('--c-color-4', '#d31e94');
    modebtn.style.setProperty('--c-radial-inner', '#a515ff');
    modebtn.style.setProperty('--c-radial-outer', '#b872ff');
    document.querySelector("#Home").style.color = "#ffffff";
    document.querySelector("#About").style.color = "#ffffff";
    document.querySelector("#Resume").style.color = "#ffffff";
    document.querySelector("#Projects").style.color = "#ffffff";
    pfpimg.style.setProperty('background', 'linear-gradient(to right, #434343, #000000');
    // image1.classList.toggle("hidden");
    home.style.backgroundImage = "url('assests/img/dark.jpg')";
    // pfpimg.src='assests/img/pfp-dark.png';
    // pfpimg.classList.toggle("hidden");
    currmode = "dark";
  } else {
    pfpimg.style.setProperty('background', 'linear-gradient(to bottom, #fc00ff, #00dbde');

    // pfpimg.classList.toggle("hidden");
    // pfpimg.src='assests/img/pfp-light.png';
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
    home.style.backgroundImage = "url('assests/img/vackground-com-6XNIVSDzA2g-unsplash.jpg')";
    currmode = "light";
  }
});
