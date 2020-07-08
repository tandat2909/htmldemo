

function view(item) {

    let idfile = $(item).attr("name");
    let duoifile = $(item).attr("value") == 1 ? ".htm" : ".html";
    $(".tab-pane")
    $("#ifview").attr("src", "../suppage/" + idfile + duoifile);
    if ($(item).attr("value") == 0) {
        $("#show_view").css("padding", "0");
    } else $("#show_view").css("padding-top", "0vh");




}

$("#btnMenu").click(function (e) { 
    e.preventDefault();
     let val = $("#pos").attr("val");
    if (val == 1) {
        $("#pos").css("position", "relative").attr("val", "2")
        $(this).css("padding","0.25rem 5.5rem")
        $("#iconMenu").attr("src", "../image/icon/study.png");
    } else {
        $("#pos").css("position", "absolute").attr("val", "1")
        $(this).css("padding","0.25rem .75rem")
        $("#iconMenu").attr("src", "../image/icon/book.png");
    }

});
