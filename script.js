gsap.from(".how-it-works .hcard", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".hcard",
      scroller: "body",
      markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});