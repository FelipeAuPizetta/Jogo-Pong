// VARIÁVEIS DA POSIÇÃO INICIAL
  let xBola = 400;
  let yBola = 300;

// VARIÁVEIS DA BOLA
  let diametroBola = 20;
  let raio = diametroBola / 2;
  let velocidadeXBola = 5;
  let velocidadeYBola = 5;

// VARIÁVEIS DA RAQUETE
  let xRaquete = 5;
  let yRaquete = 260;
  let comprimentoRaquete = 10;
  let alturaRaquete = 50;
  let velocidadeRaquete;

// VARIÁVEIS DA RAQUETE DO OPONENTE
  let xRaqueteOponente = 785;
  let yRaqueteOponente = 260;
  let velocidadeYOponente;

// COLISÃO
  let colidiu = false;

// PLACAR DO JOGO
  let meusPontos = 0;
  let pontosDoOponente = 0;

  function setup() {
    createCanvas(800, 600);
  }

  function draw() {
    background(0);
    mostraBola();
    movimentaBola();
    colisaoTela();
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaquete();
    movimentaRaqueteOponente();
    colisaoRaquete(xRaquete, yRaquete);
    colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    placar();
  }

  function movimentaBola() {
    yBola += velocidadeYBola;
    xBola += velocidadeXBola;
  }

  function mostraBola() {
    fill(color(124,252,0));
    circle(xBola, yBola, diametroBola);
  }

  function colisaoTela() {
    if(xBola + raio > width || xBola - raio < 0) {
      velocidadeXBola *= -1;
    }
    if(yBola + raio > height || yBola - raio < 0) {
      velocidadeYBola *= -1;
    }
  }

  function mostraRaquete(x, y) {
    fill(255);
    rect(x, y, comprimentoRaquete, alturaRaquete)
  }


// PLAYER vs COMPUTADOR
  function movimentaRaquete() {
    if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }

  function colisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBola, yBola, raio);

    if(colidiu) {
      velocidadeXBola *= -1;
    }
  }

  function movimentaRaqueteOponente() {
    velocidadeYOponente = yBola - yRaqueteOponente - comprimentoRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente;
  }


/* COMPUTADOR vs COMPUTADOR
  function movimentaRaquete() {
    velocidadeRaquete = yBola - yRaquete - comprimentoRaquete / 2 - 30;
    yRaquete += velocidadeRaquete;
  }
*/

  function placar() {
    stroke(color(0,128,0));
    fill(color(0,100,0));
    rect(200, 10, 40, 20);
    rect(600, 10, 40, 20);
    textAlign(CENTER);
    textSize(15);
    fill(245);
    text(meusPontos, 220, 26);
    text(pontosDoOponente, 620, 26)

// MARCA O PONTO
    if(xBola > 790) {
      meusPontos += 1;
    }
    if(xBola < 10) {
      pontosDoOponente += 1;
    }
  }