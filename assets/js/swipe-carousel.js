class SwipeCarousel extends Carousel {
  _initListeners() {
    super._initListeners();
    this.container.addEventListener('touchstart', this._swipeStart.bind(this));
    this.container.addEventListener('touchend', this._swipeEnd.bind(this));
  };

  _swipeStart(e) {
    this.swipeStartX = e.changedTouches[0].pageX;
  };

  _swipeEnd(e) {
    this.swipeEndX = e.changedTouches[0].pageX;
    // if (this.swipeStartX - this.swipeEndX > 100) this.next();
    this.swipeStartX - this.swipeEndX > 100 && this.next();
    // if (this.swipeStartX - this.swipeEndX < -100) this.prev();
    this.swipeStartX - this.swipeEndX < -100 && this.prev();
  };
};