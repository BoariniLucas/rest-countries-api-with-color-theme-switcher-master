const loc = document.location;
const baseURL = 'https://restcountries.com/v3.1/';
const nameCountry = loc.search.split('=')[1];

const detailFlag = document.querySelector('#detailFlag');
const countryNameCommon = document.querySelector('#countryNameCommon');
const nativeName = document.querySelector('#nativeName');
const population = document.querySelector('#population');
const countryRegion = document.querySelector('#countryRegion');
const subRegion = document.querySelector('#subRegion');
const capital = document.querySelector('#capital');
const tld = document.querySelector('#tld');
const currencies = document.querySelector('#currencies');
const languagesCountry = document.querySelector('#languages');
const borderContriesContainer = document.querySelector('#border-contries-container');

let countryAcronym;

async function catchCountry() {
    try {
        const response = await fetch(baseURL + `name/${nameCountry}?fullText=true`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function catchCountryName() {
    try {
        const response = await fetch(baseURL + `alpha/${countryAcronym}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

catchCountry().then(function(response) {
    const currenciesArr = Object.keys(response[0].currencies);
    const languagesArr = Object.keys(response[0].languages);
    const bordersCountry = response[0].borders;

    const currenciCountry = currenciesArr[0];
    
    console.log(response);
    detailFlag.src = response[0].flags.png;
    countryNameCommon.innerHTML = response[0].name.common;
    nativeName.innerHTML = response[0].name.official;
    population.innerHTML = response[0].population;
    countryRegion.innerHTML = response[0].region;
    subRegion.innerHTML = response[0].subregion;
    capital.innerHTML = response[0].capital[0];
    tld.innerHTML = response[0].tld[0];
    currencies.innerHTML = response[0].currencies[currenciCountry].name;    

    for (let i = 0; i < languagesArr.length; i++) {
        const countryLanguage = languagesArr[i];
        const counter = languagesArr.length;
        
        languagesCountry.innerHTML += response[0].languages[countryLanguage];        

        if(i != (counter-1)){
            languagesCountry.innerHTML += ", ";
        }        
    }  

    if(bordersCountry == undefined){
        const borderCountry = document.createElement('div');
        borderCountry.innerHTML = `No border countries`
        borderContriesContainer.appendChild(borderCountry);

    } else {        
        for (let i = 0; i < 3; i++) {
            
            countryAcronym = bordersCountry[i];    
            
            catchCountryName().then(function(countryAcronym){
                console.log(countryAcronym[0].name.common);

                const borderCountry = document.createElement('div');
                borderCountry.innerHTML = `
                    <a href="country.html?country=${countryAcronym[0].name.common}">
                        ${countryAcronym[0].name.common}
                    </a>
                `;    
                borderContriesContainer.appendChild(borderCountry);
            });
        }
    }
}); 