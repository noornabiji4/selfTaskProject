$(document).ready(function() {
    $(".login").hide();
        $(".signup").hide();
    
        $(".tab").on('click', function(){
            $('.login').hide();
            $('.signup').show();
        });
    
        $(".tab2").on('click' ,function(){
            
            $(".signup").hide();
            $('.login').show(".tab2")
        });
    
        $('#x').on('click' ,function(){
            $('.tab').hide();
            });
    
        $('#x2').on('click' ,function(){
            $('.tab2').hide();
            });
    });
    