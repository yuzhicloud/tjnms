import React, { useState, createContext, ReactNode } from 'react';

// Renaming the type
type SidebarContextType = {
  sidebarToggle: boolean; // Assuming the type should be boolean
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

// Keeping the constant name as is
export const SidebarContext = createContext<SidebarContextType>({} as SidebarContextType);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return <SidebarContext.Provider value={{ sidebarToggle, toggleSidebar, closeSidebar }}>{children}</SidebarContext.Provider>;
};
