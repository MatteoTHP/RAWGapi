const PageDetail = (argument) => {
  const preparePage = () => {
   let cleanedArgument = argument.replace(/\s+/g, "-");


    const fetchGame = (url, argument) => {
      let finalURL = url ;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let name = response.name
          let released = response.released
          let description = response.description
          let background_image = response.background_image
          let developper = ""
          if (response.developers[0]){ developper += response.developers[0].name}

          let tag = ""
          if (response.tags){  
            tag += "<a>"
              response.tags.forEach(t => {
                tag += `  ${t.name}  `
              })
              tag += " </a>"
          }

          let genre = ""
          if (response.genres){  
            genre += "<a>"
              response.genres.forEach(g => {
                genre += `  ${g.name}  `
              })
              genre += " </a>"
          }


          let editor = ""
          if (response.publishers[0]){editor +=  response.publishers[0].name}
          

          let plateform = ""
          if (response.platforms){  
              plateform += "<a>"
              response.platforms.forEach(e => {
                plateform += `  ${e.platform.name}  `
              })
              plateform += " </a>"
            }

          let site = response.website
          let average = response.rating
          let notes_nbr = response.ratings_count

          let buy = ""
          if (response.stores){  
           
            response.stores.forEach(s => {
              buy += `  <a href='https://www.${s.store.domain}'> ${s.store.name}  `
            })
            buy += " </a>"
          }

        

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.description").innerHTML = description;
          articleDOM.querySelector("div.background").innerHTML = `<img class="card-img-top" style="height:30em" src="${background_image}">`
          articleDOM.querySelector("p.developper").innerHTML = "Developper : " + developper;
          articleDOM.querySelector("div.tag").innerHTML = "Tags : " + tag;
          articleDOM.querySelector("div.genre").innerHTML = "Genres : " + genre;
          articleDOM.querySelector("p.editor").innerHTML = "Editor : " + editor;
          articleDOM.querySelector("div.plateform").innerHTML = plateform;
          articleDOM.querySelector("p.site").innerHTML = "Website : " + `<a href='${site}'> Here</a>`;
          articleDOM.querySelector("p.average").innerHTML =  average + "/5 - " + notes_nbr + " votes";
         
          articleDOM.querySelector("div.buy").innerHTML = "Buy here : " +  buy;
         
        });
    };

    const fetchScreenShot = (url, argument) => {
      let finalURL = url ;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          
        let screenshots = ""
        if (response.results){  
          screenshots += "<div>"
          response.results.forEach(s => {
            screenshots += `  <img style="height:15em" src="${s.image}">  `
          })
          screenshots += " </div>"
        }


          let articleDOM = document.querySelector(".page-detail .article");
          articleDOM.querySelector("div.screenshots").innerHTML = screenshots;
         
          
        });
    };


    fetchGame("https://api.rawg.io/api/games/"+ argument + `?key=` + process.env.RAWG_API, cleanedArgument);

    fetchScreenShot("https://api.rawg.io/api/games/"+ argument + `/screenshots?key=` + process.env.RAWG_API, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
        <div class="card thepic">
         <div class="background"></div>
        </div>
         <div class="card-body">
            <h1 class="title">  </h1>

            <p class="average"></p>
            <h5> Plot </h5>
            <p class="description"></p>

            <p class="release-date">Release date : <span></span></p>

            <p class="developper"></p>
            
            <p class="editor"></p>
            <div class="plateform"></div>
            <p class="site"></p>
            
            <div class="genre"></div>
            <div class="tag"></div>

            <div class="buy"></div>

            <div class="screenshots"></div>
          </div> 
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};


export {PageDetail};



