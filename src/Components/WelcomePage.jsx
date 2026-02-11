import welcomeImage from '../assets/welcomeImage.jpg'

export default function WelcomePage(){
    return(
        <div className="welcomePage" style={{backgroundImage: `url(${welcomeImage})`}}>
            
            <div className="welcomeText">
                <h1>Welcome to Habitual!</h1>
                <p>Track your habits and achieve your goals with us.</p>
            </div>
            </div>
    )
}