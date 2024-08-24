/*----------------------------------------------------------slider-------------------------------------------*/

document.addEventListener(
    'DOMContentLoaded', ()=>{
        const slides = document.querySelector('.header_slider');
        const images = document.querySelectorAll('.header_slider img');
        let index = 0 ;

        const getSlideWidth = () => {
            return images[index].clientWidth; 
        };
    
        const nextSlide = () => {
            const slideWidth = getSlideWidth(); 
            index++;
            if (index >= images.length) {
                index = 0;
            }
            slides.style.transform = `translateX(${-index * slideWidth}px)`;
        };
    
        setInterval(nextSlide, 3000);

        window.addEventListener('resize', () => {
            const slideWidth = getSlideWidth();
            slides.style.transform = `translateX(${-index*slideWidth}%)`;
        });
    });