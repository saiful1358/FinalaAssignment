// import React from 'react';
// import UserSubmitButton from "./UserSubmibutton.jsx";
// import UserStore from '../../../store/UserStore.js';

// import toast from "react-hot-toast";
// import {useNavigate} from "react-router-dom";
// import validationHelper from "../utility/ValidationHelper.js"

// const LoginForm = () => {
//     let navigate = useNavigate();


//     let {LoginFromDate, LoginFromOnChange,UserOtpRequest} = UserStore();

//     const onFromSubmit =async () =>{
//         if(!validationHelper.IsEmail(LoginFromDate.email)){
//             toast.error("Valid Email adders require")
//         }else {
//             let res=await UserOtpRequest(LoginFromDate.email);
//             res?navigate("/otp"):toast.error("Something Went Wrong !")
//         }
//     }




//     return (
//         <>

// <div className=' p-3  bg-black'>
//             <h1 className='text-white  text-center mb-2'>Welcome To EquationIT</h1>

//         </div>

// <div className="container section mt-5 mb-5">



//                 <div className="row d-flex justify-content-center">
//                     <div className="col-md-5">
//                         <div className="card p-5">
//                             <h4>Enter Your Email</h4>
//                             <p>A verification code will be sent to the email address you provide</p>
//                             <input value={LoginFromDate.email} onChange={(e)=>{LoginFromOnChange("email", e.target.value)}} placeholder="Email Address" type="email" className="form-control"/>
//                             <UserSubmitButton onClick={onFromSubmit} className="btn mt-3 btn-success" text="Next"/>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="text-center py-3 border-top mt-3 bg-black p-3 text-white">
//           <p className="mb-0">&copy; {new Date().getFullYear()} EquationIT. All Rights Reserved.</p>
//         </div>


//         </>
//     );
// };

// export default LoginForm;


import React from 'react';
import UserSubmitButton from "./UserSubmibutton.jsx";
import UserStore from '../../../store/UserStore.js';
import useAuthStore from "../../../store/AuthStore"; // Import AuthStore
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import validationHelper from "../utility/ValidationHelper.js";

const LoginForm = () => {
    let navigate = useNavigate();
    let { LoginFromDate, LoginFromOnChange, UserOtpRequest } = UserStore();
    const { setAuthenticated } = useAuthStore(); // Use global state

    const onFromSubmit = async () => {
        if (!validationHelper.IsEmail(LoginFromDate.email)) {
            toast.error("Valid Email address required");
        } else {
            let res = await UserOtpRequest(LoginFromDate.email);
            if (res) {
                setAuthenticated(true); // Set user as authenticated
                navigate("/otp"); // Redirect to opt
            } else {
                toast.error("Something Went Wrong!");
            }
        }
    };

    return (
        <>
            <div className='p-3 bg-black'>
                <h1 className='text-white text-center mb-2'>Welcome To EquationIT</h1>
            </div>
            <div className="container section mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="card p-5">
                            <h4>Enter Your Email</h4>
                            <p>A verification code will be sent to the email address you provide</p>
                            <input
                                value={LoginFromDate.email}
                                onChange={(e) => { LoginFromOnChange("email", e.target.value) }}
                                placeholder="Email Address"
                                type="email"
                                className="form-control"
                            />
                            <UserSubmitButton onClick={onFromSubmit} className="btn mt-3 btn-success" text="Next" />
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

export default LoginForm;
