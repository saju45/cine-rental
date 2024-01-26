import { useContext, useState } from "react";
import sun from "./assets//icons/sun.svg";
import moon from "./assets/icons/moon.svg";
import logo from "./assets/logo.svg";
import ring from "./assets/ring.svg";
import shoping from "./assets/shopping-cart.svg";
import CardDetails from "./cine/CardDetails";
import { MovieContext, ThemeContext } from "./context";
export default function Header() {
  const [showCard, setShowCard] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const { cardData } = state;
  const handleCardClose = () => {
    setShowCard(false);
  };
  return (
    <header>
      {showCard && <CardDetails onClose={handleCardClose} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCard(true)}
            >
              <img src={shoping} width="24" height="24" alt="" />
              {cardData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cardData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
