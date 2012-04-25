/*http://www.buildinternet.com/project/supersized/docs.html#top*/
jQuery(function ($) {
    $.getJSON("/SuperSized/GetOptionsFor/?deck=" + deckname, $.supersized);
});

jQuery(function ($) {
    var $height = 265;
    var $arrow = "&darr;";
    var $label = "verberg";
    $("#footer-toggle,#footer-toggle-layover,#quoteimagecontainer").click(function () {
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
            $height = 265;
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

function SetContentPanel(minimized) {
    var $height;
    var $arrow;
    var $label;
    if (minimized == true) {
        //minimized
        $height = 38;
        $arrow = "&uarr;";
        $label = "meer info";
    } else {
        //maximized
        $height = 265;
        $arrow = "&darr;";
        $label = "verberg";
    }

    $("#footer").stop().animate({ height: $height }, "fast", toggled());

    function toggled() {
        $('.toggle-arrow').html($arrow);
        $('.toggle-label').html($label);
    }
}