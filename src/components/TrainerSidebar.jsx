import { NavLink } from "react-router-dom";

function TrainerSidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/trainer",
      icon: "🏠",
    },
    {
      name: "My Members",
      path: "/trainer/members",
      icon: "👥",
    },
    {
      name: "Workouts",
      path: "/trainer/workouts",
      icon: "💪",
    },
    {
      name: "Diet Plans",
      path: "/trainer/diet",
      icon: "🥗",
    },
    {
      name: "Progress",
      path: "/trainer/progress",
      icon: "📈",
    },
    {
      name: "Attendance",
      path: "/trainer/attendance",
      icon: "📋",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          ISD Fitness
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Trainer Portal
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/trainer"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default TrainerSidebar;