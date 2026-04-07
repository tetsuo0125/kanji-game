// 漢字データ (文部科学省 学習指導要領・常用漢字2,136字を完全網羅)
const kanjiData = {
  1: "一右雨円王音下火花貝学気休金九空月犬見口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早足村大男竹中虫町天田土二日入年八百文木本名目立力林六".split(""),
  2: "引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数星晴声西切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母万野友曜年来理里話".split(""),
  3: "悪安暗医委意育員院飲運泳駅央横屋温化荷界開階貝外角楽活感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談地池置仲柱注柱帳調追笛鉄転等都度投島湯登等動童内波配倍箱畑発反坂板皮備鼻筆氷表秒病品負部服福物平返勉放万味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和".split(""),
  4: "愛案以衣位囲胃印英栄塩億加果貨課芽改械害街各覚完官管関観願希季紀喜旗器機議求泣救給挙漁共協鏡極訓軍群径型景芸欠結建健験固候航康告差最材昨札刷察殺参産散残司視詞試詩誌慈辞鹿失借種周祝順初松笑唱焼象照賞臣信真成選戦銭善然単置仲宙忠著帳腸低底停的典伝灯堂特毒熱念燃能望波敗発倍梅博飯飛費必票標不付夫府副粉兵別辺変便包法望牧末満未脈民無約勇要養浴利陸良料量輪類令冷例連老労録昨街祝茨媛岡渇潟岐埼滋鹿縄奈梨阪阜香佐徳富武良".split(""),
  5: "圧移因永営衛易益液演応往桜恩可仮価河過賀快解格確額刊幹慣眼基寄規技義逆久旧居許境均禁句型経潔件券圏堅検権険献源厳個己呼誤効厚耕航鉱構興講混査再災妻採際在財罪雑酸賛支志枝師資飼似児事侍治辞磁示耳自辞軸執失嫉写謝車遮舎煮射謝惹者若構穀際酸殺支飼講混合査祭財".split(""),
  6: "異遺域宇映延沿我灰拡革閣割株干巻看簡危机揮貴疑吸供胸郷勤筋系敬警劇激穴絹権憲源厳己呼己互午呉娯後御悟交侯喉口功工巧恒慌抗拘控攻更校格核殻革学楽額刊幹慣感敢漢管関寛冠完官汗刊閑".split(""),
  "jh1": "亜哀挨曖握扱宛嵐依威為畏尉萎偉椅彙違維慰緯壱逸芋咽姻淫陰隠韻唄鬱畝浦詠影鋭疫悦越謁閲炎怨宴援延煙猿鉛縁艶汚凹押旺欧殴翁奥憶臆虞乙俺卸穏佳苛架華菓渦嫁暇禍靴寡箇稼蚊牙瓦雅餓介戒怪拐悔皆塊楷潰壊懐諧劾崖涯慨蓋該概骸垣柿核殻郭較隔獲嚇穫岳顎掛括喝渇".split(""),
  "jh2": "葛滑褐轄且釜鎌刈甘汗缶肝冠勘貫喚換敢緩企岐忌軌既棋棄騎姫欺犠菊吉喫虐虚峡脅凝斤緊愚偶遇刑契啓掲携憩鶏鯨倹賢幻孤弧雇顧娯悟孔巧甲坑拘郊控慌硬絞綱酵克獄恨紺魂墾債催削搾錯撮擦暫祉施諮侍慈軸疾湿赦邪殊寿潤遵如徐匠昇掌晶焦衝鐘冗嬢錠譲嘱辱伸".split(""),
  "jh3": "辛審炊粋衰酔遂穂随髄瀬牲婿請斥隻惜籍摂潜繕阻措粗礎双桑掃葬遭憎促賊怠胎袋逮滞滝択卓託諾奪胆鍛壇稚畜窒抽鋳駐彫超聴陳鎮墜帝訂締哲斗塗凍陶痘匿篤豚尿粘婆排陪縛伐帆伴畔藩蛮卑碑泌漂苗赴符封伏覆紛墳癖募慕簿芳邦奉胞倣崩飽縫乏妨房某膨謀墨没翻魔埋膜又魅滅免幽誘憂揚揺擁抑裸濫吏隆了猟陵糧厘励零霊裂廉錬炉浪廊楼漏".split("")
};

// 状態管理
let currentGrade = "1";
let currentKanjiList = [];
let currentKanjiIndex = 0;
let writer = null;
let score = 0;
let nextKanjiTimeout = null;
let gameState = 'idle'; 
let mistakenKanjiList = [];
let isReviewMode = false;
const dataCache = new Map(); // データキャッシュ

