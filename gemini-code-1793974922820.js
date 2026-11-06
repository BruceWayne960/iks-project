const instrumentsByState = {
  "Tamil Nadu": {
    region: "SOUTH INDIA",
    description: "Tamil Nadu is a major centre of Carnatic music and temple music traditions.",
    instruments: [
      { name: "Saraswati Veena", family: "Plucked string", note: "A resonant instrument prominent in Carnatic classical music." },
      { name: "Thavil", family: "Percussion", note: "A powerful barrel drum used in temple and ceremonial ensembles." },
      { name: "Nadaswaram", family: "Wind instrument", note: "A loud double-reed instrument heard at temples and celebrations." }
    ]
  },
  "Maharashtra": {
    region: "WEST INDIA",
    description: "Maharashtra has a rich musical heritage, including folk and tribal traditions like the Gondhal and Warli festivals.",
    instruments: [
      { name: "Tarpa", family: "Wind instrument", note: "A wind instrument made of a dried bottle gourd, bamboo pipes with free reeds, and a palm leaf bell. Central to Warli festivals.", video: "https://www.youtube.com/watch?v=FpmbD56s_zE" },
      { name: "Sambal", family: "Percussion", note: "Two kettle-type drums of unequal size joined together. The signature drum of the Gondhal ritual.", video: "YouTube search: Sambal Gondhal drum Maharashtra" },
      { name: "Tuntune", family: "Plucked string", note: "A hollow cylindrical resonator with a bamboo shaft and one metal string, used in Powada and Tamasha.", video: "YouTube search: Tuntune Gopi Yantra Maharashtra folk instrument" }
    ]
  },
  "Odisha": {
    region: "EAST INDIA",
    description: "Odisha has a deep tribal and folk music heritage with ancient traditions rooted in western and regional communities.",
    instruments: [
      { name: "Mahuri", family: "Wind instrument", note: "A wood and metal double reed instrument, played at weddings, temple rites, and folk theatre.", video: "YouTube search: Mahuri Odisha traditional wind instrument" },
      { name: "Ghumura", family: "Percussion", note: "An earthen pitcher fitted with a stretched animal-hide membrane. Slung from the dancer's body during the Ghumura dance.", video: "YouTube search: Ghumura drum Kalahandi Odisha" },
      { name: "Banam", family: "Bowed string", note: "A wooden or coconut-shell resonator covered with skin, played with a horsehair bow.", video: "YouTube search: Banam Santal fiddle Odisha" }
    ]
  },
  "Chhattisgarh": {
    region: "CENTRAL INDIA",
    description: "Chhattisgarh's music is deeply tied to its tribal traditions, specifically in regions like Bastar.",
    instruments: [
      { name: "Dhankul", family: "Percussion", note: "Made from everyday objects: an earthen pot, a bow, and bamboo cane.", video: "YouTube search: Dhankul Bastar Chhattisgarh instrument" },
      { name: "Mundabaja", family: "Percussion", note: "A drum made of Shivna wood and goat skin, famously played during the Bastar Dussehra procession.", video: "YouTube search: Mundabaja Bastar Dussehra" },
      { name: "Mohri", family: "Wind instrument", note: "A wood or bamboo instrument with a reed, producing a high penetrating tone.", video: "YouTube search: Mohri Bastar Band instrument Chhattisgarh" }
    ]
  },
  "Meghalaya": {
    region: "NORTHEAST INDIA",
    description: "Meghalaya's musical identity is shaped heavily by the Khasi, Jaintia, and Garo communities.",
    instruments: [
      { name: "Duitara", family: "Plucked string", note: "Handcrafted from local wood with a rounded back and flat front, commonly featuring four strings.", video: "YouTube search: Duitara Khasi Meghalaya folk instrument" },
      { name: "Tangmuri", family: "Wind instrument", note: "A conical-bore, double-reed wind instrument producing a piercing tone.", video: "YouTube search: Tangmuri Khasi Meghalaya double reed" },
      { name: "Dama", family: "Percussion", note: "A long, narrow wooden drum with a stretched skin head. Famous in the Garo Wangala 100 Drums Festival.", video: "YouTube search: Dama drum Garo Wangala 100 drums festival" }
    ]
  },
  "Tripura": {
    region: "NORTHEAST INDIA",
    description: "Tripura boasts vibrant indigenous folk music, primarily associated with the Tripuri tribal communities.",
    instruments: [
      { name: "Sarinda", family: "Bowed string", note: "A bowed instrument with an oval, hollow resonator partly covered with skin and a short fingerboard.", video: "YouTube search: Sarinda Tripura folk instrument" },
      { name: "Sumui", family: "Wind instrument", note: "A traditional hollow bamboo stem flute.", video: "YouTube search: Sumui bamboo flute Tripura" },
      { name: "Dangdu", family: "Idiophone", note: "A small jaw harp usually of bamboo or metal with a vibrating tongue held to the lips.", video: "YouTube search: Dangdu jaw harp Tripura" }
    ]
  },
  "Manipur": {
    region: "NORTHEAST INDIA",
    description: "Manipur's instruments are intrinsic to Meitei ceremonies, Lai Haraoba rituals, and Sankirtana.",
    instruments: [
      { name: "Pena", family: "Bowed string", note: "A bamboo body fixed to half a coconut shell, utilizing one horsehair string and an archery-bow-shaped bow.", video: "https://www.youtube.com/watch?v=RyQz9wj3eAI" },
      { name: "Pung", family: "Percussion", note: "A barrel-shaped wooden drum with two skin heads, prominently used in Pung Cholom.", video: "YouTube search: Pung Cholom Manipur drum" },
      { name: "Dhulki", family: "Percussion", note: "A small double-headed hand drum with a wooden body.", video: "YouTube search: Dhulki Manipuri drum" }
    ]
  },
  "Assam": {
    region: "NORTHEAST INDIA",
    description: "Assam's musical heritage revolves heavily around Bihu and the vibrant sounds of nature.",
    instruments: [
      { name: "Pepa", family: "Wind instrument", note: "Made of buffalo horn, a bamboo/reed pipe, and a mouthpiece. The lead melody instrument of Bihu.", video: "YouTube search: Pepa Bihu Assam buffalo horn" },
      { name: "Gogona", family: "Idiophone", note: "A bamboo frame jaw harp with a vibrating tongue plucked by a finger.", video: "YouTube search: Gogona Bihu Assam jaw harp" },
      { name: "Toka", family: "Percussion", note: "A bamboo clapper made from two joined pieces of split bamboo.", video: "YouTube search: Toka bamboo clapper Bihu Assam" }
    ]
  },
  "Arunachal Pradesh": {
    region: "NORTHEAST INDIA",
    description: "Arunachal Pradesh's varied tribes like the Adi and Nyishi have diverse ancient and ritualistic instruments.",
    instruments: [
      { name: "Adi Metal Jew's Harp", family: "Idiophone", note: "A small metal jaw harp plucked while the mouth cavity shapes the sound.", video: "YouTube search: Adi jaw harp Arunachal Pradesh" },
      { name: "Yoksha", family: "Percussion", note: "A sword-shaped instrument fitted with iron discs that make a rattling sound during Ponung dances.", video: "YouTube search: Yoksha Adi Ponung dance Arunachal" },
      { name: "Jemji", family: "Wind instrument", note: "A horn traditionally crafted from a mithun horn.", video: "YouTube search: Nyishi Nyioga mithun horn Arunachal" }
    ]
  },
  "Mizoram": {
    region: "NORTHEAST INDIA",
    description: "Mizoram's Mizo community centers its rhythm and social celebrations around a rich variety of striking and wind instruments.",
    instruments: [
      { name: "Khuang", family: "Percussion", note: "A hollowed tree trunk covered on both sides with animal skin, essential in Mizo religious life and Khuallam dances.", video: "YouTube search: Khuang drum Mizoram" },
      { name: "Bengbung", family: "Percussion", note: "A series of flat wooden bars that produce three notes, similar to a xylophone.", video: "YouTube search: Bengbung Mizo xylophone Mizoram" },
      { name: "Tawtawrawt", family: "Wind instrument", note: "Bamboo tubes of different sizes inserted into each other.", video: "YouTube search: Tawtawrawt Mizo bamboo trumpet" }
    ]
  },
  "Jammu and Kashmir": {
    region: "NORTH INDIA",
    description: "Kashmir features unique instruments deeply embedded in Sufiana Mausiqi and Chakri folk traditions.",
    instruments: [
      { name: "Tumbaknari", family: "Percussion", note: "A hollow, surahi-like earthen/clay body covered with stretched animal skin, played with fingers.", video: "https://www.youtube.com/watch?v=hZioEOytIPk" },
      { name: "Saz-e-Kashmir", family: "Bowed string", note: "A rounded soft-wood resonator with a skin soundboard, played upright with a bow in Sufiana music.", video: "https://youtube.com/shorts/sWansHJm1UQ" },
      { name: "Kashmiri Rabab", family: "Plucked string", note: "A carved mulberry-wood body/neck with a skin-covered soundboard.", video: "https://youtube.com/shorts/QSx60srB1Is" }
    ]
  },
  "Himachal Pradesh": {
    region: "NORTH INDIA",
    description: "Himachal's temple traditions and deity processions resonate with grand metal horns.",
    instruments: [
      { name: "Karnal", family: "Wind instrument", note: "A long, straight ceremonial trumpet made from formed sheet metal, producing a piercing call.", video: "https://youtube.com/shorts/5fYjFH5ifSc" },
      { name: "Ransingha", family: "Wind instrument", note: "Curved copper or brass tubes joined into an S-shaped horn used in deity processions.", video: "https://youtu.be/7-PtZu9jCgE" },
      { name: "Narsingha", family: "Wind instrument", note: "A loud ceremonial horn, often overlapping in terminology with Ransingha.", video: "https://youtu.be/lAKcCNnjQ9g" }
    ]
  },
  "Punjab": {
    region: "NORTH INDIA",
    description: "Punjabi ballads and folk singing rely on high-energy, vibrant instruments that define the region's spirit.",
    instruments: [
      { name: "Dhadd", family: "Percussion", note: "A small hourglass-shaped wooden shell with two membrane heads, used in Dhadi ballads.", video: "https://youtube.com/shorts/Lqd50FnlxNM" },
      { name: "Tumbi", family: "Plucked string", note: "A small wooden neck attached to a hollow gourd with a single metal or gut string.", video: "https://youtube.com/shorts/3F1Ka9cV3hI" },
      { name: "Algoza", family: "Wind instrument", note: "Two separate bamboo flutes played simultaneously to create a layered melody and drone.", video: "https://youtube.com/shorts/vrDvuJWNdLs" }
    ]
  },
  "Haryana": {
    region: "NORTH INDIA",
    description: "Haryana's wandering bards, Swaang theatre, and snake-charmer traditions utilize distinctive folk sounds.",
    instruments: [
      { name: "Been", family: "Wind instrument", note: "A gourd wind chamber with reed pipes, producing a reedy, nasal tone. Used in Sapera traditions.", video: "https://youtube.com/shorts/TogNClEkLR4" },
      { name: "Sarangi", family: "Bowed string", note: "A hollowed block of wood played with a bow, traditionally accompanying folk songs and Swaang.", video: "https://youtube.com/shorts/f6hBhBO_q1o" },
      { name: "Khartal", family: "Percussion", note: "Two hard-wood clappers, sometimes fitted with metal bells, played in devotional bhajan parties.", video: "https://youtube.com/shorts/IGqDSN5bAfI" }
    ]
  },
  "Rajasthan": {
    region: "WEST INDIA",
    description: "Rajasthan has diverse folk and devotional traditions tied closely to storyteller communities like Bhopas, Langas, and Manganiyars.",
    instruments: [
      { name: "Bhapang", family: "Plucked string", note: "A dried bottle gourd resonator. The string is plucked while pulling/relaxing to create pitch bends.", video: "https://youtu.be/Y3f-7VdTkmQ" },
      { name: "Ravanhatta", family: "Bowed string", note: "A coconut-shell or gourd resonator played with a horsehair bow, central to Phad storytelling.", video: "https://youtu.be/bPzt5f2XoVY" },
      { name: "Morchang", family: "Idiophone", note: "A forged iron horseshoe frame with a metal tongue, held against the teeth to buzz.", video: "https://youtu.be/Fq8Ylf8VmRM" }
    ]
  },
  "Uttar Pradesh": {
    region: "NORTH INDIA",
    description: "UP has a blend of powerful ceremonial percussion and complex classical traditions like Dhrupad.",
    instruments: [
      { name: "Jantar", family: "Plucked string", note: "A traditional string instrument featured in folk traditions.", video: "https://youtu.be/vJZNXKo0O5o" },
      { name: "Nagara", family: "Percussion", note: "A large bowl-shaped kettle drum with a stretched hide drumhead, used in processions.", video: "https://youtu.be/Wt0l_JMcbsg" },
      { name: "Pakhawaj", family: "Percussion", note: "A hollowed wooden barrel drum with two differently sized hide heads, associated with Dhrupad.", video: "https://youtube.com/shorts/QAHnolurmi4" }
    ]
  },
  "Gujarat": {
    region: "WEST INDIA",
    description: "Gujarat's musical profile ranges from the theatrics of Bhavai to the pastoral sounds of Kutch.",
    instruments: [
      { name: "Bhungal", family: "Wind instrument", note: "A long straight copper or brass tube used to cue dances in Bhavai theatre.", video: "https://youtu.be/6_ATIe1MLlA" },
      { name: "Jodia Pava", family: "Wind instrument", note: "A pair of bamboo flutes held together, providing simultaneous melody and drone.", video: "https://youtu.be/p4PQcUxsV_Q" },
      { name: "Pavo", family: "Wind instrument", note: "A hollow bamboo or wooden wind tube flute.", video: "https://youtube.com/shorts/Mcq3CfxotGg" }
    ]
  },
  "Madhya Pradesh": {
    region: "CENTRAL INDIA",
    description: "Central India is renowned for oral storytelling and tribal traditions sustained by Gond and Baiga performers.",
    instruments: [
      { name: "Bana", family: "Bowed string", note: "Held upright and bowed, it supports singing and narrative recitation by Gond musicians.", video: "https://youtu.be/LgZvYQC-pbA" },
      { name: "Timki", family: "Percussion", note: "A small clay pot covered with stretched hide, struck with two thin sticks.", video: "https://youtube.com/shorts/K26A8qdoEiU" },
      { name: "Mandal", family: "Percussion", note: "A hollow cylindrical shell with animal-hide membranes stretched across both ends.", video: "https://youtube.com/shorts/P53EjJO2XxI" }
    ]
  },
  "Nagaland": {
    region: "NORTHEAST INDIA",
    description: "The Nagas have a deep communal connection to massive percussive instruments and intricate plucked strings.",
    instruments: [
      { name: "Log Drum", family: "Percussion", note: "A massive single tree trunk hollowed lengthwise, struck to signal and mark festivals.", video: "https://youtube.com/shorts/nVmdn8X_tUc" },
      { name: "Tati", family: "Plucked string", note: "A dried bottle gourd resonator with a bamboo stalk and string, formerly used during courting.", video: "https://youtu.be/ef0OyP3B5t8" },
      { name: "Theku", family: "Plucked string", note: "A popular indigenous string instrument.", video: "https://youtube.com/shorts/cuAy2coiLzs" }
    ]
  },
  "Uttarakhand": {
    region: "NORTH INDIA",
    description: "Uttarakhand’s hill ceremonies and Jagar rituals involve evocative percussion and grand alpine horns.",
    instruments: [
      { name: "Hudka", family: "Percussion", note: "A small hourglass-shaped wooden shell, struck on the membrane while adjusting tension cords.", video: "https://youtube.com/shorts/HTa3qyvKWxg" },
      { name: "Bhankora", family: "Wind instrument", note: "A long, straight metal horn that carries sound across open mountain terrain.", video: "https://youtu.be/8EPSRs74Xi4" },
      { name: "Ransingha", family: "Wind instrument", note: "A curved trumpet made from joined metal sections.", video: "https://youtube.com/shorts/4IccXli9ZEc" }
    ]
  }
};

