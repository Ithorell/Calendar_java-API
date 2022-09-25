/**
 * Criteria
 * 
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
 */

// Variables
var dateEl = $("#currentDay")

dateEl.text(moment().format('dddd, MMMM Do, YYYY'))


var saveBtn = $(".saveBtn");

saveBtn.click(function (event) {

    const time = $(this).siblings("textarea").val();
    const saveInfo = $(this).parent().attr('id');
    // console.log(saveInfo);
    // console.log(time);

    localStorage.setItem(saveInfo, time);
    // console.log(localStorage);
});

function colors() {
    var currentTime = moment().hours();
    // console.log(currentTime);

    $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id'));
        // console.log(blockHour);

        if (blockHour < currentTime) {
            $(this).addClass('past');
        };
        if (blockHour == currentTime) {
            $(this).addClass('present');
        };
        if (blockHour > currentTime) {
            $(this).addClass('future')
        }

    })
};


$('#9 .plan').val(localStorage.getItem('9'));
$('#10 .plan').val(localStorage.getItem('10'));
$('#11 .plan').val(localStorage.getItem('11'));
$('#12 .plan').val(localStorage.getItem('12'));
$('#13 .plan').val(localStorage.getItem('13'));
$('#14 .plan').val(localStorage.getItem('14'));
$('#15 .plan').val(localStorage.getItem('15'));
$('#16 .plan').val(localStorage.getItem('16'));
$('#17 .plan').val(localStorage.getItem('17'));
colors()