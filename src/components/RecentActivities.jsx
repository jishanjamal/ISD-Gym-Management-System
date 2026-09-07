function RecentActivities() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">

      <h2 className="text-lg font-semibold text-gray-800">
        Recent Activities
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Latest updates
      </p>

      <div className="space-y-5">

        <div>
          <p className="text-sm font-medium text-gray-800">
            New member registered
          </p>
          <p className="text-xs text-gray-500">
            Rahim Ahmed joined the gym
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-800">
            Payment received
          </p>
          <p className="text-xs text-gray-500">
            ৳3,000 membership payment received
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-800">
            New trainer added
          </p>
          <p className="text-xs text-gray-500">
            Karim Hasan joined as a trainer
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-800">
            Membership renewed
          </p>
          <p className="text-xs text-gray-500">
            A member renewed their membership
          </p>
        </div>

      </div>

    </div>
  );
}

export default RecentActivities;