/* ==========================================================================
   Entre Nós, Interweave, Finding Myself & Isso Não É um Date — app.js (Completo)
   ========================================================================== */
"use strict";

const STORAGE_KEY = "entre-nos-state-v29";
const THEME_KEY = "entre-nos-theme";

const mainDecks = [
  {
    id: "entre-nos",
    title: "This Is Not A Game",
    subtitle: "Para todas as conexões",
    category: "Tópicos Gerais",
    totalPhases: 6,
    totalQuestions: 131,
    themeColor: "#782749",
    description:
      "Um jogo dinâmico para quebrar o gelo e gerar conversas profundas.",
    phases: [
      {
        id: "fase-0-construcao",
        phaseLabel: "Fase 0",
        title: "Construção",
        themeColor: "#6b8b7e",
        description:
          "Desconstrua as primeiras impressões e explore as idealizações iniciais.",
        questions: [
          "Qual a primeira impressão que você teve sobre mim?",
          "Você acha que eu já tive meu coração partido?",
          "Você acha que eu me apaixono rápido?",
          "Eu pareço intimidar as pessoas?",
          "Quando eu era criança, o que você acha que eu queria ser?",
          "Um valor que você acredita ser muito importante para mim é _______",
          "Qual banda você acha que eu mais gosto?",
          "Um defeito que eu pareço ter.",
          "Um personagem de televisão que eu poderia ser.",
          "Qual profissão parece parecida comigo?",
          "Imagine que vocês tenham as senhas do Instagram um do outro. Como você escreveria a biografia dessa pessoa? (crie em 1 minuto e compartilhe. Se quiser, você pode alterar a biografia.)",
          "Você acha que eu gostaria de ser famoso?",
          "Que aluno você acredita que eu fui na escola?",
          "O que minha linguagem corporal está comunicando agora?",
          "Se eu perdesse meu celular e todo meu dinheiro em outro país, o que você acha que eu faria?",
          "Se eu fosse professor, que matéria você acha que eu daria? Pode ser qualquer matéria, até mesmo aquelas que (ainda) não existem nas escolas.",
          "Se eu fosse demitido hoje, por qual motivo você acha que seria?",
          "Ganhei 1.000 dólares para gastar no shopping. Em qual loja eu iria primeiro?",
          "Qual você acha que é a primeira coisa que eu faço quando estou com raiva?",
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
        phaseLabel: "Fase 1",
        title: "Revelação",
        themeColor: "#84475c",
        description:
          "Revele quem você realmente é e exponha o que é importante para você.",
        questions: [
          "Qual é o seu maior motivo para viver agora? O que te anima a acordar?",
          "Qual é o nome do seu pai e o que você mais admira nele?",
          "Imagine que você ganhou o prêmio de melhor pessoa do mundo. Diga por que você merece.",
          "Existe algo que você faz todos os dias que não condiz com a pessoa que você quer ser no futuro?",
          "Qual foi a maior demonstração de amor que você já demonstrou na vida?",
          "Você recebeu 3 desejos do gênio da lâmpada. Comece a realizá-los em 3 segundos.",
          "Imagine que você vai pendurar um quadro enorme em casa. Que frase ou desenho você escolheria?",
          "Em um dia triste, qual é o seu segredo para torná-lo um pouco melhor?",
          "Se você pudesse inventar um feriado, qual seria o motivo? E qual seria a data?",
          "Quem na sua vida faz você se sentir muito confortável sendo exatamente quem você é?",
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
          "O que você mais gostava de fazer quando criança?",
          "Como você realmente está se sentindo hoje?",
          "Conte-nos sobre um dia em que você fez a diferença na vida de alguém.",
        ],
      },
      {
        id: "fase-2-coragem",
        phaseLabel: "Fase 2",
        title: "Coragem",
        themeColor: "#b26b48",
        description:
          "Crie conexões corajosas sem medo de mostrar suas imperfeições.",
        questions: [
          "Quantos grandes amores você acredita que uma pessoa tem na vida?",
          "Você é muito exigente consigo mesmo? Se sim, acredita que isso é algo positivo ou negativo?",
          "O que torna alguém irritante?",
          "Quem na sua família você tem mais medo de perder? Por quê?",
          "Qual foi sua maior decepção até agora?",
          "O que você se sente mais pressionado a fazer ou ser hoje?",
          "Qual é a lição mais poderosa que você aprendeu com um relacionamento romântico fracassado?",
          "Do que você mais sente vergonha alheia?",
          "O que você ainda está tentando provar para si mesmo?",
          "Qual foi o evento mais inexplicável que já aconteceu na sua vida?",
          "O que a versão infantil de você pensaria sobre a pessoa que você é hoje?",
          "O que o leva a um estado de êxtase?",
          "Encontre três palavras que me descrevam.",
          "Qual é o nome do seu primeiro amor e por que você se apaixonou por ele/ela?",
          "Como você gostaria de ser lembrado depois de morrer?",
          "Você acha que a imagem que você tem de si mesmo é a mesma que os outros percebem?",
          "Escreva as três coisas que cada um mais admira no outro.",
          "Se você pudesse mudar alguma coisa na maneira como foi criado, o que seria?",
          "Que momento você gostaria de reviver?",
          "Que métodos você usa para escapar de coisas que acha difíceis de lidar?",
          "Há alguma sensação ou sentimento que você sente falta de experimentar na sua vida hoje?",
          "Diga três coisas que você acredita que temos em comum.",
          "O que você diria hoje para a última pessoa com quem você se envolveu romanticamente?",
          "Qual é o maior desafio que você enfrenta na vida hoje?",
          "O que maturidade significa para você?",
        ],
      },
      {
        id: "fase-3-confianca",
        phaseLabel: "Fase 3",
        title: "Confiança",
        themeColor: "#5b638a",
        description:
          "Suprima barreiras para construir uma verdadeira intimidade.",
        questions: [
          "Com base em todas as minhas respostas até agora, que conselho você me daria?",
          "O que você acha que eu deveria saber sobre mim mesmo que talvez eu não esteja enxergando?",
          "Houve algo que eu disse hoje que fez seus olhos brilharem?",
          "Qual você acredita ser minha maior fraqueza?",
          "Você tem alguma saudade da qual tem vergonha de falar?",
          "Qual foi a última mentira que você contou? Há algo em que você precisa ser mais consistente?",
          "Com base no que você aprendeu sobre mim, você acredita que minhas mídias sociais refletem quem eu sou?",
          "Com base na nossa conversa, recomende um livro que eu preciso começar a ler urgentemente.",
          "Crie uma pergunta para todos os presentes. Este é o momento de perguntar o que você sempre quis.",
          "O que você acha que preciso deixar de lado na minha vida? Me dê uma receita para sair da zona de conforto.",
          "Você acredita que todos têm uma missão? Se sim, acha que encontrou a sua?",
          "O que você acredita que não valorizou o suficiente?",
          "Qual foi a melhor decisão que você já tomou na vida?",
          "Você carrega algum sentimento de culpa? Por quê?",
          "Fale sobre um amigo que não está mais na sua vida, mas de quem você sente falta.",
          "Confesse um preconceito.",
          "Diga algo que você nunca teve coragem de dizer a ninguém.",
          "Se você pudesse me dar algum conselho, qual seria?",
          "Descreva como você me apresentaria a um estranho.",
          "Você tiene medo da morte? O que você acredita que acontece quando morremos?",
          "Por que você acha que nossos caminhos se cruzaram nesta vida?",
          "Conte-me sobre alguém que entrou na sua vida e ajudou você a se tornar uma pessoa melhor hoje.",
          "Existe alguma crença ou padrão na sua família que você gostaria de redefinir?",
          "O que fez você se sentir mais conectado comigo hoje?",
          "Qual elogio você gostaria de receber com mais frequência?",
        ],
      },
      {
        id: "fase-4-conexao",
        phaseLabel: "Fase 4",
        title: "Conexão",
        themeColor: "#684577",
        description: "Pratique o afeto e interações dinâmicas e especiais.",
        questions: [
          "Se você pudesse enviar uma única mensagem para o mundo inteiro agora, o que diria?",
          "Encontre uma flor e dê a um estranho dizendo para tornar o dia dele mais brilhante.",
          "Deixe que a pessoa à sua frente escolha alguém no seu Instagram para você enviar uma mensagem de elogio.",
          "Se você estivesse em um barco e todos estivessem se afogando, por que salvaria cada pessoa?",
          "Todos devem criar um empreendimento para a pessoa ao lado.",
          "Exercício do espelho: todos devem ficar em frente ao espelho e se elogiar.",
          "Competição de abraços: a primeira pessoa a receber um abraço de um estranho vence.",
          "Para solteiros: envie uma mensagem para sua paixão no Instagram.",
          "Deixem de seguir alguém que não traz positividade às suas redes sociais.",
          "Ligue para um membro da família e expresse seu afeto por essa pessoa.",
          "Crie uma música ou poema com o nome da pessoa à sua frente e cante para ela.",
          "Compartilhe uma regra que você gosta de quebrar.",
          "Liste as 5 coisas mais incríveis que aconteceram com você hoje no WhatsApp.",
          "Coloque uma venda nos olhos e dê um abraço em alguém.",
          "A pessoa à sua esquerda agora é seu Mestre. Faça o que ela ordenar por 3 minutos.",
          "Se a felicidade fosse uma moeda nacional, qual trabalho o tornaria muito rico?",
          "Qual é o maior desafio que você enfrenta na vida hoje?",
          "Há algo que você gostaria de fazer, mas não fez por achar que é muito velho?",
          "Compartilhe sua melhor tática de flerte. Mostre para todo mundo.",
          "Pense em alguém que você inveja e diga o que admira nessa pessoa.",
          "Compartilhe um ato de coragem recente que jamais imaginaria que faria.",
          "O que você faz rotineiramente e não gosta? Encontrem uma maneira de mudar isso.",
        ],
      },
      {
        id: "fase-5-conclusao",
        phaseLabel: "Fase 5",
        title: "Conclusão",
        themeColor: "#395568",
        description: "Desafio final e reflexão sobre a jornada.",
        questions: [
          "O que mudou em você depois do jogo? Escolha uma palavra ou frase que reflita algo bom que você aprendeu.",
          "Escreva um bilhete para a pessoa que teve essa troca com você. Leia-o quando estiver sozinho.",
        ],
      },
    ],
  },
  {
    id: "issonaoedate",
    title: "Isso Não É um Date",
    subtitle: "Para dates e encontros",
    category: "Dates & Romance",
    totalPhases: 3,
    totalQuestions: 58,
    themeColor: "#D97706",
    description:
      "Perguntas autênticas e envolventes divididas em 3 fases para dates e encontros inesquecíveis.",
    phases: [
      {
        id: "date-fase-1",
        phaseLabel: "Fase 1",
        title: "Quebra-Gelo",
        themeColor: "#B45309",
        description: "Primeiras impressões e descontração (Cartas 0 a 20).",
        questions: [
          "Qual é a comida que, quando você come, se sente abraçado?",
          "Qual seu lugar favorito no mundo? (Ambos respondem fazendo mímica, um de cada vez. Cronometrem e vejam quem acerta mais rápido.)",
          "O que faz você dar Like no perfil de alguém NO TINDER logo de cara? E o que faz você dar Nope?",
          "Existe algo que você gostaria de fazer, mas sente medo de tentar?",
          "Como seria um date perfeito para você? (Lembre-se de que vocês podem transformar isso em realidade).",
          'Complete a frase: "Trabalho para mim é: __________".',
          "Qual é a primeira coisa que está na sua lista de metas deste ano? E a última?",
          "Além do seu trabalho e/ou faculdade, sobre o que você gosta de aprender e ler?",
          "Quanto tempo você acha que demorei para me arrumar hoje? (Contem até 10 e falem em voz alta para ver quem chegou mais perto de acertar.)",
          "O que você mais gosta de fazer quando não tem ninguém por perto?",
          "Quem é a pessoa mais legal do mundo para você?",
          "O que te fez sorrir hoje?",
          "Quais são as suas três coisas favoritas sobre você?",
          "Com quem na sua vida você sente que pode ser o seu eu mais verdadeiro? Explique.",
          "Conte qual foi o date de Tinder mais inusitado da sua vida, depois conte qual foi o melhor. (Compartihem suas histórias e depois decidam quem teve a melhor experiência.)",
          "Quais são seus emojis mais recentes? O que eles dizem sobre você?",
          "O que você faz hoje para se tornar a pessoa que deseja ser? Quais são as atitudes que considera que mais te evoluem como pessoa?",
          "Qual conselho ou frase você leva para sua vida?",
          "Qual foi a coisa mais legal que alguém já fez por você? Você já retribuiu isso para outras pessoas de alguma forma?",
          "Como você acha que seus amigos te descreveriam em uma palavra?",
          "Se apresente para mim sem falar sua profissão, seus estudos, seus hobbies ou sua nacionalidade.",
        ],
      },
      {
        id: "date-fase-2",
        phaseLabel: "Fase 2",
        title: "Aprofundando",
        themeColor: "#D97706",
        description: "Conexões mais profundas e perspetivas (Cartas 21 a 41).",
        questions: [
          "Você sente falta de alguém hoje? O que mais te faz sentir saudade dessa pessoa?",
          "O que você achou da primeira mensagem que te enviei?",
          "Do que você tem mais orgulho na sua jornada?",
          "Em quantos relacionamentos você já esteve? Quantas vezes você acha que realmente se apaixonou?",
          "Me conte algo que você normalmente não falaria em primeiros encontros. (Permissão para ser vulnerável)",
          "De zero a dez, quanto você acredita que o trabalho é um tópico importante no relacionamento? Explique-se.",
          "Você acha que está bem resolvido com seu passado amoroso?",
          "Ghosting: você já passou por isso? O que você pensa sobre isso?",
          "E se você fosse escrever minha bio no Tinder, o que você escreveria?",
          "Qual é a sua linguagem de amor mais forte? ( ) Tempo de qualidade ( ) Dar presentes ( ) Atos de serviço ( ) Toque físico",
          "O que mais te chamou atenção em mim?",
          "Compartilhe comigo três dicas para curar um coração partido.",
          "Qual conselho você daria a você de cinco anos atrás?",
          "Me conte algo que você aprendeu sobre você recentemente.",
          "Complete: Eu sei que eu realmente gosto de alguém quando ________.",
          "Compartilhe uma loucura de amor que você gostaria de fazer mas ainda não fez.",
          "Complete a frase: Família para mim é ________.",
          "Qual foi a última vez que as coisas não saíram como você imaginava? Como você lidou com isso?",
          "O que a solteirice te ensinou sobre você?",
          "Qual foi sua primeira impressão sobre mim? Não vale pensar um, dois, três e vai!",
          "O que seu bloco de notas do celular diz sobre você? Caso se sinta confortável, compartilhe algumas de suas notas.",
        ],
      },
      {
        id: "date-fase-3",
        phaseLabel: "Fase 3",
        title: "Desafios e Dinâmicas",
        themeColor: "#92400E",
        description:
          "Dinâmicas e interações para coroar o encontro (Cartas 42 a 58).",
        questions: [
          "Qual foi o momento mais decisivo ou importante na sua vida?",
          "Você já considerou a possibilidade de estar em um relacionamento aberto?",
          "Qual foi a última vez que você teve uma discussão com alguém? Qual era o motivo?",
          "Na sua opinião, quais são as coisas que podem fazer outras pessoas se afastarem de você?",
          'Descrevam esse date em uma palavra. Dê a vocês dez segundos para pensar na palavra, e no "já", falem juntos.',
          "Qual é a sua maior insegurança hoje? Como você está lidando com isso (se estiver)?",
          "Em algum momento, eu fiz algo que te chateou ou te deu insegurança? Me conte com toda sinceridade.",
          "Me conte algo que você aprendeu comigo hoje.",
          "O que as pessoas que te criaram te ensinaram sobre o amor? Como isso moldou sua forma de ver o amor hoje em dia?",
          "Como você acha que sua mãe te descreveria? E seu pai?",
          "De zero a dez, quão importante é o sexo num relacionamento para você?",
          "Onde e como você se vê daqui a cinco anos?",
          "Você já teve o seu coração partido? Como foi essa fase para você?",
          'Qual é a primeira coisa que vem à sua mente quando você ouve a palavra "amor"? Não vale pensar, tem que ser a primeira. um, dois, três,vai!!!',
          "Qual é a maior prioridade em um relacionamento para você?",
          "Me conte qual seria a trilha sonora perfeita para um beijo.",
          "Escrevam as três principais qualidades que seu match deve ter, com um minuto para cada um. Depois compartilhem entre si.",
        ],
      },
    ],
  },
  {
    id: "entrelacar",
    title: "Interweave",
    subtitle: "Para casais",
    category: "Aprofundar Relações",
    totalPhases: 3,
    totalQuestions: 61,
    themeColor: "#842730",
    description:
      "Perguntas e desafios divididos em fases para criar laços fortes com o parceiro.",
    phases: [
      {
        id: "entrelacar-fase-0",
        phaseLabel: "Fase 1",
        title: "O Quiz",
        themeColor: "#762648",
        description:
          "Inicie conversas íntimas e descubra detalhes surpreendentes.",
        questions: [
          "O que você acha que eu mais gosto em você fisicamente?",
          "Como seria um dia perfeito para mim?",
          "Se eu fosse uma figura pública, quem você acha que eu escolheria ser?",
          "Qual animal você acha que eu mais me identifico?",
          "Se eu só pudesse dizer uma palavra pelo resto da vida, qual você acha que seria?",
          "Qual minha música favorita de todos os tempos?",
          "Qual você acha que foi o momento que mais me marcou ao longo do nosso relacionamento?",
          "Atualmente, qual você acha que é meu maior sonho?",
          "Se eu tivesse que escolher outra profissão para mim, qual você acredita que seria?",
          "O que você faz que mais me tira do sério?",
        ],
      },
      {
        id: "entrelacar-fase-1",
        phaseLabel: "Fase 2",
        title: "Perguntas",
        themeColor: "#BF2C2C",
        description:
          "Aprofunde laços, alinhe expectativas e fortaleça a cumplicidade a dois.",
        questions: [
          "Qual parte de mim você vê que eu não estou acostumado a demonstrar publicamente?",
          "O que você acha que mais mudou na sua vida (ou em você) depois que nos conhecemos?",
          "Você já abriu mão de algo que não imaginava abrir antes de me conhecer?",
          "O que você mais gosta de fazer comigo?",
          "Qual a primeira palavra que vem à sua cabeça para descrever nosso relacionamento?",
          "Existe algo em nosso relacionamento que te deixa inseguro ou com medo? Dê uma nota para o nível de confiança que você tem em mim de 1 a 10.",
          "Qual é a parte mais difícil de se relacionar comigo?",
          "Como você imagina nós dois daqui a 5 anos?",
          "Com quem da sua família você acha que eu mais me pareço? O que te faz pensar isso?",
          "O que você aprendeu com seus pais sobre amor? Existe algo que você não queira repetir em nosso relacionamento? Estamos no caminho certo para evitar isso?",
          "O que nós temos desde o início do nosso namoro que você não quer que se perca com o tempo? Se já se perdeu, existe algo que podemos fazer para resgatar?",
          "O que você gostaria de fazer mais vezes sozinho(a)? Como você pode adicionar isso à sua rotina e o que eu posso fazer para ajudar?",
          "Existe algum assunto que você tem medo ou evita falar comigo? o que em mim gera esse receio?",
          "Quando você soube que eu era a pessoa certa?",
          "Qual foi a última coisa que eu fiz que te deixou muito feliz?",
          "Qual casal você considera ser sua ''meta de relacionamento''? O que mais te chama atenção neles?",
          "O que mais nós poderíamos criar juntos com nossos talentos?",
          "Qual momento íntimo nosso você mais gostou até hoje?",
          "Qual momento desde que nos conhecemos que você mais sentiu orgulho de mim?",
          "O que em mim mais te chamou atenção na primeira vez que nos vimos?",
          "Se você fosse fazer uma lista de regras que o(a) parceiro(a) ideal tem que ter para namorar com você, quais seriam as 5 regras mais importantes dessa lista?",
          "Escreva o que você não tem valorizado o suficiente em seu parceiro(a). Dois minutos para cada um escrever. Compartilhem.",
          "Quais atitudes minhas te provocam desejo?",
          "Você já sentiu inveja de mim em algum momento e não me contou? Compartilhe, se se sentir confortável.",
          "Se nosso relacionamento fosse um filme ou livro, qual seria o nome?",
          "Quais são as atitudes/momentos em que eu te faço sentir mais amada(o)? Há algo mais que eu poderia fazer que você sente falta?",
          "Qual foi o maior aprendizado que você teve com seu relacionamento anterior ao nosso?",
          "De 0 a 10, o quanto você sente que eu te apoio em seus planos? O que eu poderia fazer para melhorar?",
          "Existe alguém na minha vida que você sente que atrapalha nosso relacionamento? Por que?",
          "Você já considerou estar em um relacionamento aberto? Se sim, por que?",
        ],
      },
      {
        id: "entrelacar-fase-2",
        phaseLabel: "Fase 3",
        title: "Desafios",
        themeColor: "#E27633",
        description:
          "Desafios práticos e dinâmicas profundas para coroar a conexão do casal.",
        questions: [
          "Se fizéssemos uma tatuagem juntos, o que tatuaríamos? Desenhem um no outro com uma caneta.",
          "Vivam um dia inteiro sem celular. Ao final do dia, escrevam como foi essa experiência para vocês. Deixem os sentimentos virarem palavras.",
          "Criem uma playlist do casal, escolham as músicas que vocês mais gostam juntos. Não esqueçam de colocar um nome criativo para ela.",
          "(Re)criem o primeiro date de vocês. Usem a criatividade para se aproximar de como foi na época.",
          "Troquem de papéis: passem um dia inteiro expressando afeto/amor/atitudes da forma como o seu parceiro(a) expressa.",
          "Criem um desafio juntos para ser cumprido durante uma semana. Escolham em conjunto qual será o prêmio do ganhador.",
          "Escrevam uma canção de amor ou poema e recitem/cantem um para o outro. Têm 5 minutos que devem ser cronometrados para escrever e depois revelar (realizando).",
          "Façam um trato e escrevam juntos as regras mais importantes e inegociáveis em um relacionamento para vocês. Coloquem onde possam ver.",
          "Desafio das mãos atadas: deem as mãos ou amarrem com um barbante e façam algo juntos (como, por exemplo, ir ao banheiro, fazer um lanche ou uma dança). Depois, observem como é o trabalho em equipe, fluidez e flexibilidade do casal.",
          "Os olhos são a janela da alma. Sentem-se um de frente para o outro, dêem as mãos e tentem sustentar o olhar (sim, podem piscar). Fiquem assim o tempo que conseguirem e percebam o que sentiram, como foi esse momento para vocês. O que sentiram? Foi desconfortável, leve, difícil?",
          "Separadamente, façam um desenho de como vocês se imaginam no futuro. Compartilhem, comparem, comentem.",
          "Criem um novo hobby para praticarem sempre juntos. Pensem em atividades como aulas de dança, desportos, assistir aos filmes premiados com o Óscar, leitura de livros em conjunto.",
          'Dos mesmos criadores de "vale night", chegou o "vale day". Criem uma programação surpresa para o vosso parceiro(a). Escreve o que sugerem para ser feito durante todo o dia. Ele(a) viverá esse dia sozinho(a). (Calma, a saudade é boa e importante, momentos de solitude também).',
          "Pare tudo e estejam presentes nesse momento para um beijo com língua. Aquele beijo demorado e de cinema. APROVEITEM e lembrem-se de ter esse momento no dia a dia.",
          "Vistam o papel de professor e aluno(a). Cada um escolhe uma habilidade que tem expertise e vai ensinar ao outro como fazer (ou pelo menos tentar), dêem nota de como se saíram.",
          "Recordar para (re)lembrar: revejam as conversas antigas do início de flerte no WhatsApp, Instagram, Facebook ou vejam a galeria de fotos e reparem no que mudou desde então.",
          "Prontos para se verem literalmente pelo olhar do outro? Com a câmera do telemóvel, cada um irá fazer uma sessão de fotos do outro, no mínimo 10 fotos. Usem a criatividade e lembrem-se: quanto mais naturais, melhor. Soltem-se e não se preocupem: é normal ficar tímido no início.",
          "Escolham um filme/série/documentário para verem juntos. Escrevam o que sentiram, notaram e poetizaram sobre o que viram. Depois compartilhem um com o outro.",
          "Exercício da contemplação: fiquem em pé, olho no olho, e falem sobre cada parte do corpo que admiram um no outro. Se quiserem, enquanto falam, usem as mãos para tocar cada parte.",
          "Escolham um dia na semana para ter um momento só vosso. Semanalmente, um de vós escolherá o programa surpresa que ireis realizar e será responsável por organizar tudo.",
        ],
      },
    ],
  },
  {
    id: "finding-myself",
    title: "Finding Myself",
    subtitle: "Para autoconhecimento",
    category: "Autoconhecimento",
    totalPhases: 1,
    totalQuestions: 20,
    themeColor: "#4A7C59",
    description:
      "Perguntas introspectivas para explorar sua identidade, valores e essência.",
    phases: [
      {
        id: "finding-myself-fase-0",
        phaseLabel: "Fase Única",
        title: "Autoconhecimento",
        themeColor: "#4A7C59",
        description:
          "Este é o toolkit que acompanhará você nos melhores encontros consigo mesmo. Não hesite em colocar em palavras o que seu coração está sentindo; você verá quão mágico é. Confie em si mesmo!",
        questions: [
          "Qual é a primeira coisa que você acredita que eu faço quando estou irritado(a)?",
          "De 0 a 10, o quanto você acha que eu sou bom em esportes radicais?",
          "Se eu fosse fazer uma festa de aniversário temática hoje, qual tema seria mais provável eu escolher?",
          "Baseado no que você me conhece, eu normalmente vejo o copo meio vazio ou meio cheio?",
          "Se eu perdesse meu celular e todo o meu dinheiro em outro país, o que você acha que eu faria?",
          "Se eu fosse professor, que matéria você acha que eu ensinaria? Pode ser qualquer disciplina, mesmo aquela que (ainda) não existe nas escolas.",
          "Que aluno você acredita que eu fui na escola?",
          "Ganhei 1.000 dólares para gastar no shopping, qual loja eu iria primeiro?",
          "Se fosses uma personagem de um filme, o que é que os telespectadores estariam a gritar para tu fazeres agora?",
          "E se mudares a forma como estás a olhar para esta situação e conseguires ver que um pensamento pode ser outro?",
          "De que é que o teu medo te está a proteger atualmente e como podes criar estratégias para lidar com possíveis acontecimentos?",
          "Quais são os momentos da tua vida em que te sentes mais autêntico e verdadeiro?",
          "Qual é a comida que, quando comes, te faz sentir abraçado(a)?",
          "Qual é o teu lugar preferido no mundo? (Ambos respondem com mímica, um de cada vez. Contem o tempo e vejam quem acerta mais rápido.)",
          "O que te leva a dar like num perfil no TINDER logo à primeira? E o que te faz dar swipe para a esquerda?",
          "Há algo que gostasses de fazer, mas tens receio de tentar?",
          "O que achas que eu aprecio mais em ti fisicamente?",
          "Como seria um dia perfeito para mim?",
          "Se eu fosse uma figura pública, quem achas que eu escolheria ser?",
          "Qual animal achas que eu mais me identifico?",
        ],
      },
    ],
  },
];

const state = {
  page: "decks",
  selectedMainDeck: null,
  selectedPhase: null,
  search: "",
  currentIndex: 0,
};

const SVG_NS = "http://www.w3.org/2000/svg";
const ICONS = {
  back: ["M19 12H5", "m12 19-7-7 7-7"],
  maximize: ["M15 3h6v6", "M9 21H3v-6", "M21 3l-7 7", "M3 21l7-7"],
  chevronLeft: ["m15 18-6-6 6-6"],
  chevronRight: ["m9 18 6-6-6-6"],
};

const app = document.querySelector("#app");
const notice = document.querySelector("#notice");

function showNotice(message) {
  notice.textContent = message;
  notice.hidden = false;
  window.setTimeout(() => {
    notice.textContent = "";
    notice.hidden = true;
  }, 2600);
}

function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function createIcon(name) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  (ICONS[name] || []).forEach((d) => {
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.append(path);
  });
  return svg;
}

