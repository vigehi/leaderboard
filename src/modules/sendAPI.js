async function sendAPi() {
    const send = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    fetch(send, {
        method: 'POST',
        body: JSON.stringify({
            'name': 'Be',
        }), headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((param) => param.json()).then((saved) => saved);
}
sendAPi(); 