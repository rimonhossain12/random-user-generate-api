function loadData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayData(data));
}

const displayData = datas => {
    console.log(datas);
    const userData = document.getElementById('load-data');
    for (const data of datas) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>ID: ${data.id}</h4>
            <p>Name: ${data.name}</p>
             <p>Email: ${data.email}</p>
             <p>Comment: ${data.body}</p>
        `;

        userData.appendChild(div);
    }
}