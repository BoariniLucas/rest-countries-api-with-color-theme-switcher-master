const loc = document.location;
const baseURL = 'https://restcountries.com/v3.1/';
const nameCountry = loc.search.split('=')[1];

const switchTheme = document.querySelector('#switch-theme');
const btnImgTheme = document.querySelector('#btn-img-theme');
const btnImgBack = document.querySelector('#id-img-btn-back');

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
let theme = 1;

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

switchTheme.addEventListener('change', () => {
    
    if(theme == 1) {

        btnImgTheme.src = "./assets/images/moon-fill.svg";
        btnImgBack.src = "./assets/images/arrow-back-white.svg";

        document.body.style.setProperty('--headerTextColor', '#ffffff');
        document.body.style.setProperty('--headerDivisorColor', '#1e2b35');        
        document.body.style.setProperty('--headerBgColor', '#2b3743');
        document.body.style.setProperty('--bgColorElements', '#2b3743');
        document.body.style.setProperty('--bgColorElementsHover', '#212e37');
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
        document.body.style.setProperty('--bgColorElementsHover', '#2b3743');
        document.body.style.setProperty('--bgColor', '#fafafa');
        document.body.style.setProperty('--fontColor', '#000000');
        document.body.style.setProperty('--shadowBoxColor', '#e6e0e0');
        document.body.style.setProperty('--btnBgColor', '#ffffff');
        document.body.style.setProperty('--borderContriesBgColor', '#ffffff');
        document.body.style.setProperty('--searchImage', 'url(../images/search-outline.svg)');

        theme = 1;
    }
});