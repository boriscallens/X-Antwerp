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
        transition: 1, 			    // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
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
                {image: '/img/gebouw_1.png', title:
                    '<h3>X Antwerpen.</br>Berchem.</br>St&#233;phane Beel.</br>Zurenborg.</br></h3>' +
                    '<p>X-Antwerpen is een grootschalig stedelijk vernieuwingsproject met een gezonde mix van voornamelijk kantoren aangevuld met retail en ontspanningsmogelijkheden. Dat zorgt voor een aangename werkomgeving, en maakt het voor werknemers makkelijk om werk en priv&#233; op elkaar af te stemmen. De totale bovengrondse projectoppervlakte bedraagt 115.000m&#178;. De unieke locatie is een troef voor bedrijven die mikken op een toekomstgerichte mobiliteit.</p>' +
                    '<p>De goede bereikbaarheid met het openbaar vervoer en de nabijheid van het station Antwerpen-Berchem spelen daarbij een belan-grijke rol. Maar er is meer: X-Antwerpen ligt bovendien naast de Antwerpse ring, dus ook de bereikbaarheid met de wagen is gegarandeerd.</p>'
                },
                { image: '/img/gebouw_2.png'},
                { image: '/img/gebouw_3.png'},
                { image: '/img/XA_infographic5.png', title: 'X-Antwerpen is een grootschalig stedelijk vernieuwingsproject met een gezonde mix van voornamelijk kantoren aangevuld met retail en ontspanningsmogelijkheden. Dat zorgt voor een aangename werkomgeving, en maakt het voor werknemers makkelijk om werk en privé op elkaar af te stemmen. De totale bovengrondse projectoppervlakte bedraagt 115.000m². De unieke locatie is een troef voor bedrijven die mikken op een toekom-stgerichte mobiliteit. De goede bereikbaarheid met het openbaar vervoer en de nabijheid van het station Antwerpen-Berchem spelen daarbij een belan-grijke rol. Maar er is meer: X-Antwerpen ligt bovendien naast de Antwerpse ring, dus ook de bereikbaarheid met de wagen is gegarandeerd.' }
        
                //{ image: 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/kazvan-1.jpg', title: 'Image Credit: Maria Kazvan', thumb: 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/kazvan-1.jpg', url: 'http://www.nonsensesociety.com/2011/04/maria-kazvan/' },
		],

        // Theme Options			   
        progress_bar: 0, 		    // Timer for each slide							
        mouse_scrub: 1
    });
});

jQuery(function ($) {
    var $height = 229;
    var $arrow = "&darr;";
    var $label = "verberg";
    $("#footer-toggle").click(function () {
        toggle();
        $("#footer").stop().animate({ height: $height }, "fast", toggled());
        /* remove focus from link so no dotted border appears */
        this.blur(); 
        return false;
    });

    function toggle() {
        if ($arrow == "&uarr;") {
            $arrow = "&darr;";
            $label = "verberg";
            $height = 229;
        } else {
            $arrow = "&uarr;";
            $label = "meer info";
            $height = 38;
        }
    }
    function toggled() {
        $('.toggle-arrow').html($arrow);
        $('.toggle-label').html($label);
    }
});