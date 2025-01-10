// gsap.from('.box1', {
//     y: -200,
//     duration: 3,
//     ease: 'linear',
//     repeat: -1,
//     yoyo: true,
// });

// gsap.from('.box2', {
//     y: -100,
//     duration: 2,
//     ease: 'linear',
//     repeat: -1,
//     yoyo: true,
// });

// gsap.from('.box3', {
//     y: -50,
//     duration: 5,
//     ease: 'linear',
//     repeat: -1,
//     yoyo: true,
// });

// fromTo method
gsap.fromTo('.box2', {
    y: 100,
    opacity: 0,
}, {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: 'linear',
    borderRadius: 0,
    repeat: -1,
    yoyo: true,
})