export function interpretText(text) {
    const webServerEndpoint = "https://api.masonpohler.com:5000/interpret/text";
    const headers = {
        'Content-Type': 'application/json'
    };
    return fetch(webServerEndpoint, {method: 'POST', headers: headers, body: text})
        .then( response => Promise.all([response, response.json()]));
}
