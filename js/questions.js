// ==============================================================
// 컬러 성향 테스트
// 9컬러 × 5문항 = 총 45문항
// KO / EN / JA / ZH 지원
// 예/아니오 응답 + 역채점 방식
// ==============================================================

const CHARACTERS = {
  duru: { name: { ko: "두루까리", en: "Duru-kkari", ja: "ドゥルカリ", zh: "杜鲁卡里" }, desc: { ko: "두루두루 잘 어울리는 원만한 성향이에요.", en: "You get along well with everyone.", ja: "誰とでも仲良くできるタイプです。", zh: "你是与谁都能好好相处的圆融型。" } },
  lala: { name: { ko: "라라까리", en: "Lala-kkari", ja: "ララカリ", zh: "拉拉卡里" }, desc: { ko: "밝고 경쾌한 에너지가 넘쳐요.", en: "You're full of bright, cheerful energy.", ja: "明るく軽快なエネルギーが溢れています。", zh: "你充满了明亮又轻快的能量。" } },
  mari: { name: { ko: "마리까리", en: "Mari-kkari", ja: "マリカリ", zh: "玛丽卡里" }, desc: { ko: "차분하고 신중하게 생각하는 편이에요.", en: "You tend to think calmly and carefully.", ja: "落ち着いて慎重に考えるタイプです。", zh: "你倾向于冷静而谨慎地思考。" } },
  moi: { name: { ko: "모이까리", en: "Moi-kkari", ja: "モイカリ", zh: "莫伊卡里" }, desc: { ko: "사람들과 함께 모이는 걸 좋아해요.", en: "You love gathering with people.", ja: "人と集まることが好きです。", zh: "你喜欢和大家聚在一起。" } },
  mohae: { name: { ko: "모해까리", en: "Mohae-kkari", ja: "モヘカリ", zh: "莫海卡里" }, desc: { ko: "호기심이 많고 새로운 걸 좋아해요.", en: "You're curious and love new things.", ja: "好奇心旺盛で新しいことが好きです。", zh: "你充满好奇心，喜欢新鲜事物。" } },
  bona: { name: { ko: "보나까리", en: "Bona-kkari", ja: "ボナカリ", zh: "博纳卡里" }, desc: { ko: "보는 눈이 섬세하고 감각적이에요.", en: "You have a delicate, sharp sense of style.", ja: "繊細で感覚的な視点を持っています。", zh: "你的眼光细腻而富有品味。" } },
  suri: { name: { ko: "수리까리", en: "Suri-kkari", ja: "スリカリ", zh: "苏里卡里" }, desc: { ko: "논리적이고 계획적으로 움직여요.", en: "You act logically and with a plan.", ja: "論理的で計画的に行動します。", zh: "你行事逻辑清晰又有计划。" } },
  juna: { name: { ko: "주나까리", en: "Juna-kkari", ja: "ジュナカリ", zh: "珠娜卡里" }, desc: { ko: "주변을 잘 챙기는 다정한 성향이에요.", en: "You're warm and take good care of others.", ja: "周りをよく気遣う優しいタイプです。", zh: "你温暖体贴，很会照顾身边的人。" } },
  tina: { name: { ko: "티나까리", en: "Tina-kkari", ja: "ティナカリ", zh: "蒂娜卡里" }, desc: { ko: "티 나게 자신감 넘치는 스타일이에요.", en: "You have a confident, stand-out style.", ja: "はっきりと自信あふれるスタイルです。", zh: "你自信满满，风格十分抢眼。" } }
};


// ==============================================================
// 결과 페이지 상세 콘텐츠
// KO / EN / JA / ZH
// ==============================================================

