AFRAME.registerComponent('color-changer', {
  schema: {
    color: { default: '#00ff00' }  // Puedes cambiar este valor al color que prefieras
  },

  init: function () {
    this.el.addEventListener('click', this.onClick.bind(this));
  },

  onClick: function () {
    var geometries = document.querySelectorAll('.change-colorable');
    geometries.forEach(function (geometry) {
      geometry.setAttribute('material', 'color', this.data.color);
    }, this);
  }
});
