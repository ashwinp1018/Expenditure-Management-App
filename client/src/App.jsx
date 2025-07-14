import React, { useState } from "react";
import { User, Mail, Pencil } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Ashwin P",
    email: "ashwin@example.com",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    setEditMode(false);
    // backend update logic here
    alert("Profile updated!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Avatar */}
          <div className="w-24 h-24 bg-blue-600 text-white flex items-center justify-center rounded-full text-3xl font-semibold">
            {user.name.charAt(0)}
          </div>

          {/* Info */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>

          {/* Editable Fields */}
          <div className="w-full space-y-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <User size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  disabled={!editMode}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
                <Mail size={18} className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  disabled={!editMode}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none text-sm"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full flex justify-between mt-6">
            <button
              onClick={() => setEditMode(!editMode)}
              className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
            >
              <Pencil size={16} />
              {editMode ? "Cancel" : "Edit Profile"}
            </button>

            {editMode && (
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
