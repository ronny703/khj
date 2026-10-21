/* ▼ 강하진 캐릭터 데이터 및 설정 ▼ */
const C = {
  me: "강하진", 
  wall: "", 
  city: "서울", temp: "18°", wx: "오늘도 연습 일정 소화 중", alerts: 3,
  badge: {tel: 1, msg: 2, mail: "", as: 0, set: 0},
  
  kk: [
    {n: "매니저 형", t: "오후 3:12", c: 1, m: [[0, "하진아 스케줄 확인했어?"], [1, "네, 확인했습니다 형!"]]},
    {n: "연습생 동기", t: "어제", c: 0, m: [[0, "오늘 댄스 연습 가냐?"], [1, "응 바로 가는 중."]]}
  ],
  
  msg: [
    {n: "강하진", t: "오후 6:30", c: 1, m: [[0, "나 리허설 끝났어."]]}
  ],
  
  pop: {n: "강하진", m: [[0, "오늘도 고생했어요 다들 좋은 꿈 꾸기~ 🌙"], [1, "하진이도 수고했어요!"]]},
  
  re: [
    ["안녕", "왜? 뭐 필요한 거 있어?"],
    ["회귀", "…무슨 소리야? 이상한 소리 하지 마."],
    ["멱살", "내가 누구 멱살을 잡았다고 그래? 오해야."],
    ["데뷔", "이번 무대 무조건 내꺼야. 지켜봐 줘."],
    ["사랑해", "갑자기 왜 이래… 고맙긴 한데."]
  ], 
  def: ["음? 무슨 말인지 모르겠네.", "나 지금 연습해야 돼서 이따 연락할게.", "하하, 그래."], 
  
  tel: [
    ["강하진", "수신 · 3분전", "오후 3:10"],
    ["매니저 형", "부재중", "어제"]
  ],
  
  mus: ["My Name is...", "강하진 (Debut Track)"], 
  gal: 6,
  photos: []
};

const $ = id => document.getElementById(id);
let clk = '', cur, mode;

function go(id) {
  const ph = $('ph');
  const target = $(id);
  if (!ph || !target) return;
  
  document.querySelectorAll('.scr').forEach(e => e.classList.toggle('on', e.id === id));
  ph.dataset.t = target.dataset.t || 'l';
  ph.dataset.s = id;
  if ($('sl'))$('sl').textContent = (id === 'lock') ? 'SKT' : clk;
}

const S = (b, g) => `<div class="ic" style="background:${b}"><svg viewBox="0 0 24 24" width="34" height="34">${g}</svg></div>`;
const G = 'linear-gradient(#6fe27f,#2fbf4a)', d0 = new Date();
const pet = [...Array(8)].map((_, i) => `<ellipse cx="12" cy="7" rx="3" ry="4.6" fill="hsl(${i * 45 + 5} 85% 58%)" opacity=".7" transform="rotate(${i * 45} 12 12)"/>`).join('');

