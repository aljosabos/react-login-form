import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { ProtectedRoute } from "./routes/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router basename="/react-login-form">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
