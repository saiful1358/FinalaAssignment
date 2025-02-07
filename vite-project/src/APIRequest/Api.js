import axios from "axios";


let baseURL= "http://localhost:5030/api/v1";

class ApiCall{

    async createProduct(reqBody){
        let result = await axios.post(`${baseURL}/creatProducts`,reqBody);
        if(result.data.status===true){
            return true;
        }else{
            return false;
        }
    }

}

export const {createProduct} = new ApiCall();