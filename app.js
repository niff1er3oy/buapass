/* ===================================================================
   BuaPass — logic
   =================================================================== */

/* ---- ข้อมูลจุดฐานถ่ายรูป -------------------------------------------- */
const STATIONS = [
  {
    id: 1,
    name: "ศาลาชมบัวหลวง",
    emoji: "🪷",
    x: 22, y: 30,
    points: 30,
    short: "ลานบัวหลวงบานเต็มบึงยามเช้า",
    desc: "จุดชมวิวบัวหลวงสีชมพูที่บานสะพรั่งที่สุดในช่วง 06:00–09:00 น. มีศาลาไม้ยื่นลงไปในน้ำ เหมาะกับภาพสะท้อนผิวน้ำ",
    facts: {
      "ช่วงเวลาแนะนำ": "06:00 – 09:00 น.",
      "กิจกรรม": "ถ่ายภาพบัวหลวง + ตอบคำถามพันธุ์บัว",
      "มุมเด็ด": "ยืนปลายศาลา หันกล้องย้อนแสงอาทิตย์",
    },
  },
  {
    id: 2,
    name: "สะพานไม้ไผ่",
    emoji: "🌉",
    x: 46, y: 20,
    points: 25,
    short: "สะพานทอดยาวกลางดงบัวสาย",
    desc: "สะพานไม้ไผ่ยาว 120 เมตร ทอดผ่านดงบัวสายสีม่วง เป็นจุดถ่ายภาพพาโนรามาที่นิยมที่สุดของบึง",
    facts: {
      "ช่วงเวลาแนะนำ": "07:00 – 10:00 น. / 16:30 – 18:00 น.",
      "กิจกรรม": "เดินสำรวจสะพาน + เก็บภาพหมู่",
      "ข้อควรระวัง": "สะพานลื่นช่วงเช้า เดินทีละ 5 คน",
    },
  },
  {
    id: 3,
    name: "ท่าเรือพายบัว",
    emoji: "🛶",
    x: 66, y: 42,
    points: 40,
    short: "ลงเรือพายชมบัวใกล้ ๆ",
    desc: "จุดลงเรือพายเข้าไปกลางกอบัว ระยะทาง 800 เมตร ใช้เวลาราว 30 นาที มีเสื้อชูชีพให้ยืมฟรี",
    facts: {
      "ช่วงเวลาแนะนำ": "06:30 – 09:00 น.",
      "กิจกรรม": "พายเรือ + ถ่ายภาพระยะใกล้ + เก็บขยะในบึง",
      "ค่าบริการ": "ฟรีสำหรับผู้ร่วมกิจกรรม BuaPass",
    },
  },
  {
    id: 4,
    name: "หอชมนกบึงบัว",
    emoji: "🦆",
    x: 38, y: 58,
    points: 35,
    short: "หอสูง 3 ชั้น มองเห็นทั้งบึง",
    desc: "หอชมนกไม้สูง 12 เมตร มองเห็นบึงบัวทั้งผืน ช่วงเช้ามีนกอีโก้ง นกกาน้ำ และนกกระยางมาหากิน",
    facts: {
      "ช่วงเวลาแนะนำ": "06:00 – 08:00 น.",
      "กิจกรรม": "ส่องนก + จดบันทึกชนิดนกที่พบ",
      "อุปกรณ์": "มีกล้องส่องทางไกลให้ยืมที่ชั้น 1",
    },
  },
  {
    id: 5,
    name: "ทุ่งบัวแดงพระอาทิตย์ตก",
    emoji: "🌅",
    x: 78, y: 68,
    points: 45,
    short: "บัวแดงตัดกับแสงสีทองยามเย็น",
    desc: "ลานดินริมบึงฝั่งตะวันตก เป็นจุดชมพระอาทิตย์ตกหลังทุ่งบัวแดง แสงสวยที่สุดของวันอยู่ที่นี่",
    facts: {
      "ช่วงเวลาแนะนำ": "17:00 – 18:30 น.",
      "กิจกรรม": "ถ่ายภาพซิลูเอตต์ + เวิร์กช็อปจัดองค์ประกอบภาพ",
      "มุมเด็ด": "ก้มถ่ายระดับดอกบัวให้ดวงอาทิตย์อยู่หลังดอก",
    },
  },
  {
    id: 6,
    name: "เรือนเพาะพันธุ์บัว",
    emoji: "🌿",
    x: 14, y: 74,
    points: 30,
    short: "เรียนรู้การขยายพันธุ์บัวกว่า 40 สายพันธุ์",
    desc: "โรงเรือนอนุรักษ์พันธุ์บัวหายาก ทั้งบัววิกตอเรีย บัวผัน บัวจงกลนี พร้อมเจ้าหน้าที่บรรยาย",
    facts: {
      "ช่วงเวลาแนะนำ": "09:00 – 16:00 น.",
      "กิจกรรม": "ฟังบรรยาย + ทดลองเพาะเมล็ดบัวกลับบ้าน",
      "ของแจก": "เมล็ดบัวพร้อมคู่มือปลูก 1 ชุด/คน",
    },
  },
];