const IC = {
  fc: S(G, '<rect x="3" y="7" width="12" height="10" rx="3" fill="#fff"/><path d="M16 11l5-3v8l-5-3z" fill="#fff"/>'),
  cal: `<div class="ic" style="background:#fff;align-content:center"><i>${'일월화수목금토'[d0.getDay()]}요일</i><em>${d0.getDate()}</em></div>`,
  gal: S('#fff', pet),
  cam: S('linear-gradient(#d9d9de,#9d9da3)', '<rect x="2.5" y="6.5" width="19" height="13" rx="3" fill="#222"/><circle cx="12" cy="13" r="4" fill="none" stroke="#ddd" stroke-width="1.6"/>'),
  mail: S('linear-gradient(#5ab6ff,#1a6df0)', '<rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M3.5 7l8.5 6 8.5-6" fill="none" stroke="#fff" stroke-width="1.8"/>'),
  memo: '<div class="ic" style="background:linear-gradient(#f7d54a 24%,#fff 24%)"></div>',
  clk: S('#111', '<circle cx="12" cy="12" r="9.5" fill="#fff"/><path d="M12 5v7l4 2" stroke="#111" stroke-width="1.6" fill="none"/>'),
  as: S('linear-gradient(#35b4ff,#1a5be0)', '<path d="M8 18l7-12M9 6l8 12M6 15h12" stroke="#fff" stroke-width="2" stroke-linecap="round"/>'),
  wx: S('linear-gradient(#3b7be0,#79b8f5)', '<circle cx="16" cy="9" r="4" fill="#ffd44a"/><ellipse cx="10" cy="15" rx="6.5" ry="4" fill="#fff"/>'),
  set: S('linear-gradient(#aaaab1,#6d6d73)', '<circle cx="12" cy="12" r="7.5" fill="none" stroke="#fff" stroke-width="3.6" stroke-dasharray="2.6 1.7"/><circle cx="12" cy="12" r="5" fill="none" stroke="#fff" stroke-width="2"/>'),
  kk: S('#fee500', '<ellipse cx="12" cy="11" rx="9" ry="7.2" fill="#3b1e1e"/><path d="M6 18l1-3.5 3 2z" fill="#3b1e1e"/>'),
  pop: S('linear-gradient(#b69cff,#7c5ce6)', '<path d="M12 20s-7-4.6-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.4-7 10-7 10z" fill="#fff"/>'),
  tel: S(G, '<path fill="#fff" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/>'),
  saf: S('#fff', '<circle cx="12" cy="12" r="9.5" fill="#3a9bf0"/><path d="M15.5 8.5l-2 5-5 2 2-5z" fill="#ff3b30"/>'),
  msg: S(G, '<ellipse cx="12" cy="11" rx="9" ry="7.3" fill="#fff"/><path d="M5 20c2-.8 3-2 3.4-3.6l2.4 1z" fill="#fff"/>'),
  mus: S('linear-gradient(#ff6b7d,#e8213f)', '<path d="M9 17V6l10-2v11" fill="none" stroke="#fff" stroke-width="2.2"/><circle cx="7" cy="17.5" r="2.8" fill="#fff"/><circle cx="17" cy="15.5" r="2.8" fill="#fff"/>')
};

const ap = (k, l, a) => `<div class="ap" ${a ? `onclick="${a}"` : ''}>${IC[k]}${C.badge[k] ? `<b class="bg">${C.badge[k]}</b>` : ''}<span>${l}</span></div>`;

window.addEventListener('DOMContentLoaded', () => {
  if ($('hg')) {$('hg').innerHTML = `<div class="wd"><span>${C.city} ➤</span><b>${C.temp}</b>${C.wx}</div>` +
      ap('fc', 'FaceTime') + ap('cal', '캘린더') + ap('gal', '사진', "go('gal')") + ap('cam', '카메라') +
      ap('mail', 'Mail') + ap('memo', '메모') + ap('clk', '시계') + ap('as', 'App Store') +
      ap('wx', '날씨') + ap('set', '설정') + ap('kk', '카카오톡', "go('kk')") + ap('pop', '팝팝', "room('pop',-1)");
  }

  if ($('dk')) {$('dk').innerHTML = ap('tel', '전화', "go('tel')") + ap('saf', 'Safari') + ap('msg', '메시지', "go('msg')") + ap('mus', 'Music', "go('mus')");
  }

  if ($('lw'))$('lw').innerHTML = `☁ <b>${C.temp}</b><br>흐림<small>최고:18° 최저:11°</small>`;
  if ($('al'))$('al').textContent = C.alerts + '개의 알림';

  const sil = '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4.2" fill="#fff"/><path d="M3.5 22c0-5.5 4-8 8.5-8s8.5 2.5 8.5 8z" fill="#fff"/></svg>';

  if ($('kk')) {$('kk').innerHTML = `<div class="hd">카카오톡</div><div class="body">` + C.kk.map((c, i) => `<div class="row" onclick="room('kk',${i})"><div class="av">${c.n[0]}</div><div class="rt"><b>${c.n}</b><p>${c.m[c.m.length - 1][1]}</p></div><div class="tm">${c.t}${c.c ? `<br><span class="bd">${c.c}</span>` : ''}</div></div>`).join('') + `</div>`;
  }

  if ($('msg')) {$('msg').innerHTML = `<div class="mh"><span>편집</span><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0a7aff" stroke-width="1.8"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M19 3l2 2-9 9-3 1 1-3z"/></svg></div><div class="mt2">메시지</div><div class="body">` + C.msg.map((c, i) => `<div class="mr" onclick="room('msg',${i})">${c.c ? '<i class="ud"></i>' : ''}<div class="av2">${sil}</div><div class="mx"><div class="l1"><b>${c.n}</b><span>${c.t} ›</span></div><p>${c.m[c.m.length - 1][1]}</p></div></div>`).join('') + `</div>`;
  }

  const N = C.photos.length || C.gal;
  if ($('gc'))$('gc').textContent = '2026년 9월 30일';
  if ($('gn'))$('gn').textContent = C.me;

  if ($('gl')) {$('gl').innerHTML = Array.from({ length: N }, (_, i) => C.photos[i] ? `<div><img src="${C.photos[i]}" style="width:100%;height:100%;object-fit:cover"></div>` : `<div style="background:linear-gradient(135deg,hsl(${i * 37 % 360} 25% 35%),hsl(${(i * 37 + 50) % 360} 30% 22%))">하진 ${i + 1}</div>`).join('');
  }

  if ($('tb')) {$('tb').innerHTML = C.tel.map(r => `<div class="row rc ${r[1] === '부재중' ? 'red' : ''}" onclick="makeCall('${r[0]}')" style="cursor:pointer;"><div class="rt"><b>${r[0]}</b><br><small>${r[1]}</small></div><div class="tm">${r[2]}</div></div>`).join('');
  }

  if ($('mn'))$('mn').textContent = C.mus[0];
  if ($('ma'))$('ma').textContent = C.mus[1];
  if ($('bt'))$('bt').textContent = '85';

  tick();
  if ($('sl'))$('sl').textContent = 'SKT';
  setInterval(tick, 20000);
});

