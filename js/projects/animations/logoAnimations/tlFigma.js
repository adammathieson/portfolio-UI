export const tl_figmaLogo = anime.timeline({
    delay: 500,
    begin: () => {
        console.log('completed')
        tlFigPurple.play()
    }
})
.add({
    delay: 200,
    targets: '#figma-green-sq',
    translateX: [0, -98],
    duration: 300,
    easing: 'linear'
})
.add({
    targets: '#figma-green-sq',
    translateY: [0, -28],
    duration: 300,
    easing: 'linear'
})
.add({
    targets: '#figma-green-sq',
    opacity: [1,0],
    duration: 100,
})
.add({
    targets: '#figma-green',
    opacity: [0,1],
    duration: 100
})

// var tlFigGreen = anime.timeline({
// })


var tlFigPurple = anime.timeline({
    autoplay: false,
    begin: () => {
        tlFigRed.play()
    }
})
.add({
    delay: 400,
    targets: '#figma-purple-sq',
    translateX: [0, -136],
    duration: 300,
    easing: 'linear'
})
.add({
    targets: '#figma-purple-sq',
    translateY: [0, -56],
    duration: 300,
    easing: 'linear'
})
.add({
    targets: '#figma-purple-sq',
    opacity: [1,0],
    duration: 100,
})
.add({
    targets: '#figma-purple',
    opacity: [0,1],
    duration: 100

})

var tlFigRed = anime.timeline({
    autoplay: false,
    begin: () => {
        tlFigOrange.play()
    }

})
.add({
    delay: 600,
    targets: '#figma-red-sq',
    translateX: [0, -175],
    duration: 300,
    easing: 'linear'
})
.add({
    targets: '#figma-red-sq',
    translateY: [0, -80],
    duration: 300,
    easing: 'linear'
})
.add({
    targets: '#figma-red-sq',
    opacity: [1,0],
    duration: 100,
})
.add({
    targets: '#figma-red',
    opacity: [0,1],
    duration: 100

})

var tlFigOrange = anime.timeline({
    autoplay: false,
    begin: () => {
        tlFigBlue.play()
    }

})
.add({
    delay: 800,
    targets: '#figma-orange-sq',
    translateX: [0, -182],
    duration: 300,
    easing: 'linear'
})
.add({
    targets: '#figma-orange-sq',
    translateY: [0, -80],
    duration: 300,
    easing: 'linear'
})
.add({
    targets: '#figma-orange-sq',
    opacity: [1,0],
    duration: 100,
})
.add({
    targets: '#figma-orange',
    opacity: [0,1],
    duration: 100

})

var tlFigBlue = anime.timeline({
    autoplay: false,
})
.add({
    delay: 1000,
    targets: '#figma-blue-sq',
    translateX: [0, -220],
    duration: 300,
    easing: 'linear'
})
.add({
    targets: '#figma-blue-sq',
    translateY: [0, -56],
    duration: 300,
    easing: 'linear'
})
.add({
    targets: '#figma-blue-sq',
    opacity: [1,0],
    duration: 100,
})
.add({
    targets: '#figma-blue',
    opacity: [0,1],
    duration: 100
})