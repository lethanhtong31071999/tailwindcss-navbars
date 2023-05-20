const searchEl = document.getElementById("search");
if (searchEl) {
  searchEl.addEventListener("focus", () => {
    searchEl.parentElement.classList.add("border", "border-orange-200", "dark:border-orange-700");
  });
  searchEl.addEventListener("focusout", () => {
    searchEl.parentElement.classList.remove(
      "border",
      "border-orange-300",
      "dark:border-orange-700"
    );
  });
}
