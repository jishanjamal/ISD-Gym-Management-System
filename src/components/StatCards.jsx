function StatCard({ title, value, description }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        {value}
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        {description}
      </p>

    </div>
  );
}

export default StatCard;