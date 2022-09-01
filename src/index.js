import './index.css';
import list from './modules/element.js';
import scores from './modules/score.js';

scores.forEach((item) => {
  const content = `
                <div class="items">
                  <p>${item.name} : </p>
                  <p> ${item.score}</p>
                </div>
                `;
  list.innerHTML += content;
});