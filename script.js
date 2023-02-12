let theAnswer = Math.floor( Math.random() * 2 );

function MakeGuess() {

    var guess = $("#guess").val();

    if ( guess !== "1" && guess !== "0" ) {
        $("#guess").val("");
    } else {
        localStorage.setItem("guess", guess);
        $("#submitButton").attr("disabled", "true").css("background-color", "#3a3a3c");
        $(".key").attr("disabled", "true").css("background-color", "#3a3a3c");

        if ( guess == theAnswer ) {
            $(`#key_${theAnswer}`).css("background-color", "#538d4e");
            $("#guess").css("background-color", "#538d4e");
        } else {
            $("#guess").css("background-color", "#eb3d3d");
        }
    }
}

function PressKey(key) {
    $("#guess").val(key);
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