// ==============================================================
// 컬러 성향 테스트 - 메인 로직
// ==============================================================

// ▼▼▼ 구글 시트 연동 웹앱 URL (docs/GOOGLE_SHEETS_SETUP.md 참고해서 배포 후 이 값만 교체) ▼▼▼
const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbybD_iPJdF2zqCzPJJr5q8rW6OPAZXfEKiVoWhpWQ7nL_gS-ttD9T3qTgfFfPLfQUJu/exec";

const screens = {
  opening: document.getElementById("screen-opening"),

  profile:
    document.getElementById("screen-profile"),

  start:
    document.getElementById("screen-start"),

  survey:
    document.getElementById("screen-survey"),

  result:
    document.getElementById("screen-result")
};

let state = {
  qIndex: 0,

  answers:
    new Array(
      QUESTIONS.length
    ).fill(null),

  scores: {},

  ranking: [],

  allColorPercents: [],

  resultKey: null,

  slideIndex: 0,

  profile: {
    language: currentLang,
    gender: "",
    ageGroup: "",
    occupation: ""
  },

  // 구글시트 저장용
  submissionId: null,

  hasSubmitted: false
};

const START_CHAT_MESSAGES = [

  {
    text: {
      ko: "반가워 난 Nobody라고 해",
      en: "Nice to meet you! I'm Nobody.",
      ja: "はじめまして、Nobodyっていうんだ。",
      zh: "很高兴认识你，我叫 Nobody。"
    },
    width: "w-md"
  },

  {
    text: {
      ko: "혹시 그거 알아?",
      en: "Did you know?",
      ja: "ねえ、知ってる？",
      zh: "你知道吗？"
    },
    width: "w-sm"
  },

  {
    text: {
      ko: "어떤 컬러가 좋아진다는 것은 그 컬러의 성향을 가지고 있거나",
      en: "When you start liking a certain color, it may mean you have traits associated with that color,",
      ja: "ある色が気になるようになるのは、その色の性質を自分が持っていたり、",
      zh: "当你开始喜欢上某种颜色时，可能意味着你拥有那种颜色的特质，"
    },
    width: "w-xl"
  },

  {
    text: {
      ko: "그 컬러가 가지고 있는 에너지가 필요하다는 신호래",
      en: "or that you need the energy that color carries.",
      ja: "その色が持つエネルギーを必要としているサインなんだって。",
      zh: "也可能是在提示你需要那种颜色所带来的能量。"
    },
    width: "w-xl"
  },

  {
    text: {
      ko: "넌 요즘 어때?",
      en: "How have you been lately?",
      ja: "最近、どう？",
      zh: "你最近怎么样？"
    },
    width: "w-sm"
  },

  {
    text: {
      ko: "나랑 같이 네 색을 찾아보지 않을래?",
      en: "Want to find your color with me?",
      ja: "一緒に君の色を探してみない？",
      zh: "要不要和我一起找找属于你的颜色？"
    },
    width: "w-lg"
  }

];

let startChatTimers = [];

// -------------------- 화면 전환 --------------------
function showScreen(name) {

  Object.values(screens).forEach(screen => {
    screen.classList.remove("active");
  });

  screens[name].classList.add("active");

  if (name === "start") {
    runStartChatSequence();
  } else {
    clearStartChatTimers();
  }
}

screens.opening.addEventListener("click", () => {
  stopOpeningCycle();

  showScreen("profile");
});


// ============================================================
// 기본정보 선택
// ============================================================

const profileLangButtons =
  document.querySelectorAll(
    ".profile-lang-btn"
  );

const profileGenderButtons =
  document.querySelectorAll(
    ".profile-gender-btn"
  );

const profileAge =
  document.getElementById(
    "profileAge"
  );

const profileJob =
  document.getElementById(
    "profileJob"
  );

const btnProfileNext =
  document.getElementById(
    "btnProfileNext"
  );

const profileWarning =
  document.getElementById(
    "profileWarning"
  );


// ------------------------------------------------------------
// 언어
// ------------------------------------------------------------

profileLangButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const lang =
        button.dataset.profileLang;

      state.profile.language =
        lang;

      profileLangButtons
        .forEach(item => {

          item.classList.toggle(
            "selected",
            item === button
          );

        });


      // 사이트 전체 언어도 변경
      applyI18n(lang);

      updateProfileNextButton();

    }
  );

});


// 현재 언어 기본 선택
profileLangButtons.forEach(button => {

  button.classList.toggle(
    "selected",
    button.dataset.profileLang === currentLang
  );

});


// ------------------------------------------------------------
// 성별
// ------------------------------------------------------------

profileGenderButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      state.profile.gender =
        button.dataset.value;

      profileGenderButtons
        .forEach(item => {

          item.classList.toggle(
            "selected",
            item === button
          );

        });

      updateProfileNextButton();

    }
  );

});


// ------------------------------------------------------------
// 연령대
// ------------------------------------------------------------

profileAge.addEventListener(
  "change",
  () => {

    state.profile.ageGroup =
      profileAge.value;

    updateProfileNextButton();

  }
);


// ------------------------------------------------------------
// 직업
// ------------------------------------------------------------

profileJob.addEventListener(
  "change",
  () => {

    state.profile.occupation =
      profileJob.value;

    updateProfileNextButton();

  }
);


// ------------------------------------------------------------
// 선택 완료 여부
// ------------------------------------------------------------

function isProfileComplete() {

  return Boolean(
    state.profile.language &&
    state.profile.gender &&
    state.profile.ageGroup &&
    state.profile.occupation
  );

}


// ------------------------------------------------------------
// 다음 버튼 상태
// ------------------------------------------------------------

function updateProfileNextButton() {

  const completed =
    isProfileComplete();

  btnProfileNext.classList.toggle(
    "enabled",
    completed
  );

}


// ------------------------------------------------------------
// 다음
// ------------------------------------------------------------

btnProfileNext.addEventListener(
  "click",
  () => {

    if (!isProfileComplete()) {

      profileWarning.classList.add(
        "show"
      );

      return;

    }


    profileWarning.classList.remove(
      "show"
    );

    showScreen("start");

  }
);


