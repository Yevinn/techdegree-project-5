$('#search').on('keyup', function(){
  // Get input value and store it in a variable and make it lower case
  const $input = $('#search').val().toLowerCase();
  $('a').each(function(index, element){
    //get captions and store them in variable captions
    const captions = $(element).attr('data-caption');
    //test to see if captions contains searched term if it does show image
    if(captions.indexOf($input) > -1 ){
      $(element).removeClass('hidden');
    }else{ //if it doesn't hide image
      $(element).addClass('hidden');
    }
  });
});
// Showing and hidding the default form value
$('#search').focus(function(){
  $(this).attr('value', ' ');
});
$('#search').blur(function(){
  $(this).attr('value', 'Search Images')
});