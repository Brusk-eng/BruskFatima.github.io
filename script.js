/**
 * Brusk & Fatima Wedding Invitation — Bilingual (English / Kurdish Sorani)
 * =======================================================================
 * Edit the CONFIG object below to customize names, date, venue, map, WhatsApp.
 * Each text field supports two languages: { en: "...", ku: "..." }.
 * Replace music file at: assets/music.mp3
 */

const CONFIG = {
  // Couple names (en = Latin, ku = Kurdish Sorani script)
  groomName: { en: "Brusk", ku: "بروسک" },
  brideName: { en: "Fatima", ku: "فاتیمە" },
  coupleName: { en: "Brusk & Fatima", ku: "بروسک و فاتیمە" },

  // Dates (shown text only — the live countdown uses countdownDate below)
  weddingDateText: { en: "Thursday, 09 July 2026", ku: "پێنجشەممە، ٩ی تەمموزی ٢٠٢٦" },
  heroDate: { en: "09 July 2026", ku: "٩ی تەمموزی ٢٠٢٦" },

  // Live countdown target (ISO 8601 with Asia/Baghdad offset +03:00)
  countdownDate: "2026-07-09T19:00:00+03:00",

  // Venue
  venueName: { en: "Divan Erbil Hotel", ku: "هۆتێلی دیڤان هەولێر" },
  venuePlace: { en: "Ballroom", ku: "هۆڵی ئاهەنگ" },
  venueAddressLines: {
    en: ["Divan Erbil Hotel", "Gulan Street", "Erbil", "Kurdistan Region", "Iraq"],
    ku: ["هۆتێلی دیڤان هەولێر", "شەقامی گوڵان", "هەولێر", "هەرێمی کوردستان", "عێراق"]
  },

  // Google Maps — easy to replace
  mapUrl: "https://maps.google.com/?q=Divan+Erbil+Hotel",

  // WhatsApp RSVP number (no + sign)
  whatsappNumber: "9647500000000"
};

/* ============================================
   Translations (static UI strings)
   ============================================ */

