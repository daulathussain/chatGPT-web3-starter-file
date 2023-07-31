/**=====================
     Laptop Animation
==========================**/

// laptop rotate effect
const element = document.querySelector(".laptop-img");
let rotationDegree = 60;

window.addEventListener("scroll", () => {
  rotationDegree = Math.max(
    0,
    60 - (window.scrollY / window.innerHeight) * 120
  );
  // element.style.transform = `rotateX(${rotationDegree}deg)`;
});

// effect object rotate
window.addEventListener("scroll", () => {
  const rotationAngle = window.pageYOffset * 0.15;
  const rotateObjects = document.querySelectorAll(".rotate-effect");
  rotateObjects.forEach((object) => {
    object.style.transform = `rotate(${rotationAngle}deg)`;
  });
});

// feature slider
const parentElement = document.getElementById("featureSlider");
const childElements = Array.from(parentElement.childNodes).filter(
  (node) => node.nodeType === Node.ELEMENT_NODE
);
const childCount = childElements.length;
let percentValue = 100 / childCount;
var myDiv = document.querySelector(".pagination-effect img");
if (document.getElementsByTagName("html")[0].getAttribute("dir") == "rtl") {
  myDiv.style.right = percentValue + "%";
} else {
  myDiv.style.left = percentValue + "%";
}

setTimeout(function () {
  featureSlider.on(
    "slideChange",
    function ({ realIndex: r, previousIndex: p }) {
      if (r - p == 1) {
        if (
          document.getElementsByTagName("html")[0].getAttribute("dir") == "rtl"
        ) {
          myDiv.style.right =
            parseInt(myDiv.style.left) + parseInt(percentValue) + "%";
        } else {
          myDiv.style.left =
            parseInt(myDiv.style.left) + parseInt(percentValue) + "%";
        }
      } else {
        if (
          document.getElementsByTagName("html")[0].getAttribute("dir") == "rtl"
        ) {
          myDiv.style.right =
            parseInt(myDiv.style.left) - parseInt(percentValue) + "%";
        } else {
          myDiv.style.left =
            parseInt(myDiv.style.left) - parseInt(percentValue) + "%";
        }
      }
    }
  );
}, 1000);
