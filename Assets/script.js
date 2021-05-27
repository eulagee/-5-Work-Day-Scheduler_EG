$(document).ready(function() {
    let currentTime = moment();

    let displayTime = document.querySelector("#currentDay");
    $(".saveBtn").on("click", function(e) {
        let parent = e.target.parentElement;
        let comment = parent.children[1];
        let value = comment.value ? comment.value : "";
        let time = parent.children[0].innerText.trim() + "-row";
        localStorage.setItem(time, value);
    });
    // $('.time-container').each((i, el) => {
    //     el.children[0].innerText(moment().add(i, 'hour').format('ha'));
    // })

    $("#currentDay").text(moment().format("MMMM Do YYYY"));
    console.log(window.localStorage, window.localStorage.getItem("8am-row"));
    $("#8am-text").val(localStorage.getItem('8am-row'));
    $("#9am-text").val(localStorage.getItem('9am-row'));
    $("#10am-text").val(localStorage.getItem("10am-row"));
    $("#11am-text").val(localStorage.getItem("11am-row"));
    $("#12pm-text").val(localStorage.getItem("12pm-row"));
    $("#1pm-text").val(localStorage.getItem("1pm-row"));
    $("#2pm-text").val(localStorage.getItem("2pm-row"));
    $("#3pm-text").val(localStorage.getItem("3pm-row"));
    $("#4pm-text").val(localStorage.getItem("4pm-row"));
    $("#5pm-text").val(localStorage.getItem("5pm-row"));

    let hour8 = 8;
    let hour9 = 9;
    let hour10 = 10;
    let hour11 = 11;
    let hour12 = 12;
    let hour1 = 13;
    let hour2 = 14;
    let hour3 = 15;
    let hour4 = 16;
    let hour5 = 17;

    let currentHour = moment().format('H');


    if (currentHour < hour8) {
        $("#8am-text").addClass("future");
    } else if (currentHour > hour9) {
        $("#8am-text").addClass("past");
    } else if (currentHour = hour9) {
        $("#8am-text").addClass("present");
    }

    if (currentHour < hour9) {
        $("#9am-text").addClass("future");
    } else if (currentHour > hour9) {
        $("#9am-text").addClass("past");
    } else if (currentHour = hour9) {
        $("#9am-text").addClass("present");
    }


    if (currentHour < hour10) {
        $("#10am-text").addClass("future");
    } else if (currentHour > hour10) {
        $("#10am-text").addClass("past");
    } else if (currentHour = hour10) {
        $("#10am-text").addClass("present");
    }

    if (currentHour < hour11) {
        $("#11am-text").addClass("future");
    } else if (currentHour > hour11) {
        $("#11am-text").addClass("past");
    } else if (currentHour = hour11) {
        $("#11am-text").addClass("present");
    }


    if (currentHour < hour12) {
        $("#12pm-text").addClass("future");
    } else if (currentHour > hour12) {
        $("#12pm-text").addClass("past");
    } else if (currentHour = hour12) {
        $("#12pm-text").addClass("present");
    }


    if (currentHour < hour1) {
        $("#1pm-text").addClass("future");
    } else if (currentHour > hour1) {
        $("#1pm-text").addClass("past");
    } else if (currentHour = hour1) {
        $("#1pm-text").addClass("present");
    }


    if (currentHour < hour2) {
        $("#2pm-text").addClass("future");
    } else if (currentHour > hour2) {
        $("#2pm-text").addClass("past");
    } else if (currentHour = hour2) {
        $("#2pm-text").addClass("present");
    }


    if (currentHour < hour3) {
        $("#3pm-text").addClass("future");
    } else if (currentHour > hour3) {
        $("#3pm-text").addClass("past");
    } else if (currentHour = hour3) {
        $("#3pm-text").addClass("present");
    }


    if (currentHour < hour4) {
        $("#4pm-text").addClass("future");
    } else if (currentHour > hour4) {
        $("#4pm-text").addClass("past");
    } else if (currentHour = hour4) {
        $("#4pm-text").addClass("present");
    }


    if (currentHour < hour5) {
        $("#5pm-text").addClass("future");
    } else if (currentHour > hour5) {
        $("#5pm-text").addClass("past");
    } else if (currentHour = hour5) {
        $("#5pm-text").addClass("present");
    }
});