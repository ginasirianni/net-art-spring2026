function changePage() {

  document.body.classList.toggle("transformed");

  const title = document.getElementById("title");
  const text = document.getElementById("text");

  if (title.innerHTML === "Quiet Mode") {

    title.innerHTML = "Chaos Mode";

    text.innerHTML =
      "The page changes from calm and dark into something loud, colorful, and energetic.";

  } else {

    title.innerHTML = "Quiet Mode";

    text.innerHTML =
      "Click the button to transform the page.";

  }

}