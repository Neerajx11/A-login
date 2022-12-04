$(".shift-signUp").on("click", function () {
  $(this).toggleClass("fa-eye-slash");

  let signUppass = document.getElementById("sp_pass");
  signUppass.type == "password"
    ? signUppass.setAttribute("type", "text")
    : signUppass.setAttribute("type", "password");
});

// Toggle year and branch while register
$("#ifStudent").hide();
$(".op-show").change(function () {
  $(this).prop("checked") ? $("#ifStudent").slideDown("fast") : "";
});
$(".op-hide").change(function () {
  $(this).prop("checked") ? $("#ifStudent").slideUp("fast") : "";
});