const RESULT_META = {

  // ============================================================
  // RED · 마리까리
  // ============================================================
  mari: {

    latin: {
      ko: "MARI KKARI",
      en: "MARI KKARI",
      ja: "MARI KKARI",
      zh: "MARI KKARI"
    },

    type: {
      ko: "RED | 후퇴 없는 추진형 리더",
      en: "RED | Fearless Action-Oriented Leader",
      ja: "RED | 後退知らずの行動派リーダー",
      zh: "RED | 勇往直前的行动型领导者"
    },

    meaning: {
      ko: "‘마리’는 머리, 우두머리, 으뜸가는 사람을 뜻하는 순우리말입니다. 빨간색을 상징하는 마리까리는 앞장서 움직이는 으뜸의 페르소나입니다.",
      en: "‘Mari’ is a native Korean word meaning head, leader, or someone who stands first. Representing red, Mari-kkari is a persona who takes the lead and moves boldly.",
      ja: "「マリ」は、頭・リーダー・一番優れた人を意味する純韓国語です。赤を象徴するマリカリは、誰よりも先頭に立って行動するペルソナです。",
      zh: "“Mari”是表示头领、领导者或出类拔萃之人的韩国固有词。象征红色的玛丽卡里，是勇于站在最前方行动的领导型人格。"
    },

    short: {
      ko: "빠른 결단과 강한 실행력으로 목표를 향해 먼저 움직이는 타입입니다.",
      en: "You move toward your goals with quick decisions and strong execution.",
      ja: "素早い決断力と強い実行力で、目標に向かって真っ先に動くタイプです。",
      zh: "你拥有快速的决断力和强大的执行力，总是率先向目标行动。"
    },

    detail: {
      ko: "목표가 생기면 오래 고민하기보다 먼저 움직입니다. 새로운 도전과 경쟁을 두려워하지 않고, 문제가 생기면 직접 부딪혀 해결하는 편입니다. 빠른 결단력과 강한 실행력으로 사람들을 이끌고 결과를 만들어내는 힘이 있습니다.",
      en: "Once you have a goal, you tend to act rather than overthink. You are not afraid of new challenges or competition, and when problems arise, you prefer to face them directly. Your quick decisions and strong execution help you lead others and create results.",
      ja: "目標ができると、長く悩むより先に行動するタイプです。新しい挑戦や競争を恐れず、問題が起きても避けずに直接向き合います。素早い決断力と強い実行力で人を導き、結果を生み出す力があります。",
      zh: "一旦有了目标，你不会长时间犹豫，而是先行动。你不害怕新的挑战或竞争，遇到问题时也倾向于正面解决。你凭借快速的决断力和强大的执行力带领他人并创造结果。"
    },

    keywords: {
      ko: "추진력 · 도전 · 자신감 · 결단력 · 리더십",
      en: "Drive · Challenge · Confidence · Decisiveness · Leadership",
      ja: "推進力 · 挑戦 · 自信 · 決断力 · リーダーシップ",
      zh: "推进力 · 挑战 · 自信 · 决断力 · 领导力"
    },

    strength: {
      ko: "빠른 판단과 강한 실행력으로 기회를 놓치지 않고, 어려운 상황에서도 앞장서 일을 추진합니다.",
      en: "Your quick judgment and strong execution help you seize opportunities and move forward even in difficult situations.",
      ja: "素早い判断力と強い実行力でチャンスを逃さず、難しい状況でも先頭に立って物事を進めます。",
      zh: "你凭借快速的判断力和强大的执行力抓住机会，即使在困难情况下也能主动推进事情。"
    },

    caution: {
      ko: "행동이 계획보다 앞서거나 시작에 비해 지속력이 떨어질 수 있습니다. 과감함이 때로는 무모한 선택이 되지 않도록 한 번 더 점검해보세요.",
      en: "Action may sometimes come before planning, and your persistence may fade after a strong start. Take one more moment to check that boldness does not become recklessness.",
      ja: "計画より行動が先になったり、始めたときの勢いに比べて継続力が落ちることがあります。大胆さが無謀さにならないよう、一度立ち止まって確認してみましょう。",
      zh: "有时行动会先于计划，开始时动力十足却可能缺乏持续性。请多确认一步，避免果断变成鲁莽。"
    },

    complementPoint: {
      ko: "계획 · 인내 · 경청 · 지속력",
      en: "Planning · Patience · Listening · Persistence",
      ja: "計画 · 忍耐 · 傾聴 · 継続力",
      zh: "计划 · 耐心 · 倾听 · 持续力"
    },

    complementColor: {
      ko: "GREEN — 여유와 배려\nBLUE — 계획과 신중한 판단",
      en: "GREEN — Calmness and consideration\nBLUE — Planning and careful judgment",
      ja: "GREEN — ゆとりと配慮\nBLUE — 計画性と慎重な判断",
      zh: "GREEN — 从容与体贴\nBLUE — 计划与慎重判断"
    },

    career: {
      ko: "주도권을 가지고 빠르게 결정하며 목표와 성과를 만들어낼 수 있는 환경에서 능력을 발휘합니다.",
      en: "You thrive in environments where you can take initiative, make quick decisions, and turn goals into results.",
      ja: "主導権を持ち、素早く判断しながら目標と成果を生み出せる環境で力を発揮します。",
      zh: "在能够掌握主导权、快速做出决定并创造目标成果的环境中，你最能发挥能力。"
    },

    jobs: {
      ko: "경영자 · 리더 · 정치인 · 방송 관련 직업 · 무용가",
      en: "Entrepreneur · Leader · Politician · Broadcasting Professional · Dancer",
      ja: "経営者 · リーダー · 政治家 · 放送関係職 · ダンサー",
      zh: "经营者 · 领导者 · 政治家 · 广播相关职业 · 舞者"
    },

    quote: {
      ko: "“생각했다면 움직인다. 후퇴 없는 추진력 1위!”",
      en: "“If I've thought it, I move. No retreat, just forward!”",
      ja: "「思ったら動く。後退知らずの推進力No.1！」",
      zh: "“想到就行动。绝不后退，推进力第一！”"
    }

  },


  // ============================================================
  // ORANGE · 라라까리
  // ============================================================
  lala: {

    latin: {
      ko: "LALA KKARI",
      en: "LALA KKARI",
      ja: "LALA KKARI",
      zh: "LALA KKARI"
    },

    type: {
      ko: "ORANGE | 흥겹고 즐거운 사교형",
      en: "ORANGE | Cheerful and Social Type",
      ja: "ORANGE | 明るく楽しい社交型",
      zh: "ORANGE | 快乐活泼的社交型"
    },

    meaning: {
      ko: "‘라라’는 흥겨울 때 읊조리는 소리를 나타내는 순우리말로, 흥겹고 즐거운 삶의 의미를 담고 있습니다. 오렌지를 상징하는 라라까리는 밝은 에너지를 전하는 페르소나입니다.",
      en: "‘Lala’ is a native Korean expression inspired by the joyful sounds people hum when they are happy. Representing orange, Lala-kkari is a persona who spreads bright and cheerful energy.",
      ja: "「ララ」は、楽しいときに口ずさむ声を表す純韓国語で、明るく楽しい人生への願いが込められています。オレンジを象徴するララカリは、周囲に明るいエネルギーを届けるペルソナです。",
      zh: "“Lala”是表达开心时轻声哼唱声音的韩国固有词，蕴含着快乐生活的意义。象征橙色的拉拉卡里，是向周围传递明亮能量的人格。"
    },

    short: {
      ko: "사람들과 어울리며 즐거운 에너지를 나누는 사교적인 타입입니다.",
      en: "You are a social type who gains energy by connecting and having fun with others.",
      ja: "人と交流しながら楽しいエネルギーを分かち合う社交的なタイプです。",
      zh: "你喜欢与人相处，并通过分享快乐获得能量。"
    },

    detail: {
      ko: "사람들과 어울릴 때 에너지가 살아나는 타입입니다. 처음 만난 사람과도 자연스럽게 가까워지고, 어색한 자리에서는 먼저 분위기를 밝게 만듭니다. 사람과 사람을 연결하고 함께 즐거움을 만들어가는 것이 큰 강점입니다.",
      en: "You come alive when you are around people. You naturally connect even with people you have just met and often brighten awkward situations first. One of your greatest strengths is bringing people together and creating enjoyable moments.",
      ja: "人と一緒にいるとエネルギーが湧いてくるタイプです。初対面の人とも自然に距離を縮め、気まずい場では自分から雰囲気を明るくします。人と人をつなぎ、一緒に楽しさをつくることが大きな強みです。",
      zh: "与人相处时，你的能量会被激发出来。即使是第一次见面的人，你也能自然地拉近距离；在尴尬的场合中，你往往会先活跃气氛。连接人与人、共同创造快乐，是你最大的优势之一。"
    },

    keywords: {
      ko: "사교성 · 낙천성 · 친화력 · 표현력 · 활력 · 즐거움",
      en: "Sociability · Optimism · Friendliness · Expression · Energy · Joy",
      ja: "社交性 · 楽観性 · 親しみやすさ · 表現力 · 活力 · 楽しさ",
      zh: "社交性 · 乐观 · 亲和力 · 表达力 · 活力 · 快乐"
    },

    strength: {
      ko: "긍정적인 에너지와 뛰어난 친화력으로 사람들과 빠르게 가까워지고 자연스럽게 분위기를 이끌어갑니다.",
      en: "Your positive energy and friendliness help you connect quickly with people and naturally lead the mood of a group.",
      ja: "前向きなエネルギーと高い親和力で人とすぐに打ち解け、自然に場の雰囲気を盛り上げます。",
      zh: "你凭借积极的能量和出色的亲和力快速与人拉近距离，并自然地带动气氛。"
    },

    caution: {
      ko: "사람들의 반응에 영향을 받거나 혼자 있는 시간을 외롭게 느낄 수 있습니다. 흥미가 빠르게 변해 집중력과 꾸준함이 떨어지는 것도 주의하세요.",
      en: "You may be affected by others' reactions or feel lonely when alone. Your interests can also change quickly, so watch out for losing focus or consistency.",
      ja: "周囲の反応に影響されやすかったり、一人の時間を寂しく感じることがあります。興味が移りやすく、集中力や継続力が落ちないよう注意しましょう。",
      zh: "你可能容易受到他人反应的影响，也可能觉得独处有些寂寞。兴趣变化较快，因此也要注意专注力和持续性。"
    },

    complementPoint: {
      ko: "집중 · 꾸준함 · 혼자만의 시간 · 관계의 깊이",
      en: "Focus · Consistency · Time Alone · Deeper Relationships",
      ja: "集中 · 継続力 · 一人の時間 · 関係の深さ",
      zh: "专注 · 坚持 · 独处时间 · 关系深度"
    },

    complementColor: {
      ko: "BLUE — 집중과 차분함\nGREEN — 안정적인 관계와 지속성",
      en: "BLUE — Focus and calmness\nGREEN — Stable relationships and consistency",
      ja: "BLUE — 集中力と落ち着き\nGREEN — 安定した関係と継続性",
      zh: "BLUE — 专注与沉稳\nGREEN — 稳定的关系与持续性"
    },

    career: {
      ko: "사람을 만나고 소통하며 현장의 에너지를 직접 느낄 수 있는 환경에 잘 맞습니다.",
      en: "You are well suited to environments where you can meet people, communicate, and feel the energy of the moment.",
      ja: "人と出会い、コミュニケーションを取りながら現場のエネルギーを直接感じられる環境に向いています。",
      zh: "你适合能够与人见面、沟通，并直接感受现场能量的工作环境。"
    },

    jobs: {
      ko: "스포츠 선수 · 개그맨 · 디자이너 · 건축가",
      en: "Athlete · Comedian · Designer · Architect",
      ja: "スポーツ選手 · コメディアン · デザイナー · 建築家",
      zh: "运动员 · 喜剧演员 · 设计师 · 建筑师"
    },

    quote: {
      ko: "“나를 모른다고? 오늘부터 아는 사이 하면 되지!”",
      en: "“You don't know me? Then let's get to know each other today!”",
      ja: "「私を知らないの？じゃあ今日から知り合いになればいいじゃん！」",
      zh: "“还不认识我？那从今天开始认识不就好了！”"
    }

  },


  // ============================================================
  // YELLOW · 모해까리
  // ============================================================
  mohae: {

    latin: {
      ko: "MOHAE KKARI",
      en: "MOHAE KKARI",
      ja: "MOHAE KKARI",
      zh: "MOHAE KKARI"
    },

    type: {
      ko: "YELLOW | 호기심 가득한 아이디어형",
      en: "YELLOW | Curious Idea Generator",
      ja: "YELLOW | 好奇心いっぱいのアイデア型",
      zh: "YELLOW | 好奇心满满的创意型"
    },

    meaning: {
      ko: "‘모해’는 모퉁이를 비쳐주는 햇빛을 뜻하는 순우리말입니다. 동시에 “모해? 모해?”라는 호기심의 이미지를 담아, 노랑을 상징하는 밝고 호기심 많은 페르소나를 표현합니다.",
      en: "‘Mohae’ is a native Korean word referring to sunlight shining around a corner. It also plays on the sound of asking, “What are you doing?” Representing yellow, Mohae-kkari is a bright and curious persona.",
      ja: "「モヘ」は、曲がり角を照らす日差しを意味する純韓国語です。同時に「何してる？何してる？」と聞くような好奇心のイメージも込めています。黄色を象徴するモヘカリは、明るく好奇心旺盛なペルソナです。",
      zh: "“Mohae”是指照亮角落阳光的韩国固有词，同时也包含“在做什么？在做什么？”这种充满好奇心的语感。象征黄色的莫海卡里，是明亮又充满好奇心的人格。"
    },

    short: {
      ko: "새로운 가능성을 발견하고 아이디어로 표현하는 호기심 많은 타입입니다.",
      en: "You are a curious type who discovers new possibilities and turns them into ideas.",
      ja: "新しい可能性を見つけ、アイデアとして表現する好奇心旺盛なタイプです。",
      zh: "你善于发现新的可能性，并把它们转化成创意。"
    },

    detail: {
      ko: "새로운 것을 발견하고 배우는 것을 좋아합니다. 궁금한 것이 생기면 직접 알아봐야 직성이 풀리고, 익숙한 방식보다 새롭고 재미있는 방법을 찾습니다. 다양한 가능성을 빠르게 발견하고 자신의 생각을 아이디어로 표현하는 능력이 뛰어납니다.",
      en: "You enjoy discovering and learning new things. When something sparks your curiosity, you want to explore it yourself. You prefer new and interesting approaches over familiar ones and are good at quickly spotting possibilities and expressing them as ideas.",
      ja: "新しいことを発見し、学ぶのが好きなタイプです。気になることがあると、自分で調べないと気が済みません。慣れた方法より新しく面白いやり方を好み、多様な可能性を素早く見つけてアイデアとして表現する力があります。",
      zh: "你喜欢发现和学习新事物。只要产生疑问，就会想亲自查清楚。比起熟悉的方法，你更喜欢新颖有趣的方式，也很擅长快速发现各种可能性并用创意表达出来。"
    },

    keywords: {
      ko: "호기심 · 창의성 · 아이디어 · 지식욕 · 표현력 · 인정욕구",
      en: "Curiosity · Creativity · Ideas · Desire to Learn · Expression · Recognition",
      ja: "好奇心 · 創造性 · アイデア · 知識欲 · 表現力 · 承認欲求",
      zh: "好奇心 · 创造力 · 创意 · 求知欲 · 表达力 · 认可需求"
    },

    strength: {
      ko: "새로운 가능성을 빠르게 발견하고 톡톡 튀는 아이디어로 문제를 새로운 방식에서 바라봅니다.",
      en: "You quickly discover new possibilities and approach problems from fresh angles with original ideas.",
      ja: "新しい可能性を素早く見つけ、ユニークなアイデアで物事を新しい角度から捉えます。",
      zh: "你能快速发现新的可能性，并用跳脱的创意从不同角度看待问题。"
    },

    caution: {
      ko: "관심이 빠르게 이동해 집중력과 꾸준함이 떨어질 수 있습니다. 칭찬과 인정에 지나치게 영향을 받지 않도록 주의하세요.",
      en: "Your attention may shift quickly, making it harder to stay focused and consistent. Be careful not to depend too much on praise or recognition.",
      ja: "興味が移りやすく、集中力や継続力が落ちることがあります。褒められることや周囲からの評価に左右されすぎないよう注意しましょう。",
      zh: "你的兴趣可能转移得很快，导致专注力和持续性下降。也要注意不要过度受到赞美和认可的影响。"
    },

    complementPoint: {
      ko: "꾸준함 · 집중 · 책임감 · 깊이 있는 사고",
      en: "Consistency · Focus · Responsibility · Deeper Thinking",
      ja: "継続力 · 集中 · 責任感 · 深い思考",
      zh: "坚持 · 专注 · 责任感 · 深度思考"
    },

    complementColor: {
      ko: "PURPLE — 깊은 사고와 내면 탐색\nBROWN — 현실적인 실행과 지속성",
      en: "PURPLE — Deeper thinking and inner exploration\nBROWN — Practical action and consistency",
      ja: "PURPLE — 深い思考と内面の探求\nBROWN — 現実的な実行力と継続性",
      zh: "PURPLE — 深度思考与内在探索\nBROWN — 现实执行与持续性"
    },

    career: {
      ko: "정답이 정해진 업무보다 아이디어를 내고 새로운 가능성을 발견하며 자신의 생각을 표현할 수 있는 환경에 강합니다.",
      en: "You thrive in environments where you can generate ideas, discover possibilities, and express your own thoughts rather than follow one fixed answer.",
      ja: "正解が決まった仕事より、アイデアを出し、新しい可能性を発見しながら自分の考えを表現できる環境で力を発揮します。",
      zh: "比起答案固定的工作，你更适合能够提出创意、发现新可能并表达自己想法的环境。"
    },

    jobs: {
      ko: "영업직 · 컨설턴트 · 경영인 · 카운슬러 · 개그맨",
      en: "Sales Professional · Consultant · Entrepreneur · Counselor · Comedian",
      ja: "営業職 · コンサルタント · 経営者 · カウンセラー · コメディアン",
      zh: "销售 · 咨询顾问 · 经营者 · 咨询师 · 喜剧演员"
    },

    quote: {
      ko: "“모해, 모해? 새로운 건 일단 알아봐야지!”",
      en: "“What's that? Something new? I have to find out!”",
      ja: "「何してる、何してる？新しいことならまず知りたい！」",
      zh: "“在做什么？有新东西？那当然要先了解一下！”"
    }

  },


  // ============================================================
  // GREEN · 모이까리
  // ============================================================
  moi: {

    latin: {
      ko: "MOI KKARI",
      en: "MOI KKARI",
      ja: "MOI KKARI",
      zh: "MOI KKARI"
    },

    type: {
      ko: "GREEN | 알차고 야무진 안정형",
      en: "GREEN | Steady and Dependable Type",
      ja: "GREEN | しっかり者の安定型",
      zh: "GREEN | 踏实可靠的稳定型"
    },

    meaning: {
      ko: "‘모이’는 작고도 야무지다는 의미와 ‘모이다’에서 따온 순우리말입니다. 네덜란드어 ‘mooi’에는 ‘아름답다’라는 뜻도 있습니다. 녹색을 상징하는 모이까리는 알차고 야무진 페르소나입니다.",
      en: "‘Moi’ is a native Korean name inspired by the ideas of being small yet capable and of gathering together. The Dutch word ‘mooi’ also means beautiful. Representing green, Moi-kkari is a steady and capable persona.",
      ja: "「モイ」は、小さくても頼もしいという意味と「集まる」というイメージを込めた純韓国語です。オランダ語の「mooi」には「美しい」という意味もあります。緑を象徴するモイカリは、しっかり者のペルソナです。",
      zh: "“Moi”是取自“小巧却能干”以及“聚在一起”意象的韩国固有词。荷兰语“mooi”也有“美丽”的意思。象征绿色的莫伊卡里，是踏实又可靠的人格。"
    },

    short: {
      ko: "배려와 신뢰를 중요하게 여기며 맡은 일을 꾸준히 해내는 타입입니다.",
      en: "You value consideration and trust and steadily carry out what you are responsible for.",
      ja: "思いやりと信頼を大切にし、任されたことを着実にやり遂げるタイプです。",
      zh: "你重视体贴与信任，并能持续稳步地完成自己的责任。"
    },

    detail: {
      ko: "예의 바르고 신중하며 관계의 조화를 중요하게 생각합니다. 상대의 말을 잘 받아들이고 자신에게 주어진 역할을 꾸준히 해내며, 주변 사람들에게 편안함과 안정감을 줍니다. 한번 맺은 관계와 신뢰를 오래 지키는 타입입니다.",
      en: "You are polite, thoughtful, and value harmony in relationships. You listen well, steadily fulfill your responsibilities, and give people around you a sense of comfort and stability. Once you build trust with someone, you tend to maintain it for a long time.",
      ja: "礼儀正しく慎重で、人間関係の調和を大切にします。相手の話をよく受け止め、与えられた役割を着実に果たし、周囲に安心感を与えます。一度築いた関係や信頼を長く守るタイプです。",
      zh: "你有礼貌、谨慎，并重视关系中的和谐。你善于倾听，能够持续完成自己的职责，也会给周围的人带来舒适和稳定感。一旦建立关系和信任，就会长久地维护。"
    },

    keywords: {
      ko: "성실함 · 인내 · 배려 · 협력 · 안정 · 수용 · 신뢰",
      en: "Diligence · Patience · Consideration · Cooperation · Stability · Acceptance · Trust",
      ja: "誠実さ · 忍耐 · 配慮 · 協力 · 安定 · 受容 · 信頼",
      zh: "认真 · 耐心 · 体贴 · 合作 · 稳定 · 包容 · 信赖"
    },

    strength: {
      ko: "주변 사람을 세심하게 살피고 관계의 균형을 유지하면서 맡은 일을 꾸준히 책임집니다.",
      en: "You carefully look after those around you, maintain balance in relationships, and consistently take responsibility for your work.",
      ja: "周囲の人を細やかに気遣い、関係のバランスを保ちながら、任されたことに継続して責任を持ちます。",
      zh: "你会细心照顾周围的人，在维持关系平衡的同时，持续认真地承担自己的责任。"
    },

    caution: {
      ko: "갈등을 피하려다 자신의 감정이나 의견을 지나치게 참거나 상대에게 맞춰줄 수 있습니다.",
      en: "In trying to avoid conflict, you may suppress your own feelings or opinions and adjust too much to others.",
      ja: "対立を避けようとして、自分の感情や意見を我慢しすぎたり、相手に合わせすぎることがあります。",
      zh: "为了避免冲突，你可能过度压抑自己的情绪或意见，也可能过于迁就对方。"
    },

    complementPoint: {
      ko: "거절하기 · 자기표현 · 결단력 · 변화 시도",
      en: "Saying No · Self-Expression · Decisiveness · Trying Change",
      ja: "断る力 · 自己表現 · 決断力 · 変化への挑戦",
      zh: "学会拒绝 · 自我表达 · 决断力 · 尝试变化"
    },

    complementColor: {
      ko: "RED — 결단력과 자기표현\nORANGE — 새로운 변화와 활력",
      en: "RED — Decisiveness and self-expression\nORANGE — New experiences and energy",
      ja: "RED — 決断力と自己表現\nORANGE — 新しい変化と活力",
      zh: "RED — 决断力与自我表达\nORANGE — 新变化与活力"
    },

    career: {
      ko: "사람들과 협력하며 오래 신뢰를 쌓고 꾸준히 전문성을 키울 수 있는 환경에 잘 맞습니다.",
      en: "You are well suited to environments where you can cooperate with others, build long-term trust, and steadily develop expertise.",
      ja: "人と協力しながら長く信頼を築き、着実に専門性を高めていける環境に向いています。",
      zh: "你适合能够与人合作、长期建立信任，并持续积累专业能力的环境。"
    },

    jobs: {
      ko: "의사 · 과학자 · 교육자 · 문학가 · 여행가",
      en: "Doctor · Scientist · Educator · Writer · Traveler",
      ja: "医師 · 科学者 · 教育者 · 作家 · 旅行家",
      zh: "医生 · 科学家 · 教育者 · 作家 · 旅行家"
    },

    quote: {
      ko: "“나같이 성실한 사람 또 봤어?”",
      en: "“Have you ever met anyone as dependable as me?”",
      ja: "「私みたいに真面目な人、ほかに見たことある？」",
      zh: "“像我这么认真的人，你还见过几个？”"
    }

  },


  // ============================================================
  // BLUE · 두루까리
  // ============================================================
  duru: {

    latin: {
      ko: "DURU KKARI",
      en: "DURU KKARI",
      ja: "DURU KKARI",
      zh: "DURU KKARI"
    },

    type: {
      ko: "BLUE | 빈틈없이 준비하는 계획형",
      en: "BLUE | Thorough and Prepared Planner",
      ja: "BLUE | すきなく準備する計画型",
      zh: "BLUE | 周密准备的计划型"
    },

    meaning: {
      ko: "‘두루’는 들의 방언이자, 들처럼 넓고 탁 트인 마음을 가지라는 의미를 담은 ‘두루두루’에서 나온 순우리말입니다. 파랑을 상징하는 두루까리는 넓은 시야와 계획성을 가진 페르소나입니다.",
      en: "‘Duru’ is a native Korean word inspired by a dialect word for an open field and by the idea of having a broad, open heart. Representing blue, Duru-kkari is a persona with a wide perspective and strong planning skills.",
      ja: "「ドゥル」は「野原」を表す方言であり、野原のように広く開かれた心を持つという意味を込めた純韓国語です。青を象徴するドゥルカリは、広い視野と計画性を持つペルソナです。",
      zh: "“Duru”源自表示“原野”的方言，也蕴含像广阔田野一样拥有宽广心胸的含义。象征蓝色的杜鲁卡里，是拥有宽广视野和计划性的人格。"
    },

    short: {
      ko: "계획과 기준을 세우고 차근차근 실행하는 믿음직한 타입입니다.",
      en: "You set plans and standards and carry them out step by step.",
      ja: "計画と基準を立て、着実に一つずつ実行する信頼できるタイプです。",
      zh: "你会制定计划和标准，并一步一步稳妥执行。"
    },

    detail: {
      ko: "무엇이든 시작하기 전에 먼저 생각하고 계획을 세웁니다. 목표와 순서를 정해 차근차근 실행하며 책임감과 자기통제력이 강합니다. 감정이나 순간적인 분위기보다 객관적인 기준과 체계적인 판단을 통해 안정적인 결과를 만들어냅니다.",
      en: "Before starting anything, you tend to think and make a plan first. You set clear goals and steps, carry them out steadily, and show strong responsibility and self-control. Rather than being swayed by emotions or the mood of the moment, you rely on objective standards and systematic judgment to create stable results.",
      ja: "何かを始める前に、まず考えて計画を立てます。目標と手順を決めて着実に実行し、責任感と自己統制力にも優れています。感情やその場の雰囲気より、客観的な基準と体系的な判断によって安定した結果を生み出します。",
      zh: "在开始任何事情之前，你通常会先思考并制定计划。你会明确目标和步骤，再一步步执行，责任感和自我控制力都很强。比起受到情绪或当下氛围的影响，你更倾向于依据客观标准和系统性的判断，创造稳定的结果。"
    },

    keywords: {
      ko: "계획성 · 신뢰 · 성실함 · 체계성 · 자기통제 · 책임감",
      en: "Planning · Trust · Diligence · Organization · Self-Control · Responsibility",
      ja: "計画性 · 信頼 · 誠実さ · 体系性 · 自己統制 · 責任感",
      zh: "计划性 · 信赖 · 认真 · 体系性 · 自我控制 · 责任感"
    },

    strength: {
      ko: "예상되는 문제까지 미리 점검하며 목표와 과정을 계획적으로 관리하고 맡은 일을 믿음직스럽게 완수합니다.",
      en: "You check possible problems in advance, manage goals and processes systematically, and reliably complete what you are responsible for.",
      ja: "予想される問題まで事前に確認し、目標と過程を計画的に管理しながら、任された仕事を着実にやり遂げます。",
      zh: "你会提前检查可能发生的问题，有计划地管理目标和过程，并可靠地完成交付给你的工作。"
    },

    caution: {
      ko: "준비가 부족하다고 느끼면 시작이 늦어지거나 계획에서 벗어난 상황에 스트레스를 받을 수 있습니다.",
      en: "If you feel unprepared, you may delay getting started or feel stressed when things go off plan.",
      ja: "準備が足りないと感じると、始めるのが遅れたり、計画外の状況でストレスを感じることがあります。",
      zh: "如果觉得准备不足，你可能会迟迟无法开始，或者在偏离计划的情况下感到压力。"
    },

    complementPoint: {
      ko: "유연함 · 즉흥성 · 감정표현 · 과감한 실행",
      en: "Flexibility · Spontaneity · Emotional Expression · Bold Action",
      ja: "柔軟さ · 即興性 · 感情表現 · 大胆な実行",
      zh: "灵活性 · 即兴性 · 情感表达 · 大胆执行"
    },

    complementColor: {
      ko: "ORANGE — 즉흥성과 자유로운 표현\nRED — 과감한 실행과 추진력",
      en: "ORANGE — Spontaneity and free expression\nRED — Bold action and drive",
      ja: "ORANGE — 即興性と自由な表現\nRED — 大胆な実行力と推進力",
      zh: "ORANGE — 即兴性与自由表达\nRED — 果断执行力与推进力"
    },

    career: {
      ko: "목표와 과정, 기준이 분명하고 계획적으로 성과를 만들어가는 환경에서 강점을 발휘합니다.",
      en: "You thrive in environments where goals, processes, and standards are clear and results are built systematically.",
      ja: "目標・過程・基準が明確で、計画的に成果をつくっていく環境で強みを発揮します。",
      zh: "在目标、过程和标准都明确，并能有计划地创造成果的环境中，你最能发挥优势。"
    },

    jobs: {
      ko: "비즈니스맨 · 경영가 · 정치가 · 교육자 · 변호사",
      en: "Business Professional · Executive · Politician · Educator · Lawyer",
      ja: "ビジネスパーソン · 経営者 · 政治家 · 教育者 · 弁護士",
      zh: "商务人士 · 经营者 · 政治家 · 教育者 · 律师"
    },

    quote: {
      ko: "“나에게 계획은 필수코스!”",
      en: "“For me, a plan is essential!”",
      ja: "「私にとって計画は必須コース！」",
      zh: "“对我来说，计划是必修课！”"
    }

  },


  // ============================================================
  // PURPLE · 티나까리
  // ============================================================
  tina: {

    latin: {
      ko: "TINA KKARI",
      en: "TINA KKARI",
      ja: "TINA KKARI",
      zh: "TINA KKARI"
    },

    type: {
      ko: "PURPLE | 신비롭고 감수성 풍부한 예술형",
      en: "PURPLE | Mysterious and Sensitive Artistic Type",
      ja: "PURPLE | 神秘的で感性豊かなアーティストタイプ",
      zh: "PURPLE | 神秘而感性丰富的艺术型"
    },

    meaning: {
      ko: "‘티나’는 언제 어디서나 예쁘게 돋보이고 ‘티가 난다’는 의미를 담은 순우리말입니다. 보라색을 상징하는 티나까리는 자신만의 감각과 개성이 돋보이는 페르소나입니다.",
      en: "‘Tina’ is a native Korean name inspired by the idea of standing out beautifully wherever you are. Representing purple, Tina-kkari is a persona defined by unique sensitivity and individuality.",
      ja: "「ティナ」は、いつでもどこでも美しく目立ち、「際立つ」という意味を込めた純韓国語の名前です。紫を象徴するティナカリは、自分だけの感性と個性が輝くペルソナです。",
      zh: "“Tina”是蕴含“无论何时何地都美丽而出众”之意的韩国固有词名字。象征紫色的蒂娜卡里，是拥有独特感性与鲜明个性的人格角色。"
    },

    short: {
      ko: "섬세한 감각과 자신만의 시선으로 특별함을 발견하는 타입입니다.",
      en: "You discover something special through your sensitivity and unique perspective.",
      ja: "繊細な感性と独自の視点で特別な魅力を見つけるタイプです。",
      zh: "你以细腻的感受和独特视角发现特别之处。"
    },

    detail: {
      ko: "감각이 섬세하고 자신만의 시선과 세계가 뚜렷합니다. 직관력과 감수성이 뛰어나며 평범한 것에서도 특별함을 발견해 자신만의 방식으로 표현합니다. 보이는 모습보다 그 안에 담긴 의미와 분위기를 중요하게 생각합니다.",
      en: "You have a delicate sense of perception and a world of your own. With strong intuition and sensitivity, you notice something special even in ordinary things and express it in your own way. Meaning and atmosphere matter to you more than appearances alone.",
      ja: "繊細な感覚と、自分だけの視点や世界観を持つタイプです。直感力と感受性に優れ、何気ないものの中にも特別な魅力を見つけ、自分らしく表現します。見た目だけでなく、そこに込められた意味や雰囲気を大切にします。",
      zh: "你拥有细腻的感知力和鲜明的个人世界。直觉与感受力出色，能够从平凡事物中发现特别之处，并用自己的方式表达。比起表面，你更重视其中蕴含的意义与氛围。"
    },

    keywords: {
      ko: "감수성 · 직관력 · 예술성 · 개성 · 독창성 · 표현력",
      en: "Sensitivity · Intuition · Artistry · Individuality · Originality · Expression",
      ja: "感受性 · 直感力 · 芸術性 · 個性 · 独創性 · 表現力",
      zh: "感受力 · 直觉 · 艺术性 · 个性 · 独创性 · 表达力"
    },

    strength: {
      ko: "남들이 쉽게 지나치는 분위기와 감정을 섬세하게 느끼고 자신만의 독특한 시선으로 새롭게 표현합니다.",
      en: "You notice subtle moods and emotions that others may overlook and transform them into something new through your unique perspective.",
      ja: "他の人が見過ごしやすい雰囲気や感情を繊細に感じ取り、独自の視点で新しく表現する力があります。",
      zh: "你能细腻地捕捉别人容易忽略的氛围和情绪，并以独特的视角重新表达。"
    },

    caution: {
      ko: "감각이 예민한 만큼 감정기복이 커지거나 자신의 재능과 개성을 인정받지 못할 때 쉽게 상처받을 수 있습니다.",
      en: "Because you are highly sensitive, your emotions may fluctuate, and you can be easily hurt when your talent or individuality is not recognized.",
      ja: "感覚が繊細な分、感情の波が大きくなったり、自分の才能や個性を認めてもらえないと傷つきやすい面があります。",
      zh: "由于感受较为敏锐，你的情绪起伏可能较大；当自己的才华或个性得不到认可时，也容易受到伤害。"
    },

    complementPoint: {
      ko: "현실감 · 감정균형 · 자기신뢰 · 객관적인 시선",
      en: "Practicality · Emotional Balance · Self-Trust · Objectivity",
      ja: "現実感 · 感情のバランス · 自己信頼 · 客観性",
      zh: "现实感 · 情绪平衡 · 自我信任 · 客观视角"
    },

    complementColor: {
      ko: "BLUE — 현실적인 판단과 안정감\nBROWN — 현실감과 꾸준함",
      en: "BLUE — Practical judgment and stability\nBROWN — Groundedness and consistency",
      ja: "BLUE — 現実的な判断と安定感\nBROWN — 現実感と継続力",
      zh: "BLUE — 理性判断与稳定感\nBROWN — 踏实感与持续力"
    },

    career: {
      ko: "정해진 방식보다 자신의 감각과 세계를 자유롭게 표현하고 창작의 의미를 느낄 수 있는 일을 선호합니다.",
      en: "You prefer work that allows you to express your own sensitivity and worldview freely and find personal meaning in the creative process.",
      ja: "決められた方法に従う仕事よりも、自分の感性や世界観を自由に表現し、創作する意味を感じられる仕事を好みます。",
      zh: "比起按照既定方式工作，你更喜欢能够自由表达个人感受与世界观，并从创作过程中找到意义的工作。"
    },

    jobs: {
      ko: "예술가 · 디자이너 · 배우 · 음악가 · 컬러분석가 · 무용가",
      en: "Artist · Designer · Actor · Musician · Color Analyst · Dancer",
      ja: "芸術家 · デザイナー · 俳優 · 音楽家 · カラーアナリスト · ダンサー",
      zh: "艺术家 · 设计师 · 演员 · 音乐家 · 色彩分析师 · 舞者"
    },

    quote: {
      ko: "“나의 신비주의는 컨셉이 아니야.”",
      en: "“My mysterious side isn't an act.”",
      ja: "「このミステリアスさは、演出じゃないよ。」",
      zh: "“我的神秘感可不是刻意营造的。”"
    }

  },


  // ============================================================
  // PINK · 주나까리
  // ============================================================
  juna: {

    latin: {
      ko: "JUNA KKARI",
      en: "JUNA KKARI",
      ja: "JUNA KKARI",
      zh: "JUNA KKARI"
    },

    type: {
      ko: "PINK | 사랑과 기쁨을 나누는 공감형",
      en: "PINK | Loving and Empathetic Type",
      ja: "PINK | 愛と喜びを分かち合う共感型",
      zh: "PINK | 分享爱与快乐的共情型"
    },

    meaning: {
      ko: "‘주나’는 상대에게 사랑과 기쁨을 주라는 뜻을 가진 순우리말입니다. 분홍색을 상징하는 주나까리는 따뜻한 애정과 공감을 마음껏 나누는 페르소나입니다.",
      en: "‘Juna’ is a native Korean name carrying the meaning of giving love and joy to others. Representing pink, Juna-kkari is a persona who freely shares warmth and empathy.",
      ja: "「ジュナ」は、相手に愛と喜びを与えるという意味を持つ純韓国語です。ピンクを象徴するジュナカリは、温かな愛情と共感を惜しみなく分かち合うペルソナです。",
      zh: "“Juna”是带有“给予对方爱与快乐”含义的韩国固有词。象征粉色的珠娜卡里，是尽情分享温暖爱意与共情的人格。"
    },

    short: {
      ko: "사람의 마음을 세심하게 살피고 따뜻한 애정을 나누는 타입입니다.",
      en: "You carefully notice people's feelings and openly share warmth and affection.",
      ja: "人の気持ちを細やかに感じ取り、温かな愛情を分かち合うタイプです。",
      zh: "你会细心关注他人的感受，并分享温暖的爱意。"
    },

    detail: {
      ko: "사람을 아끼고 애정을 표현하는 것을 중요하게 생각합니다. 상대의 마음을 세심하게 살피며 따뜻한 말과 행동으로 위로하고 응원합니다. 가까운 사람과 감정을 나누고 서로에게 특별한 존재가 되는 관계에서 큰 행복을 느낍니다.",
      en: "You value caring for people and expressing affection. You pay close attention to others' feelings and offer comfort and encouragement through warm words and actions. You find great happiness in close relationships where feelings are shared and both people feel special to each other.",
      ja: "人を大切にし、愛情を表現することを重視します。相手の気持ちを細やかに感じ取り、温かい言葉や行動で慰め、応援します。親しい人と感情を分かち合い、お互いに特別な存在になれる関係に大きな幸せを感じます。",
      zh: "你重视珍惜他人并表达爱意。你会细心感受对方的心情，并用温暖的话语和行动给予安慰与鼓励。与亲近的人分享感受、成为彼此特别的存在，会让你感到很幸福。"
    },

    keywords: {
      ko: "사랑 · 공감 · 배려 · 친밀감 · 애정표현 · 섬세함",
      en: "Love · Empathy · Consideration · Intimacy · Affection · Sensitivity",
      ja: "愛 · 共感 · 配慮 · 親密感 · 愛情表現 · 繊細さ",
      zh: "爱 · 共情 · 体贴 · 亲密感 · 爱意表达 · 细腻"
    },

    strength: {
      ko: "사람의 감정을 잘 알아차리고 따뜻하게 표현하며 주변 사람에게 위로와 정서적인 안정감을 줍니다.",
      en: "You understand people's emotions well and express warmth, giving those around you comfort and emotional stability.",
      ja: "人の感情によく気づき、温かく表現することで、周囲の人に安心感と心の安定を与えます。",
      zh: "你善于察觉他人的情绪，并温暖地表达出来，给周围的人带来安慰与情绪上的稳定感。"
    },

    caution: {
      ko: "상대의 반응에 민감해지거나 자신이 준 만큼의 사랑을 기대할 수 있습니다. 관계에서 자신을 지나치게 희생하지 않도록 주의하세요.",
      en: "You may become sensitive to others' reactions or expect the same amount of love that you give. Be careful not to sacrifice yourself too much in relationships.",
      ja: "相手の反応に敏感になったり、自分が与えた分だけ愛情を期待することがあります。人間関係で自分を犠牲にしすぎないよう注意しましょう。",
      zh: "你可能会对对方的反应比较敏感，也可能期待得到与自己付出相同程度的爱。请注意不要在关系中过度牺牲自己。"
    },

    complementPoint: {
      ko: "자기애 · 경계 세우기 · 감정 독립 · 현실적인 판단",
      en: "Self-Love · Boundaries · Emotional Independence · Practical Judgment",
      ja: "自己愛 · 境界線を持つ · 感情的自立 · 現実的な判断",
      zh: "自爱 · 建立界限 · 情绪独立 · 现实判断"
    },

    complementColor: {
      ko: "BLUE — 이성적인 판단과 거리 조절\nYELLOW — 자신감과 적극적인 자기표현",
      en: "BLUE — Rational judgment and healthy distance\nYELLOW — Confidence and active self-expression",
      ja: "BLUE — 冷静な判断と適度な距離感\nYELLOW — 自信と積極的な自己表現",
      zh: "BLUE — 理性判断与适当距离\nYELLOW — 自信与积极的自我表达"
    },

    career: {
      ko: "사람에게 직접 도움을 주고 긍정적인 반응을 느낄 수 있는 일에서 큰 보람을 느낍니다.",
      en: "You find fulfillment in work where you can directly help people and experience positive responses.",
      ja: "人に直接役立ち、相手から前向きな反応を感じられる仕事に大きなやりがいを感じます。",
      zh: "在能够直接帮助他人，并感受到积极反馈的工作中，你会获得很大的成就感。"
    },

    jobs: {
      ko: "요리사 · 미용사 · 교육자 · 작가 · 무용가",
      en: "Chef · Beauty Professional · Educator · Writer · Dancer",
      ja: "料理人 · 美容師 · 教育者 · 作家 · ダンサー",
      zh: "厨师 · 美容师 · 教育者 · 作家 · 舞者"
    },

    quote: {
      ko: "“내가 사랑을 줄 테니, 너도 나에게 사랑을 줘.”",
      en: "“I'll give you love, so give me some love too.”",
      ja: "「私が愛をあげるから、あなたも私に愛をちょうだい。」",
      zh: "“我会给你爱，所以你也要给我一点爱。”"
    }

  },


  // ============================================================
  // BROWN · 보나까리
  // ============================================================
  bona: {

    latin: {
      ko: "BONA KKARI",
      en: "BONA KKARI",
      ja: "BONA KKARI",
      zh: "BONA KKARI"
    },

    type: {
      ko: "BROWN | 묵묵하고 든든한 책임형",
      en: "BROWN | Quiet and Dependable Responsible Type",
      ja: "BROWN | 黙々と支える頼れる責任型",
      zh: "BROWN | 沉稳可靠的责任型"
    },

    meaning: {
      ko: "‘보나’는 ‘보람이 나타남’, 또는 ‘어딜 보나 좋은 사람’이라는 의미를 담아 쓰이는 순우리말 이름입니다. 브라운을 상징하는 보나까리는 믿음과 책임을 중요하게 여기는 페르소나입니다.",
      en: "‘Bona’ is a native Korean name associated with the ideas of seeing meaningful results and being a good person wherever you look. Representing brown, Bona-kkari is a persona who values trust and responsibility.",
      ja: "「ボナ」は、「やりがいが現れる」または「どこから見ても良い人」という意味を込めて使われる純韓国語の名前です。ブラウンを象徴するボナカリは、信頼と責任を大切にするペルソナです。",
      zh: "“Bona”是带有“成果显现”以及“怎么看都是好人”美好含义的韩国固有词名字。象征棕色的博纳卡里，是重视信任与责任的人格。"
    },

    short: {
      ko: "현실적인 판단과 책임감으로 끝까지 자리를 지키는 든든한 타입입니다.",
      en: "You are dependable, practical, and stay responsible until the end.",
      ja: "現実的な判断力と責任感で、最後までしっかり役割を果たすタイプです。",
      zh: "你拥有现实的判断力和责任感，是能够坚持到最后的可靠类型。"
    },

    detail: {
      ko: "화려하게 자신을 드러내기보다 믿음과 책임을 중요하게 생각합니다. 현실적이고 신중하며 한번 맡은 일이나 사람은 쉽게 포기하지 않습니다. 빠른 성과보다 오래 쌓아온 경험과 안정적인 결과를 더 중요하게 생각합니다.",
      en: "Rather than drawing attention to yourself, you value trust and responsibility. You are practical and cautious, and once you commit to a task or a person, you do not give up easily. You value accumulated experience and stable results more than quick achievements.",
      ja: "華やかに自分をアピールするより、信頼と責任を大切にします。現実的で慎重であり、一度任された仕事や人を簡単には見放しません。短期的な成果より、長く積み重ねた経験と安定した結果を重視します。",
      zh: "比起华丽地表现自己，你更重视信任与责任。你现实而谨慎，一旦负责某件事或某个人，就不会轻易放弃。比起快速取得成果，你更看重长期积累的经验和稳定的结果。"
    },

    keywords: {
      ko: "책임감 · 현실감 · 안정감 · 신중함 · 지속성 · 신뢰",
      en: "Responsibility · Practicality · Stability · Caution · Consistency · Trust",
      ja: "責任感 · 現実感 · 安定感 · 慎重さ · 継続性 · 信頼",
      zh: "责任感 · 现实感 · 稳定感 · 谨慎 · 持续性 · 信赖"
    },

    strength: {
      ko: "현실적인 판단과 끈기로 맡은 일을 끝까지 책임지고 위기에서도 쉽게 흔들리지 않는 든든함이 있습니다.",
      en: "Your practical judgment and persistence help you see responsibilities through to the end and remain dependable even in difficult situations.",
      ja: "現実的な判断力と粘り強さで任されたことを最後まで責任を持ってやり遂げ、困難な状況でも簡単には揺らぎません。",
      zh: "你凭借现实的判断力和坚持，能够把承担的事情负责到底，即使在危机中也不容易动摇。"
    },

    caution: {
      ko: "안정과 익숙함을 중시해 변화에 적응하는 속도가 느리거나 자신의 능력과 의견을 충분히 표현하지 못할 수 있습니다.",
      en: "Because you value stability and familiarity, you may adapt slowly to change or hesitate to fully express your abilities and opinions.",
      ja: "安定や慣れを重視するため、変化への適応が遅くなったり、自分の能力や意見を十分に表現できないことがあります。",
      zh: "由于重视稳定与熟悉感，你适应变化的速度可能较慢，也可能无法充分表达自己的能力和意见。"
    },

    complementPoint: {
      ko: "자기표현 · 변화 시도 · 과감함 · 새로운 경험",
      en: "Self-Expression · Trying Change · Boldness · New Experiences",
      ja: "自己表現 · 変化への挑戦 · 大胆さ · 新しい経験",
      zh: "自我表达 · 尝试变化 · 果断 · 新体验"
    },

    complementColor: {
      ko: "RED — 추진력과 과감한 행동\nORANGE — 새로운 변화와 활력",
      en: "RED — Drive and bold action\nORANGE — New experiences and energy",
      ja: "RED — 推進力と大胆な行動\nORANGE — 新しい変化と活力",
      zh: "RED — 推进力与果断行动\nORANGE — 新变化与活力"
    },

    career: {
      ko: "짧은 성과보다 오랫동안 경험과 노하우를 축적하고 안정적인 결과를 만들어가는 환경에 강합니다.",
      en: "You thrive in environments where experience and know-how can be built over time and turned into stable results.",
      ja: "短期的な成果より、長い時間をかけて経験やノウハウを蓄積し、安定した成果を生み出せる環境に強みがあります。",
      zh: "比起短期成果，你更适合能够长期积累经验和诀窍，并创造稳定结果的环境。"
    },

    jobs: {
      ko: "재무·회계 · 행정 · 안전관리 · 운영관리 · 기술직 · 자산관리",
      en: "Finance & Accounting · Administration · Safety Management · Operations · Technical Work · Asset Management",
      ja: "財務・会計 · 行政 · 安全管理 · 運営管理 · 技術職 · 資産管理",
      zh: "财务会计 · 行政 · 安全管理 · 运营管理 · 技术岗位 · 资产管理"
    },

    quote: {
      ko: "“맡겨만 줘. 내가 책임질게.”",
      en: "“Leave it to me. I'll take responsibility.”",
      ja: "「任せて。私が責任を持つよ。」",
      zh: "“交给我吧，我会负责到底。”"
    }

  },


  // ============================================================
  // MODERN · 수리까리
  // ============================================================
  suri: {

    latin: {
      ko: "SURI KKARI",
      en: "SURI KKARI",
      ja: "SURI KKARI",
      zh: "SURI KKARI"
    },

    type: {
      ko: "MODERN | 완벽하고 깔끔한 모던형",
      en: "MODERN | Polished Perfectionist Type",
      ja: "MODERN | 完璧でスマートなモダン型",
      zh: "MODERN | 完美利落的现代型"
    },

    meaning: {
      ko: "‘수리’는 하는 일에서 우두머리, 꼭대기가 되라는 뜻을 담아 ‘독수리’와 ‘정수리’에서 따온 이름입니다. MODERN을 상징하는 수리까리는 높은 기준과 완성도를 추구하는 페르소나입니다.",
      en: "‘Suri’ is a name inspired by Korean words such as ‘eagle’ and ‘the top of the head,’ carrying the meaning of reaching the top in what you do. Representing MODERN, Suri-kkari is a persona who pursues high standards and completeness.",
      ja: "「スリ」は、することの頂点やリーダーになってほしいという意味を込め、「ワシ（독수리）」や「頭頂（정수리）」から取った名前です。MODERNを象徴するスリカリは、高い基準と完成度を追求するペルソナです。",
      zh: "“Suri”取自韩语中的“鹰”和“头顶”等词语，包含着在所做之事中成为顶尖人物的意义。象征MODERN的苏里卡里，是追求高标准与高完成度的人格。"
    },

    short: {
      ko: "높은 기준과 자기관리로 결과의 완성도를 끌어올리는 타입입니다.",
      en: "You raise the quality of your results through high standards and strong self-management.",
      ja: "高い基準と自己管理によって、結果の完成度を高めるタイプです。",
      zh: "你凭借高标准和出色的自我管理不断提升结果的完成度。"
    },

    detail: {
      ko: "자신만의 기준이 분명하고 무엇이든 제대로 완성하고 싶어 합니다. 자기통제력이 강하고 독립적이며, 어설프게 끝내기보다 시간이 걸려도 자신이 만족할 수준까지 완성합니다. 깔끔하고 정돈된 방식으로 자신의 능력을 보여주는 타입입니다.",
      en: "You have clear personal standards and want to do things properly. You are independent and have strong self-control, preferring to take the time needed to reach a level you are satisfied with rather than finish something carelessly. You like to demonstrate your ability through polished and organized results.",
      ja: "自分なりの基準がはっきりしていて、何事もきちんと完成させたいタイプです。自己統制力が強く独立心があり、中途半端に終わらせるより、時間がかかっても自分が納得できるレベルまで仕上げます。整ったスマートな方法で自分の能力を示すことを好みます。",
      zh: "你有明确的个人标准，希望任何事情都能做到位。你自我控制力强，也比较独立；比起草率结束，即使花更多时间，也希望做到自己满意的程度。你喜欢用整洁、有条理且高完成度的方式展示自己的能力。"
    },

    keywords: {
      ko: "완벽함 · 절제 · 세련미 · 자기통제 · 독립성 · 높은 기준",
      en: "Perfection · Restraint · Sophistication · Self-Control · Independence · High Standards",
      ja: "完璧さ · 節制 · 洗練 · 自己統制 · 独立性 · 高い基準",
      zh: "完美 · 克制 · 精致感 · 自我控制 · 独立性 · 高标准"
    },

    strength: {
      ko: "기준이 명확하고 자기관리가 뛰어나며 맡은 일을 깔끔하고 높은 완성도로 마무리합니다.",
      en: "You have clear standards, manage yourself well, and complete your work with polish and a high level of quality.",
      ja: "基準が明確で自己管理能力に優れ、任されたことをきれいに高い完成度で仕上げます。",
      zh: "你标准明确、自我管理能力出色，能够把负责的事情以整洁且高完成度的方式完成。"
    },

    caution: {
      ko: "완벽함을 추구하며 자신과 타인에게 지나치게 높은 기준을 요구하거나 약한 모습과 감정을 드러내기 어려울 수 있습니다.",
      en: "In pursuing perfection, you may demand overly high standards from yourself and others or find it difficult to show vulnerability and emotion.",
      ja: "完璧さを求めるあまり、自分や他人に高すぎる基準を求めたり、弱さや感情を見せることが難しくなる場合があります。",
      zh: "在追求完美的过程中，你可能对自己和他人要求过高，也可能不容易表现脆弱的一面或真实情绪。"
    },

    complementPoint: {
      ko: "유연함 · 감정표현 · 타인의 시선 내려놓기 · 과정 즐기기",
      en: "Flexibility · Emotional Expression · Letting Go of Others' Opinions · Enjoying the Process",
      ja: "柔軟さ · 感情表現 · 他人の視線を手放す · 過程を楽しむ",
      zh: "灵活性 · 情感表达 · 放下他人的目光 · 享受过程"
    },

    complementColor: {
      ko: "YELLOW — 자유로운 자기표현\nORANGE — 자연스러운 소통과 즐거움",
      en: "YELLOW — Free self-expression\nORANGE — Natural communication and enjoyment",
      ja: "YELLOW — 自由な自己表現\nORANGE — 自然なコミュニケーションと楽しさ",
      zh: "YELLOW — 自由的自我表达\nORANGE — 自然沟通与快乐"
    },

    career: {
      ko: "자신의 능력과 전문성을 인정받고 높은 수준의 결과물을 만들어낼 수 있는 환경에서 강합니다.",
      en: "You thrive in environments where your ability and expertise are recognized and you can produce high-quality results.",
      ja: "自分の能力や専門性が認められ、高いレベルの成果物を生み出せる環境で強みを発揮します。",
      zh: "在能够认可你的能力与专业性，并创造高水准成果的环境中，你最能发挥优势。"
    },

    jobs: {
      ko: "사업가 · 경영자 · 학자 · 파일럿 · 정치가 · 작가 · 디자이너",
      en: "Entrepreneur · Executive · Scholar · Pilot · Politician · Writer · Designer",
      ja: "事業家 · 経営者 · 学者 · パイロット · 政治家 · 作家 · デザイナー",
      zh: "创业者 · 经营者 · 学者 · 飞行员 · 政治家 · 作家 · 设计师"
    },

    quote: {
      ko: "“무엇이든 확실한 게 최고야.”",
      en: "“Whatever I do, I want it done right.”",
      ja: "「何事も、確実なのが一番。」",
      zh: "“不管做什么，明确做到位才最好。”"
    }

  }

};

