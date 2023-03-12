let score = 0;

// Prima domanda
let answer1 = prompt("Qual è la capitale dell' Italia? \n A. Milano\n B. Roma\n C. Napoli\n D. Firenze ");

switch (answer1.toUpperCase()) {
  case 'B':
    score++;
    break;
  default:
    break;
}

// Seconda domanda
let answer2 = prompt('Quale strumento musicale si può suonare col plettro? \n A. Pianoforte\n B. Sassofono\n C. Violino\n D. Chitarra');

switch (answer2.toUpperCase()) {
  case 'B':
    score++;
    break;
  default:
    break;
}

// Terza domanda
let answer3 = prompt('Quale animale è noto per la sua capacità di cambiare colore? \n A. Camaleonte \n B. Leopardo \n C. Zebra \n D. Iena');

switch (answer3.toUpperCase()) {
  case 'A':
    score++;
    break;
  default:
    break;
}

// Quarta domanda
let answer4 = prompt('Qual è il metallo più prezioso? \n A. Argento \n B. Oro \n C. Platino \n D. Rame');

switch (answer4.toUpperCase()) {
  case 'B':
    score++;
    break;
  default:
    break;
}

// Quinta domanda
let answer5 = prompt('Quale dei seguenti numeri è primo?\nA. 10\nB. 15\nC. 17\nD. 20');

switch (answer5.toUpperCase()) {
  case 'C':
    score++;
    break;
  default:
    break;
}

// Sesta domanda
let answer6 = prompt('Quale pianeta è noto per gli anelli che lo circondano? \n A. Venere \n B. Saturno \n C. Giove \n D. Urano');

switch (answer6.toUpperCase()) {
  case 'B':
    score++;
    break;
  default:
    break;
}

// Settima domanda
let answer7 = prompt("Quale è l'animale nazionale della Cina? \n A. Panda \n B. Tigre \n C. Leopardo \n D. Orso");

switch (answer7.toUpperCase()) {
  case 'A':
    score++;
    break;
  default:
    break;
}

// Ottava domanda
let answer8 = prompt('Quale artista è noto per il dipinto "La Gioconda"? \n A. Michelangelo \n B. Leonardo da Vinci \n C. Vincent van Gogh \n D. Pablo Picasso');

switch (answer8.toUpperCase()) {
  case 'B':
    score++;
    break;
  default:
    break;
}

// Nona domanda
let answer9 = prompt("Quale sport olimpico non prevede l'utilizzo di una palla? \n A. Tennis \n B. Pallanuoto \n C. Nuoto sincronizzato \n D. Ginnastica artistica");

switch (answer9.toUpperCase()) {
  case 'D':
    score++;
    break;
  default:
    break;
}

// Decima domanda
let answer10 = prompt("Quale di questi paesi non fa parte dell'Unione Europea? \n A. Francia \n B. Svezia \n C. Svizzera \n D. Germania");

switch (answer10.toUpperCase()) {
  case 'C':
    score++;
    break;
}

 // Punteggio Finale
alert(`Il tuo punteggio finale è ${score} su 10.`);

// 
if (score >= 8) {
alert('Complimenti, sei super!');
} else if (score >= 5) {
alert('Non male, ma puoi fare di meglio!');
} else {
alert('Mi dispiace, devi ripassare un pò di cose!');
}