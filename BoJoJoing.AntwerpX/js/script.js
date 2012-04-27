/*http://www.buildinternet.com/project/supersized/docs.html#top*/
jQuery(function ($) {
    $.getJSON("/SuperSized/GetOptionsFor/?deck=" + deckname, $.supersized);
});

jQuery(function ($) {
    $("#footer-toggle,#footer-toggle-layover,#quotecontainer").click(function () {
        toggleFooter($("#footer").height() > 38);
        /* remove focus from link so no dotted border appears */
        this.blur();
        return false;
        //event.preventDefault();
    });
});

function toggleFooter(minimized) {
    var $height;
    var $arrow;
    var $label;
    
    if (minimized) {
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
    //return true;
}