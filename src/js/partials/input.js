$(document).ready(function () {

    $("#callbackForm").submit(function () {
        $.ajax({
            type: "POST",
            url: "/mail.php",
            data: $(this).serialize()
        }).done(function () {
            alert("Thank you! We'll contact you soon!");
        });
    });

    $("#subscribeForm").submit(function () {
        $.ajax({
            type: "POST",
            url: "/mail.php",
            data: $(this).serialize()
        }).done(function () {
            alert("Thank you! We'll contact you soon!");
        });
        return false;
    });
});

