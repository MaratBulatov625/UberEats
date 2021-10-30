'use strict'

//==========================jQuery==================================

function btnActive() {

  if ($(window).scrollTop() > $(window).outerHeight())
    $('.button-up').fadeIn(500);
  else
    $('.button-up').fadeOut(500);
};

function ibg() {

  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
};

$(document).ready(function () {
  //==========кнопка скролл вверх================
  btnActive();
  $(window).on('scroll', btnActive);

  $('.button-up').click(function () {
    $('html').animate({
      scrollTop: $('#h').offset().top
    }, 500);
  });
  //===============лист языков

  $('.language-list').mousedown(function () {  //отмена выделение текста
    return false;
  });

  $('html').click(function () {        //скрыть лист языков при клике на документ

    $('.ul').slideUp(100);
    if ($('.language-list__img-2').hasClass('rotate'))
      $('.language-list__img-2').removeClass('rotate');
  });

  $('.language-list').on('click', function () {

    $('.ul').slideToggle(100);
    $('.language-list__img-2').toggleClass('rotate');
    return false;
  });

  $('.ul').on('click', 'p', function () {

    //let $temp = $('.language-active p').text();
    //$('.language-active p').text($(this).text());
    //$(this).text($temp);

    $('.language-active p').insertBefore($(this));
    $(this).prependTo($('.language-active'));
  });

  ibg();

});

//=========JS========================================================
/*
function btnActive() {

    if (pageYOffset > document.documentElement.clientHeight)
       document.querySelector('.button-up').classList.add("button-up-active");
     else
       document.querySelector('.button-up').classList.remove("button-up-active");
};

btnActive();
window.addEventListener('scroll', btnActive);
*/

//=========================================================================================
/*
document.querySelector(".button-up").onclick = function () {

  document.querySelector("#h").scrollIntoView({ block: "start", behavior: "smooth" });
}

//=========================================================================================
document.querySelector('.language-list').onmousedown = function (event) {
  return false;
}

//===============================================================================

document.onclick = function (event) {

  if (event.target.closest(".language-list")) return;
  if (!document.querySelector('.ul.hidden')) {
    document.querySelector('.ul').classList.add("hidden");
    document.querySelector('.language-list__img-2.rotate').classList.remove("rotate");
  }
}

//====================================================================================
document.querySelector(".language-list").onclick = function (event) {

  document.querySelector('.ul').classList.toggle("hidden");
  document.querySelector('.language-list__img-2').classList.toggle("rotate");
};

$(document).ready(function() {
    $('.language-list').on('click', function() {

        $('.ul').toggleClass('hidden');
        $('.language-list__img-2').toggleClass('rotate');
        return false;
    });
});

document.querySelector(".ul").onclick = function (event) {

  let temp = document.querySelector(".language-active").innerHTML;
  document.querySelector(".language-active").innerHTML = event.target.innerHTML;

  event.target.innerHTML = temp;

}
//===================================================================================

function ibg() {
  for(let i of document.querySelectorAll(".ibg img")) {

    let src = i.getAttribute('src');
    i.closest(".ibg").style.backgroundImage = `url( '${src}')`;
    i.src = " ";
  }
}

ibg();
*/


let placeholder = document.querySelector('.search__form>input').getAttribute('placeholder');

document.querySelector('.search__form>input').addEventListener('focus', function(event) {


     event.target.setAttribute('placeholder', '');
});
document.querySelector('.search__form>input').addEventListener('blur', function(event) {

     event.target.setAttribute('placeholder', placeholder);
});