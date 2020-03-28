class WebServerService {

    static interpretText(text, callback) {
        const webServerEndpoint = "http://104.58.132.91:8080/interpret/text";
        let request = new XMLHttpRequest();
        request.open("POST", webServerEndpoint, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.responseType = "json";
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.response);
                console.log(request.response.text);
                callback(request.response.text);
            }
        };
        request.send(text);
    }
}

export default WebServerService;
