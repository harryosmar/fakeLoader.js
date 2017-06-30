/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT 
 -----------------------------------------------------------------------*/
(function ($) {

    $.fn.fakeLoader = function(options) {
        //Defaults
        var settings = $.extend({
            timeToHide:0, // Default Time to hide fakeLoader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex
            bgColor: '#2ecc71', // Default background color
            spinner:'spinner7', // Default Spinner
            imagePath:'', // Default Path custom image,
            message:'',
            action:'start',
        }, options);

        //The target
        var el = $(this);

        /**
         * options value `stop` must be checked first before altering any elm attributes
         */
        if(options === 'stop') {
            if (settings.timeToHide === 0) {
                $(el).fadeOut();
            } else {
                setTimeout(function(){
                    $(el).fadeOut();
                }, settings.timeToHide);
            }

            /**
             * force stop, return elm `fakeLoader`
             */
            return this;
        }

        var labelMessage = settings.message != '' ? '<span class="fakeloader-message-label">' + settings.message +'</span>' : '';

        //Customized Spinners
        var spinner01 = '<div class="fl spinner1">' + labelMessage + '<div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner02 = '<div class="fl spinner2">' + labelMessage + '<div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl spinner3">' + labelMessage + '<div class="dot1"></div><div class="dot2"></div></div>';
        var spinner04 = '<div class="fl spinner4">' + labelMessage + '</div>';
        var spinner05 = '<div class="fl spinner5">' + labelMessage + '<div class="cube1"></div><div class="cube2"></div></div>';
        var spinner06 = '<div class="fl spinner6">' + labelMessage + '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
        var spinner07 = '<div class="fl spinner7">' + labelMessage + '<div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>';


        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

        //Each
        el.each(function() {
            var a = settings.spinner;
            switch (a) {
                case 'spinner1':
                    el.html(spinner01);
                    break;
                case 'spinner2':
                    el.html(spinner02);
                    break;
                case 'spinner3':
                    el.html(spinner03);
                    break;
                case 'spinner4':
                    el.html(spinner04);
                    break;
                case 'spinner5':
                    el.html(spinner05);
                    break;
                case 'spinner6':
                    el.html(spinner06);
                    break;
                case 'spinner7':
                    el.html(spinner07);
                    break;
                default:
                    el.html(spinner01);
            }

            //Add customized loader image

            if (settings.imagePath !='') {
                el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
            }
            centerLoader();
        });

        //brute start fakeLoader
        $(el).show();

        //Return Styles
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });


    }; // End Fake Loader


    //Center Spinner
    function centerLoader() {

        var winW = $(window).width();
        var winH = $(window).height();

        var spinnerW = $('.fl').outerWidth();
        var spinnerH = $('.fl').outerHeight();

        $('.fl').css({
            'position':'absolute',
            'left':(winW/2)-(spinnerW/2),
            'top':(winH/2)-(spinnerH/2)
        });

    }

    $(window).on('load', function(){
        centerLoader();
        $(window).on('resize', function(){
            centerLoader();
        });
    });


}(jQuery));