// -------------------- 시작페이지 대화 애니메이션 --------------------

function clearStartChatTimers() {
  startChatTimers.forEach(timer => clearTimeout(timer));
  startChatTimers = [];
}

function runStartChatSequence() {
  clearStartChatTimers();

  const chatArea = document.getElementById("startChatArea");
  const btnStart = document.getElementById("btnStart");

  if (!chatArea || !btnStart) {
    console.warn("시작페이지 요소를 찾을 수 없습니다.");
    return;
  }

  // 기존 말풍선 초기화
  chatArea.innerHTML = "";

  // START 버튼 비활성화
  btnStart.disabled = false;
  btnStart.classList.remove("enabled");

  START_CHAT_MESSAGES.forEach((message, index) => {
    const bubbleTimer = setTimeout(() => {
      const bubble = document.createElement("div");

      bubble.className = `start-bubble ${message.width || ""}`;
      bubble.textContent =
        message.text[currentLang]
        || message.text.ko;

      chatArea.appendChild(bubble);

      // 말풍선 등장 애니메이션 실행
      requestAnimationFrame(() => {
        bubble.classList.add("show");
      });

      // 마지막 문장이 나타난 뒤 START 버튼 활성화
      if (index === START_CHAT_MESSAGES.length - 1) {
        const buttonTimer = setTimeout(() => {
          // 메시지가 끝나면 버튼만 선명하게 변경
          btnStart.classList.add("enabled");
        }, 500);

        startChatTimers.push(buttonTimer);
      }
    }, 800 * index);

    startChatTimers.push(bubbleTimer);
  });
}


// -------------------- 오프닝: 슬라이딩 머리 + 기본까리/전신 캐릭터 교차 표시 --------------------
// 요청 순서: 마리 → 라라 → 모해 → 모이 → 두루 → 티나 → 주나 → 보나 → 수리
const OPENING_ORDER = ["mari", "lala", "mohae", "moi", "duru", "tina", "juna", "bona", "suri"];

// 각 캐릭터가 중앙에 적용될 때 오프닝 배경으로 사용할 컬러
const OPENING_COLORS = {
  mari: "#FF0315",
  lala: "#FF6803",
  mohae: "#FFF900",
  moi: "#19CD30",
  duru: "#00D1F9",
  tina: "#9876EC",
  juna: "#FF85FB",
  bona: "#CC833A",
  suri: "#9D9D9D"
};

const RESULT_RATIO_META = {
  mari: { label: "RED", color: "#FF0315" },
  lala: { label: "ORANGE", color: "#FF6803" },
  mohae: { label: "YELLOW", color: "#D5B400" },
  moi: { label: "GREEN", color: "#19CD30" },
  duru: { label: "BLUE", color: "#00A4F9" },
  tina: { label: "PURPLE", color: "#9876EC" },
  juna: { label: "PINK", color: "#FF85FB" },
  bona: { label: "BROWN", color: "#A36A2E" },
  suri: { label: "MODERN", color: "#777777" }
};

const RESULT_RATIO_ORDER = [
  "mari",
  "lala",
  "juna",
  "bona",
  "suri",
  "tina",
  "mohae",
  "moi",
  "duru"
];

const SLOT_WIDTH = 68;
const STRIP_REPEAT = 5;
const OPENING_INTERVAL = 1700;
const CHARACTER_APPLY_DELAY = 550;

const STRIP_ORDER = [];
for (let i = 0; i < STRIP_REPEAT; i++) STRIP_ORDER.push(...OPENING_ORDER);

// 가운데 반복 구간의 첫 캐릭터(마리)가 화면 중앙에 오도록 시작
let stripCenterIndex = OPENING_ORDER.length * 2;
let openingPhase = "character";   // character → default → character → default
let openingTimer = null;
let openingApplyTimer = null;

function buildOpeningStrip() {
  const strip = document.getElementById("openingStrip");
  strip.innerHTML = "";

  STRIP_ORDER.forEach((name, index) => {
    const slot = document.createElement("div");
    slot.className = "strip-slot";
    slot.dataset.slotIndex = String(index);

    const img = document.createElement("img");
    img.src = `assets/characters/${name}/head_tight.png`;
    img.alt = "";

    slot.appendChild(img);
    strip.appendChild(slot);
  });
}

function buildOpeningHero() {
  const hero = document.getElementById("openingHero");
  hero.innerHTML = "";

  // 캐릭터 사이마다 보여줄 기본까리
  const defaultImg = document.createElement("img");
  defaultImg.className = "hero-frame";
  defaultImg.dataset.key = "default";
  defaultImg.src = "assets/characters/opening/default.png";
  defaultImg.alt = "기본까리";
  hero.appendChild(defaultImg);

  OPENING_ORDER.forEach(name => {
    const img = document.createElement("img");
    img.className = "hero-frame";
    img.dataset.key = name;
    img.src = `assets/characters/opening/${name}.png`;
    img.alt = "";
    hero.appendChild(img);
  });
}

function getCenterKey() {
  const orderIndex =
    ((stripCenterIndex % OPENING_ORDER.length) + OPENING_ORDER.length)
    % OPENING_ORDER.length;

  return OPENING_ORDER[orderIndex];
}

function applyStripTransform(withTransition) {
  const strip = document.getElementById("openingStrip");
  const viewport = document.getElementById("openingStripViewport");

  if (!withTransition) {
    strip.classList.add("no-transition");
  }

  /*
   * 현재 화면에서 실제로 보이는 영역의 너비를 기준으로
   * 선택된 머리 칸의 정중앙을 맞춤
   */
  const viewportCenter = viewport.clientWidth / 2;
  const slotCenter = SLOT_WIDTH / 2;

  const translateX =
    viewportCenter
    - slotCenter
    - stripCenterIndex * SLOT_WIDTH;

  strip.style.transform = `translateX(${translateX}px)`;

  if (!withTransition) {
    void strip.offsetWidth;
    strip.classList.remove("no-transition");
  }
}

