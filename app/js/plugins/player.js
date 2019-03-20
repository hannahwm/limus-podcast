$(document).ready(function(){

  var currentlyPlaying;

  var featuredTitle = $(".litmus-featured__title").text();
  var featuredSrc = $(".litmus-player").data("src");

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

    // var totalItems = $(".jp-playlist li");
    //
    // if (currentlyPlaying === totalItems.length) {
    //   console.log("last");
    // }
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
