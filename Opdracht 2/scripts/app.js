gsap.registerPlugin(ScrollTrigger);


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


let images = gsap.utils.toArray('.image');
images.forEach(image => { 
    console.log(image);
  gsap.from(image, {
    scrollTrigger: {
      trigger: image,
      scroller: "body",
      toggleActions: "play reverse play reset"
    },
    opacity: 0,
    x: -300,
    duration: 0.5
  })});





// let timeline = gsap.timeline({repeat: 0, yoyo: true});

// timeline.to("h1", {duration:1, x: 300, y:200, rotation:360, backgroundColor: "purple"});
// timeline.to(".box", {duration:1, x: 300, y:200, rotation:360, backgroundColor: "red", ease: "bounce"});

// timeline.from("li", {duration: 0.2, x: "-300px", opacity: 0 , stagger: 0.5});



