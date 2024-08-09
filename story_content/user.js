window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script2 = function()
{
  var confettiScript = document.createElement('script');
confettiScript.setAttribute('src','https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js');
document.head.appendChild(confettiScript);
}

window.Script3 = function()
{
  var duration = 1 * 1000;
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

window.Script4 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script5 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script6 = function()
{
  var confettiScript = document.createElement('script');
confettiScript.setAttribute('src','https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js');
document.head.appendChild(confettiScript);
}

window.Script7 = function()
{
  var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
}

window.Script8 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script9 = function()
{
  const myDiv = document.querySelector('[data-model-id="5ukwux57mwn"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script10 = function()
{
  var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
}

window.Script11 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script12 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script13 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script14 = function()
{
  var confettiScript = document.createElement('script');
confettiScript.setAttribute('src','https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js');
document.head.appendChild(confettiScript);
}

window.Script15 = function()
{
  var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
}

window.Script16 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script17 = function()
{
  const myDiv = document.querySelector('[data-model-id="5ukwux57mwn"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script18 = function()
{
  var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
}

window.Script19 = function()
{
  const myDiv = document.querySelector('[data-model-id="5ukwux57mwn"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script20 = function()
{
  var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
}

window.Script21 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script22 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script23 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script24 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script25 = function()
{
  var confettiScript = document.createElement('script');
confettiScript.setAttribute('src','https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js');
document.head.appendChild(confettiScript);
}

window.Script26 = function()
{
  var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
}

window.Script27 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script28 = function()
{
  const myDiv = document.querySelector('[data-model-id="5ukwux57mwn"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script29 = function()
{
  var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
}

window.Script30 = function()
{
  const myDiv = document.querySelector('[data-model-id="5ukwux57mwn"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script31 = function()
{
  var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
}

window.Script32 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script33 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script34 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script35 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script36 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script37 = function()
{
  const myDiv = document.querySelector('[data-model-id="6dvY70BPNrT"]'); // "data-model-id" OF SL RECTANGLE
const bgColour = "#F6F9FB"; // BACKGROUND COLOUR.
const barColour = "#5E0056"; // PROGRESS COLOUR.
const compColour = "#F15F4F"; // COMPLETED COLOUR (will not change if empty).
const borderRad = "100px"; // BORDER RADIUS.
const progress = "progress"; // PROGRESS VARIABLE (Case Sensitive).

/* DO NOT CHANGE BELOW UNLESS INTENDED */
const player = GetPlayer();
let scale = player.GetVar(progress);
let testElement = !!document.getElementById("pBar"); // Test to see if the bar already exists.
if (!testElement) { // If bar doesn't exist

    //Create the background element for the Progress Bar
    let bgBar = document.createElement("div");
    bgBar.id = "bgBar";
    bgBar.style.width = "100%";
    bgBar.style.height = "100%";
    bgBar.style.backgroundColor = bgColour;
    bgBar.style.position = "absolute";
    bgBar.style.top = "0px";
    bgBar.style.borderRadius = borderRad;
    bgBar.style.direction = "rtl";
    myDiv.appendChild(bgBar);

    // Create the progress element of the Progress Bar
    let pBar = document.createElement("div");
    pBar.id = "pBar";
    pBar.style.width = scale + "%";
    pBar.style.height = "100%";
    pBar.style.backgroundColor = barColour;
    pBar.style.position = "absolute";
    pBar.style.top = "0px";
    pBar.style.right = "0px";
    pBar.style.borderRadius = borderRad;
    myDiv.appendChild(pBar);

} else { // If it does exist
    document.getElementById('pBar').style.width = scale + "%"; // Update the width
}
if (scale == 100 && compColour) {
    document.getElementById('pBar').style.backgroundColor = compColour;
}
}

window.Script38 = function()
{
  var confettiScript = document.createElement('script');
confettiScript.setAttribute('src','https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js');
document.head.appendChild(confettiScript);
}

window.Script39 = function()
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
