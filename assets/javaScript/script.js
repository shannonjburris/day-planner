$(document).ready(function () {

    var currentTimeEL = $("#currentDay");
    var timeNow = moment();
    timeNow = moment().format("dddd, MMM DD, YYYY");
    currentTimeEL.text(timeNow);

    var saveBtn = $('.saveBtn');

    var fieldArray = [];

    saveBtn.on("click", function () {
        var value = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id')
        localStorage.setItem(time, value)


    });
    var hour = moment().format("k");
    console.log("hour " + hour);
    for (let index = 9; index < 18; index++) {
        let savedItem = localStorage.getItem("hour-" + index);
        
        if (savedItem) {
            $(".hour-" + index).val(savedItem);
        }
        console.log(index);

        if (hour === index) {
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

