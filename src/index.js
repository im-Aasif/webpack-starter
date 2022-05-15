import genJoke from './genJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

// console.log(genJoke())
genJoke();
const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', genJoke)

