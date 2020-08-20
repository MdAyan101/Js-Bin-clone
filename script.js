 
        function outputupdate(){
            
             $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#csspanel").val() + "</style></head><body>" + $("#htmlpanel").val() + "</body></html>");
            
            document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
        }
        
        $(".togglebutton").hover(function(){
            
            $(this).addClass("highlighted-button");
        }, function(){
            
            $(this).removeClass("highlighted-button");
        });    
      
        
        $(".togglebutton").click(function(){
            
            $(this).toggleClass("active");
            
            $(this).removeClass("highlighted-button");
            
            var panelid = $(this).attr("id")+"panel";
            
            $("#" + panelid).toggleClass("hidden");
            
            var numberofactivepanels= 4- $('.hidden').length;
            
            $(".panel").width(($(window).width()/numberofactivepanels)-10);
            
            
        });
       
       
        $(".panel").height($(window).height()-$("#topbar").height()-17);
        
        $(".panel").width(($(window).width()/2)-10);
      
        outputupdate();
        
        $("textarea").on(" change keyup paste", function(){
            
           outputupdate();
        })
        