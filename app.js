/* ==========================================================================
   Entre Nós — app.js (Com Suporte a Swipe no Telemóvel)
   ========================================================================== */
"use strict";

/* 1. Constantes ------------------------------------------------------------ */
const STORAGE_KEY = "entre-nos-state-v1";
const THEME_KEY = "entre-nos-theme";
const THEME_COLORS = { light: "#fdfcf9", dark: "#11150f" };
const MAX_HISTORY_ITEMS = 60;

/* 2. Dados: baralhos por fase ---------------------------------------------- */
const decks = [
  {
    id: "fase-0-construcao",
    title: "Construção",
    category: "Fase 0",
    symbol: "00",
    themeColor: "#6b8b7e",
    cardBg: "#fbf6f0",
    description:
      "Desconstrua as primeiras impressões e explore as idealizações iniciais.",
    questions: [
      "Qual a primeira impressão que você teve sobre mim?",
      "Você acha que eu já tive meu coração partido?",
      "Você acha que eu me apaixono rápido?",
      "Eu pareço intimidar as pessoas?",
      "O que você acha que eu queria ser quando era criança?",
      "Um valor que você acredita ser muito importante para mim é _______",
      "Qual banda você acha que eu mais gosto?",
      "Um defeito que eu pareço ter.",
      "Um personagem de televisão que eu poderia ser.",
      "Qual profissão parece comigo?",
      "Imagine que vocês têm as senhas do Instagram um do outro. Como você escreveria a biografia dessa pessoa? (Crie em 1 minuto e compartilhe. Se quiser, você pode alterar a biografia.)",
      "Você acha que eu gostaria de ser famoso?",
      "Que tipo de aluno você acha que eu era na escola?",
      "O que minha linguagem corporal está comunicando agora?",
      "Se eu perdesse meu celular e todo meu dinheiro em outro país, o que você acha que eu faria?",
      "Se eu fosse professor, que matéria você acha que eu daria? Pode ser qualquer matéria, até mesmo aquelas que (ainda) não existem nas escolas.",
      "Se eu fosse demitido hoje, por qual motivo você acha que seria?",
      "Ganhei 1.000 dólares para gastar no shopping. Em qual loja eu iria primeiro?",
      "O que você acha que é a primeira coisa que eu faço quando estou com raiva?",
      "De 0 a 10, o quanto você acha que eu sou bom em esportes radicais?",
      "Se eu fosse fazer uma festa de aniversário temática hoje, qual tema eu provavelmente escolheria?",
      "Pelo que você sabe sobre mim, costumo ver o copo meio cheio ou meio vazio?",
      "Pareço ser mais racional ou emocional? Explique o motivo.",
      "Complete a frase: Ao olhar para você, eu pensaria que _______",
      "O que você acha que o papel de parede do meu telefone diz sobre mim?",
      "O que você acha que eu acho sexy em uma pessoa?",
      "O que você acha que eu quero comunicar com a roupa que estou vestindo hoje?",
    ],
  },
  {
    id: "fase-1-revelacao",
    title: "Revelação",
    category: "Fase 1",
    symbol: "01",
    themeColor: "#84475c",
    cardBg: "#fbf6f0",
    description:
      "Revele quem você realmente é e exponha o que é importante para você.",
    questions: [
      "Qual é o seu maior motivo para viver agora? O que te anima a acordar?",
      "Qual é o nome do seu pai e o que você mais admira nele?",
      "Imagine que você ganhou o prêmio de melhor pessoa do mundo. Diga por que você merece esse prêmio e a quem você agradeceria.",
      "Existe algo que você faz todos os dias que não condiz com a pessoa que você quer ser no futuro? O que te impede de mudar isso?",
      "Qual foi a maior demonstração de amor que você já demonstrou na vida?",
      "Você recebeu 3 desejos do gênio da lâmpada. Comece a realizá-los em 3 segundos ou perca todos eles. 1, 2, 3.",
      "Imagine que você vai pendurar um quadro enorme em casa. Que frase ou desenho você escolheria ver todos os dias? Explique.",
      "Em um dia triste, qual é o seu segredo para torná-lo um pouco melhor?",
      "Se você pudesse inventar um feriado, qual seria o motivo? E qual seria a data?",
      "Quem na sua vida faz você se sentir muito confortável sendo exatamente quem você é? Conte-nos o que essa pessoa faz que faz você se sentir assim.",
      "Quem é sua maior inspiração?",
      "O que perturba sua paz?",
      "Em que momentos você se sente mais envergonhado?",
      "Qual é seu lugar favorito no mundo?",
      "Qual é a coisa mais importante que você acredita ter feito por si mesmo?",
      "Qual foi a última vez que você chorou?",
      "Qual foi a última vez que você fez algo pela primeira vez?",
      "De quem você mais sente falta?",
      "Os pequenos prazeres da vida são:",
      "Você acredita em almas gêmeas?",
      "Quem você gostaria de ser por um dia?",
      "O que faz a vida valer a pena?",
      "Se sua vida hoje fosse uma série da Netflix, qual seria o nome dela?",
      "Conte-nos sobre uma lição significativa que você aprendeu com seu pai.",
      "O que mais te incomoda nos padrões sociais da nossa cultura?",
      "Compartilhe um conselho que mudou você de alguma forma.",
      "Qual foi a melhor lembrança do seu ano até agora?",
      "O que você mais gostava de fazer quando criança? É possível adaptar isso para você fazer hoje em dia também?",
      "Como você realmente está se sentindo hoje?",
      "Conte-nos sobre um dia em que você fez a diferença na vida de alguém.",
    ],
  },
  {
    id: "fase-2-coragem",
    title: "Coragem",
    category: "Fase 2",
    symbol: "02",
    themeColor: "#b26b48",
    cardBg: "#fbf6f0",
    description:
      "Crie conexões corajosas sem medo de mostrar suas imperfeições.",
    questions: [
      "Quantos grandes amores você acredita que uma pessoa tem na vida?",
      "Você é muito exigente consigo mesmo? Se sim, você acha que isso é algo positivo ou negativo?",
      "O que torna alguém irritante?",
      "Quem na sua família você tem mais medo de perder? Por quê?",
      "Qual foi sua maior decepção até agora?",
      "O que você se sente mais pressionado a fazer ou ser hoje? De onde você acha que vem essa pressão?",
      "Qual é a lição mais poderosa que você aprendeu com um relacionamento romântico fracassado?",
      "O que te deixa mais envergonhado indiretamente?",
      "O que você ainda está tentando provar para si mesmo?",
      "Qual foi o evento mais inexplicável que já aconteceu na sua vida?",
      "O que a versão infantil de você pensaria sobre a pessoa que você é hoje?",
      "O que o leva a um estado de êxtase?",
      "Encontre três palavras que me descrevam.",
      "Qual é o nome do seu primeiro amor e por que você se apaixonou por ele/ela?",
      "Como você gostaria de ser lembrado depois de morrer?",
      "Você acha que a imagem que você tem de si mesmo é a mesma que os outros percebem?",
      "Escreva as três coisas que cada um mais admira no outro e, quando estiver pronto, leia-as em voz alta.",
      "Se você pudesse mudar alguma coisa na maneira como foi criado, o que seria?",
      "Que momento você gostaria de reviver?",
      "Que métodos você usa para escapar de coisas que acha difíceis de lidar?",
      "Há alguma sensação ou sentimento que você sente falta de experimentar na sua vida hoje?",
      "Diga três coisas que você acredita que temos em comum.",
      "O que você diria hoje para a última pessoa com quem você se envolveu romanticamente?",
      "Qual é o maior desafio que você enfrenta na vida hoje?",
      "O que maturidade significa para você? Em que momentos você não se sente maduro?",
    ],
  },
  {
    id: "fase-3-confianca",
    title: "Confiança",
    category: "Fase 3",
    symbol: "03",
    themeColor: "#5b638a",
    cardBg: "#fbf6f0",
    description: "Suprima barreiras para construir uma verdadeira intimidade.",
    questions: [
      "Com base em todas as minhas respostas até agora, que conselho você me daria?",
      "O que você acha que eu deveria saber sobre mim mesmo que talvez eu não esteja enxergando?",
      "Houve algo que eu disse hoje que fez seus olhos brilharem?",
      "Qual você acredita ser minha maior fraqueza?",
      "Você tem alguma saudade da qual tem vergonha de falar?",
      "Qual foi a última mentira que você contou? Há algo em que você precisa ser mais consistente?",
      "Com base no que você aprendeu sobre mim, você acredita que minhas mídias sociais refletem quem eu sou?",
      "Com base na nossa conversa, recomende um livro que eu preciso começar a ler urgentemente.",
      "Crie uma pergunta para todos os presentes. Este é o momento de perguntar o que você sempre quis. Não se contenha!",
      "O que você acha que preciso deixar de lado na minha vida? Me dê uma receita para sair da minha zona de conforto e seguir por 10 dias!",
      "Você acredita que todos têm uma missão? Se sim, você acha que encontrou a sua?",
      "O que você acredita que não valorizou o suficiente?",
      "Qual foi a melhor decisão que você já tomou na vida?",
      "Você carrega algum sentimento de culpa? Por quê?",
      "Fale sobre um amigo que não está mais na sua vida, mas de quem você sente falta e por que vocês se distanciaram.",
      "Confesse um preconceito.",
      "Diga algo que você nunca teve coragem de dizer a ninguém.",
      "Se você pudesse me dar algum conselho, qual seria?",
      "Descreva como você me apresentaria a um estranho.",
      "Você tem medo da morte? O que você acredita que acontece quando morremos?",
      "Por que você acha que nossos caminhos se cruzaram nesta vida?",
      "Conte-me sobre alguém que entrou na sua vida e ajudou você a se tornar uma pessoa melhor hoje.",
      "Existe alguma crença ou padrão na sua família que você gostaria de redefinir?",
      "O que fez você se sentir mais conectado comigo hoje?",
      "Qual elogio você gostaria de receber com mais frequência?",
    ],
  },
  {
    id: "fase-4-conexao",
    title: "Conexão",
    category: "Fase 4",
    symbol: "04",
    themeColor: "#684577",
    cardBg: "#fbf6f0",
    description: "Pratique o afeto e interações dinâmicas e especiais.",
    questions: [
      "Se você pudesse enviar uma única mensagem para o mundo inteiro agora, o que diria? Já que não pode, pelo menos publique esta mensagem no seu story (e marque a gente para que a gente possa ver @issonaoeumjogo).",
      'Encontre uma flor (se você não tiver uma, crie uma com um guardanapo ou desenhe-a) e dê a um estranho, dizendo "para tornar seu dia ainda mais brilhante".',
      "Deixe que a pessoa à sua frente escolha alguém no seu Instagram para você enviar uma mensagem de elogio. Não economize no carinho.",
      "Se você estivesse em um barco e todos estivessem se afogando, explique por que você salvaria cada pessoa presente.",
      "Todos devem criar um empreendimento para a pessoa ao lado. Pensem no que essa pessoa poderia inventar e com o que prosperar. Compartilhem o que vocês criaram para cada pessoa e escolham quem teve a ideia mais viável.",
      "Exercício do espelho: todos devem ficar em frente ao espelho e se elogiar. A pessoa que fizer o maior número de elogios (sinceros) é a vencedora.",
      "Competição de abraços: a primeira pessoa a receber um abraço de um estranho vence.",
      "Para solteiros: envie uma mensagem para sua paixão no Instagram.",
      'Deixem de seguir alguém que não traz positividade às suas redes sociais. Expliquem o motivo e votem em quem fez o melhor "unfollow".',
      "Ligue para um membro da família e expresse seu afeto por essa pessoa.",
      "Você tem duas opções: criar uma música ou poema com o nome da pessoa à sua frente e cantar/contar a ela/ele.",
      "Compartilhe uma regra que você gosta de quebrar.",
      'Liste as 5 coisas mais incríveis que aconteceram com você hoje. Crie um grupo no WhatsApp chamado "5 Coisas Maravilhosas", adicione 10 pessoas com quem você não fala há algum tempo e peça que façam o mesmo.',
      "Coloque uma venda nos olhos e peça para alguém girar você. Caminhe até esbarrar em alguém e dê um abraço nessa pessoa.",
      "A pessoa à sua esquerda agora é seu Mestre. Faça o que ela ordenar por 3 minutos.",
      "Se a felicidade fosse uma moeda nacional, qual trabalho o tornaria muito rico?",
      "Qual é o maior desafio que você enfrenta na vida hoje? Compartilhe-o com todos os presentes e deixe que cada um lhe dê conselhos como se o desafio fosse deles.",
      "Há algo que você gostaria de fazer, mas não fez porque acha que é muito velho ou muito jovem?",
      "Compartilhe sua melhor tática de flerte. Mostre para todo mundo. É a sua hora de agir.",
      "Pense em alguém que você inveja. Sem dizer o nome, diga o que você mais admira nessa pessoa.",
      "Compartilhe um ato de coragem recente que você jamais imaginaria que faria. Inspire quem está ouvindo com esta história.",
      "O que você faz rotineiramente e não gosta? Compartilhe com quem está ouvindo e encontre uma maneira de tornar a experiência mais agradável juntos.",
    ],
  },
  {
    id: "fase-5-conclusao",
    title: "Conclusão",
    category: "Fase 5",
    symbol: "05",
    themeColor: "#395568",
    cardBg: "#fbf6f0",
    description: "Desafio final e reflexão sobre a jornada.",
    questions: [
      "O que mudou em ti depois do jogo? Escolhe uma palavra ou frase que represente algo bom que aprendeste e que queiras levar contigo. Escreve-a e coloca-a num lugar onde a possas ver com frequência.",
      "Escreva um bilhete para a pessoa que teve essa conversa com você. Leia-o quando estiver sozinho.",
    ],
  },
];

