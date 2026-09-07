import { NavLink, useNavigate } from "react-router-dom";

function MemberSidebar() {
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
          Member Portal
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">

        <NavLink
          to="/member-dashboard"
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
          to="/member-health-diet"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`
          }
        >
          Health & Diet
        </NavLink>

                <NavLink
          to="/member-workout"
          className={({ isActive }) =>
            `block px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`
          }
        >
          Workout
        </NavLink>

        <NavLink
          to="/member-progress"
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

export default MemberSidebar;