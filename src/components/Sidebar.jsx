import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
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
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="px-4 space-y-2">

        <NavLink
          to = "/dashboard"
          className= {({isActive}) =>
          `block w-full text-left px-4 py-3 rounded-lg transition ${
          isActive
          ? "bg-blue-600 text-white"
          : "text-gray-300 hover:bg-gray-700"
          }`
        }
        >
          Dashboard
        </NavLink>

        <NavLink
         to="/members"
          className={({ isActive }) =>
         `block w-full px-4 py-3 rounded-lg transition ${
          isActive
          ? "bg-blue-600 text-white"
         : "text-gray-300 hover:bg-gray-700"
         }`
      }
        >
        Members
         </NavLink>

       <NavLink
        to="/trainers"
        className={({ isActive }) =>
        `block w-full px-4 py-3 rounded-lg transition ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-gray-700"
        }`
        }
       >
          Trainers
        </NavLink>

       <NavLink
        to="/attendance"
        className={({ isActive }) =>
        `block w-full px-4 py-3 rounded-lg transition ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-gray-700"
        }`
        }
       >
          Attendance
        </NavLink>

       <NavLink
        to="/memberships"
        className={({ isActive }) =>
        `block w-full px-4 py-3 rounded-lg transition ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-gray-700"
        }`
        }
       >
          Memberships
        </NavLink>

        
       <NavLink
        to="/payments"
        className={({ isActive }) =>
        `block w-full px-4 py-3 rounded-lg transition ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-gray-700"
        }`
        }
       >
          Payments
        </NavLink>


       <NavLink
        to="/reports"
        className={({ isActive }) =>
        `block w-full px-4 py-3 rounded-lg transition ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-gray-700"
        }`
        }
       >
          Reports
        </NavLink>

       <NavLink
        to="/settings"
        className={({ isActive }) =>
        `block w-full px-4 py-3 rounded-lg transition ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-gray-700"
        }`
        }
       >
          Settings
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="mt-10">
        <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;