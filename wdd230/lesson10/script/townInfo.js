const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
    
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++ ) {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');

            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){

            h2.textContent = towns[i].name;

            div.appendChild(h2);

            h3.textContent = towns[i].motto;
            
            div.appendChild(h3);

            p2.textContent = 'Year Founded: ' + towns[i].yearFounded;

            div.appendChild(p2);

            p3.textContent = 'Population: ' + towns[i].currentPopulation;

            div.appendChild(p3);

            p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

            div.appendChild(p4);

            card.appendChild(div);

            image.setAttribute('src', "images/" + towns[i].photo);
            
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);

            }

        }
        
    
    
    
    
    });