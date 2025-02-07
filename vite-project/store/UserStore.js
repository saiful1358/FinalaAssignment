import { create } from 'zustand';
import axios from "axios";

import { getEmail, setEmail, unauthorized } from '../src/components/utility/Utility.js';
import Cookies from "js-cookie"


const UserStore = create((set) => ({


    isLogin:() => {
     return !! Cookies.get("token")

    },


    LoginFromDate:{email:""},
    LoginFromOnChange:(name, value) => {
        set((state) =>({

            LoginFromDate:{
                ...state.LoginFromDate,
                [name]: value
            }

        }))
    },


    UserLogoutRequest:async()=>{
        set({isFormSubmit:true})
        let res=await axios.get(`/api/v1/UserLogout`);

        set({isFormSubmit:false})
        return res.data['status']==='success';
    },



    OTPFromDate:{otp:""},
    OTPFromOnChange:(name, value) => {
        set((state) =>({

            OTPFromDate:{
                ...state.OTPFromDate,
                [name]: value
            }

        }))
    },



    isFormSubmit:false,
    UserOtpRequest:async(email)=>{
        set({isFormSubmit:true})
        let res=await axios.get(`/api/v1/UserOTP/${email}`);
        setEmail(email);
        set({isFormSubmit:false})
        return res.data['status']==='success';
    },

    VerifyLoginRequest:async(otp)=>{
        set({isFormSubmit:true})
        let email =getEmail();
        let res=await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false})
        return res.data['status']==='success';
    },
    ProfileForm:{ cus_add: "", cus_city: "", cus_country: "", cus_fax: "", cus_name: "", cus_phone: "", cus_postcode: "", cus_state: "", ship_add: "", ship_city: "", ship_country: "", ship_name: "", ship_phone: "", ship_postcode: "", ship_state: ""},
    ProfileFromOnChange:(name, value) => {
        set((state) =>({
            ProfileForm:{
                ...state.ProfileForm,
                [name]:value
            }
        }))
    },
    ProfileDetails:null,
    ProfileDetailsRequest:async()=>{
        try{
            let res=await axios.get(`/api/v1/ReadProfile`);
            if(res.dta['data'].length>0){
                set({ProfileDetails:res.data['data'][0]})
                set({ProfileForm:res.data['data'][0]})
            }else{
                set({ProfileDetails:[]})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    ProfileSaveRequest:async(PostBody)=>{
        try{
            set({ProfileDetails:null})
            let res=await axios.post(`/api/v1/UpdateProfile`,PostBody);
            return res.data['status']==='success';
        }catch (e) {
            unauthorized(e.response.status)
        }
    }


}))

export default UserStore;