function createButton({
  label,
  action,
  className = "secondary-button",
  icon,
  data = {},
  attrs = {},
}) {
  const btn = createElement("button", className);
  btn.type = "button";
  btn.dataset.action = action;
  if (icon) btn.append(createIcon(icon));
  if (label) btn.append(createElement("span", "", label));
  Object.entries(data).forEach(([k, v]) => (btn.dataset[k] = String(v)));
  Object.entries(attrs).forEach(([k, v]) => btn.setAttribute(k, v));
  return btn;
}

function mount(page) {
  app.replaceChildren(page);
  window.scrollTo(0, 0);
}

function renderMainDecks() {
  document.body.style.backgroundColor = "";
  const page = createElement("section", "page");

  const hero = createElement("div", "hero");
  hero.append(
    createElement("h1", "hero-title", "DECKS"),
    createElement("p", "hero-copy", "Se você já sabe o que quer"),
  );

  const grid = createElement("div", "deck-grid");

  mainDecks.forEach((mainDeck) => {
    const card = createElement("article", "deck-card-phase");
    card.style.backgroundColor = mainDeck.themeColor;

    const top = createElement("div", "deck-phase-top");
    top.append(
      createElement(
        "span",
        "deck-phase-badge",
        `${mainDeck.totalPhases} fases • ${mainDeck.totalQuestions} perguntas`,
      ),
    );

    const content = createElement("div", "deck-phase-content");
    content.append(
      createElement("h3", "deck-phase-title", mainDeck.title),
      createElement("p", "deck-phase-desc", mainDeck.description),
    );

    const openBtn = createButton({
      label: "Abrir baralho",
      action: "open-main-deck",
      className: "text-button stretched",
      data: { mainDeckId: mainDeck.id },
    });

    card.append(top, content, openBtn);
    grid.append(card);
  });

  page.append(hero, grid);
  mount(page);
}

