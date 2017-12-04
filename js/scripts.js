//Открытие-закрытие модального окна формы
var modalLink = document.querySelector(".modal-form-button");
var modalPopup = document.querySelector(".modal-form");
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
});


//Валидация формы
var modalLogin = document.getElementById("modal-user-name");
var form = modalPopup.querySelector("form");
var modalEmail = document.getElementById("modal-user-email");

form.addEventListener("submit", function (evt) {
    if (!modalLogin.value) {
        evt.preventDefault();
        modalLogin.classList.remove("invalid-value");
        modalLogin.offsetWidth = modalPopup.offsetWidth;
        modalLogin.classList.add("invalid-value");
    }  

    if (!modalEmail.value) {
        evt.preventDefault();
        modalEmail.classList.remove("invalid-value");
        modalEmail.offsetWidth = modalPopup.offsetWidth;
        modalEmail.classList.add("invalid-value");
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
        }
        if (mapPopup.classList.contains("is-active")) {
        mapPopup.classList.remove("is-active");
        }
    }
    });

//Оживление главного слайдера 
