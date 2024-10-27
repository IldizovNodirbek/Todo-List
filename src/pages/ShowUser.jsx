import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, setUsers, updateUser } from "../redux/userSlice";
import userService from "../services/userService";
import { MdDelete, MdEdit, MdSave, MdCancel } from "react-icons/md";

const ShowUser = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersFromAPI = await userService.getUsers();
        dispatch(setUsers(usersFromAPI));
      } catch (error) {
        console.error("Foydalanuvchilarni olishda xatolik:", error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  const handleEditClick = (user) => {
    setEditMode(user.id);
    setEditData({ ...user });
  };

  const handleSaveClick = async (id) => {
    try {
      await userService.updateUser(editData);
      dispatch(updateUser(editData));
      setEditMode(null);
    } catch (error) {
      console.error("Yangilashda xatolik:", error);
    }
  };

  const handleCancelClick = () => {
    setEditMode(null);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-4">User List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="text-center border-b hover:bg-gray-100"
                >
                  <td className="px-4 py-2 border">{user.id}</td>
                  <td className="px-4 py-2 border">
                    {editMode === user.id ? (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="w-full px-2 py-1 border border-blue-500 rounded"
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {editMode === user.id ? (
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) =>
                          setEditData({ ...editData, email: e.target.value })
                        }
                        className="w-full px-2 py-1 border border-blue-500 rounded"
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    {editMode === user.id ? (
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                        className="w-full px-2 py-1 border border-blue-500 rounded"
                      />
                    ) : (
                      user.phone
                    )}
                  </td>
                  <td className="px-4 py-2 border space-x-2">
                    {editMode === user.id ? (
                      <>
                        <button
                          onClick={() => handleSaveClick(user.id)}
                          className="px-3 py-1 text-white bg-green-500 rounded hover:bg-green-600 transition duration-200"
                        >
                          <MdSave />
                        </button>
                        <button
                          onClick={handleCancelClick}
                          className="px-3 py-1 text-white bg-gray-500 rounded hover:bg-gray-600 transition duration-200"
                        >
                          <MdCancel />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => dispatch(deleteUser(user.id))}
                          className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 transition duration-200"
                        >
                          <MdDelete />
                        </button>
                        <button
                          onClick={() => handleEditClick(user)}
                          className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
                        >
                          <MdEdit />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowUser;
