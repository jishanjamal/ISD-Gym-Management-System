function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-64 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="text-gray-600 hover:text-gray-900">
          🔔
        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-800">
              Admin
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
