/**
 * Brusk & Fatima Wedding Invitation
 * ==================================
 * Edit the CONFIG object below to customize names, date, venue, map, and WhatsApp.
 * Replace music file at: assets/music.mp3
 */

const CONFIG = {
  coupleName: "Brusk & Fatima",
  groomName: "Brusk",
  brideName: "Fatima",
  weddingDateText: "Thursday, 09 July 2026",
  countdownDate: "2026-07-09T19:00:00+03:00",
  venueName: "Divan Erbil Hotel",
  venuePlace: "Ballroom",
  venueAddress: "Gulan Street, Erbil, Kurdistan Region, Iraq",
  venueAddressLines: [
    "Divan Erbil Hotel",
    "Gulan Street",
    "Erbil",
    "Kurdistan Region",
    "Iraq"
  ],
  mapUrl: "https://maps.google.com/?q=Divan+Erbil+Hotel",
  whatsappNumber: "9647500000000"
};

/* ============================================
   Image Error Handler (global for onerror attr)
   ============================================ */

function handleImageError(img) {
  const parent = img.parentElement;
  if (parent) {
    parent.classList.add("img-error");
  }
  img.classList.add("img-failed");
}

/* ============================================
   DOM Ready
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initEnvelope();
  initAmbient();
  initCountdown();
  initRevealAnimations();
  initHeroParallax();
  initMusic();
  initRSVP();
});

/* ============================================
   Apply CONFIG to DOM
   ============================================ */

function applyConfig() {
  const heroGroom = document.getElementById("hero-groom");
  const heroBride = document.getElementById("hero-bride");
  const heroDate = document.getElementById("hero-date");
  const venueName = document.getElementById("venue-name");
  const venuePlace = document.getElementById("venue-place");
  const venueAddress = document.getElementById("venue-address");
  const mapBtn = document.getElementById("map-btn");
  const mapIframe = document.getElementById("map-iframe");
  const footerNames = document.getElementById("footer-names");
  const footerDate = document.getElementById("footer-date");
  const footerVenue = document.getElementById("footer-venue");

  if (heroGroom) heroGroom.textContent = CONFIG.groomName;
  if (heroBride) heroBride.textContent = CONFIG.brideName;
  if (heroDate) heroDate.textContent = "09 July 2026";

  if (venueName) venueName.textContent = CONFIG.venueName;
  if (venuePlace) venuePlace.textContent = CONFIG.venuePlace;

  if (venueAddress && CONFIG.venueAddressLines) {
    venueAddress.innerHTML = CONFIG.venueAddressLines.join("<br>");
  }

  if (mapBtn) {
    mapBtn.href = CONFIG.mapUrl;
  }

  if (mapIframe) {
    const embedUrl = buildMapEmbedUrl(CONFIG.mapUrl);
    mapIframe.src = embedUrl;
  }

  if (footerNames) footerNames.textContent = CONFIG.coupleName;
  if (footerDate) footerDate.textContent = CONFIG.weddingDateText;
  if (footerVenue) {
    footerVenue.textContent = `${CONFIG.venueName} ${CONFIG.venuePlace}`;
  }
}

function buildMapEmbedUrl(mapUrl) {
  try {
    const url = new URL(mapUrl);
    const q = url.searchParams.get("q") || CONFIG.venueName;
    return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  } catch {
    return `https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.venueName)}&output=embed`;
  }
}

/* ============================================
   Envelope Opening
   ============================================ */

function initEnvelope() {
  const overlay = document.getElementById("envelope-overlay");
  const envelope = document.getElementById("envelope");
  const waxSeal = document.getElementById("wax-seal");
  const mainContent = document.getElementById("main-content");
  const hint = document.getElementById("envelope-hint");

  if (!overlay || !envelope || !waxSeal) return;

  let isOpen = false;
  let scrollTriggered = false;

  function openEnvelope() {
    if (isOpen) return;
    isOpen = true;

    overlay.classList.add("opening");
    envelope.classList.add("opening", "opened");
    waxSeal.setAttribute("aria-hidden", "true");

    if (hint) hint.style.opacity = "0";

    setTimeout(() => {
      overlay.classList.add("removed");
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.add("envelope-open");

      if (mainContent) {
        mainContent.classList.remove("hidden");
        mainContent.style.visibility = "visible";
      }

      initRevealAnimations(true);

      setTimeout(() => {
        overlay.style.display = "none";
      }, 1000);
    }, 1800);
  }

  waxSeal.addEventListener("click", openEnvelope);

  waxSeal.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openEnvelope();
    }
  });

  function onScrollAttempt() {
    if (isOpen || scrollTriggered) return;
    scrollTriggered = true;
    openEnvelope();
  }

  window.addEventListener(
    "wheel",
    (e) => {
      if (!isOpen && overlay && !overlay.classList.contains("removed")) {
        e.preventDefault();
        onScrollAttempt();
      }
    },
    { passive: false }
  );

  let touchStartY = 0;
  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (isOpen || !overlay || overlay.classList.contains("removed")) return;
    const deltaY = touchStartY - e.touches[0].clientY;
    if (Math.abs(deltaY) > 30) {
      onScrollAttempt();
    }
  }, { passive: true });
}

