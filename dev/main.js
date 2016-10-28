(function(window){

    var wW = window.innerWidth - 10;
    var wH = window.innerHeight - 10;


    window.onresize = function () {
        wW = window.innerWidth - 10;
        wH = window.innerHeight - 10;
        play(wW, wH);
    };


    for (var i = 0; i < 100; i++) {
        var s = document.createElement('i');
        s.className = "star";
        document.body.querySelector('.space').appendChild(s);
    }

    var stars = [].slice.call(document.getElementsByClassName('star'));


    function play(width, height) {
        shuffle(stars).map(function (star, index) {
            var left = random(width);
            var top = random(height);

            star.style["width"] = "1px";
            star.style["height"] = "1px";

            if ((index % 3 == 0)) {
                star.style["width"] = "2px";
                star.style["height"] = "2px";
            }
            star.style["transform"] =  "translate("+ left +"px, " + top + "px)";
            star.style["webkitTransform"] =  "translate("+ left +"px, " + top + "px)";
            star.style["msTransform"] =  "translate("+ left +"px, " + top + "px)";
            star.style["OTransform"] =  "translate("+ left +"px, " + top + "px)";
            star.style["MozTransform"] =  "translate("+ left +"px, " + top + "px)";
        });
    }


    function random(size) {
        var rand = Math.round(Math.random() * size);
        return (rand >= size) ? random(size) : rand;
    }

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

    function music(){
        var music = document.querySelector('.music');
        function start_play(){
            if(music.paused){
                music.load();
                music.play()
            }
        }

        music.addEventListener('ended', start_play, false);
        window.addEventListener('touchstart', start_play, false);
        document.addEventListener('load', start_play, false);
        music.addEventListener('load', start_play, false);


        if('TouchEvent' in document){
            var e = document.createEvent('TouchEvent');
            e.initTouchEvent();
        }

        start_play();

    }

    /* Magic Starts */
    music();


    play(wW, wH);
    setInterval(function () {
        play(wW, wH);
    }, 12000);
})(window);