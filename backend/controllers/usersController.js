import { getUsersFromApi } from '../services/randomUserService.js';

export const getUsers = async (req, res) => {

    const urlParams = new URLSearchParams(req.url.split('?')[1]);
    const page = parseInt(urlParams.get('page')) || 1;
    const resultsPerPage = parseInt(urlParams.get('results')) || 12;

    try {
        const users = await getUsersFromApi(page, resultsPerPage);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } catch (error) {
        console.error('Error fetching users:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to fetch users' }));
    }
};