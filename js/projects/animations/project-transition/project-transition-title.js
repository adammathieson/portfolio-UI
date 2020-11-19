

const projectStroke = anime({
    targets: '.project-title-path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    // duration: 400,
    delay: function(el, i) { return i * 500},
    // direction: 'alternate',
    // endDelay: 1000,
    // delay: 500,
    // loop: true
});

console.log(projectStroke.animations)