const bub = x => !x[0] && mode === 'p' ? `<div class="ar"><div class="av pa">${cur.n[0]}</div><div><span class="ab">ARTIST</span> <b>${cur.n}</b><div class="b o">${x[1]}</div></div></div>` : `<div class="b ${x[0] ? 'me' : 'o'}">${x[1]}</div>`;

function room(k, i) {
  cur = i < 0 ? C[k] : C[k][i];
  mode = k === 'kk' ? 'k' : k === 'pop' ? 'p' : 'm';
  const e = $('chat');
  if (!e) return;
  
  e.className = 'scr on ' + mode;
  e.dataset.t = 'd';
  e.innerHTML = `<div class="top"><i onclick="go('${k === 'pop' ? 'home' : k}')">‹</i>${cur.n}</div>` +
    `${mode === 'p' ? '<div class="sub">bubble 💜 + 100</div>' : ''}` +
    `<div class="ms" id="ms">${cur.m.map(bub).join('')}</div>` +
    `<div class="in"><input id="ti" placeholder="메시지 입력" onkeydown="if(event.key==='Enter')send()"><b onclick="send()">↑</b></div>`;
  go('chat');
  if ($('ms'))$('ms').scrollTop = 1e5;
}

function put(x) {
  if (!cur || !cur.m) return;
  cur.m.push(x);
  if ($('ms')) {
    $('ms').insertAdjacentHTML('beforeend', bub(x));$('ms').scrollTop = 1e5;
  }
}

function send() {
  const input = $('ti');
  if (!input) return;
  const v = input.value.trim();
  if (!v) return;
  input.value = '';
  put([1, v]);

  setTimeout(() => {
    const match = C.re.find(a => v.includes(a[0]));
    const reply = match ? match[1] : C.def[Math.floor(Math.random() * C.def.length)];
    put([0, reply]);
  }, 900);
}

function makeCall(name) {
  const e = $('chat');
  if (!e) return;
  
  e.className = 'scr on m';
  e.dataset.t = 'd';
  e.innerHTML = `<div class="top"><i onclick="go('tel')">‹</i>${name} 통화 중</div><div class="ms" id="ms"><div class="b o">통화가 연결되었습니다...</div></div>`;
  go('chat');

  const callScripts = [
    "하진: 여보세요? 나 지금 스케줄 끝났어.",
    "하진: 왜 갑자기 전화했어? 무슨 일 있어?",
    "하진: …아무 일도 없다고? 장난치지 말고.",
    "하진: 조심히 들어가고, 이따 숙소 가서 다시 연락할게."
  ];

  callScripts.forEach((scriptText, index) => {
    setTimeout(() => {
      if ($('ms')) {
        put([0, scriptText]);
      }
    }, (index + 1) * 2000);
  });
}

function tick() {
  const d = new Date(), h = d.getHours(), m = String(d.getMinutes()).padStart(2, '0');
  clk = h + ':' + m;
  if ($('tt'))$('tt').textContent = clk;
  if ($('dt'))$('dt').textContent = (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ' + '일월화수목금토'[d.getDay()] + '요일';
  if (document.getElementById('ph') && $('ph').dataset.s !== 'lock' && $('sl'))$('sl').textContent = clk;
}
