function MemberNavbar({ setActiveSection }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      
      <h2 className="text-xl font-semibold text-gray-800">
        Member Portal
      </h2>

      <div
        onClick={() => setActiveSection("profile")}
        className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition"
      >
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
          M
        </div>

        <div>
          <p className="text-sm font-medium text-gray-800">
            Member
          </p>

          <p className="text-xs text-gray-500">
            Member Account
          </p>
        </div>
      </div>

    </header>
  );
}

export default MemberNavbar;