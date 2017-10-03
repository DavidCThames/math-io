$(document).ready(function () {
    var hash;
    viewChoice = function () {
        window.setTimeout(function () {
            if (window.location.hash == "" || window.location.hash == "#") {
                hash = "#overview";
            } else {
                hash = window.location.hash;
            }
            hash = hash.slice(1, hash.length);
            hash += ".html";
            makeRequest(hash);
        }, 200);
    }
    var makeRequest = function (url) {
        //Clean up already existing container
        $('.container > *').remove();

        var folder = "views/";
        $.ajax(folder + url).done(function (data) {
            $('.container').append(data);
        });

    }
    viewChoice();
})