// 현재 적용되는 머리가 컨베이어 중앙에서 중복으로 보이지 않도록 숨김
function updateCenterHeadVisibility() {
  document.querySelectorAll(".strip-slot.is-applied").forEach(slot => {
    slot.classList.remove("is-applied");
  });

  /*
   * 전신 캐릭터가 보일 때와 기본까리가 보일 때 모두
   * 정중앙의 적용 예정 머리를 숨김
   */
  const centerSlot = document.querySelector(
    `.strip-slot[data-slot-index="${stripCenterIndex}"]`
  );

  if (centerSlot) {
    centerSlot.classList.add("is-applied");
  }
}

function updateOpeningHero() {
  const activeKey = openingPhase === "default" ? "default" : getCenterKey();

  document.querySelectorAll(".hero-frame").forEach(frame => {
    frame.classList.toggle("active", frame.dataset.key === activeKey);
  });

  // 캐릭터가 적용되는 순간 해당 캐릭터 컬러로 배경 변경
  if (openingPhase === "character") {
    screens.opening.style.backgroundColor = OPENING_COLORS[getCenterKey()];
  }

  updateCenterHeadVisibility();
}

function tickOpening() {
  /*
   * 인덱스가 증가하면 컨베이어가 왼쪽으로 이동함
   */
  stripCenterIndex += 1;

  // 이동 중에는 기본까리 표시
  openingPhase = "default";

  applyStripTransform(true);
  updateOpeningHero();

  clearTimeout(openingApplyTimer);

  openingApplyTimer = setTimeout(() => {
    // 무한 반복을 위한 위치 재설정
    if (stripCenterIndex >= OPENING_ORDER.length * 3) {
      stripCenterIndex -= OPENING_ORDER.length;
      applyStripTransform(false);
    }

    // 이동이 끝나면 전신 캐릭터 표시
    openingPhase = "character";
    updateOpeningHero();
  }, CHARACTER_APPLY_DELAY);
}

function startOpeningCycle() {
  if (openingTimer) return;

  buildOpeningStrip();
  buildOpeningHero();
  openingPhase = "character";
  applyStripTransform(false);
  updateOpeningHero();
  openingTimer = setInterval(tickOpening, OPENING_INTERVAL);
}

function stopOpeningCycle() {
  clearInterval(openingTimer);
  clearTimeout(openingApplyTimer);
  openingTimer = null;
  openingApplyTimer = null;
}

startOpeningCycle();


// -------------------- 설문 진행 --------------------
// ==============================================================
// 설문 진행
// ==============================================================

const TOTAL_SURVEY_PAGES = Math.ceil(
  QUESTIONS.length / QUESTIONS_PER_PAGE
);

let surveyAdvanceTimer = null;

/* 지금까지 도달한 가장 먼 설문 페이지 */
let furthestPageReached = 0;

/* 뒤로 이동해서 이전 답변을 확인/수정 중인지 */
let isReviewingPreviousPage = false;


// START 버튼 클릭
document.getElementById("btnStart").addEventListener("click", () => {
  clearTimeout(surveyAdvanceTimer);

  state.qIndex = 0;
  state.answers = new Array(QUESTIONS.length).fill(null);
  state.scores = {};
  state.ranking = [];
  state.allColorPercents = [];
  state.resultKey = null;
  state.submissionId = null;
  state.hasSubmitted = false;

  /* 설문 이동 상태 초기화 */
  furthestPageReached = 0;
  isReviewingPreviousPage = false;

  showScreen("survey");
  renderSurveyPage();
});

// 이전 버튼
// 설문 이전 페이지 이동
document.getElementById("btnBack").addEventListener("click", () => {
  clearTimeout(surveyAdvanceTimer);

  if (state.qIndex <= 0) {
    return;
  }

  /*
   * 뒤로 가는 순간부터
   * '이전 답변 수정 모드'로 변경
   */
  isReviewingPreviousPage = true;

  state.qIndex -= 1;

  renderSurveyPage();
});

document.getElementById("btnNext").addEventListener("click", () => {
  clearTimeout(surveyAdvanceTimer);

  /*
   * 현재 페이지에서 답하지 않은 문항이 있으면
   * 다음 페이지 이동을 막고 안내문 표시
   */
  if (!isSurveyPageComplete()) {
    showSurveyWarning();
    return;
  }

  /* 모든 문항에 답했다면 안내문 제거 */
  hideSurveyWarning();


  /*
   * 마지막 페이지가 아니면 다음 페이지 이동
   */
  if (state.qIndex < TOTAL_SURVEY_PAGES - 1) {

    state.qIndex += 1;

    /*
     * 기존에 도달했던 가장 먼 페이지까지 돌아왔다면
     * 이전 문항 수정 모드 종료
     */
    if (state.qIndex >= furthestPageReached) {

      if (state.qIndex > furthestPageReached) {
        furthestPageReached = state.qIndex;
      }

      isReviewingPreviousPage = false;
    }

    renderSurveyPage();
    return;

  }

  /*
   * 마지막 페이지에서는 결과 계산
   */
  calculateResult();
});

// 현재 설문 페이지의 모든 문항에 답했는지 확인
function isSurveyPageComplete(pageIndex = state.qIndex) {
  const pageStartIndex =
    pageIndex * QUESTIONS_PER_PAGE;

  const pageEndIndex = Math.min(
    pageStartIndex + QUESTIONS_PER_PAGE,
    QUESTIONS.length
  );

  return state.answers
    .slice(pageStartIndex, pageEndIndex)
    .every(answer => answer !== null);
}

let surveyWarningTimer = null;


/* 답변 누락 안내 표시 */
function showSurveyWarning() {
  const warning =
    document.getElementById("surveyWarning");

  if (!warning) {
    return;
  }

  clearTimeout(surveyWarningTimer);

  warning.textContent =
    getSurveyLabel(
      "survey.warning",
      "모든 문항에 답해주시기 바랍니다."
    );

  warning.classList.add("show");

  surveyWarningTimer = setTimeout(() => {
    warning.classList.remove("show");
  }, 2200);
}


/* 답변 누락 안내 숨김 */
function hideSurveyWarning() {
  const warning =
    document.getElementById("surveyWarning");

  clearTimeout(surveyWarningTimer);

  if (!warning) {
    return;
  }

  warning.classList.remove("show");
}

