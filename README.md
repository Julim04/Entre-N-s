# Entre Nós

Uma aplicação web original de perguntas em baralhos. O projeto usa conteúdo e identidade visual próprios; o APK de referência não foi copiado nem distribuído junto com o app.

## Usar

Abra `index.html` em um navegador moderno. Não há dependências nem etapa de build (apenas as fontes DM Sans e Manrope via Google Fonts, com fallback para fontes do sistema se estiver offline).

## Publicar no GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` publica o site a cada push na branch `main`. Em **Settings > Pages**, selecione **GitHub Actions** como fonte de publicação. Também é possível iniciar um deploy manualmente pela aba **Actions**.

## Arquivos

- `index.html`: estrutura da página, barra superior, navegação e carregamento dos estilos e scripts.
- `styles-refinado.css`: estilos visuais, temas claro e escuro, efeitos dos cartões e regras responsivas.
- `app.js`: dados dos baralhos, estado, tema, persistência, telas e eventos, em seções comentadas.
- `effects.js`: ajuste automático de títulos longos e efeitos de inclinação e brilho dos cartões em dispositivos com mouse.

## Recursos

- Menu de baralhos com **Isso não é um jogo**, que reúne seis fases (Construção, Revelação, Coragem, Confiança, Conexão e Conclusão) e 131 perguntas.
- Ao abrir um baralho, suas fases aparecem numa tela própria; é possível buscar perguntas, filtrar por fase e voltar às fases ou ao menu de baralhos.
- As quantidades de fases e perguntas são calculadas a partir dos dados cadastrados, para acompanhar futuras alterações no conteúdo.
- **Modo claro e escuro** com botão na barra superior. Respeita o tema do sistema até a primeira escolha manual; a escolha fica salva em `localStorage`.
- **Mobile-first**: no celular a navegação vira uma barra de abas fixa no rodapé; alvos de toque de pelo menos 44 px; cartões e linhas inteiros são clicáveis; campo de busca com 16 px para evitar zoom no iOS.
- **Efeitos dos cartões**: em computadores com mouse, os cartões inclinam levemente e o brilho acompanha o ponteiro. Em celulares e outros dispositivos sem mouse, esses efeitos não são ativados; a animação suave das cartas e os gestos de deslizar continuam disponíveis.
- Títulos longos dos cartões têm o tamanho ajustado automaticamente para caber sem quebrar palavras. As animações respeitam a preferência do sistema por movimento reduzido.
- Carta de pergunta com barra de progresso baseada nas cartas já lidas do baralho ("Faltam 15 cartas"), Voltar, Salvar (♥) e Sortear outra. O sorteio só tira cartas ainda não lidas; ao ler todas, aparece "Baralho completo" e a próxima carta começa uma nova rodada. As cartas lidas ficam salvas no navegador.
- Transição breve antes de revelar a carta (encurtada se o sistema pede movimento reduzido).
- Número da carta ("Carta 3 de 27") junto com o que falta, e botão **Carta anterior** para voltar à última carta vista na sessão (sem duplicar o histórico).
- Atalhos na carta: seta direita sorteia outra, seta esquerda volta à carta anterior, Esc volta ao baralho.
- Histórico (com opção de limpar) e Salvas, persistidos em `localStorage`, com aviso visível quando o navegador não consegue ler ou salvar os dados.

## Alterações recentes

- A página inicial agora apresenta **Isso não é um jogo** como um baralho selecionável.
- O fluxo foi organizado em etapas: menu de baralhos → fases do baralho → perguntas da fase.
- A tela de fases informa a quantidade de perguntas em cada uma; Conexão tem 22 perguntas e o baralho soma 131.
- A busca e os filtros por fase ficam na tela do baralho, e os botões de retorno levam à tela anterior apropriada.
- O visual do cartão do baralho foi preparado para acomodar outros baralhos no menu futuramente.
