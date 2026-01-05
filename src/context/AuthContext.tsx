import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type User = {
  name: string;
  email: string;
  password: string;
  loggedIn: Boolean;
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
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser) as User;
      if (parsedUser.loggedIn) {
        setUser(parsedUser);
      }
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    const storedUser = await AsyncStorage.getItem('user');
    if (!storedUser) throw new Error('User not found');
    const parsedUser = JSON.parse(storedUser) as User;
    if (parsedUser.email !== email || parsedUser.password !== password) {
      throw new Error('Invalid credentials');
    }
    const updatedUser: User = {
      ...parsedUser,
      loggedIn: true,
    };
    await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
  ): Promise<void> => {
    const newUser: User = {
      name,
      email,
      password,
      loggedIn: false,
    };
    await AsyncStorage.setItem('user', JSON.stringify(newUser));
  };
  const logout = async (): Promise<void> => {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser) as User;
      const updatedUser = { ...parsedUser, loggedIn: false };
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
