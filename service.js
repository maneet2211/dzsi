$(document).ready(function () {
    let hamburgerIcon = document.querySelector(".hamburger-menu");
let navMenu = document.querySelector("nav");
let dropdownToggle = document.querySelector("ul.nav-menus li");
hamburgerIcon.addEventListener("click", function () {
  this.classList.toggle("active"); // Toggle the 'active' class
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});

// Close the hamburger menu when the window is resized to more than 1024 pixels
window.addEventListener("resize", function () {
  if (window.innerWidth > 1024) {
  // navMenu.style.display = "none";// Hide the nav menu
    hamburgerIcon.classList.remove("active");// Remove the 'active' class from the hamburger icon
  }
});
  
(function ($) {
   
    $(document).ready(function () {
      var winWidth = $(window).width();
      $(".icon").click(function () {
        if (winWidth > 1024){
           $(".items").hide();
        }
         $(".search-box").addClass("active");
      });

  $(".search-box-reset").click(function () {
    if (winWidth > 1024){
      setTimeout(function () {
      $(".items").fadeIn(2300, 1);
    $(".search-box").removeClass("active");
    }, 300);
    }
  });

      window.addEventListener("resize", function () {
        if (window.innerWidth > 1024) {
          var element = document.querySelector(".main-nav nav");
          element.style.display = "";
        }
      });
      // less than 767px
    $(".inner-text-menu .inner-item").click(function (e) {
      e.stopPropagation();
      var winWidth = $(window).width();
      if (winWidth < 768) {
        if (!$(this).hasClass("mobile-active")) {
          $(this).siblings().removeClass("mobile-active");
          $(this).addClass("mobile-active");
        } else {
          $(this).removeClass("mobile-active");
        }
      }
    });
      // less than to 1025px
      $("ul.nav-menus > li").click(function (e) {
      e.stopPropagation();
      var winWidth = $(window).width();
      if (winWidth < 1024) {
        if (!$(this).hasClass("active-nav")) {
          // Remove 'active-nav' class from all siblings and slide up their dropdowns
          $(this).siblings().removeClass("active-nav");
          $(this).siblings().find(".dropdown-menu").slideUp();

          // Add 'active-nav' class to this item and slide down its dropdown
          $(this).addClass("active-nav");
          $(this).find(".dropdown-menu").slideDown();
        } else {
          // If this item is already active, just slide it up and remove the class
          $(this).removeClass("active-nav");
          $(this).find(".dropdown-menu").slideUp();
        }
      }
    });
      
    $(".tabs-nav .inner-item").click(function () {
      var winWidth = $(window).width();
      if (winWidth < 1024) {
        $(this).parents(".sub-menu").find(".inner-item").removeClass("active");
        $(this).addClass("active");

        var activeTab = $(this).find("a").attr("href");
        $(this).parents(".sub-menu").find(".tab-content").hide();
        $(activeTab).show();
        return false;
      }
    });
      
      // greater than or equal to 1024px
         $(".tabs-nav .inner-item").mouseenter(function () {
      var winWidth = $(window).width();
      if (winWidth >= 1024) {
        $(this).parents(".sub-menu").find(".inner-item").removeClass("active");
        $(this).addClass("active");

        var activeTab = $(this).find("a").attr("href");
        $(this).parents(".sub-menu").find(".tab-content").hide();
        $(activeTab).show();
        return false;
      }
    });
      
    $(".menu-right .tab-content").each(function (index) {
      var content_inner = $(this).html();
      $(".inner-text-menu .inner-item")
        .eq(index)
        .find(".mobile-inner")
        .append(content_inner);
    });
     
      $(".tabs-nav .inner-item").click(function () {
      var winWidth = $(window).width();
      var $submenu = $(this).find(".mobile-inner"); // Get the corresponding submenu
      if (winWidth < 767) {
        // Slide up all submenus first
        $(".mobile-inner").slideUp(400); // Hide all submenus
        $(this).removeClass("active");

        // Then slide down the targeted submenu if it's not already visible
        if ($submenu.is(":visible")) {
          $submenu.slideUp(400);
          $(this).removeClass("active");
        } else {
          $submenu.slideDown(400); // Show the targeted submenu
          $(this).addClass("active");
        }
      } else {
        // If the window width is 767 or more, hide all submenus
        $(".mobile-inner").slideUp(400);
        $(this).removeClass("active");
      }
    });
    $(window).on("resize", function () {
      var win = $(this); //this = window
      if (win.width() >= 1025) {
        $(".search-box").removeClass("active");
        $(".mobile-inner").removeAttr("style");
      } else {
        $(".dropdown-menu").removeAttr("style");
        $(".items").removeClass("active-nav");
        $("ul.nav-menus > li").removeAttr("style");
      }
      
      if (win.width() >= 768) {
        $(".inner-item").removeClass("mobile-active");
        $(".mobile-inner").removeAttr("style");
      }
    });
      
  });
})(jQuery);


});