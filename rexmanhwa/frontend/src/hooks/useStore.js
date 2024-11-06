import { useContext } from "react";
import StoreContext from "../context/Store";

export const useStore = () => {
  return useContext(StoreContext);
};