/* ---- ของรางวัล ---------------------------------------------------- */
const REWARDS = [
  { id: "r1", name: "เมล็ดบัวพันธุ์ดี 1 ชุด", emoji: "🌱", cost: 40, desc: "เมล็ดบัวหลวงพร้อมคู่มือปลูกในกระถาง" },
  { id: "r2", name: "โปสการ์ดภาพบึงบัว", emoji: "📮", cost: 30, desc: "ชุด 4 ใบ ภาพถ่ายฤดูบัวบาน" },
  { id: "r3", name: "กระเป๋าผ้าลายบัว", emoji: "👜", cost: 90, desc: "กระเป๋าผ้าดิบสกรีนลายบัวหลวง" },
  { id: "r4", name: "ขวดน้ำรักษ์บึง", emoji: "🧴", cost: 120, desc: "ขวดน้ำสเตนเลสเก็บความเย็น 12 ชม." },
  { id: "r5", name: "เสื้อยืด BuaPass", emoji: "👕", cost: 160, desc: "เสื้อยืดคอตตอนพิมพ์ลายแผนที่บึงบัว" },
  { id: "r6", name: "คูปองกาแฟร้านริมบึง", emoji: "☕", cost: 50, desc: "แลกเครื่องดื่มร้อน/เย็น 1 แก้ว" },
  { id: "r7", name: "ตุ๊กตานกอีโก้ง", emoji: "🧸", cost: 140, desc: "ตุ๊กตามาสคอตประจำบึงบัว" },
  { id: "r8", name: "บัตรพายเรือรอบพิเศษ", emoji: "🛶", cost: 100, desc: "รอบพายเรือยามเย็นพร้อมไกด์" },
];

const RANKS = [
  { min: 0,   name: "ผู้มาเยือน" },
  { min: 60,  name: "นักเดินบึง" },
  { min: 130, name: "นักสำรวจบัว" },
  { min: 210, name: "เพื่อนแท้บึงบัว" },
];

