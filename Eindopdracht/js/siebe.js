// Latest push, without the pizza
const { gsap } = window;


function siebe(fase) {
    console.log('siebe.js: fase = ' + fase);
    let section = document.getElementById('siebe');

    if (!section.init) {
        section.init = true;
        // Eigen animatie schrijven
        console.log("siebe.js: init");
        section.tl
         /*
         ** Start
         */
// Add 1
            .add('start')
                .to("#siebe .time", {
                    backgroundColor: "red"
                }, "start")
                .from("#siebe p:first-of-type", {
                    opacity: 0,
                    x: -300,
                    y: 300,
                }, 'start')
                .from("#siebe p:last-of-type", {
                    y: 300,
                }, 'start')
                .from("#siebe #measurments", {
                    opacity: 0,
                    x: -20000,
                }, 'start')
                .to("#siebe .box", {
                    borderRadius: "50%",
                    backgroundColor: "#404E4D",
                    rotation: 360,
                    left: '30vw',
                    top: 'calc(50vh - 20vw)',
                    width: '40vw',
                    height: '40vw',
                //     onComplete: function () {
                //       var image = document.createElement('img');
                //       image.src = './images/cirkel.png';
                //       image.classList.add('cirkel-image');
                //       document.querySelector('#siebe .box').appendChild(image);
                //     },
                }, 'start')
               


         /*
         ** Cirkel 1
         */
// Add 2
            .add('cirkel1')
                .to("#siebe .time", {
                    backgroundColor: "green"
                }, "cirkel1")
                .to("#siebe .box", {
                    borderRadius: "50%" ,
                    backgroundColor: "#63595C",
                    rotation: 180,
                    left: '30vw',
                    top: 'calc(50vh - 20vw)',
                    width: '40vw',
                    height: '40vw',
                }, 'cirkel1')
                .to("#siebe #measurments", {
                    opacity: 1,
                }, 'cirkel1')
                .to("#siebe .box", {
                    borderRadius: "180"
                }, 'cirkel1')

               
            // .to(".cirkel-image", {
            //     opacity: 0,
            //         onComplete: function () {
            //         var image = document.querySelector('.cirkel-image');
            //         if (image) {
            //             image.parentNode.removeChild(image);
            //         }
            //     },
            // }, 'cirkel1')
         /*
         ** Reset image
         */
// Add 3
            .add('reset-img')
                .to("#siebe #measurments", {
                    opacity: 0,
                }, 'reset-img')
                .to("#siebe .time", {
                    backgroundColor: "blue"
                }, "reset-img")
                .to("#siebe .box", {
                    backgroundColor: "red",
                    width: '20vw',
                    height: '20vw',
                    borderRadius: "0",
                    rotateX: 45,
                    rotateY: 45,
                    rotateZ: 50,
                    x: '40vw',
                }, 'reset-img')
         /*
         ** Diamond poker
         */
// Add 4
            .add('diamond')
                .to("#siebe .time", {
                    backgroundColor: "yellow"
                }, "diamond")
                .to("#siebe .info-poker", {
                    opacity: 0,
                    x: -500,
                }, 'diamond')
                .to("#siebe #harten", {
                    opacity: 1,
                    y: -600,
                    x: 200,
                    rotateZ: -5,
                    ease: "power2.easeIn"
                }, "diamond")
                .to("#siebe #schoppen", {
                    opacity: 1,
                    y: -400,
                    x: 500,
                    rotateZ: 5,
                    ease: "power2.easeIn"
                }, "diamond")
                .to("#siebe #klavers", {
                    opacity: 1,
                    y: -900,
                    x: 800,
                    rotateZ: 5,
                    ease: "power2.easeIn"
                }, "diamond")
                .to("#siebe #box", {
                    opacity: 0,
                    y: -500,
                    x: -400,
                    ease: "power2.easeIn"
                }, "diamond")
         /*
         ** Cards
         */
// Add 5
            .add('cards')
                .to("#siebe .time", {
                    backgroundColor: "orange"
                }, "cards")
                    .to("#siebe .cards", {
                        opacity: 1,
                    }, 'cards')
                    .to("#siebe .koningin", {
                        opacity: 1,
                    }, 'cards')
                    .to("#siebe .box", {
                        backgroundColor: "#ff5555",
                        width: '10vw',
                        height: '10vw',
                        borderRadius: "5%",
                        rotateX: 45,
                        rotateY: 45,
                        rotateZ: 55,
                        x: '10vw',
                        y: '10vw',
                    }, 'cards')
         /*
         ** Chill
         */
// Add 6
            .add('chill')
            .to("#siebe .time", {
                backgroundColor: "purple"
            }, "chill")
                .to("#siebe .chill", {
                    opacity: 0,
                }, 'chill')
                .to("#siebe .box", {
                    display: "none",
                }, 'chill')

                
         /*
         ** Cirkel 2
         */
// Add 7
            .add('cirkel2')   
                .to("#siebe .time", {
                    backgroundColor: "brown"
                }, "circle2")
                .to("#siebe .koningin", { 
                    y: +650
                }, 'cirkel2')
                .to("#siebe .box", {
                    backgroundColor: "#2b3628",
                    width: '40vw',
                    height: '40vw',
                    borderRadius: "0",
                    rotateX: 180,
                    rotateY: 180,
                    rotateZ: 180,
                    y: '10vw',
                    opacity: 0,
                    backgroundColor: "#2b3628",
                    width: '5vw',
                    height: '5vw',
                }, 'cirkel2')
                
                .from("#siebe p:first-of-type", {
                    opacity: 0,
                    x: -300,
                }, 'cirkel2')
         /*
         ** Illuminati
         */
// Add 8
            .add('illuminati')
                .from("#text-illuminati", {
                    x: -400,
                }, 'illumnati')
                .to("#siebe #illuminati-img", {
                    opacity: 1,
                    rotateZ: 5,
                    y: -200,
                    ease: "power2.easeIn"
                }, "illuminati-img")
                .to ("#siebe .box", {
                    ackgroundColor: "#fee194",
                    width: '20vw',
                    height: '20vw',
                    borderRadius: "180",
                    border: '20px solid #bc6201',
                    opacity: 0,
                } , 'box')
                .to("#siebe .cards", {
                    opacity: 0,
                    y: -1000,
                }, 'illuminati')
        /*
         ** Pizza
         */
// Add 9
         .add('pizza')
            .to("#siebe .box", {
                backgroundColor: "#fee194",
                width: '20vw',
                height: '20vw',
                borderRadius: "180",
                border: '20px solid #bc6201',
                opacity: 1,
                display: "block",
            }, 'pizza')
            .to("#siebe #honger", {
                x: -1000,
            }, 'pizza')
            // Sauce, cheese and pepperoni
            .from("#siebe .sauce", {
                x: -1000,
            }, "pizza")
            .from("#siebe .cheese", {
                x: +1000,
            }, "pizza")
            .from("#siebe .pepperoni", {
                y: -1000,
            }, "pizza")

  
// Add 10
            .add('oven')
                .to("#siebe .sauce", {
                    x: 2000,
                }, "oven")
                .to("#siebe .cheese", {
                    x: 2000,
                }, "oven")
                .to("#siebe .pepperoni", {
                    x: 2000,
                }, "oven")
                .to("#siebe .box", {
                    x: 2000,
                }, "oven")
                .to("#siebe .baked", {
                    x: 2000,
                    opacity: 0,
                }, "oven")
                .to("#siebe .graden", {
                    y: -200,
                    opacity: 1,
                }, "oven")

// Add 11
            .add('baked')
                .to("#siebe .sauce", {
                    opacity: 0,
                }, "baked")
                .to("#siebe .cheese", {
                    opacity: 0,
                }, "baked")
                .to("#siebe .pepperoni", {
                    opacity: 0,
                }, "baked")
                .to("#siebe .box", {
                    x: "10vw",
                }, "baked")
                .to("#siebe .baked", {
                    x: 0,
                    opacity: 1,
                }, "baked")

// Add 12
            .add('eat')
                .to("#siebe .baked", {
                    x: 2000,
                    opacity: 0,
                }, "eat")
                .to("#siebe .ate", {
                    x: -900,
                }, 'eat')
        /*
         ** Reset
         */
// Add 
            .add('reset')
                .to("#siebe .box", {
                    borderRadius: "0" ,
                    backgroundColor: 'white',
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    width: '20vw',
                    height: '20vw',
                    y: '0vw',
                    x: '0vw',
                    left: '40vw',
                    top: 'calc(50vh - 10vw)',
                    border: 'none',
                }, 'reset')
                .to("#siebe .baked", {
                    opacity: 0,
                }, "reset");


    }

}



