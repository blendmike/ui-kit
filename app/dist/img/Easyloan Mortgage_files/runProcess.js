function runProcess(){function e(){s.find("span").show(),s.addClass("show").next().addClass("active"),s.removeClass("active"),s.hasClass("yes")||runProcess()}$(".pricing-wrap").length&&$(".pricing-wrap").parent().find(".msg-loader").remove();var n={el:$(".slide-content.active").first(),delayTime:500,fadeOutTime:300,buttonClass:"button-content",keepRunning:!0},s=n.el;s.hasClass("yes")&&(n.keepRunning=!1),n.keepRunning&&(s.hasClass(n.buttonClass)?e():s.find("img").delay(n.delayTime).fadeOut(n.fadeOutTime,function(){e()})),$(".pricing-options").length&&$(".pricing-wrap").addClass("show")}