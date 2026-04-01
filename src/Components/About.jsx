import { useNavigate } from "react-router-dom";

const values = [
  {
    icon: "🔥",
    title: "Consistency Over Perfection",
    desc: "Missing one day doesn't break you. Showing up the next day does. We celebrate progress, not perfection.",
  },
  {
    icon: "📈",
    title: "Small Steps, Big Change",
    desc: "Every great habit starts tiny. We help you build momentum one day at a time until it becomes second nature.",
  },
  {
    icon: "🎯",
    title: "Clarity of Purpose",
    desc: "Knowing your why makes every habit stick. Habitual keeps your goals front and centre, always.",
  },
];

const steps = [
  { number: "01", title: "Sign Up", desc: "Create your free account in seconds. No fluff, straight to the point." },
  { number: "02", title: "Add Your Habits", desc: "Pick the habits you want to build. Start with one, grow from there." },
  { number: "03", title: "Track Daily", desc: "Check in every day. Watch your streaks grow and your life change." },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-wrapper">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <p className="about-eyebrow">Our Story</p>
          <h1 className="about-hero-title">
            Built for people who <span>actually</span> want to change.
          </h1>
          <p className="about-hero-sub">
            Habitual was born out of frustration — too many apps, too much noise, too little follow-through.
            We built the tool we wished existed: simple, focused, and honest.
          </p>
        </div>
        <div className="about-hero-accent" />
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="about-mission-label">Mission</div>
        <blockquote className="about-mission-quote">
          "To make building good habits the easiest thing you do every day."
        </blockquote>
        <p className="about-mission-body">
          We believe that who you are is built from what you do repeatedly. Habitual gives you
          the structure, accountability, and visibility to turn intentions into identity.
          No gamification gimmicks. No guilt trips. Just you, your habits, and your progress.
        </p>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <h2 className="about-section-title">What We Stand For</h2>
        <div className="about-values-grid">
          {values.map((v, i) => (
            <div className="about-value-card" key={i}>
              <div className="about-value-icon">{v.icon}</div>
              <h3 className="about-value-title">{v.title}</h3>
              <p className="about-value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
