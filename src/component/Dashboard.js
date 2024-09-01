import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Student from "./Student";
import Staff from "./Staff";
import Admin from "./Admin";
const Dashboard = () => {
    const [role,setrole]=useState("");
    const navigate = useNavigate();
    useEffect(() => {
      // Get the role from cookies
      const cookieRole = Cookies.get("role");
      if (cookieRole) {
          setrole(cookieRole); // Set the role from the cookie if it exists
      } else {
          // Redirect to login page if role cookie is not found
          navigate("/login"); // Change "/login" to your actual login route
      }
  }, [navigate]); // Include navigate in the dependency array

  // Check if the user is already on the login page and has a role
  useEffect(() => {
      if (role) {
          // Redirect to the dashboard if the user is logged in
          navigate("/dashboard"); // Change "/dashboard" to your actual dashboard route
      }
  }, [role, navigate]); // Include role and navigate in the dependency array
  return (
    <div>
      {role === "student" && <Student />}
      {role === "staff" && <Staff />}
      {role === "admin" && <Admin />}
    </div>
  );
};

export default Dashboard;
