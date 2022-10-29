$(function() {
 


    // Menu nav toggle //бургер меню
    $("#nav_toggle").on("click", function(event) {
            
        event.preventDefault();//отменяем стандартное поведение кнопки

        $(this).toggleClass("active"); //превращаем в крестик
        $("#nav").toggleClass("active");// toggle-добавл/удал класс
    });

    var typed = new Typed('.type', {
        strings: ["Front-End.", "Coding."],
        typeSpeed: 60,
        backDelay: 1200,
        backSpeed: 43,
        loop: true
    });

});






