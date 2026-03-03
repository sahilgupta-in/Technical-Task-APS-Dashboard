import { Search, FlaskConical, FileText, CheckCircle, Bug } from "lucide-react";

export default function ScanPage() {
  const steps = [
    { icon: Search, label: "Spidering", active: true },
    { icon: Bug, label: "Mapping" },
    { icon: FlaskConical, label: "Testing" },
    { icon: CheckCircle, label: "Validating" },
    { icon: FileText, label: "Reporting" },
  ];

  const findings = [
    {
      level: "Critical",
      color: "bg-red-600 dark:bg-red-900 text-white dark:text-red-400",
      title: "SQL Injection in Authentication Endpoint",
      endpoint: "/api/users/profile",
    },
    {
      level: "High",
      color:
        "bg-orange-600 dark:bg-orange-900 text-white dark:text-orange-400",
      title: "Unauthorized Access to User Metadata",
      endpoint: "/api/auth/login",
    },
    {
      level: "Medium",
      color:
        "bg-yellow-600 dark:bg-yellow-900 text-white dark:text-yellow-400",
      title: "Broken Authentication Rate Limiting",
      endpoint: "/api/search",
    },
  ];

  const metaData = [
    { label: "Scan Type", value: "Grey Box" },
    { label: "Targets", value: "google.com" },
    { label: "Started At", value: "Nov 22, 09:00AM" },
    { label: "Credentials", value: "2 Active" },
    { label: "Files", value: "Control.pdf" },
    { label: "Checklists", value: "40/350", highlight: true },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-zinc-900 text-[#1E293B] dark:text-gray-200 font-inter">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 md:px-8 py-4 bg-white dark:bg-zinc-800 border-b dark:border-zinc-700">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Scan
          </span>
          <span className="mx-2">/</span>
          <span>Private Assets</span>
          <span className="mx-2">/</span>
          <span className="text-teal-600 dark:text-teal-400 font-medium">
            New Scan
          </span>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm border rounded-lg bg-white dark:bg-zinc-700 dark:border-zinc-600 hover:bg-gray-50 dark:hover:bg-zinc-600 transition">
            Export Report
          </button>
          <button className="px-4 py-2 text-sm rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition">
            Stop Scan
          </button>
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="px-4 md:px-8 mt-6">
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Progress */}
            <div className="w-24 h-24 rounded-full bg-[#0F172A] dark:bg-teal-600 flex flex-col items-center justify-center text-white shrink-0">
              <span className="text-xl font-semibold">0%</span>
              <span className="text-xs text-gray-300">In Progress</span>
            </div>

            {/* Steps */}
            <div className="flex items-center justify-between flex-1 max-w-3xl overflow-x-auto">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-11 h-11 flex items-center justify-center rounded-full border transition
                      ${
                        step.active
                          ? "bg-teal-500 text-white border-teal-500 shadow-md"
                          : "bg-gray-100 dark:bg-zinc-700 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-zinc-600"
                      }`}
                  >
                    <step.icon size={20} />
                  </div>
                  <span className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mt-6 text-sm">
            {metaData.map((item, i) => (
              <div key={i}>
                <p className="text-gray-400 dark:text-gray-500 text-xs mb-1">
                  {item.label}
                </p>
                <p
                  className={`font-medium ${
                    item.highlight
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIVE CONSOLE */}
      <div className="px-4 md:px-8 mt-6 mb-16 md:mb-6">
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 overflow-hidden">
          {/* Console Header */}
          <div className="flex justify-between items-center px-4 md:px-6 py-4 border-b dark:border-zinc-700">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span className="font-medium text-sm">Live Scan Console</span>
              <span className="text-xs text-gray-400">Running...</span>
            </div>
            <div className="text-gray-400 text-sm cursor-pointer">✕</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:h-[380px]">
            {/* Activity Log */}
            <div className="border-r-0 md:border-r border-b md:border-b-0 border-gray-200 dark:border-zinc-700 flex flex-col">
              <div className="flex border-b border-gray-200 dark:border-zinc-700 text-sm overflow-x-auto">
                <button className="px-4 md:px-6 py-3 text-teal-600 dark:text-teal-400 border-b-2 border-teal-500 whitespace-nowrap">
                  Activity Log
                </button>
                <button className="px-4 md:px-6 py-3 text-gray-400 dark:text-gray-500 whitespace-nowrap">
                  Verification Loops
                </button>
              </div>

              <div className="flex-1 overflow-auto bg-gray-50 dark:bg-zinc-900 p-6 text-md font- text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  [09:00:00] begin a systematic penetration test on
                  helpdesk.democorp.com. Let me start with reconnaissance and
                  enumeration.
                </p>
                <p>
                  [09:01:00] od! target is online. Now let me perform port
                  scanning to identify running services.
                </p>
                <p>
                  [09:02:00] Excellent reconnaissance results: -
                  helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web
                  server) Let me probe the web server on target first to
                  understand its structure.
                </p>
                <p>
                  [09:03:00] login page for a Help Desk Platform. I can see a
                  useful comment: "TODO: Delete the testing account
                  (test:test)". Let me test this credential. The login redirects
                  to{" "}
                </p>
                <p>[09:04:00] POST method not allowed...</p>
                <p>[09:06:00] Dashboard access verified...</p>
              </div>
            </div>

            {/* Findings */}
            <div className="p-6 overflow-auto bg-gray-50 dark:bg-zinc-900">
              <h3 className="text-sm font-medium mb-4">Finding Log</h3>

              {findings.map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 mb-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${item.color}`}
                    >
                      {item.level}
                    </span>
                    <span className="text-xs text-gray-400">10:45:23</span>
                  </div>

                  <p className="text-sm font-medium">{item.title}</p>

                  <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                    {item.endpoint}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STATUS BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-800 border-t dark:border-zinc-700 px-4 md:px-8 py-2 text-xs text-gray-500 dark:text-gray-400 flex flex-col md:flex-row justify-between gap-2 md:gap-0">
        <div className="flex gap-4">
          <span>Sub-Agents: 0</span>
          <span>Parallel Executions: 2</span>
          <span>Operations: 1</span>
        </div>

        <div className="flex gap-4">
          <span className="text-red-500">Critical: 0</span>
          <span className="text-orange-500">High: 0</span>
          <span className="text-yellow-500">Medium: 0</span>
          <span className="text-green-500">Low: 0</span>
        </div>
      </div>
    </div>
  );
}
