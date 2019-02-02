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
 let logo = document.getElementById("logo-img");
 logo.setAttribute('src', siteContent["nav"]["img-src"])
 
 //Navigation Section
 let navA = document.getElementsByTagName('a');
  navA[0].textContent = siteContent["nav"]['nav-item-1'];
  navA[1].textContent = siteContent["nav"]['nav-item-2'];
  navA[2].textContent = siteContent["nav"]['nav-item-3'];
  navA[3].textContent = siteContent["nav"]['nav-item-4'];
  navA[4].textContent = siteContent["nav"]['nav-item-5'];
  navA[5].textContent = siteContent["nav"]['nav-item-6'];
 
  let nav = document.querySelector("nav")
 
  //Two new Nav's
  let newNav1 = document.createElement('a');
  newNav1.appendChild(document.createTextNode('Support'));
  nav.appendChild(newNav1);
 
  let newNav2 = document.createElement('a');
  newNav2.append('Home');
  nav.prepend(newNav2)
 
  //Green Anchor Text Color
 for(let i = 0; i < navA.length; i++){
   navA[i].style.color = 'green';
 }

 //Sections 'Array'
 let sections = document.querySelectorAll('section')
 
 //Head Section

 let ctaHeader = sections[0].querySelector('h1').innerHTML = siteContent['cta']['h1'].split(' ').join(`<br>`);
 let ctaButton = sections[0].querySelector('button').textContent = siteContent['cta']['button'];
 let ctaImg = document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);
 
 //Main Content Section
 let mainContent = sections[1];
 let mainDivs = mainContent.querySelectorAll('div');
 
 let topContent = mainDivs[0];
 let topTextContent = topContent.querySelectorAll('div')
 
 //Top Section
 let featuresHeader = topTextContent[0].querySelector('h4') .textContent = siteContent['main-content']['features-h4'];;
 let featuresContent = topTextContent[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
 
 let aboutHeader = topTextContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];;
 let aboutContent = topTextContent[1].querySelector('p').textContent = siteContent['main-content']['about-content'];
 
 //Middle Image
 let middleImg = document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);;

 //Bottom Section
 let servicesHeader = mainDivs[4].querySelector('h4').textContent = siteContent['main-content']['services-h4'];;
 let servicesContent = mainDivs[4].querySelector('p').textContent = siteContent['main-content']['services-content'];

 
 let productHeader = mainDivs[5].querySelector('h4').textContent = siteContent['main-content']['product-h4'] ;
 let productContent = mainDivs[5].querySelector('p').textContent = siteContent['main-content']['product-content'] ;
 
 let visionHeader = mainDivs[6].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];;
 let visionContent = mainDivs[6].querySelector('p').textContent = siteContent['main-content']['vision-content'];
 
 //Contact Section
 let contactHeader = sections[2].querySelector('h4').textContent = siteContent['contact']['contact-h4'];
 let contactContent = sections[2].querySelectorAll('p');
 let address = contactContent[0].innerHTML = siteContent['contact']['address'].split('Street ').join(`Street <br>`);
 let phone = contactContent[1].textContent = siteContent['contact']['phone'];
 let email = contactContent[2].textContent = siteContent['contact']['email'];

 //Footer Section
 let footer = document.querySelector('footer').querySelector('p').textContent = siteContent['footer']['copyright']

//Stretch Goal

 navA[0].style.cursor = "pointer";
 navA[7].style.cursor = "pointer";
