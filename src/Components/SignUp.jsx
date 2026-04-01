import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {

  const navigate = useNavigate(); //  for redirecting after signup

  // store input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // runs when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
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
      alert(data.message);

      // redirect if successful
      if (response.ok) {
        navigate("/login");
      }

    } catch (error) {
      console.log("Signup error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="signupContainer">
      <div className="signupBox">
        <h2>Join the family</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;