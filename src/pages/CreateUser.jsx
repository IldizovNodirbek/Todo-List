import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editingUser = useSelector((state) => state.users.editingUser);

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setPhone(editingUser.phone);
    }
  }, [editingUser]);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "This field is required.";
    if (!email) {
      newErrors.email = "This field is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!phone) newErrors.phone = "This field is required.";
    else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Phone number must be digits only.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const newUser = {
      id: editingUser ? editingUser.id : Date.now(),
      name,
      email,
      phone,
    };

    if (editingUser) {
      await userService.updateUser(newUser);
      dispatch(updateUser(newUser));
    } else {
      await userService.createUser(newUser);
      dispatch(addUser(newUser));
    }

    navigate("/show-user");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-lg p-10 shadow-lg max-w-md w-full">
        <h2 className="text-center text-3xl font-bold mb-8">
          {editingUser ? "Edit User" : "Add User"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="font-semibold block">
            Name
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 border border-blue-500 rounded focus:outline-indigo-600 mt-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </label>
          <label className="font-semibold block">
            Email
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-blue-500 rounded focus:outline-indigo-600 mt-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </label>
          <label className="font-semibold block">
            Phone
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-5 py-3 border border-blue-500 rounded focus:outline-indigo-600 mt-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </label>
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded transition duration-300"
          >
            {editingUser ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
