import { createContext, useContext } from "react";

// Define the types for the context
type User = {
  name: string;
  email: string;
  password: string;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  update: (email: string, updatedUserData: Partial<User>) => Promise<void>;
  deleteUser: (email: string) => Promise<void>;
  getByEmail: (email: string) => Promise<User | null>;
};

// Create the User Context
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

// Custom hook to use UserContext
export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
