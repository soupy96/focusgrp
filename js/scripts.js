// This is for the rseponsive navigation
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}

// This is for the scroll to top
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
    // This code starts the slick slider with the setting underneath it like autoplay and the time that it spends on one card
    // $(".lazy").slick({
    //   lazyLoad: 'ondemand', // ondemand progressive anticipated
    //   infinite: true,
    //   autoplay: true,
    //   autoplaySpeed: 1500
    // });
});

// This dynamically gets the id of the slide and outputs it into the right side of the carousel section
// var mutationObserver = new MutationObserver(function(mutations) {
//   mutations.forEach(function (mutation) {
//     let slidewhole = document.getElementsByClassName("slick-track");

//     let slidelist = slidewhole[0].children;

//     for (let x = 1; x < slidelist.length; x++) {
//       let slideid = slidelist[x].id;
//       if (slideid) {
//         let slideatt = document.getElementById(slideid).attributes;
//         for (let y = 0; y < slideatt.length; y++) {
//           if (slideatt[y].name === "aria-hidden") {
//             if (slideatt[y].value === "false") {
//               // typeWriter(slideid);
//               document.getElementById("mainslidername").innerHTML = slideid;
//             }
//           }
//         }
//       }
//     }
//   });
// });

// var i = 0;
// var speed = 50;

// function typeWriter(slideid) {

//   var SI = arguments[0];

//   if (i < SI.length) {
//     document.getElementById("mainslidername").innerHTML += .charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// This gets the element with the id #allslides to use with the mutatuionObserver
// let elementToObserve = document.getElementById("allslides");

// // These are the things we are telling the mutation observer to watch a change for
// let config = {
//   attributes: true,
//   characterData: true,
//   childList: true,
//   subtree: true,
//   attributeOldValue: true,
//   characterDataOldValue: true
// }

// // This calls the function with the element and the settings that we previously made. It calls this whenever something in the #allslides changes
// mutationObserver.observe(elementToObserve, config);

// This is for the scrolling animations
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// This changes the image in crisis hotline button
function onHover() {
    $("#menuImg").attr('src', 'icons/email-hotline-white.png');
}

function offHover() {
    $("#menuImg").attr('src', 'icons/email-hotline.png');
}

function onHoverF() {
    $("#menuImgF").attr('src', 'icons/email-hotline-white.png');
}

function offHoverF() {
    $("#menuImgF").attr('src', 'icons/email-hotline.png');
}

// var myVar;

// function myFunction() {
//   myVar = setTimeout(typeWriter, 3000);
// }

// // function alertFunc() {
  

//   function typeWriter() {
//     var s = 0;

//     var test = document.getElementById("typetext").innerHTML;

//     var res1 = "Results1";
//     var res2 = "Results2";
//     var res3 = "Results3";

//     var speed = 50; /* The speed/duration of the effect in milliseconds */

//     if (test === res1) {
//       if (s < res2.length) {
//         if (document.getElementById("typetext").innerHTML = "") {
//           document.getElementById("typetext").innerHTML += res2.charAt(s);
//           s++;
//           setTimeout(typeWriter, speed);
//         }
//       }
//     }

//     if (test === res2) {
//       if (s < res3.length) {
//         document.getElementById("typetext").innerHTML = "";
//         if (document.getElementById("typetext").innerHTML = "") {
//           document.getElementById("typetext").innerHTML += res3.charAt(s);
//           s++;
//           setTimeout(typeWriter, speed);
//         }
//       }
//     }

//     if (test === res3) {
//       if (s < res1.length) {
//         document.getElementById("typetext").innerHTML = "";
//         if (document.getElementById("typetext").innerHTML = "") {
//           document.getElementById("typetext").innerHTML += res1.charAt(s);
//           s++;
//           setTimeout(typeWriter, speed);
//         }
//       }
//     }
//   // }
// }