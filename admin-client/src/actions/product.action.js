import axios from "../helpers/axios"

export const addProduct=(form)=>{
    return async dispatch=>{
        const res= axios.post("/products/create", form)
        console.log(res) 
    }
}