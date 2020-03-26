
//Display Date on heading
function setDateTime() {
    var dateTimeP = $("#currentDay");

    const today = moment();
    dateTimeP.text(today.format("dddd" + ", " + "MMMM" + " " + "DD" + ", " + "YYYY"));
}

setDateTime();


// inputting info into local storage

var input9am = document.getElementById("input9am");
var btn9am = document.getElementById("btn9am");

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var textArea = $(this).siblings("textarea").val();
    var key = $(this).attr("id");
    // var scheduleInput = input9am.value.trim();

    console.log(textArea);

    localStorage.setItem(key, textArea);

});
$("#input9am").val(localStorage.getItem("btn9am"));

function updateBg() {
    var currentHour = moment().hours()-6;
    $(".row").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");

        }else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    });
}
updateBg();

//Moments' notes

// moment().isAfter("GMT-0400")
// moment().isBefore("GMT-0400")
// moment().isSame("GMT-0400")

// var d = moment.duration(3, "days")
// console.log(d)

