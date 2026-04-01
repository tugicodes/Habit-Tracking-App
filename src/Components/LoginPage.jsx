import {useState} from "react";
import { useNavigate } from "react-router-dom";



function LoginPage(){

      const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); //for redirecting after login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Login successful");

        // save user in browser
        localStorage.setItem("user", JSON.stringify(data.user));

        //  redirect to dashboard
        navigate("/user-dashboard");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setMessage("Server error");
    }
  };

    return(
        <div className="loginPageSection">

            <div className="loginPageText">
                <h1>Welcome back!</h1>
                <p> We missed you. What are we looking for this time?</p>
            </div>

            <div className="loginPageForm"> 

            <form onSubmit={handleSubmit} >

                <input
                 type="text" 
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 placeholder="Username"
                 />

                <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
            </div>
            
        </div>
    )
}

export default LoginPage;