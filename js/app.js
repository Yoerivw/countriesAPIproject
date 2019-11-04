const getDataBtn = document.getElementById("fetchData");
const printDataBtn = document.getElementById("printData");
const countryList = document.getElementById('country-list');
const countriesList = [];

const printCountries = () => {

    for (let i = 0; i < countriesList.length; i++) {
        let country = countriesList[i].country,

            capital = countriesList[i].capital,
            continent = countriesList[i].continent,
            subRegion = countriesList[i].subRegion,
            population = countriesList[i].population,
            flag = countriesList[i].flag;
        let li = document.createElement('li');
        let output = '<h3>Country: ' + country + '</h3><p> Capital: ' + capital + '</p><p> Continent: ' + continent + '</p><p> Sub-continent' + subRegion + '</p><p> Population: ' + population + '</p><img src="' + flag + '">'
        li.innerHTML = output;
        countryList.appendChild(li);
    }
}





const getData = () => {
    //Declare the xhr object
    const xhr = new XMLHttpRequest();
    //send a get request to the API
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all', );

    //Another way to get the response in JSON 
    xhr.responseType = 'json';
    //declare onload function, parse the JSON data and store in data
    xhr.onload = function() {

        if (xhr.status >= 400) {
            console.log(xhr.response);
        } else if (xhr.status == 200) {
            const data = xhr.response;
            /*  let countryData = {
                 country: data.name,
                 capital: data.capital,
                 continent: data.region,
                 subContinent: data['sub-region'],
                 population: data.population,
                 flag: data.flag
             } */

            for (let i = 0; i < data.length; i++) {
                dataC = data[i];
                let country = dataC.name,
                    capital = dataC.capital,
                    continent = dataC.region,
                    subRegion = dataC.subregion,
                    population = dataC.population,
                    flag = dataC.flag;
                /*  let countryData = {
                     country: country,
                     capital = capital,
                     continent: continent,
                     subcontinent: subContinent,
                     population: population,
                     flag: flag
                 } */


                countriesList.push({ country, capital, continent, subRegion, population, flag });
            }
            console.log(countriesList);

        }


    }
    xhr.send();
}



getDataBtn.addEventListener('click', getData);
printDataBtn.addEventListener('click', printCountries);