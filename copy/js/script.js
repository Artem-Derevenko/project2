$(document).ready(function() {

function setHeiHeight() {
    $('#header').css('height', $(window).height());
    $('.menu').css('height', $(window).height());

    var navHeight = $(window).height() - $('.logo').height() -35;
    $('.nav-left-block').css('height', navHeight);

} 
setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна





// добавляем активный класс для выбраного подпункта в меню
$('.nav-menu-subcategory > li').on('click',function() {
  $('.nav-menu-subcategory > li').removeClass('active');
  $(this).addClass('active');
});

// добавляем активный класс для пункта меню
$('.nav-menu > li').on('click',function() {
  $('.nav-menu > li').removeClass('active');
  $(this).addClass('active');
});





//плавный скрол по странице до якоря

var menu_selector = ".nav-menu-anchor"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
 
$(document).ready(function () {
 
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 1000, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
});



// движение слоев в шапке
var x;
var y;
var x2;
var y2;
var l = -parseInt($('#header').width()-$('.main-cont').width())/2;
var t = -parseInt($('#header').height()-$('.main-cont').height())/2;
$('body').mouseenter(function(e){
	var x = e.pageX;
	var y = e.pageY;

	$('body').mousemove(function(b,d){
		var x2 = b.pageX;
		var y2 = b.pageY;
		var p = (x2-x)/60;
		var d = (y2-y)/60;
		$('.img-cont2 img').css('left', -(l-p)*0.2).css('top', -(t-d)*0.2);
		$('.img-cont2-2 img').css('left', -(l-p)*0.54).css('top', -(t-d)*0.42);
		$('.img-cont3 img').css('left', -(l-p)*0.3).css('top', (t-d)*0.45);
		$('.img-cont4 img').css('left', (l-p)*0.4).css('top', -(t-d)*0.52);
		$('.img-cont5 img').css('left', -(l-p)*0.5).css('top', (t-d)*0.4);
		$('.img-cont6 img').css('left', (l-p)*0.25).css('top', -(t-d)*0.35);
		$('.img-cont7 img').css('left', -(l-p)*0.54).css('top', (t-d)*0.42);
		$('.img-cont8 img').css('left', (l-p)*0.6).css('top', -(t-d)*0.4);

	});
});


// движение слоев в архитектурном решении
var x_2;
var y_2;
var x2_2;
var y2_2;
$('body').mouseenter(function(e){
	var x_2 = e.pageX;
	var y_2= e.pageY;

	$('#architectural-design').mousemove(function(b,d){
		var x2_2 = b.pageX;
		var y2_2 = b.pageY;
		var p2 = (x2_2-x_2)/80;
		var d2 = (y2_2-y_2)/80;
		$('#architectural-design div#architectural-slide1').css('left', -(p2)*0.2).css('top', (d2-p2)*0.3);
		$('#architectural-design div#architectural-slide2').css('left', (p2)*0.3).css('top', -(d2-p2)*0.2);
		
	});
});


// переключение языка
$('.language > a').on('click',function() {
  $('.language > a').removeClass('active');
  $(this).addClass('active');
});


// показ меню
$('.toggle').on('click',function() {
  $('.menu').css('left', '0px');
  $(this).hide();
  $('.toggle-active').show();

});

// скрыть меню
$('.toggle-active').on('click',function() {
  $('.menu').css('left', '-260px');
  $(this).hide();
  $('.toggle').show();
});

// показ меню в мобильных устройствах
$('.toggle-mobile').on('click',function() {
  $('.menu').css('left', '0px');
  $(this).hide();
  $('.toggle-active-mobile').show();

});

// скрыть меню в мобильных устройствах
$('.toggle-active-mobile').on('click',function() {
  $('.menu').css('left', '-100%');
  $(this).hide();
  $('.toggle-mobile').show();
});

//смена фона при наведении в блоке архитектурном решении
$('#architectural-design-1 > a').hover(
	function(){
	  $('#architectural-design-1-active').css('opacity', '1');
	},
	function(){
	 $('#architectural-design-1-active').css('opacity', '0');
});

$('#architectural-design-2 > a').hover(
	function(){
	  $('#architectural-design-2-active').css('opacity', '1');
	},
	function(){
	 $('#architectural-design-2-active').css('opacity', '0');
});

$('#architectural-design-3 > a').hover(
	function(){
	  $('#architectural-design-3-active').css('opacity', '1');
	},
	function(){
	 $('#architectural-design-3-active').css('opacity', '0');
});

$('#architectural-design-4 > a').hover(
	function(){
	  $('#architectural-design-4-active').css('opacity', '1');
	},
	function(){
	 $('#architectural-design-4-active').css('opacity', '0');
});

//каресель с клиентами
$("#owl-clients").owlCarousel({
      autoPlay: 6000, //Set AutoPlay to 3 seconds
      items : 7,
      itemsDesktop : [1199,7],
      itemsDesktopSmall : [980,7],
      itemsTablet: [767,5],
      itemsTabletSmall: false,
      itemsMobile : [479,5],
      navigationText: false,
      pagination: false,
      navigation: true 
  });


// скроллбар с наградами
$('#scrollbarX').tinyscrollbar({ axis: 'x'}); 

// подключение модальных окон с изображениями
$(".fancybox").fancybox({
	'transitionIn'	:	'fade',
	'transitionOut'	:	'fade',
	'speedIn'		:	600, 
	'speedOut'		:	200, 
	'overlayShow'	:	false
});


//изменение цвета границ инпутов при фокусе в форме обратной связи
$( "#name" ).focus(function() {
	$( '.wrapper-input' ).css('border-color', '#363c40');
	$( '.wrapper-message#form-feedback-message' ).css('border-color', '#363c40');
    $( '.wrapper-input#wrapper-name' ).css('border-color', '#dadbdc');
});

$( "#email" ).focus(function() {
	$( '.wrapper-input' ).css('border-color', '#363c40');
	$( '.wrapper-message#form-feedback-message' ).css('border-color', '#363c40');
 	$( '.wrapper-input#wrapper-email' ).css('border-color', '#dadbdc');
});

$( "#text-message" ).focus(function() {
	$( '.wrapper-input' ).css('border-color', '#363c40');
	$( '.wrapper-message#form-feedback-message' ).css('border-color', '#363c40');
 	$( '.wrapper-message#form-feedback-message' ).css('border-color', '#dadbdc');
});

//делаем не активными все инпуты в форме при клике за пределами формы обратной связи
$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $("#form-feedback"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$( '.wrapper-input' ).css('border-color', '#363c40');
			$( '.wrapper-message#form-feedback-message' ).css('border-color', '#363c40');
	}
});


//скрываем плейсхолдер при фокусе
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });









});

