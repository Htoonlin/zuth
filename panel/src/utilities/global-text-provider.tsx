import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type of your global state
interface GlobalTextContextProps {
  globalText: string;
  setGlobalText: React.Dispatch<React.SetStateAction<string>>;
}

// Create a context with an initial value
const GlobalTextContext = createContext<GlobalTextContextProps | undefined>(undefined);

// Create a provider component
export const GlobalTextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [globalText, setGlobalText] = useState<string>('');

  const contextValue: GlobalTextContextProps = {
    globalText,
    setGlobalText,
  };

  return (
    <GlobalTextContext.Provider value={contextValue}>
      {children}
    </GlobalTextContext.Provider>
  );
};

// Create a hook to consume the context
export const useGlobalText = () => {
  const context = useContext(GlobalTextContext);
  if (!context) {
    throw new Error('useGlobalText must be used within a GlobalTextProvider');
  }
  return context;
};