const TRANSLATIONS = {
  en: {
    "envelope.invited": "You are invited",
    "envelope.hint": "Tap the seal to open",
    "envelope.openAria": "Open wedding invitation",
    "controls.langAria": "Switch language to Kurdish",
    "controls.musicPlayAria": "Play wedding music",
    "controls.musicPauseAria": "Pause wedding music",
    "hero.weddingDay": "Wedding Day",
    "hero.thursday": "Thursday",
    "hero.scroll": "Scroll Down",
    "blessing.soul1": "Two Souls",
    "blessing.soul2": "One Destiny",
    "blessing.sub": "A Lifetime Written by Allah",
    "blessing.dear": "Dear Family & Friends,",
    "blessing.msg1": "With gratitude to Allah, we warmly invite you to celebrate the beginning of our forever.",
    "blessing.msg2": "Your love, prayers, and presence will make this day truly unforgettable.",
    "countdown.title": "The Celebration Begins In",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",
    "countdown.today": "Today is the day.",
    "schedule.title": "Schedule of Events",
    "schedule.s1": "Guest Arrival",
    "schedule.s2": "Bride & Groom Grand Entrance",
    "schedule.s3": "Dinner Service",
    "schedule.s4": "Cake Cutting",
    "schedule.s5": "First Dance",
    "schedule.s6": "Celebration & Photography",
    "schedule.s7": "Closing Ceremony",
    "venue.title": "Venue",
    "venue.maps": "Open in Google Maps",
    "story.title": "Our Story",
    "story.s1t": "First Meeting",
    "story.s1p": "Where it all began.",
    "story.s2t": "Engagement",
    "story.s2p": "The promise of forever.",
    "story.s3t": "Wedding Day",
    "story.s3p": "The beginning of our new chapter.",
    "story.s4t": "Forever Begins",
    "story.s4p": "A lifetime written by Allah.",
    "rsvp.title": "RSVP",
    "rsvp.subtitle": "Kindly confirm your attendance.",
    "rsvp.name": "Full Name",
    "rsvp.namePh": "Your full name",
    "rsvp.phone": "Phone Number",
    "rsvp.phonePh": "Your phone number",
    "rsvp.guests": "Number of Guests",
    "rsvp.attend": "Will Attend?",
    "rsvp.yes": "Yes",
    "rsvp.no": "No",
    "rsvp.message": "Message / Dua",
    "rsvp.messagePh": "Share your wishes or dua",
    "rsvp.submit": "Send RSVP via WhatsApp",
    "rsvp.note": "Your RSVP will be sent through WhatsApp.",
    "dress.title": "Dress Code",
    "dress.main": "Elegant Formal",
    "dress.ladies": "Ladies",
    "dress.ladiesVal": "Evening Dresses",
    "dress.gentlemen": "Gentlemen",
    "dress.gentlemenVal": "Suit or Formal Attire",
    "dress.note": "Soft colors and classic styles are warmly appreciated.",
    "gift.title": "A Small Note",
    "gift.text": "Your love, prayers, and presence are the greatest gifts we could ever receive.",
    "footer.love": "With Love",
    // WhatsApp message labels
    "wa.header": "Wedding RSVP",
    "wa.name": "Name",
    "wa.phone": "Phone",
    "wa.guests": "Guests",
    "wa.attending": "Attending",
    "wa.message": "Message"
  },
  ku: {
    "envelope.invited": "بانگهێشتکراویت",
    "envelope.hint": "مۆرەکە دابگرە بۆ کردنەوە",
    "envelope.openAria": "کردنەوەی بانگهێشتنامەی زەماوەند",
    "controls.langAria": "گۆڕینی زمان بۆ ئینگلیزی",
    "controls.musicPlayAria": "لێدانی مۆسیقای زەماوەند",
    "controls.musicPauseAria": "ڕاگرتنی مۆسیقا",
    "hero.weddingDay": "ڕۆژی هاوسەرگیری",
    "hero.thursday": "پێنجشەممە",
    "hero.scroll": "بەرەوخوار بڕۆ",
    "blessing.soul1": "دوو ڕۆح",
    "blessing.soul2": "یەک چارەنووس",
    "blessing.sub": "ژیانێک کە خودا نووسیویەتی",
    "blessing.dear": "خێزان و هاوڕێیانی ئازیز،",
    "blessing.msg1": "بە سوپاسەوە بۆ خودا، بە دڵخۆشییەوە بانگهێشتتان دەکەین بۆ ئاهەنگی دەستپێکی هەمیشەییمان.",
    "blessing.msg2": "خۆشەویستی، نوێژ و ئامادەبوونتان ئەم ڕۆژە دەکاتە ڕۆژێکی هەرگیز لەبیرنەکراو.",
    "countdown.title": "ئاهەنگەکە دەستپێدەکات لە",
    "countdown.days": "ڕۆژ",
    "countdown.hours": "کاتژمێر",
    "countdown.minutes": "خولەک",
    "countdown.seconds": "چرکە",
    "countdown.today": "ئەمڕۆ ئەو ڕۆژەیە.",
    "schedule.title": "خشتەی بەرنامەکان",
    "schedule.s1": "گەیشتنی میوانان",
    "schedule.s2": "هاتنەژوورەوەی بووک و زاوا",
    "schedule.s3": "خواردنی ئێوارە",
    "schedule.s4": "بڕینی کێک",
    "schedule.s5": "یەکەم سەما",
    "schedule.s6": "ئاهەنگ و وێنەگرتن",
    "schedule.s7": "ئاهەنگی کۆتایی",
    "venue.title": "شوێن",
    "venue.maps": "کردنەوە لە گووگڵ ماپس",
    "story.title": "چیرۆکی ئێمە",
    "story.s1t": "یەکەم چاوپێکەوتن",
    "story.s1p": "لێرەوە هەموو شتێک دەستیپێکرد.",
    "story.s2t": "نیشانکردن",
    "story.s2p": "بەڵێنی هەمیشەیی.",
    "story.s3t": "ڕۆژی هاوسەرگیری",
    "story.s3p": "دەستپێکی بەشێکی نوێی ژیانمان.",
    "story.s4t": "هەمیشەیی دەستپێدەکات",
    "story.s4p": "ژیانێک کە خودا نووسیویەتی.",
    "rsvp.title": "دڵنیاکردنەوەی ئامادەبوون",
    "rsvp.subtitle": "تکایە ئامادەبوونتان دڵنیا بکەنەوە.",
    "rsvp.name": "ناوی تەواو",
    "rsvp.namePh": "ناوی تەواوت بنووسە",
    "rsvp.phone": "ژمارەی مۆبایل",
    "rsvp.phonePh": "ژمارەی مۆبایلت بنووسە",
    "rsvp.guests": "ژمارەی میوانان",
    "rsvp.attend": "ئامادە دەبیت؟",
    "rsvp.yes": "بەڵێ",
    "rsvp.no": "نەخێر",
    "rsvp.message": "نامە / دۆعا",
    "rsvp.messagePh": "ئاواتەکانت یان دۆعا بنووسە",
    "rsvp.submit": "ناردنی بەشداری لە ڕێگەی واتساپ",
    "rsvp.note": "بەشدارییەکەت لە ڕێگەی واتساپەوە دەنێردرێت.",
    "dress.title": "جلوبەرگ",
    "dress.main": "فەرمی و شیک",
    "dress.ladies": "خانمان",
    "dress.ladiesVal": "جلی ئێوارە",
    "dress.gentlemen": "پیاوان",
    "dress.gentlemenVal": "کۆت و جلی فەرمی",
    "dress.note": "ڕەنگی نەرم و ستایلی کلاسیک بە گەرمی پێشوازییان لێ دەکرێت.",
    "gift.title": "تێبینییەکی بچووک",
    "gift.text": "خۆشەویستی، نوێژ و ئامادەبوونتان گەورەترین دیارین کە دەتوانین وەریبگرین.",
    "footer.love": "بە خۆشەویستییەوە",
    "wa.header": "بەشداری زەماوەند",
    "wa.name": "ناو",
    "wa.phone": "مۆبایل",
    "wa.guests": "میوان",
    "wa.attending": "ئامادەبوون",
    "wa.message": "نامە"
  }
};

