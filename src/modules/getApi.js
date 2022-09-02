import leadList from '../index.js';

const getApi = async() => {
  const datar = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/p5yqiCio7d4FE7KGl6s2/scores';
  const dataf = await fetch(datar);
  const jsonFormat = await dataf.json();
  leadList.innerHTML = '';
  for (let i = 0; i < jsonFormat.result.length; i += 1) {
    leadList.innerHTML
            += ` <div class="score-board"> <p class="scores">
     ${jsonFormat.result[i].user}: ${jsonFormat.result[i].score}</p> 
     </div> `;
  }
}
export default getApi;