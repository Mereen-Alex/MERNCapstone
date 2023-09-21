import React, { createContext, useState, useEffect } from "react";
import {
  getUser,
  login as loginUser,
  register as registerUser,
  logout as logoutUser,
  updateProfile as updateUserProfile,
} from "./api/userApi";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const userData = await loginUser(email, password);
      setUser(userData);
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const register = async (registerData) => {
    try {
      const userData = await registerUser(registerData);
      setUser(userData);
    } catch (error) {
      console.error("Registration failed", error);
      throw error;
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  const updateProfile = async (updatedUser) => {
    try {
      const userData = await updateUserProfile(updatedUser);
      setUser(userData);
    } catch (error) {
      console.error("Profile update failed", error);
      throw error;
    }
  };

  useEffect(() => {
    const storedUser = getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, register, logout, updateProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
