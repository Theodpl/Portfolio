function previous() {
    const widthSlider = document.querySelector('.slider-content').offsetWidth;
    document.querySelector('.slider-content').scrollLeft -= widthSlider;
}
function next() {
    const widthSlider = document.querySelector('.slider-content').offsetWidth;
    document.querySelector('.slider-content').scrollLeft += widthSlider;
}

// document.querySelectorAll('.slider-content').forEach(button) => {

// }