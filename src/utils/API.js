import axios from "axios";


// const APIKEY = "&apikey=trilogy";

export default function getNames(query) {
   
    const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
    return axios.get(BASEURL);


};