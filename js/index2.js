fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayData(data));


const displayData = datas => {
    console.log(datas);
    datas.forEach(data => {
        const loadData = document.getElementById('load-data');
        const div = document.createElement('div');
        div.classList.add('my-div');
        div.innerHTML = `
            <div class="mx-auto w-50" id="user-info">
                <p>ID: ${data.id}</p>
                <h6>Name: ${data.name}</h6>
                <p> Email: ${data.email}</p>
                <p> Comment: ${data.body}</p>
                <button onclick="userDetails('${data.id}')">Details</button>
            </div>        
        `;
        loadData.appendChild(div);
    })
}

const userDetails = data => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    //     .then(res => res.json())
    //     .then(value => console.log(value));
    console.log(data);
}