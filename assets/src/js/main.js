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

$('#circum1').one('click', function () {
    swal("Circumcision", "Most uncircumcised guys should be able to roll the foreskin back to expose the head of the penis before putting on a condom. However, if the foreskin is quite long or is too tight to roll back, a condom can be put on without retracting the foreskin.");
});

//Building screen penis resize
$(document).ready(function () {
    //    Inital dick size set
    $("#setSize").on('click', function () {
        sessionStorage.penisSize = '55';
    });
    $('#measurements').html("Length: 177mm - Girth: 80mm");
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
            $('#measurements').html("Length: " + Math.round(ui.size.width * 0.3) + "mm - " + "Circumference: " + Math.round(ui.size.height * 0.4) + "mm");
            var circumference = Math.round(ui.size.height * 0.4);
            sessionStorage.penisSize = circumference;
        }
    });
    $("#q1_yes").on('click', function () {
        sessionStorage.q1 = 'yes';
    });

    $("#q1_no").on('click', function () {
        sessionStorage.q1 = 'no';
    });

    $("#q2_yes").on('click', function () {
        sessionStorage.q2 = 'yes';
    });

    $("#q2_no").on('click', function () {
        sessionStorage.q2 = 'no';
    });


    //Choose appropriate text
    //JSON parse
    $.getJSON("assets/src/js/condoms.json", function (data) {
        //Q1 - Do you or your partner experience itchy or irritated skin from condoms?
        //Q2 - Do you get enough sensation from the condoms you use?

            if (sessionStorage.penisSize > 60) {
                if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "yes")
                    $('#results').html(data.large.non_latex.regular);
                else if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "no")
                    $('#results').html(data.large.non_latex.thin);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "yes")
                    $('#results').html(data.large.latex.regular);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "no")
                    $('#results').html(data.large.latex.thin);
            } else if (sessionStorage.penisSize < 60 && sessionStorage.penisSize > 50) {
                if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "yes")
                    $('#results').html(data.medium.non_latex.regular);
                else if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "no")
                    $('#results').html(data.medium.non_latex.thin);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "yes")
                    $('#results').html(data.medium.latex.regular);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "no")
                    $('#results').html(data.medium.latex.thin);
            } else if (sessionStorage.penisSize < 50) {
                if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "yes")
                    $('#results').html(data.snug.non_latex.regular);
                else if (sessionStorage.q1 == 'yes' && sessionStorage.q2 == "no")
                    $('#results').html(data.snug.non_latex.thin);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "yes")
                    $('#results').html(data.snug.latex.regular);
                else if (sessionStorage.q1 == 'no' && sessionStorage.q2 == "no")
                    $('#results').html(data.snug.latex.thin);
            }
//        });
    });
});

//Building screen images

$(function () {

    $("#peniscolour").buttonset();
    $("#circum").buttonset();

    var images = new Array();

    images[0] = new Image();
    images[0].src = '../../../media/Dicks/Light-Circum.png';

    images[1] = new Image();
    images[1].src = '../../../media/Dicks/Light-Uncircum.png';

    images[2] = new Image();
    images[2].src = '../../../media/Dicks/Med-Circum.png';

    images[3] = new Image();
    images[3].src = '../../../media/Dicks/Med-Uncircum.png';

    images[4] = new Image();
    images[4].src = '../../../media/Dicks/Dark-Circum.png';

    images[5] = new Image();
    images[5].src = '../../../media/Dicks/Dark-Uncircum.png';

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
            $("#container #image img").attr("src", images[5].src);
        }
    });

    $('#circum1').change(function () {
        if ($('#circum1').is(':checked')) {
            var a = jQuery.grep(images, function( n ,i) {
              if ( n.src == $("#container #image img").attr("src") )
              return i;
            })[0];

            var index = images.indexOf(a);

            $("#container #image img").attr("src", images[index-1].src);
        }
    });

    $('#circum2').change(function () {
        if ($('#circum2').is(':checked')) {
           var a = jQuery.grep(images, function( n ,i) {
              if ( n.src == $("#container #image img").attr("src") )
              return i;
            })[0];

            var index = images.indexOf(a);

            $("#container #image img").attr("src", images[index+1].src);
        }
    });

});
