/* Generate call api from the other web site */

const loadUserApi = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => getApi(data.results[0]));


}


const getApi = data => {
    console.log(data);
    displayUserDetails(data.name.title, data.name.first, data.name.last, data.email, data.dob.date, data.dob.age, data.location.city, data.location.country, data.phone, data.login.password);
    const img = document.getElementById('img-id');
    img.src = `${data.picture.medium}`;
}


/* Identify all the button and testing purpose */

const displayUserDetails = (nameTitle, name, lastName, email, birthdayDate, birthdayAge, city, location, phone, password) => {
    console.log(name, email, birthdayDate, birthdayAge, city, location, phone, password);

    document.getElementById('man').addEventListener('mouseover', function () {
        document.getElementById('set-text').innerText = `${nameTitle} ${name} ${lastName}`
    });

    document.getElementById('message').addEventListener('mouseover', function () {
        document.getElementById('set-text').innerText = `${email}`
    });

    document.getElementById('calender').addEventListener('mouseover', function () {
        document.getElementById('set-text').innerText = `${birthdayDate}  ${birthdayAge}`
    });
    document.getElementById('location').addEventListener('mouseover', function () {
        document.getElementById('set-text').innerText = `${city} ${location}`
    });
    document.getElementById('phone').addEventListener('mouseover', function () {
        document.getElementById('set-text').innerText = `${phone}`
    });
    document.getElementById('password').addEventListener('mouseover', function () {
        document.getElementById('set-text').innerText = `${password}`
    });

}

document.getElementById('man').addEventListener('mouseover', function () {
    const text = document.getElementById('common-text');
    text.innerText = 'Hi, My Name is ';
    document.getElementById('set-text').innerText = 'Jessica';
});

document.getElementById('message').addEventListener('mouseover', function () {
    const text = document.getElementById('common-text');
    text.innerText = 'My Email address is ';
    document.getElementById('set-text').innerText = 'jessica124@uk.com';
});

document.getElementById('calender').addEventListener('mouseover', function () {
    const text = document.getElementById('common-text');
    text.innerText = 'My birthday is';
    document.getElementById('set-text').innerText = '12-8-1998';
});
document.getElementById('location').addEventListener('mouseover', function () {
    const text = document.getElementById('common-text');
    text.innerText = 'My address is';
    document.getElementById('set-text').innerText = 'San Francisco';
});
document.getElementById('phone').addEventListener('mouseover', function () {
    const text = document.getElementById('common-text');
    text.innerText = 'My phone Number is';
    document.getElementById('set-text').innerText = '+91 8000808';
});
document.getElementById('password').addEventListener('mouseover', function () {
    const text = document.getElementById('common-text');
    text.innerText = 'My password is';
    document.getElementById('set-text').innerText = 'SweetyLadies';
});

