const Info = ({ title, value, highlight }) => {
  return (
    <div>
      <p className="text-gray-400 text-xs mb-1">{title}</p>
      <p
        className={`font-medium ${
          highlight ? "text-teal-600" : "text-gray-700"
        }`}
      >
        {value}
      </p>
    </div>
  );
};