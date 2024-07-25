$(".header__burger").click(function () {
    $(".header__burger,.menu").toggleClass("active");
    $("body").toggleClass("lock");
});
// документ реади можно выпилить