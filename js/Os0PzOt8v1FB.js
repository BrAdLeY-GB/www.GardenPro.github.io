!function(a){function e(e){e.each((function(){var e=a(this),n=e.data("animation");e.addClass(n).one("webkitAnimationEnd animationend",(function(){e.removeClass(n)}))}))}var n=a("#carousel-example-generic"),i=n.find(".item:first").find("[data-animation ^= 'animated']");n.carousel(),e(i),n.carousel("pause"),n.on("slide.bs.carousel",(function(n){e(a(n.relatedTarget).find("[data-animation ^= 'animated']"))})),a("#carousel-example-generic").carousel({interval:3e3,pause:"false"})}(jQuery);