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
  tags: ["Yeah", "The Show's Over"],

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
    // Every project card opens its own page (yoursite/#project-1, #project-2, ...).
    //   links:    buttons on that page that open an outside site (GitHub, YouTube, Google Drive...)
    //   sections: the write-up. Each has a title plus any of: paragraphs, bullets, images.
    //             Leave sections out and the page just shows the description.
    //   images:   put the picture file next to index.html and write its name in src.
    // Anything in [square brackets] shows up highlighted yellow = still needs filling in.
    items: [
      {
        title: "Rover Mission Control Project",
        description: "A Console program that simulates movement of a Mars Rover responding to command strings. The code  also tracks the rover’s position, the direction it is facing, and its battery levels while enforcing mission constraints.",
        tags: ["C++", "VS Code"],
        links: [
          { label: "GitHub", url: "https://github.com/VedKadam28/CSCI-1300-Mars-Rover-Mission-Control-Project" },
        ],
      },
      {
        title: "Approaching Vehicle Warning System",
        description: "A LiDAR and Arduino system that warns drivers when a vehicle is approaching rapidly from behind, giving them more time to react and lowering the risk of rear-end collisions.",
        tags: ["Arduino", "LiDAR", "nRF24 Radio", "Electronics"],
        links: [
          // { label: "Video", url: "https://youtube.com/..." },
          // { label: "Poster", url: "https://drive.google.com/..." },
        ],
        sections: [
          {
            title: "Problem Statement",
            paragraphs: [
              "Drivers are often unaware of vehicles approaching rapidly from behind. That cuts down their reaction time and increases the risk of rear-end collisions, and unaware drivers also slow traffic for everyone around them.",
              "Our team's mission was to build a reliable, non-intrusive sensor and alert system that increases a driver's awareness of other vehicles. The target users were individual drivers, automotive manufacturers who could build it into new models, and insurance companies with an interest in fewer collisions.",
              "Built by Team Big Kahunas (Atahan Tosun, Carter Jenson, Drew Honer, Jason Schwartz and me) for GEEN 1400 Engineering Projects at CU Boulder.",
            ],
          },
          {
            title: "Design Solution",
            paragraphs: [
              "The system is split into two Arduino units that talk wirelessly. A LiDAR sensor on the outside of the car constantly reads the distance to whatever is directly behind it. That data is sent over nRF24L01 radios to a display unit inside the car, which shows the distance on an OLED screen.",
              "The display unit keeps a rolling history of 12 distance readings, sampled about every 200 ms. To cut down on sensor noise it averages the oldest four and the newest four readings and uses the difference to calculate closing speed. If an object comes within 15 ft, or approaches at 40 ft/s (about 27 mph) for two calculations in a row with a steady decreasing-distance trend, the screen flashes a warning and a speaker plays an alert.",
            ],
            bullets: [
              "Range and speed thresholds were chosen to give drivers useful warnings with minimal false alarms.",
              "Design requirements included running on safe low voltage (9 V max) and fitting within an 8 × 6 × 4 in housing.",
              "Total parts cost: about $172.",
            ],
            images: [
              { src: "car-warning-final.png", caption: "The final display unit warning that an object is too close" },
              { src: "car-warning-flowchart.png", caption: "How the system decides when to warn the driver" },
            ],
          },
          {
            title: "Design Evolution",
            paragraphs: [
              "Our first concept was a left-lane camping detector, but we found it was only really possible with a camera and that the system would struggle to understand context. We pivoted halfway through to a simpler, broader goal of warning drivers about any rapidly approaching vehicle.",
              "Version 1.0 was a low-speed proof of concept using a MaxBotix ultrasonic sensor with two Arduinos linked by radio. From there we upgraded to a LiDAR sensor for more range, swapped buzzers and LEDs for an OLED display and an MP3 shield and speaker, and redesigned the housing larger to fit the bigger display, the speaker and a more powerful Arduino.",
            ],
            images: [
              { src: "car-warning-v1.png", caption: "Version 1.0: ultrasonic sensor unit (right) and alert unit (left)" },
              { src: "car-warning-cad-early.png", caption: "Early CAD model of the display housing" },
              { src: "car-warning-cad-final.png", caption: "Final housing, enlarged for the display and speaker" },
            ],
          },
          {
            title: "My Contributions",
            paragraphs: [
              "I was responsible for the project's electronics and for much of how the team presented its work.",
            ],
            bullets: [
              "Electronics: built all of the system's electronics, from the Version 1.0 ultrasonic prototype to the final LiDAR build. I wired the sensor unit and the in-car display unit, integrated the nRF24L01 radios so the two Arduinos could communicate wirelessly, and connected the OLED display, MP3 shield and speaker used for the driver alert.",
              "Integration & troubleshooting: brought the hardware together into one working system and debugged it whenever readings or the wireless link weren't behaving.",
              "Public speaking: delivered the introductions for our design reviews and presentations, and gave the team's quick elevator pitch for the project.",
              "Documentation: helped write and organize the team's project documentation.",
            ],
          },
          {
            title: "What I Learned",
            paragraphs: [
              "This project pushed me into skills I wasn't yet proficient in. I learned how to wire and integrate multiple Arduinos, sensors and radios into one system, and how much of electronics work is patient troubleshooting where hardware and software meet. I'm now confident building and debugging embedded electronics from a breadboard prototype to a finished device.",
              "I also learned to stay flexible. Pivoting away from our first concept halfway through taught me to test ideas early and not commit too hard to something until I know it works. Leading our introductions and elevator pitch made me a clearer, more confident communicator when explaining technical work to an audience.",
            ],
          },
        ],
      },
      {
        title: "Light Activated Record Spinner",
        description: "Decor wall mounted record holder that spins a vinyl record at a certain light threshold. Light threshold is determined through a potentiometer and photoresistor connected to a LM339 quad comparator.",
        tags: ["Fusion 360", "Electronics", "Manufacturing"],
        links: [],
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
    // Your photo is shown as-is: no filter, tint or cut-out shape
    $(".portrait").classList.add("plain");
    pInner.append(h("img", { src: CONFIG.photo, alt: CONFIG.name }));
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

  /* ---------- Project detail pages ---------- */
  const projectId = i => "project-" + (i + 1);

  // Text in [square brackets] is highlighted yellow so unfinished bits are easy to spot.
  const fmt = text => String(text).split(/(\[[^\]]+\])/).filter(Boolean)
    .map(part => /^\[.*\]$/.test(part) ? h("mark", { class: "todo" }, part) : part);

  function figure(img, i) {
    const f = h("figure", { class: "shot" });
    const im = h("img", { src: img.src, alt: img.caption || "", loading: "lazy" });
    im.addEventListener("error", () => im.replaceWith(
      h("div", { class: "img-missing" }, "Image not found", h("small", {}, `Upload "${img.src}" next to index.html`))));
    f.append(im);
    if (img.caption) f.append(h("figcaption", {}, img.caption));
    return f;
  }

  function projectPage(p) {
    let d = 1;
    const links = p.links || (p.link ? [{ label: "GitHub", url: p.link }] : []);
    const sections = p.sections?.length ? p.sections : [{ title: "Overview", paragraphs: [p.description] }];
    return h("div", { class: "case" },
      h("div", { class: "case-meta st", "--d": d++ },
        h("div", { class: "chips" }, (p.tags || []).map(t => h("span", { class: "chip" }, t))),
        links.length ? h("div", { class: "ext-links" }, links.map(l =>
          h("a", { class: "ext-btn", href: l.url, target: "_blank", rel: "noopener" }, l.label + " ↗"))) : null),
      sections.map(s => h("section", { class: "csec" },
        h("h3", { class: "st", "--d": d++ }, s.title),
        h("div", { class: "csec-body st", "--d": d++ },
          (s.paragraphs || []).map(t => h("p", {}, fmt(t))),
          s.bullets?.length ? h("ul", {}, s.bullets.map(b => h("li", {}, fmt(b)))) : null,
          s.images?.length ? h("div", { class: "gallery" }, s.images.map(figure)) : null))));
  }

  const builders = {
    about: () => {
      const a = CONFIG.about;
      return h("div", { class: "about-grid" },
        h("div", { class: "paper-card st", "--d": 1 }, h("div", {}, a.paragraphs.map(p => h("p", {}, p)))),
        h("dl", { class: "profile" }, a.profile.map(([k, v], i) =>
          h("div", { class: "row st", "--d": i + 2 }, h("dt", {}, k), h("dd", {}, v)))));
    },
    projects: () => h("div", { class: "proj-grid" }, CONFIG.projects.items.map((p, i) =>
      h("a", { class: "proj st", "--d": i + 1, href: "#" + projectId(i) },
        h("span", { class: "no" }, "No." + String(i + 1).padStart(2, "0")),
        h("h3", {}, p.title),
        h("p", {}, p.description),
        h("div", { class: "chips" }, (p.tags || []).map(t => h("span", { class: "chip" }, t))),
        h("span", { class: "go" }, "VIEW ▶")))),
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

  function makePanel(id, label, sub, body, back = "menu", titleClass = "") {
    const el = h("section", { class: "screen panel", id: "p-" + id, "aria-label": label, "data-back": back },
      h("div", { class: "wrap" },
        h("header", { class: "panel-head" },
          h("button", { class: "back st", type: "button", "--d": 0, onclick: () => go(back) },
            back === "menu" ? "◀ BACK" : "◀ " + back.toUpperCase()),
          h("h2", { class: ("st " + titleClass).trim(), "--d": 0 }, ransom(label, { tiles: true, seed: label + "-title" })),
          sub ? h("span", { class: "panel-sub st", "--d": 1 }, sub) : null),
        body));
    panels.append(el);
    screens[id] = el;
  }

  menuItems.filter(m => m.id && builders[m.id]).forEach(m =>
    makePanel(m.id, m.label, CONFIG[m.id]?.subtitle || "", builders[m.id]()));

  // One detail page per project, at #project-1, #project-2, ...
  CONFIG.projects.items.forEach((p, i) =>
    makePanel(projectId(i), p.title, "Mission No." + String(i + 1).padStart(2, "0"), projectPage(p), "projects", "long"));

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
      e.preventDefault(); go(screens[current]?.dataset.back || "menu");
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
