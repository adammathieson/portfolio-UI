
export function animations() {
    var logosContainer = window.document.querySelectorAll('.tech-logo div')
    var images = window.document.querySelectorAll('.image-container img')
    // console.log({images})
    
    var genericTitleSlide = anime({
        targets: '.title-container',
        translateX: [50, 0],
        opacity: [0,1],
        duration: 1000,
        easing: 'easeInOutCubic',
        // autoplay: false,
    })
    
    var descpriptionPopUp = anime({
        targets: '#description',
        translateY: [50, 0],
        opacity: [0,1],
        duration: 1000,
        easing: 'easeInOutCubic',
        // autoplay: false,
    })
    
    var imageReveal = anime({
        targets: [...images],
        scale: [0.8, 1],
        opacity: [0,1],
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: anime.stagger(250),
        // autoplay: false,
    })
    
    var logoFadeIn = anime({
        targets: '.tech-logo',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 2000,
        // delay: anime.stagger(500),
        // autoplay: false,
    })

    var nextBtn = anime({
        targets: '.next-control button',
        translateX: [20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutCubic',
    })

    var chevron = anime({
        targets: '.chevron-svg',
        translateX: [-20, 0],
        duration: 500,
        opacity: [0,1],
        easing: 'easeInOutCubic',
    })

    var reactLogo = anime({
        targets: '#react-logo',
        rotate: 360,
        duration: 1000,
        easing: 'linear'
    })

    var reduxLogo = anime({
        targets: '#Vector path',
        strokeDashoffset: [anime.setDashoffset, 0],
        //  opacity: [0,1],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: function(el, i) { return i * 250 },
        // direction: 'alternate',
        //  loop: true
    })

    var reduxLogo = anime({
        targets: '#Vector path',
        fill: "#764ABC",
        //  opacity: [0,1],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: 1000,
        // direction: 'alternate',
        //  loop: true
    })

    var reduxLogoTitle = anime({
        targets: '#Redux',
        // translateX: [10, 0],
        opacity: [0,1],
        duration: 400,
        delay: 800,
        easing: 'linear'
    })

    var materialUiLogo = anime({
        targets: '#material-ui-logo svg',
        scaleX: [-1, 1],
        duration: 1000,
        easing: 'linear'
    })

    var momentLogo = anime({
        targets: '#moment-logo svg',
        scaleY: [0, 1],
        duration: 1000,
        easing: 'linear'
    })

    var tlNode = anime.timeline({
        // duration: 1000,
        // loop: true,
        delay: 1000,
        // direction: 'alternate',
        // autoplay: false,
    })
        .add ({
            targets: '#node-2,#node-3,#node-1,#node-4,#edge-2,#edge-3,#edge-1',
            opacity: 1,
            // duration: 1,
            delay: anime.stagger(250),
        })
        .add({
            targets: '#edge-2,#edge-3,#edge-1',
            opacity: 0,
            delay: anime.stagger(100),
        })
        .add({
            targets: '#node-3,#node-1',
            translateY: '-5px',
            // opacity: 0,
        }, '-=1000')
        .add({
            targets: '#node-2',
            translateY: '5px',
            // opacity: 0,
        }, '-=2000')

        .add({
            targets: '#node-n,#node-o,#node-d,#node-e',
            opacity: 1,
            delay: anime.stagger(250),
        }, '-=1100')
        .add({
            targets: '#node-2,#node-3,#node-1,#node-4',
            opacity: 0,
            delay: anime.stagger(200),
        }, '-=1500')
        .add({
            targets: '#node-e',
            rotate: [-45, 0],
            translateY: [2, 0],
            translateX: [-2, 0],
            transformOrigin: ['95px 25px', '95px 25px'],
        }, '-=1000')
        .add({
            targets: '#node-js-and-tm',
            opacity: 1,
            translateY: [5, 0],
        }, '-=1500')

        // tlNode.play()
}






