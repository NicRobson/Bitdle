
const theAnswer = Math.floor( Math.random() * 2 );

function MakeGuess() {

    var guess = $("#guess").val();

    if ( guess !== "1" && guess !== "0" ) {
        $("#guess").val("");
    } else {
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