export const tl_nodejsLogo = anime.timeline({
})
    .add ({
        targets: '#node-2,#node-3,#node-1,#node-4,#edge-2,#edge-3,#edge-1',
        opacity: [0,1],
        duration: 500,
        delay: anime.stagger(100),
    })
    .add({
        targets: '#edge-2,#edge-3,#edge-1',
        opacity: [0.1],
        delay: anime.stagger(100),
    })
    .add({
        targets: '#node-3,#node-1',
        translateY: ['0px', '-5px'],
        // opacity: 0,
    }, '-=1000')
    .add({
        targets: '#node-2',
        translateY: ['0px', '5px'],
        // opacity: 0,
    }, '-=2000')
    .add({
        targets: '#node-n,#node-o,#node-d,#node-e',
        opacity: [0,1],
        delay: anime.stagger(250),
    }, '-=1100')
    .add({
        targets: '#node-2,#node-3,#node-1,#node-4',
        opacity: [1,0],
        delay: anime.stagger(200),
    }, '-=1500')
    .add({
        targets: '#node-e',
        rotate: [-45, 0],
        translateY: [2, 0],
        translateX: [-2, 0],
        transformOrigin: ['95px 25px', '95px 25px'],
    }, '-=1000')
    .add({
        targets: '#node-js-and-tm',
        opacity: [0,1],
        translateY: [5, 0],
    }, '-=1500')