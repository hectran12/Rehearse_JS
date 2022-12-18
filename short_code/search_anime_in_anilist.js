// code do người viết:))
    var url = "https://myanimelist.net/search/all?cat=all&q=elaina";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("authority", "myanimelist.net");
    xhr.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
    xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
    xhr.setRequestHeader("referer", "https://myanimelist.net/search/all?q=elaina&cat=all");
    xhr.setRequestHeader("sec-fetch-dest", "document");
    xhr.setRequestHeader("sec-fetch-mode", "navigate");
    xhr.setRequestHeader("sec-fetch-site", "same-origin");
    xhr.setRequestHeader("sec-fetch-user", "?1");
    xhr.setRequestHeader("upgrade-insecure-requests", "1");
    xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        
        var content = xhr.responseText;
        if (content.includes('<h2 id="anime">Anime</h2>')) {
            var animeHtml = content.split('<h2 id="anime">Anime</h2>')[1].split('</article>')[0];
            let strippedString = animeHtml.replace(/(<([^>]+)>)/gi, "").trim()
            var animes = [];
            var temp = [];
            for (let item of strippedString.split('\n')) {
                var con = item.trim()
                if (con.length > 1 && con != 'add' && con.includes('Search for') != true) temp.push(con)
            }
            animes = processAnimeList(temp);
            var images = [];
            for (let item of animeHtml.split('<img class="lazyload" data-src="')){
                if(item.includes('https://cdn.myanimelist.net')) {
                    images.push(item.split('"')[0]);
                }
            } 
            var links = [];
            for (let pages of animeHtml.split('<a href="')) {
                if (pages.includes('https://myanimelist.net/anime/')) {
                    links.push(pages.split('"')[0]);
                }
            }
            var a = 0;
            for (let i = 0; i < animes.length; i++) {
                animes[i]['img_url'] = images[i];
            }
            var a = 0;
            for (let i = 0; i < links.length; i += 3) {
                if (links[i-3] != undefined && links[i-1] != undefined) {
                    animes[a]['ani_link'] = links[i-3]
                    animes[a]['ani_video'] = links[i-1]
                    a += 1;
                }
                
            }
           

            console.log(animes);
        }


      }};

      xhr.send();
  }


// code do chatgpt gen
function processAnimeList(input) {
    // Initialize an empty array to store the anime objects
    const animeList = [];
  
    // Loop through the input array in groups of 4 elements
    for (let i = 0; i < input.length; i += 4) {
      // Extract the information for each anime
      const title = input[i];
      const typeAndEpisodes = input[i + 1];
      const score = input[i + 2];
      const members = input[i + 3];
  
      animeList.push({
        title: title,
        typeAndEpisodes: typeAndEpisodes,
        score: score,
        members: members
      });
    }
  
    return animeList;
  }
