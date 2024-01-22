function turnOnOff() {
    let image = document.getElementById('Image');
    if (image.src.match("ONbulb"))
        image.src =
"img/aircraft.png";
    else
        image.src =
"img/launched.gif";
}


function turnOnOff2() {
    let image = document.getElementById('Image');
    if (image.src.match("ONbulb"))
        image.src =
"img/ocean.png";
    else
        image.src =
"img/droped.gif";
}