/*http://www.buildinternet.com/project/supersized/docs.html#top*/
jQuery(function ($) {
    $.supersized({
        // Functionality
        slideshow: 1, 		        // Slideshow on/off
        autoplay: 0, 		        // Slideshow starts playing automatically
        start_slide: 1, 		    // Start slide (0 is random)
        stop_loop: 0, 		        // Pauses slideshow on last slide
        random: 0, 		            // Randomize slide order (Ignores start slide)
        slide_interval: 3000, 	    // Length between transitions
        transition: 6, 			    // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 1000, 	// Speed of transition
        new_window: 1, 		        // Image links open in new window/tab
        pause_hover: 0, 		    // Pause slideshow on hover
        keyboard_nav: 1, 		    // Keyboard navigation on/off
        performance: 2, 		    // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
        image_protect: 1, 		    // Disables image dragging and right click with Javascript

        // Size & Position						   
        min_width: 0, 		        // Min width allowed (in pixels)
        min_height: 0, 		        // Min height allowed (in pixels)
        vertical_center: 1, 		// Vertically center background
        horizontal_center: 1, 		// Horizontally center background
        fit_always: 0, 		        // Image will never exceed browser width or height (Ignores min. dimensions)
        fit_portrait: 1, 		    // Portrait images will not exceed browser height
        fit_landscape: 0, 		    // Landscape images will not exceed browser width

        // Components							
        slide_links: 'blank',       // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        thumb_links: 1, 		    // Individual thumb links for each slide
        thumbnail_navigation: 0, 	// Thumbnail navigation
        slides: [			        // Slideshow Images
                { image: '/img/gebouw_1.png', thumb: '/img/gebouw_1_thumb.png'},
                { image: '/img/gebouw_2.png', thumb: '/img/gebouw_2_thumb.png'},
                { image: '/img/gebouw_3.png', thumb: '/img/gebouw_3_thumb.png'}
                //{ image: 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/kazvan-1.jpg', title: 'Image Credit: Maria Kazvan', thumb: 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/kazvan-1.jpg', url: 'http://www.nonsensesociety.com/2011/04/maria-kazvan/' },
		],

        // Theme Options			   
        progress_bar: 0, 		    // Timer for each slide							
        mouse_scrub: 1
    });
});
