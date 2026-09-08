
import TrainerSidebar from "../components/TrainerSidebar";
import TrainerNavbar from "../components/TrainerNavbar";
import { useState } from "react";

function TrainerWorkout() {

  // =========================
  // Assigned Members
  // =========================
  const members = [
    {
      id: 1,
      name: "Rahim Ahmed",
      email: "rahim@gmail.com",
      phone: "01712345678",
      level: "Intermediate",
      age: 24,
      weight: 78,
      height: 175,
      bmi: 25.5,
      goal: "Muscle Gain",
      experience: "2 Years",
      progress: "Lost 2 kg in the last 2 months",
      currentPlan: "No active workout plan",
      membership: "Premium",
      status: "Active",
    },
    {
      id: 2,
      name: "Karim Hasan",
      email: "karim@gmail.com",
      phone: "01798765432",
      level: "Beginner",
      age: 22,
      weight: 72,
      height: 170,
      bmi: 24.9,
      goal: "Weight Loss",
      experience: "6 Months",
      progress: "Lost 3 kg in the last month",
      currentPlan: "Beginner Cardio Plan",
      membership: "Standard",
      status: "Active",
    },
    {
      id: 3,
      name: "Tanvir Ahmed",
      email: "tanvir@gmail.com",
      phone: "01812345678",
      level: "Advanced",
      age: 27,
      weight: 82,
      height: 180,
      bmi: 25.3,
      goal: "Strength Training",
      experience: "4 Years",
      progress: "Increased strength by 12%",
      currentPlan: "Advanced Strength Plan",
      membership: "Premium",
      status: "Active",
    },
  ];


  // =========================
  // States
  // =========================
  const [selectedMember, setSelectedMember] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [planName, setPlanName] = useState("");

  const [description, setDescription] = useState("");

  const [exercises, setExercises] = useState([]);


  // =========================
  // Exercise State
  // =========================
  const [exercise, setExercise] = useState({
    name: "",
    muscle: "",
    sets: "",
    reps: "",
    rest: "",
    notes: "",
  });


  // =========================
  // Select Member
  // =========================
  const handleSelectMember = (member) => {
    setSelectedMember(member);
    setShowForm(false);
    setPlanName("");
    setDescription("");
    setExercises([]);
  };


  // =========================
  // Exercise Input
  // =========================
  const handleExerciseChange = (e) => {
    setExercise({
      ...exercise,
      [e.target.name]: e.target.value,
    });
  };


  // =========================
  // Add Exercise
  // =========================
  const addExercise = () => {

    if (!exercise.name || !exercise.sets || !exercise.reps) {
      alert("Please enter exercise name, sets and reps.");
      return;
    }

    setExercises([
      ...exercises,
      exercise,
    ]);

    setExercise({
      name: "",
      muscle: "",
      sets: "",
      reps: "",
      rest: "",
      notes: "",
    });
  };


  // =========================
  // Remove Exercise
  // =========================
  const removeExercise = (index) => {

    setExercises(
      exercises.filter((_, i) => i !== index)
    );
  };


  // =========================
  // Save Workout Plan
  // =========================
  const saveWorkoutPlan = () => {

    if (!planName) {
      alert("Please enter a workout plan name.");
      return;
    }

    if (exercises.length === 0) {
      alert("Please add at least one exercise.");
      return;
    }

    console.log("Workout Plan:", {
      member: selectedMember,
      planName,
      description,
      exercises,
    });

    alert(
      `Workout plan created successfully for ${selectedMember.name}!`
    );

    setPlanName("");
    setDescription("");
    setExercises([]);
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
              Workout Plans
            </h1>

            <p className="text-gray-500 mt-1">
              Create personalized workout plans based on each member's needs.
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
                  Select a member to view their current situation.
                </p>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {members.map((member) => (

                  <button
                    key={member.id}
                    onClick={() => handleSelectMember(member)}
                    className="text-left border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:bg-blue-50 transition"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
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

                      <span className="text-sm text-blue-600 font-medium">
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

              {/* Back Button */}
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

                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                      {selectedMember.name.charAt(0)}
                    </div>

                    <div>

                      <h2 className="text-2xl font-bold text-gray-800">
                        {selectedMember.name}
                      </h2>

                      <p className="text-gray-500">
                        {selectedMember.email}
                      </p>

                      <div className="flex gap-2 mt-2">

                        <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                          {selectedMember.level}
                        </span>

                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                          {selectedMember.status}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* Create Workout */}
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    + Create Workout Plan
                  </button>

                </div>

              </div>


              {/* =========================
                  Current Situation
              ========================= */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                  Current Situation
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                  {/* Age */}
                  <div className="bg-gray-50 rounded-lg p-4">

                    <p className="text-sm text-gray-500">
                      Age
                    </p>

                    <p className="text-xl font-semibold text-gray-800 mt-1">
                      {selectedMember.age} years
                    </p>

                  </div>


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


                  {/* BMI */}
                  <div className="bg-gray-50 rounded-lg p-4">

                    <p className="text-sm text-gray-500">
                      BMI
                    </p>

                    <p className="text-xl font-semibold text-gray-800 mt-1">
                      {selectedMember.bmi}
                    </p>

                  </div>

                </div>

              </div>


              {/* =========================
                  Fitness Information
              ========================= */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">


                {/* Fitness Goal */}
                <div className="bg-white rounded-xl shadow-sm p-6">

                  <h2 className="text-lg font-semibold text-gray-800 mb-5">
                    Fitness Information
                  </h2>


                  <div className="space-y-4">

                    <div>

                      <p className="text-sm text-gray-500">
                        Fitness Goal
                      </p>

                      <p className="font-medium text-gray-800 mt-1">
                        {selectedMember.goal}
                      </p>

                    </div>


                    <div>

                      <p className="text-sm text-gray-500">
                        Training Experience
                      </p>

                      <p className="font-medium text-gray-800 mt-1">
                        {selectedMember.experience}
                      </p>

                    </div>


                    <div>

                      <p className="text-sm text-gray-500">
                        Membership
                      </p>

                      <p className="font-medium text-gray-800 mt-1">
                        {selectedMember.membership}
                      </p>

                    </div>

                  </div>

                </div>


                {/* Recent Progress */}
                <div className="bg-white rounded-xl shadow-sm p-6">

                  <h2 className="text-lg font-semibold text-gray-800 mb-5">
                    Recent Progress
                  </h2>

                  <div className="bg-blue-50 rounded-lg p-4">

                    <p className="text-sm text-gray-600">
                      Latest Update
                    </p>

                    <p className="font-medium text-gray-800 mt-2">
                      {selectedMember.progress}
                    </p>

                  </div>

                </div>

              </div>


              {/* =========================
                  Current Workout Plan
              ========================= */}
              <div className="bg-white rounded-xl shadow-sm p-6">

                <h2 className="text-lg font-semibold text-gray-800 mb-5">
                  Current Workout Plan
                </h2>


                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>

                    <p className="text-gray-800 font-medium">
                      {selectedMember.currentPlan}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Review the member's current condition before creating a new plan.
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
              CREATE WORKOUT PLAN
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
                  Create Workout Plan
                </h2>

                <p className="text-gray-500 mt-1">
                  Design a personalized workout plan for {selectedMember.name}.
                </p>

              </div>


              {/* =========================
                  Plan Information
              ========================= */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

                <h3 className="text-lg font-semibold text-gray-800 mb-5">
                  Plan Information
                </h3>


                <div className="space-y-5">

                  {/* Plan Name */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Workout Plan Name
                    </label>

                    <input
                      type="text"
                      value={planName}
                      onChange={(e) => setPlanName(e.target.value)}
                      placeholder="Example: Muscle Gain - Phase 1"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>


                  {/* Description */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>

                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the purpose and focus of this workout plan..."
                      rows="3"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>

                </div>

              </div>


              {/* =========================
                  Add Exercise
              ========================= */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

                <h3 className="text-lg font-semibold text-gray-800 mb-5">
                  Add Exercise
                </h3>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                  {/* Exercise */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Exercise Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={exercise.name}
                      onChange={handleExerciseChange}
                      placeholder="Example: Bench Press"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>


                  {/* Muscle */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Muscle
                    </label>

                    <input
                      type="text"
                      name="muscle"
                      value={exercise.muscle}
                      onChange={handleExerciseChange}
                      placeholder="Example: Chest"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>


                  {/* Sets */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sets
                    </label>

                    <input
                      type="number"
                      name="sets"
                      value={exercise.sets}
                      onChange={handleExerciseChange}
                      placeholder="3"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>


                  {/* Reps */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reps
                    </label>

                    <input
                      type="text"
                      name="reps"
                      value={exercise.reps}
                      onChange={handleExerciseChange}
                      placeholder="10-12"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>


                  {/* Rest */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rest Time
                    </label>

                    <input
                      type="text"
                      name="rest"
                      value={exercise.rest}
                      onChange={handleExerciseChange}
                      placeholder="60 sec"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>


                  {/* Notes */}
                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notes
                    </label>

                    <input
                      type="text"
                      name="notes"
                      value={exercise.notes}
                      onChange={handleExerciseChange}
                      placeholder="Optional instructions"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>

                </div>


                {/* Add Exercise */}
                <button
                  onClick={addExercise}
                  className="mt-5 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  + Add Exercise
                </button>

              </div>


              {/* =========================
                  Exercise List
              ========================= */}
              {exercises.length > 0 && (

                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

                  <h3 className="text-lg font-semibold text-gray-800 mb-5">
                    Workout Exercises
                  </h3>


                  <div className="space-y-4">

                    {exercises.map((item, index) => (

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
                              Target Muscle: {item.muscle || "Not specified"}
                            </p>

                          </div>


                          <button
                            onClick={() => removeExercise(index)}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>

                        </div>


                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">

                          <div className="bg-gray-50 rounded-lg p-3">

                            <p className="text-xs text-gray-500">
                              Sets
                            </p>

                            <p className="font-medium text-gray-800">
                              {item.sets}
                            </p>

                          </div>


                          <div className="bg-gray-50 rounded-lg p-3">

                            <p className="text-xs text-gray-500">
                              Reps
                            </p>

                            <p className="font-medium text-gray-800">
                              {item.reps}
                            </p>

                          </div>


                          <div className="bg-gray-50 rounded-lg p-3">

                            <p className="text-xs text-gray-500">
                              Rest
                            </p>

                            <p className="font-medium text-gray-800">
                              {item.rest || "Not specified"}
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
                  Save / Cancel
              ========================= */}
              <div className="flex justify-end gap-3">

                <button
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={saveWorkoutPlan}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Save Workout Plan
                </button>

              </div>

            </div>

          )}

        </main>

      </div>

    </div>
  );
}

export default TrainerWorkout;