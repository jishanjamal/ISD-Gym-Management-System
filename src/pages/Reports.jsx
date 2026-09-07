import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Reports() {
  // =========================
  // Chart Data
  // =========================

  const memberGrowthData = [
    { month: "Jan", members: 70 },
    { month: "Feb", members: 78 },
    { month: "Mar", members: 85 },
    { month: "Apr", members: 94 },
    { month: "May", members: 110 },
    { month: "Jun", members: 125 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 150000 },
    { month: "Feb", revenue: 175000 },
    { month: "Mar", revenue: 190000 },
    { month: "Apr", revenue: 210000 },
    { month: "May", revenue: 225000 },
    { month: "Jun", revenue: 245000 },
  ];

  const membershipData = [
    { name: "Basic", value: 45 },
    { name: "Standard", value: 38 },
    { name: "Premium", value: 42 },
  ];

  const attendanceData = [
    { month: "Jan", attendance: 78 },
    { month: "Feb", attendance: 82 },
    { month: "Mar", attendance: 80 },
    { month: "Apr", attendance: 86 },
    { month: "May", attendance: 88 },
    { month: "Jun", attendance: 90 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* =========================
          Sidebar
      ========================= */}
      <Sidebar />

      {/* =========================
          Main Area
      ========================= */}
      <div className="flex-1 min-w-0">

        {/* Navbar */}
        <Navbar />

        <main className="w-full p-4 md:p-6 lg:p-8">

          {/* =========================
              Page Header
          ========================= */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Reports
            </h1>

            <p className="text-gray-500 mt-1">
              View gym performance and management reports
            </p>
          </div>


          {/* =====================================================
              TOP SUMMARY CARDS
          ====================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Total Members */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500 text-sm">
                Total Members
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                125
              </h2>

              <p className="text-green-600 text-sm mt-2">
                +12% this month
              </p>
            </div>


            {/* Active Members */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500 text-sm">
                Active Members
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                98
              </h2>

              <p className="text-green-600 text-sm mt-2">
                78.4% of members
              </p>
            </div>


            {/* Monthly Revenue */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500 text-sm">
                Monthly Revenue
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                ৳245,000
              </h2>

              <p className="text-green-600 text-sm mt-2">
                +8.5% this month
              </p>
            </div>


            {/* Attendance */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500 text-sm">
                Attendance
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                84%
              </h2>

              <p className="text-blue-600 text-sm mt-2">
                This month
              </p>
            </div>

          </div>


          {/* =====================================================
              MEMBER STATISTICS
          ====================================================== */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Member Statistics
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Overview of current gym members
                </p>
              </div>

              <select className="w-full md:w-48 px-4 py-2.5 border border-gray-300 rounded-lg bg-white">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>

            </div>


            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Total */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Total Members
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-3">
                  125
                </h3>
              </div>


              {/* Active */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Active Members
                </p>

                <h3 className="text-3xl font-bold text-green-600 mt-3">
                  98
                </h3>
              </div>


              {/* Expired */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Expired Members
                </p>

                <h3 className="text-3xl font-bold text-red-600 mt-3">
                  27
                </h3>
              </div>


              {/* New */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  New Members
                </p>

                <h3 className="text-3xl font-bold text-blue-600 mt-3">
                  12
                </h3>
              </div>

            </div>
          </div>


          {/* =====================================================
              REVENUE REPORT
          ====================================================== */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Revenue Report
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Overview of gym payment and revenue
                </p>
              </div>

              <select className="w-full md:w-48 px-4 py-2.5 border border-gray-300 rounded-lg bg-white">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>

            </div>


            {/* Revenue Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Total Revenue */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Total Revenue
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-3">
                  ৳245,000
                </h3>
              </div>


              {/* Paid */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Paid Amount
                </p>

                <h3 className="text-3xl font-bold text-green-600 mt-3">
                  ৳220,000
                </h3>
              </div>


              {/* Pending */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Pending Amount
                </p>

                <h3 className="text-3xl font-bold text-orange-500 mt-3">
                  ৳25,000
                </h3>
              </div>


              {/* Transactions */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Total Transactions
                </p>

                <h3 className="text-3xl font-bold text-blue-600 mt-3">
                  65
                </h3>
              </div>

            </div>
          </div>


          {/* =====================================================
              ATTENDANCE REPORT
          ====================================================== */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Attendance Report
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Overview of member and trainer attendance
                </p>
              </div>

              <select className="w-full md:w-48 px-4 py-2.5 border border-gray-300 rounded-lg bg-white">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>

            </div>


            {/* Attendance Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Total Attendance */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Total Attendance
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-3">
                  1,245
                </h3>
              </div>


              {/* Present */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Present
                </p>

                <h3 className="text-3xl font-bold text-green-600 mt-3">
                  1,120
                </h3>
              </div>


              {/* Absent */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Absent
                </p>

                <h3 className="text-3xl font-bold text-red-600 mt-3">
                  125
                </h3>
              </div>


              {/* Attendance Rate */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Attendance Rate
                </p>

                <h3 className="text-3xl font-bold text-blue-600 mt-3">
                  90%
                </h3>
              </div>

            </div>
          </div>


          {/* =====================================================
              MEMBERSHIP REPORT
          ====================================================== */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Membership Report
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Overview of membership plans and subscriptions
                </p>
              </div>

              <select className="w-full md:w-48 px-4 py-2.5 border border-gray-300 rounded-lg bg-white">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>

            </div>


            {/* Membership Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Basic */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Basic Plan
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-3">
                  45
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Members
                </p>
              </div>


              {/* Standard */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Standard Plan
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-3">
                  38
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Members
                </p>
              </div>


              {/* Premium */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Premium Plan
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-3">
                  42
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Members
                </p>
              </div>


              {/* Most Popular */}
              <div className="border rounded-xl p-6">
                <p className="text-sm text-gray-500">
                  Most Popular Plan
                </p>

                <h3 className="text-2xl font-bold text-blue-600 mt-3">
                  Basic
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  45 members
                </p>
              </div>

            </div>
          </div>


          {/* =====================================================
              CHARTS SECTION
          ====================================================== */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">


            {/* =================================================
                MEMBER GROWTH
            ================================================== */}
            <div className="bg-white rounded-xl shadow-sm p-6 min-w-0">

              <h2 className="text-xl font-semibold text-gray-800">
                Member Growth
              </h2>

              <p className="text-gray-500 text-sm mt-1 mb-6">
                Growth of gym members over time
              </p>

              <div className="w-full h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                  <LineChart
                    data={memberGrowthData}
                    margin={{
                      top: 10,
                      right: 20,
                      left: 0,
                      bottom: 10,
                    }}
                  >

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="members"
                      stroke="#2563eb"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                    />

                  </LineChart>

                </ResponsiveContainer>

              </div>
            </div>


            {/* =================================================
                REVENUE GROWTH
            ================================================== */}
            <div className="bg-white rounded-xl shadow-sm p-6 min-w-0">

              <h2 className="text-xl font-semibold text-gray-800">
                Revenue Growth
              </h2>

              <p className="text-gray-500 text-sm mt-1 mb-6">
                Monthly gym revenue
              </p>

              <div className="w-full h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                  <BarChart
                    data={revenueData}
                    margin={{
                      top: 10,
                      right: 20,
                      left: 10,
                      bottom: 10,
                    }}
                  >

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                      dataKey="revenue"
                      fill="#2563eb"
                      radius={[4, 4, 0, 0]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>
            </div>


            {/* =================================================
                MEMBERSHIP PLANS
            ================================================== */}
            <div className="bg-white rounded-xl shadow-sm p-6 min-w-0">

              <h2 className="text-xl font-semibold text-gray-800">
                Membership Plans
              </h2>

              <p className="text-gray-500 text-sm mt-1 mb-6">
                Members by membership plan
              </p>

              <div className="w-full h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={membershipData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="45%"
                      outerRadius={100}
                      label
                    />

                    <Tooltip />

                    <Legend />

                  </PieChart>

                </ResponsiveContainer>

              </div>
            </div>


            {/* =================================================
                ATTENDANCE TREND
            ================================================== */}
            <div className="bg-white rounded-xl shadow-sm p-6 min-w-0">

              <h2 className="text-xl font-semibold text-gray-800">
                Attendance Trend
              </h2>

              <p className="text-gray-500 text-sm mt-1 mb-6">
                Monthly attendance percentage
              </p>

              <div className="w-full h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                  <LineChart
                    data={attendanceData}
                    margin={{
                      top: 10,
                      right: 20,
                      left: 0,
                      bottom: 10,
                    }}
                  >

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis domain={[0, 100]} />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="attendance"
                      stroke="#16a34a"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                    />

                  </LineChart>

                </ResponsiveContainer>

              </div>
            </div>

          </div>
        {/* =====================================================
    DOWNLOAD PROGRESS REPORT
====================================================== */}
<div className="bg-white rounded-xl shadow-sm p-6 mt-8">

  {/* Header */}
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-gray-800">
      Download Progress Report
    </h2>

    <p className="text-gray-500 text-sm mt-1">
      Download gym performance and management reports
    </p>
  </div>


  {/* Download Options */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Report Type */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Report Type
      </label>

      <select
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>Overall Report</option>
        <option>Member Report</option>
        <option>Revenue Report</option>
        <option>Attendance Report</option>
        <option>Membership Report</option>
      </select>
    </div>


    {/* Date Range */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Date Range
      </label>

      <select
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>This Month</option>
        <option>Last Month</option>
        <option>Last 3 Months</option>
        <option>This Year</option>
      </select>
    </div>


    {/* File Format */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        File Format
      </label>

      <select
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option>PDF</option>
        <option>Excel</option>
        <option>CSV</option>
      </select>
    </div>

  </div>


  {/* Download Button */}
  <div className="mt-6 flex justify-end">

    <button
      type="button"
      className="px-6 py-3 bg-blue-600 text-white rounded-lg
                 hover:bg-blue-700 transition duration-200
                 font-medium"
    >
      Download Report
    </button>

  </div>

</div>
        </main>
      </div>
    </div>
  );
}

export default Reports;