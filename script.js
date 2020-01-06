let textElem = document.querySelector(".text");
const btnAdd = document.querySelector(".add");
const btnClear = document.querySelector(".clear");
const container = document.querySelector(".text-file");

function AddHandler() {
  const listElem = document.createElement("div");

  const btnRemove = document.createElement("input");
  btnRemove.type = "button";
  btnRemove.value = "X";
  btnRemove.classList.add("btn-remove");
  listElem.appendChild(btnRemove);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("checkbox");
  listElem.appendChild(checkBox);

  const saveText = document.createElement("p");
  saveText.innerText = textElem.value;
  saveText.style.marginLeft = "6px";
  listElem.appendChild(saveText);

  container.appendChild(listElem);

  textElem.value = "";

  checkBox.onclick = function() {
    if (checkBox.checked === true) {
      saveText.style.textDecoration = "line-through";
      saveText.style.color = "red";
    } else {
      saveText.style.textDecoration = "initial";
      saveText.style.color = "black";
    }
  };

  btnRemove.onclick = function(e) {
    let remove = e.target.parentNode;
    container.removeChild(remove);
  };
}

function ClearHandler() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

btnAdd.addEventListener("click", AddHandler);
btnClear.addEventListener("click", ClearHandler);
