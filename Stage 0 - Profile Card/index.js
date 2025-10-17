import { ProfileDetailsClass } from "./components/ProfileDetailsClass.js";
import { ProfileSocialsClass } from "./components/ProfileSocialsClass.js";

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
      { text: "LinkedIn", href: "linkedin.com/in/codthating", testId: "test-user-social-linkedin" },
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
