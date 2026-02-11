import { useEffect, useState } from "react";
import api from "../services/api/axios";
import { FiEdit, FiTrash2, FiEye, FiPlus, FiX } from "react-icons/fi";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null); // create | view | edit | delete

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  // ================= FETCH USERS =================
  const fetchUsers = async () => {
    try {
      const res = await api.post("/users/list");
      setUsers(res.data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ================= CREATE USER =================
  const handleCreate = async () => {
    try {
      await api.post("/users/create", formData);
      closeModal();
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  // ================= UPDATE USER =================
  const handleUpdate = async () => {
    try {
      await api.put(`/users/${selectedUser._id}`, formData);
      closeModal();
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  // ================= DELETE USER =================
  const handleDelete = async () => {
    try {
      await api.delete(`/users/${selectedUser._id}`);
      closeModal();
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  // ================= OPEN MODAL =================
  const openModal = (type, user = null) => {
    setModalType(type);
    setSelectedUser(user);

    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "",
        password: "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        role: "",
        password: "",
      });
    }
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedUser(null);
  };

  return (
    <div className="p-8 bg-slate-900 min-h-screen text-white">
      <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Users</h2>

          <button
            onClick={() => openModal("create")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 text-white"
          >
            <FiPlus />
            Create User
          </button>
        </div>

        {/* TABLE */}
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="p-6 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} className="border-t">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>

                  <td className="p-3 flex justify-center gap-3">
                    <button
                      onClick={() => openModal("view", user)}
                      className="text-blue-600"
                    >
                      <FiEye />
                    </button>

                    <button
                      onClick={() => openModal("edit", user)}
                      className="text-yellow-600"
                    >
                      <FiEdit />
                    </button>

                    <button
                      onClick={() => openModal("delete", user)}
                      className="text-red-600"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      {modalType && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white text-gray-800 w-full max-w-md rounded-xl shadow-xl p-6 relative">

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500"
            >
              <FiX />
            </button>

            {/* CREATE / EDIT FORM */}
            {(modalType === "create" || modalType === "edit") && (
              <>
                <h3 className="text-xl font-bold mb-4">
                  {modalType === "create" ? "Create User" : "Edit User"}
                </h3>

                <div className="space-y-4">
                  <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />

                  <input
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />

                  <input
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />

                  {modalType === "create" && (
                    <input
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full border p-2 rounded"
                    />
                  )}
                </div>

                <button
                  onClick={
                    modalType === "create" ? handleCreate : handleUpdate
                  }
                  className="mt-6 w-full bg-blue-600 text-white py-2 rounded"
                >
                  {modalType === "create" ? "Create" : "Update"}
                </button>
              </>
            )}

            {/* VIEW USER */}
            {modalType === "view" && selectedUser && (
              <>
                <h3 className="text-xl font-bold mb-4">User Details</h3>
                <p><strong>Name:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Role:</strong> {selectedUser.role}</p>
              </>
            )}

            {/* DELETE CONFIRMATION */}
            {modalType === "delete" && (
              <>
                <h3 className="text-xl font-bold mb-4 text-red-600">
                  Delete User
                </h3>

                <p>Are you sure you want to delete this user?</p>

                <button
                  onClick={handleDelete}
                  className="mt-6 w-full bg-red-600 text-white py-2 rounded"
                >
                  Confirm Delete
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
