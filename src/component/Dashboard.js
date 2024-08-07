import React, { useState } from "react";
import Student from "./Student";
import Staff from "./Staff";
import Admin from "./Admin";
const Dashboard = () => {
    const [role,setrole]=useState("admin");
  return (
    <div>
      {role === "student" && <Student />}
      {role === "staff" && <Staff />}
      {role === "admin" && <Admin />}
    </div>
  );
};

export default Dashboard;
