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
