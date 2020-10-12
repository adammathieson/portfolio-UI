export const tl_greenSockLogo = anime.timeline({
})
.add({
    targets: '#hero-logo',
    translateX: [-30, 0],
    scale: [0, 1],
    duration: 2000,
})
.add({
    targets: '#Green',
    translateY: [10, 0],
    opacity: [0, 1],
    duration: 1000,
}, '-=1000')
.add({
    targets: '#Sock',
    translateY: [-10, 0],
    opacity: [0, 1],
    duration: 1000,
}, '-=1000')
.add({
    targets: '#hero-bg-circle',
    opacity: [0, 1],
    scale: [0,1.3,1],
    duration: 300,
    easing: 'linear'
}, '-=300')