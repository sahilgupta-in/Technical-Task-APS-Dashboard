const ProtectedRoute = ({ children }) => {
  // Authentication bypassed - always render children
  return children;
};

export default ProtectedRoute;

