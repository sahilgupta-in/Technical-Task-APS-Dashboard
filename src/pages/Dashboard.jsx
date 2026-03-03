import {
  Search,
  Filter,
  Columns,
  RefreshCcw,
  Ban,
  TriangleAlert,
  
} from "lucide-react";

export default function Dashboard() {
  const severityData = [
    {
      label: "Critical Severity",
      count: 86,
      color: "text-red-600 dark:text-red-400",
      change: "+2% increase than yesterday",
      Icon: Ban,
    },
    {
      label: "High Severity",
      count: 16,
      color: "text-orange-600 dark:text-orange-400",
      change: "+0.9% increase than yesterday",
      Icon: TriangleAlert,
    },
    {
      label: "Medium Severity",
      count: 26,
      color: "text-green-600 dark:text-green-400",
      change: "+0.9% decrease than yesterday",
      Icon: TriangleAlert,
    },
    {
      label: "Low Severity",
      count: 16,
      color: "text-yellow-600 dark:text-yellow-400",
      change: "+0.9% increase than yesterday",
      Icon: Ban,
    },
  ];

  const tableData = Array(6).fill({
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: [5, 12, 23, 18],
    lastScan: "4d ago",
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-200 font-inter transition-colors duration-300">
      
      {/* ================= HEADER ================= */}
      <div className="bg-white dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700 px-4 md:px-8 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Scan
          </span>
          <span>/</span>
          <span>Private Assets</span>
          <span>/</span>
          <span className="text-teal-600 dark:text-teal-400 font-medium">
            New Scan
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button className="w-full sm:w-auto px-4 py-2 text-sm border rounded-lg bg-white dark:bg-zinc-700 dark:text-gray-200 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-zinc-600 transition">
            Export Report
          </button>
          <button className="w-full sm:w-auto px-4 py-2 text-sm bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition">
            Stop Scan
          </button>
        </div>
      </div>

      {/* ================= SUMMARY ================= */}
      <div className="bg-white dark:bg-zinc-800 px-4 md:px-8 py-4 border-b border-gray-200 dark:border-zinc-700 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 text-sm text-gray-600 dark:text-gray-400">
        <span>Org: <strong className="text-gray-800 dark:text-gray-200">Project X</strong></span>
        <span>Owner: <strong className="text-gray-800 dark:text-gray-200">Namamgiri</strong></span>
        <span>Total Scans: <strong className="text-gray-800 dark:text-gray-200">100</strong></span>
        <span>Scheduled: <strong className="text-gray-800 dark:text-gray-200">1000</strong></span>
        <span>Rescans: <strong className="text-gray-800 dark:text-gray-200">100</strong></span>
        <span>Failed: <strong className="text-gray-800 dark:text-gray-200">100</strong></span>
        <span className="flex items-center gap-1">
          <RefreshCcw size={14} /> 10 mins ago
        </span>
      </div>

      {/* SEVERITY CARDS  */}
      <div className="px-4 md:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {severityData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 p-5 rounded-xl border border-gray-200 dark:border-zinc-700 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{item.label}</span>
              <div className="bg-red-100 text-red-600 dark:bg-red-100 rounded-lg p-2">
                <item.Icon size={18} />
              </div>
            </div>

            <h2 className="text-2xl font-semibold">{item.count}</h2>
            <p className={`text-xs mt-1 ${item.color}`}>{item.change}</p>
          </div>
        ))}
      </div>

      {/*  TABLE SECTION  */}
      <div className="px-4 md:px-8 pb-10">
        <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4">
          
          {/* Search + Actions */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
            <div className="relative w-full lg:w-96">
              <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search scans..."
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 dark:bg-zinc-700 dark:border-zinc-600"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg dark:bg-zinc-700 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-zinc-600 transition">
                <Filter size={14} /> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg dark:bg-zinc-700 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-zinc-600 transition">
                <Columns size={14} /> Column
              </button>
              <button className="px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
                + New Scan
              </button>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-[900px] w-full text-sm">
              <thead className="text-gray-500 dark:text-gray-400 border-b dark:border-zinc-700">
                <tr className="text-left">
                  <th className="py-3">Scan Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Vulnerability</th>
                  <th>Last Scan</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-zinc-700/50">
                    <td className="py-4 font-medium">{row.name}</td>
                    <td>{row.type}</td>
                    <td>
                      <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-md">
                        {row.status}
                      </span>
                    </td>
                    <td className="w-56">
                      <div className="flex items-center gap-3">
                        <div className="w-40 h-2 bg-gray-200 dark:bg-zinc-600 rounded-full">
                          <div className="h-2 w-full bg-teal-600 rounded-full"></div>
                        </div>
                        <span className="text-xs">{row.progress}%</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        {row.vulnerabilities.map((v, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-red-500 text-white rounded-md">
                            {v}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td>{row.lastScan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {tableData.map((row, i) => (
              <div key={i} className="border dark:border-zinc-700 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{row.name}</span>
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-2 py-1 rounded">
                    {row.status}
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Type: {row.type}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Last Scan: {row.lastScan}
                </div>
                <div className="flex gap-2">
                  {row.vulnerabilities.map((v, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-red-500 text-white rounded-md">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}