import { useState } from "react";
import axios from "axios";
import { UserContext } from "../utils/UserContext"; // Import the context
import { useNavigate } from "react-router-dom";

type User = {
  name: string;
  email: string;
  password: string;
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const API_BASE_URL = "http://localhost:3001/api"; // Change this to your API URL

  // Login method
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      setUser(response.data.user);
      if (response.status === 200) {
        localStorage.setItem("email", email);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  // Register method
  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        name,
        email,
        password,
      });
      setUser(response.data.user);
      if (response.status === 200) {
        localStorage.setItem("email", email);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };

  // Update method
  const update = async (email: string, updatedUserData: Partial<User>) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/users/update`, {
        email,
        ...updatedUserData,
      });
      setUser(response.data.user);
      if (response.status === 200) {
        localStorage.setItem("email", email);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  // Delete user method
  const deleteUser = async (email: string) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/users/delete`, {
        params: { email },
      });
      setUser(null);
      if (response.status === 200) {
        localStorage.removeItem("email");
        navigate("/");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  };

  // Get user by email method
  const getByEmail = async (email: string): Promise<User | null> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/getByEmail`, {
        params: { email },
      });
      if (response.status === 200) {
        localStorage.setItem("email", email);
      }
      return response.data.user;
    } catch (error) {
      console.error("Error fetching user by email:", error);
      return null;
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, login, register, update, deleteUser, getByEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
