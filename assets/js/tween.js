app.directive('home', function() {

        // $.scrollify({
        //     section : "section",
        // });

    	// 	init scrollmagic
    	var controller = new ScrollMagic.Controller();

    	// 	loop through slides
    	$(".parallax").each( function () {

    		var bg = $(this).find(".background");

    		// Add tweenmax for backgroundParallax
    		var parallax = TweenMax.from( bg, 1, {
    			y: '-50%',
    			ease: Power0.easeNone
    		} );

    		// Create scrollmagic scene
    		var parallaxScene = new ScrollMagic.Scene({
    			triggerElement: this, // <-- Use this to select current element
    			triggerHook: 1,
    			duration: '200%',
    		})
    		.setTween( parallax )
    		.addTo(controller);
            // .addIndicators();
    	});

});

// // Timeline
// var scrollAnimation = new TimelineMax();
//     scrollAnimation.set(splitDiv, {autoAlpha: 1})
//     .to(splitDiv, 0.3, {height: "100px"})
//     .set([tomatoRight5, letters5], {autoAlpha: 0})
//     .to(tomato5, 0.6, {rotation: "45", transformOrigin: "bottom left"}, "rotate")
//     .to(splitDiv, 0.3, {y: "70",rotation: "0", transformOrigin: "top center"}, "rotate")
//     .to(bracketRight5, 0.1, {xPercent: 200, autoAlpha:0, ease:Power4.easeOut}, "rotate")
//     .to(bracketLeft5, 0.1, {xPercent: -200, autoAlpha:0, ease:Power4.easeOut}, "rotate")
//     .set(bracketRight5, {xPercent: -200, yPercent: 150, rotation: "90", transformOrigin: "bottom center", autoAlpha: 1}) //bring bracket to the bottom
//     .set(letters5, {y: '-160px', scale: 2, autoAlpha: 0}) //bring text to the top
//     .set(splitDiv, {autoAlpha: 0}) //hide mask
//     .to(bracketRight5, 0.3, {yPercent: 50, autoAlpha: 1, ease:Power4.easeOut}, "catch")
//     .to(tomato5, 0.3, {y: "+=2", rotation: "-=45", scale: 0.5, transformOrigin: "bottom left", ease:Bounce.easeOut}, "catch")
//     .to(tomato5, 0.6, {x: "+=40",y: "+=40", ease:Power4.easeIn})
//     .to(letters5, 0.3, {y: '-60px', autoAlpha: 1, ease:Power4.easeOut}, "+=0.3"); // bring in text;
//
// // Scene
// var scene4 = new ScrollScene({triggerElement: ".more-link", triggerHook: 'onEnter', triggerOffset: 400, duration: 300})
//     .addTo(controller)
//     .setTween(scrollAnimation);
