// this is config
var config = {
    apiKey: 'at_eZo7sdl0ySIe65pHyBtS9yMgLybiV'
};


class Request {
    constructor (theURL) {
        this.URL = theURL;
    }
    
    GET () {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", this.URL, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;  
    }
}

const main = {
    getMyIpAdress: () => {
        const rq = new Request("https://api.ipify.org?format=jsonp&callback=DisplayIP");
        return rq.GET();
    },
    init: (ipAddress) => {
        return `https://geo.ipify.org/api/v2/country?apiKey=${config.apiKey}&ipAddress=${ipAddress}`;
    },
    getJsonAPI: (url) => {
        const rq = new Request(url);
        return rq.GET();
    }
}

export default main;