/* ---- คลังความรู้ ------------------------------------------------- */
const LEARN = [
  {
    icon: "🪷",
    title: "บัว 5 ชนิดที่พบในบึง",
    body: `<ul>
      <li><b>บัวหลวง</b> — ดอกใหญ่สีชมพู/ขาว ชูก้านพ้นน้ำ ใบกลมขอบเรียบ</li>
      <li><b>บัวสาย</b> — ดอกลอยปริ่มน้ำ บานกลางคืนถึงสาย ก้าน (สายบัว) กินได้</li>
      <li><b>บัวผัน</b> — ดอกสีม่วงอมฟ้า บานกลางวัน มีกลิ่นหอมอ่อน</li>
      <li><b>บัวจงกลนี</b> — บัวไทยโบราณ กลีบซ้อนถี่ ไม่ติดเมล็ด</li>
      <li><b>บัววิกตอเรีย</b> — ใบยักษ์ขอบตั้ง เส้นผ่านศูนย์กลางเกิน 1 เมตร</li>
    </ul>`,
  },
  {
    icon: "🌼",
    title: "ส่วนต่าง ๆ ของบัวและประโยชน์",
    body: `<ul>
      <li><b>ดอกและเกสร</b> — บูชาพระ ทำเครื่องหอม เกสรตากแห้งชงดื่ม</li>
      <li><b>เมล็ด (เม็ดบัว)</b> — ต้ม เชื่อม ใส่ขนม โปรตีนสูง</li>
      <li><b>ไหลและรากบัว</b> — ผัด ต้มซุป หรือเชื่อมกรอบ</li>
      <li><b>ใบ</b> — ห่ออาหารและห่อข้าวให้มีกลิ่นหอม</li>
    </ul>`,
  },
  {
    icon: "⏰",
    title: "ทำไมบัวถึงบานตอนเช้าแล้วหุบ",
    body: `บัวหลายชนิดคลี่กลีบรับแสงแรกของวัน แล้วค่อย ๆ หุบช่วงบ่าย เป็นการเคลื่อนไหวตอบสนองต่อแสงและอุณหภูมิ (นิกทิแนสตี) ช่วยล่อแมลงผสมเกสรในช่วงที่มันออกหากิน ปกป้องเกสรจากแดดจัด และลดการสูญเสียน้ำ ดอกหนึ่งมักบาน–หุบซ้ำ 2–3 วันก่อนโรย`,
  },
  {
    icon: "🐦",
    title: "นกที่พบบ่อยในบึงบัว",
    body: `<ul>
      <li><b>นกอีโก้ง</b> — เดินบนใบบัวได้เพราะนิ้วเท้ายาวมาก</li>
      <li><b>นกกาน้ำเล็ก</b> — ดำน้ำจับปลา ชอบกางปีกผึ่งแดด</li>
      <li><b>นกยางกรอกพันธุ์จีน</b> — ยืนนิ่งริมน้ำรอตะครุบปลา</li>
      <li><b>นกอีแจว</b> — หางยาวสวย ทำรังลอยน้ำบนใบบัว</li>
    </ul>`,
  },
  {
    icon: "💧",
    title: "บัวช่วยรักษาคุณภาพน้ำ",
    body: `รากและไหลของบัวดูดซับไนโตรเจนและฟอสฟอรัสส่วนเกิน ช่วยลดการเกิดตะไคร่และน้ำเน่า ใบที่ปกคลุมผิวน้ำช่วยลดอุณหภูมิและแสงที่ส่องถึงสาหร่าย ส่วนกอบัวเป็นแหล่งหลบภัย วางไข่ และอนุบาลลูกปลา`,
  },
  {
    icon: "♻️",
    title: "ช่วยกันรักษาบึงบัว",
    body: `<ul>
      <li>ไม่เด็ดดอก เก็บใบ หรือถอนต้นบัว</li>
      <li>ไม่ให้อาหารปลาและนก เศษอาหารทำให้น้ำเสีย</li>
      <li>นำขยะกลับออกมาทิ้งนอกพื้นที่เสมอ</li>
      <li>เดินบนสะพานและทางเดินที่จัดไว้ ไม่เหยียบกอบัว</li>
      <li>ไม่ปล่อยปลา เต่า หรือพืชต่างถิ่นลงบึง</li>
    </ul>`,
  },
];

const FACTS = [
  "ใบบัววิกตอเรียที่โตเต็มที่รับน้ำหนักได้ราว 30–40 กิโลกรัม หากกระจายน้ำหนักให้ทั่วใบ",
  "เมล็ดบัวหลวงมีเปลือกแข็งมาก เคยมีเมล็ดอายุกว่า 1,000 ปีนำมาเพาะแล้วยังงอกได้",
  "หยดน้ำกลิ้งบนใบบัวโดยไม่ทำให้ใบเปียก เพราะผิวใบมีปุ่มระดับนาโน เรียกว่า “Lotus Effect”",
  "ดอกบัวหลวงสร้างความร้อนในตัวเองได้ รักษาอุณหภูมิดอกให้อุ่นกว่าอากาศราว 10°C เพื่อล่อแมลง",
  "“สายบัว” ที่ใส่แกงส้มคือก้านดอกของบัวสาย ไม่ใช่บัวหลวง",
  "นกอีโก้งเดินบนใบบัวได้สบายเพราะนิ้วเท้ายาวมาก ช่วยกระจายน้ำหนักคล้ายใส่สกีหิมะ",
  "บัวผันและบัวสายเป็นคนละกลุ่มกับบัวหลวง นักพฤกษศาสตร์จัดบัวหลวงไว้วงศ์ของมันเองเลย",
];

