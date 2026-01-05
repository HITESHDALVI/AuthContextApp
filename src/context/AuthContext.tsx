import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type User = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async (): Promise<void> => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser) as User);
      }
    } catch (error) {
      console.error('Failed to load user', error);
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    const storedUser = await AsyncStorage.getItem('user');

    if (!storedUser) {
      throw new Error('User not found');
    }

    const parsedUser = JSON.parse(storedUser) as User;

    if (parsedUser.email !== email || parsedUser.password !== password) {
      throw new Error('Invalid credentials');
    }

    setUser(parsedUser);
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
  ): Promise<void> => {
    const newUser: User = { name, email, password };
    await AsyncStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = async (): Promise<void> => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