// DOM Elements
const levelSelectionScreen = document.getElementById('level-selection');
const gameScreen = document.getElementById('game-screen');
const kanjiTarget = document.getElementById('kanji-target');
const gradeTitle = document.getElementById('current-grade-title');
const scoreCounter = document.getElementById('score-counter');
const totalCounter = document.getElementById('total-counter');
const feedbackMessage = document.getElementById('feedback-message');
const backBtn = document.getElementById('back-btn');
const hintBtn = document.getElementById('hint-btn');
const skipBtn = document.getElementById('skip-btn');
const appContainer = document.getElementById('app');
const loadingSpinner = document.getElementById('loading-spinner');
const resultControls = document.getElementById('result-controls');
const restartBtn = document.getElementById('restart-btn');
const mistakeContainer = document.getElementById('mistake-container');
const mistakeListElem = document.getElementById('mistake-list');
const reviewBtn = document.getElementById('review-btn');
const soundToggle = document.getElementById('sound-toggle');

// 音響管理
class SoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('kanjiMuted') === 'true';
    this.bgmTimer = null;
    this.updateIcon();
  }
  init() { 
    if (this.ctx) {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        return;
    }
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  toggle() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('kanjiMuted', this.isMuted);
    this.updateIcon();
    if (this.isMuted) { this.stopBGM(); } else { this.startBGM(); }
  }
  updateIcon() {
    soundToggle.textContent = this.isMuted ? '🔇' : '🔊';
    soundToggle.style.opacity = this.isMuted ? '0.5' : '1';
  }
  playCorrect() {
    if (this.isMuted || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine'; osc.connect(gain); gain.connect(this.ctx.destination);
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.1);
    osc.frequency.setValueAtTime(783.99, now + 0.2);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    osc.start(now); osc.stop(now + 0.5);
  }
  playMistake() {
    if (this.isMuted || !this.ctx) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth'; osc.connect(gain); gain.connect(this.ctx.destination);
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.3);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.3);
    osc.start(now); osc.stop(now + 0.3);
  }
  startBGM() {
    if (this.isMuted || this.bgmTimer) return;
    this.init();
    let step = 0;
    const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 659.25];
    const playNote = () => {
      if (this.isMuted) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(notes[step % notes.length], now);
      osc.connect(gain); gain.connect(this.ctx.destination);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now); osc.stop(now + 0.4);
      step++;
      this.bgmTimer = setTimeout(playNote, 400);
    };
    playNote();
  }
  stopBGM() { if (this.bgmTimer) { clearTimeout(this.bgmTimer); this.bgmTimer = null; } }
}

const sounds = new SoundManager();
soundToggle.addEventListener('click', () => { sounds.init(); sounds.toggle(); });

document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const targetBtn = e.target.closest('.level-btn');
    if (targetBtn) {
        sounds.init();
        sounds.startBGM();
        const grade = targetBtn.dataset.grade;
        startGame(grade);
    }
  });
});

