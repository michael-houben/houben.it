// scrolling effects go here

// gsap code goes here
gsap.registerPlugin(ScrollTrigger);


gsap.from('.profile-target', {
    y: "10%",
    opacity: 0,
    duration:.4,
    ease: "power.out",
    scrollTrigger: {
        trigger: '.profile-trigger',
        toggleActions: "restart none reverse none",
        start: "top 60%",
        end: "top 80%",
        //markers: true,
    }
});


gsap.from('.contact-target', {
    y: "10%",
    opacity: 0,
    duration:.4,
    ease: "power.out",
    scrollTrigger: {
        trigger: '.contact-trigger',
        toggleActions: "restart none reverse none",
        start: "top 60%",
        end: "top 80%",
        //markers: true,
    }
});