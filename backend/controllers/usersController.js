import { getUsersFromApi } from '../services/randomUserService.js';

export const getUsers = async (req, res) => {
    try {
        const users = await getUsersFromApi();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } catch (error) {
        console.error('Error fetching users:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to fetch users' }));
    }
};