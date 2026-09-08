import TrainerSidebar from "../components/TrainerSidebar";
import TrainerNavbar from "../components/TrainerNavbar";
import { useState } from "react";

function TrainerDiet() {

  // =========================
  // Assigned Members
  // =========================
  const members = [
    {
      id: 1,
      name: "Rahim Ahmed",
      email: "rahim@gmail.com",
      level: "Intermediate",
      weight: 78,
      height: 175,
      goal: "Muscle Gain",
      calorieTarget: 2600,
      currentDiet: "No active diet plan",
    },
    {
      id: 2,
      name: "Karim Hasan",
      email: "karim@gmail.com",
      level: "Beginner",
      weight: 72,
      height: 170,
      goal: "Weight Loss",
      calorieTarget: 2000,
      currentDiet: "Weight Loss Diet",
    },
    {
      id: 3,
      name: "Tanvir Ahmed",
      email: "tanvir@gmail.com",
      level: "Advanced",
      weight: 82,
      height: 180,
      goal: "Strength Training",
      calorieTarget: 2900,
      currentDiet: "High Protein Diet",
    },
  ];


  // =========================
  // States
  // =========================
  const [selectedMember, setSelectedMember] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [planName, setPlanName] = useState("");

  const [goal, setGoal] = useState("");

  const [calorieTarget, setCalorieTarget] = useState("");

  const [notes, setNotes] = useState("");

  const [meals, setMeals] = useState([]);


  // =========================
  // Meal State
  // =========================
  const [meal, setMeal] = useState({
    name: "",
    time: "",
    foods: "",
    calories: "",
    notes: "",
  });


  // =========================
  // Select Member
  // =========================
  const handleSelectMember = (member) => {

    setSelectedMember(member);

    setShowForm(false);

    setPlanName("");

    setGoal(member.goal);

    setCalorieTarget(member.calorieTarget);

    setNotes("");

    setMeals([]);
  };


  // =========================
  // Meal Input
  // =========================
  const handleMealChange = (e) => {

    setMeal({
      ...meal,
      [e.target.name]: e.target.value,
    });
  };


  // =========================
  // Add Meal
  // =========================
  const addMeal = () => {

    if (!meal.name || !meal.time || !meal.foods) {

      alert("Please enter meal name, time and food items.");

      return;
    }

    setMeals([
      ...meals,
      meal,
    ]);

    setMeal({
      name: "",
      time: "",
      foods: "",
      calories: "",
      notes: "",
    });
  };


  // =========================
  // Remove Meal
  // =========================
  const removeMeal = (index) => {

    setMeals(
      meals.filter((_, i) => i !== index)
    );
  };


  // =========================
  // Assign Diet Plan
  // =========================
  const assignDietPlan = () => {

    if (!planName) {

      alert("Please enter a diet plan name.");

      return;
    }

    if (!goal) {

      alert("Please enter the diet goal.");

      return;
    }

    if (!calorieTarget) {

      alert("Please enter the daily calorie target.");

      return;
    }

    if (meals.length === 0) {

      alert("Please add at least one meal.");

      return;
    }


    console.log("Diet Plan Assigned:", {

      member: selectedMember,

      planName,

      goal,

      calorieTarget,

      notes,

      meals,

    });


    alert(
      `Diet plan assigned successfully to ${selectedMember.name}!`
    );


    setPlanName("");

    setGoal("");

    setCalorieTarget("");

    setNotes("");

    setMeals([]);

    setShowForm(false);
  };


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

        <TrainerNavbar />


        <main className="p-6 lg:p-8">

          {/* =========================
              Page Header
          ========================= */}
          <div className="mb-8">

            <h1 className="text-2xl font-bold text-gray-800">
              Diet Plans
            </h1>

            <p className="text-gray-500 mt-1">
              Create personalized diet plans for your members.
            </p>

          </div>


          {/* =====================================================
              MEMBER SELECTION
          ====================================================== */}
          {!selectedMember && (

            <div className="bg-white rounded-xl shadow-sm p-6">

              <div className="mb-6">

                <h2 className="text-lg font-semibold text-gray-800">
                  Select a Member
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Select a member to review their information before creating a diet plan.
                </p>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {members.map((member) => (

                  <button
                    key={member.id}
                    onClick={() => handleSelectMember(member)}
                    className="text-left border border-gray-200 rounded-xl p-5 hover:border-green-400 hover:bg-green-50 transition"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">
                        {member.name.charAt(0)}
                      </div>

                      <div>

                        <h3 className="font-semibold text-gray-800">
                          {member.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {member.email}
                        </p>

                      </div>

                    </div>


                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-sm text-gray-600">
                        {member.level}
                      </span>

                      <span className="text-sm text-green-600 font-medium">
                        View →
                      </span>

                    </div>

                  </button>

                ))}

              </div>

            </div>

          )}


          {/* =====================================================
              MEMBER CURRENT SITUATION
          ====================================================== */}
          {selectedMember && !showForm && (

            <div>

              {/* Back */}
              <button
                onClick={() => setSelectedMember(null)}
                className="mb-5 text-sm text-gray-600 hover:text-gray-900"
              >
                ← Back to Members
              </button>


              {/* Member Header */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl font-bold">
                      {selectedMember.name.charAt(0)}
                    </div>

                    <div>

                      <h2 className="text-2xl font-bold text-gray-800">
                        {selectedMember.name}
                      </h2>

                      <p className="text-gray-500">
                        {selectedMember.email}
                      </p>

                      <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                        {selectedMember.level}
                      </span>

                    </div>

                  </div>


                  {/* Create Diet */}
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                  >
                    + Create Diet Plan
                  </button>

                </div>

              </div>


              {/* =========================
                  Health Information
              ========================= */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                  Current Situation
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                  {/* Weight */}
                  <div className="bg-gray-50 rounded-lg p-4">

                    <p className="text-sm text-gray-500">
                      Current Weight
                    </p>

                    <p className="text-xl font-semibold text-gray-800 mt-1">
                      {selectedMember.weight} kg
                    </p>

                  </div>


                  {/* Height */}
                  <div className="bg-gray-50 rounded-lg p-4">

                    <p className="text-sm text-gray-500">
                      Height
                    </p>

                    <p className="text-xl font-semibold text-gray-800 mt-1">
                      {selectedMember.height} cm
                    </p>

                  </div>


                  {/* Goal */}
                  <div className="bg-gray-50 rounded-lg p-4">

                    <p className="text-sm text-gray-500">
                      Fitness Goal
                    </p>

                    <p className="text-xl font-semibold text-gray-800 mt-1">
                      {selectedMember.goal}
                    </p>

                  </div>


                  {/* Calories */}
                  <div className="bg-gray-50 rounded-lg p-4">

                    <p className="text-sm text-gray-500">
                      Suggested Daily Calories
                    </p>

                    <p className="text-xl font-semibold text-gray-800 mt-1">
                      {selectedMember.calorieTarget} kcal
                    </p>

                  </div>

                </div>

              </div>


              {/* =========================
                  Current Diet
              ========================= */}
              <div className="bg-white rounded-xl shadow-sm p-6">

                <h2 className="text-lg font-semibold text-gray-800 mb-5">
                  Current Diet Plan
                </h2>


                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>

                    <p className="font-medium text-gray-800">
                      {selectedMember.currentDiet}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Review the member's current situation before assigning a new diet plan.
                    </p>

                  </div>


                  <button
                    onClick={() => setShowForm(true)}
                    className="px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                  >
                    Create New Plan
                  </button>

                </div>

              </div>

            </div>

          )}


          {/* =====================================================
              CREATE DIET PLAN
          ====================================================== */}
          {selectedMember && showForm && (

            <div>

              {/* Back */}
              <button
                onClick={() => setShowForm(false)}
                className="mb-5 text-sm text-gray-600 hover:text-gray-900"
              >
                ← Back to {selectedMember.name}
              </button>


              {/* Form Header */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

                <h2 className="text-xl font-bold text-gray-800">
                  Create Diet Plan
                </h2>

                <p className="text-gray-500 mt-1">
                  Creating a personalized diet plan for {selectedMember.name}.
                </p>

              </div>


              {/* =========================
                  Plan Information
              ========================= */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

                <h3 className="text-lg font-semibold text-gray-800 mb-5">
                  Plan Information
                </h3>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* Plan Name */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Diet Plan Name
                    </label>

                    <input
                      type="text"
                      value={planName}
                      onChange={(e) => setPlanName(e.target.value)}
                      placeholder="Example: Muscle Gain Diet"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                    />

                  </div>


                  {/* Goal */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Diet Goal
                    </label>

                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                    >

                      <option value="">
                        Select Goal
                      </option>

                      <option value="Muscle Gain">
                        Muscle Gain
                      </option>

                      <option value="Weight Loss">
                        Weight Loss
                      </option>

                      <option value="Weight Maintenance">
                        Weight Maintenance
                      </option>

                      <option value="Strength Training">
                        Strength Training
                      </option>

                    </select>

                  </div>


                  {/* Calories */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Daily Calorie Target
                    </label>

                    <input
                      type="number"
                      value={calorieTarget}
                      onChange={(e) => setCalorieTarget(e.target.value)}
                      placeholder="Example: 2500"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                    />

                  </div>


                  {/* Notes */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      General Notes
                    </label>

                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Example: High protein, adequate hydration"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                    />

                  </div>

                </div>

              </div>


              {/* =========================
                  Add Meal
              ========================= */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

                <h3 className="text-lg font-semibold text-gray-800 mb-5">
                  Add Meal
                </h3>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                  {/* Meal Name */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meal
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={meal.name}
                      onChange={handleMealChange}
                      placeholder="Example: Breakfast"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                    />

                  </div>


                  {/* Time */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>

                    <input
                      type="time"
                      name="time"
                      value={meal.time}
                      onChange={handleMealChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                    />

                  </div>


                  {/* Calories */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Calories
                    </label>

                    <input
                      type="number"
                      name="calories"
                      value={meal.calories}
                      onChange={handleMealChange}
                      placeholder="Example: 500"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                    />

                  </div>


                  {/* Foods */}
                  <div className="md:col-span-2 lg:col-span-3">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Food Items
                    </label>

                    <textarea
                      name="foods"
                      value={meal.foods}
                      onChange={handleMealChange}
                      placeholder="Example: 3 eggs, oats, banana, milk"
                      rows="3"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                    />

                  </div>


                  {/* Meal Notes */}
                  <div className="md:col-span-2 lg:col-span-3">

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meal Notes
                    </label>

                    <input
                      type="text"
                      name="notes"
                      value={meal.notes}
                      onChange={handleMealChange}
                      placeholder="Optional instructions"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                    />

                  </div>

                </div>


                {/* Add Meal */}
                <button
                  onClick={addMeal}
                  className="mt-5 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  + Add Meal
                </button>

              </div>


              {/* =========================
                  Meal List
              ========================= */}
              {meals.length > 0 && (

                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

                  <h3 className="text-lg font-semibold text-gray-800 mb-5">
                    Daily Meal Schedule
                  </h3>


                  <div className="space-y-4">

                    {meals.map((item, index) => (

                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-5"
                      >

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                          <div>

                            <h4 className="font-semibold text-gray-800">
                              {index + 1}. {item.name}
                            </h4>

                            <p className="text-sm text-gray-500 mt-1">
                              Time: {item.time}
                            </p>

                          </div>


                          <button
                            onClick={() => removeMeal(index)}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>

                        </div>


                        <div className="mt-4 bg-gray-50 rounded-lg p-4">

                          <p className="text-sm text-gray-500">
                            Food Items
                          </p>

                          <p className="font-medium text-gray-800 mt-1">
                            {item.foods}
                          </p>

                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">

                          <div className="bg-gray-50 rounded-lg p-3">

                            <p className="text-xs text-gray-500">
                              Calories
                            </p>

                            <p className="font-medium text-gray-800">
                              {item.calories || "Not specified"} kcal
                            </p>

                          </div>


                          <div className="bg-gray-50 rounded-lg p-3">

                            <p className="text-xs text-gray-500">
                              Notes
                            </p>

                            <p className="font-medium text-gray-800">
                              {item.notes || "None"}
                            </p>

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              )}


              {/* =========================
                  Assign / Cancel
              ========================= */}
              <div className="flex justify-end gap-3">

                <button
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>


                <button
                  onClick={assignDietPlan}
                  className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Assign Diet Plan
                </button>

              </div>

            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default TrainerDiet;
