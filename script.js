/* =========================================================
   ✏️  EDIT ME — everything on the site comes from this block.
   Change the text, save, upload. No other file needs touching.
   ========================================================= */
const CONFIG = {
  name: "Ved Kadam",
  tagline: "Student · Builder · Developer",

  // Put a photo next to index.html and write its file name here, e.g. "photo.jpg".
  // It gets the high-contrast comic treatment automatically. Leave "" to show your initials.
  photo: "",

  // Little stickers in the top-right corner of the main menu
  tags: ["The Show's Over", "Yeah"],

  // Fun number in the top-left (like an in-game wallet). Set to null to hide it.
  counter: { symbol: "¥", value: 32008 },

  // Starting color palette: "red", "blue" or "yellow"
  theme: "red",

  // The main menu, top to bottom. Delete a line to remove that page.
  // You can also add { label: "Blog", hint: "...", href: "https://..." } to link somewhere else.
  menu: [
    { id: "about",    label: "About",    hint: "Learn who I am" },
    { id: "projects", label: "Projects", hint: "View completed missions" },
    { id: "skills",   label: "Skills",   hint: "Check my arsenal" },
    { id: "resume",   label: "Resume",   hint: "Review my record" },
    { id: "contact",  label: "Contact",  hint: "Send a calling card" },
  ],

  about: {
    subtitle: "Profile // Confidential",
    paragraphs: [
      "Hey I'm Ved Kadam a student at the CU Boulder College of Engineering & Applied Science. Some of my interests include cooking, weightlifting, and biking. As of right now I am in the early steps of working on a really cool biking buddy. Imagine a desk buddy but on your bike, it'll connect to your phone with bluetooth and tell you directions for your destination as well as current weather, time and other updates.",
      "Almost everything I build has to do something with humor or any of my aforementioned interests. The more interests I have in a project the higher ability I have to provide quality results for it.",
    ],
    profile: [
      ["Codename", "Ved Kadam"],
      ["Location", "Boulder, Colorado"],
      ["Focus", "Electronics · Design · CAD"],
      ["Status", "Open to opportunities"],
    ],
  },

  projects: {
    subtitle: "Mission Log",
    items: [
      {
        title: "Rover Mission Control Project",
        description: "A Console program that simulates movement of a Mars Rover responding to command strings. The code  also tracks the rover’s position, the direction it is facing, and its battery levels while enforcing mission constraints.",
        tags: ["C++", "VS Code"],
        link: "https://github.com/VedKadam28/CSCI-1300-Mars-Rover-Mission-Control-Project",
      },
      {
        title: "Approaching Car Warning System",
        description: "This product allows for the advancement of automobile safety allowing car owners to recognize when there is a threat approaching at a rapid pace or in their direct vicinity.",
        tags: ["Arduino", "Fusion 360", "Electronics"],
        link: "",
      },
      {
        title: "Light Activated Record Spinner",
        description: "Decor wall mounted record holder that spins a vinyl record at a certain light threshold. Light threshold is determined through a potentiometer and photoresistor connected to a LM339 quad comparator.",
        tags: ["Fusion 360", "Electronics", "Manufacturing"],
        link: "",
      },
    ],
  },

  skills: {
    subtitle: "Arsenal",
    // Each group is a card. A skill can be just "Name", or { name: "Name", level: 1-5 }
    // to show little level pips next to it.
    groups: [
      {
        title: "Languages",
        items: [{ name: "Python", level: 4 }, { name: "JavaScript", level: 3 }, { name: "C++", level: 4 }, { name: "Arduino", level: 4 }],
      },
      {
        title: "Tools",
        items: ["Git & GitHub", "VS Code", "Fusion 360", "Claude", "Altium"],
      },
      {
        title: "Soft Skills",
        items: ["Public Speaking", "Leadership", "Teamwork", "Problem Solving"],
      },
    ],
  },

  resume: {
    subtitle: "Track Record",
    // Upload your résumé PDF next to index.html and put its file name here to show a
    // "Download PDF" button, e.g. pdf: "resume.pdf". Leave "" to hide the button.
    pdf: "",
    sections: [
      {
        title: "Experience",
        entries: [
          {
            role: "Mechanical Engineering Student",
            org: "CU Boulder College of Engineering & Applied Science",
            date: "2026 — Present",
            points: ["Produced a functioning automobile safety product alongside proper documentation through teamwork and repeated iterations.", "CU Boulder Formula SAE Electronics Team Member."],
          },
          {
            role: "Cherokee Trail IB Student",
            org: "Cherokee Trail",
            date: "2022 — 2026",
            points: ["My greatest achievement at this institution is graduating with an IB Diploma through a 2 year long rigorous course."],
          },
        ],
      },
      {
        title: "Education",
        entries: [
          { role: "High School Degree", org: "Cherokee Trail High School", date: "2022 — 2026", points: ["4.5 Weighted GPA, IB Diploma Graduate, Technology Student Association, National Honor Society, Future Business Leaders of America."] },
        ],
      },
      {
        title: "Awards & Activities",
        entries: [
          { role: "2026 Fall Expo Apex Innovation Award", org: "CU Boulder Racing Team", date: "November 2026", points: [] },
        ],
      },
    ],
  },

  contact: {
    subtitle: "Calling Card",
    note: "Want to work together, collab on a project, or say hello? Pick a option below and I will get back to you as soon as possible.",
    items: [
      { label: "Email",    text: "Email me",  url: "mailto:veka6945@colorado.edu" },
      { label: "GitHub",   text: "GitHub",    url: "https://github.com/VedKadam28" },
      { label: "LinkedIn", text: "LinkedIn",  url: "https://www.linkedin.com/in/ved-kadam-0549a2450/e" },
    ],
  },
};
/* ======================= end of EDIT ME ======================= */