const allRegions = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const mapElement = document.getElementById("indiaMap");
const titleElement = document.getElementById("stateTitle");
const descriptionElement = document.getElementById("stateDescription");
const kickerElement = document.getElementById("detailKicker");
const regionElement = document.getElementById("detailRegion");
const listElement = document.getElementById("instrumentList");
const countElement = document.getElementById("instrumentCount");
const searchInput = document.getElementById("stateSearch");
const buttonsElement = document.getElementById("stateButtons");
const searchEmpty = document.getElementById("searchEmpty");
const mapStatus = document.getElementById("mapStatus");

function normaliseName(name) {
  return String(name || "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, letter => letter.toUpperCase())
    .replace(/\bAnd\b/g, "and")
    .replace(/\bOf\b/g, "of");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

// Function to create and display the popup Modal
function showStatePopup(name, data) {
  // Remove existing modal if any
  const existingModal = document.getElementById('stateModal');
  if (existingModal) existingModal.remove();

  const modal = document.createElement('div');
  modal.id = 'stateModal';
  modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(33, 27, 24, 0.85); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px;';

  const content = document.createElement('div');
  content.style.cssText = 'background: var(--panel); color: var(--cream); width: 100%; max-width: 550px; max-height: 85vh; overflow-y: auto; border-radius: 8px; position: relative; padding: 30px; border: 1px solid var(--gold); box-shadow: 0 10px 40px rgba(0,0,0,0.5); font-family: var(--sans);';

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = 'position: absolute; top: 15px; right: 20px; background: transparent; border: none; color: var(--gold); font-size: 28px; cursor: pointer; transition: color 0.2s;';
  closeBtn.onmouseover = () => closeBtn.style.color = 'var(--gold-bright)';
  closeBtn.onmouseout = () => closeBtn.style.color = 'var(--gold)';
  closeBtn.onclick = () => modal.remove();

  let innerHTML = `
    <p style="color: #bda17d; font-size: 10px; letter-spacing: 2px; margin-bottom: 5px; text-transform: uppercase;">${data ? data.region : 'RESEARCH PROFILE IN PROGRESS'}</p>
    <h2 style="font-family: var(--serif); font-size: 32px; font-weight: 500; color: var(--cream); margin-top: 0; margin-bottom: 12px; letter-spacing: -0.5px;">${escapeHTML(name)}</h2>
    <p style="color: #c4b5a6; font-size: 13px; line-height: 1.6; margin-bottom: 25px;">${data ? escapeHTML(data.description) : `Your team can add researched information about ${escapeHTML(name)}.`}</p>
  `;

  if (data && data.instruments && data.instruments.length > 0) {
    innerHTML += `<h3 style="font-family: var(--serif); font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid var(--line); padding-bottom: 10px;">Featured Instruments</h3>`;
    innerHTML += `<div style="display: flex; flex-direction: column; gap: 12px;">`;

    data.instruments.forEach(inst => {
      let videoBtn = '';
      if (inst.video) {
        let href = inst.video;
        // Parse YouTube Search format if standard URL is not provided
        if (href.startsWith('YouTube search:')) {
           href = `https://www.youtube.com/results?search_query=${encodeURIComponent(href.replace('YouTube search:', '').trim())}`;
        }
        videoBtn = `<a href="${href}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; background: var(--gold); color: #251c15; padding: 7px 14px; font-size: 11px; font-weight: 700; border-radius: 3px; text-decoration: none; margin-top: 10px; transition: background 0.2s;">▶ Play Audio/Video</a>`;
      }

      innerHTML += `
        <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 6px; border: 1px solid rgba(232,211,178,0.14);">
          <h4 style="margin: 0 0 6px; font-family: var(--serif); font-size: 16px; font-weight: 600; color: var(--gold-bright);">${escapeHTML(inst.name)}</h4>
          <p style="margin: 0 0 8px; color: #a99581; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">${escapeHTML(inst.family)}</p>
          <p style="margin: 0; color: #b9a796; font-size: 12px; line-height: 1.5;">${escapeHTML(inst.note)}</p>
          ${videoBtn}
        </div>
      `;
    });
    innerHTML += `</div>`;
  } else {
     innerHTML += `
      <div style="border: 1px dashed rgba(232,211,178,.2); border-radius: 4px; padding: 18px; text-align: center; color: #b9a796; font-size: 12px;">
        <span style="font-family: var(--serif); font-size: 25px; color: var(--gold);">♪</span>
        <p style="margin-top: 8px;">No instrument profiles have been added for this region yet.</p>
      </div>`;
  }

  content.innerHTML = innerHTML;
  content.appendChild(closeBtn);
  modal.appendChild(content);

  // Close when clicking outside of the content container
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });

  document.body.appendChild(modal);
}


