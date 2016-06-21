$(function () {
    var x = 0;
    var y = 0;
    setInterval(function () {
        x += 1.16;
        y -= 1;
        $('body').css('background-position', x + 'px ' + y + 'px');
    }, 40);
});

//Building screen buttons and toggles

$(function () {
    $("input[type=submit]")
        .button()
        .click(function (event) {
            event.preventDefault();
        });
});


$(function () {
    $("#circum").buttonset();
});

$("#demo01").animatedModal({
    animatedIn: 'lightSpeedIn',
    animatedOut: 'bounceOutDown',
    color: '#3498db'
});
