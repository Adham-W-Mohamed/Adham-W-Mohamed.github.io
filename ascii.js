let splitText = "=====\n", currentPosition = 0;
let timer = null;
let delay = 250;


function displayText(){

    let c = document.getElementById("text-area");
    let d = document.getElementById("animation");
    let animationValue = d.options[d.selectedIndex].value;
    c.value = ANIMATIONS[animationValue];
}

function changeFont() {
    let c = document.getElementById("text-area");
    let e = document.getElementById("fontsize");
    c.style.fontSize = e.options[e.selectedIndex].value;

}

function animationStart(){
    let start = document.getElementById("start");
    start.disabled = true;
    let stop = document.getElementById("stop");
    stop.disabled = false;

    let c = document.getElementById("text-area");
    let d = document.getElementById("animation");
    let animationValue = d.options[d.selectedIndex].value;
    let data = ANIMATIONS[animationValue].split(splitText);



    timer =  setInterval(function () {
        if (currentPosition === data.length) {
            c.value = "";
            currentPosition = 0;
        }
        c.value = data[currentPosition];
        currentPosition++;
    }, delay);



}

function animationStop() {
    let start = document.getElementById("start");
    start.disabled = false;
    let stop = document.getElementById("stop");
    stop.disabled = true;
    clearInterval(timer);
    timer =  null;
    currentPosition = 0;


}

//changes the speed when the turbo checkbox is clicked.
function speedChange() {
    let speed = document.getElementById("turbo");
    if (speed.checked) {
        delay = 50;
        console.log("SPEED Faster! delay of " + delay);
    }
    else {
        delay = 250;
        console.log("SPEED slower! delay of " + delay);
    }

    clearInterval(timer);
    animationStart();

}

function pageLoad(){
    let d = document.getElementById("animation");
    d.onchange = displayText;
    let e = document.getElementById("fontsize");
    e.onchange = changeFont;

    let start = document.getElementById("start");
    start.onclick = animationStart;
    let stop = document.getElementById("stop");
    stop.onclick = animationStop;

    let speed = document.getElementById("turbo");
    speed.onclick = speedChange;
}

window.onload= pageLoad;


























































// CSE 190 M, Homework 6: ASCIImation
// This file contains the ASCII animations as large strings.
//
// You can refer to them by var iable names such as blank or dive, or by indexes
// into an array ANIMATIONS, such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"].
//
// The former is probably more intuitive for new programmers, but the latter
// may allow you to write more elegant code by indexing using the text of the
// menu option selected in the HTML.  (See bottom of file.)
//
// (Hint: The array index you want is the same as the select box's selected value...)
//
// YOU SHOULD NOT EDIT THIS FILE IN ANY WAY.
// TO ADD YOUR CUSTOM ANIMATION, CREATE YOUR OWN FILE myanimation.js AND
// PUT YOUR CODE IN THERE.  In myanimation.js, it is legal for you to modify
// the var iables that have been declared in this file.

var BLANK = "";

var CUSTOM = "";   // you could change the value of this var iable in your code

var EXERCISE = "  o\n" +
    " /#\\\n" +
    " _|_\n" +
    "=====\n" +
    " \\o/\n" +
    "  #\n" +
    "_/ \\_\n";

var JUGGLER = "   o\n" +
    "   O\n" +
    " o/|\\o\n" +
    "  / \\\n" +
    "=====\n" +
    "    o\n" +
    " o_O\n" +
    "   |o\n" +
    "  / \\\n" +
    "=====\n" +
    " o   o\n" +
    "  \\O\n" +
    "   o\\\n" +
    "  / \\\n" +
    "=====\n" +
    "  o\n" +
    "  _O_o\n" +
    "  o|\n" +
    "  / \\\n";

