import Sidebar from "../components/MemberSidebar";
import Navbar from "../components/MemberNavbar";
import { useState } from "react";

function MemberHealthDiet() {
  // ---------------- BMI ----------------
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(75);

  const bmi = weight / ((height / 100) * (height / 100));

  const getBMIStatus = () => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obesity";
  };

  // ---------------- Weight Tracking ----------------
  const [weightHistory, setWeightHistory] = useState([
    {
      id: 1,
      date: "03 September 2026",
      weight: 75,
    },
    {
      id: 2,
      date: "01 September 2026",
      weight: 75.5,
    },
    {
      id: 3,
      date: "28 August 2026",
      weight: 76,
    },
  ]);

  const [newWeight, setNewWeight] = useState("");

  const handleAddWeight = () => {
    if (!newWeight) {
      alert("Please enter your weight");
      return;
    }

    const newRecord = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      weight: Number(newWeight),
    };

    setWeightHistory([newRecord, ...weightHistory]);
    setWeight(Number(newWeight));
    setNewWeight("");
  };

  // ---------------- Body Measurements ----------------
  const [measurements, setMeasurements] = useState({
    chest: "",
    waist: "",
    arms: "",
    thighs: "",
  });

  const handleMeasurementChange = (e) => {
    setMeasurements({
      ...measurements,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveMeasurements = () => {
    alert("Body measurements saved successfully!");
  };

  // ---------------- Diet Plan ----------------
  const [selectedDietDay, setSelectedDietDay] = useState("Monday");

const dietSchedule = {
  Monday: {
    breakfast: "Oatmeal with milk, banana and boiled eggs",
    morningSnack: "Apple and yogurt",
    lunch: "Rice, grilled chicken, vegetables and salad",
    eveningSnack: "A handful of nuts and fruit",
    dinner: "Grilled fish, vegetables and a small portion of rice",
  },

  Tuesday: {
    breakfast: "Whole wheat bread, eggs and banana",
    morningSnack: "Yogurt and fruit",
    lunch: "Rice, chicken curry and mixed vegetables",
    eveningSnack: "Fruit and nuts",
    dinner: "Grilled chicken with vegetables",
  },

  Wednesday: {
    breakfast: "Oatmeal, milk and banana",
    morningSnack: "Apple and yogurt",
    lunch: "Rice, fish and vegetables",
    eveningSnack: "Nuts and fruit",
    dinner: "Chicken, salad and vegetables",
  },

  Thursday: {
    breakfast: "Eggs, whole wheat bread and fruit",
    morningSnack: "Banana and yogurt",
    lunch: "Rice, grilled chicken and vegetables",
    eveningSnack: "Nuts and fruit",
    dinner: "Grilled fish with vegetables",
  },

  Friday: {
    breakfast: "Oatmeal with milk and fruit",
    morningSnack: "Yogurt and apple",
    lunch: "Rice, fish, vegetables and salad",
    eveningSnack: "Fruit and nuts",
    dinner: "Chicken with vegetables",
  },

  Saturday: {
    breakfast: "Eggs, oatmeal and banana",
    morningSnack: "Fruit and yogurt",
    lunch: "Rice, chicken and vegetables",
    eveningSnack: "Nuts and fruit",
    dinner: "Fish, vegetables and rice",
  },

  Sunday: {
    breakfast: "Whole wheat bread, eggs and fruit",
    morningSnack: "Yogurt and banana",
    lunch: "Rice, chicken and vegetables",
    eveningSnack: "Fruit and nuts",
    dinner: "Grilled fish and salad",
  },
};

  return (
<div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64">
        
        {/* Navbar */}
        <Navbar />

        <main className="p-6">

          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Health & Diet
            </h1>

            <p className="text-gray-500 mt-1">
              Track your health information and follow your diet plan.
            </p>
          </div>

          {/* Health Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

            {/* BMI */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <p className="text-sm text-gray-500">
                Current BMI
              </p>

              <h2 className="text-3xl font-bold text-blue-600 mt-2">
                {bmi.toFixed(1)}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                {getBMIStatus()}
              </p>

            </div>

            {/* Weight */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <p className="text-sm text-gray-500">
                Current Weight
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                {weight} kg
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Latest recorded weight
              </p>

            </div>

            {/* Measurements */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <p className="text-sm text-gray-500">
                Body Measurements
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                4
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Measurements being tracked
              </p>

            </div>

          </div>

          {/* BMI Calculator */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              BMI Calculator
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                </label>

                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>

                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            <div className="mt-6 p-5 bg-gray-50 rounded-lg">

              <p className="text-sm text-gray-500">
                Your BMI
              </p>

              <p className="text-4xl font-bold text-blue-600 mt-1">
                {bmi.toFixed(1)}
              </p>

              <p className="text-gray-600 mt-2">
                Category:{" "}
                <span className="font-semibold">
                  {getBMIStatus()}
                </span>
              </p>

            </div>

          </div>

          {/* Weight Tracking */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">

              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Weight Tracking
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Record your weight and monitor changes over time.
                </p>
              </div>

              <div className="flex gap-2">

                <input
                  type="number"
                  placeholder="Weight (kg)"
                  value={newWeight}
                  onChange={(e) => setNewWeight(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  onClick={handleAddWeight}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Add
                </button>

              </div>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead>
                  <tr className="border-b border-gray-200">

                    <th className="py-3 text-sm text-gray-500">
                      Date
                    </th>

                    <th className="py-3 text-sm text-gray-500">
                      Weight
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {weightHistory.map((record) => (
                    <tr
                      key={record.id}
                      className="border-b border-gray-100"
                    >

                      <td className="py-4 text-gray-700">
                        {record.date}
                      </td>

                      <td className="py-4 font-medium text-gray-800">
                        {record.weight} kg
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

          {/* Body Measurements */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

            <h2 className="text-xl font-semibold text-gray-800">
              Body Measurements
            </h2>

            <p className="text-sm text-gray-500 mt-1 mb-5">
              Record your measurements to track changes over time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chest (cm)
                </label>

                <input
                  type="number"
                  name="chest"
                  value={measurements.chest}
                  onChange={handleMeasurementChange}
                  placeholder="Enter chest measurement"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Waist (cm)
                </label>

                <input
                  type="number"
                  name="waist"
                  value={measurements.waist}
                  onChange={handleMeasurementChange}
                  placeholder="Enter waist measurement"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Arms (cm)
                </label>

                <input
                  type="number"
                  name="arms"
                  value={measurements.arms}
                  onChange={handleMeasurementChange}
                  placeholder="Enter arm measurement"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thighs (cm)
                </label>

                <input
                  type="number"
                  name="thighs"
                  value={measurements.thighs}
                  onChange={handleMeasurementChange}
                  placeholder="Enter thigh measurement"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            <button
              onClick={handleSaveMeasurements}
              className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save Measurements
            </button>

          </div>

{/* Diet Plan */}
<div className="bg-white rounded-xl shadow-sm p-6">

  {/* Header */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

    <div>
      <h2 className="text-xl font-semibold text-gray-800">
        My Diet Plan
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Diet plan prepared by your trainer.
      </p>
    </div>

    <div className="flex items-center gap-3">

      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
        Balanced Fitness Diet
      </span>

      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
        2200 kcal/day
      </span>

    </div>

  </div>

  {/* Today's Diet Button */}
  <div className="mb-6">

    <button
      onClick={() => {
        const today = new Date().toLocaleDateString("en-US", {
          weekday: "long",
        });

        setSelectedDietDay(today);
      }}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      View Today's Diet
    </button>

  </div>

  {/* Diet Schedule */}
  <div>

    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Diet Schedule
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">

      {Object.keys(dietSchedule).map((day) => (
        <button
          key={day}
          onClick={() => setSelectedDietDay(day)}
          className={`p-4 rounded-lg border transition text-left ${
            selectedDietDay === day
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
          }`}
        >

          <p className="font-semibold">
            {day}
          </p>

          <p
            className={`text-xs mt-2 ${
              selectedDietDay === day
                ? "text-blue-100"
                : "text-gray-500"
            }`}
          >
            View Diet
          </p>

        </button>
      ))}

    </div>

  </div>

  {/* Selected Day Diet */}
  <div className="mt-8">

    <div className="mb-5">

      <p className="text-sm text-gray-500">
        Selected Day
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-1">
        {selectedDietDay}'s Diet
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        Prepared by Trainer Ahmed
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Breakfast */}
      <div className="border border-gray-200 rounded-lg p-5">

        <h4 className="font-semibold text-gray-800">
          🍳 Breakfast
        </h4>

        <p className="text-gray-600 mt-2">
          {dietSchedule[selectedDietDay].breakfast}
        </p>

      </div>

      {/* Morning Snack */}
      <div className="border border-gray-200 rounded-lg p-5">

        <h4 className="font-semibold text-gray-800">
          🍎 Morning Snack
        </h4>

        <p className="text-gray-600 mt-2">
          {dietSchedule[selectedDietDay].morningSnack}
        </p>

      </div>

      {/* Lunch */}
      <div className="border border-gray-200 rounded-lg p-5">

        <h4 className="font-semibold text-gray-800">
          🍚 Lunch
        </h4>

        <p className="text-gray-600 mt-2">
          {dietSchedule[selectedDietDay].lunch}
        </p>

      </div>

      {/* Evening Snack */}
      <div className="border border-gray-200 rounded-lg p-5">

        <h4 className="font-semibold text-gray-800">
          🥜 Evening Snack
        </h4>

        <p className="text-gray-600 mt-2">
          {dietSchedule[selectedDietDay].eveningSnack}
        </p>

      </div>

      {/* Dinner */}
      <div className="border border-gray-200 rounded-lg p-5 md:col-span-2">

        <h4 className="font-semibold text-gray-800">
          🍽️ Dinner
        </h4>

        <p className="text-gray-600 mt-2">
          {dietSchedule[selectedDietDay].dinner}
        </p>

      </div>

    </div>

  </div>

</div>

        </main>

      </div>

    </div>
  );
}

export default MemberHealthDiet;