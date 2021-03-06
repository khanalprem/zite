(function ($) {
  'use strict';

  var $winHeight = $(window).innerHeight(),
    $ziteHeaderH = $('.zite-header').height(),
    $breadcrumbH = $('.breadcrumb').height(),
    $siteheaderH = $('.site-header').height(),
    $mapSidebarH = $winHeight - $ziteHeaderH + $breadcrumbH + $siteheaderH;
  $('.map-sidebar').css({
    'max-height': $mapSidebarH - 290,
    'min-height': $mapSidebarH - 290,
  });

  function preloader() {
    $('.preloader').delay(5000).fadeOut(5000);
  }
  preloader();

  function openModal() {
    $('.common-button').on('click', function (e) {
      e.preventDefault();
      var targetId = $(this).attr('popup-link');
      $('#' + targetId).addClass('open');
    });
  }
  openModal();

  function closeModal() {
    $('.popup-footer .common-button, .close-icon').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.popup').removeClass('open');
    });
  }
  closeModal();

  function selectToggle() {
    $('.custom-select .selected-item').on('click', function () {
      $(this).closest('.custom-select').toggleClass('show-dropdown');
    });
    $(document).on('click', function (event) {
      var $trigger = $('.custom-select');
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $('.custom-select').removeClass('show-dropdown');
      }
    });
  }
  selectToggle();

  // var t = $(".select-list");
  // if (
  //   ($('.custom-select .selected-item').on('click', function () {
  //     t.slideToggle();
  //   }),
  //   0 !== $(".select-list").length)
  // ){
  //   t.slideToggle();
  // }

  function customDropdown() {
    $('.custom-dropdown').on('click', function (e) {
      e.preventDefault();
      $(this).children('ul.custom-dropdown-menu').slideToggle(300);
    });

    $(document).mouseup(function (e) {
      var container = $('.custom-dropdown-menu');
      // If the target of the click isn't the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide(300);
      }
    });
  }
  customDropdown();

  $('.selectdrop .dropdown-menu li a').on('click', function () {
    var selText = $(this).html();
    $(this)
      .parents('.selectdrop')
      .find('.selection')
      .html(
        selText + '<span class="arrow"><i class="fa fa-angle-down"></i></span>'
      );
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

  function tableSort() {
    $('table .table-sort ').on('click', function (e) {
      e.preventDefault();
      console.log('click');
      $(this).toggleClass('is-active');
    });
  }
  tableSort();

  var pageSection = $('.bg-image');
  pageSection.each(function () {
    if ($(this).attr('data-background')) {
      $(this).css(
        'background-image',
        'url(' + $(this).data('background') + ')'
      );
    }
  });

  function customTab() {
    $('.custom-tab ul.tab-list a').click(function (e) {
      e.preventDefault();
      var tab_id = $(this).attr('data-tab');

      $('.custom-tab ul.tab-list li a').removeClass('current');
      $('.custom-tab .custom-tab-content .tab-item').removeClass('current');

      $(this).addClass('current');
      $('#' + tab_id).addClass('current');
    });
  }
  customTab();
  $('.toaster .close').click(function (e) {
    e.preventDefault();
    var parent = $(this).parent('.toast');
    parent.fadeOut('slow', function () {
      $(this).remove();
    });
  });
})(window.jQuery);
