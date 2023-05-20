function siebe(fase) {
    console.log('siebe.js: fase = ' + fase);
    let section = document.getElementById('siebe');

    if( ! section.init ) {
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
                borderRadius: "0" ,
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

        .add('cirkel2')
        .to("#siebe .box", {
            backgroundColor: "#7d98a1",
            width: '20vw', 
            height: '20vw',
            borderRadius: "0",
            rotateX: 45,    
            rotateY: 45,
            rotateZ: 45,
        }, 'cirkel2') 


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
        }, 'reset')
        
    }


}




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
                borderRadius: "5%",
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


            .add('cirkel2')
            .to("#siebe .box", {
                backgroundColor: "red",
                width: '20vw',
                height: '20vw',
                borderRadius: "0",
                rotateX: 45,
                rotateY: 45,
                rotateZ: 45,
            }, 'cirkel2')
            .from("#siebe p:first-of-type", {
                opacity: 0,
                x: -300,
            }, 'cirkel2')
            .to("#siebe .box", {
                backgroundColor: "#7d98a1",
                width: '20vw',
                height: '20vw',
                borderRadius: "0",
                rotateX: 45,
                rotateY: 45,
                rotateZ: 45,
            }, 'cirkel2')










            


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
















