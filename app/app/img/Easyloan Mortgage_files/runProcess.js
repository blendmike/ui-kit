function runProcess() {
   //default data config
    if($('.pricing-wrap').length){
      $('.pricing-wrap').parent().find('.msg-loader').remove();
    }
    var ddc = {
      el: $('.slide-content.active').first(),
      delayTime: 500,
      fadeOutTime: 300,
      buttonClass: 'button-content',
      keepRunning: true
    }

    var el = ddc.el;
    if (el.hasClass('yes')) {
      ddc.keepRunning = false;
    }

    if (ddc.keepRunning) {

      if (el.hasClass(ddc.buttonClass)) {
        runProcessType();
      } else {

        el.find('img').delay(ddc.delayTime).fadeOut(ddc.fadeOutTime, function() {
          runProcessType();
        });        
      }

      function runProcessType() {

        el.find('span').show();
        el.addClass('show').next().addClass('active');
        el.removeClass('active');

        if (!el.hasClass('yes')) {
          runProcess();
        }
      }
    }
      
      //$( ".button-content" ).wrapAll( "<div class='buttons' />");  

    

    if($('.pricing-options').length){
      $(".pricing-wrap").addClass('show');
    }




  }
