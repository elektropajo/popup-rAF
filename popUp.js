/*
 * PopUp function with rAF by La máquina de Turing
 * www.lamaquinadeturing.com
 */
function fadeOut (element) {
  var opacity = 1;
  function decrease () {
    opacity -= 0.05;
    if (opacity <= 0){
      element.style.opacity = 0;
      element.remove();
      return true;
    }
    element.style.opacity = opacity;
    requestAnimationFrame(decrease);
  }
  decrease();
}

function popUp () {
  var b = document.querySelector('#home'),
      scr = document.createElement('DIV'),
      video = document.createElement('IFRAME'),
      h = window.innerHeight;
  b.style.overflow='hidden';
  scr.appendChild(video);
  scr.style.position='absolute';
  scr.style.top='0px';
  scr.style.left='0px';
  scr.style.bottom='0px';
  scr.style.right='0px';
  scr.style.zIndex='999';
  scr.style.background='rgba(0,0,0,0.8)';
  scr.style.padding=(h-360)/2 + 'px 0 0';
  video.setAttribute('id', 'video');
  video.setAttribute('width', '640');
  video.setAttribute('height', '360');
  video.setAttribute('src', 'https://www.youtube.com/embed/p70MNDV8mCA?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allowfullscreen', 'yes');
  b.appendChild(scr);
  b.addEventListener('click', function popOut(e) {
    if (e.target !== video) { fadeOut(scr); }
  });
}
popUp();

/* rAF polyfill by https://gist.github.com/paulirish/1579671 */
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) { clearTimeout(id); };
}());
