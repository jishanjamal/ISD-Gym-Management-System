import { useState } from "react";

import TrainerSidebar from "../components/TrainerSidebar";
import TrainerNavbar from "../components/TrainerNavbar";

function TrainerAttendance() {

  // =========================
  // Assigned Members
  // =========================

  const members = [
    {
      id: 1,
      name: "Rahim Ahmed",
      email: "rahim@gmail.com",
      membership: "Premium",
      totalSessions: 22,
      present: 19,
      absent: 3,
    },

    {
      id: 2,
      name: "Karim Hasan",
      email: "karim@gmail.com",
      membership: "Standard",
      totalSessions: 20,
      present: 16,
      absent: 4,
    },

    {
      id: 3,
      name: "Tanvir Ahmed",
      email: "tanvir@gmail.com",
      membership: "Premium",
      totalSessions: 25,
      present: 23,
      absent: 2,
    },
  ];

  // =========================
  // Attendance History
  // These records will later
  // come from the QR system
  // =========================

  const attendanceHistory = {
    Rahim: [
      { date: "2026-09-01", time: "08:42 AM", status: "Present" },
      { date: "2026-09-02", time: "08:37 AM", status: "Present" },
      { date: "2026-09-03", time: "-", status: "Absent" },
      { date: "2026-09-04", time: "09:05 AM", status: "Present" },
      { date: "2026-09-05", time: "08:51 AM", status: "Present" },
      { date: "2026-09-06", time: "09:12 AM", status: "Present" },
    ],

    Karim: [
      { date: "2026-09-01", time: "10:15 AM", status: "Present" },
      { date: "2026-09-02", time: "-", status: "Absent" },
      { date: "2026-09-03", time: "10:04 AM", status: "Present" },
      { date: "2026-09-04", time: "09:58 AM", status: "Present" },
      { date: "2026-09-05", time: "-", status: "Absent" },
      { date: "2026-09-06", time: "10:10 AM", status: "Present" },
    ],

    Tanvir: [
      { date: "2026-09-01", time: "07:32 AM", status: "Present" },
      { date: "2026-09-02", time: "07:41 AM", status: "Present" },
      { date: "2026-09-03", time: "07:35 AM", status: "Present" },
      { date: "2026-09-04", time: "07:29 AM", status: "Present" },
      { date: "2026-09-05", time: "-", status: "Absent" },
      { date: "2026-09-06", time: "07:44 AM", status: "Present" },
    ],
  };

  // =========================
  // State
  // =========================

  const [selectedMember, setSelectedMember] = useState(null);

  // =========================
  // Select Member
  // =========================

  const handleSelectMember = (member) => {
    setSelectedMember(member);
  };

  // =========================
  // Get History
  // =========================

  const memberKey = selectedMember
    ? selectedMember.name.split(" ")[0]
    : null;

  const history = memberKey
    ? attendanceHistory[memberKey]
    : [];

  // =========================
  // Attendance Percentage
  // =========================

  const attendancePercentage = selectedMember
    ? (
        (selectedMember.present /
          selectedMember.totalSessions) *
        100
      ).toFixed(0)
    : 0;

  // =========================
  // Return
  // =========================

  return (
    <div className="min-h-screen bg-gray-100">

      {/* =========================
          Trainer Sidebar
      ========================= */}

      <TrainerSidebar />


      {/* =========================
          Main Area
      ========================= */}

      <div className="ml-64">

        {/* =========================
            Trainer Navbar
        ========================= */}

        <TrainerNavbar />


        {/* =========================
            Page Content
        ========================= */}

        <main className="p-8">

          {/* Page Heading */}

          <div className="mb-8">

            <h2 className="text-2xl font-bold text-gray-800">
              Attendance
            </h2>

            <p className="text-gray-500 mt-1">
              View attendance records of your assigned members.
            </p>

          </div>


          {/* =========================
              QR Information
          ========================= */}

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">

            <div className="flex items-start gap-4">

              <div className="text-2xl">
                📱
              </div>

              <div>

                <h3 className="font-semibold text-blue-800">
                  QR-Based Attendance
                </h3>

                <p className="text-sm text-blue-700 mt-1">
                  Attendance is automatically recorded when members
                  scan the gym attendance QR code. Trainers can view
                  the recorded attendance here.
                </p>

              </div>

            </div>

          </div>


          {/* =========================
              Select Member
          ========================= */}

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">

            <h3 className="text-lg font-semibold text-gray-800 mb-5">
              Select Member
            </h3>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {members.map((member) => (

                <button
                  key={member.id}
                  onClick={() =>
                    handleSelectMember(member)
                  }
                  className={`text-left border rounded-xl p-5 transition ${
                    selectedMember?.id === member.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-blue-400 hover:bg-gray-50"
                  }`}
                >

                  <h4 className="font-semibold text-gray-800 text-lg">
                    {member.name}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {member.email}
                  </p>


                  <div className="mt-4">

                    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {member.membership}
                    </span>

                  </div>

                </button>

              ))}

            </div>

          </div>


          {/* =========================
              Selected Member
          ========================= */}

          {selectedMember && (

            <>

              {/* =========================
                  Attendance Summary
              ========================= */}

              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">

                <div className="mb-6">

                  <h3 className="text-xl font-semibold text-gray-800">
                    {selectedMember.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Attendance Summary
                  </p>

                </div>


                {/* Summary Cards */}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                  {/* Total Sessions */}

                  <div className="bg-gray-50 rounded-xl p-5">

                    <p className="text-sm text-gray-500">
                      Total Sessions
                    </p>

                    <p className="text-2xl font-bold text-gray-800 mt-2">
                      {selectedMember.totalSessions}
                    </p>

                  </div>


                  {/* Present */}

                  <div className="bg-green-50 rounded-xl p-5">

                    <p className="text-sm text-gray-500">
                      Present
                    </p>

                    <p className="text-2xl font-bold text-green-600 mt-2">
                      {selectedMember.present}
                    </p>

                  </div>


                  {/* Absent */}

                  <div className="bg-red-50 rounded-xl p-5">

                    <p className="text-sm text-gray-500">
                      Absent
                    </p>

                    <p className="text-2xl font-bold text-red-600 mt-2">
                      {selectedMember.absent}
                    </p>

                  </div>


                  {/* Attendance Rate */}

                  <div className="bg-blue-50 rounded-xl p-5">

                    <p className="text-sm text-gray-500">
                      Attendance Rate
                    </p>

                    <p className="text-2xl font-bold text-blue-600 mt-2">
                      {attendancePercentage}%
                    </p>

                  </div>

                </div>

              </div>


              {/* =========================
                  Attendance History
              ========================= */}

              <div className="bg-white rounded-xl shadow-sm p-6">

                <div className="flex items-center justify-between mb-6">

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800">
                      Attendance History
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Records generated through QR attendance scanning.
                    </p>

                  </div>

                </div>


                {/* Table */}

                <div className="overflow-x-auto">

                  <table className="w-full">

                    <thead>

                      <tr className="border-b border-gray-200">

                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                          Date
                        </th>

                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                          Check-in Time
                        </th>

                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                          Status
                        </th>

                      </tr>

                    </thead>


                    <tbody>

                      {history.map((record, index) => (

                        <tr
                          key={index}
                          className="border-b border-gray-100"
                        >

                          <td className="py-4 px-4 text-gray-700">
                            {record.date}
                          </td>


                          <td className="py-4 px-4 text-gray-700">
                            {record.time}
                          </td>


                          <td className="py-4 px-4">

                            <span
                              className={`px-3 py-1 rounded-full text-sm ${
                                record.status === "Present"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {record.status}
                            </span>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

            </>

          )}

        </main>

      </div>

    </div>
  );
}

export default TrainerAttendance;
