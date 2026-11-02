# Entre Nós

Aplicação web de baralhos de perguntas para facilitar conversas, conexão, autoconhecimento e reflexão. O projeto foi reorganizado em vários baralhos temáticos e manteve uma identidade visual própria, com foco em uma experiência leve, responsiva e acessível.

## Como usar

1. Abra `index.html` em um navegador moderno.
2. Não há dependências externas de build nem etapa de compilação.
3. As fontes `DM Sans` e `Manrope` são carregadas via Google Fonts e a fallback do sistema é usada caso não haja conexão.

## Visão geral

A experiência atual foi estruturada em um menu de baralhos, com navegação em etapas:

- menu de baralhos
- fases do baralho
- perguntas da fase
- carta individual

O app salva o estado do usuário no `localStorage`, incluindo histórico, cartas salvas, tema e progresso do baralho.

## Baralhos disponíveis

O catálogo atual inclui baralhos com foco em diferentes contextos:

- **Isso não é um jogo** — para conexões gerais, com 6 fases e 131 perguntas.
- **Isso não é um encontro** — para dinâmicas de encontros e aproximação.
- **Entrelaçar** — para casais e relacionamento.
- **Me encontrando** — para autoconhecimento e introspecção.

Todos os valores de fases e perguntas são calculados dinamicamente a partir dos dados do conteúdo, tornando o sistema fácil de expandir.

## Recursos atuais

- Navegação por múltiplos baralhos em uma mesma interface.
- Organização em fases e filtro por etapa, com busca por pergunta.
- Sistema de tema claro/escuro com persistência no navegador.
- Histórico e cartas salvas, com avisos visuais quando o armazenamento local não está disponível.
- Cartas com progresso, botão de voltar, botão de salvar e sorteio de novas perguntas.
- Modo responsivo para celular e desktop, com foco em toque e acessibilidade.
- Efeitos de hover e movimento nos cartões em dispositivos com mouse.
- Ajuste automático do tamanho de títulos longos para manter a leitura limpa.
- Suporte à preferência de movimento reduzido do sistema.

## Arquivos principais

- `index.html`: estrutura base da página, topbar, navegação e carregamento dos recursos.
- `styles.css`: base visual da interface e tokens de design.
- `styles-refinado.css`: refinamento visual aplicado à interface atual.
- `app.js`: dados dos baralhos, renderização das telas, estado do app e persistência em `localStorage`.
- `efeitos.js`: ajustes dos títulos, tilt e efeitos visuais de cartões.
- `.github/workflows/deploy-pages.yml`: fluxo de publicação no GitHub Pages.

## Publicar no GitHub Pages

O fluxo de publicação está configurado em `.github/workflows/deploy-pages.yml` e publica automaticamente em cada envio para o ramo `main`.

Para ativar a hospedagem:

1. Acesse o repositório no GitHub.
2. Vá em **Settings > Pages**.
3. Selecione **GitHub Actions** como fonte de publicação.
4. Salve e aguarde a primeira execução.

## Alterações recentes

- O menu principal passou a exibir vários baralhos em vez de um único deck fixo.
- O fluxo foi reorganizado para melhor separar menu, fases e conteúdo.
- As telas de baralho e fases agora mostram melhor contexto visual e informações de quantidade de perguntas.
- A interface foi refinada para funcionar de forma mais limpa em mobile e desktop.
- O sistema visual ficou mais consistente com uma identidade unificada de tipografia, espaçamento e cards.
