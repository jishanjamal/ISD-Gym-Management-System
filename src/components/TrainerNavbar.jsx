function TrainerNavbar() {
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

      {/* Trainer Profile */}
      <div className="flex items-center gap-4">
        
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">
            Trainer
          </p>

          <p className="text-xs text-gray-500">
            Fitness Trainer
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          T
        </div>

      </div>
    </header>
  );
}

export default TrainerNavbar;