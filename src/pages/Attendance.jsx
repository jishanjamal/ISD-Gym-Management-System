import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import { QrCode } from "lucide-react";
import {useState} from "react";
import {QRCodeSVG} from "qrcode.react";

function Attendance() {

const [showQR, setShowQR] = useState(false);
const attendance = [
     {
      id: 1,
      name: "Rahim Ahmed",
      type: "Member",
      date: "29 Aug 2026",
      time: "10:32 AM",
      status: "Present",
    },
    {
      id: 2,
      name: "Arif Rahman",
      type: "Trainer",
      date: "29 Aug 2026",
      time: "09:15 AM",
      status: "Present",
    },
    {
      id: 3,
      name: "Karim Hasan",
      type: "Member",
      date: "29 Aug 2026",
      time: "08:45 AM",
      status: "Present",
    },
    {
      id: 4,
      name: "Sadia Ahmed",
      type: "Trainer",
      date: "29 Aug 2026",
      time: "08:20 AM",
      status: "Present",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="ml-64">

        {/* Navbar */}
        <Navbar />

        <main className="p-8">

          {/* Header */}
          <div className="mb-8">

            <h1 className="text-3xl font-bold text-gray-800">
              Attendance
            </h1>

            <p className="text-gray-500 mt-1">
              Monitor member and trainer attendance
            </p>

          </div>

          {/* Attendance Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500 text-sm">
                Today's Attendance
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                4
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500 text-sm">
                Members Present
              </p>

              <h2 className="text-3xl font-bold text-blue-600 mt-2">
                2
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-500 text-sm">
                Trainers Present
              </p>

              <h2 className="text-3xl font-bold text-green-600 mt-2">
                2
              </h2>
            </div>

          </div>
          
{/* QR Attendance */}
<div className="bg-white rounded-xl shadow-sm p-6 mb-6">

  <div className="flex items-center justify-between">

    <div className="flex items-center gap-4">

      {/* QR Icon */}
      <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
        <QrCode size={32} />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          QR Attendance
        </h2>

        <p className="text-gray-500 mt-1">
          Members and trainers can scan the QR code to mark attendance.
        </p>
      </div>

    </div>

    <button
      onClick={() => setShowQR(true)}
       className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
    >
      <span>▦</span>
      Generate QR Code
    </button>

  </div>

</div>

{showQR && (
  <div className="bg-white rounded-xl shadow-sm p-8 mb-6">

    <div className="flex flex-col items-center">

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Attendance QR Code
      </h2>

      <p className="text-gray-500 text-sm mb-6 text-center">
        Members and trainers can scan this QR code to mark attendance.
      </p>

      <div className="border border-gray-200 rounded-xl p-5">
        <QRCodeSVG
          value="gym-attendance-2026"
          size={220}
        />
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Scan this code at the gym entrance
      </p>

      <button
        onClick={() => setShowQR(false)}
        className="mt-5 px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100"
      >
        Hide QR Code
      </button>

    </div>

  </div>
)}


          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-5 mb-6">

            <div className="flex gap-4">

              <input
                type="date"
                className="px-4 py-2.5 border border-gray-300 rounded-lg"
              />

              <select className="px-4 py-2.5 border border-gray-300 rounded-lg">

                <option>All</option>
                <option>Members</option>
                <option>Trainers</option>

              </select>

            </div>

          </div>

          {/* Attendance Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-50 border-b">

                <tr>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    ID
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Name
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Type
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Date
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Time
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {attendance.map((record) => (

                  <tr
                    key={record.id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >

                    <td className="px-6 py-4 text-sm text-gray-600">
                      #{record.id}
                    </td>

                    <td className="px-6 py-4 font-medium text-gray-800">
                      {record.name}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {record.type}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {record.date}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {record.time}
                    </td>

                    <td className="px-6 py-4">

                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {record.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Attendance;