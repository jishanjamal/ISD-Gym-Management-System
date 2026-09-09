function MemberNavbar({ setActiveSection }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      
      <h2 className="text-xl font-semibold text-gray-800">
        Member Portal
      </h2>

     
<button
  onClick={() => setActiveSection("profile")}
  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer group"
>
  
  {/* Profile Icon */}
  <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
    M
  </div>

  {/* Account Text */}
  <div className="text-left">

    <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
      Member Account
    </p>

    <p className="text-xs text-gray-500">
      View Profile
    </p>

  </div>

  {/* Arrow */}
  <span className="text-gray-400 group-hover:text-blue-600 ml-1">
    →
  </span>

</button>



    </header>
  );
}

export default MemberNavbar;