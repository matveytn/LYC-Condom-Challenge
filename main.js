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
            $('#test').html("Length: " + Math.round(ui.size.width * 0.3) + "mm - " + "Girth: " + Math.round(ui.size.height * 0.4) + "mm");
        },

    });
    $('#test').html("Length: 177mm - Girth: 80mm");
});


var steps = ["I'd like less", "Just right", "I'd like more"]

$(function () {
    $("#slider").slider({
        value: 0,
        min: 0,
        max: 2,
        step: 1,
        slide: function (event, ui) {
            $("#amount").val(steps[ui.value]);
        }
    });
    $("#amount").val(steps[$("#slider").slider("value")]);
});

var images = new Array();

images[0] = new Image();
images[0].src = 'img/Circumsised_1.png';

images[2] = new Image();
images[2].src = 'img/Circumsised_2.png';

images[5] = new Image();
images[5].src = 'img/Uncircumsised_3.png';

images[1] = new Image();
images[1].src = 'img/Uncircumsised_1.png';

images[3] = new Image();
images[3].src = 'img/Uncircumsised_2.png';

images[4] = new Image();
images[4].src = 'img/Uncircumsised_3.png';

$(function () {
    $("#circum").buttonset();
});

$(function () {
    $("#latex").buttonset();
});

$('#radio1').click(function () {
    if ($('#radio1').is(':checked')) {
        $("#container #image img").attr("src", images[2].src);
    }
});

$('#radio2').click(function () {
    if ($('#radio2').is(':checked')) {
        $("#container #image img").attr("src", images[3].src);
    }
});

$(function() {
                   $("#modal1").dialog({
                     minWidth: 400,
                     minHeight: 'auto',
                     autoOpen: false,
                     modal: true,
                     dialogClass: 'condom-recommendation',
                     position: {
                       my: 'center',
                       at: 'center'
                     }
                   });

                   $("#dialog1").click(function() {
                     if ($("#modal1").dialog("isOpen") === true) {
                       $("#modal1").dialog("close");
                     } else {
                       $("#modal1").dialog("open").prev().css('background','#ff3399');

                     }
                   });
    });
