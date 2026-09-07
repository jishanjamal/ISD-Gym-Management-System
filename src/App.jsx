import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import AdminDashboard from "./pages/AdminDashboard";
import Members from "./pages/Members";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Trainers from "./pages/Trainers";
import Attendance from "./pages/Attendance";
import ScanAttendance from "./pages/ScanAttendance";
import Memberships from "./pages/Memberships";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import MemberDashboard from "./pages/MemeberDashboard";
import MemberWorkout from "./pages/MemberWorkout";
import MemberHealthDiet from "./pages/MemberHealthDiet";
import MemberProgress from "./pages/MemberProgress";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Admin Dashboard */}
        <Route path="/dashboard" element={<AdminDashboard />} />

        {/* Members Page */}
        <Route path="/members" element={<Members />} />

        <Route path = "/trainers" element = {<Trainers />} />

        <Route path="/register" element = {<Register />}/>

        <Route path="/forgot-password" element = {<ForgotPassword />} />
           
        <Route path = "/attendance" element = {<Attendance />} />

        <Route path = "/scan-attendance" element = {<ScanAttendance />} />
        
        <Route path = "/memberships" element ={<Memberships />}/>

        <Route path = "/payments" element = {<Payments />} />

        <Route path = "/reports" element = {<Reports />} />

        <Route path = "/settings" element = {<Settings />}/>

        <Route path = "/member-dashboard" element = {<MemberDashboard />} />
      
        <Route path = "/member-workout" element = {<MemberWorkout />}/>
      
        <Route path = "/member-health-diet" element = {<MemberHealthDiet />}/>
        
        <Route path = "/member-progress" element = {<MemberProgress />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;