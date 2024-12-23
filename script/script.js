const messages = [
    "Oi, Lola!",
    "É seu aniversário!! :D",
    "Ia mandar uma mensagem, mas resolvi fazer algo mais legal",
    "Porque você merece mais do que um simples <span class='highlight'>PARABÉNS!</span>",
    "Então, fui atrás de algumas pessoas pra me ajudarem nisso aqui...",
    '<div class="testimony"><img src="images/andressa-photo.jpg" alt="Andressa"><span>Feliz aniversário amiga!!! Fico muito feliz de ter você por perto novamente, você sabe que sempre foi e sempre vai ser a minha melhor amiga, te amo muito, sempre vou querer o melhor pra você sempre!!! <br /> Se cuida e meus Parabéns, te desejo muita paz, amor, alegria, sucesso, saúde, que Deus continue abençoando sua vida sempre!!! “All the crazy shit I did tonight those are be the best memories” (trecho da nossa música de adolescência) <br />Amo todos os momentos que vivemos e a nossa adolescência que foi a “the best” agora já deu hahahah mo sempre queria estar contigo nessa data e nunca vou superar aquela vez que fez uma festa de aniversário na sua casa do pontal (na adolescência tb) e não pude ir 🥹🥹🥹🥹</span><span class="friend-name">Andressa</span></div>',
    '<div class="testimony"><img src="images/mariaf-photo.jpg" alt="Maria Fernanda"><span>Hoje é o dia da pessoa que ganhei de presente nesse ano de 2024 e que o tempo (mesmo que pouco) a transformou em irmã! Você é mais que especial para mim, é aquela que compartilha risadas, conquistas, até os segredos mais bobos, e nossas viagens que vão sair certeza !!!! Sua amizade é um presente que a vida me deu, e eu sou eternamente grata por tê-la ao meu lado. <br /> Que o seu aniversário seja tão incrível quanto o coração que você tem! Desejo amor, saúde, alegria e que todos os seus sonhos se realizem. Mega parabéns pelo seu dia, que possa aproveitar cada minuto da melhor forma possível ! Te amo de montão ❤️</span><span class = "friend-name">Maria Fernanda</span></div>',
    '<div class="testimony"><img src="images/adalberto-photo.jpeg" alt="Tio Beto e Tio Lucas"><span>Pah, que dia especial hoje! <br />Quero te desejar um Feliz Aniversário repleto de saúde, paz, amor, bençãos e muitas realizações! <br />Que seus projetos tomem forma e que a felicidade seja uma constante em sua vida!! <br /> Você sabe o quanto é especial e amada por nós! Aproveite seu dia! <br /><br />Te amamos!!!</span><span class = "friend-name">Tio Beto e Tio Lucas</span></div>',
    '<div class="testimony"><img src="images/juliana-photo.jpeg" alt="Juliana"><span>"A gente não faz amigos, reconhece-os." <br /> <br />Hoje é dia de celebrar a vida dessa preciosidade que de “pequena” só tem o nome! A mulher mais resiliente que conheço, serena e de alma leve, sendo forjada por Deus para um grande propósito. Sou testemunha de absolutamente todo o seu empenho e transformação… quanta conquista em tão pouco tempo! E sabemos que é só o começo, né? <br /> <br /> Que o seu dia seja leve e divertido, como a vida deve ser! É uma honra ter você como amiga. Conte sempre comigo!</span><span class = "friend-name">Juliana</span></div>',
    '<div class="testimony"><img src="images/gustavo-photo.jpeg" alt="Gustavo"><span>Êêê Paola… <br /> <br /> Quem diria que de uma resposta a um story eu estaria aqui, dias depois, te fazendo uma firula de aniversário… <br /> Meu parabéns pra você é todos os dias, por ser essa mulher incrível com esse sorriso lindo e autêntico que com certeza contagia quem estiver ao redor e deixa todas as coisas um pouquinho melhores <3</span><span class = "friend-name">Gustavo</span></div>',
    '<div class="testimony"><img src="images/ayeska-photo.jpg" alt="Ayeska"><span>Amiga, sabemos que sempre fomos uma amizade improvável. Mas, Deus nos aproximou e mostrou o quantos somos parecidas apesar das nossas diferenças e podemos contar uma com a outra sempre. Sou grata pela sua vida e pela amizade que temos construído esses anos. Obrigada por podermos ser nós mesmas e termos a liberdade de falar sobre tudo sem julgamentos. Você é uma das minhas pessoas favoritas no mundo. Te admiro tanto. Você é luz, é incrível, é sensível e linda. Sinto saudades todos os dias e é sempre reconfortante qualquer tempo de qualidade que passamos juntas. Te desejo as coisas mais bonitas dessa vida. Tudo de melhor sempre. Hoje é seu dia e quero que sinta meu abraço! Aproveite o seu dia! Te amoooo muito! Feliz novo ciclo! <br /> <br />Com Amor, Abelhinha 🐝❤️</span><span class = "friend-name">Ayeska</span></div> <img class="ayeska-testimonial-photo" src="images/ayeska-testimonial-photo.png" alt="Foto da Ayeska">',
    "Aqui tem só uma porçãozinha das pessoas que se importam contigo. Cada palavra é apenas um reflexo do quanto você é especial pra nós. Que nesse dia você sinta todo o carinho que existe ao seu redor e aproveite com a certeza de que é muito querida e amada por todos. <span class='happy-bday'>Feliz aniversário, Lola!</span>"
];

