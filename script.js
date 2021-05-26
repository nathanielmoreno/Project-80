$(".Submit").click(function() {
    let age = $(".Age").val();
    let yesno = $(".YesNo").val();

    if (age > 17 && yesno === "yes") {
        $(".Escanor").show();
    } else if (age < 17 && yesno === "yes") {
        $(".Mikasa").show();
    } else if (age > 17 && yesno === "no") {
        $(".Miruko").show();
    } else if (age < 17 && yesno === "no") {
        $(".Yuji").show();
    }
});

$(".Reset").click(function() {
    $(".Age").val("");
    $(".YesNo").val("");
    $("img").hide();
});