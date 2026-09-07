import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import {useState} from "react";

function Memberships() {
  const [showForm, setShowForm] = useState(false);

  const [editingPlan, setEditingPlan] = useState(null);

  const [deletePlan, setDeletePlan] = useState(null);

  const [selectedPlan, setSelectedPlan] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  
  const [statusFilter, setStatusFilter] = useState("All");

  const [newPlan, setNewPlan] = useState({
    name: "",
    price: "",
    duration: "1 Month",
    description: "",
  });

  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Basic",
      price: 1500,
      duration: "1 Month",
      description: "Basic gym access",
      status: "Active",
    },
    {
      id: 2,
      name: "Standard",
      price: 2500,
      duration: "3 Months",
      description: "Gym access + group classes",
      status: "Active",
    },
    {
      id: 3,
      name: "Premium",
      price: 4000,
      duration: "6 Months",
      description: "Full gym access + personal training",
      status: "Active",
    },
    ]);
const filteredPlans = plans.filter((plan) => {

  const matchesSearch =
    plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.description.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    plan.status === statusFilter;

  return matchesSearch && matchesStatus;
});
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="ml-64">

        {/* Navbar */}
        <Navbar />

        <main className="p-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Membership Plans
              </h1>

              <p className="text-gray-500 mt-1">
                Manage gym membership plans
              </p>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
            >
              + Add Plan
            </button>

          </div>
{/* Add Plan Form */}
{showForm && (
  <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

    <div className="flex items-center justify-between mb-6">

      <h2 className="text-xl font-semibold text-gray-800">
        {editingPlan ? "Edit Membership Plan" : "Add New Membership Plan"}
        Add New Membership Plan
      </h2>

      <button
        onClick={() => setShowForm(false)}
        className="text-gray-500 hover:text-gray-800 text-xl"
      >
        ✕
      </button>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Plan Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Plan Name
        </label>

        <input
          type="text"
          value={newPlan.name}
          onChange={(e) =>
            setNewPlan({
              ...newPlan,
              name: e.target.value,
            })
          }
          placeholder="Enter plan name"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price
        </label>

        <input
          type="number"
          value={newPlan.price}
          onChange={(e) =>
            setNewPlan({
              ...newPlan,
              price: e.target.value,
            })
          }
          placeholder="Enter price"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Duration */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Duration
        </label>

        <select
          value={newPlan.duration}
          onChange={(e) =>
            setNewPlan({
              ...newPlan,
              duration: e.target.value,
            })
          }
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
        >
          <option>1 Month</option>
          <option>3 Months</option>
          <option>6 Months</option>
          <option>12 Months</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>

        <input
          type="text"
          value={newPlan.description}
          onChange={(e) =>
            setNewPlan({
              ...newPlan,
              description: e.target.value,
            })
          }
          placeholder="Enter plan description"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-3 mt-6">

      <button
        onClick={() => setShowForm(false)}
        className="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100"
      >
        Cancel
      </button>

<button
  onClick={() => {
    
    if (editingPlan) {

      setPlans(
        plans.map((plan) =>
          plan.id === editingPlan.id
            ? {
                ...plan,
                name: newPlan.name,
                price: Number(newPlan.price),
                duration: newPlan.duration,
                description: newPlan.description,
              }
            : plan
        )
      );

      setEditingPlan(null);

    } else {

      const plan = {
        id: plans.length + 1,
        name: newPlan.name,
        price: Number(newPlan.price),
        duration: newPlan.duration,
        description: newPlan.description,
        status: "Active",
      };

      setPlans([...plans, plan]);
    }

    setNewPlan({
      name: "",
      price: "",
      duration: "1 Month",
      description: "",
    });

    setShowForm(false);
  }}
  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
>
  {editingPlan ? "Update Plan" : "Add Plan"}
</button>

    </div>

  </div>
)}

{/* Search and Filter */}
<div className="bg-white rounded-xl shadow-sm p-5 mb-6">

  <div className="flex gap-4">

    <input
      type="text"
      placeholder="Search membership plans..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
    />

    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="px-4 py-2.5 border border-gray-300 rounded-lg"
    >
      <option value="All">All Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>

  </div>

</div>
          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredPlans.map((plan) => (

              <div
                key={plan.id}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                {/* Delete Confirmation */}
{deletePlan && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">

      <h2 className="text-xl font-semibold text-gray-800">
        Delete Membership Plan
      </h2>

      <p className="text-gray-500 mt-3">
        Are you sure you want to delete the{" "}
        <span className="font-semibold text-gray-800">
          {deletePlan.name}
        </span>{" "}
        membership plan?
      </p>

      <div className="flex justify-end gap-3 mt-6">

        <button
          onClick={() => setDeletePlan(null)}
          className="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setPlans(
              plans.filter((plan) => plan.id !== deletePlan.id)
            );

            setDeletePlan(null);
          }}
          className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete
        </button>

      </div>

    </div>

  </div>
)}

{/* Plan Details */}
{selectedPlan && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">

      {/* Header */}
      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-gray-800">
          Membership Details
        </h2>

        <button
          onClick={() => setSelectedPlan(null)}
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

      </div>

      {/* Details */}
      <div className="mt-6 space-y-4">

        <div>
          <p className="text-sm text-gray-500">
            Plan Name
          </p>

          <p className="text-lg font-semibold text-gray-800">
            {selectedPlan.name}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Price
          </p>

          <p className="text-lg font-semibold text-blue-600">
            ৳{selectedPlan.price}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Duration
          </p>

          <p className="font-medium text-gray-800">
            {selectedPlan.duration}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Description
          </p>

          <p className="font-medium text-gray-800">
            {selectedPlan.description}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Status
          </p>

          <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
            {selectedPlan.status}
          </span>
        </div>

      </div>

      {/* Close */}
      <button
        onClick={() => setSelectedPlan(null)}
        className="w-full mt-6 bg-gray-800 text-white py-2.5 rounded-lg hover:bg-gray-900"
      >
        Close
      </button>

    </div>

  </div>
)}

                {/* Plan Header */}
                <div className="flex items-center justify-between">

                  <h2 className="text-xl font-semibold text-gray-800">
                    {plan.name}
                  </h2>

                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {plan.status}
                  </span>

                </div>

                {/* Price */}
                <div className="mt-5">

                  <span className="text-3xl font-bold text-blue-600">
                    ৳{plan.price}
                  </span>

                  <span className="text-gray-500 ml-2">
                    / {plan.duration}
                  </span>

                </div>

                {/* Description */}
                <p className="text-gray-500 mt-4">
                  {plan.description}
                </p>

                {/* Actions */}
{/* Actions */}
<div className="flex gap-3 mt-6">

  <button
    onClick={() => setSelectedPlan(plan)}
    className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100"
  >
    View
  </button>

  <button
    onClick={() => {
      setEditingPlan(plan);

      setNewPlan({
        name: plan.name,
        price: plan.price,
        duration: plan.duration,
        description: plan.description,
      });

      setShowForm(true);
    }}
    className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50"
  >
    Edit
  </button>

  <button
    onClick={() => setDeletePlan(plan)}
    className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-50"
  >
    Delete
  </button>

</div>

              </div>

            ))}

          </div>

        </main>

      </div>

    </div>
  );
}

export default Memberships;