function renderPhasesView(mainDeckId) {
  const mainDeck = mainDecks.find((d) => d.id === mainDeckId);
  if (!mainDeck) {
    renderMainDecks();
    return;
  }

  state.selectedMainDeck = mainDeck;
  document.body.style.backgroundColor = "";
  const page = createElement("section", "page");

  const backRow = createElement("div", "back-row");
  backRow.append(
    createButton({
      label: "Voltar aos Decks",
      action: "home",
      className: "back-button",
      icon: "back",
    }),
  );

  const heading = createElement("div", "page-heading");
  heading.append(
    createElement("h1", "", mainDeck.title),
    createElement("p", "", mainDeck.subtitle),
  );

  const grid = createElement("div", "deck-grid");

  mainDeck.phases.forEach((phase, idx) => {
    const card = createElement("article", "deck-card-phase");
    card.style.backgroundColor = phase.themeColor;

    const top = createElement("div", "deck-phase-top");
    top.append(
      createElement(
        "span",
        "deck-phase-badge",
        `${phase.questions.length} perguntas`,
      ),
    );

    const content = createElement("div", "deck-phase-content");
    content.append(
      createElement("h3", "deck-phase-title", phase.title.toUpperCase()),
      createElement("p", "deck-phase-desc", phase.description),
    );

    const openBtn = createButton({
      label: "Abrir fase",
      action: "open-phase",
      className: "text-button stretched",
      data: { phaseIndex: idx },
    });

    card.append(top, content, openBtn);
    grid.append(card);
  });

  page.append(backRow, heading, grid);
  mount(page);
}