const filters = [
  { value: "Todos", label: "Todos" },
  ...decks.map((deck) => ({ value: deck.category, label: deck.title })),
];

/* 3. Estado e referências -------------------------------------------------- */
const app = document.querySelector("#app");
const notice = document.querySelector("#notice");
const navButtons = [...document.querySelectorAll(".nav-button")];
const themeToggle = document.querySelector('[data-action="toggle-theme"]');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

const state = {
  page: "decks",
  selectedDeckId: null,
  activeFilter: "Todos",
  search: "",
  currentDeck: null,
  currentIndex: 0,
  favorites: [],
  history: [],
  seen: {},
  trail: [],
};

/* 4. Tema claro / escuro --------------------------------------------------- */
function readStoredTheme() {
  try {
    const theme = window.localStorage.getItem(THEME_KEY);
    return theme === "light" || theme === "dark" ? theme : null;
  } catch {
    return null;
  }
}

function writeStoredTheme(theme) {
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.warn("Não foi possível salvar a preferência de tema.", error);
  }
}

function getTheme() {
  return document.documentElement.classList.contains("theme-dark")
    ? "dark"
    : "light";
}

function applyTheme(theme, { animate = false } = {}) {
  const root = document.documentElement;
  root.classList.toggle("theme-dark", theme === "dark");
  if (themeToggle)
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  if (themeColorMeta)
    themeColorMeta.setAttribute("content", THEME_COLORS[theme]);
}

