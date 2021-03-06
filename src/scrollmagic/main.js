$(document).ready(function() {
  var winW = $('body').width()
  var winH = $(window).width()


  $('.scene').width(winW)
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
    }
  })

 
  // 跑动的人    
  new ScrollMagic.Scene()
      .setPin('.people')
      .addTo(controller)
  // 水平移动
  ;(function() {
      var sceneHorNum = $('.scenes--hor .scene').length
      $('.scenes--hor')
        .height(winH)
        .width(sceneHorNum * winW)
      var anim = new TimelineMax()
        .fromTo(".scenes--hor", 1, { x: "0%" }, { x: "-" + (100 * (sceneHorNum-1)/sceneHorNum) + "%", ease: Linear.easeNone }) // in from left

      new ScrollMagic.Scene({
          duration: sceneHorNum + '00%'
      })
      .setPin('.scenes-wrap--hor')
      .setTween(anim)
      .addIndicators({
        name: 'hor'
      }) // for debugger
      .addTo(controller)
      
      // http://scrollmagic.io/
      var nervousHat = new TimelineMax({repeat: -1, yoyo: true})
          .add(TweenMax.to(".girl", 0.3, {top: "+=5", left: "-=6", rotation: -3}))
          .add(TweenMax.to(".girl", 0.3, {top: "-=10", left: "+=6", rotation: 0}))
          .add(TweenMax.to(".girl", 0.3, {top: "+=5", left: "+=6", rotation: 3}))
          .add(TweenMax.to(".girl", 0.3, {top: "-=5", left: "-=3", rotation: 1.5}))
          .add(TweenMax.to(".girl", 0.3, {top: "+=5", left: "-=6", rotation: -1.5}))
          .add(TweenMax.to(".girl", 0.3, {top: "+=5", left: "+=3", rotation: 0}))
          .add(TweenMax.to(".girl", 0.3, {top: "-=10"}));

      /*
       火花效果
       http://scrollmagic.io/js/demo.js
      */
      var girlSence = new ScrollMagic.Scene({
          duration: '60%'
      })
      .setPin('.girl') // 过了这个场景，自然就 unpin 了
      .setTween(nervousHat)
      .addIndicators({
        name: 'girl'
      })
      .addTo(controller)

  })()

  // 垂直移动
  ;(function() {
      $('.scenes--ver .scene').height(winH)
      var sceneVerNum = $('.scenes--ver .scene').length
      $('.scenes--ver')
        .height(winH * sceneVerNum)
      var anim = new TimelineMax()
        .fromTo(".scenes--ver", 1, { y: "0%" }, { y: "-" + (100 * (sceneVerNum-1)/sceneVerNum) + "%", ease: Linear.easeNone }) // in from left

      new ScrollMagic.Scene({
          triggerElement: '.scenes-wrap--ver',
          duration: sceneVerNum + '00%'
      })
      .setPin('.scenes-wrap--ver')
      .setTween(anim)
      .addIndicators({
        name: 'ver'
      })
      .addTo(controller)
  })()
  
})
