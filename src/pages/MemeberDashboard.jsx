import Sidebar from "../components/MemberSidebar";
import Navbar from "../components/MemberNavbar";
import { useState } from "react";

function MemberDashboard() {

 const [activeSection, setActiveSection] = useState("overview");

const attendance = [
    {
      id: 1,
      date: "03 September 2026",
      time: "08:30 AM",
      status: "Present",
    },
    {
      id: 2,
      date: "02 September 2026",
      time: "07:45 AM",
      status: "Present",
    },
    {
      id: 3,
      date: "01 September 2026",
      time: "09:10 AM",
      status: "Present",
    },
    {
      id: 4,
      date: "30 August 2026",
      time: "08:15 AM",
      status: "Present",
    },
    {
      id: 5,
      date: "29 August 2026",
      time: "07:55 AM",
      status: "Present",
    },
  ];

  const membership = {
  plan: "Premium",
  status: "Active",
  startDate: "01 September 2026",
  expiryDate: "28 February 2027",
  duration: "6 Months",
  price: "৳4000",
  daysRemaining: 178,
};

const profile = {
  memberId: "MEM001",
  name: "Member",
  email: "member@gmail.com",
  phone: "01712345678",
  dateOfBirth: "15 January 2000",
  gender: "Male",
  address: "Dhaka, Bangladesh",
  emergencyContact: "01812345678",
  joinDate: "01 September 2026",
};

const payments = [
  {
    id: 1,
    date: "01 September 2026",
    amount: "৳4000",
    method: "Cash",
    purpose: "Premium Membership",
    status: "Paid",
  },
  {
    id: 2,
    date: "01 March 2026",
    amount: "৳2500",
    method: "Cash",
    purpose: "Standard Membership",
    status: "Paid",
  },
];


  return (
<div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64">

        {/* Navbar */}
        <Navbar setActiveSection={setActiveSection} />

        {/* Dashboard Content */}
        <main className="p-6">

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back!
          </h1>

          <p className="text-gray-500 mb-6">
            Here's what's happening with your fitness journey.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div
               onClick={() => setActiveSection("attendance")}
               className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg hover:-translate-y-1 transition">
             <h3 className="text-gray-500">Attendance</h3>
                <p className="text-3xl font-bold text-gray-800">
                   24
                </p>
               <p className="text-sm text-gray-500">
                    Visits
               </p>
              <p className="text-blue-600 text-sm mt-3 font-medium">
                 Click to view attendance →
              </p>
            </div>

            <div
            onClick={() => setActiveSection("membership")}
            className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg hover:-translate-y-1 transition">
               <h3 className="text-gray-500">Membership</h3>
                 <p className="text-3xl font-bold text-gray-800">
                    Premium
                  </p>
                 <p className="text-sm text-gray-500">
                    6 Months
                  </p>

                  <p className="text-blue-600 text-sm mt-3 font-medium">
                    Click to view membership →
                  </p>
             </div>

             <div
               onClick={() => setActiveSection("payments")}
               className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg hover:-translate-y-1 transition">
              <h3 className="text-gray-500">Payments</h3>
                <p className="text-3xl font-bold text-gray-800">
                  ৳4000
                </p>
                <p className="text-sm text-gray-500">
                  Last Payment
                </p>
                 <p className="text-blue-600 text-sm mt-3 font-medium">
                   Click to view payment history →
                  </p>
              </div>

          </div>

          {activeSection === "attendance" && (
  <div className="bg-white rounded-xl shadow p-6 mt-6">

    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          My Attendance
        </h2>

        <p className="text-sm text-gray-500">
          Your recent gym attendance
        </p>
      </div>

      <button
        onClick={() => setActiveSection("overview")}
        className="text-sm text-blue-600 hover:underline"
      >
        Back to Dashboard
      </button>
    </div>

    {/* Attendance Summary */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          Total Visits
        </p>
        <p className="text-2xl font-bold">
          24
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          This Month
        </p>
        <p className="text-2xl font-bold">
          12
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          Attendance Rate
        </p>
        <p className="text-2xl font-bold">
          85%
        </p>
      </div>

    </div>

    {/* Attendance Table */}
    <div className="overflow-x-auto">
      <table className="w-full text-left">

        <thead>
          <tr className="border-b">
            <th className="py-3">Date</th>
            <th className="py-3">Time</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((record) => (
            <tr key={record.id} className="border-b">

              <td className="py-3">
                {record.date}
              </td>

              <td className="py-3">
                {record.time}
              </td>

              <td className="py-3">
                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                  {record.status}
                </span>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>


  </div>

)}

{activeSection === "membership" && (
  <div className="bg-white rounded-xl shadow p-6 mt-6">

    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          My Membership
        </h2>

        <p className="text-sm text-gray-500">
          Complete details of your current membership
        </p>
      </div>

      <button
        onClick={() => setActiveSection("overview")}
        className="text-sm text-blue-600 hover:underline"
      >
        Back to Dashboard
      </button>
    </div>

    {/* Current Membership */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          Current Plan
        </p>

        <p className="text-2xl font-bold text-gray-800">
          {membership.plan}
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          Status
        </p>

        <span className="inline-block mt-1 px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
          {membership.status}
        </span>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          Duration
        </p>

        <p className="text-2xl font-bold text-gray-800">
          {membership.duration}
        </p>
      </div>

    </div>

    {/* Membership Details */}
    <div className="border rounded-lg p-5 mb-6">

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Membership Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <p className="text-sm text-gray-500">
            Start Date
          </p>

          <p className="font-medium text-gray-800">
            {membership.startDate}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Expiry Date
          </p>

          <p className="font-medium text-gray-800">
            {membership.expiryDate}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Membership Price
          </p>

          <p className="font-medium text-gray-800">
            {membership.price}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Days Remaining
          </p>

          <p className="font-medium text-blue-600">
            {membership.daysRemaining} Days
          </p>
        </div>

      </div>

    </div>

    {/* Membership History */}
    <div>

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Membership History
      </h3>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b">
              <th className="py-3">Plan</th>
              <th className="py-3">Duration</th>
              <th className="py-3">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-3">
                Premium
              </td>

              <td className="py-3">
                6 Months
              </td>

              <td className="py-3">
                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                  Active
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-3">
                Standard
              </td>

              <td className="py-3">
                3 Months
              </td>

              <td className="py-3">
                <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                  Expired
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
)}

{activeSection === "profile" && (
  <div className="bg-white rounded-xl shadow p-6 mt-6">

    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          My Profile
        </h2>

        <p className="text-sm text-gray-500">
          Your personal account information
        </p>
      </div>

      <button
        onClick={() => setActiveSection("overview")}
        className="text-sm text-blue-600 hover:underline"
      >
        Back to Dashboard
      </button>
    </div>

    {/* Profile Header */}
    <div className="flex items-center gap-4 mb-8">
      
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
        M
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {profile.name}
        </h3>

        <p className="text-sm text-gray-500">
          Member ID: {profile.memberId}
        </p>
      </div>

    </div>

    {/* Personal Information */}
    <div className="border rounded-lg p-5">

      <h3 className="text-lg font-semibold text-gray-800 mb-5">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <p className="text-sm text-gray-500">
            Full Name
          </p>
          <p className="font-medium text-gray-800">
            {profile.name}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Email
          </p>
          <p className="font-medium text-gray-800">
            {profile.email}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Phone
          </p>
          <p className="font-medium text-gray-800">
            {profile.phone}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Date of Birth
          </p>
          <p className="font-medium text-gray-800">
            {profile.dateOfBirth}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Gender
          </p>
          <p className="font-medium text-gray-800">
            {profile.gender}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Join Date
          </p>
          <p className="font-medium text-gray-800">
            {profile.joinDate}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Address
          </p>
          <p className="font-medium text-gray-800">
            {profile.address}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Emergency Contact
          </p>
          <p className="font-medium text-gray-800">
            {profile.emergencyContact}
          </p>
        </div>

      </div>

    </div>

  </div>
)}

{activeSection === "payments" && (
  <div className="bg-white rounded-xl shadow p-6 mt-6">

    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          My Payments
        </h2>

        <p className="text-sm text-gray-500">
          Your payment history
        </p>
      </div>

      <button
        onClick={() => setActiveSection("overview")}
        className="text-sm text-blue-600 hover:underline"
      >
        Back to Dashboard
      </button>
    </div>

    {/* Payment Summary */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          Last Payment
        </p>

        <p className="text-2xl font-bold text-gray-800">
          ৳4000
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          Payment Status
        </p>

        <span className="inline-block mt-1 px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
          Paid
        </span>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          Total Payments
        </p>

        <p className="text-2xl font-bold text-gray-800">
          {payments.length}
        </p>
      </div>

    </div>

    {/* Payment History */}
    <div>

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Payment History
      </h3>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b">
              <th className="py-3">Date</th>
              <th className="py-3">Purpose</th>
              <th className="py-3">Amount</th>
              <th className="py-3">Method</th>
              <th className="py-3">Status</th>
            </tr>
          </thead>

          <tbody>

            {payments.map((payment) => (
              <tr key={payment.id} className="border-b">

                <td className="py-3">
                  {payment.date}
                </td>

                <td className="py-3">
                  {payment.purpose}
                </td>

                <td className="py-3 font-medium">
                  {payment.amount}
                </td>

                <td className="py-3">
                  {payment.method}
                </td>

                <td className="py-3">
                  <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    {payment.status}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>

  </div>
)}



        </main>

      </div>

    </div>

    


  );
}

export default MemberDashboard;