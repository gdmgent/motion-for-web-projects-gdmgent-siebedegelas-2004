gsap.registerPlugin(ScrollTrigger);

<<<<<<< HEAD
gsap.to(".square", {
    x: 800,
    y: 200,
    duration: 6,
    scrollTrigger: ".square"
})
=======

let squares = document.querySelectorAll(".square");

squares.forEach(square => {
  gsap.from(square, {
    scrollTrigger: {
      trigger: square,
    //   markers: true,
      toggleActions: "play reverse play reverse",
      start: "top 80%",
      end: "bottom 20%",
    },
    x: 400,
    y: 50,
  });
});
>>>>>>> refs/remotes/origin/main





// let timeline = gsap.timeline({repeat: 0, yoyo: true});

// timeline.to("h1", {duration:1, x: 300, y:200, rotation:360, backgroundColor: "purple"});
// timeline.to(".box", {duration:1, x: 300, y:200, rotation:360, backgroundColor: "red", ease: "bounce"});

// timeline.from("li", {duration: 0.2, x: "-300px", opacity: 0 , stagger: 0.5});



