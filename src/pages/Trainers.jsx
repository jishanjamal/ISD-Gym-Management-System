import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

function Trainers() {
  const trainers = [
    {
      id: 1,
      name: "Arif Rahman",
      email: "arif@gmail.com",
      phone: "01711111111",
      specialization: "Weight Training",
      status: "Active",
    },
    {
      id: 2,
      name: "Sadia Ahmed",
      email: "sadia@gmail.com",
      phone: "01822222222",
      specialization: "Yoga & Flexibility",
      status: "Active",
    },
    {
      id: 3,
      name: "Tanvir Hasan",
      email: "tanvir@gmail.com",
      phone: "01933333333",
      specialization: "Cardio Training",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Nabila Khan",
      email: "nabila@gmail.com",
      phone: "01644444444",
      specialization: "Personal Training",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <Sidebar />

      <div className="ml-64">

        <Navbar />

        <main className="p-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Trainers
              </h1>

              <p className="text-gray-500 mt-1">
                Manage gym trainers
              </p>
            </div>

            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700">
              + Add Trainer
            </button>

          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm p-5 mb-6">

            <div className="flex gap-4">

              <input
                type="text"
                placeholder="Search trainers..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select className="px-4 py-2.5 border border-gray-300 rounded-lg">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>

            </div>

          </div>

          {/* Trainers Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-50 border-b">
                <tr>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    ID
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Trainer
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Phone
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Specialization
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Status
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Action
                  </th>

                </tr>
              </thead>

              <tbody>

                {trainers.map((trainer) => (

                  <tr
                    key={trainer.id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >

                    <td className="px-6 py-4 text-sm text-gray-600">
                      #{trainer.id}
                    </td>

                    <td className="px-6 py-4">

                      <p className="font-medium text-gray-800">
                        {trainer.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {trainer.email}
                      </p>

                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {trainer.phone}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {trainer.specialization}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          trainer.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {trainer.status}
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <button className="text-blue-600 hover:text-blue-800 mr-4">
                        View
                      </button>

                      <button className="text-blue-600 hover:text-blue-800 mr-4">
                        Edit
                      </button>

                      <button className="text-red-600 hover:text-red-800">
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Trainers;