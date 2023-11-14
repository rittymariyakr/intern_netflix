import axios from "axios";

//creating axios instance for baseurl
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"  //baseurl from api.txt
    
})

export default instance;