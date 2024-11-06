import { createContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // const [searchManga, setSearchManga] = useState("");
  // const [searchLoading, setSearchLoading] = useState(false);
  const [allMangaData, setAllMangaData] = useState([]);

  return (
    <StoreContext.Provider value={{ allMangaData, setAllMangaData }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
