var blue_t=['imgs/blue_t.png', 'man, large size'],
    blue_p=['imgs/blue_p.png', 'man, small size'],
    blue_s=['imgs/blue_s.png', 'female, small size'],
    yellow_t=['imgs/yellow_t.png', 'man, small size'],
    yellow_p=['imgs/yellow_p.png', 'man, large size'],
    yellow_s=['imgs/yellow_s.png', 'man, large size'],
    pink_t=['imgs/pink_t.png', 'female, large size'],
    pink_p=['imgs/pink_p.png', 'man, small size'],
    pink_s=['imgs/pink_s.png', 'man, small size'];

var createBlueT='<div class="item"><img src="' + blue_t[0] + '" alt=""> ' +
                    '<span>' + blue_t[1] + '</span></div>';
var createBlueP='<div class="item"><img src="' + blue_p[0] + '" alt=""> ' +
                    '<span>' + blue_p[1] + '</span></div>';
var createBlueS='<div class="item"><img src="' + blue_s[0] + '" alt=""> ' +
                     '<span>' + blue_s[1] + '</span></div>';
var createYellowT= '<div class="item"><img src="' + yellow_t[0] + '" alt=""> ' +
                     '<span>' + yellow_t[1] + '</span></div>';
var createYellowP='<div class="item"><img src="' + yellow_p[0] + '" alt=""> ' +
                     '<span>' + yellow_p[1] + '</span></div>';
var createYellowS='<div class="item"><img src="' + yellow_s[0] + '" alt=""> ' +
                        '<span>' + yellow_s[1] + '</span></div>';
var createPinkT='<div class="item"><img src="' + pink_t[0] + '" alt=""> ' +
                      '<span>' + pink_t[1] + '</span></div>';
var createPinkP='<div class="item"><img src="' + pink_p[0] + '" alt=""> ' +
                      '<span>' + pink_p[1] + '</span></div>';
var createPinkS='<div class="item"><img src="' + pink_s[0] + '" alt=""> ' +
                     '<span>' + pink_s[1] + '</span></div>';

function showAll(){
    var textElem = document.getElementById('text');

    textElem.innerHTML = createPinkT + createBlueP + createYellowP +
                         createYellowS + createBlueS + createBlueT +
                         createYellowT + createPinkP + createPinkS;
}

function showT(){
    var textElem = document.getElementById('text');

    textElem.innerHTML = createBlueT + createYellowT + createPinkT;
}

function showP(){
    var textElem = document.getElementById('text');

    textElem.innerHTML = createBlueP + createYellowP + createPinkP;
}

function showS(){
    var textElem = document.getElementById('text');

    textElem.innerHTML = createBlueS + createYellowS + createPinkS;
}

function showBlue(){
    var textElem = document.getElementById('text');

    textElem.innerHTML = createBlueS + createBlueP + createBlueS;
}


function showYellow(){
    var textElem = document.getElementById('text');

    textElem.innerHTML = createYellowT + createYellowP + createYellowS;

}

function showPink(){
    var textElem = document.getElementById('text');

    textElem.innerHTML = createPinkT + createPinkP + createPinkS;
}