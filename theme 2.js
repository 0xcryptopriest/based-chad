const themeSelect = document.getElementById("themeSelect");

themeSelect.addEventListener("change", () => {

  document.body.classList.remove(
    "light-theme",
    "dark-theme"
  );

  if (themeSelect.value === "light") {
    document.body.classList.add("light-theme");
  }

  if (themeSelect.value === "dark") {
    document.body.classList.add("dark-theme");
  }
});