function loadHighScores() {
  const allGrades = ["1", "2", "3", "4", "5", "6", "jh1", "jh2", "jh3"];
  allGrades.forEach(g => {
    const record = localStorage.getItem('kanjiHighScore_' + g);
    const scoreElem = document.getElementById('score-grade-' + g);
    if (scoreElem) scoreElem.textContent = record !== null ? `最高記録: ${record}点` : '';
    
    // 星の表示処理
    const clearCount = parseInt(localStorage.getItem('kanjiClearCount_' + g)) || 0;
    const starsElem = document.getElementById('stars-grade-' + g);
    if (starsElem) {
        const starCount = Math.min(clearCount, 5);
        starsElem.textContent = starCount > 0 ? '⭐'.repeat(starCount) : '';
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
    loadHighScores();
    // iOS/Android向けオーディオアンロック
    const unlockAudio = () => { if (sounds.ctx && sounds.ctx.state === 'suspended') sounds.ctx.resume(); };
    document.addEventListener('touchstart', unlockAudio, {once:true});
    document.addEventListener('click', unlockAudio, {once:true});
});
backBtn.addEventListener('click', showLevelSelection);
restartBtn.addEventListener('click', () => { startGame(currentGrade); });
reviewBtn.addEventListener('click', () => { startReviewMode(); });

function showLevelSelection() {
  if (nextKanjiTimeout) clearTimeout(nextKanjiTimeout);
  gameScreen.classList.remove('active');
  levelSelectionScreen.classList.add('active');
  gameState = 'idle';
  if (writer) { kanjiTarget.innerHTML = ''; writer = null; }
  loadHighScores();
}

function getGradeName(grade) {
    const names = { "1": "小学1年生", "2": "小学2年生", "3": "小学3年生", "4": "小学4年生", "5": "小学5年生", "6": "小学6年生", "jh1": "中学1年生", "jh2": "中学2年生", "jh3": "中学3年生" };
    return names[grade] || grade;
}

function startGame(grade) {
  isReviewMode = false;
  mistakenKanjiList = [];
  currentGrade = grade;
  currentKanjiList = [...kanjiData[grade]].sort(() => Math.random() - 0.5).slice(0, 10);
  currentKanjiIndex = 0;
  score = 0;
  gradeTitle.textContent = getGradeName(grade) + "の漢字";
  totalCounter.textContent = currentKanjiList.length;
  scoreCounter.textContent = score;
  levelSelectionScreen.classList.remove('active');
  gameScreen.classList.add('active');
  resultControls.classList.add('hidden');
  mistakeContainer.classList.add('hidden');
  loadKanji();
  preloadNext(); // 次の漢字をプリロード
}

function startReviewMode() {
  isReviewMode = true;
  currentKanjiList = [...mistakenKanjiList];
  mistakenKanjiList = [];
  currentKanjiIndex = 0;
  score = 0;
  gradeTitle.textContent = `復習モード`;
  totalCounter.textContent = currentKanjiList.length;
  scoreCounter.textContent = score;
  resultControls.classList.add('hidden');
  mistakeContainer.classList.add('hidden');
  feedbackMessage.classList.add('hidden');
  loadKanji();
}

// プリロード機能
function preloadNext() {
  if (currentKanjiIndex + 1 < currentKanjiList.length) {
    const nextChar = currentKanjiList[currentKanjiIndex + 1];
    if (!dataCache.has(nextChar)) {
        fetch('https://cdn.jsdelivr.net/gh/chanind/hanzi-writer-data-jp@master/data/' + nextChar + '.json')
        .then(res => res.json())
        .then(data => dataCache.set(nextChar, data))
        .catch(() => {});
    }
  }
}

async function loadKanji() {
  if (nextKanjiTimeout) clearTimeout(nextKanjiTimeout);
  if (currentKanjiIndex >= currentKanjiList.length) { finishGame(); return; }
  gameState = 'loading';
  const kanji = currentKanjiList[currentKanjiIndex];
  if (writer) { kanjiTarget.innerHTML = ''; writer = null; }
  feedbackMessage.classList.add('hidden');
  resultControls.classList.add('hidden');
  loadingSpinner.classList.remove('hidden');
  kanjiTarget.style.opacity = '0';

  // 1) データの存在を事前に確認・取得 (HanziWriter内部でのエラー画面フリーズを防ぐ)
  let charData = null;
  if (dataCache.has(kanji)) {
      charData = dataCache.get(kanji);
  } else {
      try {
          const res = await fetch('https://cdn.jsdelivr.net/gh/chanind/hanzi-writer-data-jp@master/data/' + kanji + '.json');
          if (!res.ok) throw new Error("Data not found");
          charData = await res.json();
          dataCache.set(kanji, charData);
      } catch (err) {
          console.warn("漢字データが存在しません。スキップします:", kanji);
          currentKanjiIndex++;
          loadKanji();
          return;
      }
  }

  // 2) 画面幅に合わせてCanvasのサイズを最適化する
  let containerSize = kanjiTarget.clientWidth;
  if (!containerSize || containerSize === 0) containerSize = 250;
  const targetSize = Math.min(containerSize - 10, 270); // コンテナより少し小さめに

  writer = HanziWriter.create('kanji-target', kanji, {
    width: targetSize, 
    height: targetSize, 
    padding: targetSize * 0.08, 
    strokeAnimationSpeed: 2.5, 
    delayBetweenStrokes: 50, 
    strokeColor: '#5d4037', 
    radialStyle: true, 
    showOutline: true, 
    outlineColor: '#fce4ec', 
    drawingColor: '#ff6b6b', 
    drawingWidth: targetSize * 0.16, 
    showCharacter: false,
    charDataLoader: function(char, onComplete) {
      onComplete(charData);
    }
  });

  setTimeout(() => { 
      if (gameState === 'loading') { 
          gameState = 'playing'; 
          loadingSpinner.classList.add('hidden'); 
          kanjiTarget.style.opacity = '1'; 
          startQuiz(); 
      } 
  }, 50);
}

function startQuiz() {
  if (!writer) return;
  writer.quiz({ leniency: 2.2, showHintAfterMisses: 1, onMistake: () => { handleMistake(); }, onComplete: () => { handleSuccess(); } });
}

function handleMistake() {
  if (gameState !== 'playing') return;
  gameState = 'failed';
  sounds.playMistake();
  if (writer) writer.cancelQuiz();
  const kanji = currentKanjiList[currentKanjiIndex];
  if (!mistakenKanjiList.includes(kanji)) mistakenKanjiList.push(kanji);
  feedbackMessage.classList.remove('hidden');
  feedbackMessage.innerHTML = 'ざんねん！まちがえました💧';
  feedbackMessage.style.color = '#747d8c';
  appContainer.classList.add('bounce-animation');
  setTimeout(() => { appContainer.classList.remove('bounce-animation'); }, 500);
  nextKanjiTimeout = setTimeout(() => { feedbackMessage.style.color = '#ff7675'; currentKanjiIndex++; loadKanji(); preloadNext(); }, 1200);
}

function handleSuccess() {
  if (gameState !== 'playing') return;
  gameState = 'success';
  sounds.playCorrect();
  score++;
  scoreCounter.textContent = score;
  feedbackMessage.classList.remove('hidden');
  feedbackMessage.innerHTML = 'すごーい！大正解！🎉';
  appContainer.classList.add('bounce-animation');
  setTimeout(() => { appContainer.classList.remove('bounce-animation'); }, 500);
  try { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#ffb7b2', '#e2f0cb', '#c7ceea', '#f3b0e7', '#ffeaa7'] }); } catch(e) {}
  nextKanjiTimeout = setTimeout(() => { currentKanjiIndex++; loadKanji(); preloadNext(); }, 1000);
}

function finishGame() {
  gameState = 'finished';
  kanjiTarget.style.opacity = '0';
  setTimeout(() => { kanjiTarget.innerHTML = ''; kanjiTarget.style.opacity = '1'; }, 300);
  loadingSpinner.classList.add('hidden');
  feedbackMessage.classList.remove('hidden');
  feedbackMessage.innerHTML = `おわったよ！<br> ${score}点 / ${currentKanjiList.length}点 でした！💖`;
  resultControls.classList.remove('hidden');
  if (!isReviewMode) {
    const prevHighScore = localStorage.getItem('kanjiHighScore_' + currentGrade);
    if (prevHighScore === null || score > parseInt(prevHighScore)) {
      localStorage.setItem('kanjiHighScore_' + currentGrade, score);
      feedbackMessage.innerHTML += `<br><span style="color: #6c5ce7; font-size: 1.2rem;">✨ 新記録達成！ ✨</span>`;
    }
    
    // 満点クリアの場合のみ、星用のクリアカウントを増やす
    if (score === currentKanjiList.length) {
      const prevClearCount = parseInt(localStorage.getItem('kanjiClearCount_' + currentGrade)) || 0;
      localStorage.setItem('kanjiClearCount_' + currentGrade, prevClearCount + 1);
    }
  }
  if (mistakenKanjiList.length > 0) {
    mistakeListElem.textContent = mistakenKanjiList.join("・");
    mistakeContainer.classList.remove('hidden');
  } else {
    mistakeContainer.classList.add('hidden');
  }
  try { if (score === currentKanjiList.length) { confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 }, colors: ['#ffb7b2', '#e2f0cb', '#c7ceea', '#f3b0e7', '#ffeaa7'] }); } } catch(e) {}
}

hintBtn.addEventListener('click', () => {
    if (gameState !== 'playing' || !writer) return;
    // quizを上書きしないよう、正解の模範解答をうっすら1.5秒だけ表示してヒントとする
    writer.showCharacter();
    setTimeout(() => { if(writer && gameState === 'playing') writer.hideCharacter(); }, 1500);
});

skipBtn.addEventListener('click', () => {
    if (gameState === 'loading' || gameState === 'success' || gameState === 'finished') return;
    if (writer) { 
        writer.cancelQuiz(); // 進行中のクイズを確実にキャンセル
        if (nextKanjiTimeout) clearTimeout(nextKanjiTimeout); 
        currentKanjiIndex++; 
        loadKanji(); 
        preloadNext(); 
    }
});
