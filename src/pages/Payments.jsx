import { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

function Payments() {
  
  const [showForm, setShowForm] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [deletePayment, setDeletePayment] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [methodFilter, setMethodFilter] = useState("All");

  const [newPayment, setNewPayment] = useState({
  member: "",
  email: "",
  plan: "Basic",
  amount: "",
  date: "",
  method: "Cash",
  status: "Paid",
});

const [payments, setPayments] = useState([
  {
    id: 1,
    member: "Rahim Ahmed",
    email: "rahim@gmail.com",
    plan: "Premium",
    amount: 4000,
    date: "2026-08-29",
    method: "Cash",
    status: "Paid",
  },
  {
    id: 2,
    member: "Karim Hasan",
    email: "karim@gmail.com",
    plan: "Basic",
    amount: 1500,
    date: "2026-08-28",
    method: "bKash",
    status: "Paid",
  },
  {
    id: 3,
    member: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    plan: "Premium",
    amount: 4000,
    date: "2026-08-27",
    method: "Card",
    status: "Pending",
  },
  {
    id: 4,
    member: "Sakib Khan",
    email: "sakib@gmail.com",
    plan: "Standard",
    amount: 2500,
    date: "2026-08-26",
    method: "Cash",
    status: "Paid",
  },
  {
    id: 5,
    member: "Mim Akter",
    email: "mim@gmail.com",
    plan: "Basic",
    amount: 1500,
    date: "2026-08-25",
    method: "bKash",
    status: "Pending",
  },
]);
  
  const filteredPayments = payments.filter((payment) => {

  const matchesSearch =
    payment.member.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.plan.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "All" ||
    payment.status === statusFilter;

  const matchesMethod =
    methodFilter === "All" ||
    payment.method === methodFilter;

  return matchesSearch && matchesStatus && matchesMethod;
});


  const totalPayments = payments.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  const paidPayments = payments.filter(
    (payment) => payment.status === "Paid"
  );

  const pendingPayments = payments.filter(
    (payment) => payment.status === "Pending"
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        <main className="p-8">

          {/* Header */}
<div className="flex items-center justify-between mb-8">

  <div>

    <h1 className="text-3xl font-bold text-gray-800">
      Payments
    </h1>

    <p className="text-gray-500 mt-1">
      Manage membership payments and transactions
    </p>

  </div>

  <button
  onClick={() => setShowForm(true)}
  className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
>
  + Add Payment
</button>

</div>

{/* Add Payment Form */}
{showForm && (
  <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

    <div className="flex items-center justify-between mb-6">

      <h2 className="text-xl font-semibold text-gray-800">
        Add New Payment
      </h2>

      <button
        onClick={() => setShowForm(false)}
        className="text-gray-500 hover:text-gray-800 text-xl"
      >
        ✕
      </button>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Member Name */}
      <div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Member Name
        </label>

        <input
          type="text"
          value={newPayment.member}
          onChange={(e) =>
            setNewPayment({
              ...newPayment,
              member: e.target.value,
            })
          }
          placeholder="Enter member name"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Email */}
      <div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>

        <input
          type="email"
          value={newPayment.email}
          onChange={(e) =>
            setNewPayment({
              ...newPayment,
              email: e.target.value,
            })
          }
          placeholder="Enter member email"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Plan */}
      <div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Membership Plan
        </label>

        <select
          value={newPayment.plan}
          onChange={(e) =>
            setNewPayment({
              ...newPayment,
              plan: e.target.value,
            })
          }
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
        >
          <option>Basic</option>
          <option>Standard</option>
          <option>Premium</option>
        </select>

      </div>

      {/* Amount */}
      <div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount
        </label>

        <input
          type="number"
          value={newPayment.amount}
          onChange={(e) =>
            setNewPayment({
              ...newPayment,
              amount: e.target.value,
            })
          }
          placeholder="Enter amount"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Date */}
      <div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment Date
        </label>

        <input
          type="date"
          value={newPayment.date}
          onChange={(e) =>
            setNewPayment({
              ...newPayment,
              date: e.target.value,
            })
          }
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
        />

      </div>

      {/* Payment Method */}
      <div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment Method
        </label>

        <select
          value={newPayment.method}
          onChange={(e) =>
            setNewPayment({
              ...newPayment,
              method: e.target.value,
            })
          }
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
        >
          <option>Cash</option>
          <option>bKash</option>
          <option>Nagad</option>
          <option>Card</option>
          <option>Bank Transfer</option>
        </select>

      </div>

      {/* Status */}
      <div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment Status
        </label>

        <select
          value={newPayment.status}
          onChange={(e) =>
            setNewPayment({
              ...newPayment,
              status: e.target.value,
            })
          }
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
        >
          <option>Paid</option>
          <option>Pending</option>
        </select>

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

          const payment = {
            id: payments.length + 1,
            member: newPayment.member,
            email: newPayment.email,
            plan: newPayment.plan,
            amount: Number(newPayment.amount),
            date: newPayment.date,
            method: newPayment.method,
            status: newPayment.status,
          };

          setPayments([...payments, payment]);

          setNewPayment({
            member: "",
            email: "",
            plan: "Basic",
            amount: "",
            date: "",
            method: "Cash",
            status: "Paid",
          });

          setShowForm(false);
        }}
        className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add Payment
      </button>

    </div>

  </div>
)}
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            {/* Total */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <p className="text-gray-500 text-sm">
                Total Payments
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-2">
                ৳{totalPayments}
              </h2>

            </div>

            {/* Paid */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <p className="text-gray-500 text-sm">
                Paid Transactions
              </p>

              <h2 className="text-2xl font-bold text-green-600 mt-2">
                {paidPayments.length}
              </h2>

            </div>

            {/* Pending */}
            <div className="bg-white rounded-xl shadow-sm p-6">

              <p className="text-gray-500 text-sm">
                Pending Payments
              </p>

              <h2 className="text-2xl font-bold text-orange-500 mt-2">
                {pendingPayments.length}
              </h2>

            </div>

          </div>

          {/* Search and Filters */}
<div className="bg-white rounded-xl shadow-sm p-5 mb-6">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* Search */}
    <input
      type="text"
      placeholder="Search payments..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Status */}
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="px-4 py-2.5 border border-gray-300 rounded-lg"
    >
      <option value="All">All Status</option>
      <option value="Paid">Paid</option>
      <option value="Pending">Pending</option>
    </select>

    {/* Payment Method */}
    <select
      value={methodFilter}
      onChange={(e) => setMethodFilter(e.target.value)}
      className="px-4 py-2.5 border border-gray-300 rounded-lg"
    >
      <option value="All">All Methods</option>
      <option value="Cash">Cash</option>
      <option value="bKash">bKash</option>
      <option value="Nagad">Nagad</option>
      <option value="Card">Card</option>
      <option value="Bank Transfer">Bank Transfer</option>
    </select>

  </div>

</div>

          {/* Payment Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <div className="p-6 border-b">

              <h2 className="text-xl font-semibold text-gray-800">
                Payment Records
              </h2>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-50 border-b">

                  <tr>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      ID
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Member
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Plan
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Amount
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Date
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                      Method
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

                  {filteredPayments.map((payment) => (

                    <tr
                      key={payment.id}
                      className="border-b last:border-b-0 hover:bg-gray-50"
                    >

                      <td className="px-6 py-4 text-sm text-gray-600">
                        #{payment.id}
                      </td>

                      <td className="px-6 py-4">

                        <p className="font-medium text-gray-800">
                          {payment.member}
                        </p>

                        <p className="text-sm text-gray-500">
                          {payment.email}
                        </p>

                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {payment.plan}
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-gray-800">
                        ৳{payment.amount}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {payment.date}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {payment.method}
                      </td>

                      <td className="px-6 py-4">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            payment.status === "Paid"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {payment.status}
                        </span>

                      </td>

                      <td className="px-6 py-4">

                        <button
                          onClick={() => setSelectedPayment(payment)}
                          className="text-blue-600 hover:text-blue-800 mr-4">
                            View
                        </button>

                        <button
                          onClick={() => setDeletePayment(payment)}
                          className="text-red-600 hover:text-red-800">
                            Delete
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>
             {/* Payment Details */}
{selectedPayment && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">

      {/* Header */}
      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-gray-800">
          Payment Details
        </h2>

        <button
          onClick={() => setSelectedPayment(null)}
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

      </div>

      {/* Details */}
      <div className="mt-6 space-y-4">

        <div>
          <p className="text-sm text-gray-500">
            Payment ID
          </p>

          <p className="font-semibold text-gray-800">
            #{selectedPayment.id}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Member
          </p>

          <p className="font-semibold text-gray-800">
            {selectedPayment.member}
          </p>

          <p className="text-sm text-gray-500">
            {selectedPayment.email}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Membership Plan
          </p>

          <p className="font-medium text-gray-800">
            {selectedPayment.plan}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Amount
          </p>

          <p className="text-lg font-bold text-blue-600">
            ৳{selectedPayment.amount}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Payment Date
          </p>

          <p className="font-medium text-gray-800">
            {selectedPayment.date}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Payment Method
          </p>

          <p className="font-medium text-gray-800">
            {selectedPayment.method}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Status
          </p>

          <span
            className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium ${
              selectedPayment.status === "Paid"
                ? "bg-green-100 text-green-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {selectedPayment.status}
          </span>
        </div>

      </div>

      {/* Close */}
      <button
        onClick={() => setSelectedPayment(null)}
        className="w-full mt-6 bg-gray-800 text-white py-2.5 rounded-lg hover:bg-gray-900"
      >
        Close
      </button>

    </div>

  </div>
)}

{/* Delete Payment Confirmation */}
{deletePayment && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">

      <h2 className="text-xl font-semibold text-gray-800">
        Delete Payment
      </h2>

      <p className="text-gray-500 mt-3">
        Are you sure you want to delete the payment from{" "}
        <span className="font-semibold text-gray-800">
          {deletePayment.member}
        </span>
        ?
      </p>

      <div className="flex justify-end gap-3 mt-6">

        {/* Cancel */}
        <button
          onClick={() => setDeletePayment(null)}
          className="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>

        {/* Confirm Delete */}
        <button
          onClick={() => {
            setPayments(
              payments.filter(
                (payment) => payment.id !== deletePayment.id
              )
            );

            setDeletePayment(null);
          }}
          className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete
        </button>

      </div>

    </div>

  </div>
)}
        </main>

      </div>

    </div>
  );
}

export default Payments;