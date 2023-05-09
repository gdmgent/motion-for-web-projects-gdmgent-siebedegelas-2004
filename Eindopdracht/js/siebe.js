function siebe(fase) {
    console.log('siebe.js: fase = ' + fase);
    let section = document.getElementById('siebe');

    if( ! section.init ) {
        section.init = true;
        // eigen animatie schrijven
        console.log("siebe.js: init");
        section.tl
        .to("#siebe .box", { 
                borderRadius: "50%" ,
                backgroundColor: "blue",
                rotation: 360,
                left: '30vw',
                top: 'calc(50vh - 20vw)',
                width: '40vw',
                height: '40vw',
                duration: 1,
            })
        .add('deel1')
        .to("#siebe .box", { 
                borderRadius: "50%" ,
                backgroundColor: "red",
                rotation: 360,
                left: '30vw',
                top: 'calc(50vh - 20vw)',
                width: '40vw',
                height: '40vw',
                duration: 5,
            }, 'deel1')
            .from("#siebe p:first-of-type", {
                opacity: 0,
                duration: 1,
                x: -300,
            }, 'deel1')

            .to("#siebe .box", { 
                borderRadius: "0" ,
                backgroundColor: "white",
                rotation: 360,
                left: '40vw',
                top: 'calc(50vh - 10vw)',
                width: '20vw',
                height: '20vw',
                duration: 1,
            });
    }


}