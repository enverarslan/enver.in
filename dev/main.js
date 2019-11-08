(function(window){

    /* Get window size on responsively */
    var wW = window.innerWidth - 10;
    var wH = window.innerHeight - 10;
    /* Get Song */
    var song = document.querySelector('#audio');

    window.onresize = function () {
        wW = window.innerWidth - 10;
        wH = window.innerHeight - 10;
        play(wW, wH);
    };

    /* Create stars on Universe */
    for (var i = 0; i < 100; i++) {
        var s = document.createElement('i');
        s.className = "star";
        document.body.querySelector('.space').appendChild(s);
    }
    var stars = [].slice.call(document.getElementsByClassName('star'));

    /* Give power to stars for them are starting to journey in the Universe. */
    function play(width, height) {
        shuffle(stars).map(function (star, index) {
            var left = randomPosition(width);
            var top = randomPosition(height);

            star.style["background"] = randomColor();           

            if ((index % 5 === 0)) {
                star.style["width"] = "5px";
                star.style["height"] = "5px";
            }else if ((index % 3 === 0)) {
                star.style["width"] = "3px";
                star.style["height"] = "3px";
            }else{
                star.style["width"] = "1px";
                star.style["height"] = "1px";
            }

            star.style["transform"] =  "translate("+ left +"px, " + top + "px)";
            star.style["webkitTransform"] =  "translate("+ left +"px, " + top + "px)";
            star.style["msTransform"] =  "translate("+ left +"px, " + top + "px)";
            star.style["OTransform"] =  "translate("+ left +"px, " + top + "px)";
            star.style["MozTransform"] =  "translate("+ left +"px, " + top + "px)";
        });
    }
    /* Randomize star color */
    function randomColor(){
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    /* Randomize star location */
    function randomPosition(size) {
        var rand = Math.round(Math.random() * size);
        return (rand >= size) ? randomPosition(size) : rand;
    }
    /* Shuffle stars list. */
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    
    /* Stars born */
    play(wW, wH);
    /* Stars are starting to journey in the Universe. */
    setInterval(function () {
        play(wW, wH);
    }, 8000);    
    
    /* Show Song Credit */
    song.addEventListener('play', function showCredit(){
        document.querySelector("p#audio_credit").style.opacity = 1;
        song.removeEventListener('play', showCredit);
    });

    /* Break silence in universe */
    function music(e){
        song.play();
        document.removeEventListener(e.type, music);        
    }  
    document.addEventListener("click", music, false);
    document.addEventListener("touchstart", music, false);
    document.addEventListener("touchmove", music, false);
    document.addEventListener("touchend", music, false);
    document.addEventListener("touchcancel", music, false);    
    document.addEventListener("touchforcechange", music, false);
})(window);

