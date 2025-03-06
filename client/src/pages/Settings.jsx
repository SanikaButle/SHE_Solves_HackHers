import { FaUserEdit, FaBell, FaLock, FaSignOutAlt, FaArrowLeft } from "react-icons/fa";

const Settings = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh", width: "100vw", padding: "20px" }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Settings</h2>
        <button className="bg-black text-white px-3 py-1 rounded-lg flex items-center gap-2">
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Settings Options */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <FaUserEdit className="text-gray-700 text-lg" />
              <p className="font-semibold">Edit Profile</p>
            </div>
            <span className="text-gray-500">{">"}</span>
          </div>

          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <FaBell className="text-gray-700 text-lg" />
              <p className="font-semibold">Notification Settings</p>
            </div>
            <span className="text-gray-500">{">"}</span>
          </div>

          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <FaLock className="text-gray-700 text-lg" />
              <p className="font-semibold">Privacy Settings</p>
            </div>
            <span className="text-gray-500">{">"}</span>
          </div>

          {/* Logout */}
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow cursor-pointer text-red-600">
            <div className="flex items-center gap-3">
              <FaSignOutAlt className="text-red-600 text-lg" />
              <p className="font-semibold">Logout</p>
            </div>
            <span className="text-red-600">{">"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;