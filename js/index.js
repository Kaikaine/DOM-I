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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// HEADER
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// document.querySelector("nav a").innerHTML = siteContent.nav["nav-item-1"];
// document.querySelector("nav a").innerHTML = siteContent.nav["nav-item-2"];
// document.querySelector("nav a").innerHTML = siteContent.nav["nav-item-3"];
// document.querySelector("nav a").innerHTML = siteContent.nav["nav-item-4"];
// document.querySelector("nav a").innerHTML = siteContent.nav["nav-item-5"];
// document.querySelector("nav a").innerHTML = siteContent.nav["nav-item-6"];

let nav = document.getElementsByTagName('a');
nav[0].innerHTML = siteContent.nav["nav-item-1"];
nav[1].innerHTML = siteContent.nav["nav-item-2"];
nav[2].innerHTML = siteContent.nav["nav-item-3"];
nav[3].innerHTML = siteContent.nav["nav-item-4"];
nav[4].innerHTML = siteContent.nav["nav-item-5"];
nav[5].innerHTML = siteContent.nav["nav-item-6"];


// CTA
document.querySelector('.cta-text h1').innerHTML = siteContent.cta.h1;
document.querySelector('.cta-text button').innerHTML = siteContent.cta.button;

document.querySelector('#cta-img').setAttribute('src', siteContent.cta["img-src"]);

// // TOP CONTENT
// document.querySelector('.text-content h4').innerHTML = siteContent["main-content"]["features-h4"];
// document.querySelector('.text-content p').innerHTML = siteContent["main-content"]["features-content"];

// document.querySelector('.text-content h4').innerHTML = siteContent["main-content"]["about-h4"];
// document.querySelector('.text-content p').innerHTML = siteContent["main-content"]["about-content"];

// // BOTTOM CONTENT 



// // CONTACT
// document.querySelector('.contact h4').innerHTML = siteContent.contact["contact-h4"];
// // document.querySelector('.contact p').innerHTML = siteContent.contact.address;
// // document.querySelector('.contact p').innerHTML = siteContent.contact.phone;

// let contact = document.querySelector('.contact p');
// contact[0].innerHTML = siteContent.contact.address;
// contact[1].innerHTML = siteContent.contact.phone;
// contact[2].innerHTML = siteContent.contact.email;

let hFour = document.getElementsByTagName('h4');
let para = document.getElementsByTagName('p');

hFour[0].innerHTML = siteContent["main-content"]["features-h4"];
para[0].innerHTML = siteContent["main-content"]["features-content"];

hFour[1].innerHTML = siteContent["main-content"]["about-h4"];
para[1].innerHTML = siteContent["main-content"]["about-content"];

document.querySelector('.middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

hFour[2].innerHTML = siteContent["main-content"]["services-h4"];
para[2].innerHTML = siteContent["main-content"]["services-content"]

hFour[3].innerHTML = siteContent["main-content"]["product-h4"];
para[3].innerHTML = siteContent["main-content"]["product-content"]

hFour[4].innerHTML = siteContent["main-content"]["vision-h4"];
para[4].innerHTML = siteContent["main-content"]["vision-content"]

hFour[5].innerHTML = siteContent.contact["contact-h4"]
para[5].innerHTML = siteContent.contact.address

para[6].innerHTML = siteContent.contact.phone

para[7].innerHTML = siteContent.contact.email

para[8].innerHTML = siteContent.footer.copyright