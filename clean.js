$(function () {



    let width = $("#width").val();
    $("#startButton").on("click", function () {
        console.log($("#allcircles").children());
        $("#allcircles").children().addClass("circle");


        $(".circle").width(width);


        let growthRate = $("#rate").val();



        let cirNumber = $("#numberOfCircles").val();
        for (let i = 0; i < cirNumber; i++) {
            $("#allcircles").append($("<div>", {
                "class": "circle",
                "css": {
                    "height":width,
                    "display":"inline-block",
                    "margin-right":"-5em",
                    "width": width,
                    "background-color": "#" + Math.floor(Math.random() * 16777215).toString(16),
                    "z-index" : i*2,
                }
            }));
        }

        setInterval(grow, growthRate);
    });

    $("#allcircles").on("click","div", function () {
        $(this).remove();
    });

   })


function grow() {
   let width= $(".circle").width();
   let height= $(".circle").height();

    let growthAmount = $("#growth").val();
   $(".circle").width(parseInt(width) + parseInt(growthAmount) +"px");
    $(".circle").height(parseInt(height) + parseInt(growthAmount) +"px");

}