(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Small seeded random so the "ransom" letters look the same on every visit.
  function rng(seed) {
    let h = 2166136261;
    for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
    return () => {
      h = Math.imul(h ^ (h >>> 15), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      h ^= h >>> 16;
      return (h >>> 0) / 4294967296;
    };
  }

  function h(tag, attrs = {}, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k.startsWith("--")) el.style.setProperty(k, v);
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    }
    for (const c of kids.flat()) {
      if (c == null || c === false) continue;
      el.append(c.nodeType ? c : document.createTextNode(c));
    }
    return el;
  }

  const FONTS = ["Anton", "Bangers", "Permanent Marker", "Rubik Mono One", "Archivo Black", "Bebas Neue", "Special Elite"];

  // Turn text into cut-out "ransom note" letters
  function ransom(text, { tiles = false, seed = text } = {}) {
    const r = rng(seed);
    const wrap = h("span", { class: "ransom" + (tiles ? " tiles" : "") }, h("span", { class: "sr" }, text));
    let word = null; // letters are grouped per word so a word never breaks mid-way
    [...text].forEach((ch, i) => {
      if (ch === " ") { wrap.append(h("span", { class: "sp", "aria-hidden": "true" }), " "); word = null; return; }
      if (!word) { word = h("span", { class: "word" }); wrap.append(word); }
      const letter = r() > 0.45 || i === 0 ? ch.toUpperCase() : ch.toLowerCase();
      const s = h("span", {
        class: "ch v" + Math.floor(r() * 4),
        "aria-hidden": "true",
        "--rot": (r() * 16 - 8).toFixed(1) + "deg",
        "--sc": i === 0 ? "1.22" : (0.86 + r() * 0.3).toFixed(2),
      }, letter);
      s.style.fontFamily = `'${FONTS[Math.floor(r() * FONTS.length)]}', sans-serif`;
      word.append(s);
    });
    return wrap;
  }

  /* ---------- Main menu ---------- */
  document.title = `${CONFIG.name} — Main Menu`;

  const tagBox = $(".tags");
  CONFIG.tags.forEach((t, i) => tagBox.append(h("div", { class: "tag", "--r": (i % 2 ? 4 : -6) + "deg", "--d": i }, t)));
  tagBox.append(h("div", { class: "tag big", "--r": "-3deg", "--d": CONFIG.tags.length },
    "MENU: MAIN", h("small", {}, "select a command")));

  // Portrait / monogram
  const pInner = $(".portrait-inner");
  if (CONFIG.photo) {
    pInner.append(h("img", { src: CONFIG.photo, alt: CONFIG.name }), h("div", { class: "tint" }), h("div", { class: "halftone" }));
  } else {
    const initials = CONFIG.name.split(/\s+/).filter(Boolean).map(w => w[0]).join("").slice(0, 2).toUpperCase();
    pInner.append(h("div", { class: "halftone" }), h("div", { class: "tint" }), h("div", { class: "mono", "aria-hidden": "true" }, initials || "?"));
  }
  $(".name").append(ransom(CONFIG.name, { tiles: true }));
  $(".tagline").textContent = CONFIG.tagline;
  $(".cmd-word").append(ransom("Command", { seed: "cmd-word" }));

  // Counter
  const counterEl = $(".counter");
  if (CONFIG.counter) {
    const num = h("span", {}, "0");
    counterEl.append(h("b", {}, CONFIG.counter.symbol), num);
    const target = CONFIG.counter.value, t0 = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - t0) / 1400);
      num.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    };
    reduceMotion ? (num.textContent = target.toLocaleString()) : requestAnimationFrame(tick);
  }

  const menuItems = CONFIG.menu.filter(m => m.id || m.href);
  const ul = $("#menu ul");
  const offsets = [0.2, 1.1, 0.4, 1.5, 0.7, 1.9, 0.3];
  const items = menuItems.map((m, i) => {
    const attrs = { class: "item", "--i": i, "--x": offsets[i % offsets.length] + "em", "data-i": i };
    const el = m.href
      ? h("a", { ...attrs, href: m.href, target: "_blank", rel: "noopener" })
      : h("button", { ...attrs, type: "button" });
    el.append(ransom(m.label, { seed: m.label + "-menu" }));
    el.addEventListener("mouseenter", () => select(i));
    el.addEventListener("focus", () => select(i));
    if (!m.href) el.addEventListener("click", () => go(m.id));
    ul.append(h("li", {}, el));
    return el;
  });

  let sel = -1;
  const hint = $("#hintText");
  function select(i, focus = false) {
    if (i !== sel) {
      items[sel]?.classList.remove("active");
      sel = i;
      items[sel].classList.add("active");
      hint.textContent = menuItems[sel].hint || "";
      hint.classList.remove("pop"); void hint.offsetWidth; hint.classList.add("pop");
    }
    if (focus && document.activeElement !== items[sel]) items[sel].focus({ preventScroll: true });
  }
  select(0);

  /* ---------- Sub pages ---------- */
  const panels = $("#panels");
  const screens = { menu: $("#menuScreen") };

  const builders = {
    about: () => {
      const a = CONFIG.about;
      return h("div", { class: "about-grid" },
        h("div", { class: "paper-card st", "--d": 1 }, h("div", {}, a.paragraphs.map(p => h("p", {}, p)))),
        h("dl", { class: "profile" }, a.profile.map(([k, v], i) =>
          h("div", { class: "row st", "--d": i + 2 }, h("dt", {}, k), h("dd", {}, v)))));
    },
    projects: () => h("div", { class: "proj-grid" }, CONFIG.projects.items.map((p, i) =>
      h(p.link ? "a" : "div", {
        class: "proj st", "--d": i + 1,
        href: p.link || null, target: p.link ? "_blank" : null, rel: p.link ? "noopener" : null,
      },
        h("span", { class: "no" }, "No." + String(i + 1).padStart(2, "0")),
        h("h3", {}, p.title),
        h("p", {}, p.description),
        h("div", { class: "chips" }, (p.tags || []).map(t => h("span", { class: "chip" }, t))),
        p.link ? h("span", { class: "go" }, "VIEW ▶") : null))),
    skills: () => h("div", { class: "skill-groups" }, CONFIG.skills.groups.map((g, gi) =>
      h("section", { class: "sgroup st", "--d": gi + 1 },
        h("h3", {}, ransom(g.title, { tiles: true, seed: g.title + "-sg" })),
        h("ul", { class: "skill-list" }, g.items.map((it, i) => {
          const s = typeof it === "string" ? { name: it } : it;
          const lv = s.level ? Math.max(1, Math.min(5, s.level)) : 0;
          return h("li", { class: "skill", "--r": ((i * 7 + gi * 3) % 5 - 2) + "deg" },
            s.name,
            lv ? h("span", { class: "pips", role: "img", "aria-label": `level ${lv} of 5` },
              [1, 2, 3, 4, 5].map(n => h("i", { class: n <= lv ? "on" : null }))) : null);
        }))))),
    resume: () => {
      const r = CONFIG.resume;
      let d = 1;
      return h("div", { class: "resume" },
        r.pdf ? h("a", { class: "dl-btn st", "--d": d++, href: r.pdf, target: "_blank", rel: "noopener" }, "▼ Download PDF") : null,
        r.sections.map(sec => h("section", { class: "rsec" },
          h("h3", { class: "st", "--d": d++ }, sec.title),
          h("div", { class: "timeline" }, sec.entries.map(e =>
            h("article", { class: "entry st", "--d": d++ },
              h("div", { class: "entry-head" },
                h("span", { class: "role" }, e.role),
                e.date ? h("span", { class: "date" }, e.date) : null),
              e.org ? h("div", { class: "org" }, e.org) : null,
              e.points?.length ? h("ul", {}, e.points.map(p => h("li", {}, p))) : null))))));
    },
    contact: () => {
      const c = CONFIG.contact;
      return h("div", { class: "contact-wrap" },
        h("p", { class: "callcard st", "--d": 1 }, c.note),
        h("div", { class: "contact-list" }, c.items.map((it, i) =>
          h("a", {
            class: "clink st", "--d": i + 2, "--x": (i % 2 ? 2.5 : 0) + "rem",
            href: it.url, target: it.url.startsWith("mailto:") ? null : "_blank", rel: "noopener",
          }, h("span", { class: "k" }, it.label), ransom(it.text, { seed: it.text + "-c" })))));
    },
  };

  menuItems.filter(m => m.id && builders[m.id]).forEach(m => {
    const sub = CONFIG[m.id]?.subtitle || "";
    const el = h("section", { class: "screen panel", id: "p-" + m.id, "aria-label": m.label },
      h("div", { class: "wrap" },
        h("header", { class: "panel-head" },
          h("button", { class: "back st", type: "button", "--d": 0, onclick: () => go("menu") }, "◀ BACK"),
          h("h2", { class: "st", "--d": 0 }, ransom(m.label, { tiles: true, seed: m.label + "-title" })),
          sub ? h("span", { class: "panel-sub st", "--d": 1 }, sub) : null),
        builders[m.id]()));
    panels.append(el);
    screens[m.id] = el;
  });

  /* ---------- Routing + transitions ---------- */
  const wipe = $("#wipe");
  let current = "menu";

  function show(id) {
    for (const [k, el] of Object.entries(screens)) el.classList.toggle("active", k === id);
    document.body.classList.toggle("in-panel", id !== "menu");
    current = id;
    if (id === "menu") items[sel]?.focus({ preventScroll: true });
    else { screens[id].scrollTop = 0; $(".back", screens[id]).focus({ preventScroll: true }); }
  }

  function route(animate = true) {
    let id = decodeURIComponent(location.hash.slice(1));
    if (!screens[id]) id = "menu";
    if (id === current) return;
    if (!animate || reduceMotion) return show(id);
    wipe.classList.remove("go"); void wipe.offsetWidth; wipe.classList.add("go");
    setTimeout(() => show(id), 380);
  }

  function go(id) {
    const target = id === "menu" ? "" : id;
    if (location.hash.slice(1) === target) return;
    location.hash = target;
  }

  window.addEventListener("hashchange", () => route(true));
  route(false);
  if (current === "menu") document.activeElement?.blur();

  document.addEventListener("keydown", e => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (current === "menu") {
      if (["ArrowDown", "s", "S"].includes(e.key)) { e.preventDefault(); select((sel + 1) % items.length, true); }
      else if (["ArrowUp", "w", "W"].includes(e.key)) { e.preventDefault(); select((sel - 1 + items.length) % items.length, true); }
      else if (e.key === "Enter" && !items.includes(document.activeElement)) { e.preventDefault(); items[sel].click(); }
    } else if (e.key === "Escape" || (e.key === "Backspace" && !/INPUT|TEXTAREA/.test(document.activeElement?.tagName))) {
      e.preventDefault(); go("menu");
    }
  });

  /* ---------- Background shards ---------- */
  const shardBox = $(".shards"), R = rng("shards");
  const shardColors = ["--accent", "--paper", "--ink", "--accent"];
  for (let i = 0; i < 14; i++) {
    const size = 24 + R() * 120;
    shardBox.append(h("i", {
      // style must come first: setting it later would wipe the --custom properties
      style: `left:${(R() * 100).toFixed(1)}%;top:${(R() * 100).toFixed(1)}%;width:${size.toFixed(0)}px;height:${(size * (0.4 + R())).toFixed(0)}px;animation-delay:${(-R() * 6).toFixed(1)}s`,
      class: "shard",
      "--c": `var(${shardColors[i % shardColors.length]})`,
      "--t": (4 + R() * 6).toFixed(1) + "s",
      "--rz": Math.round(R() * 360) + "deg",
    }));
  }

  /* ---------- Palette switcher ---------- */
  const THEMES = [["red", "Crimson", "#e60012"], ["blue", "Azure", "#00a8ff"], ["yellow", "Sunburst", "#ffd000"]];
  const themeBtn = $("#themeBtn");
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (_) {}
  let ti = Math.max(0, THEMES.findIndex(t => t[0] === (saved || CONFIG.theme)));
  function applyTheme() {
    const [key, label, color] = THEMES[ti];
    document.documentElement.dataset.theme = key;
    $('meta[name="theme-color"]').setAttribute("content", color);
    themeBtn.textContent = "◆ Palette: " + label;
  }
  themeBtn.addEventListener("click", () => {
    ti = (ti + 1) % THEMES.length;
    applyTheme();
    try { localStorage.setItem("theme", THEMES[ti][0]); } catch (_) {}
  });
  applyTheme();
})();
