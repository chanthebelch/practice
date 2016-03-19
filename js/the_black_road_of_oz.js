// This could all be more modular. I want to refactor. 
// No time. Only 7 days. The screaming grows louder...
// Hurry, the passcode... the passcode...
	
  $(window).load(function(){
    setTimeout(function(){ //gotta wait a lil' bit
      $("#load-state").addClass("here-we-go");
      setTimeout(function(){ //gotta wait a lil' bit
        $("#load-state").removeClass("loading").addClass("loaded");
        $("#opening").addClass("playing");
      }, 3500);
    }, 2000);
  });
// Some items can be activated with a click to run an animation
$(".activatable").on("click", function() {
    // add the activated class. Animations should be on this class.
    $(this).addClass("activated").removeClass("activatable");
    // When the animation is over, remove class -> reset animation
    $(this).on('webkitAnimationEnd', function() {
      $(this).removeClass("activated").addClass("activatable");      
    }); 
});

// When you click anywhere on the body, hide all the "discoverables" and clear any forms...
$("body").on("click", function(){
  $(".sign, .secret-room, .pass-field").hide();
  $(".pass-field").find("input[type='text']").val("");
});

// Some things are "readable," and will show their content ("signs") on click-age
$(".readable").on("click", function() {
  var sign = $(this).data("sign");
  var sign = "#" + sign;
  $(".sign").hide(); // hide any open signs before
  $(sign).show(); // show target sign
  //stop propogation so the hiding function above won't fire
  return false; 
});

// Some rooms are secret. This is how you reveal them.
$(".secret").on("click", function() {
  var secret = $(this).data("secret");
  var secret = "#" + secret;
  $(secret).show();
  //stop propogation so the hiding function above won't fire
  return false; 
});

// When you click inside secret rooms, hide any open signs without hiding the room.
$(".secret-room").on("click", function(){
  var shown = $(this).children(".sign").filter(":visible");
  if (shown.length) { //if you have some signs open in a secret room
    $(".sign").hide(); //hide them
    return false; //and stop click from closing room
  }
});

// changing rooms

// when arrow is clicked
$(".arrow").on("click", function(){
  // find out where we're going
  var destination = $(this).data("destination");
// hide dollies
  $(".dolly, .toothy, .arrow").css("opacity", 0);
// change room state
// bring into focus room (CSS)
  $("#portal").removeClass().addClass("in-" + destination);

//show that room's dollies (CSS?)
  $(".stage").removeClass("location initial")
    .filter("#" + destination).addClass("location");
});

// Ultra-super-secret password protected room-age
$(".passkey").on("click", function() {
  var password = $(this).data("pass");
  var password = "#" + password;
  $(password).show().find("input[type='text']").first().focus();
  //stop propogation so the hiding function above won't fire
  return false; 
});

$(".pass-field").on("click", function() {
  return false;
});

$(".pass-field").on("click", "input[type='submit']", function() {
  var tryPasscode = $(this).prev("input[type='text']").val().toLowerCase();
  var realPasscode = $(this).parents(".pass-field").data("passcode").toLowerCase();
  var access = $(this).parents(".pass-field").data("access");
  var gate = $(this).parents(".pass-field");
  knockKnock(tryPasscode, realPasscode, access, gate); 
});


// Protect those passwords!
function knockKnock(tryPasscode, realPasscode, access, gate) {
  if (tryPasscode === realPasscode) { // correct password
    var access = "#" + access;
    $(".sign, .secret-room, .pass-field").hide();
    $(access).show();
  } else { // wrong password
    $(gate).find("input[type='text']").val("Errnt! Have a look around.");
  }
}