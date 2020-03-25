
//Display Date on heading
function setDateTime() {
    var dateTimeP = $("#currentDay");

    const today = moment();
    dateTimeP.text(today.format("dddd" + ", " + "MMMM" + " " + "DD" + ", " + "YYYY"));
}

setDateTime();


//inputting info into local storage

var inputInfo = document.getElementById("input9am");
var saveInfo = document.getElementById("btn9am");
var lsDisplay = $("#lsOutput");

saveInfo.onclick = function() {
    var info = inputInfo.value;

    console.log(info);

    if (info) {
        localStorage.setItem(info);
        location.reload();
    }
};












//Moments' notes

// moment().isAfter("GMT-0400")
// moment().isBefore("GMT-0400")
// moment().isSame("GMT-0400")

// var d = moment.duration(3, "days")
// console.log(d);
