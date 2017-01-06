/*----------------------------slider auto-----------------------------------*/
 
var interval =  setInterval(function()
    {
        
        $("#slider ul").animate({marginLeft:-430},function()
           {
              $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
            })
  
    }, 2000);


 
/*--------------------------------------------------------------------------*/


/*------------------------------------button Next-----------------------------------*/

$(".next").click(function () 
{
    clearInterval(interval);
    $("#slider ul").animate({marginLeft:-430},function()
           {
              $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
            })

});

/*--------------------------------------------------------------------------*/


/*------------------------------------button Back-----------------------------------*/

$(".back").click(function () 
{
    clearInterval(interval);
    $("#slider ul").animate({marginRight:-430},function()
           {
              $(this).css({marginRight:0}).find("li:last").after($(this).find("li:first"));
            })

});

/*--------------------------------------------------------------------------*/