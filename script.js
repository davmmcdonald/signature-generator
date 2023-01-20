let offices = [
    {
        'name': 'colorado-springs',
        'phone': '719.630.2277',
        'address': '25 N Spruce Street, Suite 330, Colorado Springs, CO 80905',
        'facebook': 'https://www.facebook.com/hoffleigh/',
        'twitter': 'https://twitter.com/hoffleigh/',
        'instagram': 'https://www.instagram.com/hoffleigh/'
        'linkedin': 'https://www.linkedin.com/company/hoffleigh/',
    },
    {
        'name': 'denver',
        'phone': '720.572.5187',
        'address': '6454 S Quebec Street, Centennial, CO 80111',
        'facebook': 'https://www.facebook.com/hoffleighdenver/',
        'twitter': 'https://twitter.com/hoffleigh/',
        'instagram': 'https://www.instagram.com/hoffleigh/'
        'linkedin': 'https://www.linkedin.com/company/hoffleighdenver/',
    },
    {
        'name': 'northeast-ohio',
        'phone': '330.940.9360',
        'address': '3070 W Market Street, Suite 200, Fairlawn, OH 44333',
        'facebook': 'https://www.facebook.com/hoffleighneo/',
        'twitter': 'https://twitter.com/hoffleigh/',
        'instagram': 'https://www.instagram.com/hoffleigh/'
        'linkedin': 'https://www.linkedin.com/company/hoffleighneo/',
    },
];

const formOffice = document.getElementById('office');
const formName = document.getElementById('name');
const renderName = document.getElementById('renderName');
const formTitle = document.getElementById('title');
const renderTitle = document.getElementById('renderTitle');
const formPhone = document.getElementById('phone');
const renderPhone = document.getElementById('renderPhone');
const formEmail = document.getElementById('email');
const renderEmail = document.getElementById('renderEmail');
const renderOfficePhone = document.getElementById('renderOfficePhone');
const renderAddress = document.getElementById('renderAddress');

formOffice.addEventListener('change', updateOffice);
formName.addEventListener('change', updateName);
formTitle.addEventListener('change', updateTitle);
formPhone.addEventListener('change', updatePhone);
formEmail.addEventListener('change', updateEmail);

function updateOffice() {
    const result = offices.filter(office => office.name === formOffice.value);
    renderOfficePhone.firstChild.innerText = result[0].phone;
    renderOfficePhone.firstChild.href = `tel:${result[0].phone}`;
    renderAddress.innerText = result[0].address;
}

function updateName() {
    if (formName.value !== '') {
        renderName.innerText = formName.value;
    } else {
        renderName.innerText = 'David McDonald';
    }
}

function updateTitle() {
    if (formTitle.value !== '') {
        renderTitle.innerText = formTitle.value;
    } else {
        renderTitle.innerText = 'Marketing Manager';
    }
}

function updatePhone() {
    if (formPhone.value !== '') {
        renderPhone.firstChild.innerText = formPhone.value;
        renderPhone.firstChild.href = `tel:${formPhone.value}`;
    } else {
        renderPhone.firstChild.innerText = '719.645.5036';
        renderPhone.firstChild.href = 'tel:719.645.5036';
    }
}

function updateEmail() {
    if (formEmail.value !== '') {
        renderEmail.firstChild.innerText = formEmail.value;
        renderEmail.firstChild.href = `mailto:${formEmail.value}`;
    } else {
        renderEmail.firstChild.innerText = 'dmcdonald@hoffleigh.com';
        renderEmail.firstChild.href = 'mailto:dmcdonald@hoffleigh.com';
    }
}