/* 이전·다음 화살표 활성화 상태 설정 */
function updateSurveyNavigation() {
  const btnBack = document.getElementById("btnBack");
  const btnNext = document.getElementById("btnNext");

  if (!btnBack || !btnNext) {
    return;
  }

  /* ==============================
     왼쪽 화살표
     첫 페이지에서만 비활성화
     ============================== */

  btnBack.disabled = state.qIndex === 0;

  btnBack.setAttribute(
    "aria-disabled",
    String(btnBack.disabled)
  );


  /* ==============================
     오른쪽 화살표
     현재 페이지 3문항 완료 여부만 확인
     ============================== */

  const pageCompleted = isSurveyPageComplete();

  /*
   * 경고문을 띄워야 하므로
   * 실제 disabled 속성은 사용하지 않음
   */
  btnNext.disabled = false;

  /*
   * 이전 페이지의 상태가 남지 않도록
   * 일단 클래스를 확실하게 제거
   */
  btnNext.classList.remove("is-disabled");

  /*
   * 현재 페이지가 미완료일 때만
   * 다시 비활성 모양 적용
   */
  if (!pageCompleted) {
    btnNext.classList.add("is-disabled");
  }

  btnNext.setAttribute(
    "aria-disabled",
    String(!pageCompleted)
  );
}


// 현재 언어에 맞는 질문 가져오기
function getQuestionText(question) {
  return (
    question.text[currentLang]
    || question.text.ko
    || ""
  );
}


// 예·아니오 문구 가져오기
function getSurveyLabel(key, fallback) {
  const langDictionary = I18N[currentLang] || I18N.ko;

  return langDictionary[key] || fallback;
}


// 설문 한 페이지 렌더링
function renderSurveyPage() {
  clearTimeout(surveyAdvanceTimer);

  hideSurveyWarning();

  const pageStartIndex = state.qIndex * QUESTIONS_PER_PAGE;
  const pageQuestions = QUESTIONS.slice(
    pageStartIndex,
    pageStartIndex + QUESTIONS_PER_PAGE
  );

  const surveyQuestions = document.getElementById("surveyQuestions");
  const surveyBody = document.getElementById("surveyBody");
  const qCount = document.getElementById("qCount");
  const btnBack = document.getElementById("btnBack");

  // 첫 설문 페이지에서는 뒤로가기 비활성화
  const isFirstSurveyPage = state.qIndex === 0;

  btnBack.disabled = isFirstSurveyPage;
  btnBack.classList.toggle("is-disabled", isFirstSurveyPage);
  btnBack.setAttribute(
    "aria-disabled",
    String(isFirstSurveyPage)
  );

  screens.survey.style.backgroundColor =
    BG_COLORS[state.qIndex % BG_COLORS.length];

  qCount.textContent =
    `${state.qIndex + 1} / ${TOTAL_SURVEY_PAGES}`;

  renderSurveyProgress();

  surveyQuestions.innerHTML = "";

  pageQuestions.forEach((question, localIndex) => {
    const questionIndex = pageStartIndex + localIndex;
    const savedAnswer = state.answers[questionIndex];

    const item = document.createElement("article");
    item.className = "survey-question-item";
    item.dataset.questionIndex = String(questionIndex);

    const questionText = document.createElement("h3");
    questionText.className = "survey-question-text";
    questionText.textContent =
      `Q${questionIndex + 1}. ${getQuestionText(question)}`;

    const answerRow = document.createElement("div");
    answerRow.className = "survey-answer-row";

    const yesButton = createSurveyAnswerButton(
      getSurveyLabel("survey.yes", "예"),
      "yes",
      questionIndex,
      savedAnswer
    );

    const noButton = createSurveyAnswerButton(
      getSurveyLabel("survey.no", "아니오"),
      "no",
      questionIndex,
      savedAnswer
    );

    answerRow.appendChild(yesButton);
    answerRow.appendChild(noButton);

    item.appendChild(questionText);
    item.appendChild(answerRow);

    surveyQuestions.appendChild(item);
  });

  if (surveyBody) {
    surveyBody.scrollTop = 0;
  }

  updateSurveyNavigation();
}

// 예·아니오 버튼 만들기
function createSurveyAnswerButton(
  label,
  answer,
  questionIndex,
  savedAnswer
) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "survey-answer-btn";
  button.textContent = label;
  button.dataset.answer = answer;

  if (savedAnswer === answer) {
    button.classList.add("selected");
  }

  button.addEventListener("click", () => {
    selectSurveyAnswer(questionIndex, answer);
  });

  return button;
}


// 답변 선택
function selectSurveyAnswer(questionIndex, answer) {

  /* 답변을 선택하면 이전 안내문 제거 */
  hideSurveyWarning();

  /* 선택한 답변 저장 */
  state.answers[questionIndex] = answer;

  const questionItem = document.querySelector(
    `.survey-question-item[data-question-index="${questionIndex}"]`
  );

  if (questionItem) {
    questionItem
      .querySelectorAll(".survey-answer-btn")
      .forEach(button => {

        button.classList.toggle(
          "selected",
          button.dataset.answer === answer
        );

      });
  }


  /* 답변할 때마다 화살표 상태 갱신 */
  updateSurveyNavigation();


  /*
   * 현재 화면의 3문항을 아직 다 답하지 않았다면
   * 아무것도 하지 않음
   */
  if (!isSurveyPageComplete()) {
    return;
  }


  /*
   * ★ 중요
   *
   * 뒤로 가서 이전 문항을 수정하고 있는 상태라면
   * 3개 문항이 모두 선택되어 있어도
   * 자동으로 다음 페이지로 넘어가지 않음.
   */
  if (isReviewingPreviousPage) {
    return;
  }


  /*
   * 처음 풀고 있는 페이지라면
   * 3문항을 모두 답했을 때 자동으로 다음 페이지 이동
   */
  clearTimeout(surveyAdvanceTimer);

  surveyAdvanceTimer = setTimeout(() => {

    if (state.qIndex < TOTAL_SURVEY_PAGES - 1) {

      state.qIndex += 1;

      /*
       * 새 페이지까지 진행했다는 기록
       */
      if (state.qIndex > furthestPageReached) {
        furthestPageReached = state.qIndex;
      }

      renderSurveyPage();

    } else {

      /* 마지막 3문항까지 완료 */
      calculateResult();

    }

  }, 450);
}


