const getDataBtn = document.getElementById("fetchData");
const printDataBtn = document.getElementById("printData");
const countryList = document.getElementById('country-list');
const countriesList = [];

const printCountries = () => {

    for (let i = 0; i < countriesList.length; i++) {
        let country = countriesList[i];
        let li = document.createElement('li');
        li.innerHTML = country;
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
            for (let i = 0; i < data.length; i++) {
                countriesList.push(data[i].name);
            }
            console.log(countriesList);

        }
        //one way of parsing the JSON data
        //const data = JSON.parse(xhr.response);


    }





    xhr.send();

}



getDataBtn.addEventListener('click', getData);
printDataBtn.addEventListener('click', printCountries);