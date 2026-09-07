function AttendanceChart() {
  const attendanceData = [
    { day: "Mon", value: 65 },
    { day: "Tue", value: 80 },
    { day: "Wed", value: 72 },
    { day: "Thu", value: 90 },
    { day: "Fri", value: 75 },
    { day: "Sat", value: 85 },
    { day: "Sun", value: 60 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Attendance Overview
        </h2>

        <p className="text-sm text-gray-500">
          Weekly attendance
        </p>
      </div>

      <div className="flex items-end justify-between h-64 gap-4">

        {attendanceData.map((item) => (
          <div
            key={item.day}
            className="flex-1 flex flex-col items-center justify-end h-full"
          >

            <div
              className="w-full bg-blue-500 rounded-t-md"
              style={{ height: `${item.value}%` }}
            ></div>

            <p className="text-xs text-gray-500 mt-2">
              {item.day}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AttendanceChart;