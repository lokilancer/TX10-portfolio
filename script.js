// TMMV Robotics — site interactions
(() => {
  const preloader = document.getElementById("preloader");
  const finishLoading = () => preloader?.classList.add("hide");
  window.addEventListener("load", () => window.setTimeout(finishLoading, 500), { once: true });
  window.setTimeout(finishLoading, 2600);

  // Browser connectivity indicator. This reports the visitor's connection state.
  const status = document.getElementById("connectionStatus");
  const statusText = document.getElementById("connectionText");
  function refreshConnection() {
    const online = navigator.onLine;
    status?.classList.toggle("offline", !online);
    if (statusText) statusText.textContent = online ? "SYSTEM ONLINE" : "SYSTEM OFFLINE";
    status?.setAttribute("aria-label", online ? "Browser reports an internet connection" : "Browser reports no internet connection");
  }
  window.addEventListener("online", refreshConnection);
  window.addEventListener("offline", refreshConnection);
  refreshConnection();

  // Mobile navigation
  const menuButton = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuButton?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }));

  // Reveal sections as they enter the viewport
  const revealTargets = document.querySelectorAll(".section, .team-wrap, .activity-wrap, .closing-inner");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();