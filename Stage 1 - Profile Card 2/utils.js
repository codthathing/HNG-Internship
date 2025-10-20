export const changeNavigation = (currentLink) => {
  sessionStorage.setItem("CURRENT_LINK", currentLink);
  document.getElementById("header-topic").innerText = currentLink;

  document.getElementById("contact-us-section").style.display = currentLink === "contact us" ? "block" : "none";
  document.getElementById("profile-section").style.display = currentLink === "profile" ? "block" : "none";
  document.getElementById("about-me-section").style.display = currentLink === "about me" ? "block" : "none";
};

export function navAnimation(add, remove, main) {
  const nav = document.getElementById("header-nav");
  nav.classList.remove(remove);
  nav.classList.add(add);
  if (main) {
    nav.style.display = "flex";
  } else {
    nav.addEventListener(
      "animationend",
      function animationEnd() {
        nav.style.display = "none";
        nav.classList.remove("slide-out");
        nav.removeEventListener("animationend", animationEnd);
      },
      { once: true }
    );
  }
}

export function showAboutMe(aboutSection) {
  document.querySelector('[data-testid="test-about-bio"]').style.display = aboutSection === "bio" ? "block" : "none";
  document.querySelector('[data-testid="test-about-goals"]').style.display = aboutSection === "goals" ? "block" : "none";
  document.querySelector('[data-testid="test-about-confidence"]').style.display = aboutSection === "confidence" ? "block" : "none";
  document.querySelector('[data-testid="test-about-future-note"]').style.display = aboutSection === "future-note" ? "block" : "none";
  document.querySelector('[data-testid="test-about-extra"]').style.display = aboutSection === "extra" ? "block" : "none";
}
