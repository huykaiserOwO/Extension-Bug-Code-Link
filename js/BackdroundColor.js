$(document).ready(function (){
    $('select').wrap('<div class="select_wrapper"></div>')
    $('select').parent().prepend('<span>'+ $(this).find(':selected').text() +'</span>');
    
    $('select').css('display', 'none');					
    $('select').parent().append('<ul class="select_inner"></ul>');
    $('select').children().each(function(){
      var opttext = $(this).text();
      var optval = $(this).val();
      $('select').parent().children('.select_inner').append('<li id="' + optval + '">' + opttext + '</li>');
    });
    $('select').parent().find('li').on('click', function (){
      var cur = $(this).attr('id');
      $('select').parent().children('span').text($(this).text());
      $('select').children().removeAttr('selected');
      $('select').children('[value="'+cur+'"]').attr('selected','selected');					
      //console.log($('select').children('[value="'+cur+'"]').text());
           $('select').parent().removeClass('openSelect');
       $('select').parent().find('ul').hide();
    });
    $('select').parent().find('span').on('click', function (){
       $('select').parent().find('ul').slideToggle(200);
         $('select').parent().toggleClass('openSelect');
    });
    });
 