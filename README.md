# Entre Nós

Uma aplicação web original de perguntas em baralhos. O projeto usa conteúdo e identidade visual próprios; o APK de referência não foi copiado nem distribuído junto com o app.

## Usar

Abra `index.html` em um navegador moderno. Não há dependências nem etapa de build (apenas as fontes DM Sans e Manrope via Google Fonts, com fallback para fontes do sistema se estiver offline).

## Arquivos

- `index.html`: estrutura, barra superior, navegação e script de tema que roda antes da primeira pintura (sem "flash").
- `styles.css`: tokens de cor no `:root` (claro) e `:root.theme-dark` (escuro), CSS mobile-first com breakpoints em 480, 600, 720 e 960 px.
- `app.js`: dados dos baralhos, estado, tema, persistência, telas e eventos, em seções comentadas.

## Recursos

- Seis baralhos por fase (Construção, Revelação, Coragem, Confiança, Conexão, Conclusão), com busca por tema ou texto e filtro por fase.
- **Modo claro e escuro** com botão na barra superior. Respeita o tema do sistema até a primeira escolha manual; a escolha fica salva em `localStorage`.
- **Mobile-first**: no celular a navegação vira uma barra de abas fixa no rodapé; alvos de toque de pelo menos 44 px; cartões e linhas inteiros são clicáveis; campo de busca com 16 px para evitar zoom no iOS.
- Carta de pergunta com barra de progresso baseada nas cartas já lidas do baralho ("Faltam 15 cartas"), Voltar, Salvar (♥) e Sortear outra. O sorteio só tira cartas ainda não lidas; ao ler todas, aparece "Baralho completo" e a próxima carta começa uma nova rodada. As cartas lidas ficam salvas no navegador.
- Transição breve antes de revelar a carta (encurtada se o sistema pede movimento reduzido).
- Número da carta ("Carta 3 de 27") junto com o que falta, e botão **Carta anterior** para voltar à última carta vista na sessão (sem duplicar o histórico).
- Atalhos na carta: seta direita sorteia outra, seta esquerda volta à carta anterior, Esc volta ao baralho.
- Histórico (com opção de limpar) e Salvas, persistidos em `localStorage`, com aviso visível quando o navegador não consegue ler ou salvar os dados.
