let theAnswer = Math.floor( Math.random() * 2 );
let isCorrect = null;

function MakeGuess() {

    var guess = $("#guess").val();

    if ( guess !== "1" && guess !== "0" ) {
        $("#guess").val("");
    } else {
        let streak = localStorage.getItem("streak") ? localStorage.getItem("streak") : 0;
        let storedGuess = localStorage.getItem("guess");
        
        $("#submitButton").attr("disabled", "true").css("background-color", "#3a3a3c");
        $(".key").attr("disabled", "true").css("background-color", "#3a3a3c");
        
        if ( guess == theAnswer ) {
            isCorrect = true;
            $(`#key_${theAnswer}`).css("background-color", "#538d4e");
            $("#guess").css("background-color", "#538d4e");
            if (!storedGuess) {
                localStorage.setItem("streak", parseInt(streak) + 1 );
            }
        } else {
            isCorrect = false;
            $("#guess").css("background-color", "#eb3d3d");
            localStorage.removeItem("streak");
        }
        
        localStorage.setItem("guess", guess);
        ShowStats();
    }
}

function ShowStats() {

    if ($("#overlay").is(":visible")) {
        $("#overlay").hide();
    } else {
        let streak = localStorage.getItem("streak") ? localStorage.getItem("streak") : 0;

        console.log(streak);
        $("#overlay").show();
        $("#curr_streak").html(streak);
    }
}

function PressKey(key) {
    $("#guess").val(key);
} 

function Share() {

    let today = new Date();
    let originalDate = new Date("02/03/2023");
    var timediff = today.getTime() - originalDate.getTime();
    var diff = Math.ceil( timediff / (1000 * 3600 * 24) );

    if (isCorrect) {
        navigator.clipboard.writeText(`Bitdle ${diff} 1/1 \n` + String.fromCodePoint(0x1F7E9));
    } else {
        navigator.clipboard.writeText(`Bitdle ${diff} 0/1 \n` + String.fromCodePoint(0x1F7E5));
    }

    alert("Copied results to clipboard");

}

$(document).ready( function() {

    let date = localStorage.getItem("date");
    let today = new Date().toLocaleDateString();

    if (date == today) {
        // Update the answer to the previously saved answer
        theAnswer = localStorage.getItem("answer");

        // Check if we've made a guess today
        let guess = localStorage.getItem("guess");

        if (guess) {
            $("#guess").val(guess);
            MakeGuess();
        }

    } else {
        localStorage.removeItem("guess"); // Remove previous days guess...
        localStorage.setItem("answer", theAnswer);
        localStorage.setItem("date", today);
    }

});