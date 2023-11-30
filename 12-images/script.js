$(document).ready(function(){

    $(".greenleaf, .pinkleaf, .yellowleaf").click(function(){
        $(this).hide();
    });

    //This function resets the previous function (does not refresh the page)//
    $(".reset").click(function(){
        $(".greenleaf, .pinkleaf, .yellowleaf").show();
        $(".purpleleaf2").hide();
    });

    //purpleleaf and purpleleaf2 function// // "()"" are paramiters – time is all in miliseconds – time/seconds do not go in quotes//
    $(".purpleleaf").click(function(){
        $(".purpleleaf2").fadeIn('slow');
    });

    //the hover thing//
    $(".purpleleaf").mouseenter(function(){
        $(".yellowleaf, .pinkleaf, .greenleaf").fadeOut('slow');
    })
    .mouseleave(function(){
        $(".yellowleaf, .pinkleaf, .greenleaf").fadeIn('fast');
    });

//Flowers section//
    $(".div1").click(function(){
        $(".div2, .div3, .div4").toggle();
        $(".div1text").toggle();
        $(this).toggleClass("front");
    });

    $(".div2").click(function(){
        $(".div1, .div3, .div4").fadeToggle('slow');
        $(".div2text").fadeToggle('slow');
        $(this).toggleClass("front", 'slow');
    });

    $(".div3").click(function(){
        $(".div1, .div2, .div4").toggle();
        $(".div3text").toggle();
        $(this).toggleClass("front");
    });

    $(".div4").click(function(){
        $(".div1, .div2, .div3").toggle();
        $(".div4text").toggle();
        $(this).toggleClass("front");
    });


//TREES INTERACTIVE STUFF//
    $("h4").click(function(){
        $(this).next(".treetext").slideToggle();

    });


//NAVIGATION STUFF HERE//
    $(".link").click(function(){
        //toggles the link rectangle//
        $(this).addClass("highlight");
        $(this).siblings().removeClass("highlight");

        //toggles the section area//
        $($(this).attr("href")).addClass("active").siblings().removeClass("active");

    });

});

