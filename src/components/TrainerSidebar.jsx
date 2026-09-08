import { NavLink, useNavigate } from "react-router-dom";

function TrainerSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-gray-900 text-white p-5">

      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          Dope Gym
        </h1>

        <p className="text-sm text-gray-400">
          Trainer Portal
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">

        <NavLink
          to="/trainer-dashboard"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/trainer-workout"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`
          }
        >
          Workout Plans
        </NavLink>

        <NavLink
          to="/trainer-diet"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`
          }
        >
          Diet Plans
        </NavLink>

        <NavLink
          to="/trainer-progress"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`
          }
        >
          Progress
        </NavLink>

        <NavLink
          to="/trainer-attendance"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`
          }
        >
          Attendance
        </NavLink>

      </nav>

      {/* Logout */}
      <div className="mt-10">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

    </aside>
  );
}

export default TrainerSidebar;