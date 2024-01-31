AFRAME.registerComponent('thumb-up-color-changer', {
    init: function () {
      this.thumbUp = false;
      this.el.addEventListener('thumbupstarted', this.onThumbUpStarted.bind(this));
      this.el.addEventListener('thumbupended', this.onThumbUpEnded.bind(this));
    },
  
    onThumbUpStarted: function () {
      this.thumbUp = true;
      this.changeColor();
    },
  
    onThumbUpEnded: function () {
      this.thumbUp = false;
    },
  
    changeColor: function () {
      if (this.thumbUp) {
        var geometries = document.querySelectorAll('.change-colorable');
        geometries.forEach(function (geometry) {
          geometry.setAttribute('material', 'color', '#ff0000'); // Cambiar a color rojo
        });
      }
    }
  });
  