document.querySelector('.switch-theme').addEventListener('click', switchTheme); 

function switchTheme() {
    const light = 'https://bootswatch.com/4/cosmo/bootstrap.min.css';
    const dark = 'https://bootswatch.com/4/darkly/bootstrap.min.css';
    const themeLink = document.querySelector('.theme-link');
    themeLink.href = themeLink.href === light ? dark : light;
}

document.querySelector('.switch-lang').addEventListener('click', switchLang); 

const ukDict = {
       'body > header > nav > a' : 'Стікери',
       '#navbarNav > ul > li.nav-item.active > a' : 'Додому',
       'body > main > div > article:nth-child(1) > div > p' : 'озеро- головне в світі'
}
const enDict = {
       'body > header > nav > a' : 'Stickerz',
       '#navbarNav > ul > li.nav-item.active > a' : 'Home',
       'body > main > div > article:nth-child(1) > div > p' : 'lake- main in the world'
}

function switchLang() {
    
    const langLink = document.querySelector('.switch-lang');
    const dict = langLink.innerText === 'UK' ? ukDict : enDict;
    for (const key in dict) {
         document.querySelector(key).innerText = dict[key];
       // fetch('endpoint')
        //   .then( response => response.text)
        //   .
    }
    langLink.innerText = langLink.innerText === 'UK' ? 'EN' : 'UK';
}
