/*----------------------------slider auto-----------------------------------*/

$(function()
{
    setInterval(function()
    {
         $("#slider ul").animate({marginLeft:-430},function()
         {
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })

    }, 2000);

});

/*--------------------------------------------------------------------------*/

