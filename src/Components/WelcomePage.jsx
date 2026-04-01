import welcomeImage from '../assets/welcomeImage.jpg'
import LoginPage from './LoginPage'

export default function WelcomePage(){
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className="welcomePage" style={{backgroundImage: `url(${welcomeImage})`}}>
            <div className="welcomeText">
                <h1>Welcome to Habitual!</h1>
                <p>Track your habits and achieve your goals with us.</p>
            </div>
            </div>
            <LoginPage/>
            </div>
    
    )
}