window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var confettiScript = document.createElement('script');
confettiScript.setAttribute('src','https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js');
document.head.appendChild(confettiScript);
}

window.Script2 = function()
{
  let player = GetPlayer();
let d = new Date();
/*
let day = String(d.getDate()).padStart(2, '0');
let month = String(d.getMonth() + 1).padStart(2, '0'); // الشهور تبدأ من 0
let year = d.getFullYear();

let formattedDate = day + "/" + month + "/" + year;

player.SetVar("date", formattedDate);
*/
player.SetVar("date", d);

}

window.Script3 = function()
{
  var clabsPDFWindow=window.open('https://cluelabs.com/stencil/display/widget-pdf-maker-display-loading','clabsPDFWindow'),xhttp=new XMLHttpRequest,targlink='https://cluelabs.com/stencil/display/widget-pdf-maker-display?chart=MjcyNnw3NDA0fDg1NDNiZDAxNDk2MGY2NjQ2ZWYyMDdiYzM2MTIyODhj';xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&''!=this.response){var t=GetPlayer(),e=JSON.parse(xhttp.response),a=document.createElement('form');a.setAttribute('method','post'),a.setAttribute('action',targlink+'&vardata=sent&method=post'),a.setAttribute('target','clabsPDFWindow'),document.body.appendChild(a),e.forEach(function(e){(newfield=document.createElement('input')).setAttribute('type','text'),newfield.setAttribute('name',e),newfield.setAttribute('value',btoa(encodeURIComponent(t.GetVar(e)))),a.appendChild(newfield)}),clabsPDFWindow.postMessage('loading','*'),a.submit(),document.body.removeChild(a),t.SetVar('stencilrendered',parseInt(t.GetVar('stencilrendered'))+1)}},xhttp.open('GET',targlink,!0),xhttp.send();
}

window.Script4 = function()
{
  

var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();
  if (timeLeft <= 0) {
    return clearInterval(interval);
  }
  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);
}

};
