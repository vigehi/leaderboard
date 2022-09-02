import './index.css';

import getApi from './modules/getApi.js';
import sendAPi from './modules/getScores.js';

const refresh = document.querySelector('.refresh-btn');
const leadList = document.querySelector('.leaderboard-list');
const name1 = document.querySelector('#name');
const score1 = document.querySelector('#score');
const add = document.querySelector('.add-btn');
add.addEventListener('click', (e) => {
  e.preventDefault();
  const Value1 = name1.value;
  const Value2 = score1.value;
  sendAPi(Value1, Value2);
  name1.value = '';
  score1.value = '';
});

refresh.addEventListener('click', () => {
  getApi();
});

export default leadList;
