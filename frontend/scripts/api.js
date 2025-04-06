// kodfil som hanterar anrop till backend-API:t

export const fetchUsers = async (page = 1, results =12) => {

    try {
        const response = await fetch(`http://localhost:8000/api/users?page=${page}&results=${results}`);
        const data = await response.json();
       
        console.log(data)
        return data.results
    }
    catch (error){
        console.error('Error fetching users from backend:', error);
        return [];
    }

}