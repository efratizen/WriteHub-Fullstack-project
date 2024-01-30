import axios from "axios";

const getItems=async(url)=>{
    const response=await axios.get(url)
    return response.data
}

export {getItems}