const QUIZ = [
  { q: "บัวชนิดใดมีใบใหญ่ที่สุดในโลก?", opts: ["บัวสาย", "บัวหลวง", "บัววิกตอเรีย"], a: 2 },
  { q: "ปรากฏการณ์ที่น้ำกลิ้งบนใบบัวโดยไม่ทำให้ใบเปียก เรียกว่าอะไร?", opts: ["Lotus Effect", "การออสโมซิส", "การสังเคราะห์แสง"], a: 0 },
  { q: "บัวหลวงบานสวยที่สุดในช่วงเวลาใด?", opts: ["ยามเช้า", "เที่ยงวัน", "กลางดึก"], a: 0 },
  { q: "ข้อใดช่วยรักษาบึงบัวได้ดีที่สุด?", opts: ["ให้อาหารปลาเยอะ ๆ", "เก็บขยะกลับบ้าน", "เด็ดดอกบัวเป็นที่ระลึก"], a: 1 },
];
const QUIZ_PTS = 10;   // คะแนนต่อข้อที่ตอบถูก

/* ---- state ------------------------------------------------------- */
const store = {
  checkins: new Set(),   // station ids
  redeemed: new Set(),   // reward ids
  spent: 0,
  quiz: {},              // { [questionIndex]: chosenOptionIndex }
  bonus: 0,              // คะแนนโบนัสจากแบบทดสอบ (หลังกดรับ)
  quizClaimed: false,
};

/* ---- helpers --------------------------------------------------- */
const $  = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

function earned() {
  const stations = STATIONS.filter(s => store.checkins.has(s.id))
                           .reduce((sum, s) => sum + s.points, 0);
  return stations + store.bonus;
}
function balance() { return earned() - store.spent; }

function quizCorrect()  { return QUIZ.reduce((n, q, i) => n + (store.quiz[i] === q.a ? 1 : 0), 0); }
function quizAnswered() { return Object.keys(store.quiz).length; }

function rankFor(pts) {
  return RANKS.reduce((acc, r) => (pts >= r.min ? r.name : acc), RANKS[0].name);
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  t.style.animation = "none";
  void t.offsetWidth;               // restart entrance animation
  t.style.animation = "";
  clearTimeout(toast._t);
  toast._t = setTimeout(() => (t.hidden = true), 2400);
}

/* count a number element up/down to a target */
function animateCount(el, to, dur = 650) {
  const from = parseInt(el.textContent, 10) || 0;
  if (from === to) { el.textContent = String(to); return; }
  const start = performance.now();
  cancelAnimationFrame(el._raf);
  clearTimeout(el._ct);
  const tick = now => {
    const p = Math.min(Math.max((now - start) / dur, 0), 1);
    const eased = 1 - Math.pow(1 - p, 3);       // easeOutCubic
    el.textContent = String(Math.round(from + (to - from) * eased));
    if (p < 1) el._raf = requestAnimationFrame(tick);
  };
  el._raf = requestAnimationFrame(tick);
  el._ct = setTimeout(() => { cancelAnimationFrame(el._raf); el.textContent = String(to); }, dur + 150);
}

