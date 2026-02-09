import {useNavigate} from "react-router-dom";


const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove auth data
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-lg"
    >
      Logout
    </button>
  );
};
  export default Logout;