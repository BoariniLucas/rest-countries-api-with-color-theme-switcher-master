const switchTheme = document.querySelector('#switch-theme');
const btnImgTheme = document.querySelector('#btn-img-theme');

let theme = 1;

switchTheme.addEventListener('change', () => {
    
    if(theme == 1) {

        btnImgTheme.src = "./assets/images/moon-fill.svg";

        document.body.style.setProperty('--headerTextColor', '#ffffff');
        document.body.style.setProperty('--headerDivisorColor', '#1e2b35');        
        document.body.style.setProperty('--headerBgColor', '#2b3743');

        theme = 2;

    } else {

        btnImgTheme.src = "./assets/images/moon.svg";

        document.body.style.setProperty('--headerTextColor', '#000000');
        document.body.style.setProperty('--headerDivisorColor', '#efefef');
        document.body.style.setProperty('--headerBgColor', 'none');

        theme = 1;
    }

});