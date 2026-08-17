// ------------------------------------------------------------
// 다국어(한/영/일/중) 텍스트 사전
// data-i18n="key" 가 붙은 요소는 여기서 자동으로 텍스트가 채워집니다.
// 설문 문항/보기 텍스트는 questions.js 에서 별도로 관리합니다.
// ------------------------------------------------------------
const I18N = {
  ko: {
    "opening.title": "컬러 성향 테스트",
    "opening.tap": "화면을 터치해서 시작하세요",
    "start.title": "나의 컬러 성향은?",
    "start.desc": "간단한 질문에 답하고<br>나를 닮은 부적 캐릭터를 만나보세요",
    "start.button": "START👆🏻",

    "profile.title": "테스트 전, 간단히 알려주세요",
    "profile.desc": "더 의미 있는 컬러 데이터를 위해 사용됩니다.",
    "profile.language": "언어",
    "profile.gender": "성별",
    "profile.genderFemale": "여성",
    "profile.genderMale": "남성",
    "profile.genderOther": "기타",
    "profile.genderSkip": "응답하지 않음",
    "profile.age": "연령대",
    "profile.ageTeens": "10대 이하",
    "profile.age20": "20대",
    "profile.age30": "30대",
    "profile.age40": "40대",
    "profile.age50": "50대",
    "profile.age60": "60대 이상",
    "profile.job": "직업",
    "profile.jobStudent": "학생",
    "profile.jobEmployee": "직장인",
    "profile.jobBusiness": "자영업·사업",
    "profile.jobFreelancer": "프리랜서",
    "profile.jobHomemaker": "주부",
    "profile.jobSeeker": "취업준비·구직중",
    "profile.jobOther": "기타",
    "profile.select": "선택해주세요",
    "profile.warning": "모든 항목을 선택해주세요.",
    "profile.next": "다음",

    "survey.yes": "예",
    "survey.no": "아니오",
    "survey.warning": "모든 문항에 답해주시기 바랍니다.",

    "result.eyebrow": "당신의 컬러 성향은",
    "result.desc": "결과 설명 문구가 여기에 들어갑니다.",
    "result.swipe": "옆으로 넘겨서 부적을 확인하세요 →",

    "result.top3Title": "TOP3 컬러 성향",
    "result.ratioTitle": "나의 9가지 컬러 비율",
    "result.summaryTitle": "나의 컬러 성향 이야기",
    "result.keywords": "핵심 키워드",
    "result.strength": "강점",
    "result.caution": "주의할 점",
    "result.complementPoint": "보완 포인트",
    "result.complementColor": "보완 컬러",
    "result.career": "직업관",
    "result.jobs": "추천 직업",
    "result.quoteLabel": "{name} 한마디",

    "link.shop": "ITCOLOR SHOP",
    "link.education": "퍼스널컬러<br>교육문의하기",
    "link.personalColor": "퍼스널컬러<br>진단 테스트",
    "link.littly": "ITCOLOR 리틀리",

    "talisman.title": "나만의 배경화면",
    "talisman.save": "이미지 저장하기",
    "talisman.nameMeaning": "이름 풀이",
    "talisman.company": "ITCOLOR 홈페이지 방문하기",

    "copyright": "ⓒ 2026 ITCOLOR. All rights reserved.\n9종 캐릭터 저작권 등록 완료 | 무단 복제·배포·가공·상업적 이용 금지"
  },
  en: {
    "opening.title": "Color Personality Test",
    "opening.tap": "Tap the screen to begin",
    "start.title": "What's your color type?",
    "start.desc": "Answer a few simple questions<br>and meet your talisman character",
    "start.button": "START👆🏻",

    "profile.title": "Tell us a little about yourself",
    "profile.desc": "This information helps us better understand color personality trends.",
    "profile.language": "Language",
    "profile.gender": "Gender",
    "profile.genderFemale": "Female",
    "profile.genderMale": "Male",
    "profile.genderOther": "Other",
    "profile.genderSkip": "Prefer not to say",
    "profile.age": "Age Group",
    "profile.ageTeens": "Teens or younger",
    "profile.age20": "20s",
    "profile.age30": "30s",
    "profile.age40": "40s",
    "profile.age50": "50s",
    "profile.age60": "60+",
    "profile.job": "Occupation",
    "profile.jobStudent": "Student",
    "profile.jobEmployee": "Employee",
    "profile.jobBusiness": "Business Owner",
    "profile.jobFreelancer": "Freelancer",
    "profile.jobHomemaker": "Homemaker",
    "profile.jobSeeker": "Job Seeker",
    "profile.jobOther": "Other",
    "profile.select": "Please select",
    "profile.warning": "Please select all fields.",
    "profile.next": "NEXT",

    "survey.yes": "YES",
    "survey.no": "NO",
    "survey.warning": "Please answer all questions.",
    "result.eyebrow": "Your color type is",
    "result.desc": "Result description goes here.",
    "result.swipe": "Swipe to see your talisman →",
    "result.top3Title": "TOP 3 Color Traits",
    "result.ratioTitle": "My 9-Color Balance",
    "result.summaryTitle": "My Color Personality",
    "result.keywords": "Core Keywords",
    "result.strength": "Strengths",
    "result.caution": "Watch Out For",
    "result.complementPoint": "Growth Points",
    "result.complementColor": "Balancing Colors",
    "result.career": "Career Values",
    "result.jobs": "Recommended Careers",
    "result.quoteLabel": "A word from {name}",

    "link.shop": "ITCOLOR SHOP",
    "link.education": "Personal Color<br>Training Inquiry",
    "link.personalColor": "Personal Color<br>Diagnosis Test",
    "link.littly": "ITCOLOR Littly",
    "talisman.title": "My Wallpaper",
    "talisman.save": "Save Image",
    "talisman.nameMeaning": "Name Meaning",
    "talisman.company": "Visit ITCOLOR Website",
    "copyright": "ⓒ 2026 ITCOLOR. All rights reserved.\nCopyright registration completed for all 9 characters | Unauthorized reproduction, distribution, modification, or commercial use is prohibited."
  },
  ja: {
    "opening.title": "カラー診断テスト",
    "opening.tap": "画面をタップして開始",
    "start.title": "あなたのカラータイプは?",
    "start.desc": "簡単な質問に答えて<br>あなた専用のお守りキャラクターに出会おう",
    "start.button": "スタート👆🏻",

    "profile.title": "テストの前に少し教えてください",
    "profile.desc": "より意味のあるカラー傾向データのために使用されます。",
    "profile.language": "言語",
    "profile.gender": "性別",
    "profile.genderFemale": "女性",
    "profile.genderMale": "男性",
    "profile.genderOther": "その他",
    "profile.genderSkip": "回答しない",
    "profile.age": "年代",
    "profile.ageTeens": "10代以下",
    "profile.age20": "20代",
    "profile.age30": "30代",
    "profile.age40": "40代",
    "profile.age50": "50代",
    "profile.age60": "60代以上",
    "profile.job": "職業",
    "profile.jobStudent": "学生",
    "profile.jobEmployee": "会社員",
    "profile.jobBusiness": "自営業・経営",
    "profile.jobFreelancer": "フリーランス",
    "profile.jobHomemaker": "主婦・主夫",
    "profile.jobSeeker": "就職活動中",
    "profile.jobOther": "その他",
    "profile.select": "選択してください",
    "profile.warning": "すべての項目を選択してください。",
    "profile.next": "次へ",

    "survey.yes": "はい",
    "survey.no": "いいえ",
    "survey.warning": "すべての設問に回答してください。",
    "result.eyebrow": "あなたのカラータイプは",
    "result.desc": "結果の説明文がここに入ります。",
    "result.swipe": "スワイプしてお守りを見る →",
    "result.top3Title": "TOP3 カラー傾向",
    "result.ratioTitle": "9色のカラーバランス",
    "result.summaryTitle": "私のカラー傾向",
    "result.keywords": "キーワード",
    "result.strength": "強み",
    "result.caution": "注意ポイント",
    "result.complementPoint": "補完ポイント",
    "result.complementColor": "補完カラー",
    "result.career": "仕事観",
    "result.jobs": "おすすめの職業",
    "result.quoteLabel": "{name}からひとこと",

    "link.shop": "ITCOLOR SHOP",
    "link.education": "パーソナルカラー<br>研修のお問い合わせ",
    "link.personalColor": "パーソナルカラー<br>診断テスト",
    "link.littly": "ITCOLOR Littly",
    "talisman.title": "私だけの壁紙",
    "talisman.save": "画像を保存",
    "talisman.nameMeaning": "名前の意味",
    "talisman.company": "ITCOLOR ホームページへ",
    "copyright": "ⓒ 2026 ITCOLOR. All rights reserved.\n9種のキャラクター著作権登録完了 | 無断複製・配布・加工・商用利用禁止"
  },
  zh: {
    "opening.title": "色彩性格测试",
    "opening.tap": "点击屏幕开始",
    "start.title": "你的色彩性格是?",
    "start.desc": "回答几个简单的问题<br>遇见属于你的护身符角色",
    "start.button": "开始👆🏻",

    "profile.title": "测试前，请简单告诉我们",
    "profile.desc": "这些信息将用于更有意义的色彩倾向数据分析。",
    "profile.language": "语言",
    "profile.gender": "性别",
    "profile.genderFemale": "女性",
    "profile.genderMale": "男性",
    "profile.genderOther": "其他",
    "profile.genderSkip": "不愿回答",
    "profile.age": "年龄段",
    "profile.ageTeens": "19岁以下",
    "profile.age20": "20-29岁",
    "profile.age30": "30-39岁",
    "profile.age40": "40-49岁",
    "profile.age50": "50-59岁",
    "profile.age60": "60岁以上",
    "profile.job": "职业",
    "profile.jobStudent": "学生",
    "profile.jobEmployee": "上班族",
    "profile.jobBusiness": "个体经营·企业经营",
    "profile.jobFreelancer": "自由职业者",
    "profile.jobHomemaker": "家庭主妇/主夫",
    "profile.jobSeeker": "求职中",
    "profile.jobOther": "其他",
    "profile.select": "请选择",
    "profile.warning": "请选择所有项目。",
    "profile.next": "下一步",

    "survey.yes": "是",
    "survey.no": "否",
    "survey.warning": "请回答所有问题。",
    "result.eyebrow": "你的色彩性格是",
    "result.desc": "结果说明文字放在这里。",
    "result.swipe": "向左滑动查看护身符 →",
    "result.top3Title": "TOP3 色彩倾向",
    "result.ratioTitle": "我的9种色彩比例",
    "result.summaryTitle": "我的色彩性格",
    "result.keywords": "核心关键词",
    "result.strength": "优势",
    "result.caution": "注意事项",
    "result.complementPoint": "提升要点",
    "result.complementColor": "平衡色彩",
    "result.career": "职业观",
    "result.jobs": "推荐职业",
    "result.quoteLabel": "{name}的一句话",

    "link.shop": "ITCOLOR SHOP",
    "link.education": "个人色彩培训<br>咨询",
    "link.personalColor": "个人色彩<br>诊断测试",
    "link.littly": "ITCOLOR Littly",
    "talisman.title": "我的专属壁纸",
    "talisman.save": "保存图片",
    "talisman.nameMeaning": "名字含义",
    "talisman.company": "访问 ITCOLOR 官网",
    "copyright": "ⓒ 2026 ITCOLOR. All rights reserved.\n9个角色著作权登记完成 | 禁止未经授权的复制、分发、修改及商业使用"
  }
};

let currentLang = localStorage.getItem("colortest_lang") || "ko";

function applyI18n(lang) {
  currentLang = lang;
  localStorage.setItem("colortest_lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const dict = I18N[lang] || I18N.ko;

    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.lang === lang
    );
  });

  if (typeof onLanguageChange === "function") {
    onLanguageChange(lang);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyI18n(btn.dataset.lang));
  });
  applyI18n(currentLang);
});


