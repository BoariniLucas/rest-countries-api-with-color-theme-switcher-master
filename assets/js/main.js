import { changeTheme } from "./script.js";
import { loadTheme } from "./script.js";
import { baseURL } from "./script.js";

const switchTheme = document.querySelector('#switch-theme');
const btnDrop = document.querySelector('#dropbtn');
const dropdown = document.querySelector('#dropdown');
const content = document.querySelector('#content');
const searchCountry = document.querySelector('#searchCountry');

const regionAfrica = document.querySelector('#region-africa');
const regionAmericas = document.querySelector('#region-americas');
const regionAsia = document.querySelector('#region-asia');
const regionEurope = document.querySelector('#region-europe');
const regionOceania = document.querySelector('#region-oceania');

let region;

loadTheme();

async function catchAllCountries() {
    try {
        const response = await fetch(baseURL + 'all?fields=name,flags,population,region,capital', {
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

async function catchRegionCountries() {
    try {
        const response = await fetch(baseURL + `region/${region}`, {
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

catchAllCountries().then(function(response) {
    response.forEach(country => {

        const countryCard = document.createElement('div');
            countryCard.innerHTML = `
            <a href="country.html?country=${country.name.common}">
                <img class="flag" src="${country.flags.png}">
                    
                <div class="info-country-card">
                    <h2 class="country-name">${country.name.common}</h2>
                    <p>Population: <strong>${country.population}</strong></p>
                    <p>Region: <strong class="region">${country.region}</strong></p>
                    <p>Capital: <strong>${country.capital}</strong></p>
                </div>
            </a>
            `;
        countryCard.classList.add("country-card");
        content.appendChild(countryCard); 
    });
});

regionAfrica.addEventListener('click', () => {
    regionSearch('africa');
});

regionAmericas.addEventListener('click', () => {
    regionSearch('americas');
});

regionAsia.addEventListener('click', () => {
    regionSearch('asia');
});

regionEurope.addEventListener('click', () => {
    regionSearch('europe');
});

regionOceania.addEventListener('click', () => {
    regionSearch('oceania');
});

function regionSearch(countriesRegion){
    const countriesList = document.querySelectorAll('.country-name');

    region = countriesRegion;

    countriesList.forEach(country => {
        country.parentNode.parentNode.parentNode.style.display = 'none';        
    });

    catchRegionCountries().then(function(region) {
        region.forEach(teste => {

            const countryCard = document.createElement('div');
                countryCard.innerHTML = `
                <a href="country.html?country=${teste.name.common}">
                    <img class="flag" src="${teste.flags.png}">
                        
                    <div class="info-country-card">
                        <h2 class="country-name">${teste.name.common}</h2>
                        <p>Population: <strong>${teste.population}</strong></p>
                        <p>Region: <strong class="region">${teste.region}</strong></p>
                        <p>Capital: <strong>${teste.capital}</strong></p>
                    </div>
                </a>
                `;
            countryCard.classList.add("country-card");
            content.appendChild(countryCard); 
        });
    });

    dropdown.classList.remove("visible");
    dropdown.classList.add("hidden");

    dropdown.style.visibility = "hidden"
}

searchCountry.addEventListener('input', () => {
    const countriesList = document.querySelectorAll('.country-name');

    countriesList.forEach(country => {
        if(!country.textContent.toLocaleLowerCase().includes(searchCountry.value.toLocaleLowerCase())){
            country.parentNode.parentNode.parentNode.style.display = 'none';
        } else {
            country.parentNode.parentNode.parentNode.style.display = 'block';
        }
    });
});

btnDrop.addEventListener('click', () => {

    if(dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("visible");

        dropdown.style.visibility = "visible"
    } else {
        dropdown.classList.remove("visible");
        dropdown.classList.add("hidden");

        dropdown.style.visibility = "hidden"
    }
});

switchTheme.addEventListener('change', () => {

    changeTheme();
});