console.log("app.js loaded");

let timeline = gsap.timeline({repeat: 0, yoyo: true});

timeline.to("h1", {duration:1, x: 300, y:200, rotation:360, backgroundColor: "purple"});
timeline.to(".box", {duration:1, x: 300, y:200, rotation:360, backgroundColor: "red", ease: "bounce"});

timeline.from("li", {duration: 0.2, x: "-300px", opacity: 0 , stagger: 0.5});
