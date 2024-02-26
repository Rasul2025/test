const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 1220px
        1220: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

const arrowLeft = document.querySelector(".stages_swiper-button-prev");

const arrowRight = document.querySelector(".stages_swiper-button-next");

const stagesSlide = document.querySelectorAll(".stages_swiper-slide");

const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircles() {
    const div = document.createElement("div");
    div.className = "ellipse";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    stagesSlide.forEach(createPaginationCircles);
    paginationCircles[0].classList.add("ellipse-active");
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("ellipse-active")
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("ellipse-active")
}

function showSlide() {
    stagesSlide[currentSlideIndex].classList.add("block");
}

function hideSlide() {
    stagesSlide[currentSlideIndex].classList.remove("block");
}

function nextSlide() {
    hideSlide();
    removeActiveClass();
    currentSlideIndex++;
    if (currentSlideIndex > stagesSlide.length - 1) {
        currentSlideIndex = 0;
    }

    addActiveClass();
    showSlide();
}

function previousSlide() {
    hideSlide();
    removeActiveClass();
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = stagesSlide.length - 1;
    }

    addActiveClass();
    showSlide();
}

addPagination();
arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", previousSlide);