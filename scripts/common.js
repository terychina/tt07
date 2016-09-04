/**
 * Created by Administrator on 2016/9/4.
 */
$(document).ready(function () {
    //Nav style
    $('.nav-site li a').each(function(){
        if($($(this))[0].href==String(window.location))
            $(this).parent().addClass('cur');

    });
    $('.subnav a').each(function(){
        if($($(this))[0].href==String(window.location))
            $(this).addClass('cur');

    });
    $('.wrapper-nav li a').each(function(){
        if($($(this))[0].href==String(window.location))
            $(this).parent().addClass('cur');

    });
    //Nav style End
    });