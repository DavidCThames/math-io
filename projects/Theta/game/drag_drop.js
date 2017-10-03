var selected;

function select(e) {
    if (selected != null)
        selected.css("box-shadow", "");
    selected = $(".drag #" + e.target.id);
    selected.css("box-shadow", "0px 0px 10px #2196F3");
}

function move(e) {
    $(".drop #" + e.target.id).prop("src", selected.prop("src"));
    $(".drop #" + e.target.id).prop("data-val", selected.data("val"));
}

function flip(e) {
    var sign = $("#" + e.target.id);
    if (sign.data("val") == "1") {
        sign.data("val", "-1");
        sign.prop("src", "resources/MathDrag/neg.svg");
    }
    else {
        sign.data("val", "1");
        sign.prop("src", "resources/MathDrag/pos.svg");
    }
}