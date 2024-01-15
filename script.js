  var link = document.querySelector(".login-link");
  var popup = document.querySelector(".modal-login");
  var popupClose = popup.querySelector(".modal-close");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("открыли");
    popup.classList.add("modal-show");
    login.focus();
  });

  popupClose.addEventListener("click", function(evt){
    evt.preventDefault();
    console.log("закрыли");
    popup.classList.remove("modal-show");
  });


