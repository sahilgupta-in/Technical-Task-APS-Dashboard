const Finding = ({ severity, title, endpoint, color }) => {
  const colorMap = {
    red: "bg-red-100 text-red-600",
    orange: "bg-orange-100 text-orange-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center mb-2">
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${colorMap[color]}`}
        >
          {severity}
        </span>
        <span className="text-xs text-gray-400">10:45:23</span>
      </div>

      <p className="text-sm font-medium text-gray-800 mb-1">{title}</p>
      <p className="text-xs text-teal-600">{endpoint}</p>
      <p className="text-xs text-gray-400 mt-2">
        Description of the vulnerability detected during testing.
      </p>
    </div>
  );
};