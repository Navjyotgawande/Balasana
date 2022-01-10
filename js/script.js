
//toggle navigation
// $(document).ready(function(){
//     $("#icon").click(function(){
//     $("ul").toggleClass("show");
    
    
    
//     });
    
//     });

var a=1;
$(document).ready(function(){
$("#abt").click(function(){
$("#linkss").css("right", "-100%");
a=1;
});
$("#hom").click(function(){
    $("#linkss").css("right", "-100%");
    a=1;
    });
    $("#class").click(function(){
        $("#linkss").css("right", "-100%");
        a=1;
        });
        $("#teach").click(function(){
            $("#linkss").css("right", "-100%");
            a=1;
            });   
           
        
                $("#icon").click(function(){
                    $("#links").css("display", "block");
        if (a==1){
                 $("#linkss").animate({"right":"0"});
                 a=2;
        }
        else{
                 $("#linkss").animate({"right":"-100%"});
        } 
        });
        });
// toggle navigation end

//aos start
AOS.init();
//aos end