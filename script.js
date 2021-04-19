// console.log("Hii");
// var anchorTag=document.querySelectorAll('.nav-menu a');
// for(var i=0;i<anchorTag.length;i++){
//     anchorTag[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectionId=this.textContent.trim().toLowerCase();
//         var targetSection=document.getElementById(targetSectionId);
//         var interval=setInterval(function(){
//             var targetSetionCoordinate=targetSection.getBoundingClientRect();
//             if(targetSetionCoordinate.top<=0){
//                 clearInterval(interval);
//                 return;
//             }
//             else{
//                 window.scrollBy(0,50);
//             }

//         },20)
//     })
// }

console.log("Hii");
var interval;
var anchorTag=document.querySelectorAll('.nav-menu a');
for(var i=0;i<anchorTag.length;i++){
    anchorTag[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
         interval=setInterval(scrollVertically,20,targetSection)
    });
}
function scrollVertically(targetSection){
    var targetSetionCoordinate=targetSection.getBoundingClientRect();
            if(targetSetionCoordinate.top<=0){
                clearInterval(interval);
                return;
            }
            else{
                window.scrollBy(0,50);
            }

        }


// Skill section
var progressBars=document.querySelectorAll('.skill-progress>div');
var skillContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%';
    }
}
initialiseBars();
function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            else{
                currentWidth++;
                bar.style.width=currentWidth+ '%';
            }
        },5)
    }
}


function checkScroll(){
    // You have to check whether skill section is visible or not.
    var coordinates=skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight){
        animationDone=true;
        // console.log("Skill section");
        fillBars();
    }
    else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialiseBars();
    }

}















