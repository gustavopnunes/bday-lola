const compliments = [
    "Você é a luz dos meus dias!",
    "Seu riso é música para meus ouvidos!",
    "Você é minha alegria constante!",
    "Você é minha motivação diária para ser uma pessoa melhor!",
    "Você é minha melhor conquista!",
    "Seu jeito é encantador!",
    "Você é minha inspiração!",
    "Você é minha aventura favorita!",
    "Seu sorriso ilumina os meus dias!",
    "Você é uma pessoa incrível!",
    "Sua bondade é admirável!",
    "Você tem um coração de ouro!",
    "Sua inteligência é fascinante!",
    "Seu sorriso é contagiante!",
    "Seu charme é irresistível!",
    "Você é minha razão de sorrir!",
    "Você é minha inspiração diária!",
    "Seu olhar me derrete!",
    "Seu riso é a melhor melodia!",
    "Seu jeito é único e especial!"
];

function getDailyCompliment() {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Incrementar o dia manualmente para testar a mudança de elogio
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return compliments[dayOfYear % compliments.length];
}

function getRandomImage() {
    return "https://cataas.com/cat/cute";
}

function getCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('pt-BR', options);
}

document.addEventListener('DOMContentLoaded', () => {
    const complimentElement = document.createElement('div');
    complimentElement.className = 'compliment';
    complimentElement.textContent = getDailyCompliment();

    const imageElement = document.querySelector('.responsive-image');
    imageElement.src = getRandomImage();

    imageElement.parentNode.appendChild(complimentElement);

    const currentDateElement = document.getElementById('currentDate');
    currentDateElement.textContent = getCurrentDate();
});
