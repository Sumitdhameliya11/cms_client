import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "../css/sidebar.css";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LogoutIcon from "@mui/icons-material/Logout";
import CastForEducationRoundedIcon from "@mui/icons-material/CastForEducationRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Link, useLocation, useNavigate } from "react-router-dom/dist";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";
import FeedbackIcon from "@mui/icons-material/Feedback";
import VisibilityIcon from "@mui/icons-material/Visibility";
import logo from "../image/logo.jpeg";
import Loader from "./Loader";
import AxiosInstance from "../api/Axiosinstance";
import Cookies from "js-cookie";
const DashSidebar = ({ activeTab, setActiveTab, userType }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  //   const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  //when user click any fields sidbar is not diplay
  const handleMenuClick = () => {
    setIsSidebarOpen(false); // Close sidebar when menu item is clicked
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  //   //logout api calling
  const logout = async () => {
    const userconfirm = window.confirm("Are you sure you want to log out?");
    if (!userconfirm) {
      return;
    }

    try {
      const res = await AxiosInstance.delete("/User/logout.php");
      if (res.data.status === "success") {
        Cookies.remove('user_id');
        Cookies.remove('email');
        Cookies.remove('role');
        navigate("/Login");
      } else {
        alert("Logout failed: " + res.data.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to log out. Please try again.");
    }
  };
  const studentMenuItems = [
    {
      name: "add-complaint",
      icon: AddCircleIcon,
      title: "Add Compalint",
    },
    {
      name: "reset-password",
      icon: VpnKeyIcon,
      title: "Reset Password",
    },
    {
      name: "feedback",
      icon: FeedbackIcon,
      title: "Feed Back",
    },
  ];

  const staffMenuItems = [
    {
      name: "show-complaint",
      icon: VisibilityIcon,
      title: "Show Complaint",
    },
    {
      name: "reset-password",
      icon: VpnKeyIcon,
      title: "Reset Password",
    },
  ];
  const AdminMenuItems = [
    {
      name: "add-admin",
      icon: PersonIcon,
      title: "Add Admin",
    },
    {
      name: "staff",
      icon: ApartmentIcon,
      title: "Staff Registration",
    },
    {
      name: "add-student",
      icon: BookmarkIcon,
      title: "Student Registration",
    },
    {
      name: "show-complaint",
      icon: CastForEducationRoundedIcon,
      title: "Show Complaint",
    },
    {
      name: "reset-password",
      icon: VpnKeyIcon,
      title: "Reset Password",
    },
  ];
  let menuItems;
  switch (userType) {
    case "student":
      menuItems = studentMenuItems;
      break;
    case "staff":
      menuItems = staffMenuItems;
      break;
    case "admin":
      menuItems = AdminMenuItems;
      break;
    default:
  }
  useEffect(() => {
    // Show loader on location change
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout); // Cleanup timeout on unmount or location change
  }, [location]);
  return (
    <>
      <Loader showimg={loading} />
      <header className="px-1 d-md-none d-lg-none d-xl-none border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <img src={logo} alt="TechMe logo" height="60" className="my-2" />
          <button
            className="toggle btn d-md-none d-lg-none d-xl-none m-1 mt-2 border"
            onClick={toggleSidebar}
            style={{
              zIndex: "11",
            }}
          >
            ☰
          </button>
        </div>
      </header>
      <Sidebar
        className={`app sidebar ${isSidebarOpen ? "open" : ""}`}
        style={{ outline: "none", zIndex: "-1", position: "fixed" }}
      >
        <Menu>
          <Link to="/Dashboard" style={{ textDecoration: "none" }}>
            <MenuItem className="menu1 my-4 d-none d-md-block d-flex flex-column text-center text-decoration-none">
              <img src={logo} alt="TechMe-logo" height="60" />
              <p
                className=" text-decoration-none fs-6 fw-bold text-primary"
                style={{ textDecoration: "none" }}
              >
                Sutex Complaint System
              </p>
            </MenuItem>
          </Link>

          {menuItems.map((val, idx) => {
            return (
              <MenuItem
                key={idx}
                icon={
                  <val.icon style={{ color: "#0B60B1" }} className="shadow" />
                }
                className={activeTab === val.name ? "active-menu active" : ""}
                onClick={() => {
                  setActiveTab(val.name);
                  handleMenuClick();
                }}
              >
                {val.title}
              </MenuItem>
            );
          })}
          <MenuItem
            icon={
              <LogoutIcon style={{ color: "#0B60B1" }} className="shadow" />
            }
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default DashSidebar;
