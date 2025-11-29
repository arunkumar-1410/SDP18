import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

import FarmerLogin from './pages/FarmerLogin';
import FarmerDashboard from './pages/FarmerDashboard';

import BuyerLogin from './pages/BuyerLogin';
import BuyerDashboard from './pages/BuyerDashboard';

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            overflow: "auto"   // keeps dashboards scrollable
          }}
        >
          <Routes>

            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* ADMIN */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* FARMER */}
            <Route path="/farmer" element={<FarmerLogin />} />
            <Route path="/farmer/dashboard" element={<FarmerDashboard />} />

            {/* BUYER */}
            <Route path="/buyer" element={<BuyerLogin />} />
            <Route path="/buyer/dashboard" element={<BuyerDashboard />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
