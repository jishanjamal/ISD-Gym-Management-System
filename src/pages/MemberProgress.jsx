import MemberSidebar from "../components/MemberSidebar";
import MemberNavbar from "../components/MemberNavbar";
import { useRef } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function MemberProgress() {
    const reportRef = useRef(null);

    const downloadPDF = async () => {
  try {
    const element = reportRef.current;

    if (!element) {
      alert("Report content not found.");
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pageHeight;
    }

    pdf.save("member-progress-report.pdf");

  } catch (error) {
    console.error("PDF generation error:", error);
    alert("Failed to generate PDF. Check the browser console.");
  }
};

    const progressData = [
  {
    month: "September",
    strength: 55,
    attendance: 65,
    fitness: 50,
    endurance: 45,
  },
  {
    month: "October",
    strength: 63,
    attendance: 70,
    fitness: 58,
    endurance: 52,
  },
  {
    month: "November",
    strength: 70,
    attendance: 76,
    fitness: 65,
    endurance: 61,
  },
  {
    month: "December",
    strength: 78,
    attendance: 82,
    fitness: 73,
    endurance: 70,
  },
  {
    month: "January",
    strength: 84,
    attendance: 87,
    fitness: 80,
    endurance: 78,
  },
];

const measurementData = [
  {
    month: "September",
    chest: 38,
    waist: 34,
    arms: 13,
  },
  {
    month: "October",
    chest: 38.5,
    waist: 33.5,
    arms: 13.5,
  },
  {
    month: "November",
    chest: 39,
    waist: 33,
    arms: 14,
  },
  {
    month: "December",
    chest: 39.5,
    waist: 32.5,
    arms: 14.2,
  },
  {
    month: "January",
    chest: 40,
    waist: 32,
    arms: 14.5,
  },
];


  return (
    <div className="min-h-screen bg-gray-100">

      <MemberSidebar />

      <div className="ml-64">

        <MemberNavbar />

<main className="p-6" ref={reportRef}>
          {/* Page Header */}
 <div className="mb-6">
    <h1 className="text-2xl font-bold text-gray-800">
      My Progress
    </h1>

    <p className="text-gray-500 mt-1">
      Track your fitness improvement and progress over time.
    </p>

    <button
      onClick={downloadPDF}
      className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Download Progress Report
    </button>
  </div>

          

          {/* Progress Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-sm text-gray-500">
                Overall Progress
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                78%
              </p>

              <p className="text-sm text-green-600 mt-2">
                Improving
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-sm text-gray-500">
                Progress Period
              </p>

              <p className="text-xl font-bold text-gray-800 mt-2">
                September 2026
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Last updated: 03 September 2026
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-sm text-gray-500">
                Progress Records
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                5
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Recorded measurements
              </p>
            </div>

          </div>

          {/* Chart Area */}
          <div className="bg-white rounded-xl shadow p-6 mb-6">

            <h2 className="text-lg font-semibold text-gray-800">
              Progress Overview
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your progress will be displayed here.
            </p>

<div className="w-full h-96 mt-6">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={progressData}>

      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="month" />

      <YAxis
        domain={[0, 100]}
        tickFormatter={(value) => `${value}%`}
      />

      <Tooltip
        formatter={(value) => `${value}%`}
      />

      <Legend />

      <Line
        type="monotone"
        dataKey="strength"
        name="Strength"
        stroke="#2563eb"
        strokeWidth={3}
        dot={{ r: 4 }}
      />

      <Line
        type="monotone"
        dataKey="attendance"
        name="Attendance"
        stroke="#16a34a"
        strokeWidth={3}
        dot={{ r: 4 }}
      />

      <Line
        type="monotone"
        dataKey="fitness"
        name="Fitness"
        stroke="#9333ea"
        strokeWidth={3}
        dot={{ r: 4 }}
      />

      <Line
        type="monotone"
        dataKey="endurance"
        name="Endurance"
        stroke="#ea580c"
        strokeWidth={3}
        dot={{ r: 4 }}
      />

    </LineChart>
  </ResponsiveContainer>
</div>

          </div>

          {/* Detailed Measurements */}
<div className="bg-white rounded-xl shadow p-6 mb-6">

  <h2 className="text-lg font-semibold text-gray-800">
    Body Measurement Progress
  </h2>

  <p className="text-sm text-gray-500 mt-1">
    Track changes in your recorded measurements over time.
  </p>

  <div className="w-full h-96 mt-6">

    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={measurementData}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip
          formatter={(value) => `${value} in`}
        />

        <Legend />

        <Line
          type="monotone"
          dataKey="chest"
          name="Chest"
          stroke="#2563eb"
          strokeWidth={3}
          dot={{ r: 4 }}
        />

        <Line
          type="monotone"
          dataKey="waist"
          name="Waist"
          stroke="#16a34a"
          strokeWidth={3}
          dot={{ r: 4 }}
        />

        <Line
          type="monotone"
          dataKey="arms"
          name="Arms"
          stroke="#9333ea"
          strokeWidth={3}
          dot={{ r: 4 }}
        />

      </LineChart>
    </ResponsiveContainer>

  </div>

</div>

          {/* Comparison */}
          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Progress Comparison
            </h2>

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead>
                  <tr className="border-b">
                    <th className="py-3">Metric</th>
                    <th className="py-3">Starting</th>
                    <th className="py-3">Current</th>
                    <th className="py-3">Change</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-b">
                    <td className="py-3">Chest</td>
                    <td className="py-3">38 in</td>
                    <td className="py-3">40 in</td>
                    <td className="py-3 text-green-600">+2 in</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Waist</td>
                    <td className="py-3">34 in</td>
                    <td className="py-3">32 in</td>
                    <td className="py-3 text-green-600">-2 in</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Strength</td>
                    <td className="py-3">50 kg</td>
                    <td className="py-3">70 kg</td>
                    <td className="py-3 text-green-600">+20 kg</td>
                  </tr>

                  <tr>
                    <td className="py-3">Attendance</td>
                    <td className="py-3">65%</td>
                    <td className="py-3">85%</td>
                    <td className="py-3 text-green-600">+20%</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default MemberProgress;