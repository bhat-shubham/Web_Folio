gsap.from("li", { duration: 1, y: "-100%", opacity: 0, ease: "back", stagger: 0.5,delay:0.3 });
gsap.from(".intro_text",{duration:2,delay:0.5, opacity:0});
gsap.from("#pfp",{duration:3,opacity:0,delay:0.5,ease:"back"});
let modebtn = document.querySelector(".mode-btn_dark");
let currmode = "light";
const pfpimg=document.getElementById("pfp_img");
const morebtn=document.querySelector(".more_button");

// modebtn.classList.add("mode-btn_dark")

modebtn.addEventListener("click", () => {
  const home = document.querySelector(".home");

  if (currmode === "light") {
    // modebtn.style.setProperty('transition', 'color 0.5s ease, color 0.5s ease;');
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
    pfpimg.style.background="linear-gradient(to right, #434343,rgb(160, 154, 154))";
    home.style.backgroundImage = "url('assests/img/dark.jpg')";
    morebtn.style.backgroundColor = "#52515f";
    // home.style.setProperty('filter', 'grayscale(100%)');
    pfpimg.style.backgroundSize = "500% 500%";
    // pfpimg.style.opacity = "0";
    // pfpimg.style.backgroundPosition = "0% 100%";
    currmode = "dark";
  } else {
    pfpimg.style.setProperty('background', 'linear-gradient(to bottom, #fc00ff, #00dbde)');
    pfpimg.style.backgroundSize = "100% 100%";
    pfpimg.classList.remove("active");  // Remove the active class to reset the gradient position

    // pfpimg.style.opacity = "1";

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
    home.style.backgroundImage = "url('assests/img/vackground-com-6XNIVSDzA2g-unsplash.jpg')";
    currmode = "light";
  }
});