// 진행 표시
function renderSurveyProgress() {
  const progressDots = document.getElementById("progressDots");

  progressDots.innerHTML = "";

  for (let pageIndex = 0; pageIndex < TOTAL_SURVEY_PAGES; pageIndex++) {
    const dot = document.createElement("span");

    if (pageIndex <= state.qIndex) {
      dot.classList.add("done");
    }

    progressDots.appendChild(dot);
  }
}


// ==============================================================
// 결과 계산
// ==============================================================

// ==============================================================
// 결과 계산
// 9가지 컬러 비율의 합계가 정확히 100%가 되도록 계산
// ==============================================================

function calculateResult() {

  /* 미응답 문항이 하나라도 있으면 결과 계산 중지 */
  if (state.answers.some(answer => answer === null)) {
    showSurveyWarning();
    return;
  }


  /* ==================================================
     1. 컬러별 점수 계산
     ================================================== */

  const scores = {};

  COLOR_KEYS.forEach(key => {
    scores[key] = 0;
  });


  QUESTIONS.forEach((question, questionIndex) => {

    const answer = state.answers[questionIndex];

    if (answer === null) {
      return;
    }


    /*
     * 일반 문항
     * 예 = 1점
     *
     * 역문항
     * 아니오 = 1점
     */
    const getsPoint = question.reverse
      ? answer === "no"
      : answer === "yes";


    if (getsPoint) {
      scores[question.color] += 1;
    }

  });


  /* ==================================================
     2. 전체 점수 합계
     ================================================== */

  const totalScore = COLOR_KEYS.reduce(
    (sum, key) => sum + scores[key],
    0
  );


  /* ==================================================
     3. 각 컬러를 전체 합계 기준 %로 계산
     ================================================== */

  let percentageItems;


  /*
   * 모든 점수가 0인 극단적인 예외 상황
   */
  if (totalScore === 0) {

    percentageItems = COLOR_KEYS.map((key, index) => ({
      key,
      score: scores[key],
      tieOrder: index,
      percent: 0
    }));

  } else {

    /*
     * 먼저 소수점 원본 비율과
     * 버림한 정수 비율 계산
     */
    percentageItems = COLOR_KEYS.map((key, index) => {

      const rawPercent =
        (scores[key] / totalScore) * 100;

      const basePercent =
        Math.floor(rawPercent);

      return {
        key,
        score: scores[key],
        tieOrder: index,

        rawPercent,
        percent: basePercent,

        remainder:
          rawPercent - basePercent
      };

    });


    /*
     * 버림한 퍼센트 합계 확인
     */
    const currentTotal =
      percentageItems.reduce(
        (sum, item) => sum + item.percent,
        0
      );


    /*
     * 100에서 부족한 숫자
     *
     * 예:
     * 98이면 2가 남음
     */
    let remaining =
      100 - currentTotal;


    /*
     * 소수점이 큰 컬러부터
     * 남은 1%를 하나씩 배분
     */
    const remainderOrder =
      [...percentageItems].sort((a, b) => {

        if (b.remainder !== a.remainder) {
          return b.remainder - a.remainder;
        }

        if (b.score !== a.score) {
          return b.score - a.score;
        }

        return a.tieOrder - b.tieOrder;

      });


    for (
      let i = 0;
      i < remainderOrder.length && remaining > 0;
      i++
    ) {

      remainderOrder[i].percent += 1;

      remaining -= 1;

    }

  }


  /* ==================================================
     4. 점수순 TOP 순위 정렬
     ================================================== */

  const ranking =
    [...percentageItems].sort((a, b) => {

      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.tieOrder - b.tieOrder;

    });


  /* ==================================================
     5. state 저장
     ================================================== */

  state.scores = scores;

  state.ranking = ranking;


  /*
   * 그래프에서 사용하는 9개 컬러 비율
   */
  state.allColorPercents =
    percentageItems.map(item => ({
      key: item.key,
      percent: item.percent
    }));


  /*
   * 가장 높은 컬러를 대표 결과로 지정
   */
  state.resultKey =
    ranking[0].key;


  /* ==================================================
     6. 결과 페이지 이동
     ================================================== */

  renderResult();

  showScreen("result");

  submitToGoogleSheet();
}

// ==============================================================
// 9가지 컬러 비율 레이더 그래프
// ==============================================================

function getColorPercentMap() {
  const map = {};

  (state.allColorPercents || []).forEach(item => {
    map[item.key] = item.percent;
  });

  return map;
}


