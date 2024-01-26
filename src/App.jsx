import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import MovieList from "./cine/MovieLIst";
import { MovieContext } from "./context";
export default function App() {
  const [cardData, setCardData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cardData, setCardData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </div>
        </main>

        <Footer />
      </MovieContext.Provider>
    </>
  );
}
