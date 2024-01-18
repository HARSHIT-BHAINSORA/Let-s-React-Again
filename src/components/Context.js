import { createContext, useState } from "react";

export const CardContext = createContext("");

export const CardProvider = ({ children }) => {
  const [itemCnt, setItemCnt] = useState(0);

  const addItemHandler = () => {
    setItemCnt(itemCnt + 1);
  };

  return (
    <CardContext.Provider value={{ itemCnt, addItemHandler }}>
      {children}
    </CardContext.Provider>
  );
};
