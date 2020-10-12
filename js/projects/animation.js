
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

}






