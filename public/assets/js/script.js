/*====================
   01. Ratio js
=======================*/
window.addEventListener('load', () => {
    const bgImg = document.querySelectorAll(".bg-img");
    for (i = 0; i < bgImg.length; i++) {

        let bgImgEl = bgImg[i];
        /// Optional Class Add /// 
        if (bgImgEl.classList.contains('bg-top')) {
            bgImgEl.parentNode.classList.add("b-top");
        } else if (bgImgEl.classList.contains('bg-bottom')) {
            bgImgEl.parentNode.classList.add("b-buttom");
        } else if (bgImgEl.classList.contains('bg-center')) {
            bgImgEl.parentNode.classList.add("b-center");
        } else if (bgImgEl.classList.contains('bg-left')) {
            bgImgEl.parentNode.classList.add("b-left");
        } else if (bgImgEl.classList.contains('bg-right')) {
            bgImgEl.parentNode.classList.add("b-right");
        }

        /// Lazyloader Class Add ///
        if (bgImgEl.classList.contains('blur-up')) {
            bgImgEl.parentNode.classList.add("blur-up", "lazyload");
        }

        /// Size Class Add ///
        if (bgImgEl.classList.contains('bg_size_content')) {
            bgImgEl.parentNode.classList.add("b_size_content");
        }

        /// Ratio Style ///
        bgImgEl.parentNode.classList.add("bg-size");
        const bgSrc = bgImgEl.src;
        bgImgEl.style.display = 'none';
        bgImgEl.parentNode.setAttribute("style", `
        background-image: url(${bgSrc});
        background-size:cover;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `);
    }
});


/*===================== 
02. Tap To Top Js 
==========================*/
const tapTopBtn = document.querySelector(".tap-to-top-button")
const tapTopTopBox = document.querySelector(".tap-to-top-box")
tapTopBtn ? .addEventListener("click", function() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})
if (tapTopTopBox) {
    window.onscroll = function() {
        if (pageYOffset >= 1000) {
            tapTopTopBox.classList.remove("hide")
        } else {
            tapTopTopBox.classList.add("hide")
        }
    }
}

/*======================================
========================================
========================================
 remove below commented code to show rtl button
 ========================================
 ========================================
/*======================================

/*===================
03. Theme Setting js
=======================*/
// const body = document.querySelector("body");
// const themeSettingMarkup = `
// <!-- Theme Setting Star -->
// <div class="theme-controller">
//     <div class="light-dark-box">
//             <button id="rtl-btn" class="btnTheme "><i class="iconsax" data-icon="repeat"></i> <span class="text-value">Rtl</span></button>
//     </div>
// </div>
// <!-- Theme Setting End -->  
// `;

// body.insertAdjacentHTML("afterbegin", themeSettingMarkup);
// const themeBtnParent = document.querySelector(".light-dark-box");

// const rtlBtn = document.querySelector("#rtl-btn");
// const html = document.querySelector("html");
// const rtlLink = document.querySelector("#rtl-link");


// const activeRemoveFn = function (elList) {
//     elList.forEach(el => {
//         el.classList.remove("active");
//     })
// }

// themeBtnParent?.addEventListener("click", function (e) {
//     e.preventDefault();
//     const clicked = e.target.closest(".btnTheme")?.id;
//     if (!clicked) return;
//     if (clicked === "rtl-btn") {
//         rtlBtn.id = "ltr-btn";
//         rtlBtn.querySelector(".text-value").textContent = "Ltr"
//         html.setAttribute("dir", "rtl")
//         rtlLink.href = "assets/css/vendors/bootstrap.rtl.css";
//         rtlBtn.classList.add("rtlBtnEl")
//         localStorage.setItem('rtlcss', 'assets/css/vendors/bootstrap.rtl.css');
//         localStorage.setItem('dir', 'rtl');
//         localStorage.setItem('rtlBtnId', 'ltr-btn');
//         localStorage.setItem('textContentRtl', 'Ltr');
//     }
//     if (clicked === "ltr-btn") {
//         rtlBtn.id = "rtl-btn"
//         rtlBtn.querySelector(".text-value").textContent = "Rtl"
//         html.setAttribute("dir", "")
//         rtlLink.href = "assets/css/vendors/bootstrap.css";
//         localStorage.setItem('rtlcss', 'assets/css/vendors/bootstrap.css');
//         localStorage.setItem('dir', '');
//         localStorage.setItem('rtlBtnId', 'rtl-btn');
//         localStorage.setItem('textContentRtl', ' Rtl');
//     }
// })

// // Rtl 
// rtlBtn.id = localStorage.getItem("rtlBtnId") ? localStorage.getItem("rtlBtnId") : "rtl-btn";
// rtlBtn.querySelector(".text-value").textContent = localStorage.getItem("textContentRtl") ? localStorage.getItem("textContentRtl") : "Rtl";
// html.setAttribute("dir", localStorage.getItem("dir"));
// rtlLink.href = localStorage.getItem('rtlcss') ? localStorage.getItem('rtlcss') : 'assets/css/vendors/bootstrap.css';



/*=====================
 04. Footer Accordion Js 
==========================*/
const footerButton = document.querySelectorAll(".footer-title");
const showNav = document.querySelector(".footer-content");
for (var i = 0; i < footerButton.length; ++i) {
    footerButton[i].addEventListener('click', function() {
        this.parentNode.classList.toggle('open');
    })
}