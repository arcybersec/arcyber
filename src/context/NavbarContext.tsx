import React, { createContext, useContext, useState } from 'react';

interface NavbarContextProps {
    children: React.ReactNode;
}
  
interface NavbarContextValue {
    section: string;
    updateSection: (newValue: string) => void; 
}
  

export const NavbarContext = createContext<NavbarContextValue | undefined>(undefined);

export const NavbarProvider:React.FC<NavbarContextProps> = ({ children }) => {
  const [section, setSection] = useState('home');

  const updateSection = (newValue : string) => {
    setSection(newValue);
  };

  return (
    <NavbarContext.Provider value={{ section, updateSection }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};