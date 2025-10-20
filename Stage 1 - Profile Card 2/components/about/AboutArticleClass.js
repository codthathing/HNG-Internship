import { showAboutMe } from "../../utils.js";

const aboutMainElement = document.getElementById("about-main");

export class AboutArticleClass {
  #topic;
  #text;
  #testId;

  constructor(topic, text, testId) {
    this.#topic = topic;
    this.#text = text;
    this.#testId = testId;
  }

  render() {
    const article = document.createElement("article");
    article.setAttribute("class", "about-articles");

    const div = document.createElement("div");
    div.setAttribute("class", "about-article-divs");

    const h1 = document.createElement("h1");
    h1.setAttribute("class", "about-article-topics");
    h1.innerText = this.#topic;

    const i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-plus about-article-icon");
    i.setAttribute("tabindex", "0");
    i.onclick = () => showAboutMe(this.#testId.replace("test-about-", ""));
    i.addEventListener("keydown", (event) => event.key === "Enter" && i.click());

    div.append(h1, i);

    const p = document.createElement("p");
    p.setAttribute("class", "about-article-texts");
    p.setAttribute("data-testid", this.#testId);
    p.innerText = this.#text;

    article.append(div, p);
    aboutMainElement.append(article);
  }
}
