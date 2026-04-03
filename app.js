// 漢字データ (学年ごとに簡単なものをいくつかピックアップ)
// 「hanzi-writer-data-jp」に確実に存在しやすい一般的な漢字を厳選
const kanjiData = {
  1: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "水", "木", "金", "土", "日", "月", "山", "川", "田", "人", "目", "口", "耳", "手", "足", "力", "上", "下", "中", "大", "小", "本", "文", "字", "白", "赤", "青", "夕", "石", "竹"],
  2: ["春", "夏", "秋", "冬", "朝", "昼", "夜", "晴", "雲", "雪", "海", "池", "星", "肉", "鳥", "牛", "馬", "魚", "虫", "光", "風", "声", "色", "顔", "首", "心", "図", "画", "形", "矢", "弓", "刀", "里", "門", "戸", "広", "交", "丸", "角", "点"],
  3: ["波", "緑", "葉", "寒", "暑", "湖", "氷", "豆", "味", "旅", "駅", "勉", "強", "鉄", "橋", "銀", "庭", "坂", "岸", "島", "館", "宿", "宮", "客", "局", "庫", "病", "院", "医", "薬", "皮", "血", "命", "息", "悲", "苦", "暗", "悪", "安", "幸"], 
  4: ["愛", "案", "以", "衣", "位", "囲", "胃", "印", "英", "栄", "塩", "億", "加", "果", "貨", "課", "芽", "改", "械", "害", "街", "各", "覚", "完", "官", "管", "関", "観", "願", "希", "季", "紀", "喜", "旗", "器", "機", "議", "求", "泣", "救"], 
  5: ["圧", "移", "因", "永", "営", "衛", "易", "益", "液", "演", "応", "往", "桜", "恩", "可", "仮", "価", "河", "過", "賀", "快", "解", "格", "確", "額", "刊", "幹", "慣", "眼", "基", "寄", "規", "技", "義", "逆", "久", "旧", "居", "許", "境"],
  6: ["異", "遺", "域", "宇", "映", "延", "沿", "我", "灰", "拡", "革", "閣", "割", "株", "干", "巻", "看", "簡", "危", "机", "揮", "貴", "疑", "吸", "供", "胸", "郷", "勤", "筋", "系", "敬", "警", "劇", "激", "穴", "絹", "権", "憲", "源", "厳"]
};

// 熟語が含まれないように、全て1文字の配列に整形し直しておく
for (let grade in kanjiData) {
  kanjiData[grade] = kanjiData[grade].filter(k => k.length === 1);
}

// 状態管理
let currentGrade = 1;
let currentKanjiList = [];
let currentKanjiIndex = 0;
let writer = null;
let score = 0;
let nextKanjiTimeout = null;
let gameState = 'idle'; // 'idle', 'loading', 'playing', 'success', 'failed', 'finished'
let mistakenKanjiList = [];
let isReviewMode = false;

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

// 学年選択ボタンのイベントリスナー
document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // 確実な要素を取得するため、currentTargetを利用するか、ボタンそのもののdatasetを取得
    const targetBtn = e.target.closest('.level-btn');
    if (targetBtn) {
        const grade = parseInt(targetBtn.dataset.grade);
        startGame(grade);
    }
  });
});

// ハイスコアの表示ロード
function loadHighScores() {
  for (let g = 1; g <= 6; g++) {
    const record = localStorage.getItem('kanjiHighScore_' + g);
    const scoreElem = document.getElementById('score-grade-' + g);
    if (scoreElem) {
      if (record !== null) {
        scoreElem.textContent = `最高記録: ${record}点`;
      } else {
        scoreElem.textContent = '';
      }
    }
  }
}

// 起動時にロード
document.addEventListener('DOMContentLoaded', loadHighScores);

backBtn.addEventListener('click', showLevelSelection);
restartBtn.addEventListener('click', () => {
    startGame(currentGrade);
});
reviewBtn.addEventListener('click', () => {
    startReviewMode();
});

