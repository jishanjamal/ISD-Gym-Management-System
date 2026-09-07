import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCards";
import RecentActivities from "../components/RecentActivities";
import AttendanceChart from "../components/AttendanceChart";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 ">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="ml-64">

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <main className="p-8">

          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              Welcome back, Admin!
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <StatCard
              title="Total Members"
              value="245"
              description="All registered members"
            />

            <StatCard
              title="Active Members"
              value="189"
              description="Currently active"
            />

            <StatCard
              title="Trainers"
              value="12"
              description="Active trainers"
            />

            <StatCard
              title="Monthly Revenue"
              value="৳45,000"
              description="This month's revenue"
            />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          <div className="lg:col-span-2">
             <AttendanceChart />
          </div>

          <RecentActivities />

          </div>

        </main>

      </div>

    </div>
  );
}

export default AdminDashboard;