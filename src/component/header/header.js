import "./style.css";
const element = document.createElement("header");

element.innerHTML = "webpack";
element.classList.add("abc");
import photo from "../../assets/image.png";
const img = document.createElement("img");
img.src = photo;
img.style.width = "40px";
img.style.height = "40px";
element.appendChild(img);
document.body.appendChild(element);
