//servicefil som hanterar anrop till random user API

export const getUsersFromApi = async () => {

    const url = 'https://randomuser.me/api/?results=100';

    try {
        //här görs ett http-anrop med fetch
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users from API:', error);
        throw error;
    }
};