const LANG_STORAGE_KEY = "bf-wedding-lang";
let currentLang = "en";

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.en[key] || key;
}

/* ============================================
   Image Error Handler (global for onerror attr)
   ============================================ */

function handleImageError(img) {
  const parent = img.parentElement;
  if (parent) parent.classList.add("img-error");
  img.classList.add("img-failed");
}

/* ============================================
   DOM Ready
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initLanguageSplash();
  initEnvelope();
  initAmbient();
  initMagicStardust();
  initCountdown();
  initRevealAnimations();
  initHeroParallax();
  initMusic();
  initRSVP();
});

/* ============================================
   Language / i18n Engine
   ============================================ */

function initLanguage() {
  let saved = null;
  try {
    saved = localStorage.getItem(LANG_STORAGE_KEY);
  } catch {
    saved = null;
  }
  if (saved === "en" || saved === "ku") {
    currentLang = saved;
  }
  applyLanguage(currentLang, { skipSweep: true });
}

function applyLanguage(lang, options = {}) {
  currentLang = lang === "ku" ? "ku" : "en";

  const html = document.documentElement;
  html.setAttribute("lang", currentLang === "ku" ? "ckb" : "en");
  html.setAttribute("dir", currentLang === "ku" ? "rtl" : "ltr");

  document.body.classList.toggle("lang-ku", currentLang === "ku");
  document.body.classList.toggle("lang-en", currentLang === "en");

  // Static text
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });

  // ARIA labels
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", t(key));
  });

  // Language toggle shows the OTHER language label
  const flag = document.getElementById("lang-toggle-flag");
  if (flag) flag.textContent = currentLang === "ku" ? "EN" : "کوردی";

  // Dynamic config-driven text
  applyConfig(currentLang);

  // Persist
  try {
    localStorage.setItem(LANG_STORAGE_KEY, currentLang);
  } catch {
    /* storage unavailable — ignore */
  }

  if (!options.skipSweep) triggerMagicSweep();
}

