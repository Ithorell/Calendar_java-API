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

var saveBtn = $(".saveBtn")

// fecha de hoy 
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// determina los colores de los blocks con respecto al tiempo
function timeBlockColors() {
    var hour = moment().hours();

    $(".time-block").each(function(){
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour>hour) {
            $(this).addClass("future")
        }else if (currentHour == hour){
            $(this).addClass("present")
        }else {
            $(this).addClass("past")
        }
    })
};
// cuando hace click guarda el tiempo y plan
saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time,plan);
})

function usePlanner(){
    $(".hour").each(function(){
        var presentHour = $(this).text();
        var currentPlan = localStorage.getItem(presentHour)

        if (currentPlan !== null){
            $(this).siblings(".plan").val(currentPlan)
        }

    })
}

timeBlockColors();
usePlanner();
