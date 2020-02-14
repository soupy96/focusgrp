$("#newsletter").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "You might have forgotten something. Please try again.");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var nlemail = $("#nlemail").val();

    $.ajax({
        type: "POST",
        url: "php/nlform-process.php",
        data: "nlemail=" + nlemail,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    // $("#contactForm")[0].reset();
    submitMSG(true, "Thanks for subscribing!")
}

function formError(){
    $("#newsletter").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
        $("#newsletter-submit").attr("style", "display: none;");
    } else {
        var msgClasses = "h3 text-center nl-danger";
    }
    $("#newsletterSubmit").removeClass().addClass(msgClasses).text(msg);
}