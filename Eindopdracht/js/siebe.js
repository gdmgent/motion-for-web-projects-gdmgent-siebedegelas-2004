function siebe(fase) {
    console.log('siebe.js: fase = ' + fase);
    let section = document.getElementById('siebe');

    if (!section.init) {
        section.init = true;
        // eigen animatie schrijven
        console.log("siebe.js: init");
        section.tl
            .add('start')
            .to("#siebe .box", {
                borderRadius: "50%" ,
                backgroundColor: "#404E4D",
                rotation: 360,
                left: '30vw',
                top: 'calc(50vh - 20vw)',
                width: '40vw',
                height: '40vw',
            }, 'start')
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
            .to("#siebe .box", {
                borderRadius: "180"
            }, 'cirkel1')
            .from("#siebe p:first-of-type", {
                opacity: 0,
                x: -300,
            }, 'cirkel1')
            .to("#siebe .box", {
                backgroundColor: "#7d98a1",
                width: '20vw',
                height: '20vw',
                borderRadius: "0",
                rotateX: 45,
                rotateY: 45,
                rotateZ: 45,
                // onComplete: function () {
                //     var image = document.createElement('img');
                //     image.src = './images/cirkel.png';
                //     image.classList.add('cirkel-image');
                //     document.querySelector('#siebe .box').appendChild(image);
                // },
            }, 'cirkel1+=0.5')

            .add('reset-img')
            .to("#siebe .box", {
                backgroundColor: "red",
                width: '20vw',
                height: '20vw',
                borderRadius: "0",
                rotateX: 45,
                rotateY: 45,
                rotateZ: 45,
                x: '40vw',
            // }, 'reset-img')
            // .to(".cirkel-image", {
            //     opacity: 0,
            //     onComplete: function () {
            //         var image = document.querySelector('.cirkel-image');
            //         if (image) {
            //             image.parentNode.removeChild(image);
            //         }
            //     },
            }, 'reset-img')
            .add('diamond')


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
                y: -600,
                x: 200,
                rotateZ: 5,
                ease: "power2.easeIn" 
            }, "diamond+=0.4")
            
            



            .add('cirkel2')
            .to("#siebe .box", {
                backgroundColor: "#7d98a1",
                width: '20vw',
                height: '20vw',
                borderRadius: "0",
                rotateX: 45,
                rotateY: 45,
                rotateZ: 45,
                x: '20vw',
            }, 'cirkel2')
            .to("#siebe .box", {
                backgroundColor: "#35654d",
                width: '40vw',
                height: '40vw',
                borderRadius: "50%",
                rotateX: 180,
                rotateY: 180,
                rotateZ: 180,
                x: '0vw',
            }, 'cirkel2')
            .to("#siebe .box", {
                x: '0vw',
            }, 'cirkel2')
            .from("#siebe p:first-of-type", {
                opacity: 0,
                x: -300,
            }, 'cirkel2')




            // Reset      
            .add('reset')
            .to("#siebe .box", {
                borderRadius: "0" ,
                backgroundColor: "#ffffff",
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                width: '20vw',
                height: '20vw',
                left: '40vw',
                top: 'calc(50vh - 10vw)',
            }, 'reset');
    }
}