// ==============================================================
// 설문 설정
// ==============================================================

const QUESTIONS_PER_PAGE = 3;

/*
 * 결과 계산에 사용하는 캐릭터 키
 *
 * mari   = RED
 * lala   = ORANGE
 * mohae  = YELLOW
 * moi    = GREEN
 * duru   = BLUE
 * tina   = PURPLE
 * juna   = PINK
 * bona   = BROWN
 * suri   = MODERN
 */
const COLOR_KEYS = [
  "mari",
  "lala",
  "mohae",
  "moi",
  "duru",
  "tina",
  "juna",
  "bona",
  "suri"
];

/*
 * reverse: false
 * 예를 선택하면 해당 컬러에 1점
 *
 * reverse: true
 * 아니오를 선택하면 해당 컬러에 1점
 */
const QUESTION_BANK = [

  // RED · 마리까리
  {
    id: "red-01",
    color: "mari",
    reverse: false,
    text: { ko: "새로운 일이 생기면 거침없이 시작하는 편이다." }
  },
  {
    id: "red-02",
    color: "mari",
    reverse: false,
    text: { ko: "앞에 나서는 일에 주저하지 않는다." }
  },
  {
    id: "red-03",
    color: "mari",
    reverse: false,
    text: { ko: "목표가 정해지면 경쟁이나 장애물이 있어도 밀고 나간다." }
  },
  {
    id: "red-04",
    color: "mari",
    reverse: false,
    text: { ko: "시작할 때의 열정에 비해 마무리가 부족한 편이다." }
  },

  // ORANGE · 라라까리
  {
    id: "orange-01",
    color: "lala",
    reverse: false,
    text: { ko: "처음 본 사람과도 비교적 쉽게 대화를 시작한다." }
  },
  {
    id: "orange-02",
    color: "lala",
    reverse: false,
    text: { ko: "혼자 있을 때보다 사람들과 함께할 때 에너지가 생긴다." }
  },
  {
    id: "orange-03",
    color: "lala",
    reverse: false,
    text: { ko: "재미있는 경험이나 새로운 자극이 있는 생활을 좋아한다." }
  },
  {
    id: "orange-04",
    color: "lala",
    reverse: false,
    text: { ko: "주변 분위기가 어색하면 내가 먼저 분위기를 풀려고 한다." }
  },

  // YELLOW · 모해까리
  {
    id: "yellow-01",
    color: "mohae",
    reverse: false,
    text: { ko: "나는 채찍보다 당근이 더 효과적인 편이다." }
  },
  {
    id: "yellow-02",
    color: "mohae",
    reverse: false,
    text: { ko: "익숙한 방식보다 새로운 방법을 시도하는 것이 재미있다." }
  },
  {
    id: "yellow-03",
    color: "mohae",
    reverse: false,
    text: { ko: "어렵거나 답답한 상황에서도 긍정적인 가능성을 찾으려 한다." }
  },
  {
    id: "yellow-04",
    color: "mohae",
    reverse: false,
    text: { ko: "반복적이고 변화가 없는 일은 쉽게 지루하게 느껴진다." }
  },

  // PINK · 주나까리
  {
    id: "pink-01",
    color: "juna",
    reverse: false,
    text: { ko: "가까운 사람이 힘들어하면 내 일처럼 마음이 쓰인다." }
  },
  {
    id: "pink-02",
    color: "juna",
    reverse: false,
    text: { ko: "좋아하는 사람에게 애정과 관심을 자주 표현하는 편이다." }
  },
  {
    id: "pink-03",
    color: "juna",
    reverse: false,
    text: { ko: "사랑을 주는 것만큼 사랑받고 있다는 느낌도 중요하게 생각한다." }
  },
  {
    id: "pink-04",
    color: "juna",
    reverse: false,
    text: { ko: "아기자기한 물건이나 부드러운 음악, 따뜻한 분위기에 마음이 끌리는 편이다." }
  },

  // GREEN · 모이까리
  {
    id: "green-01",
    color: "moi",
    reverse: false,
    text: { ko: "의견이 부딪칠 때 내 주장을 밀기보다 서로 받아들일 수 있는 중간점을 찾으려 한다." }
  },
  {
    id: "green-02",
    color: "moi",
    reverse: false,
    text: { ko: "관계가 불편해질까 봐 싫은 소리를 하거나 거절하는 것을 어려워하는 편이다." }
  },
  {
    id: "green-03",
    color: "moi",
    reverse: false,
    text: { ko: "의견이 다른 사람의 말도 충분히 듣고 이해하려고 한다." }
  },
  {
    id: "green-04",
    color: "moi",
    reverse: false,
    text: { ko: "불편하거나 답답한 상황에서도 쉽게 감정을 드러내기보다 참고 기다리는 편이다." }
  },

  // BLUE · 두루까리
  {
    id: "blue-01",
    color: "duru",
    reverse: false,
    text: { ko: "시작한 일이 마무리되지 않으면 계속 마음에 남는다." }
  },
  {
    id: "blue-02",
    color: "duru",
    reverse: false,
    text: { ko: "중요한 일을 시작하기 전에 순서와 계획을 세우는 편이다." }
  },
  {
    id: "blue-03",
    color: "duru",
    reverse: false,
    text: { ko: "감정적으로 흔들리는 상황에서도 사실과 근거를 확인하려 한다." }
  },
  {
    id: "blue-04",
    color: "duru",
    reverse: true,
    text: { ko: "계획이 틀어지면 그 일 자체를 포기하고 싶어진다." }
  },

  // PURPLE · 티나까리
  {
    id: "purple-01",
    color: "tina",
    reverse: false,
    text: { ko: "다른 사람과 비슷하기보다 나만의 방식과 개성을 갖고 싶다." }
  },
  {
    id: "purple-02",
    color: "tina",
    reverse: false,
    text: { ko: "음악, 미술, 영화 등 예술적 경험이 내 감정에 큰 영향을 준다." }
  },
  {
    id: "purple-03",
    color: "tina",
    reverse: false,
    text: { ko: "논리적으로 설명하기 어렵더라도 직감이 맞을 때가 많다고 느낀다." }
  },
  {
    id: "purple-04",
    color: "tina",
    reverse: false,
    text: { ko: "감정 기복이 남들보다 자주 있는 편이다." }
  },

  // BROWN · 보나까리
  {
    id: "brown-01",
    color: "bona",
    reverse: false,
    text: { ko: "새로운 변화를 받아들이기까지 충분한 시간이 필요한 편이다." }
  },
  {
    id: "brown-02",
    color: "bona",
    reverse: false,
    text: { ko: "새롭고 화려한 것보다 익숙하고 실용적인 것을 오래 사용하는 편이 좋다." }
  },
  {
    id: "brown-03",
    color: "bona",
    reverse: false,
    text: { ko: "눈에 띄는 성과보다 꾸준히 쌓아가는 과정이 중요하다고 생각한다." }
  },
  {
    id: "brown-04",
    color: "bona",
    reverse: true,
    text: { ko: "오래 유지하는 것보다 계속 새로운 것으로 바꾸는 것이 좋다." }
  },

  // MODERN · 수리까리
  {
    id: "modern-01",
    color: "suri",
    reverse: false,
    text: { ko: "일을 할 때 기준과 원칙이 명확해야 마음이 편하다." }
  },
  {
    id: "modern-02",
    color: "suri",
    reverse: false,
    text: { ko: "여러 가능성을 열어두기보다 분명한 결론을 내리는 것이 좋다." }
  },
  {
    id: "modern-03",
    color: "suri",
    reverse: false,
    text: { ko: "다른 사람에게 빈틈없이 보이기 위해 스스로를 엄격하게 관리할 때가 있다." }
  },
  {
    id: "modern-04",
    color: "suri",
    reverse: false,
    text: { ko: "결과가 내 기준에 미치지 못하면 이미 잘한 부분도 만족하기 어렵다." }
  }

];

