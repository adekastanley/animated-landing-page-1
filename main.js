


const target = document.querySelector('.headline');
const splitHeadline1 = Splitting({ target: target, by: 'chars' });
const headlineLetters = splitHeadline1[0].chars


const intro = gsap.timeline();
intro.from(headlineLetters, {
    y: 100,
    opacity:0,
    duration: 1,
    stagger: .5
})
intro.to( headlineLetters, {

    scale:2,
    duration: 1,
    stagger: {
        amount: 0.5
    }
})
intro.to( '.section-one', {

    backgroundColor: '#000000',
    duration: .4,

})
intro.to( headlineLetters, {
 
    color: '#fff',
    duration: .4,

}, '<')
intro.to( '.background-container', {
    // delay: .3,
    opacity:1,
    duration: .6,
    ease: "power1.out",
})
intro.to(headlineLetters, {
    y: -200,
    duration: 1,

})
intro.from('nav ul li', {
    y: 100,
    opacity: 0,
    ease: "power1.in",
    stagger: {
        amount: 0.5
    },
    duration: 1,

})

// console.log(headlineWords)



// 
// 
// general 
// 
