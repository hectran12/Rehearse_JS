var request = require('request');
var HTML = require('html-parse-stringify');
const { get } = require('http');

function getinfo(error, response, body) {
    if (!error && response.statusCode == 200) {
        var obj_return = {}
        var ast = HTML.parse(response.body)
        let na, more = false;
        for (let item of ast[0].children[0].children[0].children) {
            try {
               
                
                if (item.attrs.property == 'og:description' || more == false){
                    var content = item.attrs.content.split(';i,')
                    obj_return['more'] = {
                        follow: content[0].trim().split(' ')[0],
                        following: content[1].trim().split(' ')[0],
                        count_posts: content[2].trim().split(' ')[0]
                    };
                    more = true;
                } else if (item.name == 'title' || na == false) {
                    var child = item.children[0].content.split('•')[0].replace('&#064;', '')
                    obj_return['name'] = child;
                    na = true;
                }
                
            } catch {
                
            }
        }
       console.log(obj_return)
    }
}
var headers = {
    'authority': 'www.instagram.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-language': 'vi,en;q=0.9,en-US;q=0.8',
    'cache-control': 'max-age=0',
    'sec-ch-prefers-color-scheme': 'dark',
    'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Microsoft Edge";v="108"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.46'
};

var options = {
    headers: headers
};

options['url'] = 'https://www.instagram.com/brasl_dvfb/';
request(options, getinfo);
