//Responsive Nav Plugin
var nav = responsiveNav(".nav-collapse");

//Return To Top & Contact Scrolls

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("a[href='#contact']").click(function() {
  $("html, body").animate({ scrollTop: 3500 }, "slow");
  return false;
});

// FitText
$("#responsive_headline").fitText(0.8, { minFontSize: '32px', maxFontSize: '126px' });

//Refills Tabs
$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});