export class ProfileSocialsClass {
  #type;
  #header;
  #testId;
  #parentId;
  #childArray = [];

  constructor(type, header, testId, parentId, childArray) {
    this.#type = type;
    this.#header = header;
    this.#testId = testId;
    this.#childArray = childArray;
    this.#parentId = parentId;
  }

  render() {
    const div = document.createElement("div");
    div.setAttribute("class", `profile-card-div ${this.#type === "list" ? "profile-socials-personal" : ""}`);

    const h1 = document.createElement("h1");
    h1.setAttribute("class", "profile-socials-headers");
    h1.innerText = this.#header;

    const containerElement = this.#type === "list" ? document.createElement("ul") : document.createElement("nav");
    containerElement.setAttribute("data-testid", this.#testId);
    containerElement.setAttribute("class", "profile-socials-lists");

    this.#childArray.forEach(({ text, href = "", testId = "" }) => {
      const childElement = this.#type === "list" ? document.createElement("li") : document.createElement("a");
      if (this.#type === "list") {
        childElement.setAttribute("class", "profile-socials-item");
      } else {
        childElement.setAttribute("target", "_blank");
        childElement.setAttribute("class", "profile-socials-link");
        childElement.setAttribute("rel", "noopener noreferrer");
        childElement.setAttribute("href", `https://${href}`);
        childElement.setAttribute("data-testid", testId);
      }
      childElement.innerText = `- ${text}`;
      containerElement.append(childElement);
    });

    div.append(h1, containerElement);
    const parentElement = document.getElementById(this.#parentId);
    if (this.#type !== "list") parentElement.prepend(div);
    else parentElement.append(div);
  }
}
