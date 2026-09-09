import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import TrainerSidebar from "../components/TrainerSidebar";
import TrainerNavbar from "../components/TrainerNavbar";

function TrainerProgress() {

  // =========================
  // Members
  // =========================

  const members = [
    {
      id: 1,
      name: "Rahim Ahmed",
      email: "rahim@gmail.com",
      goal: "Muscle Gain",
      currentWeight: 78,
      previousWeight: 80,
      chest: 39,
      waist: 33,
      arms: 14,
      strength: "Bench Press: 60 kg",
    },

    {
      id: 2,
      name: "Karim Hasan",
      email: "karim@gmail.com",
      goal: "Weight Loss",
      currentWeight: 72,
      previousWeight: 75,
      chest: 38,
      waist: 32,
      arms: 13,
      strength: "Squat: 70 kg",
    },

    {
      id: 3,
      name: "Tanvir Ahmed",
      email: "tanvir@gmail.com",
      goal: "Strength Training",
      currentWeight: 82,
      previousWeight: 80,
      chest: 42,
      waist: 34,
      arms: 15,
      strength: "Deadlift: 120 kg",
    },
  ];

  // =========================
  // Progress Chart Data
  // =========================

  const [progressData, setProgressData] = useState({
    Rahim: [
      { date: "2026-07-01", weight: 80 },
      { date: "2026-07-15", weight: 79 },
      { date: "2026-08-01", weight: 78 },
      { date: "2026-08-15", weight: 77.5 },
    ],

    Karim: [
      { date: "2026-07-01", weight: 75 },
      { date: "2026-07-15", weight: 74 },
      { date: "2026-08-01", weight: 73 },
      { date: "2026-08-15", weight: 72 },
    ],

    Tanvir: [
      { date: "2026-07-01", weight: 80 },
      { date: "2026-07-15", weight: 81 },
      { date: "2026-08-01", weight: 81.5 },
      { date: "2026-08-15", weight: 82 },
    ],
  });

  // =========================
  // States
  // =========================

  const [selectedMember, setSelectedMember] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    date: "",
    weight: "",
    chest: "",
    waist: "",
    arms: "",
    strength: "",
    notes: "",
  });

  // =========================
  // Select Member
  // =========================

  const handleSelectMember = (member) => {
    setSelectedMember(member);
    setShowForm(false);
  };

  // =========================
  // Form Input
  // =========================

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // Save Progress
  // =========================

  const handleSaveProgress = () => {

    if (!form.date || !form.weight) {
      alert("Please enter date and weight.");
      return;
    }

    const memberKey = selectedMember.name.split(" ")[0];

    const newRecord = {
      date: form.date,
      weight: Number(form.weight),
    };

    setProgressData({
      ...progressData,
      [memberKey]: [
        ...progressData[memberKey],
        newRecord,
      ],
    });

    alert(`Progress updated for ${selectedMember.name}`);

    setForm({
      date: "",
      weight: "",
      chest: "",
      waist: "",
      arms: "",
      strength: "",
      notes: "",
    });

    setShowForm(false);
  };

  // =========================
  // Chart Data
  // =========================

  const memberKey = selectedMember
    ? selectedMember.name.split(" ")[0]
    : null;

  const chartData = memberKey
    ? progressData[memberKey]
    : [];

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
              Member Progress
            </h2>

            <p className="text-gray-500 mt-1">
              Monitor and update your assigned members' progress.
            </p>

          </div>


          {/* =========================
              Member Selection
          ========================= */}

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">

            <h3 className="text-lg font-semibold text-gray-800 mb-5">
              Select Member
            </h3>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {members.map((member) => (

                <button
                  key={member.id}
                  onClick={() => handleSelectMember(member)}
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
                      {member.goal}
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
                  Current Progress
              ========================= */}

              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">

                <div className="flex items-center justify-between mb-6">

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800">
                      {selectedMember.name}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Current Progress
                    </p>

                  </div>


                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition"
                  >
                    {showForm
                      ? "Cancel"
                      : "Add Progress Update"}
                  </button>

                </div>


                {/* Progress Cards */}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                  {/* Current Weight */}

                  <div className="bg-gray-50 rounded-xl p-5">

                    <p className="text-sm text-gray-500">
                      Current Weight
                    </p>

                    <p className="text-2xl font-bold text-gray-800 mt-2">
                      {selectedMember.currentWeight} kg
                    </p>

                  </div>


                  {/* Previous Weight */}

                  <div className="bg-gray-50 rounded-xl p-5">

                    <p className="text-sm text-gray-500">
                      Previous Weight
                    </p>

                    <p className="text-2xl font-bold text-gray-800 mt-2">
                      {selectedMember.previousWeight} kg
                    </p>

                  </div>


                  {/* Weight Change */}

                  <div className="bg-gray-50 rounded-xl p-5">

                    <p className="text-sm text-gray-500">
                      Weight Change
                    </p>

                    <p className="text-2xl font-bold text-green-600 mt-2">

                      {(
                        selectedMember.currentWeight -
                        selectedMember.previousWeight
                      ).toFixed(1)}{" "}
                      kg

                    </p>

                  </div>


                  {/* Goal */}

                  <div className="bg-gray-50 rounded-xl p-5">

                    <p className="text-sm text-gray-500">
                      Fitness Goal
                    </p>

                    <p className="text-lg font-bold text-gray-800 mt-2">
                      {selectedMember.goal}
                    </p>

                  </div>

                </div>


                {/* =========================
                    Body Measurements
                ========================= */}

                <div className="mt-8">

                  <h4 className="font-semibold text-gray-800 mb-4">
                    Body Measurements
                  </h4>


                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div className="border rounded-lg p-4">

                      <p className="text-sm text-gray-500">
                        Chest
                      </p>

                      <p className="text-xl font-semibold mt-1">
                        {selectedMember.chest} in
                      </p>

                    </div>


                    <div className="border rounded-lg p-4">

                      <p className="text-sm text-gray-500">
                        Waist
                      </p>

                      <p className="text-xl font-semibold mt-1">
                        {selectedMember.waist} in
                      </p>

                    </div>


                    <div className="border rounded-lg p-4">

                      <p className="text-sm text-gray-500">
                        Arms
                      </p>

                      <p className="text-xl font-semibold mt-1">
                        {selectedMember.arms} in
                      </p>

                    </div>

                  </div>

                </div>


                {/* =========================
                    Strength
                ========================= */}

                <div className="mt-6 border rounded-lg p-4">

                  <p className="text-sm text-gray-500">
                    Strength Improvement
                  </p>

                  <p className="text-lg font-semibold text-gray-800 mt-1">
                    {selectedMember.strength}
                  </p>

                </div>

              </div>


              {/* =========================
                  Add Progress Form
              ========================= */}

              {showForm && (

                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">

                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    Add Progress Update
                  </h3>


                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Date */}

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>

                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                      />

                    </div>


                    {/* Weight */}

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Weight (kg)
                      </label>

                      <input
                        type="number"
                        name="weight"
                        value={form.weight}
                        onChange={handleInputChange}
                        placeholder="Enter current weight"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                      />

                    </div>


                    {/* Chest */}

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Chest (in)
                      </label>

                      <input
                        type="number"
                        name="chest"
                        value={form.chest}
                        onChange={handleInputChange}
                        placeholder="Chest measurement"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                      />

                    </div>


                    {/* Waist */}

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Waist (in)
                      </label>

                      <input
                        type="number"
                        name="waist"
                        value={form.waist}
                        onChange={handleInputChange}
                        placeholder="Waist measurement"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                      />

                    </div>


                    {/* Arms */}

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Arms (in)
                      </label>

                      <input
                        type="number"
                        name="arms"
                        value={form.arms}
                        onChange={handleInputChange}
                        placeholder="Arm measurement"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                      />

                    </div>


                    {/* Strength */}

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Strength Improvement
                      </label>

                      <input
                        type="text"
                        name="strength"
                        value={form.strength}
                        onChange={handleInputChange}
                        placeholder="e.g. Bench Press: 70 kg"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                      />

                    </div>

                  </div>


                  {/* Notes */}

                  <div className="mt-5">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Progress Notes
                    </label>

                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Write observations about the member's progress..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>


                  {/* Save Button */}

                  <div className="flex justify-end mt-6">

                    <button
                      onClick={handleSaveProgress}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg transition"
                    >
                      Save Progress
                    </button>

                  </div>

                </div>

              )}


              {/* =========================
                  Progress Chart
              ========================= */}

              <div className="bg-white rounded-xl shadow-sm p-6">

                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Weight Progress
                </h3>


                <div className="w-full h-80">

                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >

                    <LineChart data={chartData}>

                      <CartesianGrid strokeDasharray="3 3" />

                      <XAxis dataKey="date" />

                      <YAxis />

                      <Tooltip />

                      <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#2563eb"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                      />

                    </LineChart>

                  </ResponsiveContainer>

                </div>

              </div>

            </>

          )}

        </main>

      </div>

    </div>
  );
}

export default TrainerProgress;
