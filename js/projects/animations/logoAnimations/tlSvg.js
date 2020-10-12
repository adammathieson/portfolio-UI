export const tl_svgLogo = anime.timeline({
})
.add({
    targets: '#svg-vector',
    rotate: [720, 0],
    duration: 3000,
    easing: 'linear',
})
.add({
    targets: ['#S-svg', '#V-svg', '#G-svg'],
    translateY: [70, 0],
    duration: 1800,
    easing: 'linear',
    delay: anime.stagger(600),
}, '-=3000')