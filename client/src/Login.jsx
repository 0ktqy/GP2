import React from 'react'
import { Link } from 'react-router-dom'
import image from '../src/images/favicon.png'
import Image01 from '../src/images/background.jpg';

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto" style={{
            
            // backgroundImage: `url(${Image01})`,
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
   
            <form action="/home" 
            
            style={{ border: "2px solid darkblue", padding: "10px" }}
            
            >


            <img src={image} alt="Oktay Resmi" style={{ marginLeft :'72px',display: 'flex', justifyContent: 'center', alignItems: 'center',width:100, height:100}} />


            <h2>Sign in to us</h2>
                <p >
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>

                <p> First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/Station">Back to Homepage</Link>.</p>
            </form>

        </div>
    )
}