function initLanguageSplash() {
  const splash = document.getElementById("lang-splash");
  const overlay = document.getElementById("envelope-overlay");
  if (!splash) return;

  const choices = splash.querySelectorAll(".lang-choice");
  choices.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyLanguage(lang, { skipSweep: true });
      revealEnvelope();
    });
  });

  function revealEnvelope() {
    splash.classList.add("dismissed");
    if (overlay) {
      overlay.classList.remove("envelope-hidden");
      overlay.setAttribute("aria-hidden", "false");
    }
    triggerMagicSweep();
    setTimeout(() => {
      splash.style.display = "none";
    }, 900);
  }
}

/* ============================================
   Apply CONFIG to DOM (language-aware)
   ============================================ */

function pick(field, lang) {
  if (field && typeof field === "object" && !Array.isArray(field)) {
    return field[lang] !== undefined ? field[lang] : field.en;
  }
  return field;
}

function applyConfig(lang) {
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

  if (heroGroom) heroGroom.textContent = pick(CONFIG.groomName, lang);
  if (heroBride) heroBride.textContent = pick(CONFIG.brideName, lang);
  if (heroDate) heroDate.textContent = pick(CONFIG.heroDate, lang);

  if (venueName) venueName.textContent = pick(CONFIG.venueName, lang);
  if (venuePlace) venuePlace.textContent = pick(CONFIG.venuePlace, lang);

  const addrLines = pick(CONFIG.venueAddressLines, lang);
  if (venueAddress && Array.isArray(addrLines)) {
    venueAddress.innerHTML = addrLines.join("<br>");
  }

  if (mapBtn) mapBtn.href = CONFIG.mapUrl;

  if (mapIframe && !mapIframe.src) {
    mapIframe.src = buildMapEmbedUrl(CONFIG.mapUrl);
  }

  if (footerNames) footerNames.textContent = pick(CONFIG.coupleName, lang);
  if (footerDate) footerDate.textContent = pick(CONFIG.weddingDateText, lang);
  if (footerVenue) {
    footerVenue.textContent = `${pick(CONFIG.venueName, lang)} ${pick(CONFIG.venuePlace, lang)}`;
  }
}

function buildMapEmbedUrl(mapUrl) {
  try {
    const url = new URL(mapUrl);
    const q = url.searchParams.get("q") || pick(CONFIG.venueName, "en");
    return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  } catch {
    return `https://maps.google.com/maps?q=${encodeURIComponent(pick(CONFIG.venueName, "en"))}&output=embed`;
  }
}

/* ============================================
   Language Toggle (floating)
   ============================================ */

function bindLanguageToggle() {
  const toggle = document.getElementById("lang-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    applyLanguage(currentLang === "ku" ? "en" : "ku");
  });
}

/* ============================================
   Magic Shimmer Sweep (on language switch)
   ============================================ */

function triggerMagicSweep() {
  const sweep = document.getElementById("magic-sweep");
  if (!sweep) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  sweep.classList.remove("active");
  // force reflow to restart animation
  void sweep.offsetWidth;
  sweep.classList.add("active");
  setTimeout(() => sweep.classList.remove("active"), 1100);
}

/* ============================================
   Magic Stardust Trail (pointer / touch)
   ============================================ */

