// $('.button-collapse').sideNav({
//   menuWidth: 250, // Default is 300
//   edge: 'left', // Choose the horizontal origin
//   closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
//   draggable: true // Choose whether you can drag to open on touch screens
// });

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

// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
$('.collapsible').collapsible();



  // Or with jQuery

window.sr = ScrollReveal({ duration: 1500 });
sr.reveal('.scrollanimation', 300);
sr.reveal('.scrollanimationhome', 300);
sr.reveal('.scrollanimationfooter', 200);
sr.reveal('.skillscrollanimation', 200);
sr.reveal('.skill2scrollanimation', 200);
sr.reveal('.skill3scrollanimation', 200);
sr.reveal('.skill4scrollanimation', 200);
sr.reveal('.projectskill1scrollanimation', 100);
sr.reveal('.projectskill2scrollanimation', 100);
sr.reveal('.projectskill3scrollanimation', 100);

sr.reveal('.aboutscrollanimation', { duration: 1000 });

sr.reveal('.aboutcontentscrollanimation', 400);
sr.reveal('.skillsscrollanimation', 1500);
sr.reveal('.projectsscrollanimation', 1500);
// Customizing a reveal set


