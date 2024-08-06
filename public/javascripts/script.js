var circle = document.querySelector(".circle");
var main = document.querySelector(".main");
var media = document.querySelector(".media");
var git = document.querySelector(".git");
var LinkedIn = document.querySelector(".LinkedIn");
var Instagram = document.querySelector(".Instagram");
var lable=document.querySelector(".lable");
var text=document.querySelector("h1");

main.addEventListener("mousemove", function (dets) {
  var xAxis=dets.clientX;
  var yAxis=dets.clientY;
  gsap.to(circle, {
    x: xAxis,
    y: yAxis,
    opacity: 100,
    ease: "power2.out",
        
    
  });
});

text.addEventListener('mouseover', () => {
  gsap.to(spotlight, { opacity: 1 });
  text.style.color = '#ff0'; // Change text color when hovered
});

media.addEventListener("click", function () {
  window.location.href = "https://github.com/AniketMadhe";
});
LinkedIn.addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/in/aniket-madhe-1bb4a5281";
});
Instagram.addEventListener("click", function () {
  window.location.href =
    "https://www.instagram.com/pubgboyaniket?igsh=Nmh4cXM1a3cyMm4y";
});

gsap.from(".black h1", {
  x: "80%",
  opacity: 0,
  duration: 0.8,
  delay: 0.3,
});
gsap.from(".black h3", {
  y: 30,
  opacity: 0,
  duration: 0.9,
  delay: 0.6,
});

gsap.to(".black", {
  height: 0,
  duration: 1,
  delay: 1.5,
});
gsap.to(".black h1", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
});
gsap.to(".black h3", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
});
gsap.to(".yellow", {
  height: 0,
  duration: 1.2,
  delay: 2,
  ease: Expo.easeOut,
  backgroundColor: "black",
});
gsap.to(".green", {
  height: 0,
  duration: 1.4,
  delay: 1.7,
  ease: Expo.easeInOut,
  backgroundColor: "black",
});