/* cartoon particle burst at a screen point */
const CONFETTI_COLORS = ["#ff6faf", "#ffd23f", "#5cc26b", "#8fd3f4", "#ff8a5c", "#ffffff"];
function burst(x, y, count = 22) {
  const layer = $("#fxLayer");
  for (let i = 0; i < count; i++) {
    const p = document.createElement("i");
    p.className = "confetti";
    const ang = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 120;
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    p.style.borderRadius = Math.random() < 0.5 ? "50%" : "3px";
    p.style.setProperty("--dx", Math.cos(ang) * dist + "px");
    p.style.setProperty("--dy", Math.sin(ang) * dist + 140 + "px");
    p.style.setProperty("--dr", (Math.random() * 720 - 360) + "deg");
    p.style.animationDelay = Math.random() * 80 + "ms";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 1100);
  }
}

/* burst centred on an element */
function burstFrom(el, count) {
  const r = el.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, count);
}

/* ---- render: map ---------------------------------------------- */
function renderMap() {
  const map = $(".map-inner");
  $$(".pin", map).forEach(p => p.remove());

  STATIONS.forEach((s, i) => {
    const done = store.checkins.has(s.id);
    const pin = document.createElement("button");
    pin.className = "pin" + (done ? " done" : "");
    pin.style.left = s.x + "%";
    pin.style.top = s.y + "%";
    pin.style.animationDelay = (i * 90) + "ms";
    pin.setAttribute("aria-label", s.name);
    pin.innerHTML = `<span class="pin-head"><span>${done ? "✓" : s.id}</span></span>`;
    pin.addEventListener("click", () => openSheet(s.id));
    map.appendChild(pin);
  });

  const list = $("#stationList");
  list.innerHTML = STATIONS.map(s => {
    const done = store.checkins.has(s.id);
    return `
      <div class="station-item ${done ? "done" : ""}" data-id="${s.id}">
        <div class="station-thumb">${s.emoji}</div>
        <div class="station-info">
          <h4>${s.id}. ${s.name}</h4>
          <p>${s.short}</p>
        </div>
        <div class="station-pts">${done ? "✓ " : "+"}${s.points}</div>
      </div>`;
  }).join("");
  $$(".station-item", list).forEach(el =>
    el.addEventListener("click", () => openSheet(+el.dataset.id)));
}

/* ---- render: points ----------------------------------------- */
function renderPoints() {
  const total = earned();
  const maxTotal = STATIONS.reduce((s, x) => s + x.points, 0) + QUIZ.length * QUIZ_PTS;
  const deg = Math.min(total / maxTotal, 1) * 360;

  animateCount($("#scoreBig"), total);
  $("#scoreRing").style.background =
    `conic-gradient(var(--lotus) ${deg}deg, var(--lotus-l) ${deg}deg)`;
  animateCount($("#checkinCount"), store.checkins.size);
  $("#stationTotal").textContent = STATIONS.length;
  $("#rankText").textContent = rankFor(total);

  let rows = STATIONS.map(s => {
    const done = store.checkins.has(s.id);
    return `
      <div class="history-item ${done ? "" : "pending"}">
        <div class="history-ico">${s.emoji}</div>
        <div class="history-info">
          <h4>${s.name}</h4>
          <p>${done ? "ทำกิจกรรมสำเร็จ" : "ยังไม่ได้เช็คอิน"}</p>
        </div>
        <div class="history-pts">${done ? "+" + s.points : "+0"}</div>
      </div>`;
  }).join("");

  rows += `
    <div class="history-item ${store.quizClaimed ? "" : "pending"}">
      <div class="history-ico">🧠</div>
      <div class="history-info">
        <h4>แบบทดสอบความรู้</h4>
        <p>${store.quizClaimed ? `ตอบถูก ${quizCorrect()}/${QUIZ.length} ข้อ` : "ยังไม่ได้ทำแบบทดสอบ"}</p>
      </div>
      <div class="history-pts">${store.quizClaimed ? "+" + store.bonus : "+0"}</div>
    </div>`;

  $("#history").innerHTML = rows;
}

