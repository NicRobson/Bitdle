
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

$(document).ready( function() {
    let isCacheSupported = 'caches' in window;
    const isTest = 0; // Ensure set to 0 for prod

    if (isCacheSupported) {
        let cacheName = 'bitdle'; 
        let url = isTest ? "/bitdle/index.html" : 'https://nicrobson.github.io/Bitdle/';

        caches.open(cacheName).then( cache => {
            cache.add(url).then( () => {
                console.log("Data cached ");
             });
        });
    }
});