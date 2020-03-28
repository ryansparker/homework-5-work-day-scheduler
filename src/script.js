
//DATE DISPLAYED
//display date on heading
function setDateTime() {
    var dateTimeP = $("#currentDay");

    const today = moment();
    dateTimeP.text(today.format("dddd" + ", " + "MMMM" + " " + "DD" + ", " + "YYYY"));
}
setDateTime();

//----------------------------------
//LOCAL STORAGE
//defining variable referencing HTML
var input9am = $("#input9am");
var btn9am = $("#btn9am");
var input10am = $("#input10am");
var btn10am = $("#btn10am");
var input11am = $("#input11am");
var btn11am = $("#btn11am");
var input12pm = $("#input12pm");
var btn12pm = $("#btn12pm");
var input1pm = $("#input1pm");
var btn1pm = $("#btn1pm");
var input2pm = $("#input2pm");
var btn2pm = $("#btn2pm");
var input3pm = $("#input3pm");
var btn3pm = $("#btn3pm");
var input4pm = $("#input4pm");
var btn4pm = $("#btn4pm");
var input5pm = $("#input5pm");
var btn5pm = $("#btn5pm");

//save button to input info into rows
$(".saveBtn").on("click", function (event) {
    //keeps information from clearing after page refresh
    event.preventDefault();
    //when save button is clicked, the value of the textarea is saved
    var textArea = $(this).parent(".btnBg").siblings("textarea").val();
    var key = $(this).attr("id");

    console.log(textArea);

    localStorage.setItem(key, textArea);

});

//inputting info into local storage
$("#input9am").val(localStorage.getItem("btn9am"));
$("#input10am").val(localStorage.getItem("btn10am"));
$("#input11am").val(localStorage.getItem("btn11am"));
$("#input12pm").val(localStorage.getItem("btn12pm"));
$("#input1pm").val(localStorage.getItem("btn1pm"));
$("#input2pm").val(localStorage.getItem("btn2pm"));
$("#input3pm").val(localStorage.getItem("btn3pm"));
$("#input4pm").val(localStorage.getItem("btn4pm"));
$("#input5pm").val(localStorage.getItem("btn5pm"));

//--------------------------------------
//COLOR CHANGE
//form changes color based on the hour
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

        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    });
}
updateBg();


