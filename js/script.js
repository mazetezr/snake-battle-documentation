// ========== LANGUAGE DATA ==========
const translations = {
  // NAV
  navConcept: { ru: 'Концепция', en: 'Concept' },
  navGameplay: { ru: 'Геймплей', en: 'Gameplay' },
  navEconomy: { ru: 'Экономика', en: 'Economy' },
  navPowers: { ru: 'Способности', en: 'Powers' },
  navReferral: { ru: 'Реферальная', en: 'Referral' },
  navModes: { ru: 'Режимы', en: 'Modes' },

  // HERO
  heroBadge: { ru: 'Game Design Document v2.3', en: 'Game Design Document v2.3' },
  heroTitle1: { ru: 'Web3', en: 'Web3' },
  heroTitle2: { ru: 'Snake Battle', en: 'Snake Battle' },
  heroSubtitle: {
    ru: 'Многопользовательская PvP-игра с реальными крипто-ставками. Управляйте червяком, который содержит реальную криптовалюту. Съедайте других игроков — забирайте их деньги.',
    en: 'Multiplayer PvP game with real crypto stakes. Control a worm carrying real cryptocurrency. Eat other players — take their money.'
  },
  heroBtn1: { ru: 'Читать документ', en: 'Read Document' },
  heroBtn2: { ru: 'Экономика', en: 'Economy' },

  // SECTION 1 — CONCEPT
  sec1Label: { ru: 'Раздел 1', en: 'Section 1' },
  sec1Title: { ru: 'Концепция игры', en: 'Game Concept' },
  sec1Desc: {
    ru: 'Многопользовательская PvP-игра, где игроки управляют червяками, содержащими реальную криптовалюту. Съедая других игроков, вы забираете часть их средств.',
    en: 'A multiplayer PvP game where players control worms carrying real cryptocurrency. By eating other players, you take a share of their funds.'
  },
  // Audience cards
  aud1Title: { ru: 'Крипто-энтузиасты', en: 'Crypto Enthusiasts' },
  aud1Desc: { ru: 'Активные пользователи криптовалют, ищущие новые способы заработка', en: 'Active crypto users looking for new earning opportunities' },
  aud2Title: { ru: 'PvP-геймеры', en: 'PvP Gamers' },
  aud2Desc: { ru: 'Любители казуальных соревновательных игр', en: 'Fans of casual competitive games' },
  aud3Title: { ru: 'Play-to-Earn', en: 'Play-to-Earn' },
  aud3Desc: { ru: 'Игроки, зарабатывающие на играх', en: 'Players who earn through gaming' },
  // Platform
  platLabel: { ru: 'Платформы', en: 'Platforms' },
  platMVP: { ru: 'MVP: Web-версия (Desktop/Laptop) — только веб на старте', en: 'MVP: Web version (Desktop/Laptop) — web only at launch' },
  platPost: { ru: 'Пост-MVP: Desktop/Laptop + Mobile (отдельные серверы для мобильных)', en: 'Post-MVP: Desktop/Laptop + Mobile (separate servers for mobile)' },

  // SECTION 2 — GAMEPLAY
  sec2Label: { ru: 'Раздел 2', en: 'Section 2' },
  sec2Title: { ru: 'Core Gameplay механики', en: 'Core Gameplay Mechanics' },
  sec2Desc: {
    ru: 'Классическая механика Snake с инновационной экономической моделью. Каждое столкновение — это реальная финансовая транзакция.',
    en: 'Classic Snake mechanics with an innovative economic model. Every collision is a real financial transaction.'
  },
  // Movement cards
  mov1: { ru: 'Червяк следует за курсором мыши', en: 'The worm follows the mouse cursor' },
  mov2: { ru: 'Постоянное движение вперёд', en: 'Constant forward movement' },
  mov3: { ru: 'Смерть при столкновении головой с телом другого червяка', en: 'Death on head collision with another worm\'s body' },
  mov4: { ru: 'Рост длины и массы при поглощении объектов', en: 'Length and mass growth when absorbing objects' },
  mov5: { ru: 'Ускорение без потери массы и денег (ограничено по времени)', en: 'Speed boost without losing mass/money (time-limited)' },
  mov6: { ru: 'Все игроки стартуют с одинаковым весом/размером', en: 'All players start with equal weight/size' },
  mov7: { ru: 'Защита новичков — 3 секунды неуязвимости при спавне', en: 'Newbie protection — 3 seconds invulnerability on spawn' },
  movTitle: { ru: 'Базовая механика движения', en: 'Basic Movement Mechanics' },

  // Eating system
  eatTitle: { ru: 'Система «Съедания»', en: 'Eating System' },
  eat1: { ru: 'Мёртвых червяков (распадаются на сегменты)', en: 'Dead worms (break into segments)' },
  eat2: { ru: 'Бесплатные пузыри с массой', en: 'Free mass bubbles' },
  eat3: { ru: 'Маленькие пузырьки от турбо (декоративные)', en: 'Small turbo bubbles (decorative)' },
  eatWhatLabel: { ru: 'Что можно съесть:', en: 'What can be eaten:' },

  // Death mechanics
  deathTitle: { ru: 'Механика смерти', en: 'Death Mechanics' },
  death1: { ru: 'При смерти червяк распадается на светящиеся сегменты', en: 'On death, the worm breaks into glowing segments' },
  death2: { ru: 'Каждый сегмент содержит часть общей массы', en: 'Each segment contains part of the total mass' },
  death3: { ru: 'Сегменты можно съесть — получаете массу и деньги убитого', en: 'Segments can be eaten — you get mass and money from the killed player' },

  // Exit
  exitTitle: { ru: 'Выход из игры', en: 'Game Exit' },
  exitDesc: {
    ru: 'Для выхода нужно зажать клавишу «F» на 2,5 секунды. Есть возможность прокачать значение «Exit», уменьшив длительность выхода.',
    en: 'To exit, hold the "F" key for 2.5 seconds. You can upgrade "Exit" to reduce the exit duration.'
  },

  // SECTION 3 — ECONOMY
  sec3Label: { ru: 'Раздел 3', en: 'Section 3' },
  sec3Title: { ru: 'Монетизация и экономика', en: 'Monetization & Economy' },
  sec3Desc: {
    ru: 'Прозрачная экономическая модель с фиксированными процентами и системой лиг для игроков разного уровня.',
    en: 'Transparent economic model with fixed percentages and a league system for players of different levels.'
  },

  // Wallet
  walletTitle: { ru: 'Система кошельков', en: 'Wallet System' },
  walletDesc: {
    ru: 'При регистрации создаётся custodial wallet под управлением платформы с поддержкой разных блокчейнов. Игроки депозитят CRYPTO и могут вывести средства на внешний кошелёк.',
    en: 'On registration, a custodial wallet is created under platform management with multi-chain support. Players deposit CRYPTO and can withdraw to external wallets.'
  },

  // Leagues table
  leaguesTitle: { ru: 'Система лиг (Entry Fee)', en: 'League System (Entry Fee)' },
  thLeague: { ru: 'Лига', en: 'League' },
  thEntry: { ru: 'Входной взнос', en: 'Entry Fee' },
  thBoosts: { ru: 'Доступные бусты', en: 'Available Boosts' },
  thAudience: { ru: 'Целевая аудитория', en: 'Target Audience' },
  lgRookie: { ru: 'Новичок', en: 'Rookie' },
  lgBasic: { ru: 'Базовая', en: 'Basic' },
  lgAmateur: { ru: 'Аматор', en: 'Amateur' },
  lgPro: { ru: 'Про', en: 'Pro' },
  lgRookieBoost: { ru: 'Amplifiers + базовое Ускорение (без прокачки)', en: 'Amplifiers + base Speed (no upgrades)' },
  lgBasicBoost: { ru: 'Ускорение (с прокачкой)', en: 'Speed Boost (upgradeable)' },
  lgAmateurBoost: { ru: 'Ускорение (с прокачкой) + Нора', en: 'Speed Boost (upgradeable) + Dive' },
  lgProBoost: { ru: 'Все (+ Неуязвимость)', en: 'All (+ Ghost)' },
  lgRookieAud: { ru: 'Новички, тестирование', en: 'Beginners, testing' },
  lgBasicAud: { ru: 'Начинающие игроки', en: 'Starting players' },
  lgAmateurAud: { ru: 'Опытные игроки', en: 'Experienced players' },
  lgProAud: { ru: 'Хардкорные игроки', en: 'Hardcore players' },

  // Death distribution
  deathDistTitle: { ru: 'Распределение средств при смерти', en: 'Fund Distribution on Death' },
  deathDistDesc: {
    ru: 'Когда игрок умирает с балансом $X:',
    en: 'When a player dies with balance $X:'
  },
  dist1: { ru: '87,5% ($X × 0.875) — выпадает в сегментах', en: '87.5% ($X × 0.875) — drops as segments' },
  dist2: { ru: '2% ($X × 0.02) — реф. программа (если есть)', en: '2% ($X × 0.02) — referral program (if applicable)' },
  dist3: { ru: '6,5–12,5% ($X × 0.065–0.125) — комиссия платформы', en: '6.5–12.5% ($X × 0.065–0.125) — platform commission' },

  // Safe exit
  safeExitTitle: { ru: 'Safe Exit (безопасный выход)', en: 'Safe Exit' },
  safeExitDesc: {
    ru: 'При безопасном выходе из игры (зажатие «F») применяется точно такое же распределение, как и при смерти. Игрок получает 87,5% от текущего баланса. Платформа получает комиссию с каждого выхода.',
    en: 'On safe exit (holding "F"), the same distribution applies as on death. The player receives 87.5% of their current balance. The platform takes a commission on every exit.'
  },

  // Commission
  commTitle: { ru: 'Комиссия платформы по рефералам', en: 'Platform Commission by Referral' },
  commNoRef: { ru: 'Нет реферера → 12,5% платформе', en: 'No referrer → 12.5% to platform' },
  commBase: { ru: 'Базовый реферер (2%) → 10,5% платформе', en: 'Basic referrer (2%) → 10.5% to platform' },
  commAmb: { ru: 'Базовый амбассадор (4%) → 8,5% платформе', en: 'Basic ambassador (4%) → 8.5% to platform' },
  commPrem: { ru: 'Премиум амбассадор (6%) → 6,5% платформе', en: 'Premium ambassador (6%) → 6.5% to platform' },

  // SECTION 4 — POWERS
  sec4Label: { ru: 'Раздел 4', en: 'Section 4' },
  sec4Title: { ru: 'Powers и Amplifiers', en: 'Powers & Amplifiers' },
  sec4Desc: {
    ru: 'Система усилений и способностей разделена на Amplifiers (собираемые на карте) и Powers (активные способности с ограничениями по лигам).',
    en: 'The buff and ability system is divided into Amplifiers (collectible on the map) and Powers (active abilities with league restrictions).'
  },

  // Amplifiers
  ampTitle: { ru: 'Amplifiers (спавнятся на карте)', en: 'Amplifiers (spawn on map)' },
  massOrbTitle: { ru: 'Mass Orbs 🟢', en: 'Mass Orbs 🟢' },
  massOrbDesc: {
    ru: 'Появляются случайно по карте. Дают только массу и длину, НЕ дают деньги.',
    en: 'Appear randomly on the map. Give only mass and length, NO money.'
  },
  massOrbLen: { ru: 'Длина: +5 → +8 → +12 → +15 → +20', en: 'Length: +5 → +8 → +12 → +15 → +20' },
  massOrbWid: { ru: 'Ширина: +0.5 → +0.7 → +1.0 → +1.2 → +1.5', en: 'Width: +0.5 → +0.7 → +1.0 → +1.2 → +1.5' },
  massOrbDur: { ru: 'Время: 15с → 20с → 30с → 45с → 70с', en: 'Duration: 15s → 20s → 30s → 45s → 70s' },
  massOrbCost: { ru: 'Стоимость прокачки: 499 → 899 → 1 799 → 3 599 гемов', en: 'Upgrade cost: 499 → 899 → 1,799 → 3,599 gems' },

  visionTitle: { ru: 'Vision Boost 👁', en: 'Vision Boost 👁' },
  visionDesc: {
    ru: 'Появляется случайно. Увеличивает радиус видимости камеры.',
    en: 'Appears randomly. Increases camera visibility radius.'
  },
  visionRadius: { ru: 'Радиус обзора: +20% → +40% → +60% → +80% → +100%', en: 'View radius: +20% → +40% → +60% → +80% → +100%' },
  visionDur: { ru: 'Длительность: 15с → 20с → 25с → 30с → 40с', en: 'Duration: 15s → 20s → 25s → 30s → 40s' },
  visionCost: { ru: 'Стоимость прокачки: 499 → 899 → 1 799 → 3 599 гемов', en: 'Upgrade cost: 499 → 899 → 1,799 → 3,599 gems' },

  // Powers
  powersTitle: { ru: 'Powers (активные способности)', en: 'Powers (Active Abilities)' },
  turboTitle: { ru: 'Турбо ⚡', en: 'Turbo ⚡' },
  turboDesc: {
    ru: 'Увеличивает скорость движения на 50%. Выделяются маленькие точки массы, но сама масса не теряется. Динамическая перезарядка.',
    en: 'Increases movement speed by 50%. Small mass dots are released, but mass is not lost. Dynamic recharge.'
  },
  turboDur: { ru: 'Время: 5с → 6с → 7с → 8с → 10с', en: 'Duration: 5s → 6s → 7s → 8s → 10s' },
  turboRecharge: { ru: 'Перезарядка: 5с → 4.5с → 4с → 3.5с → 3с', en: 'Recharge: 5s → 4.5s → 4s → 3.5s → 3s' },
  turboCost: { ru: 'Стоимость: 1 099 → 2 299 → 4 499 → 8 999 гемов', en: 'Cost: 1,099 → 2,299 → 4,499 → 8,999 gems' },
  turboAccess: { ru: 'Доступ: Базовый (без прокачки) — Новичок; С прокачкой — от лиги Базовая', en: 'Access: Basic (no upgrades) — Rookie; Upgradeable — from Basic league' },

  diveTitle: { ru: 'Нора (Dive) 🕳', en: 'Dive 🕳' },
  diveDesc: {
    ru: 'Червяк «закапывается» на текущей позиции. 3 секунды на выбор точки выхода в радиусе X пикселей. Перезарядка: 150 сек. Покупается поштучно.',
    en: 'The worm "digs" at current position. 3 seconds to choose exit point within X-pixel radius. Cooldown: 150s. Purchased individually.'
  },
  diveCost: { ru: 'Стоимость: 1 шт = 799, пак 5 = 3 799, пак 10 = 6 999 гемов', en: 'Cost: 1 = 799, pack of 5 = 3,799, pack of 10 = 6,999 gems' },
  diveAccess: { ru: 'Доступ: Лиги Аматор и Про', en: 'Access: Amateur and Pro leagues' },

  ghostTitle: { ru: 'Неуязвимость (Ghost) 🛡', en: 'Ghost 🛡' },
  ghostDesc: {
    ru: 'Червяк становится бледно-прозрачным. Не может умереть от столкновений, не может убить. Длительность: 5 сек. Перезарядка: 180 сек.',
    en: 'The worm becomes faintly transparent. Cannot die from collisions, cannot kill. Duration: 5s. Cooldown: 180s.'
  },
  ghostCost: { ru: 'Стоимость: 1 шт = 1 799, пак 5 = 7 999, пак 10 = 15 599 гемов', en: 'Cost: 1 = 1,799, pack of 5 = 7,999, pack of 10 = 15,599 gems' },
  ghostAccess: { ru: 'Доступ: ТОЛЬКО лига Про', en: 'Access: Pro league ONLY' },

  exitPowerTitle: { ru: 'Exit — выход из игры', en: 'Exit — game exit' },
  exitPowerDesc: {
    ru: 'Прокачка уменьшает длительность выхода.',
    en: 'Upgrade reduces exit duration.'
  },
  exitUpgrade: { ru: '2.50с → 2.25с → 2.00с → 1.75с → 1.50с', en: '2.50s → 2.25s → 2.00s → 1.75s → 1.50s' },
  exitCost: { ru: 'Стоимость: 1 199 → 1 599 → 1 999 → 2 399 гемов', en: 'Cost: 1,199 → 1,599 → 1,999 → 2,399 gems' },

  // League restrictions table
  leagueRestTitle: { ru: 'Ограничения по лигам', en: 'League Restrictions' },

  // SECTION 5 — PROGRESSION
  sec5Label: { ru: 'Раздел 5', en: 'Section 5' },
  sec5Title: { ru: 'Прогрессия и магазин', en: 'Progression & Shop' },
  sec5Desc: {
    ru: 'Игровая валюта — Гемы. Обменный курс: 680 гемов = $1. Полная прокачка (FULL) ≈ 68 000 гемов ≈ $100.',
    en: 'In-game currency — Gems. Exchange rate: 680 gems = $1. Full upgrade (FULL) ≈ 68,000 gems ≈ $100.'
  },
  gemRateTitle: { ru: 'Курс гемов', en: 'Gem Exchange Rate' },
  gemsEarnTitle: { ru: 'Способы получения гемов', en: 'Ways to Earn Gems' },
  thAction: { ru: 'Действие', en: 'Action' },
  gemKill: { ru: 'За убийство игрока', en: 'Per player kill' },
  gemSurv1: { ru: 'За выживание каждую минуту', en: 'Survival per minute' },
  gemSurv3: { ru: 'Выживание 3 минуты', en: '3-minute survival' },
  gemSurv5: { ru: 'Выживание 5 минут', en: '5-minute survival' },
  gemSurv15: { ru: 'Выживание 15 минут', en: '15-minute survival' },

  // Economy table
  econTitle: { ru: 'Экономика лиг', en: 'League Economy' },
  thGemsH: { ru: 'Гемов/час', en: 'Gems/hr' },
  thValueH: { ru: 'Ценность/час', en: 'Value/hr' },
  thCommMinH: { ru: 'Комса/час (мин)', en: 'Commission/hr (min)' },
  thCommMaxH: { ru: 'Комса/час (макс)', en: 'Commission/hr (max)' },
  thHoursFull: { ru: 'Часы до FULL', en: 'Hours to FULL' },
  thTotalComm: { ru: 'Всего комсы до FULL', en: 'Total commission to FULL' },

  shopTitle: { ru: 'Структура магазина', en: 'Shop Structure' },
  shopTab1: { ru: 'Вкладка 1: Amplifiers — Mass Orbs, Vision Boost (постоянные улучшения)', en: 'Tab 1: Amplifiers — Mass Orbs, Vision Boost (permanent upgrades)' },
  shopTab2: { ru: 'Вкладка 2: Powers — Ghost, Dive, Turbo (время действия, перезарядка)', en: 'Tab 2: Powers — Ghost, Dive, Turbo (duration, recharge)' },
  shopTab3: { ru: 'Вкладка 3: Exit — прокачка за гемы', en: 'Tab 3: Exit — upgrade for gems' },

  // SECTION 6 — REFERRAL
  sec6Label: { ru: 'Раздел 6', en: 'Section 6' },
  sec6Title: { ru: 'Реферальная программа', en: 'Referral Program' },
  sec6Desc: {
    ru: 'Реферальная программа — возможность для игроков зарабатывать дополнительную криптовалюту, приглашая новых пользователей. Каждый игрок получает уникальную реферальную ссылку.',
    en: 'The referral program allows players to earn additional cryptocurrency by inviting new users. Each player gets a unique referral link.'
  },
  refHow1: { ru: 'Вы делитесь своей реферальной ссылкой', en: 'Share your referral link' },
  refHow2: { ru: 'Новый игрок регистрируется по вашей ссылке', en: 'New player registers via your link' },
  refHow3: { ru: 'Вы получаете процент от каждой игры вашего реферала', en: 'You earn a percentage from every game your referral plays' },
  refHow4: { ru: 'Полностью пассивный доход', en: 'Fully passive income' },

  refBaseTitle: { ru: 'Базовые условия', en: 'Base Terms' },
  refBaseDesc: {
    ru: 'Когда ваш реферал умирает или выходит через Safe Exit с балансом $X, вы автоматически получаете 2% от его баланса.',
    en: 'When your referral dies or exits via Safe Exit with balance $X, you automatically receive 2% of their balance.'
  },

  ambTitle: { ru: 'Программа амбассадоров', en: 'Ambassador Program' },
  ambDesc: {
    ru: 'Для активных создателей контента, стримеров и инфлюенсеров доступна расширенная амбассадорская программа.',
    en: 'An extended ambassador program is available for active content creators, streamers, and influencers.'
  },
  ambBase: { ru: 'Базовый амбассадор: 4% от баланса реферала', en: 'Basic Ambassador: 4% of referral balance' },
  ambPrem: { ru: 'Премиум амбассадор: 6% от баланса реферала', en: 'Premium Ambassador: 6% of referral balance' },
  ambNote: {
    ru: 'Статус определяется ежедневным топом. 30% лучших рефереров получают статус премиум. Обновление каждый день в 00:00 UTC.',
    en: 'Status is determined by a daily leaderboard. Top 30% of referrers get premium status. Updated daily at 00:00 UTC.'
  },
  ambPerks: { ru: 'Преимущества амбассадоров:', en: 'Ambassador Perks:' },
  ambPerk1: { ru: 'Эксклюзивный Телеграм-чат с владельцами и разработчиками', en: 'Exclusive Telegram chat with owners and developers' },
  ambPerk2: { ru: 'Ранний доступ к новым функциям', en: 'Early access to new features' },
  ambPerk3: { ru: 'Участие в закрытых турнирах с увеличенным призовым фондом', en: 'Participation in closed tournaments with increased prize pools' },
  ambPerk4: { ru: 'Возможность влиять на развитие игры', en: 'Ability to influence game development' },

  // SECTION 7 — MODES
  sec7Label: { ru: 'Раздел 7', en: 'Section 7' },
  sec7Title: { ru: 'Игровые режимы', en: 'Game Modes' },
  sec7Desc: {
    ru: 'Два основных режима на первой фазе, NFT-система и турниры — на второй.',
    en: 'Two main modes in Phase 1, NFT system and tournaments — in Phase 2.'
  },

  battleTitle: { ru: 'Battle Arena', en: 'Battle Arena' },
  battlePhase: { ru: 'Фаза 1', en: 'Phase 1' },
  battleDesc: {
    ru: 'Базовый режим с Powers и Amplifiers. Размер карты подстраивается под количество игроков.',
    en: 'Base mode with Powers and Amplifiers. Map size adjusts to player count.'
  },
  brTitle: { ru: 'Королевская битва', en: 'Battle Royale' },
  brPhase: { ru: 'Фаза 1', en: 'Phase 1' },
  brDesc: {
    ru: 'На сервер одновременно заходит X игроков, последние 1–3 выживших забирают весь куш. Карта постепенно сужается.',
    en: 'X players join simultaneously, last 1–3 survivors take the entire pot. The map gradually shrinks.'
  },

  // NFT
  nftTitle: { ru: 'NFT Система', en: 'NFT System' },
  nftPhase: { ru: 'Фаза 2', en: 'Phase 2' },
  nftDesc: {
    ru: 'NFT-атрибуты выпускаются коллекцией в формате Blind-Boxes. Из 4 атрибутов можно скрафтить уникальный NFT-скин.',
    en: 'NFT attributes are released as collections in Blind-Box format. 4 attributes can be crafted into a unique NFT skin.'
  },
  nftAttr1: { ru: 'Моделька (цвет, текстура)', en: 'Model (color, texture)' },
  nftAttr2: { ru: 'Глаза', en: 'Eyes' },
  nftAttr3: { ru: 'Шапка, головной убор', en: 'Hat, headgear' },
  nftAttr4: { ru: 'Хвост', en: 'Tail' },

  // Tournaments
  tournTitle: { ru: 'Турниры', en: 'Tournaments' },
  tournPhase: { ru: 'Фаза 2', en: 'Phase 2' },
  tournDesc: {
    ru: 'Все игроки стартуют с одинаковыми характеристиками: 100 очков массы, Turbo (макс. прокачка), 1 Dive и 1 Ghost. На карте не спавнятся пузыри.',
    en: 'All players start with identical stats: 100 mass points, Turbo (max upgrade), 1 Dive and 1 Ghost. No bubbles spawn on the map.'
  },
  tournFormula: { ru: 'Очки раунда = (Убийства × 50) + (Масса перед смертью)', en: 'Round Score = (Kills × 50) + (Mass before death)' },

  // Tournament bracket
  bracketTitle: { ru: 'Турнирная сетка (1000 игроков)', en: 'Tournament Bracket (1,000 players)' },
  stage1Title: { ru: 'ЭТАП 1: 1000 → 250 игроков', en: 'STAGE 1: 1,000 → 250 players' },
  stage1Desc: { ru: '3 раунда, 40 параллельных лобби по 25 игроков. Топ-6 + 10 wildcard.', en: '3 rounds, 40 parallel lobbies of 25 players. Top 6 + 10 wildcard.' },
  stage2Title: { ru: 'ЭТАП 2: 250 → 60 игроков', en: 'STAGE 2: 250 → 60 players' },
  stage2Desc: { ru: '3 раунда, 10 лобби по 25 игроков. Топ-5 + 10 wildcard.', en: '3 rounds, 10 lobbies of 25 players. Top 5 + 10 wildcard.' },
  stage3Title: { ru: 'ЭТАП 3: Полуфинал — 60 → 15', en: 'STAGE 3: Semifinal — 60 → 15' },
  stage3Desc: { ru: '3 раунда, 4 лобби по 15 игроков. Топ-3 + 3 wildcard.', en: '3 rounds, 4 lobbies of 15 players. Top 3 + 3 wildcard.' },
  stage4Title: { ru: 'ЭТАП 4: ФИНАЛ — 15 игроков', en: 'STAGE 4: FINAL — 15 players' },
  stage4Desc: { ru: '3 решающих раунда, 15 игроков в одном лобби. Победитель — наибольшая сумма очков.', en: '3 decisive rounds, 15 players in one lobby. Winner — highest total score.' },

  // Prize pool
  prizeTitle: { ru: 'Призовой фонд (пример: $9,820)', en: 'Prize Pool (example: $9,820)' },

  // SECTION 8 — ANTI-CHEAT
  sec8Label: { ru: 'Раздел 8', en: 'Section 8' },
  sec8Title: { ru: 'Антикриминальные меры', en: 'Anti-Fraud Measures' },
  sec8Desc: {
    ru: 'Комплексная система защиты от ботов, сговора и отмывания денег.',
    en: 'Comprehensive protection system against bots, collusion, and money laundering.'
  },
  antiBotTitle: { ru: 'Защита от ботов', en: 'Anti-Bot Protection' },
  antiBot1: { ru: 'CAPTCHA при входе', en: 'CAPTCHA on entry' },
  antiBot2: { ru: 'Детекция нечеловеческих паттернов движения', en: 'Non-human movement pattern detection' },
  antiBot3: { ru: 'Система репортов', en: 'Report system' },
  antiBot4: { ru: 'IP ограничения', en: 'IP restrictions' },
  antiColTitle: { ru: 'Защита от сговора', en: 'Anti-Collusion' },
  antiCol1: { ru: 'Рандомизация спавна, нельзя играть с друзьями', en: 'Spawn randomization, no playing with friends' },
  antiCol2: { ru: 'Подача жалоб и последующий бан в случае подтверждения', en: 'Complaint filing and banning upon confirmation' },
  antiAmlTitle: { ru: 'Предотвращение отмывания денег', en: 'AML Prevention' },
  antiAml1: { ru: 'Лимиты на вывод средств', en: 'Withdrawal limits' },
  antiAml2: { ru: 'Мониторинг подозрительных транзакций', en: 'Suspicious transaction monitoring' },
  antiAml3: { ru: 'KYC для вывода больших сумм', en: 'KYC for large withdrawals' },

  // SECTION 9 — MONETIZATION
  sec9Label: { ru: 'Раздел 9', en: 'Section 9' },
  sec9Title: { ru: 'Монетизация платформы', en: 'Platform Monetization' },
  sec9Desc: {
    ru: 'Многоканальная система получения дохода платформой.',
    en: 'Multi-channel platform revenue system.'
  },
  rev1: { ru: 'Комиссия при смерти и Safe Exit: 6,5–12,5% от баланса', en: 'Commission on death & Safe Exit: 6.5–12.5% of balance' },
  rev3: { ru: 'Продажа гемов за криптовалюту', en: 'Selling gems for cryptocurrency' },
  rev4: { ru: 'NFT-коллекции + Роялти: 2,5% от продаж на маркетплейсе', en: 'NFT collections + Royalties: 2.5% of marketplace sales' },
  reinvestTitle: { ru: 'Реинвестирование', en: 'Reinvestment' },
  reinvestDesc: { ru: 'Турниры, NFT-коллекции, Регулярные обновления', en: 'Tournaments, NFT collections, Regular updates' },

  // Footer
  footerText: { ru: '© 2025 Web3 Snake Battle. Все права защищены. Game Design Document', en: '© 2025 Web3 Snake Battle. All rights reserved. Game Design Document' },
};

// ========== STATE ==========
let currentLang = 'ru';

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage('ru');
  initScrollEffects();
  initMobileMenu();
  initTOC();
});

// ========== LANGUAGE SWITCH ==========
function switchLang(lang) {
  currentLang = lang;
  applyLanguage(lang);
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });
  document.documentElement.lang = lang;
}

// ========== SCROLL EFFECTS ==========
function initScrollEffects() {
  const header = document.querySelector('.site-header');
  const fadeEls = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }
}

// ========== TOC DOTS ==========
function initTOC() {
  const sections = document.querySelectorAll('.section[id]');
  const dots = document.querySelectorAll('.toc a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dots.forEach(d => d.classList.remove('active'));
        const dot = document.querySelector(`.toc a[href="#${entry.target.id}"]`);
        if (dot) dot.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

// ========== SMOOTH SCROLL ==========
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor) {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
