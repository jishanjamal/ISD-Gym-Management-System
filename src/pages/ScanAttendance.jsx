import { useState } from "react";
import { Link } from "react-router-dom";

function ScanAttendance() {
  const [scanning, setScanning] = useState(false);
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const handleScan = () => {
    setScanning(true);

    // Temporary simulation
    setTimeout(() => {
      setScanning(false);
      setAttendanceMarked(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Scan Attendance
          </h1>

          <p className="text-gray-500 mt-2">
            Scan the gym QR code to mark your attendance
          </p>

        </div>

        {!attendanceMarked ? (

          <>
            {/* Scanner Area */}
            <div className="border-2 border-dashed border-blue-400 rounded-xl h-64 flex items-center justify-center mb-6">

              {scanning ? (

                <div className="text-center">

                  <div className="text-5xl mb-3">
                    ▦
                  </div>

                  <p className="text-blue-600 font-medium">
                    Scanning...
                  </p>

                </div>

              ) : (

                <div className="text-center">

                  <div className="text-6xl text-gray-400 mb-3">
                    ▦
                  </div>

                  <p className="text-gray-500">
                    QR scanner area
                  </p>

                </div>

              )}

            </div>

            {/* Scan Button */}
            <button
              onClick={handleScan}
              disabled={scanning}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {scanning ? "Scanning..." : "Start Scanning"}
            </button>

          </>

        ) : (

          /* Success */
          <div className="text-center">

            <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5 text-3xl">
              ✓
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Attendance Marked
            </h2>

            <p className="text-gray-500 mt-2">
              Your attendance has been recorded successfully.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mt-6 text-left">

              <p className="text-sm text-gray-500">
                Name
              </p>

              <p className="font-medium text-gray-800">
                Rahim Ahmed
              </p>

              <p className="text-sm text-gray-500 mt-3">
                Type
              </p>

              <p className="font-medium text-gray-800">
                Member
              </p>

              <p className="text-sm text-gray-500 mt-3">
                Status
              </p>

              <p className="font-medium text-green-600">
                Present
              </p>

            </div>

            <Link
              to="/"
              className="block text-blue-600 font-medium hover:underline mt-6"
            >
              Back to Login
            </Link>

          </div>

        )}

      </div>

    </div>
  );
}

export default ScanAttendance;