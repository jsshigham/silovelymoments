import React, { createContext, ReactNode, useContext, useState } from "react";

interface MyContextProps {
  screenWidth: number;
  setScreenWidth: React.Dispatch<React.SetStateAction<number>>;
  isNavBarOpen: boolean;
  setIsNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextProps | null>(null);

export const useMyContext = (): MyContextProps => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(
    window.innerWidth || 0
  );
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth || 0);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const contextValue: MyContextProps = {
    screenWidth,
    setScreenWidth,
    isNavBarOpen,
    setIsNavBarOpen,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContext;
