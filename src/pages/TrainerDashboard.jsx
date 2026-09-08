import TrainerSidebar from "../components/TrainerSidebar";
import TrainerNavbar from "../components/TrainerNavbar";

function TrainerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <TrainerSidebar />

      {/* Main Area */}
      <div className="flex-1 min-w-0">

        {/* Navbar */}
        <TrainerNavbar />

        {/* Dashboard Content */}
        <main className="w-full p-4 md:p-6 lg:p-8">

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Trainer Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Welcome back! Here's what's happening today.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Members */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-500">
                Assigned Members
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                24
              </h2>

              <p className="text-sm text-green-600 mt-2">
                +3 this month
              </p>
            </div>

            {/* Workouts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-500">
                Workout Plans
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                18
              </h2>

              <p className="text-sm text-blue-600 mt-2">
                Active plans
              </p>
            </div>

            {/* Sessions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-500">
                Today's Sessions
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                6
              </h2>

              <p className="text-sm text-orange-600 mt-2">
                2 remaining
              </p>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-gray-500">
                Progress Reviews
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                5
              </h2>

              <p className="text-sm text-red-600 mt-2">
                Pending
              </p>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            {/* Today's Schedule */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Today's Schedule
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="font-medium text-gray-800">
                      Rahim Ahmed
                    </p>
                    <p className="text-sm text-gray-500">
                      Personal Training
                    </p>
                  </div>

                  <span className="text-sm text-blue-600">
                    10:00 AM
                  </span>
                </div>

                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="font-medium text-gray-800">
                      Karim Hasan
                    </p>
                    <p className="text-sm text-gray-500">
                      Strength Training
                    </p>
                  </div>

                  <span className="text-sm text-blue-600">
                    12:00 PM
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">
                      Tanvir Ahmed
                    </p>
                    <p className="text-sm text-gray-500">
                      Cardio Session
                    </p>
                  </div>

                  <span className="text-sm text-blue-600">
                    4:00 PM
                  </span>
                </div>

              </div>

            </div>

            {/* Recent Members */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Members
              </h2>

              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      R
                    </div>

                    <div>
                      <p className="font-medium text-gray-800">
                        Rahim Ahmed
                      </p>

                      <p className="text-sm text-gray-500">
                        Premium Member
                      </p>
                    </div>
                  </div>

                  <span className="text-sm text-green-600">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      K
                    </div>

                    <div>
                      <p className="font-medium text-gray-800">
                        Karim Hasan
                      </p>

                      <p className="text-sm text-gray-500">
                        Standard Member
                      </p>
                    </div>
                  </div>

                  <span className="text-sm text-green-600">
                    Active
                  </span>
                </div>

              </div>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

export default TrainerDashboard;