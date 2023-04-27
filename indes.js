//variable total 1-4
var total = [0, 0, 0, 0]

//adding classes to make it look bigger
function addingClass() {
    for (var i = 1; i < 5; i++) {
        if ($("body").hasClass("body-light")) {
            $('#totalscore' + i).addClass("big-scoreblack")
            $('#text' + i).addClass("big-scoreblack")
            $('#num' + i).hide()
            $(".score").hide()
            $(".score-add").hide()
        }else{
            $('#totalscore' + i).addClass("big-score")
            $('#text' + i).addClass("big-score")
            $('#num' + i).hide()
            $(".score").hide()
            $(".score-add").hide()
        }
    }
}

//removing classes to make it look normal
function removingClass() {
    for (var i = 1; i < 5; i++) {
        $("#totalscore" + i).removeClass("big-score")
        $("#text" + i).removeClass("big-score")
        $("#totalscore" + i).removeClass("big-scoreblack")
        $("#text" + i).removeClass("big-scoreblack")
        $("#num" + i).show()
        $(".score").show()
        $("#totalscore" + i).show()
        $("#text" + i).show()
    }
}

//mouse click to see the scores and names
$(".show-score").mousedown(function () {
    addingClass();
    for (var i = 1; i < 5; i++) {
        if (total[i - 1] == 0) {
            $("#totalscore" + i).hide()
            $("#text" + i).hide()
        }
    }
    setTimeout(() => {
        removingClass();
        $(".score-add").show()
    }, 3000);
})


//to add the scores of individuals to the total 
$(document).keypress(function(e){
    var key=e.which;
    if(key == 13){
        console.log(true)
    for (var i = 1; i < 5; i++) {
        var inputString = $("#num" + (i)).val();
        total[i - 1] += Number(inputString);
        $("#totalscore" + (i)).html(total[i - 1])
        $("#num" + i).val("")
    }
    }
})


//toggle light and dark theme
$(".light-dark").on("click", function () {

    if ($("body").hasClass("body-dark")) {
        $("body").removeClass("body-dark")
        $("body").addClass("body-light")
        $(".light-dark").css("background-color", "whitesmoke")
        $("input").addClass("inverse-input")
        $("img").attr("src", "images/moon.png")

    } else {
        $("body").removeClass("body-light")
        $("body").addClass("body-dark")
        $(".light-dark").css("background-color", "black")
        $("input").removeClass("inverse-input")
        $("img").attr("src", "images/sun.png")
    }
})
