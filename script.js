let textElem = document.querySelector(".text");
const btnAdd = document.querySelector(".add");
const btnRemove = document.querySelector(".remove");
const container = document.querySelector(".text-file");

function AddHandler() {
  const listElem = document.createElement("div");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.style.marginLeft = "15px";
  listElem.appendChild(checkBox);

  const saveText = document.createElement("p");
  saveText.innerText = textElem.value;
  saveText.style.marginLeft = "15px";
  listElem.appendChild(saveText);

  container.appendChild(listElem);

  textElem.value = "";

  checkBox.onclick = function() {
    console.log(checkBox.value);
    if (checkBox.value == "on") {
      listElem.style.textDecoration = "line-through";
      checkBox.value = "off";
    } else if (checkBox.value == "off") {
      listElem.style.textDecoration = "initial";
      checkBox.value = "on";
    }
  };
}

function RemoveHandler() {
  container.removeChild(container.lastChild);
}

btnAdd.addEventListener("click", AddHandler);
btnRemove.addEventListener("click", RemoveHandler);
