import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [deletedUsers, setDeletedUsers] = useState([]);
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id, username) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setDeletedUsers((prev) => [...prev, username]);
        setUsers((prev) => prev.filter((u) => u._id !== id));
      }
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  return (
    <div className="db-wrapper">

      {/* TOP BAR */}
      <div className="db-topbar">
        <div className="db-logo">Habit<span>ual</span></div>
        <div className="admin-topbar-right">
          <div className="db-user-pill">
            <div className="db-avatar">{admin?.username[0].toUpperCase()}</div>
            <span className="db-username">{admin?.username}</span>
          </div>
          <button className="db-logout-btn" onClick={handleLogout}>Log out</button>
        </div>
      </div>

      {/* MAIN */}
      <div className="db-main">

        {/* GREETING */}
        <div className="db-greeting">
          <h1>ADMIN <span>PANEL</span></h1>
          <p>Manage users and monitor app activity.</p>
        </div>

        {/* STATS */}
        <div className="db-stats-row">
          <div className="db-stat-card">
            <div className="db-stat-label">Total Users</div>
            <div className="db-stat-value">{users.length}</div>
            <div className="db-stat-sub">registered accounts</div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-label">Deleted Users</div>
            <div className="db-stat-value">{deletedUsers.length}</div>
            <div className="db-stat-sub">this session</div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-label">Active Admins</div>
            <div className="db-stat-value">
              {users.filter((u) => u.role === "admin").length}
            </div>
            <div className="db-stat-sub">admin accounts</div>
          </div>
        </div>

        {/* USERS LIST */}
        <div className="db-section-header">
          <div className="db-section-title">ALL USERS</div>
        </div>

        <div className="admin-users-list">
          {users.map((u) => (
            <div key={u._id} className="admin-user-row">
              <div className="db-avatar">{u.username[0].toUpperCase()}</div>
              <div className="admin-user-info">
                <div className="admin-user-name">{u.username}</div>
                <div className="admin-user-id">ID: {u._id}</div>
              </div>
              <span className={`admin-role-badge ${u.role}`}>{u.role}</span>
              {u.role !== "admin" && (
                <button
                  className="admin-delete-btn"
                  onClick={() => handleDelete(u._id, u.username)}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>

        {/* DELETED USERS */}
        {deletedUsers.length > 0 && (
          <>
            <div className="db-section-header admin-section-margin">
              <div className="db-section-title">DELETED THIS SESSION</div>
            </div>
            <div className="admin-users-list">
              {deletedUsers.map((name, i) => (
                <div key={i} className="admin-deleted-row">
                  <span>✕</span>
                  {name}
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}