import React,{useState} from 'react';
import MiniLogo from "../../../assets/images/super-hello-mini-logo.jpg"
import WelcomeUser from './WelcomeUser';

function Login({showLogin,setShowLogin}) {
    const[clientCode, setClicentCode]=useState("");
    const [password, setPassword]=useState("");
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    const handleLogin = (e) => {
        e.preventDefault(); 
        if (clientCode === "client001" && password === "1234") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials");
            // Handle incorrect login details
        }
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    if (isLoggedIn) {
        return <WelcomeUser clientCode={clientCode} />;
    }

  return (
    <div id="login" className="login">
        <i onClick={closeLogin} className=" close-button fa-solid fa-circle-xmark"></i>
        <img className="login-page-logo" src={MiniLogo} alt="super hello company mini logo"/>
        <div className="login-container">
            <h1>Sign in</h1>
            <p>Please <span className="login-contact"><a className="contact" href="mailto:someone@example.com?subject=The%20Subject&body=Hello%2C%20let's%20talk!">Contact</a></span> us to sign up.</p>
            <form onSubmit={handleLogin}>
                <label htmlFor="client-code">Client Code</label>
                <input type="text"
                    id="client-code"
                    value={clientCode}
                    onChange={(e) => setClicentCode(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password"
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input type="submit" value="Sign in" id="submit"/>
            </form>

        </div>

    </div>
  )
}

export default Login;