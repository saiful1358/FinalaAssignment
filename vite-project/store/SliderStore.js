import { create } from 'zustand';
import axios from "axios";


const SliderStore = create((set) => ({
  

    SliderList:null,
    SliderListRequest:async()=>{
        let res=await axios.get(`/api/v1/ProductSliderList`);
        if(res.data['status']==="success"){
            set({SliderList:res.data['data']})
        }
    }



  



}))

export default SliderStore;