import { useState } from "react";
import { NavLink } from "react-router-dom";


const Register = () => {
    const [Eerror, setEerror] = useState('')
    const handelregister=e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        
        const password = form.get('password');
        const name=form.get('name')
        console.log(name,email,password);
        setEerror('')
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            setEerror('Password is not match the criteria')
            return
        }
       

    }
    return (
        <div>
        <div className='bg-emerald-400 container mx-auto text-center'>
            <h2 className='text-3xl p-5'>Register Here</h2>
            <form onSubmit={handelregister} className='text-center p-5'>

                <input type="text" name="name" placeholder="your-name" className="mb-4  w-1/2 py-2 px-4" required />
                <br />
                <input type="email" name="email" placeholder="Email" className="mb-4  w-1/2 py-2 px-4" required />
                <br />
                <div className=" relative">
                    <input type="password" name="password" placeholder="password" className="mb-4 w-1/2 py-2 px-4" required />
                    {/* <span className="absolute mt-3 -ml-10" onClick={() => setshowpassword(!showpassword)}>{showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span> */}
                </div>
                <br />
                <input type="submit" value="Register" placeholder="Email" className="mb-4 w-1/2 py-2 px-4 btn btn-secondary" />
            </form>
            
                 {
                    Eerror && <p className="text-red-800">{Eerror}</p>
                }
                {/* {
                    Ssuccess && <p>{Ssuccess}</p>
                } */} 
            
            <div className='p-5 text-green-800 font-semibold'>
                <p>If already have an ccount? <NavLink to="/login" className='text-blue-700'>Pleace Login</NavLink></p>
            </div>
        </div>
    </div>
    );
};

export default Register;