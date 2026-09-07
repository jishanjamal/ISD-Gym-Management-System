import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";


function Settings() {

  const [settings, setSettings] = useState({
    adminName: "",
    email: "",
    phone: "",
    gymName: "",
    gymPhone: "",
    gymEmail: "",
    address: "",
    openingTime: "",
    closingTime: "",
    membershipDuration: "1 Month",
    expiredAccess: "Do Not Allow",
    qrAttendance: true,
    multipleAttendance: false,
    expiryNotification: true,
    paymentReminder: true,
  });

    useEffect(() => {
    const savedSettings = localStorage.getItem("gymSettings");

    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

const handleSave = () => {
  localStorage.setItem("gymSettings", JSON.stringify(settings));

  alert("Settings saved successfully!");
};

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="ml-64 flex-1 min-w-0">

        {/* Navbar */}
        <Navbar />

        <main className="w-full p-4 md:p-6 lg:p-8">

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Settings
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your gym system preferences
            </p>
          </div>


          {/* =========================
              PROFILE SETTINGS
          ========================= */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Profile Settings
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Manage your administrator profile information
              </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Admin Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Name
                </label>

                <input
                  type="text"
                  placeholder="Enter admin name"
                  value={settings.adminName}
                  onChange={(e) =>
                setSettings({
                   ...settings,
                    adminName: e.target.value,
                 })
               }
             className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              </div>


              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  value = {settings.email}
                  onChange = {(e) =>
                    setSettings({
                        ...settings,
                        email: e.target.value,
                    })
                  }

                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  value = {settings.phone}
                  onChange={(e) =>
                    setSettings({
                        ...settings,
                        phone: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

          </div>


          {/* =========================
              GYM INFORMATION
          ========================= */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Gym Information
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Manage your gym's basic information
              </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Gym Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gym Name
                </label>

                <input
                  type="text"
                  placeholder="Enter gym name"
                  value={settings.gymName}
                  onChange={(e) =>
                    setSettings({
                        ...settings,
                        gymName: e.target.value,
                    })
                }
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gym Phone
                </label>

                <input
                  type="text"
                  placeholder="Enter gym phone"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gym Email
                </label>

                <input
                  type="email"
                  placeholder="Enter gym email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>

                <input
                  type="text"
                  placeholder="Enter gym address"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              {/* Opening Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opening Time
                </label>

                <input
                  type="time"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              {/* Closing Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Closing Time
                </label>

                <input
                  type="time"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

          </div>


          {/* =========================
              MEMBERSHIP SETTINGS
          ========================= */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Membership Settings
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Configure membership-related preferences
              </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Default Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Membership Duration
                </label>

                <select
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>1 Month</option>
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                </select>
              </div>


              {/* Expired Member Access */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expired Member Access
                </label>

                <select
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Do Not Allow</option>
                  <option>Allow</option>
                </select>
              </div>

            </div>

          </div>


          {/* =========================
              ATTENDANCE SETTINGS
          ========================= */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Attendance Settings
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Configure how gym attendance works
              </p>
            </div>


            <div className="space-y-5">

              {/* QR Attendance */}
              <div className="flex items-center justify-between border rounded-lg p-4">

                <div>
                  <h3 className="font-medium text-gray-800">
                    QR Code Attendance
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Allow members to mark attendance using QR code
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                />

              </div>


              {/* Multiple Attendance */}
              <div className="flex items-center justify-between border rounded-lg p-4">

                <div>
                  <h3 className="font-medium text-gray-800">
                    Multiple Attendance
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Allow a member to check in multiple times per day
                  </p>
                </div>

                <input
                  type="checkbox"
                  className="w-5 h-5"
                />

              </div>

            </div>

          </div>


          {/* =========================
              NOTIFICATION SETTINGS
          ========================= */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Notification Settings
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Configure system notifications
              </p>
            </div>


            <div className="space-y-5">

              {/* Expiry Notification */}
              <div className="flex items-center justify-between border rounded-lg p-4">

                <div>
                  <h3 className="font-medium text-gray-800">
                    Membership Expiry Notification
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Notify when a membership is about to expire
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                />

              </div>


              {/* Payment Reminder */}
              <div className="flex items-center justify-between border rounded-lg p-4">

                <div>
                  <h3 className="font-medium text-gray-800">
                    Payment Reminder
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Send reminders for pending payments
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                />

              </div>

            </div>

          </div>


          {/* =========================
              SECURITY
          ========================= */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Security
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Manage your account security
              </p>
            </div>


            <button
              type="button"
              className="px-5 py-2.5 bg-gray-800 text-white rounded-lg
                         hover:bg-gray-900 transition duration-200"
            >
              Change Password
            </button>

          </div>


          {/* =========================
              SAVE BUTTONS
          ========================= */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8 mb-8">

            <button
              type="button"
              className="px-6 py-3 border border-gray-300 rounded-lg
                         text-gray-700 hover:bg-gray-50 transition duration-200"
            >
              Reset
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg
                         hover:bg-blue-700 transition duration-200
                         font-medium"
            >
              Save Changes
            </button>

          </div>

        </main>

      </div>
    </div>
  );
}

export default Settings;

