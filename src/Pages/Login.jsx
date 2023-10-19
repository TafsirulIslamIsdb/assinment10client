import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const [Ssuccess, setSsuccess] = useState('')
    const { signIn,handelwithpopup} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handellogin=e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            setSsuccess(
                Swal.fire({
                    icon: "success",
                    title: "Good job",
                    text: "User Login Successfully",
                    footer: '<a href="">Why do I have this issue?</a>',
                })
            )
            navigate(location?.state ? location.state : '/');

        })
        .catch(error => {
            console.error(error);
        })

    }

    return (
        <div>
            <div className='bg-emerald-400 container mx-auto text-center'>
                <h2 className="text-3xl p-5">Login Here</h2>
                <form onSubmit={handellogin} className='text-center p-5'>
                    <input type="email" name="email" placeholder="Email" className="mb-4  w-1/2 py-2 px-4" required />
                    <br />
                    <div className=" relative">
                        <input type="password" name="password" placeholder="password" className="mb-4 w-1/2 py-2 px-4" required />
                        {/* <span className="absolute mt-3 -ml-10" onClick={() => setshowpassword(!showpassword)}>{showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span> */}
                    </div>
                    <div className="">
                        <label className=" items-center text-center">
                            <a href="#" className="label-text-alt text-center it link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <br />
                    <input type="submit" value="Login" placeholder="Email" className="mb-4 w-1/2 py-2 px-4 btn btn-secondary" />

                </form>

                <div className="">
                     <button className="btn btn-primary" onClick={handelwithpopup}>Login with google</button> 
                </div>

                 {
                    Ssuccess && <p>{Ssuccess}</p>

                } 

                <div className='p-5 text-green-800 font-semibold'>
                    <p>If you are new in here? <NavLink to="/register" className='text-blue-700'>Pleace Register</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Login;