
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

document.onmousemove = ev => {
    const positionX = (window.innerWidth / -10 - ev.x) / -60;
    const positionY = -ev.y / 30;
    image1.style.transform = `translate(${positionX}px, ${positionY}px)`;
    image2.style.transform = `translate(${positionY}px, ${positionX}px)`;


}
const tl = gsap.timeline();

let timeline = new TimelineLite();
const html = document.querySelector("html");
const p = document.querySelector("p");
const burger = document.querySelector("burger");



timeline


  .from(".line h2 ", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    stagger: {
      amount: 0.5}
    })
  .from(p, 1, {y: 30, opacity: 0})
  .from(icon, 1, {y: 30, opacity: 0}); 
  