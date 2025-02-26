document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.getElementById("no");
  const questionDiv = document.getElementById("question");
  const answerDiv = document.getElementById("answer");

  answerDiv.style.display = "none";

  noButton.addEventListener("click", function () {
    noButton.style.position = "absolute";
    noButton.style.top = Math.random() * window.innerHeight + "px";
    noButton.style.left = Math.random() * window.innerWidth + "px";
  });

  document.getElementById("yes").addEventListener("click", function () {
    questionDiv.style.display = "none";
    answerDiv.style.display = "block";
  });
});