// ==============================================================
// 설문 질문 다국어 번역
// EN / JA / ZH
// ==============================================================

const QUESTION_TRANSLATIONS = {

  // ============================================================
  // RED · 마리까리
  // ============================================================

  "red-01": {
    en: "When something new comes up, I tend to start without hesitation.",
    ja: "新しいことが始まると、ためらわずに取りかかるほうだ。",
    zh: "遇到新的事情时，我往往会毫不犹豫地开始。"
  },

  "red-02": {
    en: "I do not hesitate to step forward and take the lead.",
    ja: "人前に出ることをためらわない。",
    zh: "需要站出来时，我不会犹豫。"
  },

  "red-03": {
    en: "Once I set a goal, I keep pushing forward even when there is competition or obstacles.",
    ja: "目標が決まると、競争や障害があっても前に進み続ける。",
    zh: "一旦确定目标，即使有竞争或障碍，我也会坚持推进。"
  },

  "red-04": {
    en: "Compared with my enthusiasm at the beginning, I tend to be less strong at finishing things.",
    ja: "始めたときの情熱に比べて、最後までやり切るのはやや苦手なほうだ。",
    zh: "相比开始时的热情，我在收尾方面往往稍显不足。"
  },


  // ============================================================
  // ORANGE · 라라까리
  // ============================================================

  "orange-01": {
    en: "I can start a conversation fairly easily even with someone I have just met.",
    ja: "初対面の人とも比較的気軽に会話を始められる。",
    zh: "即使是第一次见面的人，我也比较容易开始交谈。"
  },

  "orange-02": {
    en: "I feel more energized when I am with people than when I am alone.",
    ja: "一人でいるときより、人と一緒にいるときのほうが元気になる。",
    zh: "比起独处，和大家在一起时我更有活力。"
  },

  "orange-03": {
    en: "I enjoy a life filled with fun experiences and new stimulation.",
    ja: "楽しい経験や新しい刺激のある生活が好きだ。",
    zh: "我喜欢充满有趣体验和新鲜刺激的生活。"
  },

  "orange-04": {
    en: "When the atmosphere feels awkward, I tend to be the first to lighten the mood.",
    ja: "場の空気が気まずいと、自分から雰囲気を和らげようとする。",
    zh: "当周围气氛尴尬时，我通常会主动缓和气氛。"
  },


  // ============================================================
  // YELLOW · 모해까리
  // ============================================================

  "yellow-01": {
    en: "Encouragement tends to motivate me more effectively than pressure or criticism.",
    ja: "厳しくされるより、褒められたり励まされたりするほうが力を発揮できる。",
    zh: "比起批评和施压，鼓励和肯定对我更有效。"
  },

  "yellow-02": {
    en: "I enjoy trying new approaches more than sticking to familiar ones.",
    ja: "慣れた方法より、新しいやり方を試すほうが楽しい。",
    zh: "比起熟悉的方法，我更喜欢尝试新的方式。"
  },

  "yellow-03": {
    en: "Even in difficult or frustrating situations, I try to find positive possibilities.",
    ja: "難しい状況や行き詰まったときでも、前向きな可能性を探そうとする。",
    zh: "即使在困难或令人烦闷的情况下，我也会努力寻找积极的可能性。"
  },

  "yellow-04": {
    en: "I get bored easily with repetitive things that have little change.",
    ja: "変化のない単調なことが続くと、飽きやすい。",
    zh: "对于重复且缺乏变化的事情，我很容易感到无聊。"
  },


  // ============================================================
  // PINK · 주나까리
  // ============================================================

  "pink-01": {
    en: "When someone close to me is having a hard time, I worry about them as if it were my own problem.",
    ja: "親しい人がつらそうにしていると、自分のことのように心配になる。",
    zh: "亲近的人遇到困难时，我会像自己的事情一样挂心。"
  },

  "pink-02": {
    en: "I often express affection and interest toward people I care about.",
    ja: "好きな人には、愛情や関心をよく表現するほうだ。",
    zh: "对于喜欢和在乎的人，我经常表达爱意和关心。"
  },

  "pink-03": {
    en: "Feeling loved is just as important to me as giving love.",
    ja: "愛情を与えることと同じくらい、自分も愛されていると感じることを大切にしている。",
    zh: "对我来说，感受到被爱与给予爱同样重要。"
  },

  "pink-04": {
    en: "I am drawn to cute little objects, soft music, and warm atmospheres.",
    ja: "かわいらしい小物や柔らかな音楽、温かい雰囲気に心を惹かれるほうだ。",
    zh: "我容易被精致可爱的物品、柔和的音乐和温暖的氛围吸引。"
  },


  // ============================================================
  // GREEN · 모이까리
  // ============================================================

  "green-01": {
    en: "When opinions clash, I try to find a middle ground that both sides can accept rather than insist on my own view.",
    ja: "意見がぶつかったときは、自分の主張を押し通すより、お互いに受け入れられる妥協点を探そうとする。",
    zh: "意见发生冲突时，比起坚持自己的主张，我会努力寻找双方都能接受的折中点。"
  },

  "green-02": {
    en: "I find it difficult to say something unpleasant or refuse a request because I worry the relationship may become uncomfortable.",
    ja: "関係が気まずくなるのが心配で、嫌なことを言ったり断ったりするのが苦手なほうだ。",
    zh: "因为担心关系变得尴尬，我比较难说出让人不舒服的话或拒绝别人。"
  },

  "green-03": {
    en: "I try to listen to and understand people even when their opinions differ from mine.",
    ja: "自分と意見が違う人の話も、十分に聞いて理解しようとする。",
    zh: "即使对方的意见与我不同，我也会认真倾听并尝试理解。"
  },

  "green-04": {
    en: "Even in uncomfortable or frustrating situations, I tend to hold back my emotions and wait patiently.",
    ja: "不快だったりもどかしい状況でも、すぐに感情を表すより我慢して待つほうだ。",
    zh: "即使处在不舒服或令人烦闷的情况下，我也更倾向于忍耐并等待。"
  },


  // ============================================================
  // BLUE · 두루까리
  // ============================================================

  "blue-01": {
    en: "If something I started is left unfinished, it continues to bother me.",
    ja: "始めたことが終わっていないと、ずっと気になる。",
    zh: "开始的事情如果没有完成，我会一直放在心上。"
  },

  "blue-02": {
    en: "Before starting something important, I tend to plan the order and steps.",
    ja: "大切なことを始める前に、順序や計画を立てるほうだ。",
    zh: "开始重要的事情之前，我通常会先安排顺序和计划。"
  },

  "blue-03": {
    en: "Even when emotions are running high, I try to check the facts and evidence.",
    ja: "感情が揺れる状況でも、事実や根拠を確認しようとする。",
    zh: "即使情绪受到影响，我也会努力确认事实和依据。"
  },

  "blue-04": {
    en: "When a plan goes off track, I sometimes feel like giving up on the whole thing.",
    ja: "計画が崩れると、そのこと自体を諦めたくなる。",
    zh: "当计划被打乱时，我会想干脆放弃整件事情。"
  },


  // ============================================================
  // PURPLE · 티나까리
  // ============================================================

  "purple-01": {
    en: "Rather than being like everyone else, I want to have my own style and individuality.",
    ja: "人と同じであるより、自分らしいやり方や個性を持ちたい。",
    zh: "比起和别人一样，我更希望拥有自己的方式和个性。"
  },

  "purple-02": {
    en: "Artistic experiences such as music, art, and films have a strong influence on my emotions.",
    ja: "音楽、美術、映画などの芸術的な体験は、自分の感情に大きく影響する。",
    zh: "音乐、美术、电影等艺术体验会对我的情绪产生很大影响。"
  },

  "purple-03": {
    en: "Even when I cannot explain it logically, I often feel that my intuition is right.",
    ja: "論理的に説明できなくても、直感が当たっていると感じることが多い。",
    zh: "即使无法用逻辑解释，我也常常觉得自己的直觉是对的。"
  },

  "purple-04": {
    en: "I tend to experience emotional ups and downs more often than other people.",
    ja: "他の人に比べて、感情の浮き沈みが多いほうだ。",
    zh: "与其他人相比，我的情绪起伏比较频繁。"
  },


  // ============================================================
  // BROWN · 보나까리
  // ============================================================

  "brown-01": {
    en: "I need enough time before I can fully accept a new change.",
    ja: "新しい変化を受け入れるまでには、十分な時間が必要なほうだ。",
    zh: "在接受新的变化之前，我通常需要充分的时间。"
  },

  "brown-02": {
    en: "I prefer using familiar and practical things for a long time rather than choosing something new and flashy.",
    ja: "新しくて華やかなものより、使い慣れた実用的なものを長く使うほうが好きだ。",
    zh: "比起新颖华丽的东西，我更喜欢长久使用熟悉而实用的东西。"
  },

  "brown-03": {
    en: "I value steadily building things over time more than achieving highly visible results.",
    ja: "目立つ成果より、着実に積み重ねていく過程を大切にする。",
    zh: "比起显眼的成果，我更重视长期稳定积累的过程。"
  },

  "brown-04": {
    en: "I prefer constantly changing to something new rather than keeping things the same for a long time.",
    ja: "同じものを長く続けるより、常に新しいものに変えていくほうが好きだ。",
    zh: "比起长期维持同样的状态，我更喜欢不断换成新的事物。"
  },


  // ============================================================
  // MODERN · 수리까리
  // ============================================================

  "modern-01": {
    en: "I feel more comfortable when standards and principles are clearly defined.",
    ja: "物事をするとき、基準や原則がはっきりしていると安心する。",
    zh: "做事情时，标准和原则越明确，我越觉得安心。"
  },

  "modern-02": {
    en: "I prefer reaching a clear conclusion rather than leaving many possibilities open.",
    ja: "いろいろな可能性を残しておくより、明確な結論を出すほうが好きだ。",
    zh: "比起保留很多可能性，我更喜欢得出明确的结论。"
  },

  "modern-03": {
    en: "I sometimes manage myself strictly because I want to appear flawless to others.",
    ja: "人から隙のない人に見られたくて、自分を厳しく管理することがある。",
    zh: "为了让别人觉得我没有疏漏，我有时会非常严格地要求自己。"
  },

  "modern-04": {
    en: "If the result does not meet my standards, I find it hard to feel satisfied even with the parts I did well.",
    ja: "結果が自分の基準に届かないと、うまくできた部分があっても満足しにくい。",
    zh: "如果结果没有达到自己的标准，即使已经做得不错，我也很难感到满意。"
  }

};


