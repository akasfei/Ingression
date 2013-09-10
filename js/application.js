!function ($) {

  $(function(){

    $('.i-activemsg').click(function (e){
      $('.i-background').toggleClass('active');
      $('body').ingression();
    });
})

}(window.jQuery)
