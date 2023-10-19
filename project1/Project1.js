import axios from "axios";

export default async function getData(userId) {
    const number = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    console.log(number.data);
    const number2 = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    console.log(number2.data);  
}

