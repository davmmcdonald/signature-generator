// Initialize preset information for each office location
const offices = [
    {
        'name': 'network',
        'phone': '719.955.0527',
        'address': '25 N Spruce Street, Suite 330, Colorado Springs, CO 80905',
        'facebook': 'https://www.facebook.com/hoffleigh/',
        'twitter': 'https://twitter.com/hoffleigh/',
        'instagram': 'https://www.instagram.com/hoffleigh/',
        'linkedin': 'https://www.linkedin.com/company/hoffleigh/',
    },
    {
        'name': 'colorado-springs',
        'phone': '719.630.2277',
        'address': '25 N Spruce Street, Suite 330, Colorado Springs, CO 80905',
        'facebook': 'https://www.facebook.com/hoffleigh/',
        'twitter': 'https://twitter.com/hoffleigh/',
        'instagram': 'https://www.instagram.com/hoffleigh/',
        'linkedin': 'https://www.linkedin.com/company/hoffleigh/',
    },
    {
        'name': 'denver',
        'phone': '720.572.5187',
        'address': '6454 S Quebec Street, Centennial, CO 80111',
        'facebook': 'https://www.facebook.com/hoffleighdenver/',
        'twitter': 'https://twitter.com/hoffleigh/',
        'instagram': 'https://www.instagram.com/hoffleigh/',
        'linkedin': 'https://www.linkedin.com/company/hoffleighdenver/',
    },
    {
        'name': 'northeast-ohio',
        'phone': '330.940.9360',
        'address': '3070 W Market Street, Suite 200, Fairlawn, OH 44333',
        'facebook': 'https://www.facebook.com/hoffleighneo/',
        'twitter': 'https://twitter.com/hoffleigh/',
        'instagram': 'https://www.instagram.com/hoffleigh/',
        'linkedin': 'https://www.linkedin.com/company/hoffleighneo/',
    },
];

const defaultContact = {
    'name': 'David McDonald',
    'title': 'Marketing Manager',
    'email': 'dmcdonald@hoffleigh.com',
    'mobile': '719.955.0527'
}

// Select form fields
const formOffice = document.getElementById('office');
const formHideMobile = document.getElementById('hideMobile');
const formName = document.getElementById('name');
const formTitle = document.getElementById('title');
const formEmail = document.getElementById('email');
const formMobile = document.getElementById('mobile');
const formHTML = document.getElementById('html');

// Select preview signature fields
const renderName = document.getElementById('renderName');
const renderTitle = document.getElementById('renderTitle');
const renderEmail = document.getElementById('renderEmail');
const renderMobile = document.getElementById('renderMobile');
const renderPhone = document.getElementById('renderPhone');
const renderAddress = document.getElementById('renderAddress');
const renderFacebook = document.getElementById('renderFacebook');
const renderTwitter = document.getElementById('renderTwitter');
const renderInstagram= document.getElementById('renderInstagram');
const renderLinkedin = document.getElementById('renderLinkedin');
const renderHTML = document.getElementById('renderHTML');

// Select various form buttons and UI elements
const copyButton = document.getElementById('copyButton');
const downloadButton = document.getElementById('downloadButton');
const emailButton = document.getElementById('emailButton');
const hidden = document.getElementById('hidden');
const officePhone = document.getElementById('officePhone');
const mobilePhone = document.getElementById('mobilePhone');
const alert = document.getElementById('alert');
const signatureWrapper = document.getElementById('signatureWrapper');

// Pull in search parameters, if they exist
const urlParameters = new URLSearchParams(window.location.search);

if (urlParameters.get('office')) {
    formOffice.value = urlParameters.get('office');
    updateOffice();
}
if (urlParameters.get('name')) {
    formName.value = urlParameters.get('name');
    updateName();
}
if (urlParameters.get('title')) {
    formTitle.value = urlParameters.get('title');
    updateTitle();
}
if (urlParameters.get('email')) {
    formEmail.value = urlParameters.get('email');
    updateEmail();
}
if (urlParameters.get('mobile')) {
    formMobile.value = urlParameters.get('mobile');
    updateMobile();
}
if (urlParameters.get('hidemobile')) {
    formHideMobile.checked = urlParameters.get('hidemobile') === 'true';
    toggleMobile();
}

if (window.location.search.includes('?')) {
    formOffice.style.display = 'none';
    formOffice.previousElementSibling.style.display = 'none';
    formName.readOnly = true;
    formTitle.readOnly = true;
    formEmail.readOnly = true;
    formMobile.readOnly = true;
    formHideMobile.style.display = 'none';
    formHideMobile.previousElementSibling.style.display = 'none';
    formHTML.style.display = 'none';
    formHTML.previousElementSibling.style.display = 'none';
    emailButton.style.display = 'none';
}

