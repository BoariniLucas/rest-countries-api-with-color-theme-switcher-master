export const baseURL = 'https://restcountries.com/v3.1/';

const loc = document.location;
const btnImgTheme = document.querySelector('#btn-img-theme');
const btnImgBack = document.querySelector('#id-img-btn-back');

export function changeTheme() {  
    
    let theme = localStorage.getItem("themeId");

    if(theme == 1) {        

        if(loc.pathname == "/country.html") {
            btnImgBack.src = "./assets/images/arrow-back.svg";
        }

        btnImgTheme.src = "./assets/images/moon.svg";

        document.body.style.setProperty('--headerTextColor', '#000000');
        document.body.style.setProperty('--headerDivisorColor', '#efefef');
        document.body.style.setProperty('--headerBgColor', '#ffffff');
        document.body.style.setProperty('--bgColorElements', '#ffffff');
        document.body.style.setProperty('--bgColorElementsHover', '#f1f1f1');
        document.body.style.setProperty('--bgColor', '#fafafa');
        document.body.style.setProperty('--fontColor', '#000000');
        document.body.style.setProperty('--shadowBoxColor', '#e6e0e0');
        document.body.style.setProperty('--btnBgColor', '#ffffff');
        document.body.style.setProperty('--borderContriesBgColor', '#ffffff');
        document.body.style.setProperty('--searchImage', 'url(../images/search-outline.svg)');

        localStorage.setItem("themeId", 2);

    } else {

        if(loc.pathname == "/country.html") {
            btnImgBack.src = "./assets/images/arrow-back-white.svg";
        }

        btnImgTheme.src = "./assets/images/moon-fill.svg";        

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

        localStorage.setItem("themeId", 1);
    }
}

export function loadTheme() {

    let theme = localStorage.getItem("themeId");

    if(theme == 1){

        if(loc.pathname == "/country.html") {
            btnImgBack.src = "./assets/images/arrow-back.svg";
        }

        btnImgTheme.src = "./assets/images/moon.svg";

        document.body.style.setProperty('--headerTextColor', '#000000');
        document.body.style.setProperty('--headerDivisorColor', '#efefef');
        document.body.style.setProperty('--headerBgColor', '#ffffff');
        document.body.style.setProperty('--bgColorElements', '#ffffff');
        document.body.style.setProperty('--bgColorElementsHover', '#f1f1f1');
        document.body.style.setProperty('--bgColor', '#fafafa');
        document.body.style.setProperty('--fontColor', '#000000');
        document.body.style.setProperty('--shadowBoxColor', '#e6e0e0');
        document.body.style.setProperty('--btnBgColor', '#ffffff');
        document.body.style.setProperty('--borderContriesBgColor', '#ffffff');
        document.body.style.setProperty('--searchImage', 'url(../images/search-outline.svg)');
    } else {

        if(loc.pathname == "/country.html") {
            btnImgBack.src = "./assets/images/arrow-back-white.svg";
        }

        btnImgTheme.src = "./assets/images/moon-fill.svg";        

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

    }
}