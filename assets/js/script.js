const switchTheme = document.querySelector('#switch-theme');
const btnImgTheme = document.querySelector('#btn-img-theme');
const btnImgBack = document.querySelector('#id-img-btn-back');
const btnBack = document.querySelector('#btnBack');
const btnDrop = document.querySelector('#dropbtn');
const content = document.querySelector('#content');
const contentDetail = document.querySelector('#contentDetail');
const baseURL = 'https://restcountries.com/v3.1/';
const searchCountry = document.querySelector('#searchCountry');


const detailPage = document.querySelector('#detailPage');
const mainPage = document.querySelector('#mainPage');


let theme = 1;

async function catchAllCountries() {
    try {
        const response = await fetch(baseURL + 'all?fields=name,flags,population,region,capital,subregion,currencies,languages,tld', {
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

switchTheme.addEventListener('change', () => {
    
    if(theme == 1) {

        btnImgTheme.src = "./assets/images/moon-fill.svg";
        btnImgBack.src = "./assets/images/arrow-back-white.svg";

        document.body.style.setProperty('--headerTextColor', '#ffffff');
        document.body.style.setProperty('--headerDivisorColor', '#1e2b35');        
        document.body.style.setProperty('--headerBgColor', '#2b3743');
        document.body.style.setProperty('--bgColorElements', '#2b3743');
        document.body.style.setProperty('--bgColor', '#212e37');
        document.body.style.setProperty('--fontColor', '#ffffff');
        document.body.style.setProperty('--shadowBoxColor', '#1f2c35');
        document.body.style.setProperty('--btnBgColor', '#2b3743');
        document.body.style.setProperty('--borderContriesBgColor', '#2b3743');
        document.body.style.setProperty('--searchImage', 'url(../images/search-outline-white.svg)');

        theme = 2;

    } else {

        btnImgTheme.src = "./assets/images/moon.svg";
        btnImgBack.src = "./assets/images/arrow-back.svg";

        document.body.style.setProperty('--headerTextColor', '#000000');
        document.body.style.setProperty('--headerDivisorColor', '#efefef');
        document.body.style.setProperty('--headerBgColor', '#ffffff');
        document.body.style.setProperty('--bgColorElements', '#ffffff');
        document.body.style.setProperty('--bgColor', '#fafafa');
        document.body.style.setProperty('--fontColor', '#000000');
        document.body.style.setProperty('--shadowBoxColor', '#e6e0e0');
        document.body.style.setProperty('--btnBgColor', '#ffffff');
        document.body.style.setProperty('--borderContriesBgColor', '#ffffff');
        document.body.style.setProperty('--searchImage', 'url(../images/search-outline.svg)');

        theme = 1;
    }

});

btnDrop.addEventListener('click', () => {
    const dropdown = document.querySelector('#dropdown');
    
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

btnBack.addEventListener('click', () => {
    mainPage.style.display = "flex";
    detailPage.style.display = "none";
});

catchAllCountries().then(function(response) {
    response.forEach(country => {

        const countryCard = document.createElement('div');
            countryCard.innerHTML = `
                <img class="flag" src="${country.flags.png}">
                    
                <div class="info-country-card">
                    <h2 class="country-name">${country.name.common}</h2>
                    <p>Population: <strong>${country.population}</strong></p>
                    <p>Region: <strong>${country.region}</strong></p>
                    <p>Capital: <strong>${country.capital}</strong></p>
                </div>
            `;
        countryCard.classList.add("country-card");
        content.appendChild(countryCard); 

        
        countryCard.addEventListener('click', () => {
            detailsCountry(country);           
        });
    });
});

function detailsCountry(country){
    mainPage.style.display = "none";
    detailPage.style.display = "flex";

    const detailFlag = document.querySelector('#detailFlag');
    const countryNameCommon = document.querySelector('#countryNameCommon');
    const nativeName = document.querySelector('#nativeName');
    const population = document.querySelector('#population');
    const countryRegion = document.querySelector('#countryRegion');
    const subRegion = document.querySelector('#subRegion');
    const capital = document.querySelector('#capital');

    const tld = document.querySelector('#tld');
    const currencies = document.querySelector('#currencies');
    const languages = document.querySelector('#languages');

    detailFlag.src = country.flags.png;
    countryNameCommon.innerHTML = country.name.common;
    nativeName.innerHTML = country.name.official;
    population.innerHTML = country.population;
    countryRegion.innerHTML = country.region;
    subRegion.innerHTML = country.subregion;
    capital.innerHTML = country.capital;

    tld.innerHTML = country.tld;
    currencies.innerHTML = country.currencies;
    languages.innerHTML = country.languages;

    console.log(country);   

}

searchCountry.addEventListener('input', () => {
    const countriesList = document.querySelectorAll('.country-name');

    countriesList.forEach(country => {
        if(!country.textContent.toLocaleLowerCase().includes(searchCountry.value.toLocaleLowerCase())){
            country.parentNode.parentNode.style.display = 'none';
        } else {
            country.parentNode.parentNode.style.display = 'block';
        }
    });
});