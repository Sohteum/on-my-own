 
$(function(){
/* slider */
var n = 1
var timeoutID
var intervalID = setInterval(function(){
  n++
  fnChange()
  $(`.carousel .img`).stop().animate({'left':`-5%`, 'opacity':'0'})
  $(`.carousel .img${n}`).css({'left':`5%`})
  $(`.carousel .img${n}`).stop().animate({'left':`0`, 'opacity':'1'})
},5000)

function fnChange(){
  if(n > 11){n=1}
  if(n < 1){n=2}
}

function autoplay(){
  clearInterval(intervalID)
  clearTimeout(timeoutID)
  timeoutID = setTimeout(function(){
    intervalID = setInterval(function(){
      n++
      fnChange()
      $(`.carousel .img`).stop().animate({'left':`-5%`, 'opacity':'0'})
      $(`.carousel .img${n}`).css({'left':`5%`})
      $(`.carousel .img${n}`).stop().animate({'left':`0`, 'opacity':'1'})
    },3000)
  },5000)
}

$(`.carousel .next`).click(function(){
  n ++
  fnChange()
  $(`.carousel .img`).stop().animate({'left':`-5%`, 'opacity':'0'})
  $(`.carousel .img${n}`).css({'left':`5%`})
  $(`.carousel .img${n}`).stop().animate({'left':`0`, 'opacity':'1'})
  autoplay()
})
$(`.carousel .prev`).click(function(){
  n --
  fnChange()
  $(`.carousel .img`).stop().animate({'left':`5%`, 'opacity':'0'})
  $(`.carousel .img${n}`).css({'left':`-5%`})
  $(`.carousel .img${n}`).stop().animate({'left':`0`, 'opacity':'1'})
  autoplay()
})
})

 
