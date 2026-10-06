import { animate } from "motion";

const HEADER_OFFSET = 80;
let running = null;

function scrollToY(y) {
  running?.stop();
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduceMotion) {
    window.scrollTo(0, y);
    return;
  }

  running = animate(window.scrollY, y, {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
    onUpdate: (value) => window.scrollTo(0, value),
  });
}

// Save where the visitor is now, on the current history entry.
function rememberPosition() {
  window.history.replaceState(
    { ...window.history.state, scrollY: window.scrollY },
    "",
  );
}

function navigate(y, url) {
  rememberPosition();
  window.history.pushState({ ...window.history.state, scrollY: y }, "", url);
  scrollToY(y);
}

export function goToSection(event, id) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  const y = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  navigate(Math.max(0, y), `#${id}`);
}

export function goToTop(event) {
  event.preventDefault();
  navigate(0, window.location.pathname);
}

// Call once when the app starts. Handles the back and forward buttons.
export function enableHistoryScroll() {
  window.history.scrollRestoration = "manual";
  const onPopState = (event) => scrollToY(event.state?.scrollY ?? 0);
  window.addEventListener("popstate", onPopState);
  return () => window.removeEventListener("popstate", onPopState);
}
