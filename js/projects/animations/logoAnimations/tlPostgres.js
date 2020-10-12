export const tl_postgresLogo = anime.timeline({
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