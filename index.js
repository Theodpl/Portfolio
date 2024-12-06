document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne toutes les sliders
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        const sliderContent = slider.querySelector(".slider-content");
        const prevButton = slider.querySelector(".bouton-slider-prev");
        const nextButton = slider.querySelector(".bouton-slider-next");

        prevButton.addEventListener("click", () => {
            const widthSlider = sliderContent.offsetWidth;
            sliderContent.scrollLeft -= widthSlider;
        });

        nextButton.addEventListener("click", () => {
            const widthSlider = sliderContent.offsetWidth;
            sliderContent.scrollLeft += widthSlider;
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo-theo-cta");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logo.classList.add("visible");
        } else {
          logo.classList.remove("visible");
        }
      });
    });
  
    observer.observe(logo);
  });


  document.addEventListener("DOMContentLoaded", () => {
    const logoHeader = document.querySelector(".logo-theo-header");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logoHeader.classList.add("visible");
        } else {
          logoHeader.classList.remove("visible");
        }
      });
    });
  
    observer.observe(logoHeader);
  });