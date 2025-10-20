import { changeNavigation, navAnimation } from "../../utils.js";

const ulElement = document.getElementById("header-nav-list");
const h1Element = document.getElementById("header-topic");

export class HeaderLinkClass {
  #link;

  constructor(link) {
    this.#link = link;
  }

  #listFunction = () => {
    h1Element.innerText = this.#link;
    navAnimation("slide-out", "slide-in", false);
    changeNavigation(this.#link);
  };

  render() {
    const li = document.createElement("li");
    li.setAttribute("class", "header-nav-link");
    li.setAttribute("role", "tabpanel");
    li.setAttribute("aria-controls", `${this.#link.replace(" ", "-")}-section`);
    li.setAttribute("tabindex", "0");
    li.innerText = this.#link;
    li.onclick = this.#listFunction;
    li.addEventListener("keydown", (event) => event.key === "Enter" && li.click());

    ulElement.append(li);
  }
}
