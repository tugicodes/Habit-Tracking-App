export default function LoginPage(){
    return(
        <div className="loginPageSection">

            <div className="loginPageText">
                <h1>Welcome back!</h1>
                <p> We missed you. What are we looking for this time?</p>
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