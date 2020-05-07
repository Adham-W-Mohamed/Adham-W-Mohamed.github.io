


$(document).ready(function () {
    let remainedInBoundry = true;

    let startButtonClicked = false;

    $(".boundary").mouseover(function () {
        if (startButtonClicked){
            $(".boundary").css("background-color","red");
        }
        remainedInBoundry = false;
        // $("#boundary1").addClass("over");
        // alert("YOU JUST MOVED YOUR MOUSE OVER " + $("#boundary1"));
    });


    $("#end").click(function () {
        if (remainedInBoundry){
            $("#status").text("You Won!");
        }else{
            $("#status").text("You Lose, click the S to start over");
        }
        startButtonClicked = false;
    });

    $("#start").on("click", function () {
        startButtonClicked = true;
        $(".boundary").css("background-color","lightgray");
        remainedInBoundry = true;
        $("#status").text("Starting over!");
    });

    $("#maze").on("mouseleave", function () {
        if (startButtonClicked){
            alert("No cheating")
            remainedInBoundry = false;
        }

    })


});