var BIKE = "\n" +
    "   _o\n" +
    " _< \\\\_\n" +
    "(_)>(_)            .\n" +
    "=====\n" +
    "\n" +
    "     _o\n" +
    "   _< \\\\_\n" +
    "  (_)>(_)          .\n" +
    "=====\n" +
    "\n" +
    "       _o\n" +
    "     _< \\\\_\n" +
    "    (_)>(_)        .\n" +
    "=====\n" +
    "          o\n" +
    "         /\\\\_\n" +
    "       _< (_)\n" +
    "      (_)          .\n" +
    "=====\n" +
    "            o\n" +
    "           /\\\\_\n" +
    "         _< (_)\n" +
    "        (_)        .\n" +
    "=====\n" +
    "             _\n" +
    "           _ \\\\\\\\o\n" +
    "          (_)/<_\n" +
    "              (_)  .\n" +
    "\n" +
    "=====\n" +
    "               _\n" +
    "             _ \\\\\\\\o\n" +
    "            (_)/<_\n" +
    "                (_).\n" +
    "=====\n" +
    "                  _\n" +
    "                 (_)\\\\__/o\n" +
    "                   \\\\_| \\\\\n" +
    "                  .(_)\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\' \\\\/\n" +
    "                  .  (_)\'  _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'  \\\\/\n" +
    "                  .  (_)\'   _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'   \\\\/\n" +
    "                  .  (_)\'    _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\o_\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\_o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__ o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__  o\n" +
    "=====\n" +
    "                       _\n" +
    "                      (_)\n" +
    "                      _|/\'    \\\\/\n" +
    "                  .  (_)\'     _\\\\__   o\n";

var DIVE = "  o\n" +
    " /|\\\n" +
    ",/ \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "..,..,,.,...,,|.,|..,.,,...,..,,,..,..,..,.,\n" +
    "=====\n" +
    "     o\n" +
    "    -|-\n" +
    "    / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "      \\o/\n" +
    "       |\n" +
    "      / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "        \\o/\n" +
    "        /\n" +
    "       / \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,..,,.,..,,.,|..|.,.,,,...,.,,...,,,.,..,,,\n" +
    "=====\n" +
    "            |o__\n" +
    "            /\n" +
    "          /\\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" +
    "=====\n" +
    "              o/__\n" +
    "           __/\n" +
    "             \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,.,.,.,.,.,|.,|..,,..,,.,.,..,,,,.,,.,.,.\n" +
    "=====\n" +
    "\n" +
    "                  __ o__\n" +
    "                 /)  \\\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "...,,,...,.,.,|..|.,.,...,,,.,..,.,.,,,..,..\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "                           \\)\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/    \\\n" +
    "-|----------|-|--|-|--\'    /o\\\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "....,...,...,,|,,|,.,.,.,.,.,.,.,....,,,,,..\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |           \\|\n" +
    "              |  |            \\o\n" +
    "              |  |            ( \\\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,....,,...|.,|.,.,.,.,.,.,.,.,.,.,.,.,,,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                \\)\n" +
    "              |  |                |\n" +
    "              |  |               /o\\\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,,,...,.,,,,,|.,|.,,,.,.,,.,..,.,,....,,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                 \\ /\n" +
    "              |  |                  |\n" +
    "              |  |                 /o\\\n" +
    ",..,.,..,,.,.,|,,|.,,,.,,.,,.,...,,..,,.,..,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,\\|.,..,.\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |                `.\' \'.\n" +
    ".,,.,,.,,.,,.,|.,|.,,...,,.,.,..,,.,`\'.,..,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.,.,,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |           .--.-.--.-.---.--.\n" +
    "              |  |          (YEA, that was fun!)\n" +
    "              |  |           `-\'.\'\'--\'-\'--\'`--\'\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n" +
    "=====\n" +
    "\n" +
    "\n" +
    "\n" +
    "\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"\'\"/\n" +
    "-|----------|-|--|-|--\'\n" +
    "/            \\ \\/ /\n" +
    "              )  (\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    "              |  |\n" +
    ".,.,,,,.,.,,.,|..|.,,,,.,..,,.,.,,.,.\\o/,.,\n";


// can also access the animations as an associative array / hash map,
// such as ANIMATIONS["Bike"] or ANIMATIONS["Dive"]
var ANIMATIONS = [];
ANIMATIONS["Blank"] = ANIMATIONS["blank"] = ANIMATIONS["BLANK"] = "";
ANIMATIONS["Custom"] = ANIMATIONS["custom"] = ANIMATIONS["CUSTOM"] = CUSTOM;   // you could change the value of this in your code
ANIMATIONS["Exercise"] = ANIMATIONS["exercise"] = ANIMATIONS["EXERCISE"] = EXERCISE;
ANIMATIONS["Juggler"] = ANIMATIONS["juggler"] = ANIMATIONS["JUGGLER"] = JUGGLER;
ANIMATIONS["Bike"] = ANIMATIONS["bike"] = ANIMATIONS["BIKE"] = BIKE;
ANIMATIONS["Dive"] = ANIMATIONS["dive"] = ANIMATIONS["DIVE"] = DIVE;
