const contactMainElement =  document.getElementById("contact-main");

export class ContactInputClass {
  #id;
  #label;
  #testId;
  #describedById;
  #type;
  #placeholder;

  constructor (id, label, testId, describedById, type, placeholder) {
    this.#id = id;
    this.#label = label;
    this.#testId = testId;
    this.#describedById = describedById;
    this.#type = type;
    this.#placeholder = placeholder;
  }

  render() {
    const div = document.createElement("div");
    div.setAttribute("class", "contact-input-divs");

    const main = document.createElement("main");
    main.setAttribute("class", "contact-input-main");

    const label = document.createElement("label");
    label.setAttribute("for", this.#id);
    label.setAttribute("class", "contact-input-labels");
    label.innerText = this.#label;

    const input = document.createElement("input");
    input.setAttribute("class", "contact-input-fields");
    input.required = true;
    input.setAttribute("data-testid", this.#testId);
    input.setAttribute("aria-describedby", this.#describedById);
    input.setAttribute("id", this.#id);
    input.setAttribute("type", this.#type);
    if (this.#placeholder) input.setAttribute("placeholder", this.#placeholder);

    main.append(label, input);

    const span = document.createElement("span");
    span.setAttribute("id", this.#describedById);
    span.setAttribute("class", "contact-input-error");

    div.append(main, span);
    contactMainElement.append(div);
  }
}