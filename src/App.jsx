import { useState } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";
export default function App() {
  const [cardData, setCardData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cardData, setCardData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
