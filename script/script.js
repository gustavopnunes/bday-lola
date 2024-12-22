const messages = [
    "Oi, Lola!",
    "É seu aniversário!! :D",
    "Ia mandar uma mensagem, mas resolvi fazer algo mais legal",
    "Porque você merece mais do que um simples <span class='highlight'>PARABÉNS!</span>",
    "Então, fui atrás de algumas pessoas pra me ajudarem nisso aqui...",
    '<span class = "testimony"> Feliz aniversário amiga!!! Fico muito feliz de ter você por perto novamente, você sabe que sempre foi e sempre vai ser a minha melhor amiga, te amo muito, sempre vou querer o melhor pra você sempre!!! Se cuida e meus Parabéns, te desejo muita paz, amor, alegria, sucesso, saúde, que Deus continue abençoando sua vida sempre!!! “All the crazy shit I did tonight those are be the best memories” (trecho da nossa música de adolescência) Amo todos os momentos que vivemos e a nossa adolescência que foi a “the best” agora já deu hahahah mo sempre queria estar contigo nessa data e nunca vou superar aquela vez que fez uma festa de aniversário na sua casa do pontal (na adolescência tb) e não pude ir 🥹🥹🥹🥹</span><span class="friend-name">Andressa</span>',
    '<span class = "testimony">Hoje é o dia da pessoa que ganhei de presente nesse ano de 2024 e que o tempo (mesmo que pouco) a transformou em irmã! Você é mais que especial para mim, é aquela que compartilha risadas, conquistas, até os segredos mais bobos, e nossas viagens que vão sair certeza !!!! Sua amizade é um presente que a vida me deu, e eu sou eternamente grata por tê-la ao meu lado. Que o seu aniversário seja tão incrível quanto o coração que você tem! Desejo amor, saúde, alegria e que todos os seus sonhos se realizem. Mega parabéns pelo seu dia, que possa aproveitar cada minuto da melhor forma possível ! Te amo de montão ❤️</span><span class = "friend-name">Maria Fernanda</span>',
    '<span class = "testimony">Pah, que dia especial hoje! <br /><br />Quero te desejar um Feliz Aniversário repleto de saúde, paz, amor, bençãos e muitas realizações! <br /><br />Que seus projetos tomem forma e que a felicidade seja uma constante em sua vida!! <br /><br /> Você sabe o quanto é especial e amada por nós! Aproveite seu dia! Te amamos! <br /><br />Tio Beto e Tio Lucas!</span><span class = "friend-name">Alberto</span>',
    '<span class = "testimony">Depoimento Juliana</span><span class = "friend-name">Juliana</span>',
    '<span class = "testimony">Depoimento Ayeska</span><span class = "friend-name">Ayeska</span>',
    "Aproveita seu dia! E que ele seja tão especial quanto você <3"
];

let currentIndex = 0;

function showNextMessage() {
    const messageElement = document.getElementById('message');
    const photoElement = document.querySelector('.photo-section');
    messageElement.style.opacity = 0; // Iniciar a transição

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        messageElement.innerHTML = messages[currentIndex];
        messageElement.style.opacity = 1; // Finalizar a transição

        // Ocultar a foto da aniversariante para a mensagem específica
        if (currentIndex === 5 || currentIndex === 6 || currentIndex === 7 || currentIndex === 8 || currentIndex === 9) {
            photoElement.style.display = 'none';
        } else {
            photoElement.style.display = 'block';
        }
    }, 500); // Tempo da transição deve coincidir com o CSS
}

document.getElementById('nextButton').addEventListener('click', showNextMessage);
