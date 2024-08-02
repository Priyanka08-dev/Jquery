$(document).ready(function(){
    $("button").click(function(event) {
        event.preventDefault(); 

        var name = $("#name").val().trim(); 
        var email = $("#email").val().trim(); 
        var  pass=$("#Pass").val().trim();

        if (name !=="" && email !=="" && pass !== "") {
            window.location.href = "k.html"; 
        } else {
            alert("required Field.");
        }
    });
       $(document).ready(function() {
            $("#email").on("input", function() {
                var email = $(this).val();
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                var isValid = emailPattern.test(email);

                $("#emailMessage").toggleClass("valid", isValid).text(isValid ? "Valid email format" : "Invalid email format").toggle(!isValid || isValid);
            });
        });
});