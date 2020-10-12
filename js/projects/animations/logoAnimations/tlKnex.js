export const tl_knexLogo = anime.timeline({
})
.add({
    targets: '#spokes',
    rotate: [0, -1080],
    duration: 2000,
    easing: 'linear',
})
.add({
    targets: '#knexLogo svg',
    translateX: [70, 0],
    duration: 2000,
    easing: 'easeInCubic',
}, '-=2000')
.add({
    targets: '#KNEXJS',
    opacity: [0,1],
    translateX: [-20, 0],
    // translateY: [3, 0],
    easing: 'linear',
    duration: 300,
})