import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";
import { cardReducer, initialState } from "./reducers/CardReducer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cardReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