function renderRadarChart(winnerKey) {
  const chartWrap = document.getElementById("resultRatioChart");

  if (!chartWrap) {
    return;
  }

  const percentMap = getColorPercentMap();

  const orderedData = RESULT_RATIO_ORDER.map(key => ({
    key,
    percent: percentMap[key] ?? 0,
    label: RESULT_RATIO_META[key].label,
    color: RESULT_RATIO_META[key].color
  }));

  const size = 320;
  const cx = 160;
  const cy = 160;
  const maxR = 108;
  const levels = 5;

  const count = orderedData.length;
  const step = (Math.PI * 2) / count;


  /* 각 꼭짓점 좌표 계산 */
  const getPoint = (index, radius) => {
    const angle = -Math.PI / 2 + step * index;

    return {
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius
    };
  };


  /* 배경의 5단계 다각형 */
  const ringPolygons = [];

  for (let level = 1; level <= levels; level++) {
    const radius = (maxR / levels) * level;

    const points = orderedData
      .map((_, index) => {
        const point = getPoint(index, radius);
        return `${point.x},${point.y}`;
      })
      .join(" ");

    ringPolygons.push(`
      <polygon
        points="${points}"
        fill="none"
        stroke="rgba(0,0,0,.16)"
        stroke-width="1"
      />
    `);
  }


  /* 중앙에서 바깥으로 뻗는 선 */
  const spokes = orderedData
    .map((_, index) => {
      const point = getPoint(index, maxR);

      return `
        <line
          x1="${cx}"
          y1="${cy}"
          x2="${point.x}"
          y2="${point.y}"
          stroke="rgba(0,0,0,.16)"
          stroke-width="1"
        />
      `;
    })
    .join("");


  /* ==================================================
   실제 사용자의 비율 좌표

   9컬러 합계가 100%이므로 각 컬러는 보통 5~20% 사이에 위치함.
   따라서 100%를 그래프 최대값으로 사용하지 않고,
   현재 결과의 최고 비율을 기준으로 그래프 스케일을 자동 조절함.
   ================================================== */

  /* 현재 9개 컬러 중 가장 높은 비율 */
  const highestPercent = Math.max(
    ...orderedData.map(item => item.percent)
  );

  /*
   * 그래프 최대값을 5% 단위로 올림.
   *
   * 예)
   * 최고값 14% → 그래프 최대 20%
   * 최고값 21% → 그래프 최대 25%
   * 최고값 27% → 그래프 최대 30%
   *
   * 최소 20%는 유지
   */
  const chartMaxPercent = Math.max(
    20,
    Math.ceil(highestPercent / 5) * 5
  );


  /* 실제 사용자의 비율 좌표 */
  const dataPoints = orderedData.map((item, index) => {

    const radius =
      (maxR * item.percent) / chartMaxPercent;

    const point =
      getPoint(index, radius);

    return {
      ...point,
      ...item
    };

  });


  const polygonPoints = dataPoints
    .map(point => `${point.x},${point.y}`)
    .join(" ");


  const winnerColor =
    OPENING_COLORS[winnerKey] || "#FE4D3B";


  /* 각 컬러 점 */
  const pointDots = dataPoints
    .map(point => `
      <circle
        cx="${point.x}"
        cy="${point.y}"
        r="5"
        fill="${point.color}"
      />
    `)
    .join("");


  /* 컬러 이름 + 퍼센트 */
  const labels = orderedData
    .map((item, index) => {
      const point = getPoint(index, maxR + 18);

      let anchor = "middle";

      if (point.x < cx - 10) {
        anchor = "end";
      }

      if (point.x > cx + 10) {
        anchor = "start";
      }

      return `
        <text
          x="${point.x}"
          y="${point.y - 8}"
          text-anchor="${anchor}"
          font-size="10"
          font-weight="800"
          fill="${item.color}"
        >
          ${item.label}
        </text>

        <text
          x="${point.x}"
          y="${point.y + 8}"
          text-anchor="${anchor}"
          font-size="10"
          font-weight="900"
          fill="${item.color}"
        >
          ${item.percent}%
        </text>
      `;
    })
    .join("");


  chartWrap.innerHTML = `
    <svg
      viewBox="0 0 ${size} ${size}"
      width="100%"
      height="100%"
      aria-label="9가지 컬러 비율 그래프"
    >

      ${ringPolygons.join("")}

      ${spokes}

      <polygon
        points="${polygonPoints}"
        fill="${winnerColor}"
        fill-opacity=".16"
        stroke="${winnerColor}"
        stroke-width="2"
      />

      ${pointDots}

      ${labels}

    </svg>
  `;
}

/* ==================================================
   결과 페이지 칩 만들기
   ================================================== */

function renderResultChips(elementId, text) {

  const container =
    document.getElementById(elementId);

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (!text) {
    return;
  }

  text
    .split("·")
    .map(item => item.trim())
    .filter(Boolean)
    .forEach(item => {

      const chip =
        document.createElement("span");

      chip.className =
        "result-chip";

      chip.textContent =
        item;

      container.appendChild(chip);

    });

}


/* ==================================================
   보완 컬러 표시
   ================================================== */

function renderComplementColors(text) {

  const container =
    document.getElementById(
      "resultComplementColor"
    );

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (!text) {
    return;
  }


  text
    .split(/\n+/)
    .map(item => item.trim())
    .filter(Boolean)
    .forEach(line => {

      const parts =
        line.split("—");

      const colorName =
        (parts[0] || "").trim();

      const description =
        (parts[1] || "").trim();


      const colorMeta =
        Object.values(RESULT_RATIO_META)
          .find(item =>
            item.label === colorName
          );


      const item =
        document.createElement("div");

      item.className =
        "result-color-item";


      const dot =
        document.createElement("span");

      dot.className =
        "result-color-dot";

      dot.style.backgroundColor =
        colorMeta?.color || "#111";


      const textWrap =
        document.createElement("div");

      textWrap.className =
        "result-color-text";


      const name =
        document.createElement("strong");

      name.textContent =
        colorName;


      const desc =
        document.createElement("span");

      desc.textContent =
        description;


      textWrap.appendChild(name);
      textWrap.appendChild(desc);

      item.appendChild(dot);
      item.appendChild(textWrap);

      container.appendChild(item);

    });

}

