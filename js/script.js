$(document).ready(function() {

function setHeiHeight() {
    $('#header, .form-feedback-wrap').css('height', $(window).height());
    $('.menu').css('height', $(window).height());

    var navHeight = $(window).height() - $('.logo').height() -35;
    $('.nav-left-block').css('height', navHeight);

} 
setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна

// показ формы обратной связи по нажатию на кнопку
$('.application').on('click',function() {
  $('.form-feedback-wrap').css("left", "0%");
});

// скрытие формы обратной связи по нажатию на кнопку
$('.form-close').on('click',function() {
  $('.form-feedback-wrap').css("left", "-150%");
});



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
var lastId,
    topMenu = $(".nav-menu-anchor"),
    topMenuHeight = topMenu.outerHeight()+15,
    // Все элементы списка
    menuItems = topMenu.find("a"),
    // Якоря, соответствующие пункты меню
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// обработчик щелчка по пунктам меню
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 400);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
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


$(".carusel-projects").owlCarousel({
      autoPlay: false, //Set AutoPlay to 3 seconds
      items : 3,
      itemsDesktop : [1299,2],
      itemsDesktopSmall : [980,2],
      itemsTablet: [767,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
      rewindNav : false,
      paginationNumbers : true,
      navigation : false,
      slideSpeed : 0,
      paginationSpeed : 0,
      rewindSpeed : 0,
      addClassActive : true
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
	$( '#form-feedback .wrapper-input' ).css('border-color', '#363c40');
	$( '#form-feedback .wrapper-message#form-feedback-message' ).css('border-color', '#363c40');
    $( '#form-feedback .wrapper-input#wrapper-name' ).css('border-color', '#dadbdc');
});

$( "#email" ).focus(function() {
	$( '#form-feedback .wrapper-input' ).css('border-color', '#363c40');
	$( '#form-feedback .wrapper-message#form-feedback-message' ).css('border-color', '#363c40');
 	$( '#form-feedback .wrapper-input#wrapper-email' ).css('border-color', '#dadbdc');
});

$( "#text-message" ).focus(function() {
	$( '#form-feedback .wrapper-input' ).css('border-color', '#363c40');
	$( '#form-feedback .wrapper-message#form-feedback-message' ).css('border-color', '#363c40');
 	$( '#form-feedback .wrapper-message#form-feedback-message' ).css('border-color', '#dadbdc');
});

//делаем не активными все инпуты в форме при клике за пределами формы обратной связи
$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $("#form-feedback"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$( '#form-feedback .wrapper-input' ).css('border-color', '#363c40');
			$( '#form-feedback .wrapper-message#form-feedback-message' ).css('border-color', '#363c40');
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


//активация табов с процессами на странице КОМПАНИЯ
// подключение табов 
$("ul.tabs-process").jTabs({content: ".tabs-process-content", animate: true, effect:"fade"});






});

