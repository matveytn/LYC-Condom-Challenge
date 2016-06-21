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

//Building screen penis resize

$(document).ready(function () {
    /*$('#draggableHelper').draggable();*/
    $('#image').resizable({
        containment: "#container",
        minHeight: 60,
        minWidth: 120,
        maxHeight: 200,
        maxWidth: 600,
        animate: true,
        animateEasing: "easeOutElastic",
        animateDuration: 700,
        ghost: true,
        handles: {
            'e': '#egrip',
            's': '#sgrip'
        },
        resize: function (event, ui) {
            $('#test2').html(Math.round(ui.size.height * 0.4) + "mm");
            $('#measurements').html("Length: " + Math.round(ui.size.width * 0.3) + "mm - " + "Girth: " + Math.round(ui.size.height * 0.4) + "mm");
        },

    });
    $('#measurements').html("Length: 177mm - Girth: 80mm");
});

//$(function() {
//    $('#image').draggable({
//        axis: 'x'
//    });
//});


//Building screen images

var images = new Array();

images[0] = new Image();
images[0].src = '../../../media/Dicks/Circumsised_1.png';

images[2] = new Image();
images[2].src = '../../../media/Dicks/Circumsised_2.png';

images[5] = new Image();
images[5].src = '../../../media/Dicks/Circumsised_3.png';

images[1] = new Image();
images[1].src = '../../../media/Dicks/Uncircumsised_1.png';

images[3] = new Image();
images[3].src = '../../../media/Dicks/Uncircumsised_2.png';

images[4] = new Image();
images[4].src = '../../../media/Dicks/Uncircumsised_3.png';

$(function () {
    $("#circum").buttonset();
});

$('#circum1').click(function () {
    if ($('#circum1').is(':checked')) {
        $("#container #image img").attr("src", images[2].src);
    }
});

$('#circum2').click(function () {
    if ($('#circum2').is(':checked')) {
        $("#container #image img").attr("src", images[3].src);
    }
});

$(function () {
    $("#peniscolour").buttonset();
});

$('#colour1').click(function () {
    if ($('#colour1').is(':checked')) {
        $("#container #image img").attr("src", images[1].src);
    }
});

$('#colour2').click(function () {
    if ($('#colour2').is(':checked')) {
        $("#container #image img").attr("src", images[3].src);
    }
});

$('#colour3').click(function () {
    if ($('#colour3').is(':checked')) {
        $("#container #image img").attr("src", images[4].src);
    }
});
