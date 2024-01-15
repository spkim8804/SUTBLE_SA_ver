var _showPage = function() {
    var loader = $("div.loader");
    var container = $("div.container");
    loader.css("display","none");
    container.css("display","block");
};

var _loadPage = function() {
    var loader = $("div.loader");
    var container = $("div.container");
    loader.css("display", "block");
    container.css("display","none");
}

