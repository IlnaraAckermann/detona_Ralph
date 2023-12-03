# Jogo Detona Ralph 🎮

Bem-vindo ao **Detona Ralph**, um jogo empolgante e cheio de surpresas! Este é um jogo simples desenvolvido em HTML, CSS e JavaScript que desafia você a clicar no boneco que aparece na tela. Prepare-se para momentos de diversão e desafios emocionantes! 😄🎉

## Funcionalidades 🚀

- **Clique no Boneco:** Clique no boneco que aparece aleatoriamente na tela para marcar pontos.
- **Aumento de Dificuldade:** À medida que o score aumenta, a dificuldade aumenta, tornando o jogo mais desafiador.
- **Feedback Sonoro:** Sons de "acerto" e "erro" para fornecer feedback imediato ao clicar no boneco.

## Tecnologias Utilizadas 🛠️

- **HTML:** Estruturação básica da página.
- **CSS:** Estilização para a aparência visual do jogo.
- **JavaScript:** Lógica do jogo, geração aleatória do boneco, controle de tempo e funcionalidades de feedback sonoro.

## Como Jogar 🎯

1. Abra o arquivo `index.html` em seu navegador.
2. O boneco aparecerá em locais aleatórios da tela.
3. Clique no boneco o mais rápido possível para marcar pontos.
4. A dificuldade aumentará gradualmente à medida que o score aumenta.
5. Aproveite os sons de feedback ao clicar no boneco.

## Estrutura do Projeto 📂

```bash
├── index.html
├── src
│    ├── assets
│    │   ├── audios
│    │   │   ├── hit.mp3
│    │   │   ├── fail.mp3
│    │   │   └── game-over.mp3
│    │   └── imagem
│    │       ├── heart.webp
│    │       ├── ralph.gif
│    │       └── wall.png
│    ├── scripts
│    │      └── engine.js
│    ├── styles
│    │   ├── index.css
│    │   └── reset.css
└── README.md
```

## Ideias para o projeto - prazo indeterminado
- Animações para a adição de tempo
- Modal para substituir o alert de end game
- "Bomba" adicionar uma bomba que aparece de forma random a partir de certa dificuldade e caso seja clicado o player perde uma vida.
- modelos mais dificeis com 16 quadrados, e 25 quadrados com possibilidade de multiplos RALPHs e multiplas bomba.
- Possibilidade de gerar uma função caso o ralph nao seja clicado perde vida.