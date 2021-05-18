$(function (){
        $('.more').click(function(){
            var card = $(this).closest('.card');
            var times = $(card).find(".times");
            var more = $(card).find("a.more");
            times.toggleClass("times_full");
            more.css("display","none");
        });
    });