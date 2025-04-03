//Huvudfilen som hanterar rendering och API-anrop
import { fetchUsers } from "./api.js";

let allUsers = [];

const createUserCard = (user) => {

    const card = document.createElement('div');
    card.classList.add('user-card');

    const img = document.createElement('img');
    img.src = user.picture.large;
    img.alt = `${user.name.first} ${user.name.last}`;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = `${user.name.first} ${user.name.last}`;
    card.appendChild(name);

    const email = document.createElement('p');
    email.textContent = user.email;
    card.appendChild(email);

    const phone = document.createElement('p');
    phone.textContent = user.phone;
    card.appendChild(phone);

    return card;

}

const renderUsers = (users) => {

    const container = document.getElementById('user-cards');

    container.innerHTML = '';

    users.forEach(user => {
        const card = createUserCard(user);
        container.appendChild(card);

    });
}

const searchUser = () => {
    const searchInput = document.getElementById('search').value.toLowerCase();


const filteredUsers = allUsers.filter(user =>
    user.name.first.toLowerCase().includes(searchInput) ||
    user.name.last.toLowerCase().includes(searchInput) ||
    user.email.toLowerCase().includes(searchInput)
)
if (searchInput === '') {
    renderUsers(allUsers);
    return;
} 
renderUsers(filteredUsers);

}

const showUsers = async () => {
    allUsers = await fetchUsers();
    renderUsers(allUsers);

    const searchButton = document.getElementById('buttonSearch');
    searchButton.addEventListener('click', searchUser);
}

showUsers();