(function($, undefined){
  
  $('.xcom.btn').on('click', function(e){
    e.preventDefault();
    if (!$(this).hasClass('disabled')) {
      if (!$(this).parents('.btn-group').size() && !$(this).hasClass('disabled')) {
        $(this).toggleClass('active');
        console.log('btn', !$(this).hasClass('disabled'));
      }
    } else {
      e.stopPropagation();
    }
  });

  $('.xcom.btn-group').on('click','.btn', function(e){
    var remove = ($(this).hasClass('active')) ? true : false;
    $('.xcom.btn-group').find('.active').removeClass('active');
    if (remove) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });

}(jQuery));