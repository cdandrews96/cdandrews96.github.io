const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const towns = response.towns;

                    towns.forEach(
                        (towns) => {
                            if (towns.name.toLowerCase() === 'Fish Haven') {
                                //Fish Haven
                                document.querySelector('#fishHavenYearFounded')
                                    .textContent = towns.yearFounded;

                                    document.querySelector('#fishHavenImage')
                                        .setAttribute('src', 'images/' + towns.photo)

                                    

                            }
                                //Preston
                                else if (towns.name.toLowerCase() === 'Preston') {
                                    //Fish Haven
                                    document.querySelector('#prestonFounded')
                                        .textContent = town.yearFounded;
    
                                        document.querySelector('#prestonImage')
                                            .setAttribute('src', 'images/' + towns.photo)

                            }
                                //Soda Springs
                                else if (towns.name.toLowerCase() === 'Fish Haven') {
                                    //Fish Haven
                                    document.querySelector('#fishHavenYearFounded')
                                        .textContent = town.yearFounded;
    
                                        document.querySelector('#fishHavenImage')
                                            .setAttribute('src', 'images/' + towns.photo)
                            }
                        }
                    );
                }
            )
    });