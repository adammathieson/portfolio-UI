export const tl_reduxLogo = anime.timeline({
})
.add({
    targets: '#Vector path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
})
.add({
    targets: '#Vector path',
    fill: ["none", "#764ABC"],
    easing: 'easeInOutSine',
    duration: 300,
}, '-=200')
.add({
    targets: '#Redux',
    translateY: [5, 0],
    opacity: [0,1],
    duration: 400,
    easing: 'linear'
})