import './index.css';

const scores = [
  {
    name: "Name",
    score: 100
},
{
  name: "Name",
  score: 20
},
{
  name: "Name",
  score: 50
},
{
  name: "Name",
  score: 78
},
{
  name: "Name",
  score: 125
},
{
  name: "Name",
  score: 77
},
{
  name: "Name",
  score: 42
},

];

const obj = JSON.stringify(scores);
document.getElementById("leaderboard-list").innerHTML = obj;

// //Add lists

// scores.forEach((item) => {
//   const content = `<div class="col-md-6 top-feature">
//                       <div class="top-feature-1">
//                         <img src="${item.image}">
//                       </div>
//                       <div class="top-feature-2">
//                         <h4>${item.name}</h4>
//                         <h6><em>${item.description}</em></h6>
//                         <hr>
//                         <p>${item.notes}</p>
//                       </div>
//                     </div>`;
//   featuredSpeakersSect.innerHTML += content;
// });
