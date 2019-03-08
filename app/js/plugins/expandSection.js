var $ = jQuery;

( function( $ ) {
  var Neu = Neu || {};

  $.fn.expandSection = function(options) {
      return this.each(function() {
          var expandSection = Object.create(Neu.expandSection);
          expandSection.init(this, options);
      });
  };

  $.fn.expandSection.options = {
      labels: ".collapsible__label"
  };

  Neu.expandSection = {
      init: function(elem, options) {
          var self = this;
          self.$container = $(elem);
          self.options = $.extend({}, $.fn.expandSection.options, options);
          self.bindElements();
          self.bindEvents();

      },
      bindElements: function() {
        var self = this;

        self.$labels = self.$container.find(self.options.labels);
    },
    bindEvents: function() {
      var self = this;

      self.$labels.each( function() {
        var label = $(this);

        label.bind('keydown', function(e) {
          // 32 === spacebar
          // 13 === enter
          if (e.which === 32 || e.which === 13) {
            e.preventDefault();
            label.click();
          };
        });
      });
    }
  };

}( $ ) );

(function init () {
  $(document).ready(function() {
    $(".litmus").expandSection();
  });
})();
