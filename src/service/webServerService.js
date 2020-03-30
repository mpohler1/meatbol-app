export function interpretText(text) {
    const webServerEndpoint = "http://104.58.132.91:8080/interpret/text";
    const headers = {
        'Content-Type': 'application/json'
    };
    return fetch(webServerEndpoint, {method: 'POST', headers: headers, body: text})
        .then( response => Promise.all([response, response.json()]));
}
