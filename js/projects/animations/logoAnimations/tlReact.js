export const tl_reactLogo = anime.timeline({
})
.add({
    targets: '#react-1',
    rotate: [-60, 0],
    delay: 1000,
    duration: 1000,
}, '-=500')
.add({
    targets: '#react-2',
    rotate: [-120, 0],
    duration: 1000,
}, '-=500')
.add({
    targets: '#reactLogo',
    rotate: [0, 720],
    easing: 'linear'
}, '-=500')