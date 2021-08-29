const loadUser = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayData(data.results));


}

loadUser();

const displayData = data => {
    console.log(data);
    const sectionInput = document.getElementById('section-id');
    for (const value of data) {
        // console.log(value);
        const div = document.createElement('div');
        div.classList.add('my-div');
        div.innerHTML = `
            <img src="${value.picture.large}">
           <h5>Name: ${value.name.title} ${value.name.first} ${value.name.last}</h5>
           <p>Gender: ${value.gender}</p>
           <p>Gmail: ${value.email}</p>
           <p>Location: ${value.location.country} ${value.location.city} ${value.location.postcode}</p>
           
        `;
        sectionInput.appendChild(div);
    }

}