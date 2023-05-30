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
            .add('start')
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
              }, 'start+=0.5')


         /*
         ** Cirkel 1
         */
            .add('cirkel1')
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
            }, 'cirkel1+=0.5')
            .to("#siebe .box", {
                borderRadius: "180"
            }, 'cirkel1')

            .to("#siebe .box", {
                backgroundColor: "#7d98a1",
                width: '20vw',
                height: '20vw',
                borderRadius: "0",
                rotateX: 45,
                rotateY: 45,
                rotateZ: 45,
            }, 'reset-img')
            .to("#siebe #measurments", {
                opacity: 0,
            }, 'reset-img+=0.5')
            // .to(".cirkel-image", {
            //     opacity: 0,
            //         onComplete: function () {
            //         var image = document.querySelector('.cirkel-image');
            //         if (image) {
            //             image.parentNode.removeChild(image);
            //         }
            //     },
            // }, 'cirkel1+=0.5')
         /*
         ** Reset image
         */
            .add('reset-img')
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
            .add('diamond')
            .to("#siebe #info-poker", {
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
            }, "diamond+=0.2")
            .to("#siebe #klavers", {
                opacity: 1,
                y: -900,
                x: 800,
                rotateZ: 5,
                ease: "power2.easeIn"
            }, "diamond+=0.4")
            .to("#siebe #box", {
                opacity: 0,
                y: -500,
                x: -400,
                ease: "power2.easeIn"
            }, "diamond")
         /*
         ** Cards
         */
            .add('cards')
            .to("#siebe .cards", {
                opacity: 1,
            }, 'cards')
            .to("#siebe .koningin", {
                opacity: 1,
                y: -300,
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
            .add('chill')
            .to("#siebe .chill", {
                opacity: 0,
            }, 'chill')
         /*
         ** Cirkel 2
         */
            .add('cirkel2')
            .to("#siebe .box", {
                backgroundColor: "#7d98a1",
                width: '20vw',
                height: '20vw',
                borderRadius: "0",
                rotateX: 45,
                rotateY: 45,
                rotateZ: 45,
                x: '10vw',
            }, 'cirkel2')
            .to("#siebe .box", {
                backgroundColor: "#7d98a1",
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
                backgroundColor: "#2b3628",
                width: '15vw',
                height: '15vw',
                borderRadius: "180",
                opacity: 0,
            } , 'box')
            .to("#siebe .cards", {
                opacity: 0,
                y: -1000,
            }, 'illuminati')
        /*
         ** Pizza
         */
         .add('pizza')
         .to("#siebe .box", {
             backgroundColor: "#f8b62c",
             width: '20vw',
             height: '20vw',
             borderRadius: "180",
             border: '20px solid #75491c',
             opacity: 1,
         })
         .to("#siebe .box", {
            backgroundColor: "#f8b62c",
            width: '20vw',
            height: '20vw',
            borderRadius: "180",
            border: '20px solid #75491c',
        }, 'pizza')
        .to("#siebe #honger", {
            x: -1000,
        }, 'pizza')
        // Sauce
        .add('tSauce')
        .to("#siebe #sauce", {
            opacity: 1,
            ease: "power2.easeIn",
        }, "tSauce")


        /*
         ** Reset
         */
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
            }, 'reset');


    }

}



