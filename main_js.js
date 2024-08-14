/*----------------------------------------------------------slider-------------------------------------------*/

document.addEventListener(
    'DOMContentLoaded', ()=>{
        const slides = document.querySelector('.header_slider');
        const images = document.querySelectorAll('.header_slider img');
        let index = 0 ;

        const nextSlide = () =>{
            index++;
            if(index >= images.length){
                index = 0;
            }
            slides.style.transform = `translateX(${-index*20}%)`;
        };

        setInterval(nextSlide, 3000);
    });