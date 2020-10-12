
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
    
    var descriptionPopUp = anime({
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

    var react1 = anime({
        targets: '#react-1',
        rotate: [-60, 0],
        delay: 1000,
        duration: 2000,
    })
    var react2 = anime({
        targets: '#react-2',
        rotate: [-120, 0],
        delay: 1000,
        duration: 2000,
    })
    var react3 = anime({
        targets: '#react-3',
        rotate: [-180, 0],
        delay: 1000,
        duration: 2000,
    })

    var reactLogo = anime({
        targets: '#react-logo',
        rotate: [0, 720],
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
        fill: ["none", "#764ABC"],
        //  opacity: [0,1],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: 1000,
        // direction: 'alternate',
        //  loop: true
    })

    var reduxLogoTitle = anime({
        targets: '#Redux',
        translateY: [10, 0],
        opacity: [0,1],
        duration: 600,
        delay: 1300,
        easing: 'linear'
    })

    var materialUiLogo = anime({
        targets: '#materialUiLogo svg',
        scaleX: [-1, 1],
        duration: 2000,
        easing: 'linear'
    })

    var momentLogo = anime({
        targets: '#momentLogo',
        opacity: [0, 1],
        duration: 2000,
        easing: 'linear'
    })
    
    var momentSec = anime({
        targets: '#second',
        rotate: [-360, 0],
        // delay: 500,
        duration: 3000,
        // loop: true,
        easing: 'linear'
    })

    var momentMin = anime({
        targets: '#minute',
        rotate: [-60, 0],
        // delay: 500,
        duration: 3000,
        // loop: true,
        easing: 'linear'
    })

    var tl_postgresLogo = anime.timeline({
    })
    .add({
        targets: '#postgres-elephant',
        rotate: [0, -15, 0, -15, 0],
        duration: 2000,
        loop: 2,
    })
    .add({
        targets: '#Postgre',
        translateX: [10, 0],
        opacity: [0, 1],
        duration: 600,
    })
    .add({
        targets: '#SQL',
        translateX: [-10, 0],
        opacity: [0, 1],
        // duration: 1000,
    }, '-=650')

}






