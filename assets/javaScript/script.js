$(document).ready(function () {
//Getting current today
    var currentTimeEL = $("#currentDay");
    var timeNow = moment();
    timeNow = moment().format("dddd, MMM DD, YYYY");
    currentTimeEL.text(timeNow);

    var saveBtn = $('.saveBtn');
//Empty array to store notes
    var fieldArray = [];

    saveBtn.on("click", function () {
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')
        localStorage.setItem(time, value)


    });
    //get current hour
    var hour = moment().format("k");
    for (let index = 9; index < 18; index++) {
        let savedItem = localStorage.getItem("hour-" + index);
        
        if (savedItem) {
            $(".hour-" + index).val(savedItem);
        }
//setting color for hour
        if (hour == index) {
            $(".hour-" + index).addClass("present"); 
        }
        if (hour < index) {
            $(".hour-" + index).addClass("future"); 
        }
        if (hour > index) {
            $(".hour-" + index).addClass("past"); 
        }
    }

});

