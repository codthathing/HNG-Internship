import { HeaderLinkClass } from "./components/layout/HeaderLinkClass.js";
import { changeNavigation, navAnimation } from "./utils.js";
import { ProfileDetailsClass } from "./components/profile/ProfileDetailsClass.js";
import { ProfileSocialsClass } from "./components/profile/ProfileSocialsClass.js";
import { ContactInputClass } from "./components/contact/ContactInputClass.js";
import { AboutArticleClass } from "./components/about/AboutArticleClass.js";

const currentLink = sessionStorage.getItem("CURRENT_LINK") || "contact";
changeNavigation(currentLink);

const headerLinkObject = ["contact us", "profile", "about me"];
headerLinkObject.forEach((link) => {
  const newLinkObject = new HeaderLinkClass(link);
  newLinkObject.render();
});

document.getElementById("header-menu-icon").addEventListener("click", () => {
  navAnimation("slide-in", "slide-out", true);
});
document.getElementById("header-cancel-icon").addEventListener("click", () => {
  navAnimation("slide-out", "slide-in", false);
});

setTimeout(() => {
  // Profile Javascript
  const detailsObjectArray = [
    {
      type: "header",
      topic: "name",
      text: "akinwunmi oluwasegun",
      attributeArray: [
        { attribute: "aria-label", value: "user-name" },
        { attribute: "id", value: "profile-details-name" },
        { attribute: "data-testid", value: "test-user-name" },
      ],
    },
    {
      type: "paragraph",
      topic: "biography",
      text: "I'm a frontend devloper fascinated by the idea of creating real-world projects, and I have been able to build high-performing web applications with cross-browser compatibility, interactivity, and standout features. ",
      attributeArray: [
        { attribute: "id", value: "profile-details-biography" },
        { attribute: "data-testid", value: "test-user-bio" },
      ],
    },
  ];

  detailsObjectArray.forEach(({ type, topic, text, attributeArray }) => {
    const newDetailsObject = new ProfileDetailsClass(type, topic, text, attributeArray);
    newDetailsObject.render();
  });

  const socialsObjectArray = [
    {
      type: "link",
      header: "Social Links",
      testId: "test-user-social-links",
      parentId: "profile-socials-section",
      childArray: [
        { text: "Portfolio", href: "codthathing-dev.vercel.app", testId: "test-user-social-portfolio" },
        { text: "X", href: "x.com/codthathing", testId: "test-user-social-x" },
        { text: "LinkedIn", href: "linkedin.com/in/codthathing", testId: "test-user-social-linkedin" },
        { text: "Github", href: "github.com/codthathing", testId: "test-user-social-github" },
      ],
    },
    { type: "list", header: "Hobbies", testId: "test-user-hobbies", parentId: "profile-socials-main", childArray: [{ text: " Love playing and watching football first and foremost" }, { text: "Then I also love exploring new tech tools and frameworks." }, { text: "Funny enough (lmao) I like taking moments of quiet focus i.e brainstorming new project ideas (hmmm! inner peace) and real men stuffs." }, { text: "One more time I love coding." }] },
    { type: "list", header: "Dislikes", testId: "test-user-dislikes", parentId: "profile-socials-main", childArray: [{ text: "I dislike slow progress, especially when it’s due to avoidable mistakes." }, { text: "Never interested in unnecessary arguments or drama (migranes man)." }, { text: "I don’t enjoy doing things without a clear purpose or direction (man of purpose)." }, { text: "Not a fan of crowded or noisy places." }] },
  ];

  socialsObjectArray.forEach(({ type, header, testId, parentId, childArray }) => {
    const newSocialsObject = new ProfileSocialsClass(type, header, testId, parentId, childArray);
    newSocialsObject.render();
  });

  function currentTime() {
    const presentTime = Date.now();
    document.getElementById("profile-card-time").textContent = `${presentTime} ms`;
  }

  currentTime();
  setInterval(() => {
    currentTime();
  }, 60000);

  // Contact Javacript
  const contactInputObjectDetails = [
    { id: "contact-input-name", label: "name", testId: "test-contact-name", describedById: "test-contact-error-name", type: "text" },
    { id: "contact-input-email", label: "email", testId: "test-contact-email", describedById: "test-contact-error-email", type: "email", placeholder: "name@example.com" },
    { id: "contact-input-subject", label: "subject", testId: "test-contact-subject", describedById: "test-contact-error-subject", type: "text" },
    { id: "contact-input-message", label: "message", testId: "test-contact-message", describedById: "test-contact-error-message", type: "text", placeholder: "(at least 10 characters)" },
  ];

  contactInputObjectDetails.forEach(({ id, label, testId, describedById, type, placeholder }) => {
    const newInputObject = new ContactInputClass(id, label, testId, describedById, type, placeholder);
    newInputObject.render();
  });

  const nameInputElement = document.getElementById("contact-input-name");
  const emailInputElement = document.getElementById("contact-input-email");
  const subjectInputElement = document.getElementById("contact-input-subject");
  const messageInputElement = document.getElementById("contact-input-message");

  document.getElementById("contact-submit-button").addEventListener("click", (event) => {
    event.preventDefault();
    const nameErrorElement = document.getElementById("test-contact-error-name");
    const emailErrorElement = document.getElementById("test-contact-error-email");
    const subjectErrorElement = document.getElementById("test-contact-error-subject");
    const messageErrorElement = document.getElementById("test-contact-error-message");
    function clearErrorElements() {
      nameErrorElement.innerText = "";
      emailErrorElement.innerText = "";
      subjectErrorElement.innerText = "";
      messageErrorElement.innerText = "";
    }
    clearErrorElements();

    if (!nameInputElement.value.trim()) nameErrorElement.innerText = "Name is required";
    if (!emailInputElement.value.trim()) {
      emailErrorElement.innerText = "Email is required";
    } else {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInputElement.value)) emailErrorElement.innerText = "Email must be in correct format";
    }
    if (!subjectInputElement.value.trim()) subjectErrorElement.innerText = "Subject is required";
    if (!messageInputElement.value.trim()) {
      messageErrorElement.innerText = "Message is required";
    } else {
      if (messageInputElement.value.length < 10) messageErrorElement.innerText = "Message must atleast be 10";
    }

    if (!nameErrorElement.innerText && !emailErrorElement.innerText && !subjectErrorElement.innerText && !messageErrorElement.innerText) {
      document.getElementById("contact-success-text").style.display = "block";
      clearErrorElements();
      nameInputElement.value = "";
      emailInputElement.value = "";
      subjectInputElement.value = "";
      messageInputElement.value = "";
    }
  });

  // About Me Javascript
  const aboutArticleObjectDetails = [
    { topic: "Bio", text: "I'm a frontend devloper fascinated by the idea of creating real-world projects, and I have been able to build high-performing web applications with cross-browser compatibility, interactivity, and standout features.", testId: "test-about-bio" },
    { topic: "Goals in this program", text: "To get myself used to project deadlines and sharpen my skills, and also practice time management, tackle challenging tasks daily, and reflect on progress weekly", testId: "test-about-goals" },
    { topic: "Areas of low confidence", text: "I currently have no particular area of low confidence, which allows me to approach challenges with clarity, embrace growth opportunities, and maintain a steady focus on improving my skills and achieving meaningful goals consistently.", testId: "test-about-confidence" },
    { topic: "Note to future self", text: "To my future self: keep building and practicing with patience and persistence, because the time will come when your efforts pay off and your dreams begin to unfold into reality.", testId: "test-about-future-note" },
    { topic: "Extra thoughts", text: "Nothing more to say, just keep grinding!!!!!", testId: "test-about-extra" },
  ];

  aboutArticleObjectDetails.forEach(({ topic, text, testId }) => {
    const newAboutObject = new AboutArticleClass(topic, text, testId);
    newAboutObject.render();
  });
}, 0);