function initMagicStardust() {
  const layer = document.getElementById("magic-layer");
  if (!layer) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const colors = ["#c9a962", "#e8d5a8", "#fff4d6", "#e8c4c4"];
  let lastSpawn = 0;
  const minGap = 38; // ms between stars (throttle)

  function spawn(x, y) {
    const now = performance.now();
    if (now - lastSpawn < minGap) return;
    lastSpawn = now;

    const star = document.createElement("span");
    star.className = "stardust";
    const size = 5 + Math.random() * 8;
    const dx = (Math.random() - 0.5) * 40;
    const dy = 20 + Math.random() * 40;
    const rot = (Math.random() - 0.5) * 240;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    star.style.setProperty("--dx", `${dx}px`);
    star.style.setProperty("--dy", `${dy}px`);
    star.style.setProperty("--rot", `${rot}deg`);
    layer.appendChild(star);
    setTimeout(() => star.remove(), 1100);
  }

  window.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    spawn(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    if (touch) spawn(touch.clientX, touch.clientY);
  }, { passive: true });

  // Celebratory burst at a point
  window.magicBurst = (x, y) => {
    for (let i = 0; i < 14; i++) {
      setTimeout(() => spawnBurst(x, y), i * 18);
    }
  };

  function spawnBurst(x, y) {
    const star = document.createElement("span");
    star.className = "stardust stardust-burst";
    const size = 6 + Math.random() * 10;
    const angle = Math.random() * Math.PI * 2;
    const dist = 30 + Math.random() * 90;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    star.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    star.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    star.style.setProperty("--rot", `${(Math.random() - 0.5) * 360}deg`);
    layer.appendChild(star);
    setTimeout(() => star.remove(), 1100);
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

  bindLanguageToggle();

  if (!overlay || !envelope || !waxSeal) return;

  let isOpen = false;
  let scrollTriggered = false;

  function openEnvelope() {
    if (isOpen) return;
    if (overlay.classList.contains("envelope-hidden")) return; // splash still up
    isOpen = true;

    // Magic burst from the seal
    const rect = waxSeal.getBoundingClientRect();
    if (typeof window.magicBurst === "function") {
      window.magicBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }

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
    if (overlay.classList.contains("envelope-hidden")) return;
    scrollTriggered = true;
    openEnvelope();
  }

  window.addEventListener(
    "wheel",
    (e) => {
      if (!isOpen && overlay && !overlay.classList.contains("removed") && !overlay.classList.contains("envelope-hidden")) {
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
    if (isOpen || !overlay || overlay.classList.contains("removed") || overlay.classList.contains("envelope-hidden")) return;
    const deltaY = touchStartY - e.touches[0].clientY;
    if (Math.abs(deltaY) > 30) onScrollAttempt();
  }, { passive: true });
}

/* ============================================
   Ambient Petals & Sparkles
   ============================================ */

function initAmbient() {
  const layer = document.getElementById("ambient-layer");
  if (!layer) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const petalCount = 12;
  const sparkleCount = 22;

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
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
    if (!musicAvailable) return;

    try {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
        btn.classList.remove("playing");
        btn.setAttribute("aria-label", t("controls.musicPlayAria"));
        btn.setAttribute("aria-pressed", "false");
      } else {
        await audio.play();
        isPlaying = true;
        btn.classList.add("playing");
        btn.setAttribute("aria-label", t("controls.musicPauseAria"));
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

    let attendValue = t("rsvp.yes");
    attendRadios.forEach((radio) => {
      if (radio.checked) {
        attendValue = radio.value === "Yes" ? t("rsvp.yes") : t("rsvp.no");
      }
    });

    const messageText = [
      t("wa.header"),
      "",
      `${t("wa.name")}: ${name.value.trim()}`,
      `${t("wa.phone")}: ${phone.value.trim()}`,
      `${t("wa.guests")}: ${guests?.value || "1"}`,
      `${t("wa.attending")}: ${attendValue}`,
      `${t("wa.message")}: ${message?.value.trim() || "-"}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}