// -------------------- 결과 화면 --------------------
function renderResult() {

  const lang = currentLang;
  const resultKey = state.resultKey;

  const character = CHARACTERS[resultKey];
  const meta = RESULT_META[resultKey] || {};


  /* 결과 상세 문구 불러오기 */
  const getMetaText = (item) => {

    if (!item) {
      return "";
    }

    return (
      item[lang]
      || item.ko
      || ""
    );

  };


  /* ==================================================
     결과 배경
     ================================================== */

  screens.result.style.backgroundColor =
    OPENING_COLORS[resultKey] || "#FE4D3B";


  /* 노란색 결과에서는 글자를 다크그레이로 */
  screens.result.classList.toggle(
    "result-dark-text",
    resultKey === "mohae"
  );


  /* ==================================================
   대표 결과
   ================================================== */

  const characterName =
    character.name[lang]
    || character.name.ko;


  /* 까리 이름 */
  document.getElementById(
    "resultName"
  ).textContent =
    characterName;


  /* 캐릭터 이미지 */
  document.getElementById(
    "resultCharImg"
  ).src =
    `assets/characters/${resultKey}/head_tight.png`;


  /* ==================================================
     컬러 성향 이야기
     ================================================== */

  /*
   * ★ 이 코드가 들어가야
   * 티나까리 → PURPLE
   * 마리까리 → RED
   * 두루까리 → BLUE
   * 식으로 제대로 바뀜
   */
  const resultTypeTitleEl =
    document.getElementById("resultTypeTitle");

  const rawTypeText =
    getMetaText(meta.type);

  const typeColor =
    resultKey === "mohae"
      ? "#222222"
      : (RESULT_RATIO_META[resultKey]?.color || "#111111");

  if (resultTypeTitleEl) {

    const parts = rawTypeText.split("|");

    if (parts.length >= 2) {
      const left = parts[0].trim();
      const right = parts.slice(1).join("|").trim();

      resultTypeTitleEl.innerHTML = `
      <span class="result-type-left" style="color:${typeColor}">
        ${left}
      </span>
      <span class="result-type-divider" style="color:${typeColor}">
        |
      </span>
      <span class="result-type-right" style="color:${typeColor}">
        ${right}
      </span>
    `;
    } else {
      resultTypeTitleEl.innerHTML = `
      <span class="result-type-full" style="color:${typeColor}">
        ${rawTypeText}
      </span>
    `;
    }
  }


  document.getElementById(
    "resultDesc"
  ).textContent =
    getMetaText(meta.detail);


  /* ==================================================
     상세 성향
     ================================================== */

  renderResultChips(
    "resultKeywords",
    getMetaText(meta.keywords)
  );


  document.getElementById(
    "resultStrength"
  ).textContent =
    getMetaText(meta.strength);


  document.getElementById(
    "resultCaution"
  ).textContent =
    getMetaText(meta.caution);


  renderResultChips(
    "resultComplementPoint",
    getMetaText(meta.complementPoint)
  );


  renderComplementColors(
    getMetaText(meta.complementColor)
  );


  document.getElementById(
    "resultCareer"
  ).textContent =
    getMetaText(meta.career);


  renderResultChips(
    "resultJobs",
    getMetaText(meta.jobs)
  );


  document.getElementById(
    "resultQuote"
  ).textContent =
    getMetaText(meta.quote);


  /* 까리 한마디 제목도 현재 언어에 맞게 표시 */
  const quoteLabelTemplate =
    (I18N[lang] && I18N[lang]["result.quoteLabel"])
    || I18N.ko["result.quoteLabel"]
    || "{name} 한마디";

  document.getElementById(
    "resultQuoteLabel"
  ).textContent =
    quoteLabelTemplate.replace(
      "{name}",
      characterName
    );


  /* ==================================================
 TOP 1 퍼센트
 ================================================== */

  const topResult =
    state.ranking && state.ranking.length > 0
      ? state.ranking[0]
      : null;

  const topPercentElement =
    document.getElementById("resultTopPercent");

  if (topPercentElement) {
    topPercentElement.textContent =
      topResult
        ? `${topResult.percent}%`
        : "0%";
  }


  /* ==================================================
     TOP 3 컬러 성향
     ================================================== */

  const rankingList =
    document.getElementById("resultRankingList");

  if (rankingList) {

    rankingList.innerHTML = "";

    const topThree =
      (state.ranking || []).slice(0, 3);

    topThree.forEach((rank, index) => {

      const rankCharacter =
        CHARACTERS[rank.key];

      const item =
        document.createElement("div");

      item.className =
        "result-top3-item";


      item.innerHTML = `

      <div class="top3-rank">
        ${index + 1}
      </div>

      <img
        src="assets/characters/${rank.key}/head_tight.png"
        alt=""
        class="top3-character"
      >

      <div class="top3-info">

        <div class="top3-percent">
          ${rank.percent}%
        </div>

        <div class="top3-name">
          ${rankCharacter.name[currentLang]
        || rankCharacter.name.ko
        }
        </div>

      </div>

    `;

      rankingList.appendChild(item);

    });

  }

  /* ==================================================
     9가지 컬러 비율 그래프
     ================================================== */

  renderRadarChart(resultKey);


  /* ==================================================
     부적
     ================================================== */

  document.getElementById("talismanImg").src =
    `assets/characters/${resultKey}/front.png`;


  /* 부적 페이지 캐릭터 이름 */
  const talismanCharacterName =
    document.getElementById("talismanCharacterName");

  if (talismanCharacterName) {
    talismanCharacterName.textContent =
      characterName;
  }


  /* 부적 페이지 캐릭터 이름 풀이 */
  const talismanNameMeaning =
    document.getElementById("talismanNameMeaning");

  if (talismanNameMeaning) {
    talismanNameMeaning.textContent =
      getMetaText(meta.meaning);
  }
  /* 항상 결과 첫 페이지부터 시작 */
  state.slideIndex = 0;

  updateSlider();
}

// 언어가 바뀔 때 현재 화면에 보이는 동적 텍스트도 갱신
function onLanguageChange(lang) {

  /* 시작 대화 화면 */
  if (screens.start.classList.contains("active")) {
    runStartChatSequence();
  }

  /* 설문 화면 */
  if (screens.survey.classList.contains("active")) {
    renderSurveyPage();
  }

  /* 결과 화면 */
  if (
    screens.result.classList.contains("active")
    && state.resultKey
  ) {
    renderResult();
  }

}

// -------------------- 결과 슬라이드 (결과 <-> 부적) --------------------
const resultSlider = document.getElementById("resultSlider");
const slideDots = document.querySelectorAll(".slide-dot");

function updateSlider() {

  /*
   * 슬라이드 한 장이 화면 100%이므로
   * 0페이지 = 0%
   * 1페이지 = -100%
   */
  resultSlider.style.transform =
    `translateX(-${state.slideIndex * 100}%)`;

  /* 상단/하단 페이지 점 표시 */
  slideDots.forEach((dot, index) => {
    dot.classList.toggle(
      "active",
      index === state.slideIndex
    );
  });


  /* 좌우 화살표 상태 */
  const prevBtn =
    document.getElementById("resultBtnPrev");

  const nextBtn =
    document.getElementById("resultBtnNext");

  if (prevBtn) {
    prevBtn.disabled =
      state.slideIndex === 0;
  }

  if (nextBtn) {
    nextBtn.disabled =
      state.slideIndex === 1;
  }
}

