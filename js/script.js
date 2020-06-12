// Обработка нажатий на кнопки переключения слайдов в слайдере

var sliderButtonRight = document.querySelector(".promo-slider-button-right");
var sliderButtonLeft = document.querySelector(".promo-slider-button-left");

// var promoSlides = document.querySelectorAll(".promo-slide");
var promoSlideFirst = document.querySelector(".promo-slide-1");
var promoSlideSecond = document.querySelector(".promo-slide-2");

var promoSliderRadioFirst = document.querySelector(".promo-slider-radio-button-1");
var promoSliderRadioSecond = document.querySelector(".promo-slider-radio-button-2");

sliderButtonRight.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlideFirst.classList.remove("promo-slide-displayed");
  promoSlideSecond.classList.add("promo-slide-displayed");
  promoSliderRadioFirst.checked = false;
  promoSliderRadioSecond.checked = true;
});

sliderButtonLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  promoSlideFirst.classList.add("promo-slide-displayed");
  promoSlideSecond.classList.remove("promo-slide-displayed");
  promoSliderRadioSecond.checked = false;
  promoSliderRadioFirst.checked = true;
});

promoSliderRadioFirst.addEventListener("change", function (evt) {
  evt.preventDefault();
  promoSlideFirst.classList.add("promo-slide-displayed");
  promoSlideSecond.classList.remove("promo-slide-displayed");
});

promoSliderRadioSecond.addEventListener("change", function (evt) {
  evt.preventDefault();
  promoSlideFirst.classList.remove("promo-slide-displayed");
  promoSlideSecond.classList.add("promo-slide-displayed");
});

// Обработка нажатий на кнопки открытия и закрытия модального окна

var feedbackModalOpen = document.querySelector(".button-contacts");
var feedbackModal = document.querySelector(".modal-form");
var feedbackModalClose = feedbackModal.querySelector(".modal-close");

var showFeedbackModal = function () {
  // 1. Показать окно
  feedbackModal.classList.remove("modal-hidden");

  // 2. Добавить обработчик для закрытия
  document.addEventListener("keydown", onFeedbackModalEscPress);
};

var hideFeedbackModal = function () {
  // 1. Скрыть окно
  feedbackModal.classList.add("modal-hidden");

  // 2. Удалить обработчик для закрытия
  document.removeEventListener("keydown", onFeedbackModalEscPress);
};

var onFeedbackModalEscPress = function (evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    hideFeedbackModal();
  }
};

feedbackModalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  showFeedbackModal();
});

feedbackModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  hideFeedbackModal();
});

var mapModalOpen = document.querySelector(".map-photo-link");
var mapModal = document.querySelector(".modal-map");
var mapModalClose = mapModal.querySelector(".modal-close");

var showMapModal = function () {
  mapModal.classList.remove("modal-hidden");

  document.addEventListener("keydown", onMapModalEscPress);
};

var hideMapModal = function () {
  mapModal.classList.add("modal-hidden");

  document.removeEventListener("keydown", onMapModalEscPress);
};

var onMapModalEscPress = function () {
  if (evt.key === "Escape") {
    evt.preventDefault();
    showMapModal();
  }
};

mapModalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  showMapModal();
});

mapModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  hideMapModal();
});
