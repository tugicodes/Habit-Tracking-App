import welcomeImage from '../assets/welcomeImage.jpg'
import LoginPage from './LoginPage'
import Services from './Services'
import { useNavigate } from 'react-router-dom'

const steps = [
  { number: "01", title: "Sign Up", desc: "Create your free account in seconds. No fluff, straight to the point." },
  { number: "02", title: "Add Your Habits", desc: "Pick the habits you want to build. Start with one, grow from there." },
  { number: "03", title: "Track Daily", desc: "Check in every day. Watch your streaks grow and your life change." },
];

export default function WelcomePage(){
    const navigate = useNavigate();
    
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className="welcomePage" style={{backgroundImage: `url(${welcomeImage})`}}>
            <div className="welcomeText">
                <h1>Welcome to Habitual!</h1>
                <p>Track your habits and achieve your goals with us.</p>
            </div>
            </div>

            <Services/>

            {/* HOW IT WORKS */}
      <section className="home-how">
        <h2 className="how-section-title">How It Works</h2>
        <div className="home-steps">
          {steps.map((s, i) => (
            <div className="home-step" key={i}>
              <div className="home-step-number">{s.number}</div>
              <div className="home-step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="home-step-connector" />}
            </div>
          ))}
        </div>
      </section>

       {/* Call to action */}
      <section className="home-cta">
        <h2>Ready to start?</h2>
        <p>Join hundreds of people already building better habits with Habitual.</p>
        <button className="home-cta-btn" onClick={() => navigate("/signup")}>
          Get Started — It's Free
        </button>
      </section>

            
            </div>
    
    )
}