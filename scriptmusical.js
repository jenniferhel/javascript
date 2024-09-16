class JogoAdivinhacao {
    constructor() {
        this.musicas = [
            { nome: "Imagine", arquivo: "imagine.mp3" },
            { nome: "Bohemian Rhapsody", arquivo: "bohemian.mp3" },
            { nome: "Let it Be", arquivo: "letitbe.mp3" }
        ];
        this.tentativas = 5;
        this.musicaAtual = null;
        this.audioPlayer = document.getElementById("music-player");
        this.attemptsElement = document.getElementById("attempts");
        this.resultElement = document.getElementById("result");
    }

    iniciarJogo() {
        // Escolhe uma música aleatória
        const indiceAleatorio = Math.floor(Math.random() * this.musicas.length);
        this.musicaAtual = this.musicas[indiceAleatorio];
        this.audioPlayer.src = this.musicaAtual.arquivo;
        this.audioPlayer.hidden = false;
        this.tentativas = 5;
        this.atualizarTentativas();
        this.resultElement.textContent = "";
    }

    playMusic() {
        if (this.musicaAtual === null) {
            this.iniciarJogo();
        }
        this.audioPlayer.play();
    }

    adivinhar() {
        const palpite = document.getElementById("guess").value.trim().toLowerCase();
        if (palpite === this.musicaAtual.nome.toLowerCase()) {
            this.resultElement.textContent = "Parabéns! Você acertou!";
            this.resultElement.style.color = "green";
            this.tentativas = 0; // Finaliza o jogo
        } else {
            this.tentativas--;
            this.resultElement.textContent = "Tente novamente!";
            this.resultElement.style.color = "red";
        }
        this.atualizarTentativas();

        if (this.tentativas === 0 && palpite !== this.musicaAtual.nome.toLowerCase()) {
            this.resultElement.textContent = `Fim de jogo! A música correta era "${this.musicaAtual.nome}".`;
            this.resultElement.style.color = "black";
        }
    }

    atualizarTentativas() {
        this.attemptsElement.textContent = this.tentativas;
    }
}

// Instancia o jogo
const game = new JogoAdivinhacao();