function showState(stateName) {
  const name = normaliseName(stateName);
  const data = instrumentsByState[name];

  // Update existing side panel
  titleElement.textContent = name;
  regionElement.textContent = data
    ? data.region
    : "REGIONAL MUSIC PROFILE";

  kickerElement.textContent = data
    ? "EXPLORE THE TRADITION"
    : "RESEARCH PROFILE IN PROGRESS";

  descriptionElement.textContent = data
    ? data.description
    : `Your team can add researched information about ${name}, including instruments, artists, audio examples and sources.`;

  if (data && data.instruments.length) {
    countElement.textContent = `${data.instruments.length} featured`;

    listElement.innerHTML = data.instruments.map((instrument, index) => `
      <article class="instrument-card">
        <div class="instrument-symbol" aria-hidden="true">
          ${["♬", "♫", "♪"][index % 3]}
        </div>
        <div>
          <h5>${escapeHTML(instrument.name)}</h5>
          <p>
            <strong>${escapeHTML(instrument.family)}</strong><br>
            ${escapeHTML(instrument.note)}
          </p>
        </div>
      </article>
    `).join("");
  } else {
    countElement.textContent = "0 featured";
    listElement.innerHTML = `
      <div class="empty-state">
        <span class="empty-symbol">♪</span>
        <p>No instrument profiles have been added for this region yet.</p>
      </div>
    `;
  }

  // Update button active state
  document.querySelectorAll(".state-button").forEach(button => {
    const active = button.dataset.state.toLowerCase() === name.toLowerCase();
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  // Select Map Element
  if (mapElement && typeof mapElement.select === "function") {
    const slug = name.toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    try {
      mapElement.select(slug);
    } catch (error) {
      console.log("Map selection is unavailable; use the directory.");
    }
  }

  // Generate & Display the requested popup modal overlay
  showStatePopup(name, data);
}

function renderDirectory(filter = "") {
  const filtered = allRegions.filter(name =>
    name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  buttonsElement.innerHTML = filtered.map(name => `
    <button
      class="state-button"
      type="button"
      data-state="${escapeHTML(name)}"
      aria-pressed="false">
      ${escapeHTML(name)}
    </button>
  `).join("");

  searchEmpty.hidden = filtered.length > 0;
}

buttonsElement.addEventListener("click", event => {
  const button = event.target.closest("button[data-state]");

  if (button) {
    showState(button.dataset.state);
  }
});

searchInput.addEventListener("input", () => {
  renderDirectory(searchInput.value);
});

if (mapElement) {
  mapElement.addEventListener("india-map:selectionchange", event => {
    const id = event.detail && event.detail.id;

    if (!id) return;

    showState(id);
    mapStatus.hidden = true;
  });
}

renderDirectory();

window.setTimeout(() => {
  if (!mapElement || !mapStatus) return;

  if (mapElement.querySelector("svg")) {
    mapStatus.hidden = true;
  } else {
    mapStatus.textContent =
      "Map not loaded? Check your internet connection or map asset URL. You can still browse using the state directory.";
  }
}, 5000);