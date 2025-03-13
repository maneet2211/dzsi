

$(document).ready(function () {
  $(".banner-hero .card-wrap").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    appendArrows: $(this).find(".slider-controls"),
    prevArrow: '<span class="arrow-prev"></span>',
    nextArrow: '<span class="arrow-next"></span>',
      responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
          ]
  });


$(function () {
const counters = document.querySelectorAll('.counter');
const speed = 50;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('data-target');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 100);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});
  }); 
  
  $(".logo-grid-slider .logo-wrap").slick({
   infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
          ]
    });
  
  
    $(".accordion-header:first").addClass("active");
  $(".accordion-body:first").css("display", "block");
  
  $(".accordion .accordion-header ").click(function() { 
         if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parent().find(".accordion-body").slideUp("slow");
         } else {
   
      $(".accordion .accordion-header").removeClass("active");
    $(".accordion .accordion-body").slideUp("slow");
      
      $(this).addClass("active");
       $(this).parent().find(".accordion-body").slideDown("slow");
    }
    });

    $(".tab-content").hide();
    $(".tab-content:first-child").show();
    $(".tab:first").addClass("active");
    $(".tab").click(function () {
      var tabId = $(this).data("tab-id");
      $(".tab-content").hide();
      $('.tab-content[data-tab="' + tabId + '"]').show();
      $(".tab").removeClass("active");
      $(this).addClass("active");
    });
  });
