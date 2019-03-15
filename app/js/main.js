$(".collapsible__input").on("click", function() {
	$(".collapsible").toggleClass("open");
});

function calcHeight() {
	// var padding;
	//
	// if ($(window).width() > 1450) {
	// 	padding = 100;
	// } else if ($(window).width() > 1200) {
	// 	padding = 150;
	// } else if ($(window).width() > 900) {
	// 	padding = 250;
	// } else if ($(window).width() > 599 && $(window).width() < 900) {
	// 	padding = 0;
	// } else {
	// 	padding = 0;
	// }


	$(".litmus-featured__image").each( function() {
		var featuredImg = $(this).find("img"),
		imgSrc = featuredImg.attr("src");
		// contentHeight = $(".litmus-featured").outerHeight(),
		// diagonalStart = $(".collapsible").offset(),
		// diagonalEnd = $(".litmus-archive").offset(),
		// diagonalYone = diagonalStart.top,
		// diagonalYtwo = diagonalEnd.top,
		// diagonalHeight = diagonalYtwo - diagonalYone,
		// calcHeight = contentHeight + diagonalHeight + padding;

		$( this ).css({
			"background-image": "url(" + imgSrc + ")",
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

$(document).ready(function(){

  var currentlyPlaying;

  var featuredTitle = $(".litmus-single__title").text();
  var featuredSrc = $(".litmus-player-single").data("src");


  $(".litmus-player-single").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        title: "Bridging music and neuroscience",
        mp3: "https://cdn.simplecast.com/audio/6447fb/6447fb3b-c5b4-48f6-aa0d-b105ce910c84/3e9f6aca-9723-4aef-82db-ace6e7e4cff1/Music_mixdown_128_tc.mp3"
      });
    },
    swfPath: "../js/library",
    supplied: "mp3",
    cssSelectorAncestor: "#litmus-player-single",
    wmode: "window",
    globalVolume: true,
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true
  });

  $(".litmus-single__title").remove();



  $("#litmus-player__single .jp-play").on("click touchend", function() {

    if ($(this).hasClass("playing")) {
      litmusPlayer.pause();
      $(this).removeClass("playing");
      $(this).addClass("paused");
    } else if ($(this).hasClass("paused")) {
      litmusPlayer.play();
      $(this).removeClass("paused");
      $(this).addClass("playing");
    } else {
      litmusPlayer.play();
      $(this).addClass("playing");
    }
  });

});


//Turn the player into a sticky player bar in the top
var target;
var player;
var helper;
var targetTop;

$("#litmus-player-single").each( function() {
  target = $(".bte");
  player = $("#litmus-player-single");
  helper = $(".litmus-player-single");
  targetTop = target.offset().top;

  $(window).on("scroll", function() {
    var docViewTop = $(window).scrollTop();

    if ( targetTop <= docViewTop) {
      player.removeClass("hidden");
      player.addClass("sticky");
    } else {
      if ( (targetTop - 150) <= docViewTop) {
        player.addClass("hidden");
        player.removeClass("sticky");
        helper.addClass("helper");
      } else {
        player.removeClass("sticky");
        player.removeClass("hidden");
        helper.removeClass("helper");
      }
    }

  });
});

