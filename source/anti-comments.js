// erc-commenting-section


function initiate() {
    console.log("initiating anti-comments");
    document.getElementsByTagName("html")[0].style.display = "";
    hide_distractions();
}

function set_hide_comments(hide) {
    if (hide) add_css("hide_comments.css");
    else remove_css("hide_comments.css");
}

function add_css(file) {
    var check_link = document.querySelector(
        'link[href="' + chrome.extension.getURL("css/" + file) + '"]'
    ),
    link;

    if (check_link == null) {
        link = document.createElement("link");
        link.href = chrome.extension.getURL("css/" + file);
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
}

function remove_css(file) {
    var link = document.querySelectorAll(
        'link[href="' + chrome.extension.getURL("css/" + file) + '"]'
    );

    if (link.length > 0) {
        for (var i = 0; i < link.length; i++) {
            link[i].parentNode.removeChild(link[i]);
        }
    }
}

function get_default_options() {
    return {
            active: true,
            hideComments: true

    }

}

function hide_distractions() {
    add_css("hide_comments.css")
}

options = get_default_options();

initiate();