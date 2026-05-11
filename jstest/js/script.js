let button = document.getElementById("changeButton");

function changePage() {

  document.body.style.backgroundColor = "pink";

  document.getElementById("message").innerHTML =
    "The page changed after you clicked the button!";
}

button.addEventListener("click", changePage);