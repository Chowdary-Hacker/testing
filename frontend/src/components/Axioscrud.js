const axios = require('axios');

const API_URL = 'http://localhost:3333/alumni';

async function createData(data) {
    try {
        const response = await axios.post(`${API_URL}`, data);
        console.log('Created:', response.status);
    } catch (error) {
        console.log(error);
    }
}

async function readData() {
    try {
        const response = await axios.get(`${API_URL}`);
        console.log('Read:', response.status);
    } catch (error) {
        console.log(error);
    }
}

async function updateData(id, newData) {
    try {
        const response = await axios.put(`${API_URL}/${id}`, newData);
        console.log('Updated:', response.status);
    } catch (error) {
        console.log(error);
    }
}

async function deleteData(id) {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        console.log('Deleted:', response.data);
    } catch (error) {
        console.log(error);
    }
}

async function Axioscrud() {
    await createData({id:9, name: 'Mohan', email:'vms@gmail.com' });

    await createData({id:11, name: 'Sai', email:'sai@gmail.com' });

    await readData();

    await updateData(11, {name: 'Mohan', email:'vms@gmail.com' });

    await deleteData(11);
}

export default Axioscrud;
