
import TrainerSidebar from "../components/TrainerSidebar";
import TrainerNavbar from "../components/TrainerNavbar";
import { useState } from "react";

function TrainerDashboard() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* =========================
          Sidebar
      ========================= */}
      <TrainerSidebar />

      {/* =========================
          Main Area
      ========================= */}
      <div className="ml-64 min-h-screen">

        {/* Navbar */}
        <TrainerNavbar />

        {/* =========================
            Dashboard Content
        ========================= */}
        <main className="w-full p-4 md:p-6 lg:p-8">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Trainer Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Welcome back! Here's an overview of your training activities.
            </p>
          </div>


          {/* =========================
              Overview Cards
          ========================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* My Members */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-500">
                My Members
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                24
              </h2>

              <p className="text-sm text-green-600 mt-2">
                3 new this month
              </p>
            </div>


            {/* Today's Sessions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-500">
                Today's Sessions
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                6
              </h2>

              <p className="text-sm text-orange-600 mt-2">
                2 remaining
              </p>
            </div>


            {/* Active Workout Plans */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-500">
                Active Workout Plans
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                18
              </h2>

              <p className="text-sm text-blue-600 mt-2">
                Currently active
              </p>
            </div>


            {/* Progress Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-500">
                Progress Reviews
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                5
              </h2>

              <p className="text-sm text-red-600 mt-2">
                Need attention
              </p>
            </div>

          </div>


          {/* =========================
              My Assigned Members
          ========================= */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            <div className="flex items-center justify-between mb-5">

              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  My Assigned Members
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Members currently assigned to you
                </p>
              </div>

              <button
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                View All
              </button>

            </div>


            {/* Members Table */}
            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead>
                  <tr className="border-b border-gray-200">

                    <th className="pb-3 text-sm font-medium text-gray-500">
                      Member
                    </th>

                    <th className="pb-3 text-sm font-medium text-gray-500">
                      Membership
                    </th>

                    <th className="pb-3 text-sm font-medium text-gray-500">
                      Status
                    </th>

                    <th className="pb-3 text-sm font-medium text-gray-500">
                      Action
                    </th>

                  </tr>
                </thead>


                <tbody>

                  {/* Member 1 */}
                  <tr className="border-b border-gray-100">

                    <td className="py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                          R
                        </div>

                        <div>
                          <p className="font-medium text-gray-800">
                            Rahim Ahmed
                          </p>

                          <p className="text-sm text-gray-500">
                            rahim@gmail.com
                          </p>
                        </div>

                      </div>

                    </td>

                    <td className="py-4 text-sm text-gray-600">
                      Premium
                    </td>

                    <td className="py-4">

                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                        Active
                      </span>

                    </td>

                    <td className="py-4">

                      <button
                        onClick={() =>
                          setSelectedMember({
                            name: "Rahim Ahmed",
                            email: "rahim@gmail.com",
                            phone: "01712345678",
                            membership: "Premium",
                            status: "Active",
                            joinDate: "January 10, 2026",
                            expiryDate: "July 10, 2026",
                          })
                        }
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        View
                      </button>

                    </td>

                  </tr>


                  {/* Member 2 */}
                  <tr className="border-b border-gray-100">

                    <td className="py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                          K
                        </div>

                        <div>
                          <p className="font-medium text-gray-800">
                            Karim Hasan
                          </p>

                          <p className="text-sm text-gray-500">
                            karim@gmail.com
                          </p>
                        </div>

                      </div>

                    </td>

                    <td className="py-4 text-sm text-gray-600">
                      Standard
                    </td>

                    <td className="py-4">

                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                        Active
                      </span>

                    </td>

                    <td className="py-4">

                      <button
                        onClick={() =>
                          setSelectedMember({
                            name: "Karim Hasan",
                            email: "karim@gmail.com",
                            phone: "01798765432",
                            membership: "Standard",
                            status: "Active",
                            joinDate: "February 15, 2026",
                            expiryDate: "May 15, 2026",
                          })
                        }
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        View
                      </button>

                    </td>

                  </tr>


                  {/* Member 3 */}
                  <tr>

                    <td className="py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold">
                          T
                        </div>

                        <div>
                          <p className="font-medium text-gray-800">
                            Tanvir Ahmed
                          </p>

                          <p className="text-sm text-gray-500">
                            tanvir@gmail.com
                          </p>
                        </div>

                      </div>

                    </td>

                    <td className="py-4 text-sm text-gray-600">
                      Premium
                    </td>

                    <td className="py-4">

                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                        Active
                      </span>

                    </td>

                    <td className="py-4">

                      <button
                        onClick={() =>
                          setSelectedMember({
                            name: "Tanvir Ahmed",
                            email: "tanvir@gmail.com",
                            phone: "01812345678",
                            membership: "Premium",
                            status: "Active",
                            joinDate: "March 5, 2026",
                            expiryDate: "September 5, 2026",
                          })
                        }
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        View
                      </button>

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>


          {/* =========================
              Today's Schedule
          ========================= */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            <div className="mb-5">

              <h2 className="text-lg font-semibold text-gray-800">
                Today's Schedule
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Your upcoming training sessions
              </p>

            </div>


            <div className="space-y-4">

              {/* Session 1 */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">

                <div>

                  <p className="font-medium text-gray-800">
                    Rahim Ahmed
                  </p>

                  <p className="text-sm text-gray-500">
                    Personal Training
                  </p>

                </div>

                <span className="text-sm font-medium text-blue-600">
                  10:00 AM
                </span>

              </div>


              {/* Session 2 */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">

                <div>

                  <p className="font-medium text-gray-800">
                    Karim Hasan
                  </p>

                  <p className="text-sm text-gray-500">
                    Strength Training
                  </p>

                </div>

                <span className="text-sm font-medium text-blue-600">
                  12:00 PM
                </span>

              </div>


              {/* Session 3 */}
              <div className="flex items-center justify-between">

                <div>

                  <p className="font-medium text-gray-800">
                    Tanvir Ahmed
                  </p>

                  <p className="text-sm text-gray-500">
                    Cardio Session
                  </p>

                </div>

                <span className="text-sm font-medium text-blue-600">
                  4:00 PM
                </span>

              </div>

            </div>

          </div>


        </main>


        {/* =========================
            Member Details Modal
        ========================= */}
        {selectedMember && (

          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

            <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6">

              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">

                <div>

                  <h2 className="text-xl font-bold text-gray-800">
                    Member Details
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Basic member information
                  </p>

                </div>

                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-500 hover:text-gray-800 text-xl"
                >
                  ✕
                </button>

              </div>


              {/* Member Profile */}
              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
                  {selectedMember.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {selectedMember.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {selectedMember.email}
                  </p>

                </div>

              </div>


              {/* Member Information */}
              <div className="grid grid-cols-2 gap-4">

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs text-gray-500">
                    Phone
                  </p>

                  <p className="font-medium text-gray-800 mt-1">
                    {selectedMember.phone}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs text-gray-500">
                    Membership
                  </p>

                  <p className="font-medium text-gray-800 mt-1">
                    {selectedMember.membership}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs text-gray-500">
                    Status
                  </p>

                  <p className="font-medium text-green-600 mt-1">
                    {selectedMember.status}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs text-gray-500">
                    Join Date
                  </p>

                  <p className="font-medium text-gray-800 mt-1">
                    {selectedMember.joinDate}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-lg p-4 col-span-2">

                  <p className="text-xs text-gray-500">
                    Membership Expiry
                  </p>

                  <p className="font-medium text-gray-800 mt-1">
                    {selectedMember.expiryDate}
                  </p>

                </div>

              </div>


              {/* Close Button */}
              <div className="flex justify-end mt-6">

                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default TrainerDashboard;