function renderSingleCard() {
  if (!state.selectedMainDeck || !state.selectedPhase) {
    renderMainDecks();
    return;
  }

  const phase = state.selectedPhase;
  const index = state.currentIndex;
  const total = phase.questions.length;
  const question = phase.questions[index];

  // No modo escuro, mantemos a cor de fundo controlada pelo CSS dark-mode
  if (!document.body.classList.contains("dark-mode")) {
    document.body.style.backgroundColor = phase.themeColor;
  } else {
    document.body.style.backgroundColor = "";
  }

  const page = createElement("section", "page single-card-view");
  const stack = createElement("div", "card-stack-game");

  const phasesList = state.selectedMainDeck.phases;
  const currentPhaseIndex = phasesList.indexOf(phase);

  const phaseNav = createElement("div", "phase-nav-bar");
  phaseNav.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);
    padding: 6px 12px;
    border-radius: 50px;
    margin-bottom: 16px;
    width: 100%;
    max-width: 320px;
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;

  const prevPhaseBtn = createButton({
    action: "prev-phase",
    className: "phase-nav-icon-btn",
    icon: "chevronLeft",
    attrs: { "aria-label": "Fase anterior" },
  });
  prevPhaseBtn.style.cssText =
    "background: none; border: none; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 4px; opacity: " +
    (currentPhaseIndex > 0 ? "1" : "0.3") +
    ";";
  if (currentPhaseIndex === 0) prevPhaseBtn.disabled = true;

  const phaseTitleSpan = createElement("span", "", phase.title.toUpperCase());
  phaseTitleSpan.style.cssText =
    "font-size: 0.85rem; font-weight: 700; letter-spacing: 0.08em; text-align: center; flex: 1; padding: 0 8px;";

  const nextPhaseBtn = createButton({
    action: "next-phase",
    className: "phase-nav-icon-btn",
    icon: "chevronRight",
    attrs: { "aria-label": "Próxima fase" },
  });
  nextPhaseBtn.style.cssText =
    "background: none; border: none; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 4px; opacity: " +
    (currentPhaseIndex < phasesList.length - 1 ? "1" : "0.3") +
    ";";
  if (currentPhaseIndex === phasesList.length - 1) nextPhaseBtn.disabled = true;

  phaseNav.append(prevPhaseBtn, phaseTitleSpan, nextPhaseBtn);

  const card = createElement("article", "question-card-game");
  card.style.position = "relative";

  const phaseBadge = createElement("div", "", phase.phaseLabel.toUpperCase());
  phaseBadge.style.cssText =
    "position: absolute; top: 16px; right: 20px; font-size: 0.75rem; font-weight: 700; opacity: 0.85; letter-spacing: 0.05em;";

  const remaining = Math.max(0, total - (index + 1));
  const counterText =
    remaining === 0 ? "Última carta" : `Faltam ${remaining} cartas`;

  const counterInfo = createElement("div", "question-counter-info");
  counterInfo.append(
    createElement("span", "", `Carta ${index + 1} de ${total}`),
    createElement("span", "", "·"),
    createElement("span", "", counterText),
  );

  const title = createElement("h1", "card-question-text", question);

  const cardFooter = createElement("div", "question-card-footer-bar");
  cardFooter.style.backgroundColor = phase.themeColor;
  cardFooter.textContent = phase.title.toUpperCase();

  card.append(phaseBadge, counterInfo, title, cardFooter);

  let touchStartX = 0;
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
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (diff < -50) singleNext();
      if (diff > 50) singlePrev();
    },
    { passive: true },
  );

  const actionsBar = createElement("div", "game-actions-bar");

  const backBtn = createButton({
    action: "back-to-phases",
    className: "game-round-btn",
    icon: "back",
    attrs: { "aria-label": "Voltar às fases" },
  });

  const nextBtn = createButton({
    action: "single-next",
    className: "game-round-btn",
    icon: "maximize",
    attrs: { "aria-label": "Próxima carta" },
  });

  actionsBar.append(backBtn, nextBtn);
  stack.append(phaseNav, card, actionsBar);
  page.append(stack);
  mount(page);
}

