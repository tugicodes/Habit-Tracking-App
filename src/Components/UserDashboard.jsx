import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialHabits = [
  { name: "Morning Run", streak: 12, progress: 80, done: false },
  { name: "Read for 30 mins", streak: 7, progress: 60, done: false },
  { name: "Drink 2L Water", streak: 20, progress: 95, done: false },
  { name: "Meditate", streak: 3, progress: 40, done: false },
  { name: "No social media before 9am", streak: 5, progress: 55, done: false },
];

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const dayStatus = ["complete", "complete", "complete", "partial", "today", "empty", "empty"];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "MORNING";
  if (hour < 17) return "AFTERNOON";
  return "EVENING";
}

function getDateString() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export default function UserDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [habits, setHabits] = useState(initialHabits);

  const username = user?.username || "User";
  const doneCount = habits.filter((h) => h.done).length;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleHabit = (index) => {
    setHabits((prev) =>
      prev.map((h, i) => (i === index ? { ...h, done: !h.done } : h))
    );
  }; //when a user clicks a Habit, it changes its status

  return (
    <div className="db-wrapper">
      {/* TOP BAR */}
      <div className="db-topbar">
        <div className="db-logo">
          Habit<span>ual</span>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div className="db-user-pill">
            <div className="db-avatar">{username[0].toUpperCase()}</div>
            <span className="db-username">{username}</span>
          </div>
          <button className="db-logout-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="db-main">
        {/* GREETING */}
        <div className="db-greeting">
          <h1>
            GOOD {getGreeting()}, <span>{username.toUpperCase()}</span> 👋
          </h1>
          <p>{getDateString()} — Let's keep the streak alive.</p>
        </div>

        {/* STATS SECTION */}
        <div className="db-stats-row">
          <div className="db-stat-card">
            <div className="db-stat-label">Current Streak</div>
            <div className="db-stat-value">12</div>
            <div className="db-stat-sub">🔥 days in a row</div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-label">Done Today</div>
            <div className="db-stat-value">{doneCount}</div>
            <div className="db-stat-sub">of {habits.length} habits</div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-label">Best Streak</div>
            <div className="db-stat-value">31</div>
            <div className="db-stat-sub">🏆 personal best</div>
          </div>
        </div>

        {/* HABITS SECTION */}
        <div className="db-section-header">
          <div className="db-section-title">TODAY'S HABITS</div>
        </div>

        <div className="db-habits-grid">
          {habits.map((h, i) => (
            <div className="db-habit-row" key={i}>
              <div
                className={`db-habit-check ${h.done ? "done" : "pending"}`}
                onClick={() => toggleHabit(i)}
              >
                ✓
              </div>
              <div className="db-habit-info">
                <div className="db-habit-name">{h.name}</div>
                <div className="db-habit-streak">🔥 {h.streak} day streak</div>
              </div>
              <div className="db-habit-bar-wrap">
                <div
                  className="db-habit-bar"
                  style={{ width: `${h.progress}%` }}
                />
              </div>
              <div className="db-streak-badge">{h.progress}%</div>
            </div>
          ))}
        </div>

        {/* WEEK SECTION */}
        <div className="db-week-grid">
          <div className="db-section-header" style={{ marginBottom: 0 }}>
            <div className="db-section-title">THIS WEEK</div>
          </div>
          <div className="db-week-days">
            {days.map((d, i) => {
              const s = dayStatus[i];
              return (
                <div className="db-day-col" key={i}>
                  <div className="db-day-label">{d}</div>
                  <div className={`db-day-dot ${s}`}>
                    {s === "complete" ? "✓" : s === "partial" ? "~" : s === "today" ? "•" : ""}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
