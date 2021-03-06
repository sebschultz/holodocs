<!---night mode! jquery finds/selects the .onbutton element (the "on" button for night mode); action "click" selects the various elements and changes the css (makes text white/red and background black)-->

$(".onbutton").click(function() {
  $("h1").css("color", "white");
});
$(".onbutton").click(function() {
  $("h2").css("color", "white");
});
$(".onbutton").click(function() {
  $("p").css("color", "white");
});
$(".onbutton").click(function() {
  $(".jumbotron").css("background-color", "black");
});
$(".onbutton").click(function() {
  $("body").css("background-color", "black");
});
$(".onbutton").click(function() {
  $(".table").css("color", "#ff8080");
});

$(".onbutton").click(function() {
  $(".footnotes").css("background-color", "black");
});



<!-- undo night mode! jquery finds/selects the .offbutton element (to undo the styling of the night mode); action "click" selects various elements and removes the style attributes -->

$(".offbutton").click(function() {
$(".jumbotron").removeAttr("style");
});

$(".offbutton").click(function() {
$(".footnotes").removeAttr("style");
});

$(".offbutton").click(function() {
$(".table").removeAttr("style");
});

$(".offbutton").click(function() {
$("p").removeAttr("style");
});

$(".offbutton").click(function() {
$("body").removeAttr("style");
});

$(".offbutton").click(function() {
$("h1").removeAttr("style");
});

$(".offbutton").click(function() {
$("h2").removeAttr("style");
});
