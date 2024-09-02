const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  const label = input.previousElementSibling;

  input.addEventListener("focus", () => {
    label.style.transform = "translateY(-25px)";
    label.style.transition = "transform 0.3s ease";
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      label.style.transform = "translateY(-8px)";
    }
  });
});
