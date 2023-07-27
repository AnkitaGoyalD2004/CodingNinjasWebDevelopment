
// var currentPos = 0;
// var targetPos = 400;
// var smoothScroll = setInterval(fn, 50);

// function fn() {
//     if (currentPos >= targetPos) {
//         clearInterval(smoothScroll);
//     }
//    currentPos += 50;
//     window.scrollBy(0, 50);
// }

var educationSection = document.getElementById('education');
var coordinates = educationSection.getBoundingClientRect();


var anchorTags = document.querySelector('.nav-menu a');
for( i = 0 ; i < anchorTags.clientHeight; i ++){
    anchorTags[i].addEventListener('click' , function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowercase();
        var targetSection  = document.getElementById(targetSectionID);
        console.log(targetSectionID);
        var targetSectionCoordinates = target.getBoundingClientRect();
        var Interval = setInterval(function(){
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        }, 50);
    });
}