/* ---- render: shop ----------------------------------------- */
function renderShop() {
  const bal = balance();
  animateCount($("#shopBalance"), bal);

  $("#rewardGrid").innerHTML = REWARDS.map(r => {
    const got = store.redeemed.has(r.id);
    const can = !got && bal >= r.cost;
    return `
      <div class="reward ${got ? "redeemed" : ""}">
        <div class="reward-img">${r.emoji}</div>
        <div class="reward-body">
          <h4>${r.name}</h4>
          <p>${r.desc}</p>
          <span class="reward-cost">${r.cost}</span>
          <button class="btn-redeem" data-id="${r.id}" ${got || !can ? "disabled" : ""}>
            ${got ? "แลกแล้ว ✓" : can ? "แลกเลย" : "คะแนนไม่พอ"}
          </button>
        </div>
      </div>`;
  }).join("");

  $$("#rewardGrid .btn-redeem").forEach(btn =>
    btn.addEventListener("click", () => redeem(btn.dataset.id, btn)));
}

function redeem(id, btn) {
  const r = REWARDS.find(x => x.id === id);
  if (!r || store.redeemed.has(id) || balance() < r.cost) return;
  store.redeemed.add(id);
  store.spent += r.cost;
  if (btn) burstFrom(btn, 26);
  toast(`แลก "${r.name}" สำเร็จ 🎉`);
  renderAll();

  const idx = REWARDS.findIndex(x => x.id === id);
  const card = $$("#rewardGrid .reward")[idx];
  if (card) { card.classList.add("just-won"); card.addEventListener("animationend", () => card.classList.remove("just-won"), { once: true }); }
}

/* ---- render: learn (คลังความรู้) ----------------------------- */
let learnBuilt = false;
let lastFact = -1;

function buildLearn() {
  if (learnBuilt) return;
  learnBuilt = true;

  shuffleFact();
  $("#factShuffle").addEventListener("click", shuffleFact);

  $("#kb").innerHTML = LEARN.map((t, i) => `
    <div class="kb-item" data-i="${i}">
      <button class="kb-head" aria-expanded="false">
        <span class="kb-ico">${t.icon}</span>
        <span class="kb-title">${t.title}</span>
        <span class="kb-chevron">▾</span>
      </button>
      <div class="kb-body">${t.body}</div>
    </div>`).join("");

  $$("#kb .kb-head").forEach(head => head.addEventListener("click", () => {
    const item = head.parentElement;
    const open = item.classList.toggle("open");
    head.setAttribute("aria-expanded", open ? "true" : "false");
  }));

  renderQuiz();
}

function shuffleFact() {
  let i;
  do { i = Math.floor(Math.random() * FACTS.length); }
  while (i === lastFact && FACTS.length > 1);
  lastFact = i;

  const card = $("#factCard");
  card.classList.remove("flip");
  void card.offsetWidth;
  card.classList.add("flip");
  $("#factText").textContent = FACTS[i];
}

function renderQuiz() {
  const answered = quizAnswered();
  const all = answered === QUIZ.length;
  const correct = quizCorrect();

  let html = QUIZ.map((q, i) => {
    const pick = store.quiz[i];
    const done = pick !== undefined;
    return `
      <div class="quiz-q ${done ? "answered" : ""}">
        <p class="quiz-title">${i + 1}. ${q.q}</p>
        <div class="quiz-opts">
          ${q.opts.map((o, j) => {
            let cls = "";
            if (done && j === q.a) cls = "correct";
            else if (done && j === pick) cls = "wrong";
            return `<button class="quiz-opt ${cls}" data-q="${i}" data-o="${j}" ${done ? "disabled" : ""}>${o}</button>`;
          }).join("")}
        </div>
      </div>`;
  }).join("");

  if (all) {
    html += `
      <div class="quiz-result">
        <p>ตอบถูก <strong>${correct}/${QUIZ.length}</strong> ข้อ</p>
        ${store.quizClaimed
          ? `<span class="quiz-claimed">รับโบนัสแล้ว +${store.bonus} คะแนน ✓</span>`
          : `<button class="btn-primary" id="quizClaim">รับโบนัส +${correct * QUIZ_PTS} คะแนน</button>`}
      </div>`;
  } else {
    html += `<p class="quiz-hint">ตอบให้ครบทุกข้อเพื่อรับคะแนนโบนัส (${answered}/${QUIZ.length})</p>`;
  }

  $("#quizCard").innerHTML = html;

  $$("#quizCard .quiz-opt:not([disabled])").forEach(b =>
    b.addEventListener("click", () => answerQuiz(+b.dataset.q, +b.dataset.o)));
  const claim = $("#quizClaim");
  if (claim) claim.addEventListener("click", claimQuiz);
}

