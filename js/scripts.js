const hamburger = $(".hamb");
const navlist = $(".nav-list");
const links = $(".nav-list li");

$(".hamb").click(() => {
  $("#menu").toggleClass("nav-list");
  // $(".nav-list").css("visibility", "visible");
});
