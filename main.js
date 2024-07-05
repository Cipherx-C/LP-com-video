function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const isVisible = answer.style.display === "block";

  if (isVisible) {
      answer.style.display = "none";
  } else {
      answer.style.display = "block";
  }
}