function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  applyTheme(next, { animate: true });
  writeStoredTheme(next);
}

function initTheme() {
  applyTheme(readStoredTheme() ?? (systemDark.matches ? "dark" : "light"));
  systemDark.addEventListener("change", (event) => {
    if (!readStoredTheme()) {
      applyTheme(event.matches ? "dark" : "light", { animate: true });
    }
  });
}

/* 5. Persistência de Estado ------------------------------------------------ */
let noticeTimer;

function showNotice(message, { error = false } = {}) {
  notice.textContent = message;
  notice.classList.toggle("is-error", error);
  notice.hidden = false;
  window.clearTimeout(noticeTimer);
  noticeTimer = window.setTimeout(hideNotice, error ? 8000 : 2600);
}

function hideNotice() {
  window.clearTimeout(noticeTimer);
  notice.textContent = "";
  notice.hidden = true;
}

function loadSavedState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    const saved = JSON.parse(raw);
    if (saved === null || typeof saved !== "object" || Array.isArray(saved)) {
      throw new TypeError("O estado salvo precisa ser um objeto.");
    }

    const validIds = new Set(
      decks.flatMap((deck) =>
        deck.questions.map((_, index) => getQuestionId(deck.id, index)),
      ),
    );
    state.favorites = Array.isArray(saved.favorites)
      ? [...new Set(saved.favorites.filter((id) => validIds.has(id)))]
      : [];
    state.history = Array.isArray(saved.history)
      ? saved.history
          .filter(
            (entry) =>
              entry &&
              Number.isInteger(entry.questionIndex) &&
              getQuestion(entry.deckId, entry.questionIndex),
          )
          .slice(0, MAX_HISTORY_ITEMS)
      : [];
  } catch (error) {
    console.error("Falha ao carregar o estado salvo do Entre Nós.", error);
  }
}

