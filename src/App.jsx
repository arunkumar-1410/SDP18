import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import FarmerLogin from "./pages/FarmerLogin";
import BuyerLogin from "./pages/BuyerLogin";
import AdminDashboard from "./pages/AdminDashboard";
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN AREA */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: isHome ? "hidden" : "auto", // Home = no scroll, others scroll
          overflowX: "hidden",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Logins */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/farmer" element={<FarmerLogin />} />
          <Route path="/buyer" element={<BuyerLogin />} />

          {/* Dashboards */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          padding: "10px 24px",
          background: "#1b5e20",
          color: "#ffffff",
          fontSize: "0.9rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily:
            '"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <span>© 2025 Harvestly · Supporting Rural Entrepreneurship</span>

        <span>
          📧 harvestly@support.com &nbsp; | &nbsp; 📞 +91-98765-43210
        </span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
