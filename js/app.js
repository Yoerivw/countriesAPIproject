const getDataBtn = document.getElementById("fetchData");
const printDataBtn = document.getElementById("printData");
const countryList = document.getElementById('country-list');
const dataSuccessSpan = document.querySelector('span.success');
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
        let output = '<div class="card">'
        output += '<h2 class="text-center">' + country + '</h2>'
        output += '<img class="flag" src="' + flag + '">'
        output += '<div class="container">'
        output += '<p><strong>Capital:</strong> ' + capital + '</p><p> Continent: ' + continent + '</p><p> Sub-continent: ' + subRegion + '</p><p> Population: ' + population + '</p></div>'
        output += '</div>'
        li.innerHTML = output;
        countryList.appendChild(li);
        dataSuccessSpan.textContent = "";
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
            console.log(xhr.response)
            dataSuccessSpan.textContent = "Could not retrieve the data from the API"
        } else if (xhr.status == 200) {
            const data = xhr.response;


            for (let i = 0; i < data.length; i++) {
                dataC = data[i];
                let country = dataC.name,
                    capital = dataC.capital,
                    continent = dataC.region,
                    subRegion = dataC.subregion,
                    population = dataC.population,
                    flag = dataC.flag;


                countriesList.push({ country, capital, continent, subRegion, population, flag });
            }
            dataSuccessSpan.textContent = "data has successfully been retrieved"

        }


    }
    xhr.send();
}

getDataBtn.addEventListener('click', getData);
printDataBtn.addEventListener('click', printCountries);