function saveState(successMessage = "") {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        favorites: state.favorites,
        history: state.history,
      }),
    );
    if (successMessage) showNotice(successMessage);
    else hideNotice();
  } catch (error) {
    console.error("Falha ao salvar o estado do Entre Nós.", error);
  }
}

/* 6. Utilitários ----------------------------------------------------------- */
function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("pt-BR")
    .trim();
}

function getQuestionId(deckId, questionIndex) {
  return `${deckId}:${questionIndex}`;
}

function getQuestion(deckId, questionIndex) {
  const deck = decks.find((item) => item.id === deckId);
  if (!deck || !deck.questions[questionIndex]) return null;
  return { deck, question: deck.questions[questionIndex], questionIndex };
}

function isSaved(deckId, questionIndex) {
  return state.favorites.includes(getQuestionId(deckId, questionIndex));
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Data indisponível";
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getDailyPick() {
  const now = new Date();
  const day = Math.floor(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000,
  );
  const deck = decks[day % decks.length];
  return { deck, questionIndex: (day * 7) % deck.questions.length };
}

/* 7. Componentes ----------------------------------------------------------- */
const SVG_NS = "http://www.w3.org/2000/svg";
const ICONS = {
  heart: [
    "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  ],
  back: ["M19 12H5", "m12 19-7-7 7-7"],
  prev: ["m15 18-6-6 6-6"],
  shuffle: ["M16 3h5v5", "M4 20 21 3", "M21 16v5h-5", "m15 15 6 6", "M4 4l5 5"],
  search: [
    "M10.8 4a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6z",
    "m16 16 4.5 4.5",
  ],
  trash: ["M3 6h18", "M8 6V4h8v2", "M19 6l-1 14H6L5 6"],
  close: ["M18 6 6 18", "m6 6 12 12"],
  chevronRight: ["m9 18 6-6-6-6"],
  maximize: ["M15 3h6v6", "M9 21H3v-6", "M21 3l-7 7", "M3 21l7-7"],
  menu: ["M4 12h16M4 6h16M4 18h16"],
};

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function createIcon(name) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  ICONS[name].forEach((d) => {
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", d);
    svg.append(path);
  });
  return svg;
}

function createButton({
  label,
  action,
  className = "secondary-button",
  icon,
  attrs = {},
  data = {},
}) {
  const button = createElement("button", className);
  button.type = "button";
  button.dataset.action = action;
  if (icon) button.append(createIcon(icon));
  if (label) button.append(createElement("span", "", label));
  Object.entries(attrs).forEach(([name, value]) =>
    button.setAttribute(name, value),
  );
  Object.entries(data).forEach(([name, value]) => {
    button.dataset[name] = String(value);
  });
  return button;
}

function createPage(className = "page") {
  return createElement("section", className);
}

function createPageHeading({ eyebrow, title, description, action }) {
  const heading = createElement("div", "page-heading");
  const text = createElement("div");
  if (eyebrow) text.append(createElement("p", "eyebrow", eyebrow));
  text.append(createElement("h1", "", title));
  if (description) text.append(createElement("p", "", description));
  heading.append(text);
  if (action) heading.append(action);
  return heading;
}

function createEmptyState(title, message) {
  const empty = createElement("section", "empty-state");
  const mark = createElement("span", "empty-mark", "…");
  empty.append(
    mark,
    createElement("h2", "", title),
    createElement("p", "", message),
  );
  return empty;
}

function syncSaveButtonClass(button, saved) {
  button.classList.toggle("is-saved", saved);
  button.setAttribute("aria-pressed", String(saved));
}

/* 8. Telas ----------------------------------------------------------------- */
function updateNavigation(page) {
  const navPage = ["question", "deck"].includes(page) ? "decks" : page;
  navButtons.forEach((button) => {
    const active = button.dataset.page === navPage;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

function mount(page, navPage, { keepScroll = false } = {}) {
  app.replaceChildren(page);
  updateNavigation(navPage);
  if (!keepScroll) window.scrollTo(0, 0);
}

/* Home ---------------------------------------------------------------------- */
function renderHome() {
  document.body.style.backgroundColor = "";
  const page = createPage();
  const hero = createElement("section", "hero");
  hero.append(
    createElement("h1", "hero-title", "Entre Nós"),
    createElement(
      "p",
      "hero-copy",
      "Um convite para conversas profundas e conexão genuína.",
    ),
  );
  page.append(hero, createDailyPrompt(), createDeckSection());
  mount(page, "decks");
}

function createDailyPrompt() {
  const { deck, questionIndex } = getDailyPick();
  const prompt = createElement("section", "today-card");
  prompt.style.borderColor = deck.themeColor;
  const text = createElement("div");
  text.append(
    createElement("p", "eyebrow", "Pergunta de hoje"),
    createElement("h2", "today-question", deck.questions[questionIndex]),
    createElement("p", "today-deck", `Baralho ${deck.title}`),
  );
  const mark = createElement("span", "today-mark", "?");
  mark.setAttribute("aria-hidden", "true");
  mark.style.color = deck.themeColor;
  prompt.append(
    text,
    mark,
    createButton({
      label: "Puxar esta pergunta",
      action: "daily-question",
      className: "primary-button",
    }),
  );
  return prompt;
}

function createDeckSection() {
  const section = createElement("section", "deck-section");
  const heading = createElement("div", "section-heading");
  heading.append(
    createElement("h2", "section-title", "Escolha seu caminho"),
    createElement("span", "section-note", "Seis fases, sem resposta certa"),
  );

  const searchRow = createElement("div", "search-row");
  const searchBox = createElement("label", "search-box");
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Buscar tema ou pergunta";
  input.value = state.search;
  input.autocomplete = "off";
  input.enterKeyHint = "search";
  input.dataset.action = "search";
  searchBox.append(
    createIcon("search"),
    createElement("span", "visually-hidden", "Buscar baralhos e perguntas"),
    input,
  );
  const count = createElement("span", "search-count");
  count.dataset.role = "search-count";
  count.setAttribute("aria-live", "polite");
  searchRow.append(searchBox, count);

  const chips = createElement("div", "chips");
  chips.setAttribute("role", "group");
  chips.setAttribute("aria-label", "Filtrar baralhos por fase");
  filters.forEach(({ value, label }) => {
    const active = state.activeFilter === value;
    chips.append(
      createButton({
        label,
        action: "category",
        className: `chip${active ? " is-active" : ""}`,
        attrs: { "aria-pressed": String(active) },
        data: { category: value },
      }),
    );
  });

  const results = createElement("div", "deck-grid");
  results.dataset.role = "deck-results";
  section.append(heading, searchRow, chips, results);
  renderDeckCards(results, count);
  return section;
}

function getVisibleDecks() {
  const terms = normalizeText(state.search).split(/\s+/).filter(Boolean);
  return decks.filter((deck) => {
    const filterMatches =
      state.activeFilter === "Todos" || deck.category === state.activeFilter;
    const searchable = normalizeText(
      `${deck.title} ${deck.category} ${deck.description} ${deck.questions.join(" ")}`,
    );
    return filterMatches && terms.every((term) => searchable.includes(term));
  });
}

function renderDeckCards(container, countElement) {
  const visible = getVisibleDecks();
  countElement.textContent = `${visible.length} ${visible.length === 1 ? "baralho" : "baralhos"}`;
  container.replaceChildren();

  if (visible.length === 0) {
    container.append(
      createEmptyState(
        "Nenhum baralho por aqui",
        "Tente outra palavra ou escolha uma fase diferente.",
      ),
    );
    return;
  }

  visible.forEach((deck, idx) => {
    const card = createElement("article", "deck-card-phase");
    card.style.backgroundColor = deck.themeColor;

    const top = createElement("div", "deck-phase-top");
    top.append(
      createElement(
        "span",
        "deck-phase-badge",
        `${deck.questions.length} perguntas`,
      ),
    );

    const content = createElement("div", "deck-phase-content");
    content.append(
      createElement("p", "deck-phase-desc", deck.description),
      createElement("h3", "deck-phase-title", deck.title.toUpperCase()),
    );

    const navBar = createElement("div", "deck-phase-navbar");
    const prevBtn = createButton({
      action: "prev-phase",
      className: "phase-arrow-btn",
      icon: "prev",
      attrs: { "aria-label": "Fase anterior" },
      data: { deckId: decks[(idx - 1 + decks.length) % decks.length].id },
    });

    const pill = createElement(
      "div",
      "category-pill-display",
      deck.title.toUpperCase(),
    );

    const nextBtn = createButton({
      action: "next-phase",
      className: "phase-arrow-btn",
      icon: "chevronRight",
      attrs: { "aria-label": "Próxima fase" },
      data: { deckId: decks[(idx + 1) % decks.length].id },
    });

    navBar.append(prevBtn, pill, nextBtn);

    const openBtn = createButton({
      label: "Abrir baralho",
      action: "open-deck",
      className: "text-button stretched",
      attrs: { "aria-label": `Abrir o baralho ${deck.title}` },
      data: { deckId: deck.id },
    });

    card.append(navBar, top, content, openBtn);
    container.append(card);
  });
}

/* Baralho (Lista de Perguntas) --------------------------------------------- */
function renderDeck(deckId) {
  document.body.style.backgroundColor = "";
  const deck = decks.find((item) => item.id === deckId);
  if (!deck) {
    showNotice("Esse baralho não está disponível.", { error: true });
    state.page = "decks";
    render();
    return;
  }

  state.selectedDeckId = deck.id;
  const page = createPage();

  const backRow = createElement("div", "back-row");
  backRow.append(
    createButton({
      label: "Baralhos",
      action: "home",
      className: "back-button",
      icon: "back",
      attrs: { "aria-label": "Voltar aos baralhos" },
    }),
  );

  const sectionHeading = createElement("div", "section-heading");
  sectionHeading.append(
    createElement("h2", "section-title", "Cartas deste baralho"),
    createButton({
      label: "Iniciar em ordem",
      action: "start-single-card",
      className: "secondary-button start-all-btn",
      icon: "shuffle",
      data: { deckId: deck.id, index: 0 },
    }),
  );

  const list = createElement("div", "question-list");
  deck.questions.forEach((question, index) => {
    const row = createElement("article", "question-row");
    const body = createElement("div", "question-body");
    body.append(createElement("p", "question-text", question));
    row.append(
      createElement(
        "span",
        "question-number",
        String(index + 1).padStart(2, "0"),
      ),
      body,
    );
    if (isSaved(deck.id, index))
      row.append(createSavedMark?.() || createElement("span"));
    row.append(
      createButton({
        label: "Abrir",
        action: "start-single-card",
        className: "text-button stretched",
        attrs: { "aria-label": `Abrir carta ${index + 1}` },
        data: { deckId: deck.id, index },
      }),
    );
    list.append(row);
  });

  page.append(
    backRow,
    createPageHeading({
      eyebrow: deck.category,
      title: deck.title,
      description: deck.description,
    }),
    sectionHeading,
    list,
  );
  mount(page, "deck");
}

/* Visualização de Carta Única com Gestos de Deslizar (Swipe) -------------- */
function renderSingleCard() {
  if (!state.currentDeck) {
    state.page = "decks";
    render();
    return;
  }

  const deck = state.currentDeck;
  const index = state.currentIndex;
  const total = deck.questions.length;
  const question = deck.questions[index];

  document.body.style.backgroundColor = deck.themeColor;

  const page = createPage("page single-card-view");
  const stack = createElement("div", "card-stack-game");

  const navBar = createElement("div", "deck-phase-navbar carousel-top-nav");
  const prevCategoryBtn = createButton({
    action: "category-prev",
    className: "phase-arrow-btn",
    icon: "prev",
    attrs: { "aria-label": "Categoria anterior" },
  });

  const categorySelector = createElement("button", "category-pill-button");
  categorySelector.type = "button";
  categorySelector.dataset.action = "open-category-selector";
  categorySelector.append(
    createElement("span", "", deck.title.toUpperCase()),
    createIcon("chevronRight"),
  );

  const nextCategoryBtn = createButton({
    action: "category-next",
    className: "phase-arrow-btn",
    icon: "chevronRight",
    attrs: { "aria-label": "Próxima categoria" },
  });

  navBar.append(prevCategoryBtn, categorySelector, nextCategoryBtn);

  const card = createElement("article", "question-card-game");

  const remaining = Math.max(0, total - (index + 1));
  const counterText =
    remaining === 0
      ? "Última carta"
      : remaining === 1
        ? "Falta 1 carta"
        : `Faltam ${remaining} cartas`;

  const counterInfo = createElement("div", "question-counter-info");
  counterInfo.append(
    createElement("span", "", `Carta ${index + 1} de ${total}`),
    createElement("span", "sep", "·"),
    createElement("span", "", counterText),
  );

  const title = createElement("h1", "card-question-text", question);
  title.style.outline = "none";

  const cardFooter = createElement("div", "question-card-footer-bar");
  cardFooter.style.backgroundColor = deck.themeColor;
  cardFooter.textContent = deck.title.toUpperCase();

  card.append(counterInfo, title, cardFooter);

  // Adiciona a lógica de deslizar o dedo (Swipe) na carta
  let touchStartX = 0;
  let touchEndX = 0;

  card.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  card.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true },
  );

  function handleSwipe() {
    const threshold = 50; // Distância mínima em pixels para considerar o swipe
    if (touchEndX < touchStartX - threshold) {
      // Deslizou para a esquerda -> Próxima carta
      singleNext();
    }
    if (touchEndX > touchStartX + threshold) {
      // Deslizou para a direita -> Carta anterior
      singlePrev();
    }
  }

  const actionsBar = createElement("div", "game-actions-bar");

  const saveButton = createButton({
    action: "toggle-favorite-single",
    className: "game-round-btn",
    icon: "heart",
    data: { index },
  });
  syncSaveButtonClass(saveButton, isSaved(deck.id, index));

  const nextButton = createButton({
    action: "single-next",
    className: "game-round-btn",
    icon: "maximize",
    attrs: { "aria-label": "Próxima carta" },
  });

  const prevButton = createButton({
    action: "single-prev",
    className: "game-round-btn",
    icon: "back",
    attrs: { "aria-label": "Carta anterior" },
  });
  if (state.trail.length < 2) prevButton.disabled = true;

  actionsBar.append(prevButton, nextButton, saveButton);
  stack.append(navBar, card, actionsBar);
  page.append(stack);
  mount(page, "question");
}

/* Modal seletor rápido de categoria */
function openCategorySelectorModal() {
  const existing = document.querySelector(".category-modal-overlay");
  if (existing) existing.remove();

  const overlay = createElement("div", "category-modal-overlay");
  const modal = createElement("div", "category-modal");

  modal.append(createElement("h3", "", "Escolher Categoria"));
  const list = createElement("div", "category-modal-list");

  decks.forEach((deck) => {
    const btn = createButton({
      label: deck.title,
      action: "select-category-modal",
      className: "secondary-button category-modal-btn",
      data: { deckId: deck.id },
    });
    if (deck.id === state.selectedDeckId) btn.classList.add("is-active");
    list.append(btn);
  });

  const closeBtn = createButton({
    label: "Fechar",
    action: "close-category-modal",
    className: "secondary-button",
  });

  modal.append(list, closeBtn);
  overlay.append(modal);
  document.body.append(overlay);
}

function closeCategorySelectorModal() {
  const overlay = document.querySelector(".category-modal-overlay");
  if (overlay) overlay.remove();
}

/* Histórico e Salvas --------------------------------------------------------- */
function createListRow({ badge, deck, question, meta, questionIndex, extra }) {
  const row = createElement("article", "question-row");
  row.append(createElement("span", "question-number", badge));
  const body = createElement("div", "question-body");
  body.append(createElement("p", "question-category", deck.title));
  body.append(createElement("p", "question-text", question));
  if (meta) body.append(createElement("p", "history-meta", meta));
  row.append(body);
  row.append(
    createButton({
      label: "Abrir",
      action: "start-single-card",
      className: "text-button stretched",
      attrs: { "aria-label": `Abrir pergunta do baralho ${deck.title}` },
      data: { deckId: deck.id, index: questionIndex },
    }),
  );
  if (extra) row.append(extra);
  return row;
}

function renderHistory() {
  document.body.style.backgroundColor = "";
  const page = createPage();
  const clearButton =
    state.history.length > 0
      ? createButton({
          label: "Limpar histórico",
          action: "clear-history",
          icon: "trash",
        })
      : null;
  page.append(
    createPageHeading({
      title: "Histórico",
      description: "As perguntas que já passaram pela sua conversa.",
      action: clearButton,
    }),
  );

  if (state.history.length === 0) {
    page.append(
      createEmptyState(
        "Nenhuma carta aberta ainda",
        "Escolha um baralho e puxe uma carta. As perguntas abertas aparecem aqui.",
      ),
    );
  } else {
    const list = createElement("div", "history-list");
    state.history.forEach((entry) => {
      const selected = getQuestion(entry.deckId, entry.questionIndex);
      if (!selected) return;
      list.append(
        createListRow({
          badge: "↺",
          deck: selected.deck,
          question: selected.question,
          meta: formatDate(entry.viewedAt),
          questionIndex: entry.questionIndex,
        }),
      );
    });
    page.append(list);
  }
  mount(page, "history");
}

function renderFavorites({ keepScroll = false } = {}) {
  document.body.style.backgroundColor = "";
  const page = createPage();
  page.append(
    createPageHeading({
      title: "Perguntas salvas",
      description:
        "Um cantinho para guardar as perguntas que você quer levar para outra conversa.",
    }),
  );

  const saved = state.favorites
    .map((id) => {
      const [deckId, rawIndex] = id.split(":");
      const selected = getQuestion(deckId, Number(rawIndex));
      return selected ? { ...selected, id } : null;
    })
    .filter(Boolean);

  if (saved.length === 0) {
    page.append(
      createEmptyState(
        "Ainda não há perguntas salvas",
        "Toque em Salvar numa carta para encontrá-la aqui depois.",
      ),
    );
  } else {
    const list = createElement("div", "question-list");
    saved.forEach(({ deck, question, questionIndex, id }) => {
      list.append(
        createListRow({
          badge: "♥",
          deck,
          question,
          questionIndex,
          extra: createButton({
            action: "remove-favorite",
            className: "icon-button icon-only",
            icon: "close",
            attrs: { "aria-label": "Remover das perguntas salvas" },
            data: { favoriteId: id },
          }),
        }),
      );
    });
    page.append(list);
  }
  mount(page, "favorites", { keepScroll });
}

function render() {
  window.clearTimeout(state.transitionTimer);
  closeCategorySelectorModal();
  switch (state.page) {
    case "deck":
      document.body.style.backgroundColor = "";
      renderDeck(state.selectedDeckId);
      break;
    case "history":
      renderHistory();
      break;
    case "favorites":
      renderFavorites();
      break;
    case "question":
      renderSingleCard();
      break;
    default:
      document.body.style.backgroundColor = "";
      renderHome();
  }
}

/* 9. Fluxo de Navegação ---------------------------------------------------- */
function navigateTo(page) {
  state.page = page;
  if (page === "decks") state.search = "";
  render();
  app.focus({ preventScroll: true });
}

function openDeck(deckId) {
  state.selectedDeckId = deckId;
  state.page = "deck";
  render();
  app.focus({ preventScroll: true });
}

function startSingleCard(deckId, index = 0) {
  const deck = decks.find((item) => item.id === deckId);
  if (!deck) return;
  state.selectedDeckId = deck.id;
  state.currentDeck = deck;
  state.currentIndex = index;
  state.page = "question";
  state.trail = [{ deckId: deck.id, index }];

  addHistoryEntry(deck.id, index);
  renderSingleCard();
}

function singleNext() {
  if (!state.currentDeck) return;
  const deck = state.currentDeck;

  if (state.currentIndex < deck.questions.length - 1) {
    state.currentIndex++;
    state.trail.push({ deckId: deck.id, index: state.currentIndex });
    addHistoryEntry(deck.id, state.currentIndex);
    renderSingleCard();
  } else {
    const currentDeckIndex = decks.findIndex((d) => d.id === deck.id);
    const nextDeckIndex = (currentDeckIndex + 1) % decks.length;
    const nextDeck = decks[nextDeckIndex];
    startSingleCard(nextDeck.id, 0);
  }
}

function singlePrev() {
  if (!state.currentDeck || state.trail.length < 2) return;
  state.trail.pop();
  const previous = state.trail[state.trail.length - 1];

  const deck = decks.find((d) => d.id === previous.deckId);
  if (deck) {
    state.currentDeck = deck;
    state.selectedDeckId = deck.id;
  }

  state.currentIndex = previous.index;
  renderSingleCard();
}

function categoryNext() {
  if (!state.currentDeck) return;
  const currentDeckIndex = decks.findIndex(
    (d) => d.id === state.currentDeck.id,
  );
  const nextDeckIndex = (currentDeckIndex + 1) % decks.length;
  startSingleCard(decks[nextDeckIndex].id, 0);
}

function categoryPrev() {
  if (!state.currentDeck) return;
  const currentDeckIndex = decks.findIndex(
    (d) => d.id === state.currentDeck.id,
  );
  const prevDeckIndex = (currentDeckIndex - 1 + decks.length) % decks.length;
  startSingleCard(decks[prevDeckIndex].id, 0);
}

function addHistoryEntry(deckId, questionIndex) {
  state.history.unshift({
    deckId,
    questionIndex,
    viewedAt: new Date().toISOString(),
  });
  state.history = state.history.slice(0, MAX_HISTORY_ITEMS);
  saveState();
}

function toggleFavoriteSingle(index) {
  if (!state.currentDeck) return;
  const deck = state.currentDeck;
  const id = getQuestionId(deck.id, index);
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter((fav) => fav !== id);
    showNotice("Pergunta removida das salvas.");
  } else {
    state.favorites.push(id);
    showNotice("Pergunta salva.");
  }
  saveState();
  renderSingleCard();
}

function clearHistory() {
  if (!window.confirm("Apagar todo o histórico deste navegador?")) return;
  state.history = [];
  saveState("Histórico apagado.");
  renderHistory();
  app.focus({ preventScroll: true });
}

function selectFilter(button) {
  state.activeFilter = button.dataset.category;
  const section = button.closest(".deck-section");
  section.querySelectorAll(".chip").forEach((chip) => {
    const active = chip.dataset.category === state.activeFilter;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
  renderDeckCards(
    section.querySelector('[data-role="deck-results"]'),
    section.querySelector('[data-role="search-count"]'),
  );
}

/* 10. Eventos -------------------------------------------------------------- */
const actions = {
  home: (_data, event) => {
    event.preventDefault();
    navigateTo("decks");
  },
  "toggle-theme": () => toggleTheme(),
  "open-deck": ({ deckId }) => openDeck(deckId || state.selectedDeckId),
  "start-single-card": ({ deckId, index }) =>
    startSingleCard(deckId || state.selectedDeckId, Number(index ?? 0)),
  "single-next": () => singleNext(),
  "single-prev": () => singlePrev(),
  "category-next": () => categoryNext(),
  "category-prev": () => categoryPrev(),
  "daily-question": () => {
    const { deck, questionIndex } = getDailyPick();
    startSingleCard(deck.id, questionIndex);
  },
  "toggle-favorite-single": ({ index }) => toggleFavoriteSingle(Number(index)),
  "clear-history": () => clearHistory(),
  category: (_data, _event, button) => selectFilter(button),
  "open-category-selector": () => openCategorySelectorModal(),
  "close-category-modal": () => closeCategorySelectorModal(),
  "select-category-modal": ({ deckId }) => {
    closeCategorySelectorModal();
    startSingleCard(deckId, 0);
  },
  "prev-phase": ({ deckId }, event) => {
    event.stopPropagation();
    openDeck(deckId);
  },
  "next-phase": ({ deckId }, event) => {
    event.stopPropagation();
    openDeck(deckId);
  },
};

navButtons.forEach((button) => {
  button.addEventListener("click", () => navigateTo(button.dataset.page));
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  const handler = button && actions[button.dataset.action];
  if (handler) handler(button.dataset, event, button);

  if (event.target.classList.contains("category-modal-overlay")) {
    closeCategorySelectorModal();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.dataset.action !== "search") return;
  state.search = event.target.value;
  const section = event.target.closest(".deck-section");
  renderDeckCards(
    section.querySelector('[data-role="deck-results"]'),
    section.querySelector('[data-role="search-count"]'),
  );
});

document.addEventListener("keydown", (event) => {
  if (state.page !== "question" || event.defaultPrevented) return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (
    event.target instanceof Element &&
    event.target.closest("input, textarea, select")
  )
    return;
  if (event.key === "ArrowRight") {
    event.preventDefault();
    singleNext();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    singlePrev();
  } else if (event.key === "Escape") {
    openDeck(state.selectedDeckId);
  }
});

initTheme();
loadSavedState();
render();
