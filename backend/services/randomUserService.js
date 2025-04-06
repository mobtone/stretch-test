//servicefil som hanterar anrop till random user API

export const getUsersFromApi = async (page = 1, resultsPerPage = 12) => {

    const seed = 'abc';
    const url = `https://randomuser.me/api/?page=${page}&results=${resultsPerPage}&seed=${seed}`;

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
