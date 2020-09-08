
export function animations() {
    var logos = window.document.querySelectorAll('.tech-logo div')
    var images = window.document.querySelectorAll('.image-container img')
    console.log({images})
    
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

    // var chevB = anime({
    //     targets: '#chev-1',
    //     rotate: 45,
    //     duration: 4000,
    //     translateOrigin: '50% 50%',
    // })
    // var chevA = anime({
    //     targets: '#chev-2',
    //     rotate: -45,
    //     duration: 2000,
    //     translateOrigin: '100% 0%',
    // })

    var reactLogo = anime({
        targets: '#react-logo svg',
        rotate: 360,
        duration: 1000,
        easing: 'linear'
    })

    // var reduxLogo = anime({
    //     targets: '#Vector',
    // //     translateX: [10, 0],
    // //     opacity: [0,1],
    //     duration: 1000,
    //     easing: 'linear'
    // })
    var reduxLogo = anime({
         targets: '#Vector path',
         strokeDashoffset: [anime.setDashoffset, 0],
        //  opacity: [0,1],
         easing: 'easeInOutSine',
         duration: 1500,
         delay: function(el, i) { return i * 250 },
         direction: 'alternate',
        //  loop: true
       })
    var reduxLogo = anime({
        targets: '#Vector path',
        fill: "#764ABC",
        //  opacity: [0,1],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: 800,
        // delay: function(el, i) { return i * 250 },
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
        // scaleY: [-1, 1],
        scaleX: [-1, 1],
        // opacity: [0,1],
        duration: 1000,
        easing: 'linear'
    })

    var momentLogo = anime({
        targets: '#moment-logo svg',
        // scaleY: [-1, 1],
        scaleY: [0, 1],
        // opacity: [0,1],
        duration: 1000,
        easing: 'linear'
    })

}