// Set up event listeners for changes in form
formOffice.addEventListener('change', updateOffice);
formHideMobile.addEventListener('change', toggleMobile);
formName.addEventListener('change', updateName);
formTitle.addEventListener('change', updateTitle);
formMobile.addEventListener('change', updateMobile);
formEmail.addEventListener('change', updateEmail);
formHTML.addEventListener('change', updateHTML);
copyButton.addEventListener('click', copyHTML);
downloadButton.addEventListener('click', downloadSignature);
emailButton.addEventListener('click', copyURL);

// Update office phone and address, as defined in the office array
function updateOffice() {
    const result = offices.filter(office => office.name === formOffice.value);
    renderPhone.firstChild.innerText = result[0].phone;
    renderPhone.firstChild.href = `tel:${result[0].phone}`;
    renderAddress.innerText = result[0].address;
    renderFacebook.href = result[0].facebook;
    renderTwitter.href = result[0].twitter;
    renderInstagram.href = result[0].instagram;
    renderLinkedin.href = result[0].linkedin;
}

// Update signature name based on value entered in form
function updateName() {
    if (formName.value !== '') {
        renderName.innerText = formName.value;
    } else {
        renderName.innerText = defaultContact.name;
    }
}

// Update signature title based on value entered in form
function updateTitle() {
    if (formTitle.value !== '') {
        renderTitle.innerText = formTitle.value;
    } else {
        renderTitle.innerText = defaultContact.title;
    }
}
// Update signature mobile phone based on value entered in form
function updateMobile() {
    if (formMobile.value !== '') {
        formMobile.value = formMobile.value.replace(/\D/g,'');
        if (formMobile.value.length === 10) {
            formMobile.value = `${formMobile.value.slice(0,3)}.${formMobile.value.slice(3,6)}.${formMobile.value.slice(6)}`;
        }
        renderMobile.firstChild.innerText = formMobile.value;
        renderMobile.firstChild.href = `tel:${formMobile.value}`;
    } else {
        renderMobile.firstChild.innerText = defaultContact.mobile;
        renderMobile.firstChild.href = `tel:${defaultContact.mobile}`;
    }
}

// Update signature email based on value entered in form
function updateEmail() {
    if (formEmail.value !== '') {
        formEmail.value = formEmail.value.replace(/ /g, '');
        if (!formEmail.value.includes('@')) {
            formEmail.value = `${formEmail.value}@hoffleigh.com`;
        }
        renderEmail.firstChild.innerText = formEmail.value;
        renderEmail.firstChild.href = `mailto:${formEmail.value}`;
    } else {
        renderEmail.firstChild.innerText = defaultContact.email;
        renderEmail.firstChild.href = `mailto:${defaultContact.email}`;
    }
}

function updateHTML() {
    renderHTML.innerHTML = formHTML.value;
}

function toggleMobile() {
    if (formHideMobile.checked) {
        hidden.appendChild(mobilePhone);
    } else {
        officePhone.parentElement.insertBefore(mobilePhone, officePhone);
    }
}

// Copy signature as rich text to clipboard for pasting in Outlook
function copyHTML() {
    const listener = event => {
      event.preventDefault();
      event.clipboardData.setData('text/html', signatureWrapper.innerHTML);
      event.clipboardData.setData('text/plain', signatureWrapper.innerHTML);
    };
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    alertOn();
  }

// Copy signature URL with parameters
function copyURL() {
    const listener = event => {
      event.preventDefault();
      const param = `?office=${formOffice.value}&name=${formName.value.replace(/ /g, '%20')}&title=${formTitle.value.replace(/ /g, '%20')}&email=${formEmail.value}&mobile=${formMobile.value}&hidemobile=${formHideMobile.checked}`;
      event.clipboardData.setData('text/plain', `https://davmmcdonald.github.io/signature-generator/${param}`);
    };
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    alertOn();
  }

// Shows "copied" notification under form button
function alertOn() {
    alert.style.visibility = 'visible';
    window.setTimeout(alertOff, 3000);
}

// Hides "copied" notification under form button
function alertOff() {
    alert.style.visibility = 'hidden';
}

function downloadSignature() {
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(new Blob([signatureWrapper.innerHTML], {type: "text/html"}));
    link.download = `${renderEmail.firstChild.innerText.split('@')[0]}.htm`;
    link.click();
    document.removeChild(link);
}