const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navItems = document.getElementsByTagName('a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
//navItem[1].textContent = 'Product';
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

for (let navItem of navItems) {
    navItem.style.color = 'green';
}

// let ctaText = document.getElementsByTagName('h1');
// ctaText.textContent = '(siteContent['cta']['h1'])';
let ctaText = document.querySelector('h1');
ctaText.textContent = siteContent['cta']['h1'];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]['img-src']);

let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]['middle-img-src']);

let mainh4 = document.querySelectorAll('h4');
//console.log(mainh4);
mainh4[0].textContent = siteContent['main-content']['features-h4'];
mainh4[1].textContent = siteContent['main-content']['about-h4'];
mainh4[2].textContent = siteContent['main-content']['services-h4'];
mainh4[3].textContent = siteContent['main-content']['product-h4'];
mainh4[4].textContent = siteContent['main-content']['vision-h4'];
mainh4[5].textContent = siteContent['contact']['contact-h4'];

let pText = document.querySelectorAll('p');
//console.log(pText);

pText[0].textContent = siteContent['main-content']['features-content'];
pText[1].textContent = siteContent['main-content']['about-content'];
pText[2].textContent = siteContent['main-content']['services-content'];
pText[3].textContent = siteContent['main-content']['product-content'];
pText[4].textContent = siteContent['main-content']['vision-content'];

pText[5].textContent = siteContent['contact']['address'];
pText[6].textContent = siteContent['contact']['phone'];
pText[7].textContent = siteContent['contact']['email'];

pText[8].textContent = siteContent['footer']['copyright'];


let footText = document.getElementsByTagName('footer');
// console.log(footText);
footText.textContent = siteContent['footer']['copyright'];

let btnText = document.querySelector('.cta button');
btnText.textContent = siteContent['cta']['button'];