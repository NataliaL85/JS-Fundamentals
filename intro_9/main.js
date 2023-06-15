
$(function(){

//1

$('h2.head').css('backgroundColor',  'green')
$('h2.head').find('.inner') .css('fontSize',  '35px')

//2

let $res = $('a').attr('href');

if (/^((?:https?):\/\/)/.test($res)) {
 $('a').attr('target', 'blank')
}

//3

let $res1 =  $('div').get(0);
$('div').remove()
$('h3').before($res1)

//4

$('input').on('change', function(){
   $(this).attr('checked', 'checked');

   if ($('input:checked').length === 3) {
    $('input').prop('disabled', true)
   }
})


});