/* 결과 이전 페이지 */
document
  .getElementById("resultBtnPrev")
  .addEventListener("click", () => {

    if (state.slideIndex > 0) {
      state.slideIndex -= 1;
      updateSlider();
    }

  });


/* 결과 다음 페이지 */
document
  .getElementById("resultBtnNext")
  .addEventListener("click", () => {

    if (state.slideIndex < 1) {
      state.slideIndex += 1;
      updateSlider();
    }

  });

slideDots.forEach(dot => {
  dot.addEventListener("click", () => {
    state.slideIndex = Number(dot.dataset.slide);
    updateSlider();
  });
});

// 터치/드래그 스와이프
(function initSwipe() {
  let startX = 0;
  let dragging = false;

  function start(x) { startX = x; dragging = true; }
  function end(x) {
    if (!dragging) return;
    dragging = false;
    const diff = x - startX;
    if (diff < -40 && state.slideIndex < 1) state.slideIndex += 1;
    else if (diff > 40 && state.slideIndex > 0) state.slideIndex -= 1;
    updateSlider();
  }

  screens.result.addEventListener("touchstart", e => start(e.touches[0].clientX), { passive: true });
  screens.result.addEventListener("touchend", e => end(e.changedTouches[0].clientX));

  screens.result.addEventListener("mousedown", e => start(e.clientX));
  screens.result.addEventListener("mouseup", e => end(e.clientX));
})();

// -------------------- 부적 이미지 저장 --------------------
document.getElementById("btnSave").addEventListener("click", async () => {
  const img = document.getElementById("talismanImg");
  try {
    const response = await fetch(img.src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `talisman_${state.resultKey}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (err) {
    // fetch 실패 시(로컬 file:// 환경 등) 새 탭에서 열어 길게 눌러 저장하도록 안내
    window.open(img.src, "_blank");
  }
});

// -------------------- 구글 시트 전송 --------------------
// ============================================================
// Google Sheets 응답 저장
// ============================================================

function submitToGoogleSheet() {

  // ----------------------------------------------------------
  // 구글 웹앱 URL 확인
  // ----------------------------------------------------------

  if (
    !GOOGLE_SHEET_WEBAPP_URL ||
    GOOGLE_SHEET_WEBAPP_URL.includes(
      "여기에"
    )
  ) {

    console.warn(
      "[구글시트] 웹앱 URL이 설정되지 않았습니다."
    );

    return;
  }


  // ----------------------------------------------------------
  // 같은 결과 중복 저장 방지
  // ----------------------------------------------------------

  if (state.hasSubmitted) {
    return;
  }


  state.hasSubmitted = true;


  // ----------------------------------------------------------
  // 응답 고유 ID 만들기
  // ----------------------------------------------------------

  if (!state.submissionId) {

    state.submissionId =
      [
        Date.now(),
        Math.random()
          .toString(36)
          .slice(2, 10)
      ].join("-");

  }


  // ----------------------------------------------------------
  // TOP 1 / 2 / 3
  // ----------------------------------------------------------

  const top1 =
    state.ranking?.[0] || {};

  const top2 =
    state.ranking?.[1] || {};

  const top3 =
    state.ranking?.[2] || {};


  // ----------------------------------------------------------
  // 9컬러 퍼센트 객체
  // ----------------------------------------------------------

  const percents = {};

  (
    state.allColorPercents || []
  ).forEach(item => {

    percents[item.key] =
      item.percent;

  });


  // ----------------------------------------------------------
  // Q01 ~ Q72 답변
  //
  // question.id까지 같이 보관
  // ----------------------------------------------------------

  const answers =
    QUESTIONS.map(
      (question, index) => ({
        id: question.id,
        answer:
          state.answers[index]
      })
    );


  // ----------------------------------------------------------
  // 결과 이름
  // ----------------------------------------------------------

  const resultCharacter =
    CHARACTERS[state.resultKey];

  const resultName =
    resultCharacter
      ? (
        resultCharacter.name[currentLang]
        ||
        resultCharacter.name.ko
        ||
        state.resultKey
      )
      : state.resultKey;


  // ----------------------------------------------------------
  // Google Sheets 전송 데이터
  // ----------------------------------------------------------

  const payload = {

    submissionId:
      state.submissionId,

    clientTimestamp:
      new Date().toISOString(),

    lang:
      currentLang,


    gender:
      state.profile.gender,

    ageGroup:
      state.profile.ageGroup,

    occupation:
      state.profile.occupation,

    resultKey:
      state.resultKey,

    resultName:
      resultName,


    // TOP1

    top1Percent:
      top1.percent ?? 0,


    // TOP2

    top2Key:
      top2.key || "",

    top2Percent:
      top2.percent ?? 0,


    // TOP3

    top3Key:
      top3.key || "",

    top3Percent:
      top3.percent ?? 0,


    // 원점수

    scores:
      state.scores || {},


    // 9컬러 퍼센트

    percents:
      percents,


    // 72문항

    answers:
      answers,


    // 사용자 환경

    userAgent:
      navigator.userAgent || ""

  };


  // ----------------------------------------------------------
  // 저장
  //
  // ★ 결과 화면 전환을 기다리지 않는다.
  // ----------------------------------------------------------

  fetch(
    GOOGLE_SHEET_WEBAPP_URL,
    {

      method: "POST",

      mode: "no-cors",

      headers: {
        "Content-Type":
          "text/plain;charset=utf-8"
      },

      body:
        JSON.stringify(payload)

    }
  )

    .then(() => {

      console.log(
        "[구글시트] 응답 전송 완료"
      );

    })

    .catch(error => {

      console.error(
        "[구글시트] 응답 전송 실패",
        error
      );

      // 실제 네트워크 실패 시
      // 재전송 가능하도록 풀어줌
      state.hasSubmitted = false;

    });

}
