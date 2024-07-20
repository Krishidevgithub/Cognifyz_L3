let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].style.display = "block";  
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }

        // Image Gallery
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const src = thumbnail.src.replace('thumb', 'large');
                const lightbox = document.createElement('div');
                lightbox.id = 'lightbox';
                document.body.appendChild(lightbox);
                const img = document.createElement('img');
                img.src = src;
                lightbox.appendChild(img);
                lightbox.addEventListener('click', () => {
                    lightbox.remove();
                });
            });
        });