/*
   var parent_width = $('#logoitem').width()
   var son_width = $('#logo').width()
   $('#logoitem').css('padding-left', parent_width / 2 - son_width / 2)

   function change_location(){
   if($('#logoitem').width() != parent_width){
   parent_width = $('#logoitem').width()
   $('#logoitem').css('padding-left', parent_width / 2 - son_width / 2)
   }
   }
   */

$(document).ready(function(){
  //  setInterval('change_location()', 100)
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var disqus_shortname = 'tdfj'; // required: replace example with your forum shortname

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();

  $('#home').popup({
    position:'bottom right',
    variation:'inverted',
    target:'#home',
    content:'首页'
  })

  $('#archives').popup({
    position:'bottom center',
    variation:'inverted',
    target:'#archives',
    content:'文章归档'
  })

  $('#projects').popup({
    position:'bottom center',
    variation:'inverted',
    target:'#projects',
    content:'我的项目'
  })
})


var count1 = 0
function show_pic(){
  if(count1 < a){
    $('.arc_link:eq(' + count1 + ')').animate({
      opacity:0.8,
      marginLeft:0,
    },400)
        count1 += 1
        }
        }

        $(document).ready(function(){
          hljs.initHighlightingOnLoad();

          a = $('div.arc_link').length
          $('.arc_year').fadeIn('slow');
        $('#pro_list').fadeIn();
        $('#aboutme_label').fadeIn('slow');
        $('#arc_content').hide().fadeIn('slow');
        $('#frame').fadeIn('slow')

          setInterval('show_pic()', 90)

          $('.arc_link').hover(function(){
            $(this).animate({
              marginLeft:20,
              opacity:1
            },100).animate({
              marginLeft:10,
            opacity:0.9
            },100).animate({
              marginLeft:20,
            opacity:1
            },100);
          }, function(){
            $(this).stop(true).animate({
              marginLeft:0,
              opacity:0.8
            },100)
          });
        });

//左右滑动式的图片轮播F
var turn2 = 1200;
function slidepic1(){
  var move_width = $('#frame').width()
    switch(turn2 % 3){
      case 0:{
        $('#pics').animate({left:(0 - move_width)},'slow');
        break;
      }case 1:{
        $('#pics').animate({left:(0 - move_width * 2)},'slow');
        break;
      }case 2:{
        $('#pics').animate({left:0},'slow');
        break;
      }default:
             break;
    }
  turn2 += 1
}

function slidepic2(){
  var move_width = $('#frame').width()
    switch(turn2 % 3){
      case 2:{
        $('#pics').animate({left:(0 - move_width)},'slow');
        break;
      }case 0:{
        $('#pics').animate({left:(0 - move_width * 2)},'slow');
        break;
      }case 1:{
        $('#pics').animate({left:0},'slow');
        break;
      }default:
             break;
    }
  turn2 -= 1
}

$(document).ready(function(){
  setInterval('slidepic1()',8000)
  $('#rightb').click(function(){
    slidepic1()
  })
$('#leftb').click(function(){
  slidepic2()
})
/*
   $('#btn2a').mouseover(function(){
   $(this).animate({backgroundColor:'yellow'})
   }).mouseout(function(){
   $(this).animate({backgroundColor:'#923'})
   }).click(function(){
   switch($('#pics2').css('left')){
   case '-90px':{
   $('#pics2').animate({left:'-2210px'});
   turn2 = 3;
   break;
   }case '-800px':{
   $('#pics2').animate({left:'-90px'});
   turn2 = 0;
   break;
   }case '-1500px':{
   $('#pics2').animate({left:'-800px'});
   turn2 = 1;
   break;
   }case '-2210px':{
   $('#pics2').animate({left:'-1500px'});
   turn2 = 2;
   break;
   }
   }
   })
   $('#btn2b').mouseover(function(){
   $(this).animate({backgroundColor:'yellow'})
   }).mouseout(function(){
   $(this).animate({backgroundColor:'#923'})
   }).click(function(){
   switch($('#pics2').css('left')){
   case '-90px':{
   $('#pics2').animate({left:'-800px'});
   turn2 = 1;
   break;
   }case '-800px':{
   $('#pics2').animate({left:'-1500px'});
   turn2 = 2;
   break;
   }case '-1500px':{
   $('#pics2').animate({left:'-2210px'});
   turn2 = 3;
   break;
   }case '-2210px':{
   $('#pics2').animate({left:'-90px'});
   turn2 = 0;
   break;
   }
   }
   })
   */
})