// ==============================================================
// 번역 데이터를 기존 QUESTION_BANK에 합치기
// ==============================================================

QUESTION_BANK.forEach(question => {

  const translation =
    QUESTION_TRANSLATIONS[question.id];

  if (!translation) {
    return;
  }

  question.text = {
    ...question.text,
    ...translation
  };

});

/*
 * 한 번만 섞어서 확정한 고정 순서
 *
 * 실행할 때 Math.random()이나 shuffle을 사용하지 않으므로
 * 모든 사용자에게 항상 같은 순서로 표시됨
 */
const FIXED_QUESTION_ORDER = [

  "brown-02", "red-01", "blue-03",
  "purple-02", "green-01", "orange-03",
  "yellow-01", "pink-02", "modern-01",

  "green-04", "yellow-02", "purple-03",
  "red-03", "brown-01", "blue-02",
  "orange-01", "modern-03", "pink-01",

  "purple-04", "blue-01", "yellow-04",
  "green-03", "orange-04", "brown-03",
  "red-02", "pink-03", "modern-02",

  "yellow-03", "brown-04", "green-02",
  "blue-04", "purple-01", "orange-02",
  "red-04", "modern-04", "pink-04"

];

const QUESTION_MAP = Object.fromEntries(
  QUESTION_BANK.map(question => [question.id, question])
);

const QUESTIONS = FIXED_QUESTION_ORDER.map(id => {
  const question = QUESTION_MAP[id];

  if (!question) {
    throw new Error(`질문 ID를 찾을 수 없습니다: ${id}`);
  }

  return question;
});


/*
 * 질문 내용과 관계없이 페이지 순서대로 순환하는 배경색
 * 질문의 실제 컬러를 추측하지 못하도록 점수 컬러와 연결하지 않음
 */
const BG_COLORS = [
  "#FF0315",
  "#FF6803",
  "#FFF900",
  "#19CD30",
  "#00D1F9",
  "#9876EC",
  "#FF85FB",
  "#CC833A",
  "#9D9D9D"
];