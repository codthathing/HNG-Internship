const detailsSection = document.getElementById("profile-details-section");

export class ProfileDetailsClass {
  #type;
  #topic;
  #text;
  #attributeArray = [];

  constructor (type, topic, text, attributeArray) {
    this.#type = type;
    this.#topic = topic;
    this.#text = text;
    this.#attributeArray = attributeArray;
  }

  render() {
    const div = document.createElement("div");
    div.setAttribute("class", "profile-card-div");

    const span = document.createElement("span");
    span.setAttribute("class", "profile-details-topics");
    span.innerText = this.#topic;

    const mainElement = this.#type === "header" ? document.createElement("h2") : document.createElement("p");
    this.#attributeArray.forEach(({ attribute, value }) => {
      mainElement.setAttribute(attribute, value);
    });
    mainElement.innerText = this.#text;

    div.append(span, mainElement);
    detailsSection.append(div);
  };
}