$(document).ready(function(){

  var currentlyPlaying;

  var featuredTitle = $(".litmus-featured__title").text();
  var featuredSrc = $(".litmus-player").data("src");


  // var litmusPlayer = new jPlayerPlaylist(
  //   {
  //     jPlayer: ".litmus-player-bar",
  //     cssSelectorAncestor: "#litmus-player-bar"
  //   },
  //     [
  //       {
  //         title: featuredTitle,
  //         mp3: featuredSrc
  //       }
  //     ],
  //   {
  //     playlistOptions: {
  //       enableRemoveControls: false
  //     },
  //     play: function() { // To avoid multiple jPlayers playing together.
  //       $(this).jPlayer("pauseOthers", 0);
  //     },
  //     swfPath: "../js/library",
  //     supplied: "mp3",
  //     smoothPlayBar: true,
  //     keyEnabled: true
  //   });

    var litmusPlayer = new jPlayerPlaylist(
      {
        jPlayer: ".litmus-player",
        cssSelectorAncestor: "#litmus-player__featured"
      },
        [
          {
            title: featuredTitle,
            mp3: featuredSrc
          }
        ],
      {
        playlistOptions: {
          enableRemoveControls: false
        },
        swfPath: "../js/library",
        supplied: "mp3",
        smoothPlayBar: true,
        keyEnabled: true
      });

  $(".litmus-featured__title").remove();

  var episodes = $(".episode");

  for (var i = 0; i < episodes.length; i++) {
    var current = episodes[i];
    var podcastSrc = $(current).find("enclosure").attr('url');
    var playBtn = $(current).find(".episode__play");
    var podcastTitle = $(current).find(".episode-info__title").text();

    litmusPlayer.add({
      title: podcastTitle,
      mp3: podcastSrc
    });

    playBtn.attr("id", "podcast-" + (i + 1));
  }

  $("#litmus-player__featured .jp-play").on("click tap", function() {

    $(".episode__play").removeClass("playing").removeClass("paused");

    if ($(this).hasClass("playing")) {
      //if the targeted episode is already playing
      //pause
      litmusPlayer.pause();
      $(this).removeClass("playing");
      $(this).addClass("paused");
    } else if ($(this).hasClass("paused")) {
      litmusPlayer.play();
      $(this).removeClass("paused");
      $(this).addClass("playing");
    } else {
      litmusPlayer.play();
      $(this).addClass("playing");
    }
  });

  $("#litmus-player__featured .jp-previous, #litmus-player__featured .jp-next").on("click tap", function() {
    $("#litmus-player__featured .jp-play").addClass("playing").removeClass("paused");
  });

  var playlistItems = $(".jp-playlist li");

  $(".episode__play").each( function() {
    var podcastId = $(this).attr("id");
    var podcastIdSplit = podcastId.split("-");
    var podcastNum = podcastIdSplit[1];
    var parsedPodcastNum = parseInt(podcastNum);

    $(this).on("click tap", function() {
      litmusPlayer.play(parsedPodcastNum);
      currentlyPlaying = parsedPodcastNum;

      for (var i = 0; i < playlistItems.length; i++) {
        if ( i === currentlyPlaying ) {
          var episode = $(document).find(".jp-playlist li:nth-child(" + i + ")");
          episode.addClass("jp-playlist-current");
        }
      }

      if ($(this).hasClass("playing")) {
        //if the targeted episode is already playing
        //pause
        litmusPlayer.pause();
        $(this).removeClass("playing");
        $(this).addClass("paused");
        $("#llitmus-player__featured .jp-play").addClass("paused").removeClass("playing");
      } else if ($(this).hasClass("paused")) {
        litmusPlayer.play();
        $(this).removeClass("paused");
        $(this).addClass("playing");
        $("#litmus-player__featured .jp-play").addClass("playing").removeClass("paused");
      } else {
        $(".episode__play").removeClass("playing");
        $(".episode__play").removeClass("paused");
        $(this).addClass("playing");
        $("#litmus-player__featured .jp-play").addClass("playing");
      }

    });//click
  });//each


  // $(".litmus-player").jPlayer({
  //   ready: function () {
  //     $(this).jPlayer("setMedia", {
  //       title: "Bridging music and neuroscience",
  //       mp3: "https://cdn.simplecast.com/audio/6447fb/6447fb3b-c5b4-48f6-aa0d-b105ce910c84/3e9f6aca-9723-4aef-82db-ace6e7e4cff1/Music_mixdown_128_tc.mp3"
  //     });
  //   },
  //   play: function() { // To avoid multiple jPlayers playing together.
  //     $(this).jPlayer("pauseOthers", 0);
  //   },
  //   swfPath: "../js/library",
  //   supplied: "mp3",
  //   cssSelectorAncestor: "#litmus-player__featured",
  //   wmode: "window",
  //   globalVolume: true,
  //   useStateClassSkin: true,
  //   autoBlur: false,
  //   smoothPlayBar: true,
  //   keyEnabled: true
  // });

  //Turn the player into a sticky player bar in the top
  var target1;
  var target2;
  var player;
  var helper;
  var target1Top;
  var target2Top;

  $("#litmus-player__featured").each( function() {
    target1 = $(".collapsible");
    target2 = $(".litmus-archive h2.litmus-section-title");
    player = $("#litmus-player__featured");
    helper = $(".litmus-player");
    target1Top = target1.offset().top;
    target2Top = target2.offset().top;

    $(window).on("scroll", function() {
      var docViewTop = $(window).scrollTop();

      if ( target2Top <= docViewTop) {
        player.removeClass("hidden");
        player.addClass("sticky");
      } else {
        if ( target1Top <= docViewTop) {
          player.addClass("hidden");
          player.removeClass("sticky");
          helper.addClass("helper")
        } else {
          player.removeClass("sticky");
          player.removeClass("hidden");
          helper.removeClass("helper")
        }
      }

    });
  });


});
