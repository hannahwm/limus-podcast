var $ = jQuery;

( function( $ ) {
  var Neu = Neu || {};

  $.fn.matchHeight = function(options) {
      return this.each(function() {
          var matchHeight = Object.create(Neu.matchHeight);
          matchHeight.init(this, options);
      });
  };

  $.fn.matchHeight.options = {
      box: ".episode-info"
  };

  Neu.matchHeight = {
      init: function(elem, options) {
          var self = this;
          self.$container = $(elem);
          self.options = $.extend({}, $.fn.matchHeight.options, options);
          self.bindElements();
          self.calcHeights();

      },
      bindElements: function() {
        var self = this;

        self.$box = self.$container.find(self.options.box);
    },
		calcHeights: function() {
			var self = this;
      $(self.options.box).height("");

			$(self.options.box).each(function() {
				var divs = $(self.options.box);
			  var heights = divs.map(function() {
			    return $(this).height();
			  });

			   var maxHeight = Math.max.apply(this, heights);

			  $(self.options.box).height(maxHeight);
			});
		}
  };

}( $ ) );

(function init () {
  $(document).ready(function() {
    $(".litmus-archive").matchHeight();
  });

  $(window).resize(function() {
    $(".litmus-archive").matchHeight();
  });
})();
