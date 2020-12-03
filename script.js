document.getElementById('play').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio').play();
});

$(function () { $('.click-to-jiggle').click(function (e) {  $(this).toggleClass('jiggle');  
        return false; 
    });
});
