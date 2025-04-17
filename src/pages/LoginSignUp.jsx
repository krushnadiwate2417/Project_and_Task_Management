import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import GlobalContext from "../context/GlobalContext";


export default function LoginSignUp(){

    const {pathname} = useParams();
    const {isAdmin,setIsAdmin} = useContext(GlobalContext);
    const [isSignUp,setIsSignUp] = useState(false);
    const [error,setError] = useState('');

    return (<>
        <div>
            <div>
            <form>
                {isSignUp && <input type="text" placeholder="Enter Full Name"/>}
                <input type="email" placeholder="Enter Your Email"/>
                <input type="password" placeholder="Enter Your Password"/>
                {isSignUp && <input type="password" placeholder="Confirm Password"/>}
                <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
            </form>
            <button onClick={()=>setIsSignUp(!isSignUp)}>{isSignUp ? 'Login' : 'Sign Up'}</button>
            </div>
        </div>
    </>)
}