const Step = ({ icon, title, active }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center 
        ${active ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-400"}`}
      >
        {icon}
      </div>
      <p
        className={`text-sm ${
          active ? "text-teal-600 font-medium" : "text-gray-400"
        }`}
      >
        {title}
      </p>
    </div>
  );
};