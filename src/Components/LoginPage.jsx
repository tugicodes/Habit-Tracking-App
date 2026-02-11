export default function LoginPage(){
    return(
        <div className="loginPageSection">

            <div className="loginPageText">
                <h1>Welcome Back.</h1>
                <p>What habits are we working on this time?</p>
            </div>

            <div className="loginPageForm"> 
            <form>
                <label htmlFor="form">Login Form</label>
                <label htmlFor="user">Username:</label>
                <input type="text" id="user" name="username" />
                <label htmlFor="pass">Password:</label>
                <input type="password" id="pass" name="password" />
                <button type="login">Log In</button>
            </form>
            </div>
            
        </div>
    )
}