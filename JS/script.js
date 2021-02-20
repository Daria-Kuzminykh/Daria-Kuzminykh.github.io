$( function() {
  $( "#accordion1" ).accordion({
    collapsible: true,
  });
  $( "#accordion2" ).accordion({
    collapsible: true,
  });
  $( "#accordion3" ).accordion({
    collapsible: true,
  });
  $( "#accordion4" ).accordion({
    collapsible: true,
  });
  $( "#accordion5" ).accordion({
    collapsible: true,
  });
} );

//scroll for menu links
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });
});

//scroll for artists
$(document).ready(function(){
  $("#art-1").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });
});
$(document).ready(function(){
  $("#art-2").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });
});
$(document).ready(function(){
  $("#art-3").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });
});
$(document).ready(function(){
  $("#art-4").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });
});
$(document).ready(function(){
  $("#art-5").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });
});
$(document).ready(function(){
  $("#art-6").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });
});
$(document).ready(function(){
  $("#art-7").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });
});

//scroll for button back-up
$(function() {  
  $('#up').click(function() {  
     $('body,html').animate({scrollTop:0},500);  
     return false;  
     })     
  }) 

//scroll for hero__btn  
  $(document).ready(function(){
    $("#hero-container").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

window.addEventListener('DOMContentLoaded', function() {

  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
  });

  // swiper
  var mySwiper = new Swiper('.swiper-container', {
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass, index, total) {
            return '<span class="' + currentClass + '"> '+ index +' </span>' +
                ' / ' +
                '<span class="' + totalClass + '"> '+ total +' </span>';
        },
    },                   
            
    slidesPerView: 1,
    autoHeight: false,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,

    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1460: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 34,
      },
      1700: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    }
  });  
  
  // swiper-2
  var mySwiper1 = new Swiper('.swiper-container-2', {            
            
    containerModifierClass: 'swiper-container-2',
    slideClass: 'swiper-slide-2',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    slidesPerView: 1,
    
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1460: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    }
  });

  // swiper-3
  var mySwiper = new Swiper('.swiper-container-3', {   
            
    containerModifierClass: 'swiper-container-3',
    slideClass: 'swiper-slide-3',
    wrapperClass: 'swiper-wrapper-3',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper__button--gray2',
      prevEl: '.swiper__button--gray1',
    },

    slidesPerView: 1,

    breakpoints: {
      570: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      710: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1460: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    }
  });

  // if (window.innerWidth <= 550) {
  //   document.querySelector('.slider-mobile').classList.add('swiper-container-4')
  //   document.querySelector('.events__list').classList.add('swiper-wrapper-4')
  // }

  // swiper-4
  // var mySwiper = new Swiper('.swiper-container-4', {
  //   containerModifierClass: 'swiper-container-4',
  //   slideClass: 'event-card',
  //   wrapperClass: 'swiper-wrapper-4',

  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: 'true'
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   spaceBetween: 30,
  // });

  var mySwiper = new Swiper('.swiper-container-5', {
    containerModifierClass: 'swiper-container-5',
    slideClass: 'swiper-slide-5',
    wrapperClass: 'swiper-wrapper-5',

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    autoplay: {
      delay: 3000,
    },
    disableOnInteraction: false,
    loop: true,
  });

  

  // swiper-mobile
  const slider = document.querySelector('.swiper-container-4')

  let swiperMobile
  console.log(swiperMobile)

  function mobileSlider() {
    
    if (window.innerWidth <= 550 && slider.dataset.mobile == 'false') {
      swiperMobile = new Swiper(slider, {
        containerModifierClass: 'swiper-container-4',
        slideClass: 'event-card',
        wrapperClass: 'swiper-wrapper-4',

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: 'true',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
        slidesPerView: 1,
      })
      console.log(swiperMobile)
      slider.dataset.mobile == 'true'
    }
    

    if (window.innerWidth > 550) {
      slider.dataset.mobile == 'false'
      swiperMobile = 2
      console.log(swiperMobile)

      if (slider.classList.contains('swiper-container-initialized')) {
        swiperMobile.destroy()
      }
    }
  }

  mobileSlider()
  
  window.addEventListener('resize', () => {
    mobileSlider()
  })

  document.querySelector('.events__btn').addEventListener('click', function() {
    document.querySelectorAll('.none').forEach(function(el) {
      el.classList.add('event-card-active')
      document.querySelector('.events__btn').classList.add('none')
    })
  })
  document.querySelector('.events__btn').addEventListener('click', function() {
    document.querySelectorAll('.none-768').forEach(function(el) {
      el.classList.remove('none-768')
      el.classList.add('event-card-active')
      document.querySelector('.events__btn').classList.add('none')
    })
  })

  document.querySelectorAll('.editions__label').forEach(function(el) {
    el.addEventListener('click', function(event) {
      event.target.classList.toggle('editions__label--active')
    })
  }) 
  
  document.querySelectorAll('.tab-button').forEach(function(tabButton) {
    tabButton.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

  document.querySelectorAll('.tab-button').forEach(function(tabButton) {
    tabButton.addEventListener('keydown', function(event) {
      if (event.keyCode === 13) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
          tabContent.classList.remove('tab-content-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      }
    })
  })

  document.querySelectorAll('.tab-button-big').forEach(function(tabButton) {
    tabButton.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content-big').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active-big')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active-big')
      
        $('#accordion1').accordion("refresh");  
        $('#accordion2').accordion("refresh"); 
        $('#accordion3').accordion("refresh"); 
        $('#accordion4').accordion("refresh"); 
        $('#accordion5').accordion("refresh");    
    })
  })

  document.querySelectorAll('.tab-button-big').forEach(function(tabButton) {
    tabButton.addEventListener('keydown', function(event) {
      if (event.keyCode === 13) { 
        
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.tab-content-big').forEach(function(tabContent) {
          tabContent.classList.remove('tab-content-active-big')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active-big')
        
          $('#accordion1').accordion("refresh");  
          $('#accordion2').accordion("refresh"); 
          $('#accordion3').accordion("refresh"); 
          $('#accordion4').accordion("refresh"); 
          $('#accordion5').accordion("refresh"); 
 
      } 
    })
  })

  document.querySelectorAll('.header-bottom__btn').forEach(function(openMenu) {
    openMenu.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      if (document.querySelector(`[data-target="${path}"]`).classList.contains('is-show')) {
        document.querySelector(`[data-target="${path}"]`).classList.toggle('is-show')
        event.currentTarget.classList.toggle('header-bottom__btn--clicked')
      }
      
      else {
        document.querySelectorAll('.is-show').forEach(function(remove) {
          remove.classList.remove('is-show')
        })
        
        document.querySelectorAll('.header-bottom__btn--clicked').forEach(function(remove) {
          remove.classList.remove('header-bottom__btn--clicked')
        })

        document.querySelector(`[data-target="${path}"]`).classList.add('is-show')
        event.currentTarget.classList.toggle('header-bottom__btn--clicked')
      }
    })
  })

  tippy('#tooltip1', {
    theme: 'blanchard',
    content: 'Пример современных тенденций - современная методология разработки',
    maxWidth: 264
  })
  tippy('#tooltip2', {
    theme: 'blanchard',
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    maxWidth: 264
  })
  tippy('#tooltip3', {
    theme: 'blanchard',
    content: 'В стремлении повысить качество'
  })

  var selector = document.querySelector("input[type='tel']");
    
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  new JustValidate('.form', {
    rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 10
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length ===10
          }
        },
    },
    messages: {
      name: {
        required: 'Это поле обязательно для заполнения',
        minLength: 'Имя должно иметь длину не меньше двух символов',
        maxLength: 'Имя должно иметь длину не более 10 символов'
      },
      tel: {
        required: 'Это поле обязательно для заполнения',
        function: 'Введите корректный номер телефона'
      },
    }
  });

  ymaps.ready(init);
  function init(){               
      var myMap = new ymaps.Map("map1", {
          center: [55.758463, 37.601079],
          zoom: 12
      });
      var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icon-marker.svg',
          iconImageSize: [28, 40],
          iconImageOffset: [-3, -42]
      });

      // Размещение геообъекта на карте.
      myMap.geoObjects.add(myPlacemark);
  }

  document.querySelector('.burger-btn').addEventListener('click', function() {
    document.querySelector('.burger').classList.toggle('burger-active')
    document.querySelector('.burger-btn').classList.toggle('burger-btn-close')
  })

  document.querySelector('.spoiler-title').addEventListener('click', function() {
    document.querySelector('.spoiler-title').classList.toggle('spoiler-active')
  })

  if (window.innerWidth < 768) {
    mySwiper1.destroy(false, true)
  }
})