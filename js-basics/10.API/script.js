const API_URL = 'https://jsonplaceholder.typicode.com/users'

const container = document.querySelector('.container')
const box = document.querySelector('.box')

async function getAllUsersData() {
    const response = await fetch(API_URL)
    container.innerHTML = ''
    data.forEach((item) => {
        const div = document.createElement('div')
        div.className = 'box'
        div.innerHTML = `
        <h2> ${item.id}</h5>
        <h3>Name: ${item.name}</h3> 
        <h4>Street: ${item.address.street}</h4>
        <h4>City: ${item.address.city}</h4> 
        <h4>CompanyName: ${item.company.name}</h4> 
        <p>Phone: ${item.phone}</p>
        <h6>Email: ${item.email}</h2>
       `
        container.appendChild(div)
    })
}
getAllUserData()


