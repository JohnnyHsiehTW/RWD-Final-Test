$(document).ready(function () {
    $(".side-menu-bar").click(function (e) { 
        e.preventDefault();
        $("body").toggleClass("menu-show");
    });
    
    $(".product-like").click(function (e) { 
        e.preventDefault();
        $(this).find("i").toggleClass("fa-regular fa-solid");
    }); 
});