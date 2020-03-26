
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
var input10am = document.getElementById("input10am");
var btn10am = document.getElementById("btn10am");
var input11am = document.getElementById("input11am");
var btn11am = document.getElementById("btn11am");
var input12pm = document.getElementById("input12pm");
var btn12pm = document.getElementById("btn12pm");
var input1pm = document.getElementById("input1pm");
var btn1pm = document.getElementById("btn1pm");
var input2pm = document.getElementById("input2pm");
var btn2pm = document.getElementById("btn2pm");
var input3pm = document.getElementById("input3pm");
var btn3pm = document.getElementById("btn3pm");
var input4pm = document.getElementById("input4pm");
var btn4pm = document.getElementById("btn4pm");
var input5pm = document.getElementById("input5pm");
var btn5pm = document.getElementById("btn5pm");

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var textArea = $(this).siblings("textarea").val();
    var key = $(this).attr("id");

    console.log(textArea);

    localStorage.setItem(key, textArea);

});
$("#input9am").val(localStorage.getItem("btn9am"));

function updateBg() {
    var currentHour = moment().hours();
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

