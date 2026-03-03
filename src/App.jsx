import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Scan from "./pages/Scan";
import Schedule from "./pages/Schedule";
import Signup from "./pages/Signup";

import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="scan" element={<Scan />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projectsDetail" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