let currentIndex = 0;

function showNextMessage() {
    const messageElement = document.getElementById('message');
    const photoElement = document.querySelector('.photo-section');
    const carouselElement = document.querySelector('.carousel');
    const closeButton = document.getElementById('closeButton');
    const nextButton = document.getElementById('nextButton');
    const ayeskaPhotos = document.getElementById('ayeskaPhotos');
    messageElement.style.opacity = 0; 

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        messageElement.innerHTML = messages[currentIndex];
        messageElement.style.opacity = 1;

        if (currentIndex === 5 || currentIndex === 6 || currentIndex === 7 || currentIndex === 8 || currentIndex === 9 || currentIndex === 10 || currentIndex === 11) {
            photoElement.style.display = 'none';
        } else {
            photoElement.style.display = 'block';
        }

        if (currentIndex === messages.length - 1) {
            carouselElement.style.display = 'flex';
            nextButton.style.display = 'none'; 
        } else {
            carouselElement.style.display = 'none';
            closeButton.style.display = 'none';
            nextButton.style.display = 'block';
        }

    
        if (currentIndex === 10) {
            ayeskaPhotos.style.opacity = 1;
        } else {
            ayeskaPhotos.style.display = "none";
        }

        
        if (currentIndex === messages.length - 1) {
            messageElement.classList.add('last-message');
        } else {
            messageElement.classList.remove('last-message');
        }
    }, 500); 
}

function enlargeImage(event) {
    const img = event.target;
    const enlargedImg = document.querySelector('.carousel img.enlarged');
    if (enlargedImg && enlargedImg !== img) {
        enlargedImg.classList.remove('enlarged');
    }
    img.classList.toggle('enlarged');
    document.getElementById('closeButton').style.display = img.classList.contains('enlarged') ? 'block' : 'none';
}

function closeImage() {
    const enlargedImg = document.querySelector('.carousel img.enlarged');
    if (enlargedImg) {
        enlargedImg.classList.remove('enlarged');
    }
    document.getElementById('closeButton').style.display = 'none';
}

function playBackgroundMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
}

document.getElementById('nextButton').addEventListener('click', showNextMessage);
document.querySelectorAll('.carousel img').forEach(img => {
    img.addEventListener('click', enlargeImage);
});
document.getElementById('closeButton').addEventListener('click', closeImage);
