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
                backgroundColor: "blue",
                rotation: 360,
                left: '30vw',
                top: 'calc(50vh - 20vw)',
                width: '40vw',
                height: '40vw',
            }, 'start')
        .add('deel1')
        .to("#siebe .box", { 
                borderRadius: "0" ,
                backgroundColor: "red",
                rotation: 360,
                left: '30vw',
                top: 'calc(50vh - 20vw)',
                width: '40vw',
                height: '40vw',
            }, 'deel1')
            .from("#siebe p:first-of-type", {
                opacity: 0,
                x: -300,
            }, 'deel1')

        .add('deel2')
        .to("#siebe .box", {
            width: '20vw', 
            height: '20vw',
            rotateX: 45,    
            rotateY: 45,
            rotateZ: 45,
        }, 'deel2') 


        .add('reset')
        .to("#siebe .box", { 
            borderRadius: "0" ,
            backgroundColor: "white",
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