/*------Form--------*/


$("#datepicker").datepicker({
    showWeek: true,
    firstDay: 1
});

$(function() {
    $('#timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 15,
        minTime: '9',
        maxTime: '11:00pm',
        defaultTime: '9',
        startTime: '10:00',
        dynamic: true,
        dropdown: true,
        scrollbar: true
    });
});

var $inPerson = $('.person');
$inPerson.focusin(function() {
    $(this).val('');
});
$inPerson.focusout(function() {
    var inVal = $(this).val().slice(0, 3);
    if (+inVal > 1 && +inVal < 10) {
        $(this).val('0' + +inVal + ' Persons');
    } else if (+inVal < 1 || isNaN(+inVal)) {
        $(this).val('Error');
    } else if (+inVal >= 10) {
        $(this).val(+inVal + ' Persons');
    } else {
        $(this).val('0' + +inVal + ' Person');
    }
});

/*------Video--------*/

var $video = $("#myvideo"),
    $playpause = $("#playpause");

$playpause.click(function() {
    $video.addClass('showed');
    if ($video[0].paused) {
        $video[0].play();
        $playpause.toggleClass('fa-play fa-pause').addClass('hidden');
    } else {
        $video[0].pause();
        $playpause.toggleClass('fa-play fa-pause').addClass('hidden');
    }
});

/*------load img--------*/
var count = 0;
$(".next-event-btn").click(function() {
    if (count == 0) {
        $('#since_img').attr('src', 'img/ItalianSalads.jpg');
        $("#par1").text("This taco salad contains traditional ingredients such as lettuce, tomatoes, beans, ground beef and corn chips. Serve this salad on a hot summer day.");
        count++;
        return false;
    } else if (count == 1) {
        $('#since_img').attr('src', 'img/Since-2014.jpg');
        $("#par1").text("It is a long established fact that a reader will be distracted readable content of a page when looking at its layout. of using Lorem Ipsum is that it has a more-or-less.");
        count++;
        return false;
    } else if (count == 2) {
        $('#since_img').attr('src', 'img/GreatmealsFor.jpg');
        $("#par1").text("This taco salad contains traditional ingredients such as lettuce, tomatoes, beans, ground beef and corn chips. Serve this salad on a hot summer day.");
        count = 0;
        return false;
    }
});