import React from 'react';

import UserSubmitButton from './UserSubmibutton.jsx';
import UserStore from '../../../store/UserStore.js';

import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import validationHelper from "../utility/ValidationHelper.js"

const OtpForm = () => {
    let navigate = useNavigate();

    let {OTPFromDate,  OTPFromOnChange,VerifyLoginRequest} = UserStore();


    const onFromSubmit =async () =>{
        if(validationHelper.IsEmpty(OTPFromDate.otp)){
            toast.error("Valid PIN require")
        }else {
            let res=await VerifyLoginRequest(OTPFromDate.otp);
            res?navigate("/home"):toast.error("Something Went Wrong !")
        }
    }




    return (

        <>

<div className=' p-3  bg-black'>
            <h1 className='text-white  text-center mb-2'>Welcome To OTP Page</h1>

        </div>


        <div className="container section mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Verification Code</h4>
                        <p>A verification code has been sent to the email address you provide</p>
                        <input value={OTPFromDate.otp} onChange={(e)=>{OTPFromOnChange("otp", e.target.value)}}   placeholder="Verification" type="text" className="form-control"/>
                        <UserSubmitButton onClick={onFromSubmit}   submit={false} className="btn mt-3 btn-success" text="Submit"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center py-3 border-top mt-3 bg-black p-3 text-white">
          <p className="mb-0">&copy; {new Date().getFullYear()} EquationIT. All Rights Reserved.</p>
        </div>

        </>
    );
};

export default OtpForm;