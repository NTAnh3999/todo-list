import React, { useContext, useEffect } from "react";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { GlobalContext } from "../../context";
const ThemeButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(GlobalContext);
  useEffect(() => {
    setIsDarkMode(isDarkMode);
  }, [isDarkMode, setIsDarkMode]);
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <label htmlFor="checkbox" className="label">
        <BsFillMoonFill fill="#1f2937" />
        <BsSun fill="#f59e0b" />
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ThemeButton;
