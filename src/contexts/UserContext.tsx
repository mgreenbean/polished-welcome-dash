
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'pending' | 'info' | 'success';
}

interface UserContextType {
  userName: string;
  notifications: Notification[];
  notificationCount: number;
  setUserName: (name: string) => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  clearNotifications: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState('John Doe');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Ticket Sale",
      message: "Your Lakers vs Warriors tickets sold!",
      time: "2 mins ago",
      type: 'success'
    },
    {
      id: 2,
      title: "Price Alert",
      message: "Concert tickets price dropped by 15%",
      time: "1 hour ago",
      type: 'info'
    },
    {
      id: 3,
      title: "Review Needed",
      message: "Please review your listing for accuracy",
      time: "3 hours ago",
      type: 'pending'
    }
  ]);

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const newNotification = {
      ...notification,
      id: notifications.length + 1
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const value = {
    userName,
    notifications,
    notificationCount: notifications.length,
    setUserName,
    addNotification,
    clearNotifications
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
