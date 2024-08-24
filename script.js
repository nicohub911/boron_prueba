const openNav_btn = document.getElementById("openNav_btn");
const nav_logo = document.getElementById("nav_logo");
const nav_list = document.getElementById("nav_list");
const nav_element = document.getElementById("nav_element");

const our_focus_text = document.getElementById("our_focus_text");
const our_focus_img = document.getElementById("our_focus_img");

const twitter_slider = document.getElementById("twitter_slider");
const twSlider_btnLeft = document.getElementById("twSlider_btnLeft");
const twSlider_btnRight = document.getElementById("twSlider_btnRight");
const twitter_contImg = document.getElementById("twitter_contImg");
const twitter_contText = document.getElementById("twitter_contText");

document.addEventListener("DOMContentLoaded", () => {
    // initial nav properties
    nav_list.style.left = "100%";
    if (window.innerWidth < 865) {
        //keep the same height of the two elements
        twitter_contText.style.height = `${twitter_contImg.offsetHeight}px`; 
        our_focus_text.style.height = `${our_focus_img.offsetHeight}px`;
    } else {
        our_focus_text.style.height = "auto";
        twitter_contText.style.height = "auto";
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth < 865) {
            // keep the same height of the two elements
            twitter_contText.style.height = `${twitter_contImg.offsetHeight}px`;
            our_focus_text.style.height = `${our_focus_img.offsetHeight}px`;
            // initial nav properties
            nav_list.style.left = "100%";
            nav_logo.style.filter = "invert(0)";
            nav_element.className = "First-Nav";
            nav_logo.src = "./img/nav_logo.webp";
            openNav_btn.className = "btn-openNav";
        } else {
            twitter_contText.style.height = "auto";
            our_focus_text.style.height = "auto";
        }
    });
});

// change the width to make the list with options visible
openNav_btn.addEventListener("click", () => {
    if (window.innerWidth < 865) {
        // responsive
        if (nav_list.style.left == "0%") {
            nav_list.style.left = "100%";
            nav_logo.style.filter = "invert(0)";// change logo color
            openNav_btn.className = "btn-openNav";// to make the lines
        } else {
            nav_list.style.left = "0%";
            nav_logo.style.filter = "invert(1)";// change logo color
            openNav_btn.className = "btn-openNav_on";// to make the X
        }
    } else {
        // no resposive
        if (nav_list.style.left == "100%") {
            nav_list.style.left = "50%";
            openNav_btn.className = "btn-openNav_on";// to make the X
        } else {
            nav_list.style.left = "100%";
            openNav_btn.className = "btn-openNav";// to make the lines
        }
    }
});

// change all class names of browser elements
window.addEventListener("scroll", () => {
    if (scrollY > 0 && window.innerWidth > 864) {
        nav_logo.src = "./img//logo_letter.webp";// change the nav logo img
        nav_element.className = "Second-Nav";
    } else {
        nav_logo.src = "./img/nav_logo.webp";// change the nav logo img
        nav_element.className = "First-Nav";
    }
});

// make slider movement to the left
twSlider_btnLeft.addEventListener("click",()=>{
    if (twitter_slider.style.transform == "translateX(0%)") {
        twitter_slider.style.transform = "translateX(-200%)";
    } else if(twitter_slider.style.transform == "translateX(-200%)") {
        twitter_slider.style.transform = "translateX(-100%)";
    }else{
        twitter_slider.style.transform = "translateX(0%)";
    }
});

// make slider movement to the right
twSlider_btnRight.addEventListener("click",()=>{
    if (twitter_slider.style.transform == "translateX(0%)") {
        twitter_slider.style.transform = "translateX(-100%)";
    } else if(twitter_slider.style.transform == "translateX(-200%)") {
        twitter_slider.style.transform = "translateX(0%)";
    }else{
        twitter_slider.style.transform = "translateX(-200%)";
    }
});