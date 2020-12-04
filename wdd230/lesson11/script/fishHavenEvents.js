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
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');

            if (towns[i].name == "Fish Haven"){

            h2.textContent = 'Upcoming Events:';

            div.appendChild(h2);

            p2.textContent = towns[i].events[0];

            div.appendChild(p2);

            p3.textContent = towns[i].events[1];

            div.appendChild(p3);

            p4.textContent = towns[i].events[2];

            div.appendChild(p4);

            card.appendChild(div);

            document.querySelector('div.events').appendChild(card);

            }

        }
        
    
    
    
    
    });