function answerQuiz(qi, oi) {
  if (store.quiz[qi] !== undefined) return;
  store.quiz[qi] = oi;
  toast(QUIZ[qi].a === oi ? "ถูกต้อง! 🎉" : "ยังไม่ถูก ลองอ่านบทความด้านบนดูนะ");
  renderQuiz();
}

function claimQuiz() {
  if (store.quizClaimed) return;
  store.quizClaimed = true;
  store.bonus = quizCorrect() * QUIZ_PTS;
  const btn = $("#quizClaim");
  if (btn) burstFrom(btn, 26);
  toast(`รับโบนัส +${store.bonus} คะแนน 🧠`);
  renderAll();
}

/* ---- bottom sheet ---------------------------------------- */
let activeStation = null;

function openSheet(id) {
  const s = STATIONS.find(x => x.id === id);
  if (!s) return;
  activeStation = s;
  const done = store.checkins.has(s.id);

  $("#sheetPhoto").textContent = s.emoji;
  $("#sheetTag").textContent = `จุดฐานที่ ${s.id}`;
  $("#sheetTitle").textContent = s.name;
  $("#sheetDesc").textContent = s.desc;
  $("#sheetFacts").innerHTML = Object.entries(s.facts)
    .map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`).join("");
  $("#sheetPoints").textContent = "+" + s.points;

  const btn = $("#sheetCheckin");
  btn.disabled = done;
  btn.textContent = done ? "เช็คอินแล้ว ✓" : "เช็คอิน & ถ่ายรูปที่จุดนี้";

  $("#sheetBackdrop").hidden = false;
}

function closeSheet() { $("#sheetBackdrop").hidden = true; activeStation = null; }

function doCheckin() {
  if (!activeStation) return;
  if (store.checkins.has(activeStation.id)) return;
  store.checkins.add(activeStation.id);
  const name = activeStation.name, pts = activeStation.points;
  burstFrom($("#sheetCheckin"), 26);
  setTimeout(() => {
    closeSheet();
    burst(window.innerWidth / 2, window.innerHeight * 0.4, 30);
    toast(`เช็คอิน "${name}" +${pts} คะแนน`);
    renderAll();
    if (store.checkins.size === STATIONS.length) {
      setTimeout(() => toast("🎉 เก็บครบทุกจุดฐานแล้ว! สุดยอดไปเลย"), 2600);
    }
  }, 260);
}

/* ---- tabs ------------------------------------------------ */
function switchTab(target) {
  $$(".screen").forEach(s => s.classList.toggle("is-active", s.id === target));
  $$(".tab").forEach(t => t.classList.toggle("is-active", t.dataset.target === target));
  window.scrollTo({ top: 0 });
}

/* ---- render all --------------------------------------- */
let prevBalance = null;
function renderAll() {
  const bal = balance();
  animateCount($("#walletValue"), bal);
  if (prevBalance !== null && bal !== prevBalance) {
    const w = $("#wallet");
    w.classList.remove("bump");
    void w.offsetWidth;
    w.classList.add("bump");
  }
  prevBalance = bal;

  renderMap();
  renderPoints();
  renderShop();
  if (learnBuilt) renderQuiz();
}

/* ---- init -------------------------------------------- */
$$(".tab").forEach(t => t.addEventListener("click", () => switchTab(t.dataset.target)));
$("#sheetClose").addEventListener("click", closeSheet);
$("#sheetBackdrop").addEventListener("click", e => {
  if (e.target === $("#sheetBackdrop")) closeSheet();
});
$("#sheetCheckin").addEventListener("click", doCheckin);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeSheet(); });

buildLearn();
renderAll();