/* ============================================
   Ambient Petals & Sparkles
   ============================================ */

function initAmbient() {
  const layer = document.getElementById("ambient-layer");
  if (!layer) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const petalCount = 12;
  const sparkleCount = 20;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${8 + Math.random() * 12}s`;
    petal.style.animationDelay = `${Math.random() * 10}s`;
    petal.style.width = `${6 + Math.random() * 8}px`;
    petal.style.height = `${8 + Math.random() * 10}px`;
    layer.appendChild(petal);
  }

  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${3 + Math.random() * 4}s`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    layer.appendChild(sparkle);
  }
}

/* ============================================
   Countdown Timer
   ============================================ */

function initCountdown() {
  const daysEl = document.getElementById("count-days");
  const hoursEl = document.getElementById("count-hours");
  const minutesEl = document.getElementById("count-minutes");
  const secondsEl = document.getElementById("count-seconds");
  const countdownEl = document.getElementById("countdown");
  const todayEl = document.getElementById("countdown-today");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date(CONFIG.countdownDate);
  let prevSeconds = null;

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      if (countdownEl) countdownEl.classList.add("hidden");
      if (todayEl) todayEl.classList.remove("hidden");
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    animateIfChanged(daysEl, days, prevSeconds !== seconds);
    animateIfChanged(hoursEl, hours, false);
    animateIfChanged(minutesEl, minutes, false);
    animateIfChanged(secondsEl, seconds, prevSeconds !== seconds);

    prevSeconds = seconds;
  }

  function animateIfChanged(el, value, shouldAnimate) {
    const formatted = String(value).padStart(2, "0");
    if (el.textContent !== formatted) {
      el.textContent = formatted;
      if (shouldAnimate) {
        el.classList.remove("tick");
        requestAnimationFrame(() => el.classList.add("tick"));
        setTimeout(() => el.classList.remove("tick"), 400);
      }
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* ============================================
   Scroll Reveal (Intersection Observer)
   ============================================ */

let revealObserver = null;

function initRevealAnimations(forceObserve = false) {
  const elements = document.querySelectorAll(".reveal, .reveal-child");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
  }

  elements.forEach((el) => {
    if (forceObserve || !el.classList.contains("visible")) {
      revealObserver.observe(el);
    }
  });
}

/* ============================================
   Hero Parallax
   ============================================ */

function initHeroParallax() {
  const heroBg = document.getElementById("hero-bg");
  const hero = document.getElementById("hero");

  if (!heroBg || !hero) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const scrollProgress = -rect.top / rect.height;
        const translateY = scrollProgress * 40;
        heroBg.style.transform = `translateY(${translateY}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ============================================
   Music Player
   ============================================ */

function initMusic() {
  const btn = document.getElementById("music-btn");
  const audio = document.getElementById("wedding-music");

  if (!btn || !audio) return;

  let isPlaying = false;
  let musicAvailable = true;

  audio.addEventListener("error", () => {
    musicAvailable = false;
  });

  btn.addEventListener("click", async () => {
    if (!musicAvailable) {
      return;
    }

    try {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
        btn.classList.remove("playing");
        btn.setAttribute("aria-label", "Play wedding music");
        btn.setAttribute("aria-pressed", "false");
      } else {
        await audio.play();
        isPlaying = true;
        btn.classList.add("playing");
        btn.setAttribute("aria-label", "Pause wedding music");
        btn.setAttribute("aria-pressed", "true");
      }
    } catch {
      musicAvailable = false;
    }
  });
}

/* ============================================
   RSVP via WhatsApp
   ============================================ */

function initRSVP() {
  const form = document.getElementById("rsvp-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("rsvp-name");
    const phone = document.getElementById("rsvp-phone");
    const guests = document.getElementById("rsvp-guests");
    const attendRadios = form.querySelectorAll('input[name="attend"]');
    const message = document.getElementById("rsvp-message");

    if (!name?.value.trim()) {
      name?.focus();
      name?.setAttribute("aria-invalid", "true");
      return;
    }

    if (!phone?.value.trim()) {
      phone?.focus();
      phone?.setAttribute("aria-invalid", "true");
      return;
    }

    let attendValue = "Yes";
    attendRadios.forEach((radio) => {
      if (radio.checked) attendValue = radio.value;
    });

    const messageText = [
      "Wedding RSVP",
      "",
      `Name: ${name.value.trim()}`,
      `Phone: ${phone.value.trim()}`,
      `Guests: ${guests?.value || "1"}`,
      `Attending: ${attendValue}`,
      `Message: ${message?.value.trim() || "-"}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}