function showLevelSelection() {
  if (nextKanjiTimeout) {
    clearTimeout(nextKanjiTimeout);
    nextKanjiTimeout = null;
  }
  
  gameScreen.classList.remove('active');
  levelSelectionScreen.classList.add('active');
  gameState = 'idle';
  
  if (writer) {
    kanjiTarget.innerHTML = '';
    writer = null;
  }
}

function startGame(grade) {
  isReviewMode = false;
  mistakenKanjiList = [];
  currentGrade = grade;
  // 漢字リストをシャッフルし、10問を取り出す
  currentKanjiList = [...kanjiData[grade]].sort(() => Math.random() - 0.5).slice(0, 10);
  currentKanjiIndex = 0;
  score = 0;
  
  gradeTitle.textContent = `小学${grade}年生の漢字`;
  totalCounter.textContent = currentKanjiList.length;
  scoreCounter.textContent = score;
  
  levelSelectionScreen.classList.remove('active');
  gameScreen.classList.add('active');
  resultControls.classList.add('hidden');
  mistakeContainer.classList.add('hidden');
  
  loadKanji();
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

function loadKanji() {
  if (nextKanjiTimeout) {
    clearTimeout(nextKanjiTimeout);
    nextKanjiTimeout = null;
  }

  if (currentKanjiIndex >= currentKanjiList.length) {
    finishGame();
    return;
  }

  gameState = 'loading';
  const kanji = currentKanjiList[currentKanjiIndex];
  
  // UIリセット
  if (writer) {
    kanjiTarget.innerHTML = ''; // 古いインスタンスを直接削除
    writer = null;
  }
  feedbackMessage.classList.add('hidden');
  resultControls.classList.add('hidden');
  loadingSpinner.classList.remove('hidden');
  kanjiTarget.style.opacity = '0';
  
  // HanziWriter 初期化
  writer = HanziWriter.create('kanji-target', kanji, {
    width: 250,
    height: 250,
    padding: 20,
    strokeAnimationSpeed: 2.0, // なぞる速度を少し速く
    delayBetweenStrokes: 50, // 画と画の間の遅延を短くしてサクサクに
    strokeColor: '#5d4037', // 線の色
    radialStyle: true,
    showOutline: true,
    outlineColor: '#fce4ec', // アウトラインの色（パステルピンクっぽく）
    drawingColor: '#ff6b6b', // ユーザーがなぞったときの色
    drawingWidth: 35, // 指でなぞりやすいように判定の太さをアップ！
    showCharacter: false, // 完成形を見せない（クイズなので）
    // 日本語（日本の学校教育基準）の漢字データを読み込むように設定
    charDataLoader: function(char, onComplete) {
      fetch('https://cdn.jsdelivr.net/gh/chanind/hanzi-writer-data-jp@master/data/' + char + '.json')
        .then(res => {
          if (!res.ok) throw new Error('Kanji not found');
          return res.json();
        })
        .then(data => {
          onComplete(data);
          // データのロード完了。短い遅延を入れてUIに反映させる
          setTimeout(() => {
            if (gameState === 'loading') {
              gameState = 'playing';
              loadingSpinner.classList.add('hidden');
              kanjiTarget.style.opacity = '1';
              startQuiz();
            }
          }, 50); // より早く表示
        })
        .catch(err => {
          console.error('Failed to load kanji data for:', char, err);
          // エラーの場合は次の漢字へスキップする
          currentKanjiIndex++;
          loadKanji();
        });
    }
  });
}

function startQuiz() {
  if (!writer) return;
  
  writer.quiz({
    leniency: 2.0, // 子どもが指でなぞるときにずれやすくても正解になりやすくする（反応をよくする）
    showHintAfterMisses: 1, // 1回でも間違えたらすぐにヒント（次の正解の画）を表示してあげる
    onMistake: (strokeData) => {
      handleMistake();
    },
    onComplete: (summaryData) => {
      handleSuccess();
    }
  });
}

function handleMistake() {
  if (gameState !== 'playing') return;
  gameState = 'failed';
  
  // クイズ状態をキャンセル
  if (writer) {
    writer.cancelQuiz();
  }

  // まちがえた漢字リストに追加（重複しないように）
  const kanji = currentKanjiList[currentKanjiIndex];
  if (!mistakenKanjiList.includes(kanji)) {
    mistakenKanjiList.push(kanji);
  }

  feedbackMessage.classList.remove('hidden');
  feedbackMessage.innerHTML = 'ざんねん！まちがえました💧';
  feedbackMessage.style.color = '#747d8c'; // color reset before bouncing
  
  appContainer.classList.add('bounce-animation');
  setTimeout(() => {
    appContainer.classList.remove('bounce-animation');
  }, 500);

  // 少し待ってから次の漢字へ（不正解の場合はスコアはそのまま）
  nextKanjiTimeout = setTimeout(() => {
    feedbackMessage.style.color = '#ff7675'; // 戻しておく
    currentKanjiIndex++;
    loadKanji();
  }, 1500);
}

function handleSuccess() {
  if (gameState !== 'playing') return;
  gameState = 'success';
  
  score++;
  scoreCounter.textContent = score;
  
  // 可愛いエフェクト
  feedbackMessage.classList.remove('hidden');
  feedbackMessage.innerHTML = 'すごーい！大正解！🎉';
  
  appContainer.classList.add('bounce-animation');
  setTimeout(() => {
    appContainer.classList.remove('bounce-animation');
  }, 500);

  // 紙吹雪を散らす
  try {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffb7b2', '#e2f0cb', '#c7ceea', '#f3b0e7', '#ffeaa7']
    });
  } catch(e) {}

  // 短い時間でスッと次の漢字へ行く（サクサク感を重視）
  nextKanjiTimeout = setTimeout(() => {
    currentKanjiIndex++;
    loadKanji();
  }, 1200);
}

