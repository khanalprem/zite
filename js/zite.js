
(function ($) {

  "use strict";
  function selectToggle() {
    $('.custom-select .selected-item').on('click', function () {
      $(this).closest('.custom-select').toggleClass('show-dropdown');
    });
    $(document).on("click", function (event) {
      var $trigger = $(".custom-select");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".custom-select").removeClass("show-dropdown");
      }
    });
  }
  selectToggle();

  function customDropdown() {
    $('.custom-dropdown').on('click', function (e) {
      e.preventDefault();
      $(this).children('ul.custom-dropdown-menu').slideToggle(300);
    });

    $(document).mouseup(function (e) {
      var container = $(".custom-dropdown-menu");
      // If the target of the click isn't the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide(300);
      }
    });

  }
  customDropdown();

  $(".selectdrop .dropdown-menu li a").on('click', function(){
    var selText = $(this).html();
    $(this).parents('.selectdrop').find('.selection').html(selText + '<span class="arrow"><i class="fa fa-angle-down"></i></span>');
  });

  function filterToggle() {
    $('.filter .circle-icon').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('is-bg');
      $(this).closest('.filter').find('.filter-content').toggle(300);
    });

    // $(document).mouseup(function (e) {
    //   var container = $(".filter-content");
    //   if (!container.is(e.target) && container.has(e.target).length === 0) {
    //     container.hide(300);
    //   }
    // });

  }
  filterToggle();

var pageSection = $(".bg-image");
    pageSection.each(function () {
      if ($(this).attr("data-background")) {
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
  });

  function customTab(){
    $('.custom-tab ul.tab-list a').click(function(e){
      e.preventDefault();
      var tab_id = $(this).attr('data-tab');
  
      $('.custom-tab ul.tab-list li a').removeClass('current');
      $('.custom-tab .custom-tab-content .tab-item').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  }
  customTab();


$(".custom-progress").each(function() {

  var value = $(this).attr('data-value');
  var left = $(this).find('.progress-left .custom-progress-bar');
  var right = $(this).find('.progress-right .custom-progress-bar');

  if (value > 0) {
    if (value <= 50) {
      right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
    } else {
      right.css('transform', 'rotate(180deg)')
      left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
    }
  }

})

function percentageToDegrees(percentage) {

  return percentage / 100 * 360

}

})(window.jQuery);