function singleNext() {
  if (!state.selectedPhase || !state.selectedMainDeck) return;

  if (state.currentIndex < state.selectedPhase.questions.length - 1) {
    state.currentIndex++;
    renderSingleCard();
  } else {
    const currentPhases = state.selectedMainDeck.phases;
    const currentPhaseIndex = currentPhases.indexOf(state.selectedPhase);

    if (currentPhaseIndex < currentPhases.length - 1) {
      state.selectedPhase = currentPhases[currentPhaseIndex + 1];
      state.currentIndex = 0;
      renderSingleCard();
      showNotice(
        `A avançar para: ${state.selectedPhase.phaseLabel} - ${state.selectedPhase.title}`,
      );
    } else {
      showNotice("Parabéns! Concluíste todas as fases deste baralho!");
    }
  }
}

function singlePrev() {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderSingleCard();
  }
}

const actions = {
  home: (d, e) => {
    e.preventDefault();
    state.page = "decks";
    renderMainDecks();
  },
  "open-main-deck": ({ mainDeckId }) => {
    state.page = "phases";
    renderPhasesView(mainDeckId);
  },
  "open-phase": ({ phaseIndex }) => {
    state.selectedPhase = state.selectedMainDeck.phases[Number(phaseIndex)];
    state.currentIndex = 0;
    state.page = "question";
    renderSingleCard();
  },
  "back-to-phases": () => {
    renderPhasesView(state.selectedMainDeck.id);
  },
  "single-next": () => singleNext(),
  "prev-phase": () => {
    const phases = state.selectedMainDeck.phases;
    const idx = phases.indexOf(state.selectedPhase);
    if (idx > 0) {
      state.selectedPhase = phases[idx - 1];
      state.currentIndex = 0;
      renderSingleCard();
    }
  },
  "next-phase": () => {
    const phases = state.selectedMainDeck.phases;
    const idx = phases.indexOf(state.selectedPhase);
    if (idx < phases.length - 1) {
      state.selectedPhase = phases[idx + 1];
      state.currentIndex = 0;
      renderSingleCard();
    }
  },
  history: (d, e) => {
    e.preventDefault();
    showNotice("Histórico de perguntas visitadas em breve!");
  },
  saved: (d, e) => {
    e.preventDefault();
    showNotice("Nenhuma carta salva no momento.");
  },
  "toggle-theme": (d, e) => {
    e.preventDefault();
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    const themeButton = document.querySelector(".theme-toggle");
    themeButton?.setAttribute("aria-pressed", String(isDark));
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? "#151412" : "#fcf9f5");
    showNotice(`Modo ${isDark ? "escuro" : "claro"} ativado`);

    // Se estivermos na vista de carta e mudarmos o tema, re-renderiza para atualizar as cores de fundo
    if (state.page === "question") {
      renderSingleCard();
    }
  },
};

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  const handler = btn && actions[btn.dataset.action];
  if (handler) handler(btn.dataset, e, btn);
});

document.addEventListener("keydown", (event) => {
  if (state.page !== "question") return;
  if (event.key === "ArrowRight") {
    event.preventDefault();
    singleNext();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    singlePrev();
  } else if (event.key === "Escape") {
    renderPhasesView(state.selectedMainDeck.id);
  }
});

// Inicialização: restaura o tema e carrega os decks.
const savedTheme = localStorage.getItem(THEME_KEY) || "light";
const isDark = savedTheme === "dark";
document.body.classList.toggle("dark-mode", isDark);
document
  .querySelector(".theme-toggle")
  ?.setAttribute("aria-pressed", String(isDark));
document
  .querySelector('meta[name="theme-color"]')
  ?.setAttribute("content", isDark ? "#151412" : "#fcf9f5");
renderMainDecks();
