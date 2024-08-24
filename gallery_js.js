
//------------------------------------------------------------------ Gallery Random Layout-----------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const galleryContainers = document.querySelectorAll('.gallery_container');
    let images = [];

    // Collect all image elements from all containers
    galleryContainers.forEach(container => {
        images = images.concat(Array.from(container.children));
    });

    // Fisher-Yates Shuffle Algorithm
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Shuffle the images array
    const shuffledImages = shuffle(images);

    // Remove all images from their current containers
    images.forEach(img => img.parentElement.removeChild(img));

    // Reassign shuffled images back to the containers
    let galleryIndex = 0;
    shuffledImages.forEach(img => {
        galleryContainers[galleryIndex].appendChild(img);
        galleryIndex = (galleryIndex + 1) % galleryContainers.length;
    });
});

//------------------------------------------------------------------ Gallery Slider -----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const galleryItems = document.querySelectorAll('.gallery_img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox_img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    
    console.log('Gallery Items:', galleryItems);
    console.log('Lightbox:', lightbox);
    console.log('Lightbox Image:', lightboxImg);
    console.log('Close Button:', closeBtn);
    console.log('Previous Button:', prevBtn);
    console.log('Next Button:', nextBtn);

    let currentIndex = 0;

    const openLightbox = (index) => {
        lightbox.style.display = 'grid';
        lightboxImg.src = galleryItems[index].src;
        currentIndex = index;
    };

    const closeLightbox = () => {
        lightbox.style.display = 'none';
    };

    const showPrev = () => {
        currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
        lightboxImg.src = galleryItems[currentIndex].src;
    };

    const showNext = () => {
        currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
        lightboxImg.src = galleryItems[currentIndex].src;
    };

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    } else {
        console.error('Close button not found');
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', showPrev);
    } else {
        console.error('Previous button not found');
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', showNext);
    } else {
        console.error('Next button not found');
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    } else {
        console.error('Lightbox not found');
    }
});

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