function finishGame() {
  gameState = 'finished';
  kanjiTarget.style.opacity = '0';
  setTimeout(() => {
      kanjiTarget.innerHTML = '';
      kanjiTarget.style.opacity = '1';
  }, 300);
  
  loadingSpinner.classList.add('hidden');
  feedbackMessage.classList.remove('hidden');
  feedbackMessage.innerHTML = `おわったよ！<br> ${score}点 / ${currentKanjiList.length}点 でした！💖`;
  resultControls.classList.remove('hidden');
  
  // 記録の保存 (復習モードの時はセーブしない)
  if (!isReviewMode) {
    const prevHighScore = localStorage.getItem('kanjiHighScore_' + currentGrade);
    if (prevHighScore === null || score > parseInt(prevHighScore)) {
      localStorage.setItem('kanjiHighScore_' + currentGrade, score);
      feedbackMessage.innerHTML += `<br><span style="color: #6c5ce7; font-size: 1.2rem;">✨ 新記録達成！ ✨</span>`;
    }
    loadHighScores(); // 表示を即座に更新
  }
  
  // 間違えたリストの表示
  if (mistakenKanjiList.length > 0) {
    mistakeListElem.textContent = mistakenKanjiList.join("・");
    mistakeContainer.classList.remove('hidden');
  } else {
    mistakeContainer.classList.add('hidden');
  }

  try {
    // 満点の時は紙吹雪多め
    if (score === currentKanjiList.length) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#ffb7b2', '#e2f0cb', '#c7ceea', '#f3b0e7', '#ffeaa7']
      });
    }
  } catch(e) {}
}

// ヒント機能: 次の1画をアニメーションで表示
hintBtn.addEventListener('click', () => {
  if (gameState !== 'playing' || !writer) return;
  
  writer.quiz({
    onMistake: () => {}
  }); // 念のためバインディングをリセット
  
  writer.animateCharacter({
    onComplete: () => {
       setTimeout(() => { 
           if(writer) writer.hideCharacter(); 
       }, 1000);
    }
  });
});

// スキップ機能
skipBtn.addEventListener('click', () => {
  if (gameState === 'loading' || gameState === 'success' || gameState === 'finished') {
    return; // 連打防止
  }
  
  if (writer) {
    if (nextKanjiTimeout) {
      clearTimeout(nextKanjiTimeout);
      nextKanjiTimeout = null;
    }
    currentKanjiIndex++;
    loadKanji();
  }
});
