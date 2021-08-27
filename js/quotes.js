const quotes = [
    {qt:"I never dreamed about success, I worked for it.", author:'Estee Lauder'}
   ,{qt:"Do not try to be original. Just try to be good", author:'Paul Rand'}
   ,{qt:"The only thing worse than starting something and failing.. is not starting something.", author:'Seth Godin'}
   ,{qt:"All we have is NOW", author:'anon'}
   ,{qt:"Succes is never final", author:'윈스턴 처칠'}
   ,{qt:"언제나 현재에 집중할 수 있다면 행복할 것이다.", author:'파울로 코엘료'}
   ,{qt:"인생은 자전거와 같다. 균형을 잡으려면 움직여야 한다.", author:'알버트 아인슈타인'}
];


const sect_quote = document.getElementById('sect_quote');
const q_qt = sect_quote.getElementsByClassName('q_qt')[0];
const q_author = sect_quote.getElementsByClassName('q_author')[0];

let random_qt;
const MAX_BG_NUM = 6;

export function display_quotes(){
    random_qt = set_random(quotes.length - 1);
    q_qt.innerText = quotes[random_qt].qt;
    q_author.innerText = quotes[random_qt].author;
}//display_quotes

function set_random(max){
    const result = Math.round(Math.random().toFixed(2) * max);
    return result;
}//set_random

export function display_bg(){
    const url = `./img/bg-${set_random(MAX_BG_NUM - 1) + 1}.jpg`;
    document.body.style.backgroundImage = `url(${url})`;
}//display_bg