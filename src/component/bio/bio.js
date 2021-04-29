import "./style.scss";
function component() {
  const element = document.createElement("div");

  element.innerHTML = "coooooooooool";
  element.classList.add("ahmed");
  return element;
}

document.body.appendChild(component());
