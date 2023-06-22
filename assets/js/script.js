const switchTheme = document.querySelector('#switch-theme');
const btnImgTheme = document.querySelector('#btn-img-theme');
const btnDrop = document.querySelector('#dropbtn');


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