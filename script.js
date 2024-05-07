const input = document.getElementById("coolInput");
const itemsList = document.getElementsByClassName("listItem");

input.addEventListener("input", function (event) {
  const searchTerm = event.target.value.toLowerCase();
  for (let i = 0; i < itemsList.length; i++) {
    const itemText = itemsList[i].textContent.toLowerCase();
    itemsList[i].style.display = itemText.includes(searchTerm)
      ? "block"
      : "none";
  }
});
