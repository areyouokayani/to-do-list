const addBtn = document.querySelector("#addbtn");
const removeAllBtn = document.querySelector("#removeBtn");
const form = document.querySelector("form");
const input = document.querySelector(".input");
const list = document.querySelector("#toDoList");
const instructions = document.querySelector(".instructions");

function updateVisibility() {
  if (list.children.length <= 0) {
    removeAllBtn.classList.add("hidden");
    instructions.classList.add("hidden");
  }

  if (list.children.length > 0) {
    removeAllBtn.classList.remove("hidden");
    instructions.classList.remove("hidden");
  }
}

updateVisibility();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newToDo = input.value;
  if (input.value !== "") {
    const newLI = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newToDo;
    newLI.append(span);
    list.append(newLI);

    const deleteIndBtn = document.createElement("button");
    deleteIndBtn.innerText = "delete";
    newLI.append(deleteIndBtn);
    deleteIndBtn.addEventListener("click", () => {
      deleteIndBtn.parentElement.remove();
      updateVisibility();
    });

    newLI.addEventListener("dblclick", () => {
      newLI.style.textDecoration =
        newLI.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    newLI.addEventListener("click", () => {
      span.setAttribute("contenteditable", true);
    });

    input.value = "";

    updateVisibility();
  }
});

removeAllBtn.onclick = function (e) {
  list.innerText = "";
  updateVisibility();
};
