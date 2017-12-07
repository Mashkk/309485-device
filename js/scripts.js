//Открытие-закрытие модального окна формы
var modalLink = document.querySelector(".modal-form-button");
var modalPopup = document.querySelector(".modal-wrapper");
var modalClose = modalPopup.querySelector(".modal-close-button");

modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.add("is-active");
    modalLogin.focus();
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.remove("is-active");
    modalLogin.classList.remove("invalid-value");
    modalEmail.classList.remove("invalid-value");
    modalLogin.classList.remove("modal-error");
    modalEmail.classList.remove("modal-error");
});


//Валидация формы
var modalLogin = document.getElementById("modal-user-name");
var form = modalPopup.querySelector("form");
var modalEmail = document.getElementById("modal-user-email");

form.addEventListener("submit", function (evt) {
    if (!modalLogin.value) {
        evt.preventDefault();
        modalLogin.classList.remove("invalid-value");
        modalLogin.classList.add("invalid-value");
        modalLogin.classList.remove("modal-error");
        modalLogin.offsetWidth = modalLogin.offsetWidth;
        modalLogin.classList.add("modal-error");
    }  

    if (!modalEmail.value) {
        evt.preventDefault();
        modalEmail.classList.remove("invalid-value");
        modalEmail.classList.add("invalid-value");
        modalEmail.classList.remove("modal-error");
        modalEmail.offsetWidth = modalEmail.offsetWidth;
        modalEmail.classList.add("modal-error");
    }     
});

// Снять алерт если пользователь ввел значение
modalLogin.addEventListener("blur", function(evt){
    if (modalLogin.value) {
        modalLogin.classList.remove("invalid-value");
        modalLogin.classList.remove("modal-error");   
    }  
});

modalEmail.addEventListener("blur", function(evt){
    if (modalEmail.value) {
        modalEmail.classList.remove("invalid-value");
        modalEmail.classList.remove("modal-error");
    }  
});


//Открытие-закрытие модального окна карты
var mapLink = document.querySelector(".map-image");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close-button");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("is-active");      
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("is-active");
});


//Закрытие модальных окон на клавишу Esc
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalPopup.classList.contains("is-active")) {
            modalPopup.classList.remove("is-active");
            modalLogin.classList.remove("invalid-value");
            modalEmail.classList.remove("invalid-value");
            modalLogin.classList.remove("modal-error");
            modalEmail.classList.remove("modal-error");
        }
        if (mapPopup.classList.contains("is-active")) {
            mapPopup.classList.remove("is-active");
        }
    }
    });

//Оживление главного слайдера 
var slide1 = document.getElementById("slide-1");
var slide2 = document.getElementById("slide-2");
var slide3 = document.getElementById("slide-3");

var button1 = document.getElementById("slider-button-1");
var button2 = document.getElementById("slider-button-2");
var button3 = document.getElementById("slider-button-3");

//Включение 1го слайда
button1.addEventListener("click", function (evt) {
    evt.preventDefault();
    button1.classList.add("is-active");
    button2.classList.remove("is-active");
    button3.classList.remove("is-active");

    slide1.classList.add("is-active");
    slide2.classList.remove("is-active");
    slide3.classList.remove("is-active");
});

//Включение 2го слайда
button2.addEventListener("click", function (evt) {
    evt.preventDefault();
    button2.classList.add("is-active");
    button1.classList.remove("is-active");
    button3.classList.remove("is-active");

    slide2.classList.add("is-active");
    slide1.classList.remove("is-active");
    slide3.classList.remove("is-active");
});

//Включение 3го слайда
button3.addEventListener("click", function (evt) {
    evt.preventDefault();
    button3.classList.add("is-active");
    button2.classList.remove("is-active");
    button1.classList.remove("is-active");

    slide3.classList.add("is-active");
    slide2.classList.remove("is-active");
    slide1.classList.remove("is-active");
});


//Оживление слайдера предоставляемых услуг
var servicesSlide1 = document.getElementById("services-slide-1");
var servicesSlide2 = document.getElementById("services-slide-2");
var servicesSlide3 = document.getElementById("services-slide-3");

var servicesButton1 = document.getElementById("services-button-1");
var servicesButton2 = document.getElementById("services-button-2");
var servicesButton3 = document.getElementById("services-button-3");

//Включение 1го слайда
servicesButton1.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesButton1.classList.add("is-active");
    servicesButton2.classList.remove("is-active");
    servicesButton3.classList.remove("is-active");

    servicesSlide1.classList.add("is-active");
    servicesSlide2.classList.remove("is-active");
    servicesSlide3.classList.remove("is-active");
});

//Включение 2го слайда
servicesButton2.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesButton2.classList.add("is-active");
    servicesButton1.classList.remove("is-active");
    servicesButton3.classList.remove("is-active");

    servicesSlide2.classList.add("is-active");
    servicesSlide1.classList.remove("is-active");
    servicesSlide3.classList.remove("is-active");
});

//Включение 3го слайда
servicesButton3.addEventListener("click", function (evt) {
    evt.preventDefault();
    servicesButton3.classList.add("is-active");
    servicesButton2.classList.remove("is-active");
    servicesButton1.classList.remove("is-active");

    servicesSlide3.classList.add("is-active");
    servicesSlide2.classList.remove("is-active");
    servicesSlide1.classList.remove("is-active");
});