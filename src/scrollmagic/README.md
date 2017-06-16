# Scroll Magic
## Controller
```
new ScrollMagic.Controller({
  duration: 100,    // 滚动动画持续距离。不加单位是默认是 px。可以是百分数，100%表示一屏。
  offset: 50,        // 移动 50px 后触发动画。
  vertical: true, // 滚动方向。默认是垂直方向。
  container: '.contrainer', // 监听滚动的元素。默认是body 
  globalSceneOptions: {} // 对 Controller包含的 Scence 做一样的设置
})
```

添加场景
```
addScence(scence)
```

## Scence
```
new ScrollMagic.Scene({
  duration: 100,    // 滚动动画持续距离。不加单位是默认是 px。可以是百分数，100%表示一屏。 设置为 0 ，表示无限。
  offset: 50,        // 移动 50px 后触发动画。
  triggerElement: '.trigger', // 滚动到达该元素开始场景，默认是页面开始。 
  triggerHook: 'onCenter', // 触发点在页面中（viewport）的位置， onEnter ：页面底部, onCenter：页面中间, onLeave：页面开始。默认是 onCenter
  
})
```

offset 和 triggerElement 做的是都是，决定什么时候开始进行动画。
