class Carousel {
 constructor(element) {
     this.carousel = element;
     this.rightBtn = this.carousel.querySelector('.right-button');
     this.leftBtn = this.carousel.querySelector('.left-button');
     this.carouselItems = this.carousel.querySelectorAll('img');

     this.counter = 0;
     this.itemCount = Array.from(this.carouselItems).length;

     this.current = this.carouselItems[0];
     this.current.style.display = 'block';

     this.rightBtn.addEventListener('click', this.next.bind(this));
     this.leftBtn.addEventListener('click', this.prev.bind(this));
    }
     
    prev(){
        this.current.style.display = 'none';
        if (this.counter === 0) {
            this.counter = this.itemCount-1;
            this.current = this.carouselItems[this.counter];
            this.current.style.display = 'block';
        } else {
            this.counter -= 1;
            this.current = this.carouselItems[this.counter];
            this.current.style.display = 'block';
        }
    }

    next(){
        this.current.style.display = 'none';
        if (this.counter === this.itemCount-1) {
            this.counter = 0;
            this.current = this.carouselItems[this.counter];
            this.current.style.display = 'block';
        } else {
            this.counter += 1;
            this.current = this.carouselItems[this.counter];            this.current.style.display = 'block';
        }
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));
document.querySelector('.top-bar').style.zIndex = '1';

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/