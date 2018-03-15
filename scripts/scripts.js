var text = document.createTextNode('<p>Stuff</p>');
document.body.appendChild(text);



console.log('hi')
$("#js-rotating").Morphext();
$("#js-rotating").Morphext({
    animation: "fadeIn", // Overrides default "bounceIn"
    separator: "|", // Overrides default ","
    speed: 3000, // Overrides default 2000
    complete: function () {
        // Overrides default empty function
    }
});

//  $(document).ready(function(){
//       $('.carousel').carousel();
//     });
// $('.carousel').carousel('next');
// $('.carousel').carousel('next', 3); // Move next n times.

// // Previous slide
// $('.carousel').carousel('prev');
// $('.carousel').carousel('prev', 4); // Move prev n times.

// // Set to nth slide
// $('.carousel').carousel('set', 4);

// // Destroy carousel
// $('.carousel').carousel('destroy');

//  $(document).ready(function(){
//     $('.collapsible').collapsible();
//   });


//    $('.dropdown-button').dropdown({
//       inDuration: 300,
//       outDuration: 225,
//       constrainWidth: false, // Does not change width of dropdown to that of the activator
//       hover: true, // Activate on hover
//       gutter: 0, // Spacing from edge
//       belowOrigin: false, // Displays dropdown below the button
//       alignment: 'left', // Displays dropdown with edge aligned to the left of button
//       stopPropagation: false // Stops event propagation
//     }
//   );

//    $('.dropdown-button').dropdown('close');

//    $('.dropdown-button').dropdown('open');

  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();