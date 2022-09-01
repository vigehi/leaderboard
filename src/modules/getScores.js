async function sendAPi(arg1, arg2) {
    const send = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2YZHWXMnjuWaiwI5N8as/scores';
    fetch(send, {
        method: 'POST', body: JSON.stringify({ user: arg1, score: arg2, }),
        headers: { 'Content-type': 'application/json; charset=UTF-8', },
    }).then((param) => param.json()).then((saved) => saved);
}
export default sendAPi; 