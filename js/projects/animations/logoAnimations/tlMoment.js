export const tl_momentLogo = anime.timeline({
})
.add({
    targets: '#momentLogo',
    opacity: [0, 1],
    duration: 2000,
    easing: 'linear'
})
.add({
    targets: '#second',
    rotate: [-360, 0],
    // delay: 500,
    duration: 3000,
    // loop: true,
    easing: 'linear'
}, '-=2000')
.add({
    targets: '#minute',
    rotate: [-60, 0],
    // delay: 500,
    duration: 3000,
    easing: 'linear'
}, '-=4000')
