import {getUsers} from '../controllers/usersController.js';

export const handleRequest = (req, res) => {
    req.url.startsWith === '/api/users' && req.method === 'GET'
        const users = getUsers(req, res); //här anropas controllern för att hämta användardata
        console.log("users", users)
        return users;
}