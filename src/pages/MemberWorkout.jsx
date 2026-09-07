import Sidebar from "../components/MemberSidebar";
import Navbar from "../components/MemberNavbar";
import { useState } from "react";

function MemberWorkout() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const [completedExercises, setCompletedExercises] = useState([]);

  const workoutPlan = {
    planName: "Beginner Strength",
    trainer: "Ahmed",
    startDate: "01 September 2026",
    endDate: "30 September 2026",
  };

  const weeklySchedule = {
    Monday: "Chest & Triceps",
    Tuesday: "Rest",
    Wednesday: "Back & Biceps",
    Thursday: "Legs",
    Friday: "Rest",
    Saturday: "Shoulders",
    Sunday: "Rest",
  };

  const workouts = {
    Monday: [
      {
        id: 1,
        name: "Bench Press",
        sets: 3,
        reps: 10,
      },
      {
        id: 2,
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: 12,
      },
      {
        id: 3,
        name: "Dumbbell Fly",
        sets: 3,
        reps: 10,
      },
      {
        id: 4,
        name: "Tricep Pushdown",
        sets: 3,
        reps: 12,
      },
    ],

    Wednesday: [
      {
        id: 5,
        name: "Lat Pulldown",
        sets: 3,
        reps: 12,
      },
      {
        id: 6,
        name: "Seated Cable Row",
        sets: 3,
        reps: 10,
      },
      {
        id: 7,
        name: "Dumbbell Curl",
        sets: 3,
        reps: 12,
      },
    ],

    Thursday: [
      {
        id: 8,
        name: "Squat",
        sets: 3,
        reps: 10,
      },
      {
        id: 9,
        name: "Leg Press",
        sets: 3,
        reps: 12,
      },
      {
        id: 10,
        name: "Leg Curl",
        sets: 3,
        reps: 12,
      },
    ],

    Saturday: [
      {
        id: 11,
        name: "Shoulder Press",
        sets: 3,
        reps: 10,
      },
      {
        id: 12,
        name: "Lateral Raise",
        sets: 3,
        reps: 12,
      },
      {
        id: 13,
        name: "Front Raise",
        sets: 3,
        reps: 12,
      },
    ],
  };

  const todayWorkout = workouts[selectedDay] || [];

  const toggleExercise = (id) => {
    if (completedExercises.includes(id)) {
      setCompletedExercises(
        completedExercises.filter((exerciseId) => exerciseId !== id)
      );
    } else {
      setCompletedExercises([...completedExercises, id]);
    }
  };

  const completedCount = todayWorkout.filter((exercise) =>
    completedExercises.includes(exercise.id)
  ).length;

  const progress =
    todayWorkout.length > 0
      ? Math.round((completedCount / todayWorkout.length) * 100)
      : 0;

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
              My Workout
            </h1>

            <p className="text-gray-500 mt-1">
              Follow the workout plan assigned by your trainer.
            </p>
          </div>

          {/* Current Plan */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>
                <p className="text-sm text-gray-500">
                  Current Workout Plan
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-1">
                  {workoutPlan.planName}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Trainer: {workoutPlan.trainer}
                </p>
              </div>

              <div className="text-left md:text-right">

                <p className="text-sm text-gray-500">
                  Plan Duration
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  {workoutPlan.startDate} - {workoutPlan.endDate}
                </p>

              </div>

            </div>

          </div>

          {/* Weekly Schedule */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Weekly Schedule
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">

              {Object.entries(weeklySchedule).map(([day, workout]) => (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setCompletedExercises([]);
                  }}
                  className={`p-4 rounded-lg border transition text-left ${
                    selectedDay === day
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >

                  <p className="font-semibold">
                    {day}
                  </p>

                  <p
                    className={`text-xs mt-2 ${
                      selectedDay === day
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {workout}
                  </p>

                </button>
              ))}

            </div>

          </div>

          {/* Today's Workout */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">

              <div>
                <p className="text-sm text-gray-500">
                  Selected Day
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-1">
                  {selectedDay}
                </h2>

                <p className="text-gray-500 mt-1">
                  {weeklySchedule[selectedDay]}
                </p>
              </div>

              {todayWorkout.length > 0 && (
                <div className="text-left md:text-right">

                  <p className="text-sm text-gray-500">
                    Workout Progress
                  </p>

                  <p className="text-xl font-bold text-blue-600 mt-1">
                    {progress}%
                  </p>

                </div>
              )}

            </div>

            {/* Rest Day */}
            {todayWorkout.length === 0 ? (

              <div className="text-center py-12">

                <h3 className="text-xl font-semibold text-gray-700">
                  Rest Day
                </h3>

                <p className="text-gray-500 mt-2">
                  No workout has been scheduled for this day.
                </p>

              </div>

            ) : (

              <div className="space-y-4">

                {todayWorkout.map((exercise) => {

                  const isCompleted = completedExercises.includes(
                    exercise.id
                  );

                  return (
                    <div
                      key={exercise.id}
                      className={`border rounded-lg p-5 flex items-center justify-between transition ${
                        isCompleted
                          ? "bg-green-50 border-green-200"
                          : "border-gray-200"
                      }`}
                    >

                      <div className="flex items-center gap-4">

                        <button
                          onClick={() => toggleExercise(exercise.id)}
                          className={`w-6 h-6 rounded border flex items-center justify-center ${
                            isCompleted
                              ? "bg-green-600 border-green-600 text-white"
                              : "border-gray-300"
                          }`}
                        >
                          {isCompleted && "✓"}
                        </button>

                        <div>

                          <h3
                            className={`font-semibold ${
                              isCompleted
                                ? "text-green-700 line-through"
                                : "text-gray-800"
                            }`}
                          >
                            {exercise.name}
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            {exercise.sets} Sets × {exercise.reps} Reps
                          </p>

                        </div>

                      </div>

                      <span
                        className={`text-sm font-medium ${
                          isCompleted
                            ? "text-green-600"
                            : "text-gray-400"
                        }`}
                      >
                        {isCompleted ? "Completed" : "Pending"}
                      </span>

                    </div>
                  );
                })}

              </div>

            )}

          </div>

          {/* Complete Workout */}
          {todayWorkout.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm p-6">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Today's Progress
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {completedCount} of {todayWorkout.length} exercises
                    completed
                  </p>
                </div>

                <button
                  disabled={completedCount !== todayWorkout.length}
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    completedCount === todayWorkout.length
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Complete Workout
                </button>

              </div>

            </div>
          )}

        </main>

      </div>

    </div>
  );
}

export default MemberWorkout;