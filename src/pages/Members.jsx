import { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

function Members() {
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [planFilter, setPlanFilter] = useState("All");
    const [selectedMember, setSelectedMember] = useState(null);
    const [editingMember, setEditingMember] = useState(null);
    const [memberToDelete, setMemberToDelete] = useState(null);
    
    const [newMember, setNewMember] = useState({
      name: "",
      email: "",
      phone: "",
      plan: "Basic",
});


  const [members, setMembers ] = useState([
    {
      id: 1,
      name: "Osama Bin Laden",
      email: "ladenkickosama@gmail.com",
      phone: "01712345678",
      plan: "Premium",
      status: "Active",
    },
    {
      id: 2,
      name: "Barack Obama",
      email: "barackhatestrump@gmail.com",
      phone: "01812345678",
      plan: "Basic",
      status: "Active",
    },
    {
      id: 3,
      name: "Doland Trump",
      email: "trumpisapig@gmail.com",
      phone: "01912345678",
      plan: "Premium",
      status: "Expired",
    },
    {
      id: 4,
      name: "Michael Jackson",
      email: "michaelloveschildren@gmail.com",
      phone: "01612345678",
      plan: "Standard",
      status: "Active",
    },
    {
      id: 5,
      name: "Tom Cruise",
      email: "tomlovesstunt@gmail.com",
      phone: "01512345678",
      plan: "Basic",
      status: "Expired",
    },
  ]);

     const filteredMembers = members.filter((member) => {
      
      const matchesSearch = 
         member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
         member.phone.includes(searchTerm);
         
      const matchesStatus = 
        statusFilter === "All" || member.status === statusFilter;

      const matchesPlan = 
        planFilter === "All" || member.plan === planFilter;
       
        return matchesSearch && matchesStatus && matchesPlan;
    });
      

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="ml-64">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Members
              </h1>

              <p className="text-gray-500 mt-1">
                Manage all gym members
              </p>
            </div>

            <button
               onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700"
            >
             + Add Member
            </button>

          </div>

          {showForm && (
  <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

    <div className="flex items-center justify-between mb-6">

      <h2 className="text-xl font-semibold text-gray-800">
        {editingMember ? "Edit Member" : "Add New Member"}
      </h2>

      <button
        onClick={() => setShowForm(false)}
        className="text-gray-500 hover:text-gray-800 text-xl"
      >
        ✕
      </button>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>

        <input
          type="text"
          value={newMember.name}
          onChange={(e) =>
            setNewMember({
              ...newMember,
              name: e.target.value,
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
          value={newMember.email}
          onChange={(e) =>
            setNewMember({
              ...newMember,
              email: e.target.value,
            })
          }
          placeholder="Enter email"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>

        <input
          type="text"
          value={newMember.phone}
          onChange={(e) =>
            setNewMember({
              ...newMember,
              phone: e.target.value,
            })
          }
          placeholder="Enter phone number"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Plan */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Membership Plan
        </label>

        <select
          value={newMember.plan}
          onChange={(e) =>
            setNewMember({
              ...newMember,
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

    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-3 mt-6">

      <button
        onClick={() => {
          setShowForm(false);
          setEditingMember(null);
          setNewMember({
            name: "", email: "", phone: "", plan: "Basic",
          });
        }}
        className="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100"
      >
        Cancel
      </button>

      <button
  onClick={() => {
    if (editingMember) {

      // Update existing member
      setMembers(
        members.map((member) =>
          member.id === editingMember.id
            ? {
                ...member,
                name: newMember.name,
                email: newMember.email,
                phone: newMember.phone,
                plan: newMember.plan,
              }
            : member
        )
      );


    } else {

      // Add new member
      const member = {
        id: members.length + 1,
        name: newMember.name,
        email: newMember.email,
        phone: newMember.phone,
        plan: newMember.plan,
        status: "Active",
      };

      setMembers([...members, member]);
    }

    

    // Reset form
    setNewMember({
      name: "",
      email: "",
      phone: "",
      plan: "Basic",
    });

    setEditingMember(null);
    setShowForm(false);
  }}
  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
>
  {editingMember ? "Save Changes" : "Add Member"}
</button>

    </div>

  </div>
)}

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm p-5 mb-6">

            <div className="flex gap-4">

              <input
                type="text"
                placeholder="Search members..."
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select 
                   value={statusFilter}
                   onChange={(e) => setStatusFilter(e.target.value)}
                   className="px-4 py-2.5 border border-gray-300 rounded-lg"
                   >
                <option value = "All">All Status</option>
                <option value = "Active">Active</option>
                <option value = "Expired">Expired</option>
              </select>

              <select
                value={planFilter}
                onChange={(e) => setPlanFilter(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg"
               >
                <option value="All">All Plans</option>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>

            </div>

          </div>

          {/* Members Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">

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
                    Phone
                  </th>

                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Plan
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

                {filteredMembers.map((member) => (

                  <tr
                    key={member.id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >

                    <td className="px-6 py-4 text-sm text-gray-600">
                      #{member.id}
                    </td>

                    <td className="px-6 py-4">

                      <div>
                        <p className="font-medium text-gray-800">
                          {member.name}
                        </p>

                        <p className="text-sm text-gray-500">
                          {member.email}
                        </p>
                      </div>

                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {member.phone}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {member.plan}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          member.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {member.status}
                      </span>

                    </td>

                    <td className="px-6 py-4">


                      <button
                        onClick={() => setSelectedMember(member)}
                        className="text-blue-600 hover:text-blue-800 mr-4"
                      >
                      View
                    </button>

                     <button 
                        onClick={() =>{
                          setEditingMember(member);
                          setNewMember({
                            name: member.name, email: member.email,
                            phone: member.phone, plan: member.plan,
                          });
                          setShowForm(true);
                        }}
                     className="text-blue-600 hover:text-blue-800 mr-4"
                     >
                      Edit
                      </button>

                       <button 
                         onClick={() => setMemberToDelete(member)}
                         className="text-red-600 hover:text-red-800"
                         >
                      Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
               {selectedMember && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">

    <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6">

      {/* Modal Header */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-xl font-semibold text-gray-800">
          Member Details
        </h2>

        <button
          onClick={() => setSelectedMember(null)}
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

      </div>

      {/* Member Name */}
      <div className="flex items-center gap-4 mb-6">

        <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
          {selectedMember.name.charAt(0)}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {selectedMember.name}
          </h3>

          <p className="text-sm text-gray-500">
            {selectedMember.email}
          </p>
        </div>

      </div>

      {/* Member Information */}
      <div className="space-y-4">

        <div className="flex justify-between border-b pb-3">
          <span className="text-gray-500">
            Member ID
          </span>

          <span className="font-medium text-gray-800">
            #{selectedMember.id}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-gray-500">
            Phone
          </span>

          <span className="font-medium text-gray-800">
            {selectedMember.phone}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-gray-500">
            Membership Plan
          </span>

          <span className="font-medium text-gray-800">
            {selectedMember.plan}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-gray-500">
            Status
          </span>

          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              selectedMember.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {selectedMember.status}
          </span>
        </div>

      </div>

      {/* Close Button */}
      <div className="flex justify-end mt-6">

        <button
          onClick={() => setSelectedMember(null)}
          className="px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
        >
          Close
        </button>

      </div>

    </div>

  </div>
)}

{memberToDelete && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">

    <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">

        <h2 className="text-xl font-semibold text-gray-800">
          Delete Member
        </h2>

        <button
          onClick={() => setMemberToDelete(null)}
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

      </div>

      {/* Message */}
      <p className="text-gray-600 mb-2">
        Are you sure you want to delete this member?
      </p>

      <p className="font-semibold text-gray-800 mb-6">
        {memberToDelete.name}
      </p>

      {/* Buttons */}
      <div className="flex justify-end gap-3">

        <button
          onClick={() => setMemberToDelete(null)}
          className="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setMembers(
              members.filter(
                (member) => member.id !== memberToDelete.id
              )
            );

            setMemberToDelete(null);
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

export default Members;