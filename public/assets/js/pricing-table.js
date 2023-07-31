/*====================
   Pricing hanging
=======================*/

window.addEventListener('load', handleLoadOrResize);
window.addEventListener('resize', handleLoadOrResize);

function handleLoadOrResize() {
    let pricingTop = document.getElementsByClassName("pricing-top")[0].offsetHeight;
    let pricingMid = document.getElementsByClassName("pricing-mid")[0].offsetHeight;
    let finalValue = (pricingTop + pricingMid) - 13;
    let targetElement = document.getElementsByClassName("handing-cls");
    Array.from(targetElement).forEach((elem) => elem.style.top = `${finalValue}px`)
}