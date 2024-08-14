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


/*----------------------------------------------------------sort order-------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const sortSelect = document.getElementById('sortSelect');
    const filmList = document.getElementById('filmlist');

    const originalOrder = Array.from(filmList.children);

    const sortMovies = (sortBy) => {
        const items = Array.from(filmList.children);
        const movieItems = items.filter(item => item.classList.contains('filmography_cell'));
        const gapItems = items.filter(item => item.classList.contains('filmography_cell_gap'));

        if(sortBy === 'default'){
            filmList.innerHTML = '';
            originalOrder.forEach(item => filmList.appendChild(item));
            return;
        }

        movieItems.sort((a, b) => {
            const titleA = a.querySelector('.film_title').textContent.trim().toLowerCase();
            const titleB = b.querySelector('.film_title').textContent.trim().toLowerCase();
            const yearA = parseInt(a.querySelector('.film_year').textContent.trim(), 10);
            const yearB = parseInt(b.querySelector('.film_year').textContent.trim(), 10);

            if (sortBy === 'alphabetical') {
                return titleA.localeCompare(titleB);
            } else if (sortBy === 'year') {
                return yearB - yearA; 
            } else {
                return 0; 
            }
        });

       
        filmList.innerHTML = '';

   
        movieItems.forEach((item, index) => {
            
            if (gapItems[index]) {
                filmList.appendChild(gapItems[index]);
            }
            filmList.appendChild(item);
        });
    };


    sortSelect.addEventListener('change', (event) => {
        const value = event.target.value;
        sortMovies(value);
    });
});


/*-----------------------------------------------------------Light Box---------------------------------------------------------------*/


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const filmographyPosters = document.querySelectorAll('.filmography_poster');
    const filmographyTexts = document.querySelectorAll('.filmography_text');
 
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox_img');

    const lightbox_filmTitle = document.getElementById('lightbox_film_title');
    const lightbox_filmYear = document.getElementById('lightbox_film_year');
    const lightbox_filmDescription = document.getElementById('lightbox_film_description');

    const closeBtn = document.querySelector('.close');


    let currentIndex = 0;

    const openLightbox = (index) => {
        lightbox.style.display = 'block';
        lightboxImg.src = filmographyPosters[index].querySelector('img').src;
        lightbox_filmTitle.textContent = filmographyTexts[index].querySelector('.film_title').textContent;
        lightbox_filmYear.textContent = filmographyTexts[index].querySelector('.film_year').textContent;
        lightbox_filmDescription.textContent = filmographyTexts[index].querySelector('.film_description').textContent;
        currentIndex = index;
    };

    const closeLightbox = () => {
        lightbox.style.display = 'none';
    };

    filmographyPosters.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    } else {
        console.error('Close button not found');
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


