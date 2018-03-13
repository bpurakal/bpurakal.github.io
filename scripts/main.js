
$(document).ready(function(){

  var $header= $('header'); /*variable header holds the actual html header */
  var $sticky= $header.before($header.clone().addClass("sticky")); /*clones the header before or on top of our header */

  $(window).on("scroll", function(){ /*on available window size, whenever we scroll from top to bottom of site, execute this */
    var scrollFromTop = $(window).scrollTop(); /*sets an action when scrolling from top*/
    $("body").toggleClass("scroll", (scrollFromTop >350)); /*the body will have a class of scroll whenever we scroll from top by 350px*/
  })
});
