//Huvudfilen som hanterar rendering och API-anrop
import { fetchUsers } from "./api.js";

let allUsers = [];
let filteredUsers = [];
let currentPage = 1;
const resultsPerPage = 12;

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

const updatePagination = () => {
    document.getElementById('currentPage').textContent = currentPage;
    document.getElementById('nextPage').disabled = currentPage * resultsPerPage >= filteredUsers.length;
}

const loadUsers = () => {
    const startIndex = (currentPage -1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const usersToShow =filteredUsers.slice(startIndex, endIndex);
    renderUsers(usersToShow);
    updatePagination();

}


document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1){
        currentPage--;
        loadUsers();
    }
})

document.getElementById('nextPage').addEventListener('click', () => {
   /* if(currentPage * resultsPerPage < filteredUsers.length)*/{
        currentPage++;
        loadUsers();
    }

})

const searchUser = () => {
    const searchInput = document.getElementById('search').value.toLowerCase();


    filteredUsers = allUsers.filter(user =>
    user.name.first.toLowerCase().includes(searchInput) ||
    user.name.last.toLowerCase().includes(searchInput) ||
    user.email.toLowerCase().includes(searchInput)
)
currentPage = 1;
loadUsers();

}


const showUsers = async () => {
    allUsers = await fetchUsers(1, 100);
    filteredUsers = [...allUsers];

    document.getElementById('buttonSearch').addEventListener('click', searchUser);
    document.getElementById('search').addEventListener('keyup', searchUser);

    loadUsers();
}

showUsers();