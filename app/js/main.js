$(".collapsible__input").on("click", function() {
	$(".collapsible").toggleClass("open");
});

function calcHeight() {
	var padding;

	if ($(window).width() > 1450) {
		padding = 100;
	} else if ($(window).width() > 1200) {
		padding = 150;
	} else if ($(window).width() > 900) {
		padding = 250;
	} else if ($(window).width() > 599 && $(window).width() < 900) {
		padding = 0;
	} else if ($(window).width() < 400) {
		padding = 0;
	}


	$(".litmus-featured__image").each( function() {
		var featuredImg = $(this).find("img"),
		imgSrc = featuredImg.attr("src"),
		contentHeight = $(".litmus-featured").outerHeight(),
		diagonalStart = $(".collapsible").offset(),
		diagonalEnd = $(".litmus-archive").offset(),
		diagonalYone = diagonalStart.top,
		diagonalYtwo = diagonalEnd.top,
		diagonalHeight = diagonalYtwo - diagonalYone,
		calcHeight = contentHeight + diagonalHeight + padding;

		$( this ).css({
			"background-image": "url(" + imgSrc + ")",
			"height": calcHeight
		});

		featuredImg.hide();
	});
}

$(document).ready(function() {
	calcHeight();
});

$(window).resize( function() {
	calcHeight();
})

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

$.ajax({
  url: 'https://api.simplecast.com/v1/podcasts.json?api_key=eyJhcGlfa2V5IjoiNjQ1NThiYmE1ODZhY2RkNzY4ZjAxMjM5NjE5OTE4M2EifQ==',
  type: 'GET',
  data: '/podcasts.json',
  dataType: 'json',
  'success': function(data) {
    alert('Data:' + data);
  },
  'error': function(request, error) {
    console.log("error");
  },
  headers: {
    'X-API-KEY': 'eyJhcGlfa2V5IjoiNjQ1NThiYmE1ODZhY2RkNzY4ZjAxMjM5NjE5OTE4M2EifQ=='
  },
});
