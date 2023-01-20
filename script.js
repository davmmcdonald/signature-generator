// Initialize preset information for each office location
let offices = [
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

// Select various elements in the HTML
const formOffice = document.getElementById('office');
const formName = document.getElementById('name');
const renderName = document.getElementById('renderName');
const formTitle = document.getElementById('title');
const renderTitle = document.getElementById('renderTitle');
const formPhone = document.getElementById('phone');
const renderPhone = document.getElementById('renderPhone');
const formEmail = document.getElementById('email');
const formHTML = document.getElementById('html');
const renderEmail = document.getElementById('renderEmail');
const renderOfficePhone = document.getElementById('renderOfficePhone');
const renderAddress = document.getElementById('renderAddress');
const renderFacebook = document.getElementById('renderFacebook');
const renderTwitter = document.getElementById('renderTwitter');
const renderInstagram= document.getElementById('renderInstagram');
const renderLinkedin = document.getElementById('renderLinkedin');
const renderHTML = document.getElementById('renderHTML');
const submitButton = document.getElementById('submitButton');
const hidden = document.getElementById('hidden');
const officePhone = document.getElementById('officePhone');
const mobilePhone = document.getElementById('mobilePhone');
const signatureWrapper = document.getElementById('signatureWrapper');
const alert = document.getElementById('alert');

// Set up event listeners for changes in form
formOffice.addEventListener('change', updateOffice);
formName.addEventListener('change', updateName);
formTitle.addEventListener('change', updateTitle);
formPhone.addEventListener('change', updatePhone);
formEmail.addEventListener('change', updateEmail);
formHTML.addEventListener('change', updateHTML);
submitButton.addEventListener('click', copyHTML);

// Update office phone and address, as defined in the office array
function updateOffice() {
    const result = offices.filter(office => office.name === formOffice.value);
    renderOfficePhone.firstChild.innerText = result[0].phone;
    renderOfficePhone.firstChild.href = `tel:${result[0].phone}`;
    renderAddress.innerText = result[0].address;
    renderFacebook.href = result[0].facebook;
    renderTwitter.href = result[0].twitter;
    renderInstagram.href = result[0].instagram;
    renderLinkedin.href = result[0].linkedin;
    if (formOffice.value === 'network') {
        hidden.appendChild(mobilePhone);
    } else {
        officePhone.parentElement.insertBefore(mobilePhone, officePhone);
    }
}

// Update signature name based on value entered in form
function updateName() {
    if (formName.value !== '') {
        renderName.innerText = formName.value;
    } else {
        renderName.innerText = 'David McDonald';
    }
}

// Update signature title based on value entered in form
function updateTitle() {
    if (formTitle.value !== '') {
        renderTitle.innerText = formTitle.value;
    } else {
        renderTitle.innerText = 'Marketing Manager';
    }
}
// Update signature mobile phone based on value entered in form
function updatePhone() {
    if (formPhone.value !== '') {
        if (!formPhone.value.includes('.')) {
            formPhone.value = `${formPhone.value.slice(0,3)}.${formPhone.value.slice(3,6)}.${formPhone.value.slice(6)}`;
        }
        renderPhone.firstChild.innerText = formPhone.value;
        renderPhone.firstChild.href = `tel:${formPhone.value}`;
    } else {
        renderPhone.firstChild.innerText = '719.955.0527';
        renderPhone.firstChild.href = 'tel:719.955.0527';
    }
}

// Update signature email based on value entered in form
function updateEmail() {
    if (formEmail.value !== '') {
        if (!formEmail.value.includes('@')) {
            formEmail.value = `${formEmail.value}@hoffleigh.com`;
        }
        renderEmail.firstChild.innerText = formEmail.value;
        renderEmail.firstChild.href = `mailto:${formEmail.value}`;
    } else {
        renderEmail.firstChild.innerText = 'dmcdonald@hoffleigh.com';
        renderEmail.firstChild.href = 'mailto:dmcdonald@hoffleigh.com';
    }
}

function updateHTML() {
    renderHTML.innerHTML = formHTML.value;
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

// Shows "copied" notification under form button
function alertOn() {
    alert.style.visibility = 'visible';
    window.setTimeout(alertOff, 3000);
}

// Hides "copied" notification under form button
function alertOff() {
    alert.style.visibility = 'hidden';
}